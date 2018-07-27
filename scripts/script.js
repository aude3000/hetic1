let z=10;
console.log(z);

let appuie = document.querySelector(".lancement").innerHTML = "APPUIE !...";

let test = document.querySelector(".test")
test.addEventListener(
  'click',
  function() {
    console.log("arrete d'appuyer")
  }
)

/*let appuie = document.querySelector(".appuie").innerHTML = "Lancement";*/
/*let f_appuie = document.querySelector('.appuie')
f_appuie.addEventListener(
  'click',
  function() {
    console.log("appuie")
    console.log("Z AVANT a la valeur" + z);
    let compteur = document.querySelector(".compteur").innerHTML = z;
    z=z-1;
    console.log("Z APRES a la valeur" + z);
    if (z = 0)
    {
      let appuie = document.querySelector(".appuie").innerHTML = "Lancement";
      z=10;
      console.log("Je passe par là");

    }
  }
)*/

let lancement = document.querySelector(".lancement")
let compteur = document.querySelector(".compteur")
let rocket = document.querySelector("#decollage")
let dragon = document.querySelector("#dragon")

let number = 10

lancement.addEventListener(
    'click',
    function () {
    deco = setInterval(decollage, 1000);
}, false);

function decollage(deco) {
  if(number > 0) {
    compteur.innerHTML = (number -= 1)
  }
  else {
    compteur.innerHTML = 0
    rocket.style.transform = "translateY(-2000px)"
    rocket.style.transition = "all 30s"
    dragon.style.transform = "translateY(-2000px)"
    dragon.style.transition = "all 45s"
    appuie = document.querySelector(".lancement").innerHTML = "LANCEMENT !..."

    /*interrogation.style.transform = "translateY(-15000px)"
    interrogation.style.transition = "all 15s"*/
  }
  reinitialisation.addEventListener(
      'click',
      function () {

      retour()
    }, false);
}

let reinitialisation = document.querySelector(".reinitialisation")
let number2 = 0

/*reinitialisation.addEventListener(
    'click',
    function () {

    retour()
  }, false);*/

function retour() {
  clearInterval(deco);

  compteur.innerHTML = 10
  /*rocket = document.querySelector("#decollage").innerHTML = '<img id="decollage" class="taille" src="images/fusee.jpg" alt="perroquet"/>';
  dragon = document.querySelector("#dragon").innerHTML = '<img id="dragon" class="taille" src="images/dragon_rouge.jpg" alt="Dragon rouge"/>';*/
  rocket.style.transform = "translateY(0px)"
  rocket.style.transition = "all 4s"
  dragon.style.transform = "translateY(0px)"
  dragon.style.transition = "all 2s"
  appuie = document.querySelector(".lancement").innerHTML = 'APPUIE !...'

}
