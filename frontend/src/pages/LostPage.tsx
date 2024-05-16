import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { H1 } from "@/components";
import LostGif from "@/assets/images/lost.gif";

export const LostPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 5000);
  }, []);

  return (
    <>
      <H1 className="text-center">I&apos;m lost</H1>
      <img src={LostGif} alt="Lost" className="mx-auto" />
    </>
  );
};
