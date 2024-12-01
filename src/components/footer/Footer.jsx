import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from '@consta/uikit/Button';
import { Layout } from '@consta/uikit/Layout';
import { getStyleForNavLink } from '../const';
import { AppRoute } from '../const';

const Footer = () => {
    return (
        <Layout>
            <div className="navigation">
                <NavLink to={AppRoute.main} style={getStyleForNavLink}>
                    <Button label="Главная страница" />
                </NavLink>
                <NavLink to={AppRoute.service} style={getStyleForNavLink}>
                    <Button label="Услуги" />
                </NavLink>
            </div>
            <p>© 2024 Моя компания</p>
        </Layout>
    );
}

export default Footer;