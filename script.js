/*function play(){
    //hide the home screen
    const homeSection=document.getElementById('home-screen');
    homeSection.classList.add('hidden');
    //show the playground
    const playgroundSection=document.getElementById('play-ground');
    playgroundSection.classList.remove('hidden');
}*/
function continueGame(){
   const alphabet=getaRandomAlphabet();
   console.log('your random alphabet',alphabet);

   const currentalphabetElemet=document.getElementById('current-alphabet');
   currentalphabetElemet.innerText=alphabet;

   setBackgroundColorById(alphabet);
}
function play(){
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame();
}