//please excuse the reference html

import theKrustyKrabPNG from './wip-krusty-krab-img.png';
let background = document.createElement('img');
background.className = 'background';
background.src = theKrustyKrabPNG;
let backgroundContainer = document.createElement('div');
backgroundContainer.className = 'bg-container';
backgroundContainer.appendChild(background);

export {backgroundContainer};

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

tab1.appendChild(tab1ImageContainer);

{/* <div class="tab2">
      <div class="menu">
        <h2>GALLEY GRUB</h2>
        <div class="container">
          <div class="item-display-container">
            <img src="" alt="menu item" class="item-display">
          </div>
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
import krustyCombo from './krusty-combo.png';
import krustyDeluxe from './krusty-deluxe.png';
import seaweedSalad from './seaweed-salad.png';
import coralBits from './coral-bits.png';

let displayContainer = document.createElement('div');
displayContainer.className = 'item-display-container';

let itemDisplay = document.createElement('img');
itemDisplay.className = 'item-display';
itemDisplay.src = krabbyPatty;
itemDisplay.setAttribute('alt', 'menu item');
displayContainer.appendChild(itemDisplay);
menuSubContainer.appendChild(displayContainer);

let menuList = document.createElement('ul');
menuList.className = 'leaders';
let listItem1 = createListElement('Krabby Patty', '2.70');
let listItem2 = createListElement('Krusty Combo', '3.50');
let listItem3 = createListElement('Krusty Deluxe', '4.25');
let sidesLabel = document.createElement('p');
sidesLabel.textContent = 'Sides';
let listItem4 = createListElement('Seaweed Salad', '1.00');
let listItem5 = createListElement('Coral Bits', '1.50');
menuList.appendChild(listItem1);
menuList.appendChild(listItem2);
menuList.appendChild(listItem3);
menuList.appendChild(sidesLabel);
menuList.appendChild(listItem4);
menuList.appendChild(listItem5);

menuList.addEventListener('click', function(e){
  if(e.target.nodeName !== 'LI'){ return };
  if(e.target.children[0].textContent === 'Krabby Patty'){ itemDisplay.src = krabbyPatty };
  if(e.target.children[0].textContent === 'Krusty Combo'){ itemDisplay.src = krustyCombo };
  if(e.target.children[0].textContent === 'Krusty Deluxe'){ itemDisplay.src = krustyDeluxe };
  if(e.target.children[0].textContent === 'Seaweed Salad'){ itemDisplay.src = seaweedSalad };
  if(e.target.children[0].textContent === 'Coral Bits'){ itemDisplay.src = coralBits };
});

let listContainer = document.createElement('span');
listContainer.appendChild(menuList);

menuSubContainer.appendChild(listContainer);

menu.appendChild(menuSubContainer);

tab2.appendChild(menu);

{/* <div class="tab3">
      <h2>Customer Support</h2>
      <p></p>
      <div class="representative">
        <p class="msg-from-rep"></p>
        <img src="" alt="Mr. Krabs" class="restaurant-rep">
      </div>
    </div> */}

let tab3 = document.createElement('div');
tab3.className = 'tab3';

let tab3Title = document.createElement('h2');
tab3Title.textContent = 'Customer Support';
tab3.appendChild(tab3Title);

let tab3SubContainer = document.createElement('div');
tab3SubContainer.className = 'representative';

let tab3MSGContainer = document.createElement('div');
tab3MSGContainer.className = 'msg-container';

let tab3SupportMSG = document.createElement('p');
tab3SupportMSG.textContent = "Please call The Krusty Krab at 555-5555 for any questions you may have regarding our restaurant.";
tab3MSGContainer.appendChild(tab3SupportMSG);

let tab3FeeMSG = document.createElement('p');
tab3FeeMSG.className = 'disclaimer';
let policyIntro = 'THIS IS THE KRUSTY KRAB POLICY:'
let policy1 = '1. BY CALLING THE KRUSTY KRAB, YOU AGREE TO PAY A FEE OF 1 DOLLAR.';
let policy2 = '2. THE KRUSTY KRAB DOES NOT OFFER REFUNDS TO ANYONE.';
let policy3 = '3. ONCE THE ORDER HAS REACHED THE CUSTOMER, IT IS HIS / HER RESPONSIBILITY.';
let policy4 = '4. NO FREE NAPKINS, CONDIMENTS, STRAWS, OR REFILLS.';
let policy5 = '5. THERE IS A 5 DOLLAR COMPLAINT FEE.';
let policy6 = '6. THE KRUSTY KRAB HAS THE RIGHT TO REFUSE SERVICE TO ANYONE.';
let fillerText = '|||||||||||||||||';
tab3FeeMSG.textContent = `${fillerText} ${policyIntro} ${policy1} ${policy2} ${policy3} ${policy4} ${policy5} ${policy6} ${fillerText}`;
tab3MSGContainer.appendChild(tab3FeeMSG);

tab3.appendChild(tab3MSGContainer);

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