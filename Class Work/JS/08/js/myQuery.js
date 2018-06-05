function spausdintiMasyva(masyvas){
  for (var i = 0; i < masyvas.length; i++) {
    console.log(i + 1 + ". " + masyvas[i]);
  }
}

function isspausdinkSveikasPasauli(){
  console.log("sveikas, Pasauli");
}

function spausdintiMasyvaAtvirksciai(atvirkscias){
  for (var i = 0; i < atvirkscias.length; i++) {
    atvirkscias.reverse();
    console.log(i+1 + ". " + atvirkscias[i]);
  }
}

function atvirksciai(aukstynKojom) {
  for (var i = aukstynKojom.length-1; i >= 0;  i--) {
    console.log(i+1 + ". " + aukstynKojom[i]);
  }
}

function duokObuoli(){
  return "obuolys";
}

function sudetiDuSkaicius(a, b) {
  var suma = a+b;
  return suma;
}

// anonimine funkcija
function()
