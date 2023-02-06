import pikaFace from '../assets/pikaFace.png';
import cyndaFace from '../assets/cyndaFace.png';
import eeveeFace from '../assets/eeveeFace.png';

function Testimonials() {
   return (
       <div className='flex flex-col w-3/4 sm:w-1/2 md:flex-row md:w-fit md:max-w-4xl gap-10 pb-20'>
           <div className='flex-1'>
            <img
              alt="pika"
              src={pikaFace}
              className="mx-auto h-24 w-24 rounded-full object-cover shadow-xl"/>
            <blockquote className="border-2 border-solid border-gray-400 -mt-8 flex flex-col justify-between rounded-lg p-12 text-center shadow-xl">
              <p className="text-lg font-bold text-gray-700">Pierce Jackson</p>
              <p className="mt-4 text-sm text-gray-500">
                I didn't know what I was missing in my life until I found this tool. 
                Now I'm never letting go.
              </p>
            </blockquote>
          </div>

          <div className='flex-1'>
            <img
              alt="cynda"
              src={cyndaFace}
              className="mx-auto h-24 w-24 rounded-full object-cover shadow-xl"/>
            <blockquote className="border-2 border-solid border-gray-400 -mt-8 flex flex-col justify-between rounded-lg p-12 text-center shadow-xl">
              <p className="text-lg font-bold text-gray-700">Mark Stone</p>
              <p className="mt-4 text-sm text-gray-500">
                Since I started using this team maker, I've won 4 Pokemon World Championships! 
              </p>
            </blockquote>
          </div>

          <div className='flex-1'>
            <img
              alt="eevee"
              src={eeveeFace}
              className="mx-auto h-24 w-24 rounded-full object-cover shadow-xl"/>
            <blockquote className="border-2 border-solid border-gray-400 -mt-8 flex flex-col justify-between rounded-lg p-12 text-center shadow-xl">
              <p className="text-lg font-bold text-gray-700">John Kaufman</p>
              <p className="mt-4 text-sm text-gray-500">
                The app is a 10/10 from me, but what's with the colors?
                Everything is gray, hire a designer please.
              </p>
            </blockquote>
          </div>
       </div>
   )
}

export default Testimonials