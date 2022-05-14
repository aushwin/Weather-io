import styles from './RightSection.module.css'
import SearchBar from './SearchBar'
import Weather from './Weather'
import History from './History'
import { useContext } from 'react'
import WeatherContext from '../../context/WeatherContext'
const RightSection = ()=>{
    const {history} = useContext(WeatherContext)
    return <div className={styles.wrapper}>
        <SearchBar />
        {history.length > 0 && <History />}
        <Weather />
    </div>
}

export default RightSection