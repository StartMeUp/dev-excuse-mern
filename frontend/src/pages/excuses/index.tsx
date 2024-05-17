import { useGetAllExcuses } from "@/hooks/tanstack.hooks";
import { AwaitingData } from "@/components/AwaitingData";
import { Box, H1, SeedDbButton } from "@/components";
import { Link } from "react-router-dom";

export const ExcusesPage = () => {
  const { data: excuses, isLoading, isError, error } = useGetAllExcuses();

  if (isLoading || isError || error)
    return (
      <AwaitingData isLoading={isLoading} isError={isError} error={error} />
    );

  if (!excuses || excuses.length === 0)
    return (
      <Box>
        <p>Aucune excuse à lister</p>
        <SeedDbButton />
      </Box>
    );

  return (
    <>
      <H1>Liste des excuses</H1>
      <Box className="max-w-full text-left">
        <ul className="grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-6">
          {excuses.map((excuse) => (
            <Link
              to={`/excuses/${excuse.http_code}`}
              className="rounded-lg bg-slate-200 p-3"
              key={excuse._id}
            >
              <li>
                {excuse.http_code} - {excuse.message} - {excuse.tag}
              </li>
            </Link>
          ))}
        </ul>
      </Box>
    </>
  );
};
