var ACTIVITIES = [
    {name: 'side-projects', time: 10, xp: 20},
    {name: 'algorithms', time: 3, xp:5}, 
    {name: 'networking', time: 1, xp: 0.5},
    {name: 'exercise', time: 2, xp: 1.5}, 
    {name: 'systems design', time: 4, xp: 4}, 
    {name: 'making CSS codepens', time: 3, xp: 4}
];

var findJob = function(time, activities) {
	var maxVal = -Infinity;
	var max = null;

	var findCombos = function(items, prefix) {
		if(!prefix) {
			prefix = [];
		}
		var combo = prefix;
        for(var i = 0; i < items.length; i++) {
            combo.push(items[i]);

            var xp = totalXp(combo);
            if(xp > maxVal && totalTime(combo) <= time) {
            	maxVal = xp;
            	max = combo;
            }
            findCombos(items.slice(i + 1), combo);
        }
	};

	var totalXp = function(acts) {
		acts.reduce(function(total, act) {
			total + act.xp
		}, 0);
	};
	var totalTime = function(acts) {
		acts.reduce(function(total, act) {
			total + act.time;
		}, 0);
	}

	findCombos(activities);
		return max.map(function(act) {
			act.name
		});
}
console.log(findJob(10, ACTIVITIES));