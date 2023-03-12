import { RequestCreateEmployee, RequestGetAllEmployees } from "../reducers/employee-reducer";
import {takeEvery, put, all} from "@redux-saga/core/effects"
import { EmployeeFormState } from "../reducers/employee-form-reducer";
import { createEmployee, getAllEmployeesData } from "../api/requests";
//worker sagas
export function* createEmployeeByForm(action: RequestCreateEmployee){

    try{
        const newEmployee: EmployeeFormState = yield createEmployee(action.payload);
        
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




//root saga
export default function* rootSaga(){

    yield all([watchRequestCreateEmployee(),watchRequestGetAllEmployees()]) // an array of watcher sagas


}