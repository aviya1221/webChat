import { useEffect } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import ChatScreen from "./Comp/ChatPage/ChatScreen";
import HomeScreen from "./Comp/HomePage/HomeScreen";
import useData from "./assets/store.js";

function App() {
  const { fetchData, data } = useData();
  useEffect(() => {
    if (!data || data.length === 0) fetchData();
  }, []);

  useEffect(() => {
    const setVh = () => {
      document.documentElement.style.setProperty(
        "--vh",
        `${window.innerHeight * 0.01}px`
      );
    };
    setVh();
    window.addEventListener("resize", setVh);
    return () => window.removeEventListener("resize", setVh);
  }, []);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/Chat" element={<ChatScreen />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
