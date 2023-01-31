
function BaseData({baseData}) {
   return (
       <div className='w-[300px] flex items-center justify-center ml-6'>
           {baseData
              ? <div>
                  <p>Height: {baseData.height}</p>
                  <p>Weight: {baseData.weight}</p>
                </div>
              : ''
            }
       </div>
   )
}

export default BaseData