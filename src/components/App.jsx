import { lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { GlobalStyle } from "./GlobalStyle";
import Layout from './Layout';

const Home = lazy(() => import("pages/Home"));
const Register = lazy(() => import("pages/Register"));
const Login = lazy(() => import("pages/Login"));
const Contacts = lazy(() => import("pages/Contacts"));

export const App = () => { 
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </>
  );
};