let cartLS = JSON.parse(localStorage.getItem("concealer")) || [];
let showDescription = JSON.parse(localStorage.getItem("showDesCon")) || [];

let container = document.querySelector("#cshow_product");

function showDetails (data) {

    data.forEach(function (el) {
        container.innerHTML = null;
        
        let multi_images = document.createElement("div");
        multi_images.setAttribute("id", "cmulti_images");

        let cimg1 = document.createElement("img");
        cimg1.src = el.img1;

        let cimg2 = document.createElement("img");
        cimg2.src = el.img2;

        let cimg3 = document.createElement("img");
        cimg3.src = el.img3;

        let cimg4 = document.createElement("img");
        cimg4.src = el.img4;

        let cimg5 = document.createElement("img");
        cimg5.src = el.img5;

        multi_images.append(cimg1,cimg2,cimg3,cimg4,cimg5);

        let product_image = document.createElement("div");
        product_image.setAttribute("id", "cproduct_image");

        let cprod_img = document.createElement("img");
        cprod_img.src = el.img1;

        product_image.append(cprod_img);

        let product_desc = document.createElement("div");
        product_desc.setAttribute("id", "cproduct_desc");

        let name = document.createElement("h2");
        name.innerText = el.name;

        let price = document.createElement("h2");
        price.innerText = `MRP: ₹ ${el.price}`;
        price.setAttribute("id", "cprice");

        let rating = document.createElement("p");
        rating.innerText = `Rating: ${el.rating} / 5`;

        let button = document.createElement("button");
        button.innerText = "Add to Bag";
        button.addEventListener("click", function () {
            addToCart.push(el);
            localStorage.setItem("concealer", JSON.stringify(addToCart));
        });

        product_desc.append(name,rating,price,button);

        container.append(multi_images,product_image,product_desc);
    });
}
showDetails(showDescription);