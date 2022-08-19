import React from 'react';
import { createRoot } from 'react-dom/client';
import DisplayApi from './components/API';




// import style
import './styles/style.css';

const root = createRoot(document.getElementById('root'));
// root.render(<CountAngka />);
root.render(<DisplayApi/>)

