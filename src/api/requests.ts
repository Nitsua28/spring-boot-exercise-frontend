import { EmployeeFormState } from "../reducers/employee-form-reducer";

export async function createEmployee(params:EmployeeFormState):Promise<EmployeeFormState> {
    const httpResponse = await fetch("http://localhost:8080/employee", {
        method:"POST",
        body:JSON.stringify(params),
        headers:{"Content-Type":"application/json"}
    });
    const newEmployee = await httpResponse.json();
    return newEmployee;
}

export async function getAllEmployeesData():Promise<EmployeeFormState[]> {
    const httpResponse = await fetch("http://localhost:8080/employee", {
        method:"GET",
        headers:{"Content-Type":"application/json"}
    });
    const employees = await httpResponse.json();
    return employees;
}