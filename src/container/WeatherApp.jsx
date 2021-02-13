
import React, { useState, useEffect } from 'react';
import * as BootStrap from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../components/Header/Header'
import City from "../components/citytemp/CityTemp"
import Chart from "../components/chart/Chart";
import Search from "../components/Search/Search";
import Loading from "../components/loading/Loading";
import WeekTemp from "../components/weektemp/WeekTemp";
import oneWeekTemp from "../helper/oneWeekTemp";



export default function WeatherApp() {

   
    const [WeatherData, setWeatherData] = useState({ loading:false, data:{}})
    const [error, seterror] = useState(null)
    const [userCountry, setUserCountry] = useState("");
    const [lables, setlables] = useState([])
    const [datasets, setdatasets] = useState([])
    const [Humidity, setHumidity] = useState([])
    const ChartData = { labels:lables,
    datasets: [
      {
        label: "Tempreture °c",
        data: datasets,
        fill: true,
        backgroundColor: "rgba(23,162,184,0.2)",
        borderColor: "rgba(23,162,184)"
      },
      {
        label: "Humidity %",
        data: Humidity,
        fill: true,
        borderColor: "#FFC107",
        backgroundColor:"#C88C3233"
      }
    
    ]}
    const [URL, setURL] = useState("https://www.metaweather.com/api/location/search/?query=Baghdad")
    const [WeatherURL, setWeatherURL] = useState("")
    


    var cors_api_url = 'https://cors-anywhere.herokuapp.com/';


    const  fetching =  (URL) =>
        fetch(cors_api_url+URL)
        .then((res) => res.json())
        .then(
          (result) => {
              return result
          },
          (error) => {
            seterror(error.message)
          }
      );

         
      useEffect(() => {
          fetching(URL)
         .then((result) => {
                            setWeatherURL("https://www.metaweather.com/api/location/"+result[0].woeid)
                          })
       }, [URL]);


       useEffect(() => {
           fetching(WeatherURL)
           .then((result)=> setWeatherData({loading:true, data:result}))
          
          
       }, [ WeatherURL]);

       useEffect(() => {
        if(WeatherData.data && WeatherData.loading) {
          setdatasets(oneWeekTemp(WeatherData.data.consolidated_weather,"the_temp"))
          setlables(oneWeekTemp(WeatherData.data.consolidated_weather,"applicable_date"))
          setHumidity(oneWeekTemp(WeatherData.data.consolidated_weather,"humidity"))
           
        }
       }, [WeatherData])

 
       const handleSubmit =(e)=>{
        e.preventDefault();
          setURL("https://www.metaweather.com/api/location/search/?query="+userCountry)
          setUserCountry("") 
       }


       const handleChange =(e)=> setUserCountry(e.target.value)
       

      

    return (
    <React.Fragment>
        {
        (WeatherData.data) && (WeatherData.loading) 
        
        ?<BootStrap.Container fluid  >
            <BootStrap.Row className="justify-content-sm-center bg-info p-4 text-light">
                <Header todayData={WeatherData.data.consolidated_weather[0]} />
            </BootStrap.Row>

            <BootStrap.Row  className="justify-content-sm-center  p-1 text-light">
                <Search handleSubmit={handleSubmit} handleChange={handleChange} inputValue={userCountry} />
            </BootStrap.Row>
              

            <BootStrap.Container>
              <BootStrap.Row className="mx-auto ">
                    <City
                    location={WeatherData.data.title}
                    data={WeatherData.data.consolidated_weather[0] }
                    sunRise={WeatherData.data.sun_rise }
                    sunSet={WeatherData.data.sun_set }
                    />
                    <Chart data={ChartData} />
                </BootStrap.Row>


                <BootStrap.Row className="mt-5 ">
                  <WeekTemp data={WeatherData.data} />
                </BootStrap.Row>
            
            </BootStrap.Container>



        </BootStrap.Container>
     
        : <Loading />
      }
    </React.Fragment>

        
    )
}








