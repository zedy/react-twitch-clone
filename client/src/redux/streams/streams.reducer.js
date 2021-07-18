const INITIAL_STATE = {
    list: {}
}

const StreamsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'STREAM_CREATE':
            return {
                ...state,
                list: { ...state.list, [action.payload.id]: action.payload}
            }
        case 'STREAM_EDIT':
            return {
                ...state,
                list: { ...state.list, [action.payload.id]: action.payload}
            }
        case 'STREAM_DELETE':
            return {
                ...state,
                list: { ...state.list, [action.payload.id]: undefined}
            }
        case 'STREAM_FETCH_ALL':
            return {
                ...state,
                list: action.payload
            }
        default:
            return state;
    }
}

export default StreamsReducer;