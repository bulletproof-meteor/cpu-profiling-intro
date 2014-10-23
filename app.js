function getData () {
  var data = "";
  for(var lc=0; lc<999; lc++) {
    data += Math.random();
  }

  return {data: data};
}


function stringifyIt (data) {
  for(var lc=0; lc<999; lc++) {
    data.data += lc;
  }
  return JSON.stringify(data);
}

setInterval(function repeatedTask() {
  var data = getData();
  var stringVersion = stringifyIt(data);
}, 1);