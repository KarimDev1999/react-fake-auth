import React, { useState } from 'react'

function Login({ username, password, setAuth }) {
    const [currentPassword, setCurrentPassword] = useState('');
    const [currentLogin, setCurrentLogin] = useState('');

    const onChangePassword = (e) => {
        setCurrentPassword(e.target.value)
        console.log(currentPassword);
    }
    const onChangeLogin = (e) => {
        setCurrentLogin(e.target.value)
        console.log(currentLogin);
    }
    const onSend = (e) => {
        e.preventDefault();
        setCurrentLogin('')
        setCurrentPassword('')
        if (username === currentLogin && password === currentPassword) {
            setAuth(true)
            setTimeout(() => {
                alert('вы успешно зашли в аккаунт')
            }, 400)

        }
        else {
            alert("Неправильно введен пароль или логин")
        }
    }
    return (

        <div className="login-page">
            <div className="form">
                <form className="login-form">
                    <input value={currentLogin} onChange={onChangeLogin} type="text" placeholder="username" />
                    <input value={currentPassword} onChange={onChangePassword} type="password" placeholder="password" />
                    <button onClick={onSend}>login</button>
                </form>
            </div>
        </div>
    )
}

export default Login
