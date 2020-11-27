const initialState = {
    items: [],
    isLoading: false,
}

const gallery = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_IMAGES':
            return {
                ...state,
                items: action.payload
            }
        default: return state
    }
}

export default gallery;