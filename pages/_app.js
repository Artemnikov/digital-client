import Layout from '../src/app/layout'
import '../src/app/page.module.scss'
import { Provider, useSelector } from 'react-redux';
import { store } from '../state/store';
import '../src/app/globals.css'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';
import Router from 'next/router';

function MyApp(props) {
  const { Component, pageProps } = props
  
  useEffect(() => {
    if (!localStorage.getItem("access_token")) Router.push("/")
  }, [])

  return (
    <Provider store={store}>
      <Layout>
        <ToastContainer
          position="top-right"
          autoClose={4000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLos
          draggable={false}
          pauseOnHover
          style={{
            fontWeight: 'bold',
          }}
        />
        <Component {...pageProps} />
      </Layout>
    </Provider>
  ) 
}

export default (MyApp);
