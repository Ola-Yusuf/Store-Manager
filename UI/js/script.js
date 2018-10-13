function validateLoginForm(){
    let error = [];
    error.push(validatePassword());
    error.push(validateEmail());
    if(error.includes("hasError")){
        return false;
    }else{
        return true; 
    }  
}
 
function validatePassword(){
    let input = document.getElementById('password').value;
    if(input.length > 5 && input.length < 11){
        document.getElementById('password').classList.remove('invalid');
        document.getElementById('passwordError').style.display = 'none';
    }else{
        document.getElementById('password').classList.add('invalid');
        document.getElementById('passwordError').style.display = 'block';
        return "hasError";
    }
}

function validateEmail(){
    let input = document.getElementById('email');
    if(input.value.match(/\S+@\S+\.\S+/)){
        input.classList.remove('invalid');
        document.getElementById('emailError').style.display = 'none';
    }else{
        input.classList.add('invalid');
        document.getElementById('emailError').style.display = 'block';
        return "hasError";
    }
}

let navigateTo = (url) => window.location.assign(url);

function openNav() {
    document.getElementById("sidenav").style.width = "25%";
    document.getElementById("container").style.width = "55%";
    document.getElementById("container").style.marginLeft = "6%";
    document.getElementById("openbtn").style.display = "none";
}

function closeNav() {
    document.getElementById("sidenav").style.width = "0";
    document.getElementById("container").style.width= "80%";
    document.getElementById("container").style.marginLeft = "0";
    document.getElementById("openbtn").style.display = "block";
}

let  searchTable = () => {
    let input, filter, table, tr, td, i;
    input = document.getElementById("search");
    filter = input.value.toUpperCase();
    table = document.getElementById("table");
    tr = table.getElementsByTagName("tr");

    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];
      if (td) {
        if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      } 
    }
  }

let cartSet = new Set();
let addToCart = (id) => {
    cartSet.has(id) ? alert("Already Added") : '';
    cartSet.add(id);
    document.getElementById("productInCart").textContent = " "+cartSet.size;
    sessionStorage.setItem('productToBeSold', Array.from(cartSet));
    document.getElementById("createSalesBtn").disabled = false;
}
let getProductsInCart = () => sessionStorage.getItem('productToBeSold');
let clearSession = () => sessionStorage.clear();

let increaseProductCost = (price, quantity, dispalyCost, maxAvailable) => {
    let pQuantity = parseInt(document.getElementById(quantity).textContent) + 1;
    if( pQuantity < maxAvailable){
        document.getElementById(quantity).textContent = pQuantity;
        document.getElementById(dispalyCost).textContent = price * pQuantity;
        document.getElementById("sumTotal").textContent = parseInt(document.getElementById("sumTotal").textContent) + price;
    }else{
        alert("Maximum Quantity Attain");
    }
}

let decreaseProductCost = (price, quantity, dispalyCost) => {
    let pQuantity = parseInt(document.getElementById(quantity).textContent) - 1;
    if( pQuantity !== 0){
        document.getElementById(quantity).textContent = pQuantity;
        document.getElementById(dispalyCost).textContent = price * pQuantity;
        document.getElementById("sumTotal").textContent = parseInt(document.getElementById("sumTotal").textContent) - price;
    }else{
        alert("Lowest Quantity Attain");
    }
}