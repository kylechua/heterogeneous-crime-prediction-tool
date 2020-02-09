# Documentation for Server files
Located at heterogeneous-crime-prediction-tool/djmaps/server/

## heterogeneous-crime-prediction-tool/djmaps/server/settings.py
This file hosts the Django settings for djmaps project.

## heterogeneous-crime-prediction-tool/djmaps/server/urls.py
This file has a list of routes from URLs to views. Views are Django representations of a webpage. When you're adding a new view, add a new entry in the views list. If you're modifying the route of an existing route, edit the corresponding list in `urlpatterns`.

There are currently 3 paths
1. Default path `'/'`: `maps.urls`
2. Path `'crimePred/'`: `src.crimePred.urls`
3. Path `'admin/'`: `admin.site.urls`

## heterogeneous-crime-prediction-tool/djmaps/server/wsgi.py
This file hosts the WSGI config for djmaps project. WSGI stands for Web Server Gateway Interface. It is a specification that describes how a web server communicates with web applications, and how web applications can be chained together to process one request.
