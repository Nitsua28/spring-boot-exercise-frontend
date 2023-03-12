import { EmployeeFormState } from "./employee-form-reducer"


export type EmployeeState = {
    list: EmployeeFormState[]
}

export const initialState: EmployeeState ={
    list: []
}

export type AppendList = {type: "APPEND_LIST", payload:EmployeeFormState}
export type RefreshList = {type: "REFRESH_LIST", payload:EmployeeFormState[]}
export type RequestCreateEmployee = {type: "REQUEST_CREATE_EMPLOYEE", payload: EmployeeFormState}
export type RequestGetAllEmployees = {type: "REQUEST_GET_ALL_EMPLOYEES"}
export type RequestEditEmployee = {type: "REQUEST_EDIT_EMPLOYEE", payload:EmployeeFormState}
export type RequestDeleteEmployee = {type: "REQUEST_DELETE", payload: string}


export type EmployeeActions = AppendList | RefreshList | RequestCreateEmployee | RequestGetAllEmployees | RequestEditEmployee | RequestDeleteEmployee

export default function EmployeeReducer(state: EmployeeState = initialState, action: EmployeeActions):EmployeeState{

const nextState: EmployeeState = JSON.parse(JSON.stringify(state));
switch(action.type){
    case "APPEND_LIST":{
        nextState.list.push(action.payload);
        return nextState
    }
    case "REFRESH_LIST":{
        nextState.list = action.payload;
        return nextState
    }

    default:{
        return nextState
    }
    
}
}