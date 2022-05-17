import Header from './components/Header'
import { useState, useEffect } from "react";
import Axios from "axios";

function App() {
  const [invList, setInvList] = useState([]);
  useEffect(() => {
    Axios.get("http://localhost:8080/inventory").then((response) => {
      setInvList(response.data);
    });
  }, []);

  /***************************************************************** */

  return (
    <div className="container">
      <Header />

    </div>
  );
}

export default App;
