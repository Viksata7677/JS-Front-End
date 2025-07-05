function rotation(array, numberRotations) {
    for (let rotations = 0; rotations < numberRotations; rotations++) {
        let removedElement = array.shift();
        array.push(removedElement);
    }

    console.log(array.join(' '));
    
}