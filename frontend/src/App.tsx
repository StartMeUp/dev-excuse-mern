import { useGetAllExcuses } from "./hooks/tanstack.hooks";

const App = () => {
  const { data: excuses, isLoading, isError } = useGetAllExcuses();

  if (isLoading) return <h1>Loading...</h1>;

  if (isError) return <h1>Error!</h1>;

  if (!excuses) return <h1>No excuses found</h1>;

  return (
    <ul>
      {excuses.data.map((excuse) => (
        <li key={excuse._id}>{excuse.message}</li>
      ))}
    </ul>
  );
};

export default App;
