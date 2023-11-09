import Layout from '../src/app/layout'
import '../src/app/page.module.css'
import { Provider } from 'react-redux';
import { store } from '../state/store';
import '../src/app/globals.css'

function MyApp(props) {
  const { Component, pageProps } = props
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  ) 
}

export default (MyApp);
