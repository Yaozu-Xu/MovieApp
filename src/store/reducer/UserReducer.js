const STATE = {
    uid: null,
    displayName: '',
}

const userReudcer = (state = STATE, action) => {
    switch (action.type) {
        case 'SET_USER': {
            const newState = action.payload;
            return newState;
        }
        case 'SET_LOGOUT': {
            return {
                uid: null,
                displayName: '',
            }
        }
        default:
            return state;
    }
}

export default userReudcer