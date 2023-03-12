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

export async function editEmployee(params:EmployeeFormState):Promise<EmployeeFormState> {
    const httpResponse = await fetch("http://localhost:8080/employee", {
        method:"PUT",
        body:JSON.stringify(params),
        headers:{"Content-Type":"application/json"}
    });
    const newEmployee = await httpResponse.json();
    return newEmployee;
}

export async function deleteEmployee(id:string):Promise<EmployeeFormState[]> {
    const httpResponse = await fetch("http://localhost:8080/employee/" + id, {
        method:"DELETE",
        headers:{"Content-Type":"application/json"}
    });
    const employees = await httpResponse.json();
    return employees;
}

export async function getAllEmployeesData():Promise<EmployeeFormState[]> {
    const httpResponse = await fetch("http://localhost:8080/employee", {
        method:"GET",
        headers:{"Content-Type":"application/json"}
    });
    const employees = await httpResponse.json();
    return employees;
}

export async function getEmployeeByName(name: String):Promise<EmployeeFormState[]> {
    const httpResponse = await fetch("http://localhost:8080/employee/" + name, {
        method:"GET",
        headers:{"Content-Type":"application/json"}
    });
    const employee = await httpResponse.json();
    return employee;
}