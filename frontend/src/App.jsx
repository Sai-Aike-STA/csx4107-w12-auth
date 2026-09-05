import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Item from "./pages/Item.jsx";

export default function App() {

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="item" element={<Item />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}