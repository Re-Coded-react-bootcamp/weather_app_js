import React from 'react'
import WeatherBody from './componets/WeatherBody/WeatherBody'
import weather from './apis/api'
import Loader from './componets/Loader/Loader'
import SearchBar from './componets/SeacrchBar/SearchBar'
import './App.css'
import Cloudy from './componets/assets/cloudy.svg'


class App extends React.Component  {
  constructor(props){
    super(props);

    this.state={
      temp:[],
      city:null,
      isLoaded:false
    };


  }

  componentDidMount(){
    this.setState({isLoaded:true})
  }



  searchCity = async city => (
    await weather
    .get(`daily?city=${city}&key=3883f69ab25f46dc92cdf2b5d66a1517`).then(res => {
     
      const temp = res.data.data;
      const city = res.data.city_name;

      this.setState({
        temp,
        city,
        isLoaded:false
      })
    })
  )

  render(){

    const minTemp= this.state.temp.map(e1 => {
      return parseInt(e1.low_temp)
    })


    const maxTemp = this.state.temp.map(e1 => {
      return parseInt(e1.max_temp)
    })

    const icon = this.state.temp.map(e1 => {
      return e1.weather.code
    })


    const description = this.state.temp.map(e1=>{
      return e1.weather.description
    })

//loader

    // if(this.state.isLoaded){
    //   return <Loader msg={"Loading...."}/>
    // }

    return (
      <div className="App">
        <React.Fragment>
          <SearchBar city={this.state.city} searchCity={this.state.searchCity}/>
        </React.Fragment>
          <div className="weatherContainer pt-3 pb-3">
            <h5 className="cityName">{this.state.city}</h5>
              <WeatherBody day={"Mon"} icon={Cloudy} minTemp={minTemp[0]} maxTemp={maxTemp[0]} description={description[0]}/>
              <WeatherBody day={"Tue"} icon={icon[1]} minTemp={minTemp[1]} maxTemp={maxTemp[1]} description={description[1]}/>
              <WeatherBody day={"Wend"} icon={icon[2]} minTemp={minTemp[2]} maxTemp={maxTemp[2]} description={description[2]}/>
              <WeatherBody day={"Thu"} icon={icon[3]} minTemp={minTemp[3]} maxTemp={maxTemp[3]} description={description[3]}/>
              <WeatherBody day={"Fri"}  icon={icon[4]} minTemp={minTemp[4]} maxTemp={maxTemp[4]} description={description[4]}/>
  
  
          </div>
      </div>
    );
  }

}
 


export default App
