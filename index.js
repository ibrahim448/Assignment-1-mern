import { cityList } from "./city.js";

cityList.map((city,i)=>{
    const cityShow = `My city name is ${city.name} and code number ${city.code}`;
    console.log(cityShow);
});


// for loop use
/*
 for(let i = 0; i<cityList.length; i++){
    const cityName = cityList[i];
    const result = `My city Name is ${cityName.name} And code number ${cityName.code}`;
    console.log(result);
 }
 */

//  for of loop use
/*
for(let item of cityList){
    const city = `My City Name is ${item.name} & Code Number ${item.code}`;
    console.log(city);
};
*/
