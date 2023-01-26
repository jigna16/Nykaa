
let imgArr = [
    "https://images-static.nykaa.com/uploads/22088ac7-681e-48ef-b787-be18b5f3f3a3.jpg?tr=w-2400,cm-pad_resize",
    "https://images-static.nykaa.com/uploads/7f4c7a1d-29df-4370-b728-7151fadd1502.jpg?tr=w-2400,cm-pad_resize",
    "https://images-static.nykaa.com/uploads/208af9b5-37d3-4f39-b8db-8ef2fc8d5366.jpg?tr=w-2400,cm-pad_resize"
]
let box = document.querySelector("#cslider");
let counter = 0;
let id;

function makeSlider() {
    box.innerHTML = null;

    let img = document.createElement("img");

    img.src = imgArr[counter];
    box.append(img);
    counter++;

    id = setInterval (function () {
        if(counter === imgArr.length){
            counter = 0;
        }
        img.src = imgArr[counter];
        box.append(img);
        counter++;
    }, 2000);
}
makeSlider();
// clearInterval(id);

concealer = [
    {img1: "https://images-static.nykaa.com/media/catalog/product/a/5/a5a721b8904245704162_3.jpg",
    img2: "https://images-static.nykaa.com/media/catalog/product/a/5/a5a721b8904245704162_1.jpg",
    img3: "https://images-static.nykaa.com/media/catalog/product/a/5/a5a721b8904245704162_2.jpg",
    img4: "https://images-static.nykaa.com/media/consc/vegan_cruelty.jpg",
    img5: "https://images-static.nykaa.com/media/catalog/product/a/5/a5a721b8904245704162_4.jpg",
    name: "Nykaa SKINgenius Conceal & Correct Palette - Light",
    price: 1020,
    rating: 4.3,
    index: 1
    },
    {img1: "https://images-static.nykaa.com/media/catalog/product/0/4/04a129c6902395487432__1_.png",
    img2: "https://images-static.nykaa.com/media/catalog/product/0/4/04a129c6902395487432__1_.jpg",
    img3: "https://images-static.nykaa.com/media/catalog/product/0/4/04a129c6902395487432__2_.jpg",
    img4: "https://images-static.nykaa.com/media/catalog/product/0/4/04a129c6902395487432__2_.png",
    img5: "https://images-static.nykaa.com/media/catalog/product/0/4/04a129c6902395487432__2_.png",
    name: "Maybelline New York Instant Age Rewind Eraser Treatment Multi Use Concealer - Fair",
    price: 594,
    rating: 4.3,
    index: 2
    },
    {img1: "https://images-static.nykaa.com/media/catalog/product/6/0/609332858466.jpg",
    img2: "https://images-static.nykaa.com/media/catalog/product/6/0/609332858466-2.jpg",
    img3: "https://images-static.nykaa.com/media/catalog/product/6/0/609332858466-4.jpg",
    img4: "https://images-static.nykaa.com/media/catalog/product/6/0/609332858466-5.jpg",
    img5: "https://images-static.nykaa.com/media/catalog/product/6/0/609332858466-6.jpg",
    name: "e.l.f. Cosmetics 16HR Camo Concealer - Light Beige",
    price: 600,
    rating: 4.3,
    index: 3
    },
    {img1: "https://images-static.nykaa.com/media/catalog/product/a/2/a2860ae6902395735908_1.jpg",
    img2: "https://images-static.nykaa.com/media/catalog/product/a/2/a2860ae6902395735908_2.jpg",
    img3: "https://images-static.nykaa.com/media/catalog/product/a/2/a2860ae6902395735908_3.jpg",
    img4: "https://images-static.nykaa.com/media/catalog/product/a/2/a2860ae6902395735908_4.jpg",
    img5: "https://images-static.nykaa.com/media/catalog/product/a/2/a2860ae6902395735908_5.jpg",
    name: "L'Oreal Paris Infalliable Full Wear More Than Concealer",
    price: 849,
    rating: 4.5,
    index: 4
    },
    {img1: "https://images-static.nykaa.com/media/catalog/product/8/9/8973863KAYBE00000004_1.jpg",
    img2: "https://images-static.nykaa.com/media/catalog/product/8/9/8973863KAYBE00000004_2.jpg",
    img3: "https://images-static.nykaa.com/media/catalog/product/8/9/8973863KAYBE00000004_3.jpg",
    img4: "https://images-static.nykaa.com/media/consc/cruelty.jpg",
    img5: "https://images-static.nykaa.com/media/catalog/product/8/9/8973863KAYBE00000004_4.jpg",
    name: "Kay Beauty HD Liquid Concealer - 100Y Light",
    price: 799,
    rating: 4.4,
    index: 5
    },
    {img1: "https://images-static.nykaa.com/media/catalog/product/2/7/27d47bc8904207506216_1.jpg",
    img2: "https://images-static.nykaa.com/media/catalog/product/2/7/27d47bc8904207506216_2.jpg",
    img3: "https://images-static.nykaa.com/media/catalog/product/2/7/27d47bc8904207506216_3.jpg",
    img4: "https://images-static.nykaa.com/media/catalog/product/2/7/27d47bc8904207506216_4.jpg",
    name: "Insight Cosmetics Hd Conceal Correct Contour - Light Skin",
    price: 285,
    rating: 4.4,
    index: 6
    },
    {img1: "https://images-static.nykaa.com/media/catalog/product/1/e/1ef0592843004106114_1.jpg",
    img2: "https://images-static.nykaa.com/media/catalog/product/1/e/1ef0592843004106114_2.jpg",
    img3: "https://images-static.nykaa.com/media/catalog/product/1/e/1ef0592843004106114_3.jpg",
    img4: "https://images-static.nykaa.com/media/catalog/product/1/e/1ef0592843004106114_4.jpg",
    img5: "https://images-static.nykaa.com/media/catalog/product/1/e/1ef0592843004106114_4.jpg",
    name: "PATMcGRATH LABS Skin Fetish: Sublime Perfection Concealer - Light",
    price: 3400,
    rating: 4.7,
    index: 7
    },
    {img1: "https://images-static.nykaa.com/media/catalog/product/2/a/2a6ba50hudabeauty_6291107572543_main.jpg",
    img2: "https://images-static.nykaa.com/media/catalog/product/2/a/2a6ba50hudabeauty_6291107572543_alt1.jpg",
    img3: "https://images-static.nykaa.com/media/catalog/product/2/a/2a6ba50hudabeauty_6291107572543_alt2.jpg",
    img4: "https://images-static.nykaa.com/media/catalog/product/2/a/2a6ba50hudabeauty_6291107572543_alt3.jpg",
    img5: "https://images-static.nykaa.com/media/catalog/product/2/a/2a6ba50hudabeauty_6291107572543_alt4.jpg",
    name: "Huda Beauty Faux Filter Concealer - Whipped Cream",
    price: 2520,
    rating: 4.6,
    index: 8
    },
    {img1: "https://images-static.nykaa.com/media/catalog/product/4/1/41554247725.1.jpg",
    img2: "https://images-static.nykaa.com/media/catalog/product/4/1/41554247725.2.jpg",
    img3: "https://images-static.nykaa.com/media/catalog/product/4/1/41554247725.3.jpg",
    img4: "https://images-static.nykaa.com/media/catalog/product/4/1/41554247725.4.jpg",
    img5: "https://images-static.nykaa.com/media/catalog/product/4/1/41554247725.5.jpg",
    name: "Maybelline New York Fit Me Concealer - 25 Medium",
    price: 399,
    rating: 4.3,
    index: 9
    },
    {img1: "https://images-static.nykaa.com/media/catalog/product/8/1/81555979546.jpg",
    img2: "https://images-static.nykaa.com/media/catalog/product/8/1/81555979546-1.jpg",
    img3: "https://images-static.nykaa.com/media/catalog/product/8/1/81555979591_2_1.jpg",
    img4: "https://images-static.nykaa.com/media/catalog/product/n/y/nylagirl_acert_2_42.jpg",
    name: "L.A. Girl Pro Conceal HD - Fairest",
    price: 695,
    rating: 4.4,
    index: 10
    },
    {img1: "https://images-static.nykaa.com/media/catalog/product/e/8/e8120098904325002898_1.jpg",
    img2: "https://images-static.nykaa.com/media/catalog/product/e/8/e8120098904325002898_2.jpg",
    img3: "https://images-static.nykaa.com/media/catalog/product/e/8/e8120098904325002898_3.jpg",
    img4: "https://images-static.nykaa.com/media/catalog/product/e/8/e8120098904325002898_4.jpg",
    img5: "https://images-static.nykaa.com/media/catalog/product/e/8/e812009swissb_acert.jpg",
    name: "Swiss Beauty Liquid Liquid Concealer - 01 Warm Sand",
    price: 195,
    rating: 4.2,
    index: 11
    },
    {img1: "https://images-static.nykaa.com/media/catalog/product/2/9/293672e8904207503161_1.jpg",
    img2: "https://images-static.nykaa.com/media/catalog/product/2/9/293672e8904207503161_2.jpg",
    img3: "https://images-static.nykaa.com/media/catalog/product/2/9/293672e8904207503161_3.jpg",
    img4: "https://images-static.nykaa.com/media/catalog/product/2/9/293672e8904207503161_4.jpg",
    img5: "https://images-static.nykaa.com/media/catalog/product/2/9/293672e8904207503161_5.jpg",
    name: "Insight Cosmetics Pro Concealer Palette - Corrector",
    price: 199,
    rating: 4.4,
    index: 12
    },
    {img1: "https://images-static.nykaa.com/media/catalog/product/1/3/1350d9a651986702428_1.jpg",
    img2: "https://images-static.nykaa.com/media/catalog/product/1/3/1350d9a651986702428_2.jpg",
    img3: "https://images-static.nykaa.com/media/catalog/product/1/3/1350d9a651986702428_3.jpg",
    img4: "https://images-static.nykaa.com/media/consc/cruelty.jpg",
    img5: "https://images-static.nykaa.com/media/catalog/product/1/3/1350d9a651986702428_4.jpg",
    name: "Too Faced Born This Way Super Coverage Multi Use Scrulpting",
    price: 2000,
    rating: 4.6,
    index: 13
    },
    {img1: "https://images-static.nykaa.com/media/catalog/product/2/1/21283858904207500085_1.jpg",
    img2: "https://images-static.nykaa.com/media/catalog/product/2/1/21283858904207500085_2.jpg",
    img3: "https://images-static.nykaa.com/media/catalog/product/2/1/21283858904207500085_3.jpg",
    img4: "https://images-static.nykaa.com/media/catalog/product/2/1/21283858904207500085_4.jpg",
    img5: "https://images-static.nykaa.com/media/catalog/product/2/1/21283858904207500085_5.jpg",
    name: "Insight Cosmetics HD Conceal - 01 Sun Beige",
    price: 185,
    rating: 4.2,
    index: 14
    },
    {img1: "https://images-static.nykaa.com/media/catalog/product/f/e/fed1a55KAYBE00000078_01.jpg",
    img2: "https://images-static.nykaa.com/media/catalog/product/f/e/fed1a55KAYBE00000078_02.jpg",
    img3: "https://images-static.nykaa.com/media/catalog/product/f/e/fed1a55KAYBE00000078_03.jpg",
    img4: "https://images-static.nykaa.com/media/consc/cruelty.jpg",
    img5: "https://images-static.nykaa.com/media/catalog/product/f/e/fed1a55KAYBE00000078_04.jpg",
    name: "Kay Beauty HD Liquid Color Corrector - Orange",
    price: 799,
    rating: 4.5,
    index: 15
    },
    {img1: "https://images-static.nykaa.com/media/catalog/product/5/3/538a72e8904207501020_1.jpg",
    img2: "https://images-static.nykaa.com/media/catalog/product/5/3/538a72e8904207501020_2.jpg",
    img3: "https://images-static.nykaa.com/media/catalog/product/5/3/538a72e8904207501020_3.jpg",
    img4: "https://images-static.nykaa.com/media/catalog/product/5/3/538a72e8904207501020_4.jpg",
    img5: "https://images-static.nykaa.com/media/catalog/product/5/3/538a72e8904207501020_5.jpg",
    name: "Insight Cosmetics Pro Concealer Palette - Concealer",
    price: 199,
    rating: 4.3,
    index: 16
    },
    {img1: "https://images-static.nykaa.com/media/catalog/product/6/6/665729a773602258970_rv__1.jpg",
    img2: "https://images-static.nykaa.com/media/catalog/product/6/6/665729a773602258970_rv__2.jpg",
    img3: "https://images-static.nykaa.com/media/catalog/product/6/6/665729a773602258970_rv__3.jpg",
    img4: "https://images-static.nykaa.com/media/catalog/product/6/6/665729amac-nykaa-authenticity-cert.jpg",
    name: "M.A.C Studio Conceal and Correct Palette - Medium",
    price: 4700,
    rating: 4.5,
    index: 17
    },
    {img1: "https://images-static.nykaa.com/media/catalog/product/0/c/0c66a228904245705152ap_0.jpg",
    img2: "https://images-static.nykaa.com/media/catalog/product/0/c/0c66a228904245705152ap_2.jpg",
    img3: "https://images-static.nykaa.com/media/catalog/product/0/c/0c66a228904245705152ap_3.jpg",
    img4: "https://images-static.nykaa.com/media/consc/cruelty.jpg",
    img5: "https://images-static.nykaa.com/media/catalog/product/0/c/0c66a228904245705152ap_4.jpg",
    name: "Nykaa InstaBlur Color Corrector Stick - Lavender",
    price: 374,
    rating: 4.2,
    index: 18
    },
    {img1: "https://images-static.nykaa.com/media/catalog/product/5/1/51d70c58904245703561_0.jpg",
    img2: "https://images-static.nykaa.com/media/catalog/product/5/1/51d70c58904245703561_1.jpg",
    img3: "https://images-static.nykaa.com/media/catalog/product/5/1/51d70c58904245703561_2.jpg",
    img4: "https://images-static.nykaa.com/media/consc/cruelty.jpg",
    img5: "https://images-static.nykaa.com/media/catalog/product/5/1/51d70c58904245703561_3.jpg",
    name: "Nykaa SKINgenius Foundation Stick Conceal Contour & Corrector",
    price: 368,
    rating: 3.9,
    index: 19
    },
    {img1: "https://images-static.nykaa.com/media/catalog/product/a/5/a50a673717489700009_1.jpg",
    name: "Milani Conceal + Perfect 2-In-1 Foundation + Concealer - 00 Light Natural",
    price: 1600,
    rating: 4.2,
    index: 20
    },
    {img1: "https://images-static.nykaa.com/media/catalog/product/6/a/6af872e8904207503758_1.jpg",
    img2: "https://images-static.nykaa.com/media/catalog/product/6/a/6af872e8904207503758_2.jpg",
    img3: "https://images-static.nykaa.com/media/catalog/product/6/a/6af872e8904207503758_3.jpg",
    img4: "https://images-static.nykaa.com/media/catalog/product/6/a/6af872e8904207503758_4.jpg",
    img5: "https://images-static.nykaa.com/media/catalog/product/6/a/6af872e8904207503758_5.jpg",
    name: "Insight Cosmetics Concealer - Porcelain",
    price: 105,
    rating: 4.3,
    index: 21
}]

