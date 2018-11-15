var recipes = {};

function updateObjectWithKeyAndValue(recipes, mac, cheese) {
  recipes[mac] = "milk"
  return recipes
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
