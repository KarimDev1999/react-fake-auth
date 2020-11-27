const initialState = {
    isAuth: false,
    username: 'Admin',
    password: '12345',
    profileImg: 'https://www.cispp.org.uk/wp-content/uploads/2019/07/Person.png',
}


const auth = (state = initialState, action) => {
    switch (action.type) {

        case 'SET_AUTH_STATUS':
            return {
                ...state,
                isAuth: action.payload
            }

        default: return state
    }

}

export default auth;