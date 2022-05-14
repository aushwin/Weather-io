import {createContext,useState} from 'react'
import axios from 'axios'
const WeatherContext = createContext()

export function WeatherProvider({
    children
}){
    const [currentLocation,setCurrentLocation] = useState({name:'',localTime:'',epoch:''})
    const [currentWeather,setCurrentWeather]= useState(null)
    const [wallpaperUrl,setWallpaperUrl] = useState(null)
    const [history,setHistory] = useState([])
    const baseUrl = 'https://api.weatherapi.com/v1/current.json?key=efc9fecd0f174dffa12175308221205&q='

    const setWallpaper = (url) => setWallpaperUrl(url)

    const fetchWeather =async (location)=>{
        try{
            const response = await axios.get(baseUrl+location)
            setCurrentLocation((prevState)=>{
                return {
                    name: response.data.location.name,
                    localTime: response.data.location.localtime,
                    epoch: response.data.location.localtime_epoch
                }
            })
            setCurrentWeather((prevState)=>{
                return {
                    cloudy: response.data.current.cloud,
                    humidity: response.data.current.humidity,
                    windy: `${response.data.current.wind_kph} km/h`,
                    temperature: response.data.current.temp_c,
                    isDay: response.data.current.is_day,
                    condition: response.data.current.condition
                }
            })
            if (!history.find(history=>history.location===location))
            setHistory((prevState)=>{
                return prevState.concat({location,type:'GOOD'})
            })
            console.log(currentLocation,response)
        }catch(error){
            console.log(error)
            if (!history.find(history=>history.location===location))
            setHistory((prevState)=>{
                return prevState.concat({location,type:'BAD'})
            })
        }
    }
    return <WeatherContext.Provider value={
        {weather:'ommbi',
        fetchWeather,
        currentLocation,
        currentWeather,
        history,
        setWallpaper,
        wallpaperUrl
        }
    }>{children}</WeatherContext.Provider>
}


export default WeatherContext