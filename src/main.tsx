import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Marks that JavaScript is available, which is what gates the scroll-reveal
// hidden state. Without this class the content renders plainly instead of
// staying invisible.
document.documentElement.classList.add('js');

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
