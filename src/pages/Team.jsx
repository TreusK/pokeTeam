//import './Team.css';
import Card from '../components/Card';
import Input from '../components/Input';

function Team({pokeNames}) {
    
    console.log('Team being rendered')
   return (
       <div>
            <Input pokeNames={pokeNames}/>
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