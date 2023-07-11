let pageNumber = 0;
let currentPage = '';
function greenButton() {
  document.body.style.background = 'linear-gradient(#2c3440, rgb(6, 75, 33))';
}

function purpleButton() {
  document.body.style.background = 'linear-gradient(#2c3440, rgb(90, 37, 104))';
}

function blueButton() {
  document.body.style.background = 'linear-gradient(#2c3440, rgb(17, 32, 102))';
  
}

function essayButton(){
  currentPage = 'Essay'
  pageNumber = essaysWords.length-1;
  generateEssayPage();
  
  
}

function previousButton() {
  
  if (pageNumber>0) {
    pageNumber -= 1;
  }

  if (currentPage === 'Essay') {
    generateEssayPage();
  } else if (currentPage === 'Journal') {
    generateJournal();
  }
  

 
}

function nextButton() {
  if (currentPage === 'Essay') {
    if (pageNumber < essaysWords.length-1){
      pageNumber += 1;
      generateEssayPage();
    }
  } else if (currentPage === 'Journal') {
    if (pageNumber < journalWords.length-1) {
      pageNumber += 1;
      generateJournal();
    }
  }
  
  
}

  function aboutMeButton(){
    currentPage = "About Me";
    generateAboutMe();
  }

  function journalButton(){
    currentPage = 'Journal'
    pageNumber = journalWords.length - 1
    generateJournal();
  }



