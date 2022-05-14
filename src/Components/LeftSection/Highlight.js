import styles from './Highlight.module.css'
import { useContext } from 'react'
import WeatherContext from '../../context/WeatherContext'
const Highlight = () =>{
    const {currentLocation,currentWeather} = useContext(WeatherContext)
    let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    let epoch = currentLocation.epoch
    epoch = new Date(epoch*1000)
    epoch = epoch.toLocaleString('en-US',options)
    return currentWeather&& <div className={styles.wrapper}>
        <div className={styles.temp}>{currentWeather.temperature}°</div>
        <div className={styles.locationDate}>
            <div className={styles.location}>
                {currentLocation.name}
            </div>
            <div className={styles.date}>
                {epoch}
            </div>
        </div>
        <div className={styles.climate}>
            <img src={currentWeather.condition.icon} alt='icon'/>
            <div>
                {currentWeather.condition.epoch}
            </div>
        </div>
    </div>
}

export default Highlight