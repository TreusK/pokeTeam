
function BaseStats({ baseStats }) {
  let stats = [
    {stat: 'HP', value: baseStats[0].base_stat},
    {stat: 'Att', value: baseStats[1].base_stat},
    {stat: 'Def', value: baseStats[2].base_stat},
    {stat: 'SpAtt', value: baseStats[3].base_stat},
    {stat: 'SpDef', value: baseStats[4].base_stat},
    {stat: 'Speed', value: baseStats[5].base_stat},
  ]
  return (
    <div className='border border-solid flex flex-col items-center justify-center gap-1'>
      {baseStats
        ? stats.map(elem => 
          <div className='flex flex-wrap w-full'>
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