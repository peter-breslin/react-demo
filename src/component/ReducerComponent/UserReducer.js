




const UserReducerActionType = Object.freeze( {
    Increment: 'incremented_age',
    Decrement: 'decrement_age',
    ChangeName: 'change_name'
})

// N.B. State is read-only. Don't modify any object or arrays in state. e.g state.age = state.age + 1
// Instead, always return new objects from reducer.
const UserReducer = (state, action) => {
    if(action.type === UserReducerActionType.Increment){
        return {
            name : state.name,
            age : state.age + 1
        }
    }

    if(action.type === UserReducerActionType.Decrement){
        return {
            name : state.name,
            age : state.age - 1
        }
    }

    if(action.type === UserReducerActionType.ChangeName){
        return {
            name : action.nextName,
            age : state.age - 1
        }
    }

    throw Error('Unknown action');
};

export {
    UserReducer,
    UserReducerActionType
}