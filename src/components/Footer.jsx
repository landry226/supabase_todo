import { HeartIcon } from "lucide-react";

const Footer = () => {
  return (
    <footer className="flex flex-col  justify-between gap-4 md:h-24 md:flex-row mb-20">
      <p className="text-xs sm:text-sm text-balance leading-loose text-muted-foreground text-left flex space-x-2 items-center">
        <span>Créer avec</span>
        <HeartIcon className="h-5 w-5 text-foreground" />
        <a
          href="https://twitter.com/raucheacho"
          target="_blank"
          rel="noreferrer"
          className="font-medium underline underline-offset-4"
        >
          Rauche Acho
        </a>
        . Le code est sur{/* */}{" "}
        <a
          href="https://github.com/raucheacho"
          target="_blank"
          rel="noreferrer"
          className="font-medium underline underline-offset-4"
        >
          github
        </a>
        .
      </p>
    </footer>
  );
};

export default Footer;
