import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Button } from '@consta/uikit/Button';
import { Layout } from '@consta/uikit/Layout';
import { getStyleForNavLink } from '../const';
import { AppRoute } from '../const';
import { useDispatch, useSelector } from 'react-redux';
import { clearUser } from '../../store/userSlice';

const Header = () => {
    const user = useSelector(state => state.user.user)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    var authButton = null
    var serviceButton = <NavLink to={AppRoute.service} style={getStyleForNavLink}>
                        <Button label="Услуги" />
                        </NavLink>

    if (user === null){
        authButton = <NavLink to={AppRoute.login} style={getStyleForNavLink}>
                     <Button label="Вход" />
                    </NavLink>
        serviceButton = null
    } else{
        let exit = ()=>{
            dispatch(clearUser())
            navigate(AppRoute.login)
        }
        authButton = <div>
                    <NavLink to={AppRoute.profile} style={getStyleForNavLink}>
                        <Button label={ user !== null ? user?.firstName + " " + user?.lastName: "Гость"}/>
                    </NavLink>
                     <Button label="Выход" onClick={exit} />
                     </div>
    }

    return (
        <Layout>
            <NavLink to={AppRoute.main} style={getStyleForNavLink}>
                <Button label="Главная страница" />
            </NavLink>
            {serviceButton}
            <div style={{ marginLeft: "auto", marginRight: "1rem"}}>
                {authButton}
            </div>
        </Layout>
    );
}

export default Header;