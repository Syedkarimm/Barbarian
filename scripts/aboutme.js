

function generateAboutMe() {
  document.querySelector('.js-page').innerHTML = `<div class="essay-page">
  <div style = "display:grid;
  justify-content:space-around;
  row-gap: 40px;
  grid-template-columns:150px 150px ;"class="sidebar js-sidebar">
    <img class="topFour" src="images/EndofEvangelion.jpg">
    <img class="topFour" src="images/SoundOfMetal.jpg">
    <img class="topFour" src="images/FallenAngels.jpg">
    <img class="topFour" src="images/EyesWideShut.jpg">
    
 
  </div>
  <div class="main js-main">
    <div class="aboutMeTitle">What is Barbarian?</div>
    <div class="aboutMeText">
      Barbarian is a platform that hosts essays, reviews, and general thoughts on films written
      by myself, Syed Karim. I am a student at Texas A&M University, majoring in computer science and minoring in film.
      I have always had a passion for writing and have recently taken interest in cinema. Barbarian acts as a creative outlet for my passion for 
      coding and film. The website is currently coded through Javascript, HTML, and CSS. The four movies on the left are currently my "top four". 
      Feel free to contact me with any suggestions for the website, movie reccomendations, or any thought you would like me to hear.
      The name "Barbarian" has no relevant meaning.
    </div>
    <div class="aboutMeContact">Contact: syedabdulkarim00@gmail.com </div>
    <a class="letterboxd"href="https://letterboxd.com/Togata_/">Letterboxd</a>
   
  </div>
  
</div>`;

}