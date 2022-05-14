import { useContext, useState } from 'react'
import WeatherContext from '../../context/WeatherContext'
import SplashScreen from '../SplashScreen/SplashScreen'
import styles from './Layout.module.css' 

const Layout = (props)=>{
    const {wallpaperUrl} = useContext(WeatherContext)
    const myStyles = {
        backgroundImage: `url(${wallpaperUrl})`,
        backgroundSize: 'cover'
    }
    const [bool,setBool] = useState(true)
    setTimeout(()=>setBool(false),3000)
    console.log(props.children)
    return <>
    <div style={myStyles} className={styles.wrapper}>
        <div className={styles.left}>{props.children[0]}</div>
        <div className={styles.right}>{props.children[1]}</div>
    </div>
    {bool && <SplashScreen />}
    </>
}

export default Layout