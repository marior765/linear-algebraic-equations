import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css'

import { Main } from './components/Main';

ReactDOM.render(
    <BrowserRouter>
        <Main />
    </BrowserRouter>, document.getElementById('root'));
