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
