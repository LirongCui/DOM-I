const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

let titleName = document.querySelector('title');
titleName.textContent = "Great Idea!";

let imgSrc = document.querySelector("#cta-img");
imgSrc.setAttribute('src', siteContent["cta"]["img-src"]);

let header1 = document.querySelector("h1");
header1.innerHTML = siteContent["cta"]["h1"].split(" ").join("<br>")

let button = document.querySelector("button");
button.textContent = siteContent["cta"]["button"];

let mainH4 = document.querySelectorAll(".main-content h4");
mainH4[0].textContent = siteContent["main-content"]["features-h4"];
mainH4[1].textContent = siteContent["main-content"]["about-h4"];
mainH4[2].textContent = siteContent["main-content"]["services-h4"];
mainH4[3].textContent = siteContent["main-content"]["product-h4"];
mainH4[4].textContent = siteContent["main-content"]["vision-h4"];

let mainP = document.querySelectorAll(".main-content p");
mainP[0].textContent = siteContent["main-content"]["features-content"];
mainP[1].textContent = siteContent["main-content"]["about-content"];
mainP[2].textContent = siteContent["main-content"]["services-content"];
mainP[3].textContent = siteContent["main-content"]["product-content"];
mainP[4].textContent = siteContent["main-content"]["vision-content"];

let midImg = document.getElementById("middle-img");
midImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

let contactH4 = document.querySelector(".contact h4");
contactH4.textContent = siteContent["contact"]["contact-h4"];

let contactP = document.querySelectorAll(".contact p");
contactP[0].innerHTML = siteContent["contact"]["address"].split("t S").join("t<br>S");
contactP[1].textContent = siteContent["contact"]["phone"];
contactP[2].textContent = siteContent["contact"]["email"];

let footer = document.querySelector("footer");
footer.textContent = siteContent["footer"]["copyright"];

let nav = document.querySelector("nav");

let navArr = Object.values(siteContent["nav"]);

let navLink = document.querySelectorAll("a");

for (i = 0; i < navArr.length - 1; i++){
  navLink[i].textContent = navArr[i];
  navLink[i].style.color = "green";
}

let newNav = document.createElement("a");
newNav.textContent = "First Nav";
let newNav2 = document.createElement("a");
newNav2.textContent = "Last Nav";
nav.appendChild(newNav2);
nav.prepend(newNav);
newNav.style.color = "green";
newNav2.style.color = "green";





