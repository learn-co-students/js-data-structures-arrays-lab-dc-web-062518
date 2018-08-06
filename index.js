const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(name){
  return drivers.push(name);
}

function destructivelyPrependDriver(name){
  return drivers.unshift(name);
}

function destructivelyRemoveLastDriver() {
  return drivers.pop();
}

function destructivelyRemoveFirstDriver(){
  return drivers.shift();
}

function appendDriver(name){
  new_array = [...drivers, name];
  return new_array;
}

function prependDriver(name){
  new_array = [name, ...drivers];
  return new_array;
}

function removeLastDriver(){
  new_array = drivers.slice();
  new_array.pop();
  return new_array;
}

function removeFirstDriver(){
  new_array = drivers.slice();
  new_array.shift();
  return new_array;
}
