# djmaps/src/prediction Folder

Contains the code for backend prediction algorithms and code to allocate resources.

##fwdfiles folder

Contains the code for all backend prediction algorithms

##calculate_resource_allocation.py

Managerial code for scoring predictions made by the backend algorithms.  Runs main function compute_resource_allocation on clusters or grids depending on the user selection, and outputs the scores in the results folder.  compute_resource_allocation ingests information regarding the predictions, and scores with function fixResourceAvailable contained in fwdfiles.resourceAllocation functions.