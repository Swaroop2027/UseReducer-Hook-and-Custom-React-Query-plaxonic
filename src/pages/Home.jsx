import Card from "../components/Card";
import customReactQuery from "../hooks/customReactQuery";

const Home = () => {
  const [data, err] = customReactQuery(
    "https://jsonplaceholder.typicode.com/posts"
  );

  if (err)
    return (
      <div className="h-screen w-full flex justify-center items-center">
        <h1 className="font-bold text-4xl">Something went wrong</h1>
      </div>
    );

  if (data.length === 0)
    return <h1 className="text-center text-4xl">Loading...</h1>;

  return (
    <div className="text-center">
      <h1 className="text-slate-900 text-4xl font-700 font-serif mt-3 mb-7">
        Post Card
      </h1>
      <div className="flex flex-wrap justify-between pl-5 pr-5">
        {data.map((obj) => {
          return (
            <Card title={obj.title} body={obj.body} key={obj.title}></Card>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
