let box = document.querySelector("#fslider");
let slider = document.querySelector("#fslider > img");

let buttons = document.querySelectorAll("#fslider>button");

let imgArray = [
    "https://images-static.nykaa.com/uploads/fe975d47-3792-4599-978f-ee185ef9f114.jpg?tr=w-2400,cm-pad_resize",
    "https://images-static.nykaa.com/uploads/381bc88c-1637-49da-9004-eda6690cf3f1.jpg?tr=w-2400,cm-pad_resize",
    "https://images-static.nykaa.com/uploads/3c9e27f1-705d-4d5a-8ec3-c9c3c28dc9e3.jpg?tr=w-2400,cm-pad_resize"
]
let imgNum = 0;
buttons[0].addEventListener("click", function () {
    if(imgNum===0){
        imgNum = imgArray.length-1;
    }else {
        imgNum--;
    }
    slider.src = imgArray[imgNum];
});

buttons[1].addEventListener("click",function() {
    if(imgNum===imgArray.length-1){
        imgNum = 0;
    }else {
        imgNum++;
    }
    slider.src = imgArray[imgNum];
});
let id;
function makeSlider() {
    box.innerHTML = null;
    
    slider.src = imgArray[imgNum];
    box.append(slider);
    imgNum++;

    id = setInterval( function () {
        if (imgNum === imgArray.length) {
            imgNum = 0;
        }
        slider.src = imgArray[imgNum];
        box.append(slider);
        imgNum++;
    },2000);
}
makeSlider();
// clearInterval(id);

