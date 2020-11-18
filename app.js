import {
    drawChart
} from './site/mainChart.js';
import {
    algorithm,
    funct
} from './Euler.js';

const {
    xArray,
    y,
    yProizv
} = algorithm(funct);

const chart = drawChart(xArray, y);
