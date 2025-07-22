function solve() {
    const textAreaEl = document.querySelector('textarea');
    const bestRestaurantPEl = document.querySelector('#bestRestaurant p');
    const workersPEl = document.querySelector('#workers p');

    const restaurantsInfo = JSON.parse(textAreaEl.value);

    let restaurantsWorkers = {};

    for (const restaurantStr of restaurantsInfo) {
        const [restaurantName, workersStr] = restaurantStr.split(' - ');

        if (!restaurantsWorkers[restaurantName]) {
            restaurantsWorkers[restaurantName] = [];
        }

        const workersArr = workersStr.split(', ');
        for (const workerStr of workersArr) {
            const [name, salaryStr] = workerStr.split(' ');
            const salary = Number(salaryStr);

            restaurantsWorkers[restaurantName].push({
                name,
                salary
            });
        }
    }

    let bestRestaurant = '';
    let bestAvgSalary = 0;

    for (const [restaurantName, workersArr] of Object.entries(restaurantsWorkers)) {
        const totalSalary = workersArr.reduce((acc, worker) => acc + worker.salary, 0);
        const avgSalary = totalSalary / workersArr.length;

        if (avgSalary > bestAvgSalary) {
            bestAvgSalary = avgSalary;
            bestRestaurant = restaurantName;
        }
    }

    const bestWorkers = restaurantsWorkers[bestRestaurant].sort((a, b) => b.salary - a.salary);
    const bestSalary = bestWorkers[0].salary;

    bestRestaurantPEl.textContent = `Name: ${bestRestaurant} Average Salary: ${bestAvgSalary.toFixed(2)} Best Salary: ${bestSalary.toFixed(2)}`;

    let workerResults = bestWorkers
        .map(worker => `Name: ${worker.name} With Salary: ${worker.salary}`)
        .join(' ');

    workersPEl.textContent = workerResults;
}
