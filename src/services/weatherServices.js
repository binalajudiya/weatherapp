import { DateTime } from "luxon";

const API_KEY = "Your Key";
const BASE_URL = "https://api.openweathermap.org/data/2.5";

const getWeatherData = (infoType, searchParams = "london") => {
    const url = new URL(BASE_URL + '/' + infoType);
    url.search = new URLSearchParams({...searchParams, appid: API_KEY});

    return fetch(url)
    .then((res) => res.json())
    .then((data) => data);
}


const formatCurrentWeather = (data) => {
    const {
        coord: {lat, lon},
        main: { temp, feels_like, temp_min, temp_max, humidity },
        name,
        dt,
        sys: { country, sunrise, sunset },
        weather,
        wind: { speed },
        timezone
    } = data;

    return { lat, lon, temp, feels_like, temp_min, temp_max, humidity, name, dt, country, sunrise, sunset, weather, speed,timezone};
}

const formatForcastWeather = (data) => {
    console.log(data);
}

const getFormattedWeatherData = async(searchParams) => {
    const FormattedWeatherData = await getWeatherData(
        "weather",
        searchParams
    ).then(formatCurrentWeather);

    const {lat,lon} = FormattedWeatherData;

    const FormatForcastWeather = await getWeatherData (
        "weather",
        {lat,
        lon,
        units: searchParams.units,
        }).then(formatForcastWeather);

    return {...FormattedWeatherData, ...FormatForcastWeather};
}

const formatToLocalTime = (
    secs,
    zone,
    format = "cccc dd LLL yyyy '| Local Time: 'hh:mm a"
) => DateTime.fromSeconds(secs).toFormat(format);


export {getFormattedWeatherData, getWeatherData, formatToLocalTime};