function hideElementById(elementId){
   const element=document.getElementById(elementId);
   element.classList.add('hidden');
}

function showElementById(elementId){
    const element=document.getElementById(elementId);
    element.classList.remove('hidden');
 }
 function setBackgroundColorById(elementId){
    const element=document.getElementById(elementId);
    element.classList.add('bg-orange-400');
 }

 function getaRandomAlphabet(){
    const alphabetString='abcdefghijklmnopqrstwxyz';
    const alphabets=alphabetString.split('');
   // console.log(alphabets);
    const randomNumber=Math.random()*25;
    const index= Math.round(randomNumber);
    console.log(index);
    const alphabet=alphabets[index];
  //  console.log(index,alphabet);
    return alphabet;
 }

