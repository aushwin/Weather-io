import { useContext, useRef, useState } from 'react'
import WeatherContext from '../../context/WeatherContext'
import styles from './SearchBar.module.css'

const SearchBar = ()=>{
    const {fetchWeather} = useContext(WeatherContext)
    const inputRef = useRef()


    return <div className={styles.wrapper}>
        <input type='text' placeholder='Search Location' ref={inputRef}/>
        <button onClick={
            ()=>{
                let location = inputRef.current.value
                location = location.trim()
                location = location.replaceAll(' ','+')
                fetchWeather(location)
            }
        }><i className={`fa fa-search ${styles.icon}` }aria-hidden="true"></i></button>
    </div>
}

export default SearchBar