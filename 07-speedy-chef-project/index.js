const pizzas = [
  {
    name: "Margherita",
    method:
      "1/ Roll the dough base to the required thickness and shape. 2/ Add sauce to the base. 3/ Top with cheese.",
    requiredSteps: ["ROLL DOUGH", "PIZZA SAUCE", "CHEESE"],
  },
  {
    name: "Pepperoni",
    method:
      "1/ Roll the dough base to the required thickness and shape. 2/ Add sauce to the base. 3/ Top with cheese. 4/ Add 12 slices of pepperoni.",
    requiredSteps: ["ROLL DOUGH", "PIZZA SAUCE", "CHEESE", "PEPPERONI"],
  },
  {
    name: "Ham and Pineapple",
    method:
      "1/ Roll the dough base to the required thickness and shape. 2/ Add sauce to the base. 3/ Top with cheese. 4/ Add 12 pieces of ham. 5/ Add 12 pieces of pineapple.",
    requiredSteps: ["ROLL DOUGH", "PIZZA SAUCE", "CHEESE", "HAM", "PINEAPPLE"],
  },
  {
    name: "Chicken",
    method:
      "1/ Roll the dough base to the required thickness and shape. 2/ Add sauce to the base. 3/ Top with cheese. 4/ Add 12 pieces of chicken",
    requiredSteps: ["ROLL DOUGH", "PIZZA SAUCE", "CHEESE", "CHICKEN"],
  },
  {
    name: "Vegetarian",
    method:
      "1/ Roll the dough base to the required thickness and shape. 2/ Add sauce to the base. 3/ Top with cheese. 4/ Add handful of onions. 5/ Add handful of peppers. 6/ Add small handful of mushrooms. 7/ Add garlic.",
    requiredSteps: [
      "ROLL DOUGH",
      "PIZZA SAUCE",
      "CHEESE",
      "ONIONS",
      "PEPPERS",
      "MUSHROOMS",
      "GARLIC",
    ],
  },
];

let orders = [
  {
    id: 1,
    pizzas: [
      {
        quantity: 1,
        name: "Ham and Pineapple",
      },
      {
        quantity: 2,
        name: "Pepperoni",
      },
    ],
  },
  {
    id: 2,
    pizzas: [
      {
        quantity: 2,
        name: "Margherita",
      },
      {
        quantity: 1,
        name: "Pepperoni",
      },
    ],
  },
  {
    id: 3,
    pizzas: [
      {
        quantity: 2,
        name: "Pepperoni",
      },
      {
        quantity: 1,
        name: "Margherita",
      },
      {
        quantity: 1,
        name: "Ham and Pineapple",
      },
    ],
  },
];

const ingredients = [
  "ROLL DOUGH",
  "PIZZA SAUCE",
  "CHEESE",
  "PEPPERONI",
  "HAM",
  "PINEAPPLE",
  "ONIONS",
  "PEPPERS",
  "MUSHROOMS",
  "GARLIC",
  "CHICKEN",
];

let oven = [];
const overCapacity = 6;
let pizzasCompletedForOrder = 0;
const startGameBtn = document.getElementById("startBtn");
const endGameBtn = document.getElementById("endBtn");
let gameStarted;
endGameBtn.style.display = "none";
const gameLength = 300;
let countdownTime = gameLength;

document.querySelector(
  "#gameLength"
).innerText = `Game length is ${gameLength} seconds`;

let gameTimerRef = "";
let ordersTimerRef = "";
let countdownTimerRef = "";
let cookingTime = 0;
let completedPizzas = 0;
//objective
//loop through all orders and display in the browser

//create a function : createOrderList()
//it will loop through the orders array

//for each order construct the following markup
//with dynamic order number and pizza name

/*
<div class="order_wrapper">
<h4>Order:1</h4>
<ul>
  <li>
    1 - <span>Ham and PineApple</span>
  </li>
  <li>
    2 - <span>Pepperoni</span>
  </li>
</ul>
</div>
*/
function createPizzaList(pizzas) {
  // create pizza ul for each order
  const pizzaList = buildElement("ul", "");

  pizzas.forEach((pizza) => {
    const li = buildElement("li", "");

    // create span tag
    const pizzaNameEle = buildElement("span", pizza.name);
    const liTextNode = buildElement("span", `${pizza.quantity} - `);

    li.appendChild(liTextNode);
    li.appendChild(pizzaNameEle);

    //adding class to pizza
    pizzaNameEle.classList.add("pizza_name");

    // create list item to show
    pizzaList.appendChild(li);
  });
  return pizzaList;
}

function createSingleOrder(order) {
  // wrapper
  const orderWrapper = buildElement("div", "");
  orderWrapper.classList.add("order-wrapper");

  //event listener
  orderWrapper.addEventListener("click", selectCurrentOrder);

  // order number
  const orderNumberEle = buildElement("h4", `Order: ${order.id}`);
  orderWrapper.appendChild(orderNumberEle);

  const pizzaList = createPizzaList(order.pizzas);
  orderWrapper.appendChild(pizzaList);

  return orderWrapper;
}

