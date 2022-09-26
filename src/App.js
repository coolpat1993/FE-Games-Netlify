import "./App.css";
import AllReviews from "./components/allReviews/allReviews";
import Header from "./Header-Nav/Header";
import Nav from "./Header-Nav/Nav";
import { Route, Routes } from "react-router-dom";
import AllCategories from "./components/categories.jsx/allCategories";
import ReviewCategory from "./components/categories.jsx/reviewByCategory";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Nav />
        <Routes>
          <Route path="/" element={<AllCategories />} />
          <Route path="/reviews" element={<AllReviews />} />
          <Route path="/reviews/:category" element={<ReviewCategory />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
