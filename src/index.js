import dishesListData from "./data/dishes.json";
import dishesTemplate from "./templates/dishes.hbs";
const area = document.querySelector('#area');

console.log(dishesListData);
console.log(dishesTemplate());

const dishesList = dishesTemplate({dishesListData});

area.innerHTML = dishesList;
