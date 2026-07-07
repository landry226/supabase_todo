import { useEffect, useState } from "react";
import Tache from "./Tache";
import { supabase } from "../lib/supabase";

const ListeDesTaches = () => {
  const [taches, setTaches] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchTaches = async () => {
    const { data, error } = await supabase
      .from("taches")
      .select("*")
      .eq("status", false)
      .order("created_at", { ascending: false });

    if (!error) setTaches(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchTaches();
  }, []);

  if (loading) return <p className="text-xl mt-8">Chargement...</p>;

  return (
    <>
      {taches.length ? (
        <ul className="mt-6 space-y-5">
          {taches.map((tache) => (
            <Tache tache={tache} key={tache.id} onRefresh={fetchTaches} />
          ))}
        </ul>
      ) : (
        <p className="text-xl mt-8">Pas de Taches 😭</p>
      )}
    </>
  );
};

export default ListeDesTaches;
