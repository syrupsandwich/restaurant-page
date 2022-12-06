//please excuse the reference html

{/* <header>
<span><button id="home" type="button">Home Page</button></span>
<span><button id="menu" type="button">Menu</button></span>
<span><button id="contact" type="button">Contact</button></span>
</header> */}

let header = document.createElement('header');

function makeTabButton(id, type, content){
  let span = document.createElement('span');
  let button = document.createElement('button');
  button.id = id;
  button.setAttribute('type', type);
  button.innerHTML = content;
  span.appendChild(button);
  return span;
}

header.appendChild(makeTabButton('home', 'button', 'Home Page'));
header.appendChild(makeTabButton('menu', 'button', 'Menu'));
header.appendChild(makeTabButton('contact', 'button', 'Contact'));

export {header};

let center = document.createElement('div');
center.className = 'center';

{/* <div class="tab1">
      <h1 class="restaurant-title">THE KRUSTY KRAB</h1>
      <p>Welcome to the unofficial Krusty Krab website!</p>
      <div class="location">
        <p>Our restaurant is located at 831 Bottom Feeder Lane.</p>
        <img src="./the-krusty-krab.png" alt="The Krusty Krab">
      </div>
    </div> */}


let tab1 = document.createElement('div');
tab1.className = 'tab1';

let tab1Title = document.createElement('h1');
tab1Title.className = 'restaurant-title';
tab1Title.textContent = 'THE KRUSTY KRAB';
tab1.appendChild(tab1Title);

let tab1Greeting = document.createElement('p');
tab1Greeting.textContent = 'Welcome to the unofficial Krusty Krab website';
tab1.appendChild(tab1Greeting);

let tab1ImageContainer = document.createElement('div');
tab1ImageContainer.className = 'location';

let restaurantAddress = document.createElement('p')
restaurantAddress.textContent = 'Our restaurant is located at 831 Bottom Feeder Lane.';
tab1ImageContainer.appendChild(restaurantAddress);

import theKrustyKrabPNG from './the-krusty-krab.png';

let restaurantImage = document.createElement('img');
restaurantImage.src = theKrustyKrabPNG;
restaurantImage.setAttribute('alt', 'The Krusty Krab');
tab1ImageContainer.appendChild(restaurantImage);

tab1.appendChild(tab1ImageContainer);

{/* <div class="tab2">
      <div class="menu">
        <h2>GALLEY GRUB</h2>
        <div class="container">
          <img src="./krabby-patty.png" alt="burger" class="item-display">
          <span>
            <ul class="leaders">
              <li><span>Krabby Patty</span><span>2.00</span></li>
              <li><span>Krusty Combo</span><span>3.00</span></li>
              <li><span>Krusty Deluxe</span><span>3.00</span></li>
              <p>Sides</p>
              <li><span>SeaWeed Salad</span><span>1.50</span></li>
              <li><span>Coral Bits</span><span>1.59</span></li>
            </ul>
          </span>
        </div>
      </div>
    </div> */}

function createListElement(name, price){
  let item = document.createElement('li');
  let span1 = document.createElement('span');
  span1.textContent = name;
  let span2 = document.createElement('span');
  span2.textContent = price;
  item.appendChild(span1);
  item.appendChild(span2);
  return item;
}

let tab2 = document.createElement('div');
tab2.className = 'tab2';

let menu = document.createElement('div');
menu.className = 'menu';

let menuTitle = document.createElement('h2');
menuTitle.textContent = 'GALLEY GRUB';
menu.appendChild(menuTitle);

let menuSubContainer = document.createElement('div');
menuSubContainer.className = 'container';

import krabbyPatty from './krabby-patty.png';

let itemDisplay = document.createElement('img');
itemDisplay.className = 'item-display';
itemDisplay.src = krabbyPatty;
itemDisplay.setAttribute('alt', 'krabby-patty');
menuSubContainer.appendChild(itemDisplay);

let menuList = document.createElement('ul');
menuList.className = 'leaders';
let listItem1 = createListElement('Krabby Patty', '2.00');
let listItem2 = createListElement('Krusty Combo', '3.00');
let listItem3 = createListElement('Krusty Deluxe', '3.00');
let sidesLabel = document.createElement('p');
sidesLabel.textContent = 'Sides';
let listItem4 = createListElement('Seaweed Salad', '1.50');
let listItem5 = createListElement('Coral Bits', '1.59');
menuList.appendChild(listItem1);
menuList.appendChild(listItem2);
menuList.appendChild(listItem3);
menuList.appendChild(sidesLabel);
menuList.appendChild(listItem4);
menuList.appendChild(listItem5);

let listContainer = document.createElement('span');
listContainer.appendChild(menuList);

menuSubContainer.appendChild(listContainer);

menu.appendChild(menuSubContainer);

tab2.appendChild(menu);

{/* <div class="tab3">
      <h2>Customer Support</h2>
      <div class="support">
        <p>We'll connect you to one of our representatives in just a moment.</p>
        <div class="chat-box"></div>
      </div>
    </div> */}

let tab3 = document.createElement('div');
tab3.className = 'tab3';

let tab3Title = document.createElement('h2');
tab3Title.textContent = 'Customer Support';
tab3.appendChild(tab3Title);

let tab3SubContainer = document.createElement('div');
tab3SubContainer.className = 'support';

let tab3SupportMSG = document.createElement('p');
tab3SupportMSG.textContent = "We'll connect you to one of our representatives in just a moment.";
tab3SubContainer.appendChild(tab3SupportMSG);

let chatBox = document.createElement('div');
chatBox.className = 'chat-box'; 
tab3SubContainer.appendChild(chatBox);

tab3.appendChild(tab3SubContainer);

export {center, tab1, tab2, tab3}

{/* <footer>
      <p>Spongebob is owned by nickelodeon</p>
      <p>sand texture asset by Daryan Shamkhali</p>
      <p>'Some Time Later' font asset by Fredrick R Brennan</p>
    </footer> */}

let footer = document.createElement('footer');

let credit1 = document.createElement('p');
credit1.textContent = 'Spongebob is owned by nickelodeon';
footer.appendChild(credit1);

let credit2 = document.createElement('p');
credit2.textContent = 'Sand texture asset by Daryan Shamkhali';
footer.appendChild(credit2)

let credit3 = document.createElement('p');
credit3.textContent = '"Some Time Later" font asset by Fredrick R Brennan';
footer.appendChild(credit3);

export {footer};