const INITIAL_STATE = {
    signedIn: null,
    userId: null
}

const SignInReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SIGN_IN':
            return {
                ...state,
                signedIn: true,
                userId: action.payload
            }
        case 'SIGN_OUT':
            return {
                ...state,
                signedIn: false
            }
        default:
            return state;
    }
}

export default SignInReducer;