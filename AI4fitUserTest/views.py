from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt

from django.http import HttpResponse
from django.utils import six

from joblib import load
import numpy as np
from random import randint
from datetime import datetime

import pandas as pd
import sklearn
import json, codecs, time

columns = ['o_distance', 'p_unknown', 'p_walking', 'p_running', 'r_time',
               'r_speed', 'r_distance', 'r_pace', 'o_pace', 'o_time',
               'p_welldone', 'weight_situation', 'age', 'height', 'weight',
               'gender', 'bmi', 'calories', 'p_has_objective', 'd_pace_std',
               'd_pace_mean', 'd_time', 'd_distance', 'd_pace_var']


def normalize(x, meanVal, minValue, maxVal):
    return (x - meanVal) / (maxVal - minValue)


def createFeatureList(startingList, normValues):
    normalizedList = []
    for idx in range(len(startingList)):
        if columns[idx] == "bmi" or columns[idx] == "weight_situation" or columns[idx] == "gender":
            normalizedList.append(startingList[idx])
        else:
            normalizedList.append(normalize(startingList[idx], normValues[idx][0], normValues[idx][1], normValues[idx][2]))
    return normalizedList


def computeVariation(features, featureIdx, direction, mark, normValues, model):
    if (mark == 5 and direction == 1)or(mark == 1 and direction == 0):
        return [-1.0, -1.0]
    else:
        left = 0
        right = 0
        newValue = -9999999
        newPrediction = -1.0
        found = False
        if direction == 0:
            left = normValues[featureIdx][1]
            right = features[featureIdx]
            for iteration in range(20):
                newList = features.copy()
                if(right-left) != 0:
                    currentValue = (right-left/2)
                else:
                    currentValue = right
                newList[featureIdx] = currentValue
                newFrame = pd.DataFrame(createFeatureList(newList, normValues), columns)
                prediction = -1
                if model == "random":
                    prediction = randint(1, 5)
                else:
                    prediction = model.predict(newFrame.T)
                    prediction = prediction[0]
                if prediction != mark:
                    left = currentValue
                    newValue = currentValue
                    newPrediction = prediction
                    found = True
                else:
                    right = currentValue
            if found:
                return [newValue, newPrediction]
            else:
                return [-1.0, -1.0]
        else:
            left = features[featureIdx]
            right = normValues[featureIdx][2]
            for iteration in range(20):
                newList = features.copy()
                if(right-left) != 0:
                    currentValue = (right-left/2)
                else:
                    currentValue = right
                newList[featureIdx] = currentValue
                newFrame = pd.DataFrame(createFeatureList(newList, normValues), columns)
                prediction = -1
                if model == "random":
                    prediction = randint(1, 5)
                else:
                    prediction = model.predict(newFrame.T)
                    prediction = prediction[0]
                if prediction != mark:
                    right = currentValue
                    newValue = currentValue
                    newPrediction = prediction
                    found = True
                else:
                    left = currentValue
            if found:
                return [newValue, newPrediction]
            else:
                return [-1.0, -1.0]



@csrf_exempt
def evaluate(request):
    if request.method == 'POST':
        features = list(six.iterlists(request.POST))[0][1]
        features = list(map(float, features))
        modelType = int(list(six.iterlists(request.POST))[1][1][0])
        normValues = []
        for num in range(2, len(request.POST)):
            normValues.append(list(map(float, list(six.iterlists(request.POST))[num][1])))

        originalFrame = pd.DataFrame(createFeatureList(features, normValues), columns)

        if modelType == 1:
            model = load('AI4fitUserTest/static/ExtraTreesClassifier.joblib')
        elif modelType == 2:
            model = load('AI4fitUserTest/static/LogisticRegression.joblib')
        else:
            model = "random"

        if model == "random":
            mark = randint(1,5)
        else:
            mark = model.predict(originalFrame.T)[0]


        limits = []
        for featureIdx in range(12):
            for direction in range(2):
                value = computeVariation(features, featureIdx, direction, mark, normValues, model)
                limits.append(value)

        response = []
        response.append(float(mark))
        for tuple in limits:
            for val in tuple:
                response.append(float(val))

        return HttpResponse(json.dumps(response))

    return render(request, 'userTest.html')

@csrf_exempt
def saveResults(request):
    requestList = list(map(int, list(six.iterlists(request.POST))[0][1]))
    timeStamp = datetime.now()
    filename = timeStamp.strftime("%Y-%b-%d_%H-%M-%S-%f")+".csv"
    file = open("TestResults/"+filename, "w")
    line = filename
    for i in range(len(requestList)):
        line = line + "," + str(requestList[i])
    headLine = 'index,UserMark0,UserMark1,UserMark2,UserMark3,UserMark4,RealMark0,RealMark1,RealMark2,RealMark3,' \
               'RealMark4,RealMark5,RealMark6,RealMark7,RealMark8,RealMark9,WorkoutInstance0,WorkoutInstance1,' \
               'WorkoutInstance2,WorkoutInstance3,WorkoutInstance4,WorkoutInstance5,WorkoutInstance6,WorkoutInstance7' \
               ',WorkoutInstance8,WorkoutInstance9,AIModel0,AIModel1,AIModel2,AIModel3,AIModel4,AIModel5,AIModel6,' \
               'AIModel7,AIModel8,AIModel9,FeatureNumber0,FeatureNumber1,FeatureNumber2,FeatureNumber3,FeatureNumber4,' \
               'FeatureNumber5,FeatureNumber6,FeatureNumber7,FeatureNumber8,FeatureNumber9\n'

    file.write(headLine)
    file.write(line)
    file.close()
    return HttpResponse(1)
