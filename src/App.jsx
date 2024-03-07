import Counter from "./components/Counter";
import Form from "./components/Form";
import List from "./components/List";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

const App = () => {
  return (
    <div>
      {/* <Counter /> */}
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/list" element={<List />} />
      </Routes>
      {/* <Home /> */}
    </div>
  );
};

export default App;
