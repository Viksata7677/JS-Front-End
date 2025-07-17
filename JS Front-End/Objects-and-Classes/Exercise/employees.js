function employeesInfo(arr) {
    let employees = [];

    for (let employeeName of arr) {
        let employeeObject = {
            name: employeeName,
            personalNumber: employeeName.length,
        };

        employees.push(employeeObject);
    }

    for (let employeeObject of employees){
        console.log(`Name: ${employeeObject.name} -- Personal Number: ${employeeObject.personalNumber}`);
        
    }
    
}