import axios from "axios"
import { useContext, useEffect } from "react"
import { Layout, LeftSection, RightSection } from "./Components"
import WeatherContext from "./context/WeatherContext"


const App = () =>{
  const {setWallpaper,wallpaperUrl} = useContext(WeatherContext)
  useEffect(()=>{
    async function fetchWallpaper () {
      const response = await axios('https://api.unsplash.com/photos/random?client_id=Nt92irQguFfL-tysdqwywVAy7VfvMdUsTql7CcyVcuM&orientation=landscape&topics=climate'
      ,{
        headers:{
          "Access-Control-Allow-Origin": "*"
        }
      }
      )
      console.log(response)
      setWallpaper(response.data.urls.full)
    }
    fetchWallpaper()
  },[])
  return <Layout>
    <LeftSection />
    <RightSection />
    </Layout>
}
export default App