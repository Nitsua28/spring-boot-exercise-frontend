import { RequestCreateEmployee, RequestDeleteEmployee, RequestGetAllEmployees } from "../reducers/employee-reducer";
import {takeEvery, put, all} from "@redux-saga/core/effects"
import { EmployeeFormState } from "../reducers/employee-form-reducer";
import { createEmployee, deleteEmployee, getAllEmployeesData, getEmployeeByName } from "../api/requests";
//worker sagas
export function* createEmployeeByForm(action: RequestCreateEmployee){

    try{
        action.payload.id = Math.floor(Math.random()*1000).toString()
        const newEmployee: EmployeeFormState = yield createEmployee(action.payload);
        yield put({type:"APPEND_LIST",payload: newEmployee})
    }catch(e){
        yield put({type:"ERROR", payload: e, error:true
        });
    }
}

export function* deleteEmployeeById(action: RequestDeleteEmployee){

    try{
        
        yield deleteEmployee(action.payload);
        yield put({type:"DELETE_EMPLOYEE",payload: action.payload})
    }catch(e){
        yield put({type:"ERROR", payload: e, error:true
        });
    }
}

export function* editEmployeeByForm(action: RequestCreateEmployee){

    try{
        const employee: EmployeeFormState = yield getEmployeeByName(action.payload.name);
        action.payload.id = employee.id;
        const newEmployee: EmployeeFormState = yield createEmployee(action.payload);
        yield put({type:"EDIT_EMPLOYEE",payload: newEmployee})
    }catch(e){
        yield put({type:"ERROR", payload: e, error:true
        });
    }
}

export function* getAllEmployees(){

    try{
        const employeeList: EmployeeFormState[] = yield getAllEmployeesData();
        yield put({type:"REFRESH_LIST",payload: employeeList})
    }catch(e){
        yield put({type:"ERROR", payload: e, error:true
        });
    }
}
//watcher sagas
export function* watchRequestCreateEmployee(){
    yield takeEvery("REQUEST_CREATE_EMPLOYEE",createEmployeeByForm)
}

export function* watchRequestGetAllEmployees(){
    yield takeEvery("REQUEST_GET_ALL_EMPLOYEES",getAllEmployees)
}

export function* watchRequestEditEmployee(){
    yield takeEvery("REQUEST_EDIT_EMPLOYEE",editEmployeeByForm)
}

export function* watchRequestDeleteEmployee(){
    yield takeEvery("REQUEST_DELETE_EMPLOYEE",deleteEmployeeById)
}




//root saga
export default function* rootSaga(){

    yield all([watchRequestCreateEmployee(),watchRequestGetAllEmployees(),watchRequestEditEmployee(),watchRequestDeleteEmployee()]) // an array of watcher sagas


}