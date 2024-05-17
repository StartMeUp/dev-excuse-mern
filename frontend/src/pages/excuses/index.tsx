import { useGetAllExcuses } from "@/hooks/tanstack.hooks";
import { AwaitingData } from "@/components/AwaitingData";
import { Box, H1 } from "@/components";
import { Link } from "react-router-dom";

export const ExcusesPage = () => {
  const { data: excuses, isLoading, isError, error } = useGetAllExcuses();

  if (isLoading || isError || error)
    return (
      <AwaitingData isLoading={isLoading} isError={isError} error={error} />
    );

  if (!excuses || excuses.length === 0)
    return <Box>Aucune excuse à lister</Box>;

  return (
    <>
      <H1>Liste des excuses</H1>
      <Box className="max-w-full text-left">
        {excuses.length === 0 ? (
          <p>Aucune excuse à lister</p>
        ) : (
          <ul className="grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-6">
            {excuses.map((excuse) => (
              <Link
                to={`/excuses/${excuse.http_code}`}
                className="rounded-lg bg-slate-200 p-3"
              >
                <li key={excuse._id}>
                  {excuse.http_code} - {excuse.message} - {excuse.tag}
                </li>
              </Link>
            ))}
          </ul>
        )}
      </Box>
    </>
  );
};
