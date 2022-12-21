import { createRoot } from "react-dom";
import Pet from "./Pet";

const App = () => {
  <div>
    <h1>Adopt me. V8</h1>
    <Pet name="Luna" animal="Dog" breed="Havanese" />
    <Pet name="Doink" animal="Cat" breed="Mixed" />
    <Pet name="Pepper" animal="Bird" breed="Cockatiel" />
  </div>;
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
