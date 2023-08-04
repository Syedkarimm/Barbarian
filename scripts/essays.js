sidebarSources =[[
  '',
  ''
],
[
  ''
]
];
essaysWords = [{
  title: '',
  text: '',
  sources: ''
},
{
  title: 'None. yet',
  text: '',
  sources: ''
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
