import { cityList } from "./city.js";

cityList.map((city,i)=>{
    const cityShow = `My city name is ${city.name} and code number ${city.code}`;
    console.log(cityShow);
})