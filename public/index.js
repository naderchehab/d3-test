var data = [4, 8, 100, 16, 23, 42];

draw();
bindEvents();

function draw() {
    var x = d3.scale.linear()
        .domain([0, 100])
        .range([0, 1000]);

    var chart = d3.select('.chart')
        .selectAll('div')
        .data(data);

    chart.enter()
        .append('div');

    chart.style('width', function(d) {
            return x(d) + 'px';
        })
        .text(function(d) {
            return d;
        });
}

function bindEvents() {
    var button = document.querySelector('button');
    button.addEventListener('click', buttonClick);
}

function buttonClick() {
    data = data.map(function() {
        var val = Math.floor(Math.random() * 100);
        return val;
    });
    draw();
}
