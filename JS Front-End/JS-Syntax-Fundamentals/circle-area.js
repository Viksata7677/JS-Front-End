function circleArea(argument) {
    let result;
    if (typeof argument == 'number') {
        result = Math.pow(argument, 2) * Math.PI;
        console.log(result.toFixed(2));
    } else {
        console.log(`We can not calculate the circle area, because we receive a ${typeof argument}.`);
        
    }
}