import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import routes from "./configs/routes";

function App() {
  return (
    <Router>
      <Routes>
        {routes.map((route) => (
          <Route key={route.id} path={route.path} element={route.element} />
        ))}
        ;
      </Routes>
    </Router>
  );
}

export default App;
