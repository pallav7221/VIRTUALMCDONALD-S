var images = {
    Burger: "https://cmx.weightwatchers.com/assets-proxy/weight-watchers/image/upload/v1594406683/visitor-site/prod/ca/burgers_masthead_xtkxft",
    Pizza: "https://img3.mashed.com/img/gallery/you-should-never-fold-pizza-slices-heres-why/l-intro-1602105889.jpg",
    Pasta: "https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    CocaCola: "https://images.unsplash.com/photo-1554866585-cd94860890b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y29jYWNvbGF8ZW58MHx8MHx8&auto=format&fit=crop&w=1000&q=60",
    Ice: "https://b.zmtcdn.com/data/pictures/chains/0/800910/acfe0626c6e4f2ac89d41b1d5ff461db_o2_featured_v2.jpg?output-format=webp",
    Roti: "https://b.zmtcdn.com/data/pictures/chains/4/800424/b55b1bb8a4ed117708e384ce934b3ac0_o2_featured_v2.jpg",
}

document.querySelector("#container>form>button").addEventListener("click", function (e) {
    document.querySelector("#displayItem").innerHTML = "";
    e.preventDefault();

    var check = document.querySelectorAll('input[type = "checkbox"]:checked');
    var item = [];

    check.forEach(ele => {
        item.push(ele.value);
    })
    for (var i = 0; i < item.length; i++) {
        order(item[i])
    }
})
function order(food) {
    var status = "open";
    var promise = new Promise(function (resolve, reject) {
        var time = Math.round(Math.random() * 5000);
        var h3 = document.createElement("h3");
        h3.innerHTML = `Please Wait for your order and your Item is ${food} and order number: ${Math.ceil(time / 1000)} `;
        document.querySelector("#OrderProgress").append(h3);
        if (status == "closed") {
            reject("Sorry, shop are closed");
        }
        else {
            setTimeout(function () {
                resolve("Your order for " + food + " is ready");

            }, time)
        }
    })

    promise.then(function (message) {
        var div = document.createElement("div");
        var img = document.createElement("img");
        img.src = images[food];
        div.append(img);
        document.querySelector("#displayItem").append(div);
        document.querySelector("#OrderProgress").innerText = "";
        document.querySelector("#container>form").reset();

    }).catch(function (message) {
        alert(message);
    })

    document.querySelector("#displayItem").innerHTML = "";
}