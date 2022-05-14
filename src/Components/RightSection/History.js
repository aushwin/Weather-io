import { useContext } from 'react'
import WeatherContext from '../../context/WeatherContext'
import styles from './History.module.css'
const Weather = ()=>{
    const {history,fetchWeather} = useContext(WeatherContext)
    const onClickHandler=(location)=>{
        fetchWeather(location)
    }
    console.log(History)
    return true? <div className={styles.wrapper}>
    {history.map((history,index)=>{
        const type = history.type
        return <div style={{cursor:'pointer'}} onClick={()=>onClickHandler(history.location)} className={`${styles.items} ${type==='GOOD'?`${styles.GOOD}`:styles.BAD}`} key={index}>{history.location}</div>
    })}
</div>:
<div></div>
}

export default Weather