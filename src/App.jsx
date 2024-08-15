import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import Login from "./pages/Login";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Login />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
