import { useState } from "react";
import Input from "./ui/Input";

export default function PokeInput({ pokeNames, onAddPoke }) {
  const [input, setInput] = useState("");

  const filteredPokes =
    input.length > 0
      ? pokeNames
          .filter(
            (poke) =>
              poke.name.startsWith(input.toLowerCase()) &&
              poke.name.length !== input.length
          )
          .slice(0, 5)
      : [];

  return (
    <Input
      label="Add a pokemon"
      list="pokeNames"
      value={input}
      onChange={(e) => setInput(e.target.value)}
      placeholder="Pikachu"
      className="p-2 border border-solid"
    >
      <datalist id="pokeNames">
        {filteredPokes.map((elem) => (
          <option key={`poke.` + elem.name} value={elem.name}>
            {elem.name}
          </option>
        ))}
      </datalist>
      <button
        className="bg-blue-200 ml-2 rounded p-2 px-6 text-gray-500 hover:bg-blue-300"
        onClick={() => onAddPoke(input)}
      >
        Add
      </button>
    </Input>
  );
}
