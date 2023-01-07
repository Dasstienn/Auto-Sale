import React from 'react'
import './App.css'
import Menu from './components/layout/Menu'
import Route from './routing/Route'
import Home from './components/pages/home/Home'
import AllCars from './components/pages/shop/AllCars'
import Sell from './components/pages/sell/Sell'
import AddCar from './components/pages/sell/AddCar'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import FAQ from './components/pages/faq/FAQ'
import News from './components/pages/news/News'
import ContactUs from './components/pages/contactus/ContactUs'
import Cart from './components/cart/Cart'
import CartProvider from './store/CartProvider'
import UserProfile from './components/authentication/profile/UserProfile'
import AuthPage from './components/pages/auth/AuthPage'
import { useContext, useState } from 'react'
import AuthContext from './store/AuthContext'
import useNavigation from './hooks/use-navigation'
import AuthForm from './components/authentication/authform/AuthForm'



function App() {
  const [cartIsShown, setCartIsShown] = useState(false)
  const { navigate } = useNavigation()
  const authCtx = useContext(AuthContext)

  const showCartHandler = () => {
    setCartIsShown(true)
  }

  const hideCartHandler = () => {
    setCartIsShown(false)
  }

  const redirect = () => {
    navigate('/login')
  }

  return (
    <CartProvider>
      <div className="App" >
        <Header onShowCart={showCartHandler} />
        {cartIsShown && <Cart onClose={hideCartHandler} />}
        <div>
          <Menu />
          <div>
            <Route path="/">
              <Home />
            </Route>
            <Route path="/shop">
              <AllCars />
            </Route>
            <Route path="/sell">
              <Sell />
            </Route>
            <Route path="/faq">
              <FAQ />
            </Route>
            <Route path="/news">
              <News />
            </Route>
            <Route path="/contactUs">
              <ContactUs />
            </Route>
            {!authCtx.isLoggedIn && (
              <Route path='/auth'>
                <AuthPage />
              </Route>
            )}
            <Route path='/profile'>
              {authCtx.isLoggedIn && <UserProfile />}
              {!authCtx.isLoggedIn && <AuthForm />}
            </Route>
            <Route path='*'>
              404 Page not found!
            </Route>
          </div>
        </div>
        <Footer />
      </div>
    </CartProvider>
  )
}

export default App
