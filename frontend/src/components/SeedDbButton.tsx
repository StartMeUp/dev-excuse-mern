import { Button } from "./Button";
import { useSeedDB } from "@/hooks/tanstack.hooks";
import { cn } from "@/utils";

export const SeedDbButton = () => {
  const { isPending, mutate } = useSeedDB();

  return (
    <Button
      onClick={() => mutate()}
      className={cn("flex items-center gap-4", isPending && "opacity-50")}
      variant="primary"
      disabled={isPending}
    >
      Remplir la base de données
    </Button>
  );
};
