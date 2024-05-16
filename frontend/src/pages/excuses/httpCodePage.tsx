import { H1 } from "@/components";
import { useParams } from "react-router-dom";
import { useGetOneExcuse } from "@/hooks/tanstack.hooks";
import { AwaitingData, Box } from "@/components";

export const HttpCodePage = () => {
  const { http_code } = useParams();
  const {
    data: excuse,
    isLoading,
    isError,
    error,
  } = useGetOneExcuse(Number(http_code));

  if (isLoading || isError || error)
    return (
      <AwaitingData isLoading={isLoading} isError={isError} error={error} />
    );

  return (
    <>
      <H1>Excuse de dev</H1>

      <Box className="bg-slate-200">
        {isNaN(Number(http_code)) ? (
          <p>Le code inséré n'est pas un chiffre</p>
        ) : !excuse ? (
          <p>Aucune excuse ne correspond à ce chiffre</p>
        ) : (
          <>
            <p>code : {http_code} </p>
            <p>message : {excuse.message}</p>
            <p>tag : {excuse.tag}</p>
          </>
        )}
      </Box>
    </>
  );
};
