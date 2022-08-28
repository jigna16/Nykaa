
import navbar_imp from "../component/navbar_imp.js"
document.getElementById("navbar").innerHTML=navbar_imp()






// footer part

import footer_imp from "../component/footer_imp.js"
document.getElementById("footer_imp").innerHTML=footer_imp()

document.getElementById('submitmail').addEventListener('click',function (){
  //  hello();
  myTimeout = setTimeout(function(){
    document.getElementById('emailSendbtnSP').style.visibility = 'hidden';
  }, 2000);
  event.preventDefault();
  
   document.getElementById('emailSendbtnSP').style.visibility = 'visible';
  }
  )







let addToCart = JSON.parse(localStorage.getItem("facePrimer")) || [];
let showDescription = JSON.parse(localStorage.getItem("showDesc")) || [];

let container = document.querySelector("#fshow_product");

function showDetails (data) {

    data.forEach(function (el) {
        container.innerHTML = null;
        
        let multi_images = document.createElement("div");
        multi_images.setAttribute("id", "fmulti_images");

        let fimg1 = document.createElement("img");
        fimg1.src = el.img1;

        let fimg2 = document.createElement("img");
        fimg2.src = el.img2;

        let fimg3 = document.createElement("img");
        fimg3.src = el.img3;

        let fimg4 = document.createElement("img");
        fimg4.src = el.img4;

        let fimg5 = document.createElement("img");
        fimg5.src = el.img5;

        multi_images.append(fimg1,fimg2,fimg3,fimg4,fimg5);

        let product_image = document.createElement("div");
        product_image.setAttribute("id", "fproduct_image");

        let fprod_img = document.createElement("img");
        fprod_img.src = el.img1;

        product_image.append(fprod_img);

        let product_desc = document.createElement("div");
        product_desc.setAttribute("id", "fproduct_desc");

        let name = document.createElement("h2");
        name.innerText = el.name;

        let price = document.createElement("h2");
        price.innerText = `MRP: ₹ ${el.price}`;
        price.setAttribute("id", "fprice");

        let rating = document.createElement("p");
        rating.innerText = `Rating: ${el.rating} / 5`;

        let button = document.createElement("button");
        button.innerText = "Add to bag";
        button.addEventListener("click", function () {
            addToCart.push(el);
            localStorage.setItem("facePrimer", JSON.stringify(addToCart));
            alert("product has been added to wishlist")

            window.location.href="cart.html"
        });

        product_desc.append(name,rating,price,button);

        container.append(multi_images,product_image,product_desc);
    });
}
showDetails(showDescription);


// footer js
