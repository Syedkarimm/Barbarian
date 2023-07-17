journalSources =[[
  '<img style = "width:400px"src="images/TheWailing.jpg">',
  
],
[
  '<img style = "width: 400px"src="images/MemoriesOfMurder.jpg">'
]
];
journalWords = [{
  title: '7/13/2023',
  text: ' Before I begin discussing my thoughts on this film I would like to establish that I believe this is a well made film with many redeeming qualities, such as the performances and set design. I started The Wailing under the impression that the movie was a crime orientated murder mystery, with no expectation of the supernatural. I was mistaken, and I believe if I did not have incorrect assumptions about the movie I may have been able to enjoy it more. But after I realized my expectations were off it became more and more difficult to be invested in the story. When it comes to horror especially, I think a certain level of ‘faith’ is necessary in order to fully enjoy the movie. The audience must be willing to buy into the world they’re presented in, and because I was already disappointed before the movie could reach the halfway mark, I could not immerse myself within the story. Very little of this lackluster viewing experience is the film’s fault, and I hope this experience has taught me the dangers of preconception when it comes to viewing movies. Hopefully as I watch more films I can learn to let my expectations not affect my opinions and viewing experiences. I believe being open minded to art is not something that comes naturally, as it’s human instinct to recognize and categorize, but I also believe the effort required to be open minded is well worth the benefits of being able to experience and enjoy a greater variety of art. With my current viewing of The Wailing I would not recommend it, but if I were to revisit it I could see myself changing that opinion.',
  sources: 'http://www.impawards.com/intl/south_korea/2016/posters/goksung_xxlg.jpg'
},
{
  title: '7/14/2023',
  text: 'lallaallalalalalalla',
  sources: 'http://www.impawards.com/intl/south_korea/2003/posters/salinui_chueok_xlg.jpg'
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
  <div  class="essay">${journalWords[pageNumber].text}</div>
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
