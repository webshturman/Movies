import type {Node} from 'react';
import React from 'react';
import {store} from './src/redux/store';
import {Provider} from 'react-redux';
import {AppRoutes} from './src/components/AppRoutes';

const App: () => Node = () => {
    return (
        <Provider store={store}>
            <AppRoutes />
        </Provider>
    );
};

export default App;

