swal({
    title: "Tienda Virtual",
    text: "bienvenidos a la tienda de El Buen Comer!",
    button: "Joya!",
});


/*let nombre = "Repasador"
let cantidad = 1

let precioProducto

if(nombre == "Remera") {
    precioProducto = 4000
} else if(nombre == "Delantal") {
    precioProducto = 1200
} else if (nombre == "Olla") {
    precioProducto = 50000
} else if (nombre == "Set de cubiertos") {
    precioProducto = 10000
} else if (nombre == "Repasador") {
    precioProducto = 500
} else if (nombre == "tabla para cortar") {
    precioProducto = 2000
} else { precioProducto = 0}

let precioTotal = cantidad * precioProducto

console.log("Su total es de " + precioTotal + " pesos")


let entrada = prompt ("Para saber que no eres un robot, por favor escribe la palabra COMIDA en la barra de texto");
while (entrada !="COMIDA") {
    alert ("El usuario ingresó " + entrada);
    entrada = prompt ("Para saber que no eres un robot, por favor escribe la palabra COMIDA en la barra de texto");
}

const Item1 = {
    nombre: "Remera",
    costo: 4000,
};

const Item2 = {
    nombre: "Delantal",
    costo: 1200,
};

const Item3 = {
    nombre: "Olla",
    costo: 50000,
};

const Item4 = {
    nombre: "Set de cubiertos",
    costo: 10000,
};

const Item5 = {
    nombre: "Repasador",
    costo: 500,
};

const Item6 = {
    nombre: "tabla para cortar",
    costo: 2000,
};

const arrayA = ["Remera", "Delantal", "Olla", "Set de cubiertos", "Repasador", "tabla para cortar",];
console.log(arrayA [2]);

const productos = ["Remera", "Delantal", "Olla", "Set de cubiertos", "Repasador", "tabla para cortar"];

/*
for (let i=0;i <6; i++){
    alert(productos[i]);
}

productos.push(2000);
console.log(productos); */

const cartItemsElement = document.getElementById('cart-items');
const cartTotalElement = document.getElementById('cart-total');
const addToCartButtons = document.querySelectorAll('.add-to-cart');
const clearCartButton = document.getElementById('clear-cart');

let cartItems = [];
let cartTotal = 0;

addToCartButtons.forEach(button => {
  button.addEventListener('click', addToCart);
});

clearCartButton.addEventListener('click', clearCart);

if (localStorage.getItem('cartItems')) {
  cartItems = JSON.parse(localStorage.getItem('cartItems'));
  calculateCartTotal();
  updateCartUI();
}

function addToCart(event) {
  const button = event.target;
  const productId = button.getAttribute('data-product-id');
  const productElement = button.parentNode;
  const productPrice = parseFloat(productElement.querySelector('p').textContent.replace('Precio: $', '')); // Corregido
  const productName = productElement.querySelector('h3').textContent;

  const item = {
    id: productId,
    name: productName,
    price: productPrice
  };

  cartItems.push(item);
  calculateCartTotal();
  updateCartUI();
  saveCartData();
  button.classList.add('selected');
}

function calculateCartTotal() {
  cartTotal = cartItems.reduce((total, item) => total + item.price, 0);
}

function updateCartUI() {
  cartItemsElement.innerHTML = '';
  cartTotalElement.textContent = `$${cartTotal.toFixed(3)}`;

  cartItems.forEach(item => {
    const cartItem = document.createElement('li');
    cartItem.textContent = `${item.name} - $${item.price.toFixed(2)}`;
    cartItemsElement.appendChild(cartItem);
  });
}

function clearCart() {
  cartItems = [];
  cartTotal = 0;
  updateCartUI();
  saveCartData();
  addToCartButtons.forEach(button => {
    button.classList.remove('selected');
  });
}

function saveCartData() {
  localStorage.setItem('cartItems', JSON.stringify(cartItems));
}


function enviarDatos(event) {
  event.preventDefault();

  var nombre = document.getElementById('nombre').value;
  var email = document.getElementById('email').value;
  var contrasena = document.getElementById('contrasena').value;

  var datos = {
    nombre: nombre,
    email: email,
    contrasena: contrasena
  };

  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(datos)
  })
  .then(function(response) {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error('Error en la respuesta del servidor');
    }
  })
  .then(function(data) {
    console.log(data);
    alert('Datos enviados correctamente');
  })
  .catch(function(error) {
    console.log(error);
    alert('Error al enviar los datos');
  });
}