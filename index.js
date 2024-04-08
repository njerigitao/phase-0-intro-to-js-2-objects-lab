// Write your solution in this file!
const employee = {
    name: "Max",
    streetAddress: "5 Main Street",
};
function updateEmployeeWithKeyAndValue(employee,Key, value){
    return Object.assign({}, employee, {[Key]: value});
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, Key, value){
    employee[Key] = value
    return employee;
}
function deleteFromEmployeeByKey(employee,Key){
    const newObj = Object.assign({}, employee);
    delete newObj[Key];
    return newObj;
}
function destructivelyDeleteFromEmployeeByKey(employee, Key){
    delete employee[Key];
    return employee;
}
