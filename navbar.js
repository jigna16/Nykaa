 document.querySelector(".pcart").addEventListener("click",cart)
    function searchData() {
        let query = document.querySelector("#search").value;
        if (query === "face primer"){
            window.location.href = "./face_primer.html";
        }
        else if (query === "concealer"){
            window.location.href = "./concealer.html";
        }
    }

    let id;
    function debounce (func,delay) {
        if (id) {
            clearTimeout(id);
        }
        id = setTimeout(function () {
            func();
        },delay)
    }

    function cart(){
        // Complete to show an alert with your product
        alert("Add your product");
        window.location.href="cart.html"
    }


    document.querySelector(".pcart").addEventListener("click",()=>{
        window.location.href="cart.html"
    })


    // document.querySelector("#preeti").addEventListener("click",()=>{
    //     window.location.href="signup.html"
    // })




