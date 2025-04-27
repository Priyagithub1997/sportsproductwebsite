let products = [
    { id: 1, name: "Cricket Ball", price: 1200, Quantity: 1, image: "/images/ball.jpg", category: "Ball" },
    { id: 2, name: "Basket Ball", price: 800, Quantity: 1, image: "/images/ball.jpg", category: "Ball" },
    { id: 3, name: "Volley Ball", price: 500, Quantity: 1, image: "/images/ball.jpg", category: "Ball" },
    { id: 4, name: "Cricket Bat", price: 150, Quantity: 1, image: "/images/bat.jpg", category: "Bat" },
    { id: 5, name: "Tennis Bat", price: 250, Quantity: 1, image: "/images/bat.jpg", category: "Bat" },
    { id: 6, name: "Hockey Bat", price: 600, Quantity: 1, image: "/images/bat.jpg", category: "Bat" },
    { id: 7, name: "T-Shirt", price: 100, Quantity: 1, image: "/images/sportsdress.jpg", category: "Sports Dress" },
    { id: 8, name: "Track Pants", price: 50, Quantity: 1, image: "/images/sportsdress.jpg", category: "Sports Dress" }
];



function displayballs() {
    document.getElementById("banner-section").style.display = "none";
    document.getElementById("category-section").style.display = "none";



    var productList = document.getElementById("productList");
    productList.innerHTML = "";


    products.forEach((product) => {


        var div = document.createElement("div");

        if (product.category === "Ball") {
            console.log(product);

            div.className = "col m-5 border border-primary p-3 ";


            div.innerHTML = `  
                  <img src=${product.image}>
                  <div class="card-body ">
                    <h5 class="card-title">${product.name}</h5>
                    <p>Rs.${product.price}</p>
                    <a href="#" class="btn btn-primary" onclick="addToCart(${product.id},'${product.image}','${product.name}',${product.price},${product.Quantity})">Add to Cart</a>              </div>`;
        }

        productList.appendChild(div);
    })

}

function displaybats() {
    document.getElementById("banner-section").style.display = "none";
    document.getElementById("category-section").style.display = "none";



    var productList = document.getElementById("productList");
    productList.innerHTML = "";


    products.forEach((product) => {


        var div = document.createElement("div");

        if (product.category === "Bat") {
            console.log(product);

            div.className = "col m-5 border border-primary p-3 ";


            div.innerHTML = `  
                  <img src=${product.image}>
                  <div class="card-body ">
                    <h5 class="card-title">${product.name}</h5>
                    <p>Rs.${product.price}</p>
                    <a href="#" class="btn btn-primary" onclick="addToCart(${product.id},'${product.image}','${product.name}',${product.price},${product.Quantity})">Add to Cart</a>              </div>`;
        }

        productList.appendChild(div);
    })

}

function displaydress() {
    document.getElementById("banner-section").style.display = "none";
    document.getElementById("category-section").style.display = "none";



    var productList = document.getElementById("productList");
    productList.innerHTML = "";


    products.forEach((product) => {


        var div = document.createElement("div");

        if (product.category === "Sports Dress") {
            console.log(product);

            div.className = "col m-5 border border-primary p-3 ";


            div.innerHTML = `  
                  <img src=${product.image}>
                  <div class="card-body ">
                    <h5 class="card-title">${product.name}</h5>
                    <p>Rs.${product.price}</p>
                    <a href="#" class="btn btn-primary" onclick="addToCart(${product.id},'${product.image}','${product.name}',${product.price},${product.Quantity})">Add to Cart</a>             </div>`;
        }

        productList.appendChild(div);
    })

}


/* function filteredProducts() {
    var productList = document.getElementById("productList");
    productList.innerHTML = "";

    var searchbar = document.getElementById("searchbar").value.toLowerCase();
    console.log(parseFloat(searchbar));
    if (!isNaN(parseFloat(searchbar))) {
        var filtered = products.filter((product) => (product.price <= parseFloat(searchbar)));
    } else {
        var filtered = products.filter((product) => (product.name.toLowerCase().includes(searchbar)));
    }



    console.log(filtered);


    filtered.forEach((product) => {

        var li = document.createElement("li");

        li.innerHTML = `  <section class="balls-section m-5">
        <h1 class="text-center m-5">${product.category}</h1>
        <div class="row row-cols-1 row-cols-md-4 g-4">
          <div class="col ">
            <div class="card ">
              <img src=${product.image} class="card-img-top" alt="...">
              <div class="card-body ">
                <h5 class="card-title">${product.name}</h5>
                <p>Rs.${product.price}</p>
                <a href="#" class="btn btn-primary">Add to Cart</a>              </div>
            </div>
          </div>
  
          
       
        </div>
      </section>`;

        productList.appendChild(li);

    })

} */







function addToCart(id, image, name, price, Quantity) {

    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    console.log(id);
    var ispresent = cart.filter((c) => c.id === id);
    console.log(ispresent);
    if (ispresent.length === 1) {
        console.log(true);
        console.log("dont add");
        console.log(ispresent.Quantity);
        cart.map((c) => {
            if (c.id === id) {
                addQuantity(c.id);
            }
        })


        loadCart();

    } else {
        console.log(false);
        cart.push({ id, image, name, price, Quantity });
        localStorage.setItem("cart", JSON.stringify(cart));
        loadCart();

    }
}

function removeFromCart(index) {

    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    loadCart();
}
function addQuantity(id) {
    console.log(id);
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let cartadd = cart.find((item) => item.id === id);
    console.log(cartadd);
    if (cartadd) {
        if (cartadd.Quantity >= 0) {
            cartadd.Quantity += 1;
        }
    }


    localStorage.setItem("cart", JSON.stringify(cart));
    loadCart();
}
function minusQuantity(id) {

    console.log(id);
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let cartadd = cart.find((item) => item.id === id);
    console.log(cartadd);
    if (cartadd) {
        if (cartadd.Quantity > 1) {
            cartadd.Quantity -= 1;
        }
    }


    localStorage.setItem("cart", JSON.stringify(cart));
    loadCart();

}



function checkout(id) {
    console.log("clicked");
    window.location.href = `Checkout.html?id=${id}`;
   
    console.log("checked");


}





function clearCart() {
    localStorage.removeItem("cart");
   
    loadCart();
}



function checkingout() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    console.log(cart);
    const url = window.location.href;

    var checkoutid = url.split("=")[1];
    var checkoutitem = cart.find((item) => item.id === parseFloat(checkoutid));

    var Checkoutitems = document.getElementById("Checkoutitems");


    var div = document.createElement("div");

    div.innerHTML = `<div class="border border-primary p-4 rounded-5 col-md-3 text-center fw-bold">

  <img src="${checkoutitem.image}" heigth="100px" width="100px"><br>
  ${checkoutitem.name}<br>
    Price: Rs.${checkoutitem.price}<br>
Qty: ${checkoutitem.Quantity}<br>
             
</div>
<span class="text-center fw-bold m-5 p-5 fs-4">Total: ${checkoutitem.Quantity * checkoutitem.price} </span>`;

    Checkoutitems.appendChild(div);

}

checkingout();

function orderplaced() {
    window.alert("Order Placed");
}











