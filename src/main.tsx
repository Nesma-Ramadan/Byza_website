import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import App from './App.tsx'
import { store } from './redux/Store'
import { Provider } from 'react-redux'
import { setLoggedInUser, type AuthUser } from './redux/authSlice'

// استعادة حالة تسجيل الدخول من localStorage بعد الـ refresh
const savedUser = localStorage.getItem("loggedInUser");
if (savedUser) {
  try {
    const user = JSON.parse(savedUser) as AuthUser;
    store.dispatch(setLoggedInUser(user));
  } catch {
    localStorage.removeItem("loggedInUser");
  }
}

createRoot(document.getElementById('root')!).render(

  <Provider store={store}>
    <StrictMode>
      <App />
    </StrictMode>,
  </Provider>

)
