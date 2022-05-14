import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { WeatherProvider } from './context/WeatherContext';
import SplashScreen from './Components/SplashScreen/SplashScreen';
const root = ReactDOM.createRoot(document.getElementById('root'));
const AppComponent = React.lazy(() => import('./App'));
root.render(
  <React.StrictMode>
    <WeatherProvider >
    <App />
    </WeatherProvider>
  </React.StrictMode>
);

