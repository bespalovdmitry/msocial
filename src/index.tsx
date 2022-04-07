import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './redux/state'
import {App} from './App'
import {addPost, state} from './redux/state';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLDivElement)
root.render(<App
    state={state}
    addPost={addPost}
/>)
