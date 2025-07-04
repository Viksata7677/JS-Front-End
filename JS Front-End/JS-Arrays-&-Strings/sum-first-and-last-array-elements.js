function array(nums) {
    let firstElement = nums.shift();
    let lastElement = nums.pop();

    let result = firstElement + lastElement;

    console.log(result);
}