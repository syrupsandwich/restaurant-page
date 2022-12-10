console.log('One week later...');

import { header, center, footer, tab1, tab2, tab3, backgroundContainer} from './layout-gen.js';
import './style.css';

let contentContainer = document.querySelector('#content');
contentContainer.appendChild(backgroundContainer);
contentContainer.appendChild(header);
contentContainer.appendChild(center);
center.appendChild(tab1);
contentContainer.appendChild(footer);

header.addEventListener('click', function(e){
  if(e.target.parentNode.nodeName !== 'SPAN'){return};
  center.children[0].remove();
  if(e.target.id === 'home'){ center.appendChild(tab1)};
  if(e.target.id === 'menu'){ center.appendChild(tab2)};
  if(e.target.id === 'contact'){ center.appendChild(tab3)};
});