facePrimerArr = [
    {img1:"https://images-static.nykaa.com/media/catalog/product/f/a/face-primer.jpg",
    img2:"https://images-static.nykaa.com/media/catalog/product/8/9/8904245706623_01.jpg",
    img3:"https://images-static.nykaa.com/media/catalog/product/8/9/8904245706623_02.jpg",
    img4:"https://images-static.nykaa.com/media/consc/cruelty.jpg",
    img5:"https://images-static.nykaa.com/media/catalog/product/8/9/8904245706623_03.jpg",
    name: "Nykaa Prep Me Up! Face Primer",
    price: 549,
    rating: 4.4,
    index:1
    },
    {img1:"https://images-static.nykaa.com/media/catalog/product/2/4/24815_h-8901030790065.jpg",
    img2:"https://images-static.nykaa.com/media/catalog/product/2/4/24815_s1-8901030790065.jpg",
    img3:"https://images-static.nykaa.com/media/catalog/product/2/4/24815_s2-8901030790065.jpg",
    img4:"https://images-static.nykaa.com/media/catalog/product/2/4/24815_s3-8901030790065.jpg",
    img5:"https://images-static.nykaa.com/media/catalog/product/2/4/24815_s4-8901030790065.jpg",
    name: "Lakme Absolute Blur Perfect Makeup Primer - Mini",
    price: 299,
    rating: 4.3,
    index:2
    },
    {img1:"https://images-static.nykaa.com/media/catalog/product/5/2/52cc3378904330900585_01.jpg",
    img2:"https://images-static.nykaa.com/media/catalog/product/5/2/52cc3378904330900585_02.jpg",
    img3:"https://images-static.nykaa.com/media/catalog/product/5/2/52cc3378904330900585_03.jpg",
    img4:"https://images-static.nykaa.com/media/consc/cruelty.jpg",
    img5:"https://images-static.nykaa.com/media/catalog/product/5/2/52cc3378904330900585_4.jpg",
    name: "Kay Beauty Colour Correcting Primer - Yellow",
    price: 679,
    rating: 4,
    index: 3
    },
    {img1:"https://images-static.nykaa.com/media/catalog/product/0/4/04210e16902395773153_1.jpg",
    img2:"https://images-static.nykaa.com/media/catalog/product/0/4/04210e16902395773153_2.jpg",
    img3:"https://images-static.nykaa.com/media/catalog/product/0/4/04210e16902395773153_3.jpg",
    img4:"https://images-static.nykaa.com/media/catalog/product/0/4/04210e16902395773153_4.jpg",
    img5:"https://images-static.nykaa.com/media/catalog/product/0/4/04210e16902395773153_5.jpg",
    name: "Maybelline New York Fit Me Primer - Matte+Poreless",
    price: 549,
    rating: 4.4,
    index: 4
    },
    {img1:"https://images-static.nykaa.com/media/catalog/product/3/a/3aaaf796946537035242_1.jpg",
    img2:"https://images-static.nykaa.com/media/catalog/product/3/a/3aaaf796946537035242_2.jpg",
    img3:"https://images-static.nykaa.com/media/catalog/product/3/a/3aaaf796946537035242_3.jpg",
    img4:"https://images-static.nykaa.com/media/catalog/product/3/a/3aaaf796946537035242_4.jpg",
    img5:"https://images-static.nykaa.com/media/catalog/product/3/a/3aaaf796946537035242_5.jpg",
    name: "L'Oreal Paris Base Magique Transforming Smoothing Primer",
    price: 807,
    rating: 4.4,
    index: 5
    },
    {img1:"https://images-static.nykaa.com/media/catalog/product/2/c/2ce9017N_8904052428978_1.jpg",
    img2:"https://images-static.nykaa.com/media/catalog/product/2/c/2ce9017N_8904052428978_2.jpg",
    img3:"https://images-static.nykaa.com/media/catalog/product/2/c/2ce9017N_8904052428978_3.jpg",
    img4:"https://images-static.nykaa.com/media/consc/cruelty.jpg",
    img5:"https://images-static.nykaa.com/media/catalog/product/2/c/2ce9017N_8904052428978_4.jpg",
    name: "Colorbar Perfect Match Primer",
    price: 680,
    rating: 4.4,
    index: 6
    },
    {img1:"https://images-static.nykaa.com/media/catalog/product/f/c/fca228c8903380004014__1_.jpg",
    img2:"https://images-static.nykaa.com/media/catalog/product/f/c/fca228c8903380004014__2_.jpg",
    img3:"https://images-static.nykaa.com/media/catalog/product/f/c/fca228c8903380004014__3_.jpg",
    img4:"https://images-static.nykaa.com/media/catalog/product/f/c/fca228c8903380004014__4_.jpg",
    img5:"https://images-static.nykaa.com/media/catalog/product/f/c/fca228c8903380004014__5_.jpg",
    name: "Faces Canada Ultime Pro Primerizer Primer + Moisturizer",
    price: 679,
    rating: 4.4,
    index: 7
    },
    {img1:"https://images-static.nykaa.com/media/catalog/product/c/f/cf80695800897129965_1.jpg",
    img2:"https://images-static.nykaa.com/media/catalog/product/c/f/cf80695800897129965_2.jpg",
    img3:"https://images-static.nykaa.com/media/catalog/product/c/f/cf80695800897129965_3.jpg",
    img4:"https://images-static.nykaa.com/media/catalog/product/c/f/cf80695800897129965_4.jpg",
    img5:"https://images-static.nykaa.com/media/catalog/product/c/f/cf80695800897129965_5.jpg",
    name: "NYX Professional Makeup Plump Right Back",
    price: 1499,
    rating: 4.8,
    index: 8
    },
    {img1:"https://images-static.nykaa.com/media/catalog/product/8/8/887fa80811338026194_1.jpg",
    img2:"https://images-static.nykaa.com/media/catalog/product/8/8/887fa80811338026194_2.JPG",
    img3:"https://images-static.nykaa.com/media/catalog/product/8/8/887fa80811338026194_3.jpg",
    name: "Butter London Anti-Aging Shadow & Primer",
    price: 1800,
    rating: 4.9,
    index: 9
    },
    {img1:"https://images-static.nykaa.com/media/catalog/product/7/3/739429a773602345830_rv__1.jpg",
    img2:"https://images-static.nykaa.com/media/catalog/product/7/3/739429a773602345830_rv__2.jpg",
    img3:"https://images-static.nykaa.com/media/catalog/product/7/3/739429a773602345830_rv__3.jpg",
    img4:"https://images-static.nykaa.com/media/catalog/product/7/3/739429a773602345830_rv__4.jpg",
    name: "M. A. C Prep + Prime Fix+ - Original",
    price: 2150,
    rating: 4.5,
    index: 10
    },
    {img1:"https://images-static.nykaa.com/media/catalog/product/0/2/02e3d0d8901030654886_h.jpg",
    img2:"https://images-static.nykaa.com/media/catalog/product/0/2/02e3d0d8901030654886_1.jpg",
    img3:"https://images-static.nykaa.com/media/catalog/product/0/2/02e3d0d8901030654886_2.jpg",
    img4:"https://images-static.nykaa.com/media/catalog/product/0/2/02e3d0d8901030654886_3.jpg",
    img5:"https://images-static.nykaa.com/media/catalog/product/0/2/02e3d0d8901030654886_4.jpg",
    name: "Lakme 9 to 5 Primer + Matte Powder Foundation Compact - Ivory Cream",
    price: 600,
    rating: 4.3,
    index: 11
    },
    {img1:"https://images-static.nykaa.com/media/catalog/product/n/y/nykac00000142_1.jpg",
    img2:"https://images-static.nykaa.com/media/catalog/product/n/y/nykac00000142_2.jpg",
    img3:"https://images-static.nykaa.com/media/catalog/product/n/y/nykac00000142_3.jpg",
    img4:"https://images-static.nykaa.com/media/consc/cruelty.jpg",
    img5:"https://images-static.nykaa.com/media/catalog/product/n/y/nykac00000142_4.jpg",
    name: "Nykaa Prep Me Up! Mini Primer",
    price: 129,
    rating: 4.3,
    index: 12
    },
    {img1:"https://images-static.nykaa.com/media/catalog/product/9/7/971a3858904207502386_1.jpg",
    img2:"https://images-static.nykaa.com/media/catalog/product/9/7/971a3858904207502386_2.jpg",
    img3:"https://images-static.nykaa.com/media/catalog/product/9/7/971a3858904207502386_3.jpg",
    img4:"https://images-static.nykaa.com/media/catalog/product/9/7/971a3858904207502386_4.jpg",
    name: "Insight Cosmetics 3 In 1 Long Lasting Primer",
    price: 260,
    rating: 4.4,
    index: 13
    },
    {img1:"https://images-static.nykaa.com/media/catalog/product/3/3/3350900000011.jpg",
    name: "Embryolisee Lait-Creme Concentrate Nourishing Moisturizer",
    price: 2200,
    rating: 4.5,
    index: 14
    },
    {img1:"https://images-static.nykaa.com/media/catalog/product/l/a/lakm_-absolute-blur-perfect-makeup-primer.jpg",
    img2:"https://images-static.nykaa.com/media/catalog/product/a/6/a62cd0d8901030561924_1.jpg",
    img3:"https://images-static.nykaa.com/media/catalog/product/a/6/a62cd0d8901030561924_2.jpg",
    img4:"https://images-static.nykaa.com/media/catalog/product/p/r/primer_4.jpg",
    name: "Lakme Absolute Blur Perfect Makeup Primer",
    price: 800,
    rating: 4.4,
    index: 15
    },
    {img1:"https://images-static.nykaa.com/media/catalog/product/c/a/ca6f446773602368778_0.jpg",
    img2:"https://images-static.nykaa.com/media/catalog/product/c/a/ca6f446773602368778_1.jpg",
    img3:"https://images-static.nykaa.com/media/catalog/product/c/a/ca6f446nymac_acert.jpg",
    name: "M.A.C Prep + Prime Fix+ / Mini",
    price: 1200,
    rating: 4.3,
    index: 16
    },
    {img1:"https://images-static.nykaa.com/media/catalog/product/9/8/98e21ac8904052433385_1.jpg",
    img2:"https://images-static.nykaa.com/media/catalog/product/9/8/98e21ac8904052433385_2.jpg",
    img3:"https://images-static.nykaa.com/media/catalog/product/9/8/98e21ac8904052433385_3.jpg",
    img4:"https://images-static.nykaa.com/media/consc/cruelty.jpg",
    name: "Colorbar Flawless Finish Primer",
    price: 399,
    rating: 4.5,
    index: 16
    },
    {img1:"https://images-static.nykaa.com/media/catalog/product/2/2/221a54b5060696174084-1.jpg",
    img2:"https://images-static.nykaa.com/media/catalog/product/2/2/221a54b5060696174084-2.jpg",
    img3:"https://images-static.nykaa.com/media/catalog/product/2/2/221a54bnycharolettetilbury_acert.jpg",
    name: "Charlotte Tilbury Hollywood Flawless Filter Mini - 2 Fair",
    price: 1500,
    rating: 4.3,
    index: 17
    },
    {img1:"https://images-static.nykaa.com/media/catalog/product/5/0/5060332329502_1.jpg",
    img2:"https://images-static.nykaa.com/media/catalog/product/5/0/5060332329502_2light.jpg",
    img3:"https://images-static.nykaa.com/media/catalog/product/a/u/authenticity-certificate-ct---nykaa_120.jpg",
    name: "Charlotte Tilbury Hollywood Flawless Filter - 2 Pale",
    price: 4000,
    rating: 4.6,
    index: 18
    },
    {img1:"https://images-static.nykaa.com/media/catalog/product/a/2/a2b384e8906090497428_1.jpg",
    img2:"https://images-static.nykaa.com/media/catalog/product/a/2/a2b384e8906090497428_2.jpg",
    img3:"https://images-static.nykaa.com/media/catalog/product/a/2/a2b384e8906090497428_3.jpg",
    img4:"https://images-static.nykaa.com/media/consc/vegan_cruelty.jpg",
    name: "SUGAR The Base Of Glory Pore Minimizing Primer",
    price: 639,
    rating: 4.4,
    index: 19
    }
]
let cartLS = JSON.parse(localStorage.getItem("facePrimer")) || [];
let showDescription = JSON.parse(localStorage.getItem("showDesc")) || [];
let container = document.querySelector("#fproducts");

