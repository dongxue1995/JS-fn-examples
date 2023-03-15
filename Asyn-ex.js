//ex01
let pizza;
function orderPizza() {
  console.log("ordered a pizza");
  pizza = 123;
  setTimeout(() => {
    console.log("recived the order");
    pizza = 456;
    console.log(`check ${pizza}`);
  }, 2000);
  console.log("start to make the pizza");
}
orderPizza();
console.log("call my friedn");

//ex02
function orderPizza2(callback) {
  setTimeout(() => (pizza = 789), callback(pizza), 2000);
}
function pizzaReady() {
  console.log(`Eat ${pizza}`);
}
orderPizza2(pizzaReady);
