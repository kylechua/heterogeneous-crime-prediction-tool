# Heterogeneous Crime Prediction Visualization Tool #

## Table of Contents
- [Introduction](#introduction)
- [Getting Started](#getting-started)


## Introduction

This is a crime prediction visualization tool that allows users to provide crime data, filter data, and see the process of clustering. This relies on a crime prediction method and an evaluation metric that are proposed by the [Data Science Lab at USC](https://sites.usc.edu/dslab/). Technologies/packages used: Django, Mapbox GL JS, Spectre.css, jQuery, Keras(tensorflow backend), Scikit-learn. The tool needs to be used when connected to the internet.

## Getting Started
Please follow these steps before running the code for the first time.
1. Install [Python 3](https://www.python.org/downloads/)
2. It is strongly recommended to use virtualenv to manage packages for this tool. Please see [virtualenv] for more details. If you would use virtualenv, you would need to activate it before 
3. Install required packages that are listed in `requirements.txt`. If you have [pip](https://pypi.org/project/pip/) installed, you could run `pip install -r packages.txt` to install all the packages. 
4. Start the server by `python djmaps/manage.py runserver`. The application will appear in http://127.0.0.1/index
5. Open up the browser and use the tool! There are few things to notice:
      - Please upload the data you would like to use first. The data has to be formatted in a JSON input file with the following format: `[[<Type>, <Latitude>, <Longitude>, <Date: mm/dd/yyyy>]]`
      - The sample DPS data is located in: `djmaps/maps/templates/DPSUSC.json`.
      - All the datapoints provided that are outside of the USC "border area" that we defined will be ignored.

## Developer Documentation
Developer documentation explaining significant files in the project are listed in the corresponding directory as a README.md file, which you can read when you navigate to the corresponding directory in this Github project. 
