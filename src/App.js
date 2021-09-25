import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Question1 from "./components/Question1";
import Question2 from "./components/Question2";
import Question3 from "./components/Question3";

import { useSelector } from "react-redux";

import { Spin } from "antd";

const App = () => {
  const { isLoading, page } = useSelector((state) => state);

  return (
    <div>
      <Navbar />
      <Header />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Spin spinning={isLoading}>
          {page === 1 && <Question1 />}
          {page === 2 && <Question2 />}
          {page === 3 && <Question3 />}
        </Spin>
      </div>
    </div>
  );
};

export default App;
