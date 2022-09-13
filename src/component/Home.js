import React, { useEffect, useState } from 'react'
import axios from 'axios';
import '../App.css';
import logo from '../images/logo.png';
function Home() {
    const [city, setCity] = useState('')
    const [staticDisplay, setStaticDisplay] = useState("")
    const [temp, setTemp] = useState()
    const [details, setDetails] = useState()
    const [country, setCountry] = useState()
    const [humidity, sethumidty] = useState()
    const [feels_like, setfeels_like] = useState()
    const [loading, setloading] = useState(true)
    useEffect(() => {
        setloading(false)
    }, [])

    const getdivicelocation = () => {
        navigator.geolocation.getCurrentPosition((result) => {
            axios.post(`https://api.openweathermap.org/data/2.5/weather?lat=${result.coords.latitude}&lon=${result.coords.longitude}&appid=bbc07eefe24d79423f6832be3bec54f5`).then((res) => {
                setStaticDisplay(res.data)
                setTemp(res.data.main.temp)
                setDetails(res.data.weather[0].description)
                setCountry(res.data.sys.country)
                setfeels_like(res.data.main.feels_like)
                sethumidty(res.data.main.humidity)
            })
        })
    }
    const search = () => {
        axios.post(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=bbc07eefe24d79423f6832be3bec54f5`).then((res) => {
            setStaticDisplay(res.data)
            setTemp(res.data.main.temp)
            setDetails(res.data.weather[0].description)
            setCountry(res.data.sys.country)
            setfeels_like(res.data.main.feels_like)
            sethumidty(res.data.main.humidity)
        })
    }

    return (
        <>
            {loading ?
                <div class="loader-wrapper">
                    <div class="loader">
                        <div class="progress-loader">
                            <div class="progress"></div>
                        </div>
                    </div>
                </div> : <div className="wrapper active" >
                    <header>.Weather.</header><br />
                    <section className="input-part">
                        <div className="group">
                            <svg className="icon" aria-hidden="true" viewBox="0 0 24 24">
                                <g>
                                    <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
                                </g>
                            </svg>
                            <input placeholder="Search" type="search" className="input" onChange={(e) => { setCity(e.target.value) }} onKeyDown={search} />
                        </div>
                        <div className="orgetdevicelocation">or</div>
                        <button className="getdevicelocation" onClick={getdivicelocation}>Get Device's Location</button>
                    </section >

                    <section className="weather-part">
                        <img src={logo} alt="Weather Icon" height={80} />
                        <div className="temp">
                            <span className="numb">{(Number(temp) - 273).toFixed(2)}</span>
                            <span className="deg">°</span>C
                        </div>

                        <div className="location">{details}</div>

                        <div className="location">
                            <span>{staticDisplay.name} {country}</span>
                        </div>
                        <div className="bottom-details">
                            <div className="column feels">
                                <i className="bx bxs-thermometer"></i>
                                <div className="details">
                                    <div className="temp">
                                        <span className="numb-2">{feels_like}</span>
                                        <span className="deg btm">°</span>C
                                    </div><br />
                                    <p>Feels like </p>
                                </div>
                            </div>

                            <div className="column humidity">
                                <i className="bx bxs-droplet-half"></i>
                                <div className="details">
                                    <span>{humidity} %</span><br /><br />
                                    <p>Humidity</p>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            }<br/>
            <span className="github">
                <a href="https://github.com/Fisayo6969" rel="noopener noreferrer external nofollow ugc" target="_blank">Github</a>
            </span>
        </>
    )
}

export default Home