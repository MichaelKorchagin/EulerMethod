/* eslint-disable */
import("@babel/core");
import("@babel/register");

import {algorithm, funct} from "../Euler";

const {
    xArray,
    y,
    // yProizv
} = algorithm(funct);

const ctx = document.getElementById('myChart').getContext('2d');
const chart = new Chart(ctx, {
    type: 'line',

    data: {
        labels: xArray,
        datasets: [{
            label: 'График',
            borderColor: 'rgb(255,99,1)',
            data: y
        }]
    },

    // Configuration:
    options: {}
});
