import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Button } from '@consta/uikit/Button';
import { Layout } from '@consta/uikit/Layout';
import { getStyleForNavLink } from '../const';
import { AppRoute } from '../const';
import { useDispatch, useSelector } from 'react-redux';

const Footer = () => {
    const user = useSelector(state => state.user.user)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    var serviceButton = <NavLink to={AppRoute.service} style={getStyleForNavLink}>
                        <Button label="Услуги" />
                        </NavLink>

    if (user === null){
        serviceButton = null
    }
    return (
        <Layout>
            <div>
                <NavLink to={AppRoute.main} style={getStyleForNavLink}>
                    <Button label="Главная страница" />
                </NavLink>
                {serviceButton}
            </div>
            <div style={{ marginLeft: "auto", marginRight: "1rem"}}>
                <p>© {(new Date().getFullYear())} Это Моя компания</p>
            </div>
        </Layout>
    );
}

export default Footer;