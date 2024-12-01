import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from '@consta/uikit/Button';
import { Layout } from '@consta/uikit/Layout';
import { getStyleForNavLink } from '../const';

const Header = () => {
    return (
        <Layout>
            <NavLink to="/" style={getStyleForNavLink}>
                <Button label="Главная страница" />
            </NavLink>
            <NavLink to="/services/" style={getStyleForNavLink}>
                <Button label="Услуги" />
            </NavLink>
            <NavLink to="/profile/" style={getStyleForNavLink}>
                <Button label="ФИО" />
            </NavLink>
            <NavLink to="/login/" style={getStyleForNavLink}>
                <Button label="Вход" />
            </NavLink>
        </Layout>
    );
}

export default Header;