function lovefunc(flower1, flower2) {
    return flower1 % 2 !== flower2 % 2;
} //Любомир

function lovefunc(flower1, flower2){
    return flower1 % 2 !== flower2 % 2;
  } // Аня

  function lovefunc(flower1, flower2){
    const eq1 = flower1 % 2
    const eq2 = flower2 % 2  
      
    if(eq1 === 0 && eq2 === 0|| eq1 !== 0 && eq2 !== 0 ) return false
    return true
  } //Валентина