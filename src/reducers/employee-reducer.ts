import { EmployeeFormState } from "./employee-form-reducer"


export type EmployeeState = {
    list: EmployeeFormState[]
}

export const initialState: EmployeeState ={
    list: []
}

export type AppendList = {type: "APPEND_LIST", payload:EmployeeFormState}
export type EditEmployee = {type: "EDIT_EMPLOYEE", payload:EmployeeFormState}
export type RefreshList = {type: "REFRESH_LIST", payload:EmployeeFormState[]}
export type DeleteEmployee = {type: "DELETE_EMPLOYEE", payload:string}
export type RequestCreateEmployee = {type: "REQUEST_CREATE_EMPLOYEE", payload: EmployeeFormState}
export type RequestGetAllEmployees = {type: "REQUEST_GET_ALL_EMPLOYEES"}
export type RequestEditEmployee = {type: "REQUEST_EDIT_EMPLOYEE", payload:EmployeeFormState}
export type RequestDeleteEmployee = {type: "REQUEST_DELETE_EMPLOYEE", payload: string}


export type EmployeeActions = AppendList | RefreshList | DeleteEmployee | EditEmployee | RequestCreateEmployee | RequestGetAllEmployees | RequestEditEmployee | RequestDeleteEmployee

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
    case "EDIT_EMPLOYEE":{
        let filteredList: EmployeeFormState[] = nextState.list.filter((item)=>item.id !== action.payload.id);
        filteredList.push(action.payload)
        nextState.list = filteredList
        return nextState
    }
    case "DELETE_EMPLOYEE":{
        let filteredList: EmployeeFormState[] = nextState.list.filter((item)=>item.id !== action.payload);
        nextState.list = filteredList
        return nextState
    }

    default:{
        return nextState
    }
    
}
}