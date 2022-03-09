const typewriter = document.querySelectorAll('.typewriter')


for(elm of typewriter) {

  const text = elm.innerText;
  
  // clear text
  elm.innerText = "";
  
  let i = 0;
  
  var t = setInterval(function(){

    elm.innerText = text.substr(0,i);

    i++;
  
    if(i > text.length) {
        clearInterval(t);
    }
  }, 50);
}


document.addEventListener("keydown", function(e) {
  if (e.key === "Enter") {
    
  }
});