import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/style.scss'
import { Provider } from 'react-redux';
import store from './../store/';

export default function App({ Component, pageProps }) {

  return  <Provider store={store} >
            <Component {...pageProps} />
          </Provider> 
}
