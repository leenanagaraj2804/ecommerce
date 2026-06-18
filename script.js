let cart =
JSON.parse(localStorage.getItem("cart")) || [];

function saveCart(){
    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );
}

function addToCart(name,price){

    cart.push({
        name:name,
        price:price
    });

    saveCart();
    displayCart();
}

function displayCart(){

    const cartItems =
    document.getElementById("cartItems");

    const totalElement =
    document.getElementById("total");

    const itemCount =
    document.getElementById("itemCount");

    cartItems.innerHTML="";

    let total=0;

    cart.forEach((item,index)=>{

        total += item.price;

        const li =
        document.createElement("li");

        li.innerHTML=`
            ${item.name} - ₹${item.price}
            <button class="remove-btn"
            onclick="removeItem(${index})">
            Remove
            </button>
        `;

        cartItems.appendChild(li);
    });

    totalElement.textContent = total;
    itemCount.textContent = cart.length;
}

function removeItem(index){

    cart.splice(index,1);

    saveCart();
    displayCart();
}

function clearCart(){

    if(confirm("Clear all items?")){

        cart=[];

        saveCart();
        displayCart();
    }
}

function searchProducts(){

    let input =
    document.getElementById("searchInput")
    .value.toLowerCase();

    let cards =
    document.querySelectorAll(".product-card");

    cards.forEach(card=>{

        let productName =
        card.querySelector("h3")
        .textContent.toLowerCase();

        if(productName.includes(input)){
            card.style.display="block";
        }
        else{
            card.style.display="none";
        }
    });
}

displayCart();