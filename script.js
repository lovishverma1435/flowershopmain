
const imageContainer = document.getElementById(`imagecontainer`)
const project = [
  {
    "img": "./assets/images/card-item.jpg",
    "name": "Snowfall",
    "price": "price $70"
  },
  {
    "img": "./assets/images/card-item-1.jpg",
    "name": "Dawn's Delight",
    "price": "price $70"
  },
  {
    "img": "./assets/images/card-item-2.jpg",
    "name": "Pink Elegance",
    "price": "price $70"
  },
  {
    "img": "./assets/images/card-item-3.jpg",
    "name": "Rustic Charm",
    "price": "price $70"
  },
  {
    "img": "./assets/images/card-item-5.jpg",
    "name": "Autumn Symphony",
    "price": "price $70"
  },
  {
    "img": "./assets/images/card-item-6.jpg",
    "name": "Rosy Delight",
    "price": "price $70"
  },
  {
    "img": "./assets/images/card-item-7.jpg",
    "name": "Serenity",
    "price": "price $70"
  },
  {
    "img": "./assets/images/card-item-8.jpg",
    "name": "Blue Harmony",
    "price": "price $70"
  },
  {
    "img": "./assets/images/card-item-9.jpg",
    "name": "Mystical Majesty",
    "price": "price $70"
  },
  {
    "img": "./assets/images/card-item-10.jpg",
    "name": "Blazing Blossoms",
    "price": "price $70",
  }
]
project.map((value, index) => {

  const div = document.createElement(`div`);
  div.classList.add("relative")
  // div.className = "relative"
  div.innerHTML = `
        <img class="w-full imgs max-h-[373.6px] border-[#121212]  border-l border-b"
          src="${value.img}" alt="error" >
        <h4
          class="absolute -bottom-[-25px] left-2/4 -translate-x-2/4 -translate-y-2/4 mb-1 font-medium lg:text-base text-[12px] text-[#121212]">${value.name}
          </h4>
        <h4
          class="absolute -bottom-[-8px] left-2/4 -translate-x-2/4 -translate-y-2/4 font-medium text-[14px] text-[#808080]">
        ${value.price}</h4>
  `
  imageContainer.appendChild(div)
})


const images = [
  {
    logo: "Instagram.svg",
    link: "https://www.instagram.com"
  },
  {
    logo: "Pinterest.svg",
    link: "https://in.pinterest.com"
  },
  {
    logo: "Facebook.svg",
    link: "https://www.facebook.com"
  },
  {
    logo: "Telegram.svg",
    link: "https://telegram.org/"
  },
  {
    logo: "Twitter.svg",
    link: "https://x.com"
  },
]


document.getElementById("icons").innerHTML = images?.map((item, index) => {
  return `<a href="${item.link}" target="_blank"><img src="./assets/svg/${item.logo}"></a>`;
}).join("");


const footer = document.querySelector(`.footer-contents`)


let data = [
    {
        "heading": "shop",
        "contents": ["All Products", "Fresh Flowers", "Dried Flowers", "Live Plants", "Designer Vases", "Aroma Candles", "Freshener Diffuser"]
    },
    {
        "heading": "Service",
        "contents": ["Flower Subcription", "Wedding & Event Decor"]
    }
]
footer.innerHTML = data.map((item) => {
    return `
        <div>
          <h4 class="footer-head">${item.heading}</h4>
          <div class="flex flex-col gap-2 div">
            ${item.contents.map((i) => `<h4 class="all-prod">${i}</h4>`).join('')}
          </div>
        </div>
    `
}).join('');


const footerLast = document.querySelector(`.footer-content`)

let footerData = [
    {
        "heading": "About us",
        "contents": ["Our story","Blog"],
    },
    {
        "heading":"",
        "contents": ["Shipping & returns","Terms & conditions","Privacy policy"]
    }
]
footerLast.innerHTML = footerData.map((item) => {
    return `
        <div>
        <h4 class="footer-head">${item.heading}</h4>
        <div class="mb-6">
        ${item.contents.map((i) =>`<h4 class="all-prod">${i}</h4>`).join(``)}
        </div>
        
        </div>
    `
}).join(``)


    
          