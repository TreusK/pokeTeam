
function BaseStats({ pokeInHole }) {
  let stats = pokeInHole ? [
    {stat: 'HP', value: pokeInHole.baseStats[0].base_stat},
    {stat: 'Att', value: pokeInHole.baseStats[1].base_stat},
    {stat: 'Def', value: pokeInHole.baseStats[2].base_stat},
    {stat: 'SpAtt', value: pokeInHole.baseStats[3].base_stat},
    {stat: 'SpDef', value: pokeInHole.baseStats[4].base_stat},
    {stat: 'Speed', value: pokeInHole.baseStats[5].base_stat},
  ] : undefined;
  return (
    <div className='w-[350px] pl-6 mr-6 flex flex-col items-center justify-center gap-1'>
      {pokeInHole
        ? stats.map(elem => 
          <div key={pokeInHole.name+elem.stat} className='flex flex-wrap w-full'>
            <p className={`w-[50px]`}>{elem.stat}</p>
            <div className='bg-red-400' style={{width: elem.value + 'px'}}>
              <p className='ml-2'>{elem.value}</p>
            </div>
          </div>,
        )
        : ''
      }
    </div>
  )
}

export default BaseStats