let cartLS = JSON.parse(localStorage.getItem("concealer")) || [];
let showDescription = JSON.parse(localStorage.getItem("showDesCon")) || [];
let container = document.querySelector("#cproducts");

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
            localStorage.setItem("concealer", JSON.stringify(cartLS));
        });

        div.append(feature,image,name,price,rating,button);
        container.append(div);

        div.addEventListener("click", function () {
            window.location.href = "./condesc.html";
            showDescription.push(el);
            localStorage.setItem("showDesCon", JSON.stringify(showDescription));
        });
    });
}
appendData(concealer);

let sort1 = document.querySelector("#cbyPrice");
sort1.addEventListener("change", function () {
    if (sort1.value === "sby") {
        window.location.reload();
    }
    if (sort1.value === "htl") {
        let highToLow = concealer.sort(function (a,b) {
            if (a.price > b.price) return -1;
            if (a.price < b.price) return 1;
        });
        appendData(highToLow);
    }
    if (sort1.value === "lth") {
        let lowToHigh = concealer.sort(function (a,b) {
            if (a.price > b.price) return 1;
            if (a.price < b.price) return -1;
        });
        appendData(lowToHigh);
    }
});

let sort2 = document.querySelector("#cbyRating");
sort2.addEventListener("change", function () {
    if (sort2.value === "sbr") {
        window.location.reload();
    }
    if (sort2.value === "htlr") {
        let highToLowRate = concealer.sort(function (a,b) {
            if (a.price > b.price) return -1;
            if (a.price < b.price) return 1;
        });
        appendData(highToLowRate);
    }
    if (sort2.value === "lthr") {
        let lowToHighRate = concealer.sort(function (a,b) {
            if (a.price > b.price) return 1;
            if (a.price < b.price) return -1;
        });
        appendData(lowToHighRate);
    }
});