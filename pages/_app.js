
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBorderAll, faList } from '@fortawesome/free-solid-svg-icons';

library.add(faBorderAll, faList);

import '@fortawesome/fontawesome-svg-core/styles.css';

import 'bootstrap/dist/css/bootstrap.min.css';
// Maybe error?
import 'highlight.js/styles/base16/darcula.css';
// Maybe error?
import '../styles/index.scss';



export default ({Component, pageProps}) => <Component {...pageProps} />