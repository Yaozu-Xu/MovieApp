const STATE = {
    stars: [
        
    ]
}

const starReudcer = (state = STATE, action) => {
    switch (action.type) {
        case 'SET_STAR':
            return action.payload
        default:
            return state;
    }
}

export default starReudcer;