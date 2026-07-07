import React from "react";
import ListeDesTaches from "../components/ListsDesTaches";

const Accueil = () => {
  return (
    <div>
      <div className="flex items-center justify-between ">
        <h1 className="text-xl sm:text-3xl font-bold">Liste des Taches</h1>
      </div>
      <div>
        <ListeDesTaches />
      </div>
    </div>
  );
};

export default Accueil;
