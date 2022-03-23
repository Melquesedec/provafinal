var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
	// The type of chart we want to create
	type: 'line', // also try bar or other graph types

	// The data for our dataset
	data: {
		labels: ["Jun 2016", "Jul 2016", "Aug 2016", "Sep 2016", "Oct 2016", "Nov 2016", "Dec 2016", "Jan 2017", "Feb 2017", "Mar 2017", "Apr 2017", "May 2017"],
		// Information about the dataset
    datasets: [{
			label: "Rainfall",
			backgroundColor: 'lightblue',
			borderColor: 'royalblue',
			border: '100px',
			data: [26.4, 39.8, 66.8, 66.4, 40.6, 55.2, 77.4, 69.8, 57.8, 76, 110.8, 142.6],
		}]
	},

	// Configuration options
	options: {
    layout: {
      padding: 10,
    },
		legend: {
			position: 'bottom',
		},
		title: {
			display: true,
			text: 'Precipitation in Toronto'
		},
		scales: {
			yAxes: [{
				scaleLabel: {
					display: true,
					labelString: 'Precipitation in mm'
				}
			}],
			xAxes: [{
				scaleLabel: {
					display: true,
					labelString: 'Month of the Year'
				}
			}]
		}
	}
});

new Morris.Line({
    // ID of the element in which to draw the chart.
    element: "pushups",
    // Chart data records -- each entry in this array corresponds to a point on
    // the chart.
    data: [
      { day: "Monday", pushups: 20, beers: 2 },
      { day: "Tuesday", pushups: 10, beers: 2 },
      { day: "Wednesday", pushups: 5, beers: 3 },
      { day: "Thursday", pushups: 5, beers: 4 },
      { day: "Friday", pushups: 20, beers: 1 }
    ],
    // The name of the data record attribute that contains x-values.
    xkey: "day",
    parseTime: false,
    // A list of names of data record attributes that contain y-values.
    ykeys: ["pushups", "beers"],
    // Labels for the ykeys -- will be displayed when you hover over the
    // chart.
    labels: ["Pushups", "Beers"],
    lineColors: ["#373651", "#E65A26"]
  });
  