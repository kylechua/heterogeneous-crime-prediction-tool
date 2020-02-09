Views.py (Front-end Interaction)
---
> djmaps/src/crimePred/views.py

This file concerns itself with receiving data from the front-end, initiating clustering/forecasting and sending the results to the user.

Most of the code here is meant to piece together the results, but there are a few functions that will likely be useful to us:
- **heterogeneousCluster** - cluster the grid based off of input data and given parameters (i.e. what happens when you click 'Cluster')
- **predict** - makes a forecast (crime prediction) based off of input data and given parameters (i.e. what happens when you click 'Predict')
- **evaluate** - evaluates the effectiveness of a specific resource allocation (i.e. what happens when you click 'Evaluate')