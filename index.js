// import {cityList} from "./city.js";

// cityList.map((item,i)=>{
//     let Details=`My city name is ${item.name} and code ${item.code}`
//     console.log(Details)
// })

import {cityList} from "./city.js";

cityList.map((items,i)=>{
    let showResult = `My city name is ${items.name} and code no ${items.code}`
    console.log(showResult);
})
