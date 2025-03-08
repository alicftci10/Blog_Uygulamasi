import React from 'react';
import Loading from './components/loading';
import RouterConfig from './config/routerConfig';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function App() {
    return (
        <>
            <Loading />
            <RouterConfig />
        </>
    );
}

export default App;