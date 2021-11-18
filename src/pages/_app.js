import { Provider } from 'react-redux'
import { store } from '../app/store'
import '../styles/globals.css'
import {Provider as AuthProvider} from "next-auth/client"
import "./anim.css"
import Router from 'next/router';
import NProgress from 'nprogress'; //nprogress module
import 'nprogress/nprogress.css'; //styles of nprogress
import "./loader.css"


Router.events.on('routeChangeStart', () => NProgress.start()); Router.events.on('routeChangeComplete', () => NProgress.done()); Router.events.on('routeChangeError', () => NProgress.done());  

const MyApp = ({ Component, pageProps }) => {
  return (
    
    <AuthProvider>
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
    </AuthProvider>
  )
}

export default MyApp