function createOrderList() {
  document.querySelector("#orders").innerHTML = "";
  orders.forEach((order) => {
    const singleOrder = createSingleOrder(order);
    document.querySelector("#orders").appendChild(singleOrder);
  });
}

function selectCurrentOrder(e) {
  const pizzas = document.querySelectorAll(".pizza_name");
  pizzas.forEach((pizza) => {
    pizza.addEventListener("click", setCurrentPizza);
  });

  if (document.querySelector("#working_on").children.length > 1) return;

  const element = e.target;
  console.log(element);

  const orderWrapper = element.closest(".order-wrapper");

  if (orderWrapper !== null) {
    orderWrapper.removeEventListener("click", selectCurrentOrder);
    const orderDiv = document.querySelector("#working_on");
    orderDiv.appendChild(orderWrapper);
  }
}

// Objective:create a helper function to take in
// an element and contents
// append the content to the element
// then return the new element

function buildElement(elementName, elementContent) {
  const element = document.createElement(elementName);
  const content = document.createTextNode(elementContent);
  element.appendChild(content);
  return element;
}

function setCurrentPizza(e) {
  const pizzaName = e.target.innerText;
  document.getElementById("current_pizza").innerText = pizzaName;
  setPizzaMethod(pizzaName);
}

function setPizzaMethod(pizzaName) {
  document.querySelector("#pizza_name").innerHTML = pizzaName;
  const selectedPizza = pizzas.find((pizza) => pizza.name === pizzaName);
  document.querySelector("#pizza_method").innerText = "";
  const pizzaMethod = selectedPizza.method.split(".");
  pizzaMethod.forEach((method) => {
    const steps = buildElement("p", method);
    document.querySelector("#pizza_method").appendChild(steps);
  });
}

function displayOvenItems() {
  document.querySelector("#oven").innerHTML = "";
  oven.forEach((pizza) => {
    const pizzaDiv = document.createElement("div");
    pizzaDiv.className = "pizza_div";
    const image = document.createElement("img");
    image.src = "pizza.svg";
    const pizzaName = buildElement("p", `${pizza.name}`);
    pizzaDiv.append(image, pizzaName);
    document.querySelector("#oven").appendChild(pizzaDiv);
  });
}

function addToOven() {
  pizzasCompletedForOrder++;
  const pizzaName = document.querySelector("#current_pizza").innerText;
  if (pizzaName) {
    const pizzaForOven = {
      name: pizzaName,
      timeAdded: Date.now(),
    };
    oven.push(pizzaForOven);
    displayOvenItems();
  }
  console.log(oven);
}

function startOfGame() {
  if (gameStarted) return;

  startGameBtn.style.display = "none";
  endGameBtn.style.display = "inline";

  gameStarted = true;
  const orders = document.getElementsByClassName("order_wrapper");

  Array.from(orders).forEach((order) => {
    order.remove();
  });
  createOrderList();

  document.querySelector("#message").innerText =
    "chef our first order are coming in!";

  countdownTimer();
  countdownTimerRef = setInterval(countdownTimer, 3000);

  ordersTimer();
  ordersTimerRef = setInterval(genrerateNewOrder, 3000);

  gameTimerRef = setTimeout(endOfGame, gameLength * 1000);
  checkOven();
}

function endOfGame() {
  if (!gameStarted) return;
  gameStarted = false;

  clearInterval(ordersTimerRef);
  clearInterval(countdownTimerRef);
  clearTimeout(gameTimerRef);

  startGameBtn.style.display = "inline";
}

document.querySelector("#addToOven").addEventListener("click", addToOven);
startGameBtn.addEventListener("click", startOfGame);
endGameBtn.addEventListener("click", endOfGame);

let orderNumber = orders.length + 1;
function genrerateNewOrder() {
  let pizzas = [];
  const orderItem = Math.ceil(Math.random() * 5);
  for (let i = 1; i <= orderItem; i++) {
    pizzas.push(generateNewPizza());
  }

  const newOrder = {
    id: orderNumber,
    pizzas,
  };
  orders.push(newOrder);
  orderNumber++;
  createOrderList();
}

function generateNewPizza() {
  const quantity = Math.ceil(Math.random() * 3);
  const randomPizza = pizzas[Math.floor(Math.random() * pizzas.length)];

  const pizza = {
    quantity,
    name: randomPizza.name,
  };
  return pizza;
}

function ordersTimer() {
  ordersTimerRef = setInterval(genrerateNewOrder, 3000);
}

function countdownTimer() {
  countdownTime -= 1;
  document.querySelector(
    "#gameLength"
  ).innerText = `Time left:${countdownTime}`;
}

function gameTimer() {
  setTimeout(endOfGame, gameLength * 1000);
}

function checkOven() {
  setInterval(() => {
    oven.forEach((pizza) => {
      if (Date.now() - cookingTime * 1000 > pizza.timeAdded) {
        oven.shift();
        displayOvenItems();
        completedPizzas++;
      }
    });
  }, 1000);
}
