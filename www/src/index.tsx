import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Hello } from './App';
import { ArrayContainer } from './components/ArrayContainer';

ReactDOM.render(<ArrayContainer size={3} />, document.getElementById('root'));
