import displayHome from './index.js';
import displaymenu from './menu.js';
import displayMission from './ourmission.js';

export default function displayContact() {
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

    .contact-container {
        display: grid;
        justify-items: center;
        padding-bottom: 100px;
    }
    
    .contact-title {
        padding-top: 100px;
        font-size: 40px;
    }
    
    .contact-list {
        padding-top: 10px;
    }
    
    .contact-list  li {
        padding-top: 20px;
        list-style: none;
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
    const tab3 = document.createElement("li")
    list.appendChild(tab3)
    tab3.innerText = "Our Mission"
    tab3.addEventListener('click', function(e) {
        content.innerHTML = '';
        displayMission();
    
    })

    //Contact Info
    const contactcontainer = document.createElement("div")
    content.appendChild(contactcontainer)
    contactcontainer.classList.add("contact-container")

    const contactitle = document.createElement("div")
    contactcontainer.appendChild(contactitle)
    contactitle.classList.add("contact-title")
    contactitle.innerText = "Contact Us"

    const contactlist = document.createElement("ul")
    contactcontainer.appendChild(contactlist)

    const li1 = document.createElement("li")
    contactlist.appendChild(li1)
    li1.innerText = "Phone: 870-423-6287"
    const li2 = document.createElement("li")
    contactlist.appendChild(li2)
    li2.innerText = "Email: DelectableFood61@gmail.com"
    const li3 = document.createElement("li")
    contactlist.appendChild(li3)
    li3.innerText = "Location: Ur moms house"


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