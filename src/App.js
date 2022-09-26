import "./App.css";
import AllReviews from "./components/allReviews/allReviews";
import Header from "./Header-Nav/Header";
import Nav from "./Header-Nav/Nav";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>there is nothing here</p>
        <Header />
        <Nav />
        <Routes>
          <Route path="/reviews" element={<AllReviews />}/>
        </Routes>
      </header>
    </div>
  );
}

export default App;
