import { Button } from '@consta/uikit/Button';
import { TextField } from '@consta/uikit/TextField';
import { useState, } from 'react';
import { logIn } from "../../store/api-actions";
import { useSelector, useDispatch } from 'react-redux';
import { setUser } from '../../store/userSlice';
import { useNavigate as Navigate } from 'react-router-dom';

const LoginPage = ()=>{

    const navigate = Navigate();

    const token = useSelector(state => state.user.token)
    const dispatch = useDispatch()

    const [status, setStatus] = useState(state => state)

    const [login, setLogin] = useState(null);
    const handleLoginChange = (value) => setLogin(value);

    const [passwd, setPasswd] = useState(null);
    const handlePasswdChange = (value) => setPasswd(value);

    const [error, setError] = useState(null);

    function handleLogIn(){

        logIn({
            "username": login,
            "password": passwd
        }).then(resp => {
            if (resp.status = 200){
                let respData = resp.data
                console.log(respData.message)
                setStatus("success")
                dispatch(
                    setUser(
                        {
                            user:{username: respData.username, firstName: respData.firstName, lastName: respData.lastName},
                            token: respData.accessToken
                        }
                    )
                )
                navigate('/');
            }
        }).catch(warning=>{
            setStatus("alert");
            setError(JSON.parse(warning.request.response).message)
            // alert(warning)
            // let respData = warning.data;
            // console.log(respData)
            // setError(respData);
        })
    }

    return(
        <>
        <div style={{
                maxWidth: "60rem",
                margin: "0 auto",
            }}>
            <TextField
                status={status}
                label='Логин'
                type="text"
                placeholder="Михаил Носков"
                value={login}
                onChange={handleLoginChange}
            />
            <TextField
                status={status}
                label='Пароль'
                placeholder="12345"
                type="passwd"
                value={passwd}
                onChange={handlePasswdChange}
            />
            { (!passwd || !login) ? 
                <Button label="Войти" disabled={true} onClick={handleLogIn} style={{marginTop:"10px"}}/>
            : <Button label="Войти" onClick={handleLogIn} style={{marginTop:"10px"}}/>}

            <p align="left" view="alert" style={{color: "red"}}>{error}</p>
        </div>
        </>
    )
}

export default LoginPage