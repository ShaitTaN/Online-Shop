import { FC } from "react";
import AppRouter from "./AppRouter";
import Header from "./components/Header/Header";

const App: FC = () => {
  return (
    <>
      <Header />
      <div>
        <AppRouter />
      </div>
    </>
  );
};

export default App;
