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
import AddFriendPage from './pages/AddFriendPage.jsx';
import { Provider } from 'react-redux'
import store from './redux/store.jsx';
import ContactList from './components/ContactList.jsx';
import FriendList from './components/FriendList.jsx';
import ChatSection from './components/ChatSection.jsx';
import FriendsSection from './components/FriendsSection.jsx';
import ProtectedRoutes from './components/ProtectedRoutes.jsx';
import UnauthorisedPage from './pages/UnauthorisedPage.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />} />
              <Route path='/' element={<HomePage/>}>
                  <Route index element={<AuthSectionPage/>}/>
                  <Route path='signup' element={<SignupPage/>}/>
                  <Route path='profile-photo' element={
                    <ProtectedRoutes>
                      <AddProfilePhotoPage/>
                    </ProtectedRoutes>} 
                  />
                  <Route path='login' element={<LoginPage/>}/>
                  <Route path='forgot-password' element={ <ForgotPasswordPage/> }/>
                  <Route path='change-password' element={ <ChangePasswordPage/> }/>
                  <Route path='add-friend' element={
                    <ProtectedRoutes>
                      <AddFriendPage/>
                    </ProtectedRoutes>}/>
              </Route>
              <Route path='contacts' element={
                <ProtectedRoutes>
                  <ContactPage/>
                </ProtectedRoutes>}/>
              <Route path='/messages' element={
                <ProtectedRoutes>
                  <MessagePage/>
                </ProtectedRoutes>}>
                  <Route index element={
                      <ChatSection/>
                  }/>
                  <Route path='friends' element={
                      <FriendsSection/>
                  }/>
              </Route>
              <Route path='/unauthorised' element={ <UnauthorisedPage/> }/>
              <Route path='*' element={ <NotFoundPage/> }/>
            </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>
  
)
