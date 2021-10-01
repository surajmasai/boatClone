var data = [
    {
        name: "Misfit T200",
        price: "1,499.00",
        price1: "3,999.00",
        image:
            "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/963d0725-90b9-42a4-9fcc-a842968cfee4_300x.png?v=1625045778",
        decimg: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/1Year_icon_web.png?v=1632396695",
        decimg1: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Stone_1200F_w.jpg?v=1632901988",
        decp: "MISFIT BY BOAT",
        points1: "120 minutes battery runtime",
        points2: "0.5-12mm trimming range",
        points3: "Skin-friendly titanium blades",
    },
    {
        name: "Boat Rockerz 510",
        price: "1,599.00",
        price1: "3,490.00",
        image:
            "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/5d5377dc-d3dd-48ba-8ec9-2a1630146d8d_300x.png?v=1625046011",
        image1: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/709d5346-3135-495f-ba7b-80fae784af83_720x.png?v=1625046011",
        decimg: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/1Year_icon_web.png?v=1632396695",
        decimg1: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/R510_W.png?v=1615236928",
        decp: "BLUETOOTH HEADPHONES",
        points1: "20H of playtime per charge",
        points2: "Perfect for bass heavy music",
        points3: "Cushion comfort with adjustable headband",
    },
    {
        name: "Stone 1200",
        price: "3,999.00",
        price1: "6,999.00",
        image:
            "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/3e35681e-bcb1-449c-a58a-2d43e8b00bf4_300x.png?v=1625045905",
        decimg: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/1Year_icon_web.png?v=1632396695",
        decimg1: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Stone_1200F_w.jpg?v=1632901988",
        decp: "BLUETOOTH SPEAKERS",
        points1: "Immersive HD sound perfect",
        points2: "IPX7 rated robust for outdoors & indoors",
        points3: "9 hours uninterrupted music",
    },
];
// console.log(data)

data.forEach((item) => {
    const itemData = item;

    const html = `<div class="item1">
        <div class="img" onclick="show('${item.name}', '${item.image}','${item.image1}','${item.decimg}','${item.decimg1}','${item.decp}','${item.price}', '${item.price1}')">
            <img
                src="${item.image}" />
        </div>
        <div class="item_text">
            <h2>${item.name}</h2>
            <div style="display: none;">-</div>
            <div class="price">
                <h4 style="display: inline; color: red;font-weight: bold;">Rs.<span>${item.price}</span></h4>
                <p style="display: inline; text-decoration: line-through;">Rs.<span>${item.price1}</span></p>

            </div>
            <div class="points">
                <ul>
                    <li>${item.points1}</li>
                    <li>${item.points2}</li>
                    <li>${item.points3}</li>
                </ul>
            </div>
            <button onclick="addToCart('${item.name}', '${item.image}', '${item.price}', '${item.price1}', '${item.points1}', '${item.points2}', '${item.points3}')" class="btn_shopnow">shop Now</button>
        </div>
    </div>`;

    const bestseller = document.getElementsByClassName("bestseller_items")[0];
    // console.log(bestseller);
    bestseller.insertAdjacentHTML("beforeend", html);
});

if (localStorage.getItem("boatcart") === null) {
    localStorage.setItem("boatcart", JSON.stringify([]));
}

function addToCart(name, image, price, price1) {

    const itemdata = { name, image, price, price1 };
    // console.log(itemdata)

    let products_cart = JSON.parse(localStorage.getItem("boatcart"));

    products_cart.push(itemdata);
    // console.log(products_cart)
    localStorage.setItem("boatcart", JSON.stringify(products_cart));

    let products_car = JSON.parse(localStorage.getItem("boatcart"));

    let cart_count = document.getElementsByClassName("cart_count")[0];
    // console.log(cart_count)
    cart_count.innerHTML = products_car.length;


    localStorage.setItem("boatcart", JSON.stringify(products_car));


    // console.log(products_cart)

    // console.log(cart_count)



}



function show(name, image, image1, decimg, decimg1, decp, price, price1) {
    var pData = [{ name, image, image1, decimg, decimg1, decp, price, price1 }];

    localStorage.setItem("pDetails", JSON.stringify(pData));

    window.location.href = "productDetails.html"
}
