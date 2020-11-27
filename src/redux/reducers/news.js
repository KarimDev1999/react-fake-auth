const initialState = {
    items: [],
    loading: false,
}



const news = (state = initialState, action) => {
    switch (action.type) {

        case 'SET_NEWS':
            return {
                ...state,
                items: action.payload
            }



        default: return state;

    }

}


export default news;