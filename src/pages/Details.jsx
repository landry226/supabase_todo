import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { TacheForm } from "../components/TacheForm";
import { supabase } from "../lib/supabase";

const Details = () => {
  const { id } = useParams();
  const [tache, setTache] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTache = async () => {
      const { data } = await supabase
        .from("taches")
        .select("*")
        .eq("id", id)
        .single();
      setTache(data);
      setLoading(false);
    };
    fetchTache();
  }, [id]);

  if (loading) return <p className="text-xl mt-8">Chargement...</p>;

  return (
    <>
      <div className="flex items-center justify-between">
        <h1 className="text-xl sm:text-3xl font-bold">Détails de la Tâche</h1>
      </div>
      <div className="mt-10 max-w-xl">
        <TacheForm tache={tache} />
      </div>
    </>
  );
};

export default Details;
