import { Button } from "@/components/ui/button";
import { Edit, Trash, CheckCircle } from "lucide-react";
import { cn } from "../lib/utils";
import { formatDistanceToNow } from "date-fns";
import { fr } from "date-fns/locale";
import { useNavigate } from "react-router-dom";
import { supabase } from "../lib/supabase";

const Tache = ({ tache, onRefresh }) => {
  const isOk = tache.status;
  const navigate = useNavigate();
  const date = formatDistanceToNow(new Date(tache.created_at), {
    addSuffix: true,
    locale: fr,
  });

  const handleDelete = async () => {
    await supabase.from("taches").delete().eq("id", tache.id);
    onRefresh();
  };

  const handleTerminer = async () => {
    await supabase.from("taches").update({ status: true }).eq("id", tache.id);
    onRefresh();
  };

  return (
    <li
      className={cn(
        "flex flex-col items-start gap-2 rounded-lg border p-3 text-left text-sm transition-all max-w-xl",
        isOk ? "bg-background" : "border-gray-300"
      )}
    >
      <div className="flex w-full flex-col gap-1">
        <div className="flex items-center">
          <div className="flex items-center gap-2">
            <p
              className={cn(
                "font-semibold text-xs md:text-base line-clamp-1",
                isOk && "line-through text-foreground"
              )}
            >
              {tache.titre}
            </p>
            <span
              className={cn(
                "flex h-2 w-2 rounded-full",
                !isOk ? "bg-green-600" : "bg-accent"
              )}
            />
          </div>
          <div className="ml-auto text-xs text-muted-foreground line-clamp-1">
            {date}
          </div>
        </div>
      </div>

      <p
        className={cn(
          "line-clamp-2 text-xs md:text-sm",
          isOk ? "line-through text-foreground" : "text-primary"
        )}
      >
        {tache.description}
      </p>
      <div className="flex items-center gap-2">
        {!isOk && (
          <Button
            variant="outline"
            size="sm"
            className="flex items-center gap-1"
            onClick={handleTerminer}
          >
            <CheckCircle className="h-4 w-4" />
            Terminée
          </Button>
        )}
        {!isOk && (
          <Button
            variant="ghost"
            size="sm"
            className="flex items-center gap-1 text-xs md:text-base"
            onClick={() => navigate(`/details/${tache.id}`)}
          >
            <Edit className="h-4 w-4" />
            Modifier
          </Button>
        )}
        <Button
          variant="ghost"
          size="sm"
          className="flex items-center gap-1 hover:bg-destructive text-xs md:text-base"
          onClick={handleDelete}
        >
          <Trash className="h-4 w-4" />
          Supprimer
        </Button>
      </div>
    </li>
  );
};

export default Tache;
