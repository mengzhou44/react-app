import React from 'react';
import ReactDOM from 'react-dom';

import App from './ui/app';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
