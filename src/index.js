// Your CSS as text
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
`

var styleSheet = document.createElement("style")
styleSheet.innerText = styles
document.head.appendChild(styleSheet)

//HTML

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

const list = document.createElement("ul")
list.classList.add("tabs")
header.appendChild(list)
const tab1 = document.createElement("li")
list.appendChild(tab1)
tab1.innerText = "Order Online"
const tab2 = document.createElement("li")
list.appendChild(tab2)
tab2.innerText = "Directions"
const tab3 = document.createElement("li")
list.appendChild(tab3)
tab3.innerText = "Call"
const tab4 = document.createElement("li")
list.appendChild(tab4)
tab4.innerText = "Email"

//Restaurant Picture
const imgcontainer = document.createElement("div")
content.appendChild(imgcontainer)
imgcontainer.classList.add("rest-pic-container")

const restimg = document.createElement("img")
restimg.src = "./restaurant-setting.jpg"
restimg.classList.add("rest-pic")
imgcontainer.appendChild(restimg)

//Description
const desccontainer = document.createElement("div")
content.appendChild(desccontainer)
desccontainer.classList.add("desc-container")

const homedesc = document.createElement("div")
desccontainer.appendChild(homedesc)
homedesc.innerText = "This is such a wonderful food spot, I'm just gonna put a bunch of random text here because google didn't want to give me a good restaurant descirption on my first 3 searches."
homedesc.classList.add("homepage-description")

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