//import './Team.css';
import Card from '../components/Card';

function Team() {
   return (
       <div>
           <main className="mx-auto max-w-3xl text-center">
                <h2 className="p-6 text-4xl">A Basic Tailwind CSS Example</h2>
  
                <p className="px-10 pb-10 text-left">Tailwind CSS works by scanning all of your HTML files, JavaScript components, and any other templates for className names, generating the corresponding styles and then writing them to a static CSS file. It's fast, flexible, and reliable — with zero-runtime.</p>

                <button className="bg-sky-600 hover:bg-sky-700 px-5 py-3 text-white rounded-lg">BUTTON EXAMPLE</button>

            </main>
            <div className='p-2 bg-red-200 w-2/3 mx-auto grid grid-cols-2 sm:grid-cols-3 justify-items-center gap-10'>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>    
        </div>
   )
}

export default Team