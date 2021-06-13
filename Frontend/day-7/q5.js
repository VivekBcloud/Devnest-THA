function findVol(obj) {
  var vol = Math.PI * obj.radius * obj.radius * obj.height;
  return vol.toFixed(4);
}

cylinder = {
  radius: 1,
  height: 7,
};

console.log(findVol(cylinder));
