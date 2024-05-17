import { Link } from "react-router-dom";

export const Menu = () => {
  return (
    <nav className="fixed left-6 top-6 flex gap-4">
      <Link className="rounded-lg bg-slate-200 px-4 py-2" to="/">
        Home
      </Link>
      <Link className="rounded-lg bg-slate-200 px-4 py-2" to="/excuses">
        Excuses
      </Link>
    </nav>
  );
};
