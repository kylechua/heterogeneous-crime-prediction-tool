from collections import Counter, defaultdict
import datetime

# return a tuple of (stats <dict>, total <int>)
def get_crime_stats(data):
    counts = Counter()
    latest = dict()
    global_earliest, global_latest = format_from_datestr("12/12/99"), format_from_datestr("01/01/00")
    for index, row in data.iterrows():
        category, datestr = row["Category"], row["Date"]
        date = format_from_datestr(datestr)
        counts[category] += 1
        # see if this is the latest report of its type
        if (category not in latest) or (date > latest[category]):
            latest[category] = date
        if date > global_latest:
            global_latest = date
        if date < global_earliest:
            global_earliest = date

    stats = dict()

    #general stats
    stats["totalCount"] = sum(counts.values())
    stats["globalEarliest"] = format_to_datestr(global_earliest)
    stats["globalLatest"] = format_to_datestr(global_latest)

    #crime specific stats
    stats["crimes"] = condense_crime_stats(counts, latest, stats["totalCount"])
    return stats

# input: MM/DD/YY
# output: datetime object
def format_from_datestr(datestr):
    mm_dd_yy = datestr.split("/")
    year = 2000 + int(mm_dd_yy[2])
    month = int(mm_dd_yy[0])
    day = int(mm_dd_yy[1])
    return datetime.date(year, month, day)

# input: datetime.date object
# output: MM/DD/YYYY (change this if necessary)
def format_to_datestr(date):
    return date.strftime("%m/%d/%Y")

# create a dict which maps each crime to their count and latest values
# TODO: add functionality to sort by diff categories (might be easier to do this on the front-end)
def condense_crime_stats(counts, latest, total_count):
    crimes = []
    # assume counts and latest have the exact same set of keys
    for category in counts.keys():
        crime = dict()
        crime["category"] = category
        crime["count"] = counts[category]
        crime["latest"] = format_to_datestr(latest[category])
        crime["proportion"] = counts[category] / float(total_count)
        crimes.append(crime)

    # DEFAULT: sort by count
    return sorted(crimes, key = lambda i: i["count"], reverse=True)
