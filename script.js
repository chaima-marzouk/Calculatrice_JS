// #1 Creer des fections pour toutes les opérations :

function add(a,b){
    return(a+b)
}
function soustraire(a,b){
    return(a-b)
}
function multiplier(a,b){
    return(a*b)
}
function divide(a,b){
    return(a/b)
}

// #2 Creer un objet puis  une fonction Operate qui apl les operations selon l'opérateur

let operations ={
    '+':function(a, b){
        return add(a ,b)
    },
    '-':function(a , b){
        return soustraire(a ,b)
    },
    '*': function(a,b){
        return multiplier(a, b)
    },
    '/':function(a, b){
        return divide(a, b)
    }

}

let sign = null;


/**
 * Effectue le calcul
 *                                                                                                                                        
 */
calculate = function (val1, val2, sign) {
    if (sign in operations) {
        
        return operations[sign](val1, val2);
    }

}

// console.log(calculate(1,2,'*'))//TEST§§§§§§§§

//Data binding "output"
const showScreen = document.querySelector("#output")

//creer une variable pour stocker la valeur du boutton apres l'afficher sur "Output" 
    let output = "";
   

//On stock la valeur de l'ecran precedent 
    let backThen = 0;

//add event listner to listen to button beig presed by the user

     //listen to clicks 
     let touches = document.querySelectorAll("button");

     for(let touche of touches){
         touche.addEventListener("click" ,controleTouches);
     }



 function controleTouches(){
    //  html button element
     let touche = this.innerText;

      //verfier si un chiffre ou un point 
      if(parseFloat(touche)>= 0 || touche === "."){
           
          //je met a jour la valeur d'affichage 
          output +=  touche.toString()   
          showScreen.innerText = output ;

        
         
      } else{
          switch(touche){
              //Touche Clear reinitialise tout !!
              case "Clear":
                  backThen = 0
                  output = ""
                  showScreen.innerText = 0
                  break

              case "+":
              case "-":
              case "*":   
              case "/": 

                    backThen = (backThen === 0) ? parseFloat(output) : calculate(backThen , parseFloat(output), sign);
                    console.log(backThen)
                    showScreen.innerText = backThen;
                    sign = touche;
                    output="";
                    break;

              case "=":
              case "Enter":
                backThen = (backThen === 0) ? parseFloat(output) : calculate(backThen , parseFloat(output), sign);
                 // je met a jour l ecran
                 showScreen.innerText = backThen;
                //je  stocke le resultat dans la variable d'affichage
                output = backThen;

                // On réinitialise précédent
                backThen = 0;
                break;
          }
      }


 }

