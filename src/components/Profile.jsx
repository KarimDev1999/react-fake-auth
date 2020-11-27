import React from 'react';
import { Redirect } from 'react-router-dom';

function Profile({ isAuth, username, profileImg }) {
    return (
        !isAuth ? <Redirect to='/login' /> : <div>
            <h1 className='text-center mt-5'>{`welcome to profile ${username}`}</h1>
            <div>
                <img src={profileImg} class="rounded mx-auto d-block" />
            </div>
        </div>
    )
}

export default Profile
