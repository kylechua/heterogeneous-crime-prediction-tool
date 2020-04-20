let statsDone = false;

function statsButtonHookUp(map) {
    $('.stats-button')[0].classList.remove('disabled');
    $('.stats-button').click(function () {
        $('.stats-button')[0].classList.add('loading');
        $('.stats-button')[0].classList.add('loading-lrg');

        if (statsDone) { // don't make ajax call if user already did it; just show the stats modal
            document.getElementById("stats-advanced").classList.add("active");
            $('.stats-button')[0].classList.remove('loading');
        } else {
            const x = updateFilteredPoints();
            $.ajax({
                type: 'POST',
                url: 'http://localhost:8000/crimePred/stats',
                data: JSON.stringify({
                    features: x,
                    realCrimes,
                }),
                success: (response) => {
                    const crimeStats = JSON.parse(response);
                    updateStatsUI(crimeStats);
                    document.getElementById("stats-advanced").classList.add("active");
                    $('.stats-button')[0].classList.remove('loading');
                    statsDone = true;
                },
                fail: (xhr, textStatus, errorThrown) => {
                    alert(`request failed with textStatus: ${textStatus} and error:
                    ${errorThrown}`);
                    $('.stats-button')[0].classList.remove('loading');
                    statsDone = true;
                }
            });
        }
    });
}

function closeAdvancedStats() {
    document.getElementById("stats-advanced").classList.remove("active");
}

function updateStatsUI(stats) {
    document.getElementById("stats-numreports").innerHTML = stats.totalCount;
    document.getElementById("stats-date-start").innerHTML = stats.globalEarliest;
    document.getElementById("stats-date-end").innerHTML = stats.globalLatest;
    populateStatsCrimeTable(stats.crimes);
}

function populateStatsCrimeTable(crimes) {
    const crimeTable = document.getElementById("stats-crimes");
    crimeTable.innerHTML = ''; // clear

    crimes.forEach(function(stats) {
        row = document.createElement("tr");

        type = document.createElement("td");
        type.appendChild(document.createTextNode(stats.category));
        count = document.createElement("td");
        count.appendChild(document.createTextNode(stats.count));
        latest = document.createElement("td");
        latest.appendChild(document.createTextNode(stats.latest));
        proportion = document.createElement("td");
        pct = stats.proportion*100;
        proportion.appendChild(document.createTextNode(pct.toFixed(2)));


        row.appendChild(type);
        row.appendChild(count);
        row.appendChild(latest);
        row.appendChild(proportion);
        crimeTable.appendChild(row);
    });
}

document.getElementById("stats-close-advanced-primary").onclick = closeAdvancedStats;
document.getElementById("stats-close-advanced-secondary").onclick = closeAdvancedStats;