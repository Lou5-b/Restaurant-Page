import displayHome from './index.js';
import displayContact from './contact.js';

export default function displaymenu() {

    var styles = `

    body {
        margin: 0;
    }
    
    .header {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        background-color: rgb(255, 255, 255);
        box-shadow: 1px 0px 5px lightgray;
        justify-items: center;
        align-items: center;
        font-family: sans-serif;
        font-size: 14px;
    }
    
    .foodalogo {
        width: 150px;
    }
    
    .tabs {
        list-style: none;
        display: flex;
        gap: 10px;
    }
    
    .rest-pic-container {
        display: flex;
        justify-content: center;
        margin-top: 70px;
    }
    
    .rest-pic {
        width: 780px;
        border: 2px solid rgb(0, 0, 0);
    }
    
    .desc-container {
        display: flex;
        justify-content: center;
    }
    
    .homepage-description {
        width: 500px;
        font-family: sans-serif;
        font-size: 15px;
        padding-top: 60px;
        padding-bottom: 60px;
    }
    
    .footer {
        background-color: rgb(255, 255, 255);
        display: flex;
        height: 50px;
        box-shadow: 1px -5px 5px lightgray;
        justify-content: center;
        align-items: center;
        gap: 15px;
    }
    
    .footer-logo {
        width: 30px;
        height: 30px;
    }

    .menu-elements {
        display: grid;
        justify-items: center;
    }
    
    .burrito-img {
        margin-top: 100px;
        width: 500px;
        border: 2px solid rgb(0, 0, 0);
    }
    
    .burrito-desc {
        width: 600px;
        margin-top: 40px;
        margin-bottom: 70px;
    }
    
    .noodles-img {
        margin-top: 100px;
        width: 500px;
        border: 2px solid rgb(0, 0, 0);
    }
    
    .noodles-desc {
        width: 600px;
        margin-top: 40px;
        margin-bottom: 70px;
    }
    
    .bagels-img {
        margin-top: 100px;
        width: 500px;
        border: 2px solid rgb(0, 0, 0);
    }
    
    .bagels-desc {
        width: 600px;
        margin-top: 40px;
        margin-bottom: 70px;
    }
    `
    var stylesheet = document.querySelector("style")
    stylesheet.innerText = styles



    //header
    const content = document.querySelector("#content")

    const header = document.createElement("div")
    content.appendChild(header)
    header.classList.add("header")


    const leftside = document.createElement("div")
    leftside.innerText = "Innovative Food and Drink"
    header.appendChild(leftside)

    const middle = document.createElement("img")
    middle.src = "./FoodaLogo.png"
    middle.classList.add("foodalogo")
    header.appendChild(middle)
    middle.addEventListener('click', function(e) {
        content.innerHTML = '';
        //load up home page here
        displayHome()
    })

    const list = document.createElement("ul")
    list.classList.add("tabs")
    header.appendChild(list)
    const tab1 = document.createElement("li")
    list.appendChild(tab1)
    tab1.innerText = "Menu"
    tab1.addEventListener('click', function(e) {
        content.innerHTML = '';
        displaymenu();

    })
    const tab2 = document.createElement("li")
    list.appendChild(tab2)
    tab2.innerText = "Contact"
    tab2.addEventListener('click', function(e) {
        content.innerHTML = '';
        displayContact();
    
    })
    const tab3 = document.createElement("li")
    list.appendChild(tab3)
    tab3.innerText = "Our Mission"

    //Body

    const menucontainer = document.createElement("div")
    content.appendChild(menucontainer)
    menucontainer.classList.add("menu-elements")
    
    const img1 = document.createElement("img")
    img1.src = './burrito.webp'
    menucontainer.appendChild(img1)
    img1.classList.add("burrito-img")

    const img1desc = document.createElement("div")
    menucontainer.appendChild(img1desc)
    img1desc.classList.add("burrito-desc")
    img1desc.innerHTML = "<strong>Burrito Looking Food:</strong> In close second, and if I’m not mentioning my baby (LOL): takeout from Ekiben eaten in an empty apartment right after moving in. The tofu nuggets, doused in spicy-sweet peanut sauce and served with a heap of tangy pickles, are exactly what I want from restaurant tofu: deeply fried, almost unbelievably crispy, and impossible to stop eating. It’s the sort of tofu I could never re-create at home, no matter how many times I’ve tried."

    const img2 = document.createElement("img")
    img2.src = './noodles.webp'
    menucontainer.appendChild(img2)
    img2.classList.add("noodles-img")

    const img2desc = document.createElement("div")
    menucontainer.appendChild(img2desc)
    img2desc.classList.add("noodles-desc")
    img2desc.innerHTML = "<strong>Octopus Noodles:</strong> I spent five months this year on the road, and let me tell you: After days snackin’ on nada but Pringles and gummy worms, there was nothing so thrilling as making a restaurant reservation from a random roadside gas station. Filled with the promise of REAL FOOD, the last few hours of whatever leg we were on always flew by. While everything I tried at Handle was a treat—hearty, creative, and decidedly real—the mushroom bucatini (featuring truffled mascarpone and chives) was outta this world. Creamy, salty, and packed with umami notes. In other words, perfect. —A.F."

    const img3 = document.createElement("img")
    img3.src = './bagles.webp'
    menucontainer.appendChild(img3)
    img3.classList.add("bagels-img")

    const img3desc = document.createElement("div")
    menucontainer.appendChild(img3desc)
    img3desc.classList.add("bagels-desc")
    img3desc.innerHTML = "<strong>Breakfast Bagels:</strong> I'm normally frugal with my order—egg and cheese when I'm splurging, cream cheese on a regular day—but this occasion called for something special, and with lots of uncooked fish. It was from our local Baltimore bagel spot, THB, which makes 'em just as good, if not better, than the NYC spots. —Sarah Jampel, senior editor, cooking"


    //Footer
    const foot = document.createElement("div")
    foot.classList.add("footer")
    content.appendChild(foot)

    const logo = document.createElement("img")
    logo.src = "./FoodaIcon.png"
    logo.classList.add("footer-logo")
    foot.appendChild(logo)


    const footab1 = document.createElement("div")
    foot.appendChild(footab1)
    footab1.innerHTML = "Fooda™"
    const footab2 = document.createElement("div")
    foot.appendChild(footab2)
    footab2.innerHTML = "About Us"
    const footab3 = document.createElement("div")
    foot.appendChild(footab3)
    footab3.innerHTML = "Contacts"
    const footab4 = document.createElement("div")
    foot.appendChild(footab4)
    footab4.innerHTML = "Order Online"
}

