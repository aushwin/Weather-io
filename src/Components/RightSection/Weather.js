import { useContext } from 'react'
import WeatherContext from '../../context/WeatherContext'
import styles from './Weather.module.css'
const Weather = ()=>{
    const {currentWeather} = useContext(WeatherContext)
    return currentWeather? <div className={styles.wrapper}>
    <div className={styles.title}>Weather Details</div>
    <div className={styles.weather}>
        <div>Cloudy</div>
        <div className={styles.value}>{currentWeather.cloudy} %</div>    
    </div>
    <div className={styles.weather}>
        <div>Humidity</div>
        <div className={styles.value}>{currentWeather.humidity} %</div>
    </div>
    <div className={styles.weather}>
        <div>Windy</div>
        <div className={styles.value}>{currentWeather.windy}</div>
    </div>
</div>:
<div></div>
}

export default Weather