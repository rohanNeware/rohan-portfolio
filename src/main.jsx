import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Footer from './components/Footer/Footer.jsx';
import Header from './components/Header/Header.jsx';


AOS.init({
  duration: 1200, 
  easing: 'ease-in-out',
  once: true,
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
     
    <App />
    
  </StrictMode>,
)
