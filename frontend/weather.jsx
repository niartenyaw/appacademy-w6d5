import React from 'react';

class Weather extends React.Component {

  constructor() {
    super();
    this.state = {main: {temp: ''}, name: ''};

    const weatherCb = (position) => {
      this.loadWeather(position.coords.latitude, position.coords.longitude);
    };

    this.loadLocation(weatherCb);

  }

  render() {
    const temp = Math.floor(10 * ((this.state.main.temp - 273.15) * 9 / 5 + 32)) / 10;

    return <section className="weather">
      <img id="other" src="https://sciencebob.com/wp-content/uploads/2014/06/opticalillusion1.jpg"></img>
      <div>{this.state.name}</div>
      <div>{temp}</div>
    </section>;
  }

  loadLocation(weatherCb) {
    navigator.geolocation.watchPosition(weatherCb);
  }

  loadWeather(lat, long) {
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = () => {
      if (xmlhttp.readyState == XMLHttpRequest.DONE ) {
        if (xmlhttp.status == 200) {
          this.setState(JSON.parse(xmlhttp.responseText));
          // document.getElementsByClassName("weather")[0].innerHTML = xmlhttp.responseText;
        }
        else if (xmlhttp.status == 400) {
          console.log('There was an error 400');
        }
        else {
          console.log('something else other than 200 was returned');
        }
      }
    };
    xmlhttp.open("GET", `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&APPID=85ded296c9b94103b5b81e2130927c03
`, true);
    xmlhttp.send();
  }

}

// api.openweathermap.org/data/2.5/weather?lat=35&lon=139


export default Weather;
