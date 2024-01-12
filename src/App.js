// components
import { Logo } from "./components/logo";
import { Form } from "./components/form";
import { ListPacking } from "./components/listPacking";
import { Stats } from "./components/stats";

export default function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <ListPacking />
      <Stats />
    </div>
  );
}
