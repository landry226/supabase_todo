import { useEffect, useState } from "react";
import Tache from "../components/Tache";
import { supabase } from "../lib/supabase";

const TachesOK = () => {
  const [taches, setTaches] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchTaches = async () => {
    const { data, error } = await supabase
      .from("taches")
      .select("*")
      .eq("status", true)
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
      <div className="flex items-center justify-between">
        <h1 className="text-xl sm:text-3xl font-bold">Taches terminées</h1>
      </div>
      <div>
        {taches.length ? (
          <ul className="mt-6 space-y-5">
            {taches.map((tache) => (
              <Tache tache={tache} key={tache.id} onRefresh={fetchTaches} />
            ))}
          </ul>
        ) : (
          <p className="text-xl mt-8">Vous n'avez rien fait 😭</p>
        )}
      </div>
    </>
  );
};

export default TachesOK;
