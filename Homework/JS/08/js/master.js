function mase(masyvas, vardas){
  var newEile = [];
  for (var i = 0; i < masyvas.length; i++) {
    if(masyvas[i] != vardas){
    newEile.push(masyvas[i]);
    }
  }
  return newEile;
}
