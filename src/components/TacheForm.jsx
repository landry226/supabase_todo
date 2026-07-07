"use client";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "./ui/textarea";
import { supabase } from "../lib/supabase";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export function TacheForm({ tache }) {
  const navigate = useNavigate();
  const { user } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: tache || {},
  });

  const onSubmit = async (data) => {
    if (tache?.id) {
      await supabase
        .from("taches")
        .update({ titre: data.titre, description: data.description })
        .eq("id", tache.id);
    } else {
      await supabase
        .from("taches")
        .insert([{ titre: data.titre, description: data.description, status: false, user_id: user.id }]);
    }
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div className="space-y-2">
        <label htmlFor="titre" className="block font-medium text-foreground">
          Titre
        </label>
        <Input id="titre" {...register("titre", { required: true })} />
        {errors.titre && (
          <span className="text-red-500">Veillez entrer un titre</span>
        )}
      </div>

      <div className="space-y-2">
        <label
          htmlFor="description"
          className="block font-medium text-foreground"
        >
          Description
        </label>
        <Textarea
          id="description"
          {...register("description", { required: true })}
        />
        {errors.description && (
          <span className="text-red-500">Veillez entrer une description</span>
        )}
      </div>

      <Button type="submit">
        {tache?.id ? "Modifier la tâche" : "Ajouter une tâche"}
      </Button>
    </form>
  );
}
