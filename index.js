// Write your solution in this file!
const employee = {
    name: "Pistachio",
    streetAddress: "820 West End Ave"
}

function updateEmployeeWithKeyAndValue(obj, key, value) {
    const updatedEmployee = {...obj};
    updatedEmployee[key] = value;
    return updatedEmployee;
}

// console.log(updateEmployeeWithKeyAndValue(employee, "name", "Eliza"));

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}

// console.log(destructivelyUpdateEmployeeWithKeyAndValue(employee, "name", "Eliza"));

function deleteFromEmployeeByKey(employee, key) {
    const updatedEmployee = {...employee};
    delete updatedEmployee[key];
    return updatedEmployee;
}

// console.log(deleteFromEmployeeByKey(employee, "streetAddress"));

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}