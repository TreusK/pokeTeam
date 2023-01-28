//Helper functions
function alreadyInTeam(teamArr, name) {
  return teamArr.some(elem => elem.name == name)
}

function teamIsNotFull(teamArr) {
  return teamArr.some(elem => elem.canBeReplaced == true);
}

function inputIsValid(input) {
  return (input && input[0] !== ' ');
}

function getTypes(arrOfTypes) {
  return arrOfTypes.map(typeObj => typeObj.type.name);
}

function makePokeObject(data) {
  return {
      id: data.id, 
      name: data.name,    
      sprite: data.sprites.front_default, 
      types: getTypes(data.types),
      baseStats: data.stats,
      canBeReplaced: false,
  }
}

function findFirstReplaceable(oldTeam) {
  return oldTeam.findIndex(elem => elem.canBeReplaced === true);
}

export {alreadyInTeam, teamIsNotFull, inputIsValid, makePokeObject, findFirstReplaceable}