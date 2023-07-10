journalSources =[[
  '<img src="images/EndofEvangelion.jpg">',
  '<img src="images/SoundOfMetal.jpg">'
],
[
  '<img src="images/EyesWideShut.jpg">'
]
];
journalWords = [{
  title: '7/10/2023',
  text: 'okokokokokokokokokokokokokokokokokokokokok',
  sources: 'source'
},
{
  title: '7/11/2023',
  text: 'lallaallalalalalalla',
  sources: 'source2'
}];

function generateJournal(){
  document.querySelector('.js-page').innerHTML = `<div class="essay-page">
  <div class="sidebar js-sidebar">
    
  </div>
  <div class="main js-main">
  </div>`;

  generateEntry();
  generateJournalSidebar();

}

function generateEntry() {
  document.querySelector('.js-main').innerHTML = `<div class="title">${journalWords[pageNumber].title}</div>
  <div class="essay">${journalWords[pageNumber].text}</div>
  <div class="source">${journalWords[pageNumber].sources}</div>`;
}

let journalSidebarHTML = ``;
function generateJournalSidebar() {
  let counter = 0;
    while (counter < journalSources[pageNumber].length) {
      journalSidebarHTML += `${journalSources[pageNumber][counter]}`;
      counter += 1
    }
    document.querySelector('.js-sidebar').innerHTML = journalSidebarHTML;
    journalSidebarHTML = ``;
}