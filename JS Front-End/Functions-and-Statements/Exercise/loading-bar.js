function LoadingBar(num) {
    let percentCount = num / 10;
    let dotCount = 10 - percentCount;

    let percentString = '%'.repeat(percentCount);
    let dotString = '.'.repeat(dotCount);

    let bar = `[${percentString}${dotString}]`;

    if (num === 100) {
        console.log('100% Complete!');
        console.log(bar);
    } else {
        console.log(`${num}% ${bar}`);
        console.log('Still loading...');
        
        
    }
    
}