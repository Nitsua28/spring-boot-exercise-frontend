

export type EmployeeFormState = {
        id: string,
        name: string,
        location: string,
        email: string,
        phonenumber: string
}

export type UpdateName = {type: "UPDATE_NAME", payload:string}
export type UpdateLocation = {type: "UPDATE_LOCATION", payload: string}
export type UpdateEmail = {type: "UPDATE_EMAIL", payload: string}
export type UpdatePhoneNumber = {type: "UPDATE_PHONENUMBER", payload: string}

export type EmployeeFormActions = UpdateName | UpdateLocation | UpdateEmail | UpdatePhoneNumber

export function EmployeeFormReducer(state: EmployeeFormState, action: EmployeeFormActions):EmployeeFormState{

    const nextState: EmployeeFormState = JSON.parse(JSON.stringify(state));
    switch(action.type){
        case "UPDATE_NAME":{
            nextState.name = action.payload;
            return nextState
        }
        case "UPDATE_LOCATION":{
            nextState.location = action.payload;
            return nextState
        }
        case "UPDATE_EMAIL":{
            nextState.email = action.payload;
            return nextState
        }
        case "UPDATE_PHONENUMBER":{
            nextState.phonenumber = action.payload;
            return nextState
        }
        
        
        default:{
            return nextState
        }
        
    }
}