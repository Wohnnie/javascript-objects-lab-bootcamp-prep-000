var recipes = {};

function updateObjectWithKeyAndValue(obj, key, value) {
  return Object.assign({}, object, {[key]: value});
}

function destructivelyUpdateObjectWithKeyAndValue(recipes, mac, cheese) {
  recipes.mac = ["milk"];
  return recipes;
}

function deleteFromObjectByKey(recipes, mac) {
  return delete recipes.mac;
}

function destructivelyDeleteFromObjectByKey(recipes, mac) {
  return delete recipes[mac];
}
