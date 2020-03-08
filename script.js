const errorElem = document.getElementById('error');
const resultsElem = document.getElementById('results');

function show(elem) {
    elem.style.display = 'block';
}

function hide(elem) {
    elem.style.display = 'block';
}

function myPrompt(message, allowZeroValue = true) {
    const input = prompt(message);
    const number = Number(input);

    if (!input) {
        show(errorElem);
        return null;
    } else if (isNaN(number)) {
        show(errorElem);
        return null;
    } else if (allowZeroValue === false && number === 0) {
        show(errorElem);
        return null;
    } else {
        return number;
    }
}

function generateArray(start, end, step) {
    const generatedArray = [];

    if (step > 0) {
        for (let i = start; i <= end; i += step) {
            generatedArray.push(i);
        }
    } else {
        for (let i = start; i >= end; i += step) {
            generatedArray.push(i);
        }
    }

    return generatedArray;
}

function calcSum(array) {
    const sum = array.reduce((sum, val) => sum + val, 0);

    return sum;
}

function getBinaries(array) {
    return array.map((number) => (number >>> 0).toString(2));
}

function init() {
    hide(errorElem);
    const start = myPrompt('Start: ');
    if (!start)
        return false;

    const end = myPrompt('End: ');
    if (!end)
        return false;

    const step = myPrompt('Step: ', false);
    if (!step)
        return false;

    const generatedArray = generateArray(start, end, step);
    const sum = calcSum(generatedArray);
    const binaries = getBinaries(generatedArray);

    document.getElementById('array').innerHTML = generatedArray.join(',');
    document.getElementById('sum').innerHTML = sum;
    document.getElementById('binary').innerHTML = binaries.join(',');


    show(resultsElem);
}

init();