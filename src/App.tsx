import { Route, Routes } from "react-router-dom";
import AllBooks from "./components/books/AllBooks";
import { Layout } from "./layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route  path="/" element={<Home />}/>
        <Route path="/all-books" element={<AllBooks />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
}
export default App;
