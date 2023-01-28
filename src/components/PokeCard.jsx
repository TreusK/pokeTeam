import { nanoid } from "nanoid";
import questionMark from "../assets/questionMark.png";
import Card from "./ui/Card";

const typesColors = {
  normal: "#A8A77A",
  electric: "#F7D02C",
  fire: "#EE8130",
  water: "#6390F0",
  grass: "#7AC74C",
  ice: "#96D9D6",
  fighting: "#C22E28",
  poison: "#A33EA1",
  ground: "#E2BF65",
  rock: "#B6A136",
  flying: "#A98FF3",
  psychic: "#F95587",
  bug: "#A6B91A",
  ghost: "#735797",
  dark: "#705746",
  dragon: "#6F35FC",
  steel: "#B7B7CE",
  fairy: "#D685AD",
};

export default function PokeCard({ poke, handleDeletePoke }) {
  const bgColor = poke ? typesColors[poke.types[0]] : "#A8A77A";

  if (!poke) {
    return (
      <Card>
        <p>?</p>
        <div className="h-24 flex justify-center bg-gray-200">
          <img className="scale-125" src={questionMark} alt="mon" />
        </div>
        <div>
          <p>---</p>
        </div>
      </Card>
    );
  }

  return (
    <Card style={{ background: bgColor }}>
      <div className="flex relative overflow-hidden">
        <p className="mx-auto">
          {poke.name ? poke.name[0].toUpperCase() + poke.name.slice(1) : ""}
        </p>
        <div
          onClick={() => handleDeletePoke(poke)}
          className={`w-[26px] h-[26px] absolute -right-3 -top-3 rotate-45 group-hover:bg-red-500`}
        />
      </div>
      <div className="h-24 flex justify-center bg-gray-100">
        <img className="scale-125" src={poke.sprite} alt="mon" />
      </div>
      <div>
        {poke.types
          ? poke.types.map((elem) => (
              <p className='font-["Bakbak"]' key={nanoid()}>
                {elem}
              </p>
            ))
          : "hola"}
      </div>
    </Card>
  );
}
