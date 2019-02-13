'use strict'
console.log('Loading function');

exports.handler = (event, context, callback) => {

    let min = parseInt(event.min) || 0;
    let max = parseInt(event.max) || 100;

    let generatedNumber = Math.floor(Math.random()*max) + min;

    callback(null, generatedNumber);


};
