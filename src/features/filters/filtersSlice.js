export const StatusFilters = {
    All: 'all',
    Active: 'active',
    Completed: 'completed'
}

const initialState = {
    status: StatusFilters.All,
    colors: []
}

export default function filtersReducer(state = initialState, action){
    switch (action.type){
        case 'filter/statusFilterChanged': {
            return {
                ...state,
                status: action.payload
            }
        }
        case 'filter/colorFilterChanged': {
            return {
                ...state,
                colors: [...state.colors, action.payload.color]
            }
        }
        default:
            return state
    }
}