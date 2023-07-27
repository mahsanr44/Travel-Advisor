import axios from "axios";

const URL="https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary";  
export const getPlacesData = async(sw, ne) =>{
    try {
        const  {data:{data}}= await axios.get(URL, {
            params: {
              bl_latitude: sw.lat,
              tr_latitude: ne.lat,
              bl_longitude: sw.lng,
              tr_longitude: ne.lng,
            },
            headers: {
              'X-RapidAPI-Key': '5ba12d0f79msh9c0620181effd50p19322djsn0a00eb9afcbc',
              'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
            }})
        console.log(data)
        return data
    } catch (error) {
        console.log(error)
    }
}