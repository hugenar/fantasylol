import { Routes, Route } from "react-router-dom";
import { HashRouter } from "react-router-dom";
import TeamDraft from "./TeamDraft.tsx";
import TeamStats from "./TeamStats.tsx";
import "./style.css";

function App() {
  return (
    <div className="pls">
      <HashRouter>
        <Routes>
          <Route index element={<TeamDraft />} />
          <Route path="/next" element={<TeamStats />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
