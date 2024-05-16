import { H1 } from "@/components";
import { useParams } from "react-router-dom";

export const HttpCodePage = () => {
  const { http_code } = useParams();
  return (
    <div>
      <H1>HttpCodePage</H1>
      <p>code : {http_code} </p>
    </div>
  );
};
