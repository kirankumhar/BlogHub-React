import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Blog from "./Blog";
import Nav from "./Nav";
import SingleBlog from "./SingleBlog";

const App = () => {
  return (
    <Router>
      <Nav></Nav>
      <Routes>
        <Route path="/" element={<Blog />} />
        <Route path="/blog/:id" element={<SingleBlog />} />
      </Routes>
    </Router>

  );
};

export default App;
