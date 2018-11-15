var recipes = {};

function updateObjectWithKeyAndValue(obj, key, value) {
  return Object.assign({}, object, {[key]: value});
}

function destructivelyUpdateObjectWithKeyAndValue (obj, key, value){
  obj[key] = value;
  return obj
}