function appendData(data) {
    container.innerHTML = null;
    data.forEach(function (el) {
        
        let div = document.createElement("div");

        let feature = document.createElement("p");
        feature.innerText = "FEATURED";

        let image = document.createElement("img");
        image.src = el.img1;

        let name = document.createElement("h4");
        name.innerText = el.name;

        let price = document.createElement("h3");
        price.innerText = `MRP: ₹ ${el.price}`;

        let rating = document.createElement("p");
        rating.innerText = `Rating: ${el.rating} / 5`;

        let button = document.createElement("button");
        button.innerText = "Add to Bag";
        button.addEventListener("click", function(){
            cartLS.push(el);
            localStorage.setItem("facePrimer", JSON.stringify(cartLS));
        });

        div.append(feature,image,name,price,rating,button);
        container.append(div);

        div.addEventListener("click", function () {
            window.location.href = "./fpdesc.html";
            showDescription.push(el);
            localStorage.setItem("showDesc", JSON.stringify(showDescription));
        });
    });
}
appendData(facePrimerArr);

// sorting part 
let sort1 = document.querySelector("#fbyPrice");
sort1.addEventListener("change", function () {
    if (sort1.value === "sby") {
        window.location.reload();
    }
    if (sort1.value === "htl") {
        let highToLow = facePrimerArr.sort(function (a,b) {
            if (a.price > b.price) return -1;
            if (a.price < b.price) return 1;
        });
        appendData(highToLow);
    }
    if (sort1.value === "lth") {
        let lowToHigh = facePrimerArr.sort(function (a,b) {
            if (a.price > b.price) return 1;
            if (a.price < b.price) return -1;
        });
        appendData(lowToHigh);
    }
});
let sort2 = document.querySelector("#fbyRating");
sort2.addEventListener("change", function () {
    if (sort2.value === "sbr") {
        window.location.reload();
    }
    if (sort2.value === "htlr") {
        let highToLowRate = facePrimerArr.sort(function (a,b) {
            if (a.price > b.price) return -1;
            if (a.price < b.price) return 1;
        });
        appendData(highToLowRate);
    }
    if (sort2.value === "lthr") {
        let lowToHighRate = facePrimerArr.sort(function (a,b) {
            if (a.price > b.price) return 1;
            if (a.price < b.price) return -1;
        });
        appendData(lowToHighRate);
    }
});