const typesColors = {
  normal: '#A8A77A',
  electric: '#F7D02C',
  fire: '#EE8130',
  water: '#6390F0',
  grass: '#7AC74C',
  ice: '#96D9D6',
  fighting: '#C22E28',
  poison: '#A33EA1',
  ground: '#E2BF65',
  rock: '#B6A136',
  flying: '#A98FF3',
  psychic: '#F95587',
  bug: '#A6B91A',
  ghost: '#735797',
  dark: '#705746',
  dragon: '#6F35FC',
  steel: '#B7B7CE',
  fairy: '#D685AD'
}

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

function createGradient(color1, color2) {
  return `linear-gradient(to right, ${color1}, ${color2})`;
}

function makePokeObject(data) {
  return {
      id: data.id, 
      name: data.name,    
      sprite: data.sprites.front_default, 
      icon: data.sprites.versions["generation-viii"].icons.front_default,
      types: getTypes(data.types),
      baseStats: data.stats,
      height: data.height,
      weight: data.weight,
      allMoves: data.moves,
      moves: ['', '', '', ''],
      canBeReplaced: false,
  }
}

function teamAlreadyExists(teamsArr, currentTeam) {
  let currentTeamID = currentTeam.map(poke => poke.id).join('');
  let IDIsRepeated = false;
  for(let team of teamsArr) {
    let thisTeamID = team.team.map(poke => poke.id).join('');
    if(thisTeamID == currentTeamID) IDIsRepeated = true;
  }
  return IDIsRepeated;
}

function findFirstReplaceable(oldTeam) {
  return oldTeam.findIndex(elem => elem.canBeReplaced === true);
}

export {typesColors, alreadyInTeam, teamIsNotFull, inputIsValid, makePokeObject, 
  findFirstReplaceable, teamAlreadyExists, createGradient}