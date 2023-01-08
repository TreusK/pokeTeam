//import './Team.css';
import Card from '../components/Card';

function Team() {
   return (
       <div>
           <div className="mx-auto max-w-3xl text-center">
                <h2 className="p-6 text-3xl">Add a pokemon</h2>
  
                <div className='p-4'>
                    <input type="text" list="pokeNames"
                    placeholder="Enter Here" />
                    <datalist id="pokeNames">
                        <option value="Pikachu">Pikachu</option>
                        <option value="Pampur">Pampur</option>
                        <option value="Perrosan">Perrosan</option>
                    </datalist>
                </div>

            </div>
            <div className="bg-gray-400 p-2 max-w-4xl mx-auto grid grid-cols-2 xs:grid-cols-3 justify-items-center gap-10">
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

{/* <div class="container">
        <h1>GeeksforGeeks</h1>
        <h3>HTML <datalist> Tag</h3>
        <label for="programmingLanguages">
            Choose Your Favourite Programming Language:
        </label>
        <div class="text-container">
            <input type="text" list="programmingLanguages" 
                        placeholder="Enter Here" />
            <datalist id="programmingLanguages">
                <option value="Objective C">Objective C</option>
                <option value="C++">C++</option>
                <option value="C#">C#</option>
                <option value="Cobol">Cobol</option>
                <option value="Go">Go</option>
                <option value="Java">Java</option>
                <option value="JavaScript">JavaScript</option>
                <option value="Python">Python</option>
                <option value="PHP">PHP</option>
                <option value="Pascal">Pascal</option>
                <option value="Perl">Perl</option>
                <option value="R">R</option>
                <option value="Swift">Swift</option>
            </datalist>
        </div>
    </div> */}