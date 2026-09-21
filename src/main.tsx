import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { shouldShowSplash } from './lib/splash';
import './index.css';

// Marks that JavaScript is available, which is what gates the scroll-reveal
// hidden state. Without this class the content renders plainly instead of
// staying invisible.
document.documentElement.classList.add('js');

// Resolved before the first render so the `is-splashing` class lands ahead of
// first paint; the hero entrance is offset off that class, and deciding later
// would let the entrance start behind the panel.
const splash = shouldShowSplash();
if (splash) document.documentElement.classList.add('is-splashing');

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App splash={splash} />
  </StrictMode>,
);
