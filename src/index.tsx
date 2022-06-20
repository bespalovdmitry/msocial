import './index.css';
import './redux/state'
import {store} from './redux/state';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import {App} from './App';
import React from 'react';


export const rerenderEntireTree = () => {
    const root = ReactDOM.createRoot(document.getElementById('root') as HTMLDivElement)
    root.render(
        <BrowserRouter>
            <App
                store={store}
            />
        </BrowserRouter>
    )
}

rerenderEntireTree()

store.subscribe(rerenderEntireTree)
