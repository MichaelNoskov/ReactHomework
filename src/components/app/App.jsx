import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Theme, presetGpnDefault } from '@consta/uikit/Theme';
import { Responses404 } from '@consta/uikit/Responses404'
import { AppRoute } from '../const';
import MainLayout from '../../layouts/main-layout/MainLayout';
import MainPage from '../../pages/main-page/MainPage';
import ServicePage from '../../pages/service-page/ServicePage';
import ServiceDetailPage from '../../pages/service-detail-page/ServiceDetailPage';
import LoginPage from '../../pages/login-page/LoginPage';
import ProfilePage from '../../pages/profile-page/ProfilePage';
import CheckAuth from "../check-auth/CheckAuth";
import { Button } from '@consta/uikit/Button';

const App = function() {
  return (
    <Theme preset={presetGpnDefault}>
      <BrowserRouter>
        <Routes>
          <Route path={AppRoute.main} element={<MainLayout />}>
            <Route index element={<MainPage />}/>
            <Route path={AppRoute.service} element={<CheckAuth><ServicePage/></CheckAuth>} />
            <Route path={AppRoute.service+":id"} element={<CheckAuth><ServiceDetailPage/></CheckAuth>}/>
            <Route path={AppRoute.profile} element={<CheckAuth><ProfilePage/></CheckAuth>} />
            <Route path={AppRoute.login} element={<LoginPage />} />
          </Route>
          <Route path="*" element={<Responses404 actions={<Button label="Назад" view="ghost" onClick={()=>window.history.back()}></Button>}/>}/>
        </Routes>
      </BrowserRouter>
    </Theme>
  );
}

export default App