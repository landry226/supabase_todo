import { Link } from "react-router-dom";
import { ModeToggle } from "./ModeToggle";
import { useAuth } from "../context/AuthContext";
import { Button } from "./ui/button";
import { LogOut } from "lucide-react";

const Header = () => {
  const { user, signOut } = useAuth();

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="max-w-5xl mx-auto container flex h-14 items-center">
          <div className="mr-4 flex">
            <Link className="mr-6 flex items-center" to="/">
              <span className="font-black text-primary block">S</span>
              <span className="font-black sm:inline-block">UPATACHE</span>
            </Link>
            <nav className="flex items-center gap-4 text-sm lg:gap-6">
              <Link
                className="transition-colors hover:text-foreground/80 text-foreground/60 uppercase"
                to="/taches-ok"
              >
                Taches OK
              </Link>
              <Link
                className="transition-colors hover:text-foreground/80 text-foreground/60 uppercase"
                to="/ajouter"
              >
                Ajouter
              </Link>
            </nav>
          </div>
          <div className="flex flex-1 items-center space-x-2 justify-end">
            <nav className="flex items-center gap-2">
              {user && (
                <>
                  <span className="text-sm text-muted-foreground hidden md:block truncate max-w-[180px]">
                    {user.email}
                  </span>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={signOut}
                    className="flex items-center gap-1"
                  >
                    <LogOut className="h-4 w-4" />
                    <span className="hidden md:inline">Déconnexion</span>
                  </Button>
                </>
              )}
              <ModeToggle />
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
