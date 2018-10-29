import axios from 'axios'; 

const API_KEY = '566e57c98908bd4ea7fa97148977fc32'; 
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`; 

export const FETCH_WEATHER = 'FETCH_WEATHER'

export function fetchWeather(city){
    const url = `${ROOT_URL}&q=${city},us`; 
    const request = axios.get(url); 
//this is redux promise below. . waits for data
    return {
        type: FETCH_WEATHER, 
        payload: request
    }; 
}