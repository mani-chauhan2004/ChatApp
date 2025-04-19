import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App.jsx';
import HomePage from './pages/HomePage.jsx';
import SignupPage from './pages/SignupPage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import MessagePage from './pages/MessagePage.jsx';
import AuthSectionPage from './pages/AuthSectionPage.jsx';
import ForgotPasswordPage from './pages/ForgotPasswordPage.jsx';
import ChangePasswordPage from './pages/ChangePasswordPage.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';
import AddProfilePhotoPage from './pages/AddProfilePhotoPage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import { Provider } from 'react-redux'
import store from './redux/store.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />} />
              <Route path='/' element={<HomePage/>}>
                  <Route index element={<AuthSectionPage/>}/>
                  <Route path='signup' element={<SignupPage/>}/>
                  <Route path='profile-photo' element={<AddProfilePhotoPage/>} />
                  <Route path='login' element={<LoginPage/>}/>
                  <Route path='forgot-password' element={ <ForgotPasswordPage/> }/>
                  <Route path='change-password' element={ <ChangePasswordPage/> }/>
              </Route>
              <Route path='contacts' element={<ContactPage/>}/>
              <Route path='messages' element={<MessagePage/>}/>
              <Route path='*' element={ <NotFoundPage/> }/>
            </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>
  
)
