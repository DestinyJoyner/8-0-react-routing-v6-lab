import PetsListNav from "./PetsListNav";
import Pet from "./Pet";
import "./PetsList.css";
import { useParams, Navigate } from "react-router-dom";

export const PetsList = ({ pets}) => {
  let {type} = useParams()
  // type is 'undefined' when just /pets so for all pets need OR undefined conditional
  
  if(type === undefined){
    return <Navigate to = "/pets/cats" />
  }
  // filters out pets into a dog array and cat array
  const [cats, dogs] = pets.reduce(
    (acc, pet) => {
      const position = pet.kind === "Cat" ? 0 : 1;
      acc[position].push(pet);
      return acc;
    },
    [[], []]
  );

  

  return (
    <section className="pets-wrapper">
      <PetsListNav cats = {cats} dogs = {dogs}  />
      <section className="pets-list">
        
        {/* All cats section */}
        {type === `cats` || type === undefined ? cats.map((cat) => (
          <Pet key={cat.id} kind= {"cat"} pet={cat} />
        )) : null}

        {/* All dogs section */}
        {type === `dogs` || type === undefined ? dogs.map((dog) => (
          <Pet key={dog.id} kind= {"dog"} pet={dog} />
        )) : null}

      </section>
    </section>
  );
};

export default PetsList;
