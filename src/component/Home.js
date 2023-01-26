
import React, { useState } from 'react'
import axios from 'axios';
import '../App.css';
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function Home() {
    const [query, setQuery] = useState("")
    const [staticDisplay, setStaticDisplay] = useState("")
    const [temp, setTemp] = useState()
    const [pressure, setPressure] = useState(Number)
    const [details, setDetails] = useState("")
    const [country, setCountry] = useState("")
    const [humidity, sethumidty] = useState(Number)
    const [feels_like, setfeels_like] = useState(Number)

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=bbc07eefe24d79423f6832be3bec54f5`;

    // const getdivicelocation = () => {
    //     navigator.geolocation.getCurrentPosition((result) => {
    //         axios.post(`https://api.openweathermap.org/data/2.5/weather?lat=${result.coords.latitude}&lon=${result.coords.longitude}&appid=bbc07eefe24d79423f6832be3bec54f5`).then((res) => {
    //             setStaticDisplay(res.data)
    //             setTemp(res.data.main.temp)
    //             setPressure(res.data.main.pressure)
    //             setDetails(res.data.weather[0].description)
    //             setCountry(res.data.sys.country)
    //             setfeels_like(res.data.main.feels_like)
    //             sethumidty(res.data.main.humidity)
    //         })
    //     })
    // }
    const search = () => {
        axios.post(url).then((res) => {
            setStaticDisplay(res.data)
            setTemp(res.data.main.temp)
            setPressure(res.data.main.pressure)
            setDetails(res.data.weather[0].description)
            setCountry(res.data.sys.country)
            setfeels_like(res.data.main.feels_like)
            sethumidty(res.data.main.humidity)
        }).catch(() => {
            toast.error('Internal server error!', {
                position: "bottom-left",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                icon: "❌"
            });
        })
    }

    return (
        <>
            <div className="container-fluid px-1 px-sm-3 py-5 mx-auto">
                <div className="row d-flex justify-content-center">
                    <div className="row card0">
                        <div className="card1 col-lg-8 col-md-7">
                            <small>stateoftheatmostphere</small>
                            <div className="text-center">
                                <img className="image mt-5" src="https://i.imgur.com/M8VyA2h.png" alt='ballon' />
                            </div>
                            <div className="row px-3 mt-3 mb-3">
                                <h1 className="large-font mr-3">{(Number(temp) - 273).toFixed(2)}&#176;</h1>
                                <div className="d-flex flex-column mr-3">
                                    <h2 className="mt-3 mb-0">{staticDisplay.name},{country}</h2>
                                    {/* <small>10:36 - Tuesday, 22 Oct '19</small> */}
                                </div>
                                <div className="d-flex flex-column text-center">
                                    <span className="mt-5"></span>
                                    <small>{details}</small>
                                </div>
                            </div>
                        </div>
                        <div className="card2 col-lg-4 col-md-5">
                            <div className="row px-3">
                                <input type="text" placeholder="Search for a city" onChange={(e) => { setQuery(e.target.value) }} className="mb-5" />
                                <div className="fa fa-search mb-5 mr-0 text-center" onClick={search}></div>
                            </div>
                            <div className="mr-5">
                                <p>Weather Details</p>
                                <div className="row px-3">
                                    <p className="light-text">Feels like</p>
                                    <p className="ml-auto">{feels_like}&#176;C</p>
                                </div>
                                <div className="row px-3">
                                    <p className="light-text">Humidity</p>
                                    <p className="ml-auto">{humidity} %</p>
                                </div>
                                <div className="row px-3">
                                    <p className="light-text">Pressure</p>
                                    <p className="ml-auto">{pressure}</p>
                                </div>
                                <div className="row px-3">
                                    <p className="light-text">temp</p>
                                    <p className="ml-auto">{temp}</p>
                                </div>

                                <div className="line mt-3"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <ToastContainer/>
        </>
    )
}

export default Home