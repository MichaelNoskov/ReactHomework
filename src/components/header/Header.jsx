import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from '@consta/uikit/Button';
import { Layout } from '@consta/uikit/Layout';
import { getStyleForNavLink } from '../const';
import { AppRoute } from '../const';

const Header = () => {
    return (
        <Layout>
            <NavLink to={AppRoute.main} style={getStyleForNavLink}>
                <Button label="Главная страница" />
            </NavLink>
            <NavLink to={AppRoute.service} style={getStyleForNavLink}>
                <Button label="Услуги" />
            </NavLink>
            <div style={{ marginLeft: "auto", marginRight: "1rem"}}>
                <NavLink to={AppRoute.login} style={getStyleForNavLink}>
                    <Button label="Вход" />
                </NavLink>
            </div>
        </Layout>
    );
}

export default Header;