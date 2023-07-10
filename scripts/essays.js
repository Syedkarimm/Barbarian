sidebarSources =[[
  '<img src="images/haxorus.png">',
  '<img  src="images/infernape.png">'
],
[
  '<img src="images/zororak.png">'
]
];
essaysWords = [{
  title: 'first one',
  text: 'blblbalbalblabalblablalbalbalbalbalbalbalbalbalblablablablalbalbalbalbalba',
  sources: 'source'
},
{
  title: 'second one',
  text: 'skskskskskskskskksksksk',
  sources: 'source2'
}];


function generateEssayPage() {
  document.querySelector('.js-page').innerHTML = `<div class="essay-page">
  <div class="sidebar js-sidebar">
    
  </div>
  <div class="main js-main">
  </div>`;

  generateEssays();
  generateSidebar();

}

function generateEssays(){
  document.querySelector('.js-main').innerHTML = `<div class="title">${essaysWords[pageNumber].title}</div>
    <div class="essay">${essaysWords[pageNumber].text}</div>
    <div class="source">${essaysWords[pageNumber].sources}</div>`;
}

let sidebarHTML = ``;
function generateSidebar() {
    let counter = 0;
    while (counter < sidebarSources[pageNumber].length) {
      sidebarHTML += `${sidebarSources[pageNumber][counter]}`;
      counter += 1
    }
    document.querySelector('.js-sidebar').innerHTML = sidebarHTML;
    sidebarHTML = ``;
}
