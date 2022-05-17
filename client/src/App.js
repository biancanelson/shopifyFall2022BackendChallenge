import Header from "./components/Header";
import Inventory from "./components/Inventory";
import { useState, useEffect } from "react";
import Axios from "axios";

function App() {
  const [invList, setInvList] = useState([]);
  useEffect(() => {
    Axios.get("http://localhost:8080/inventory").then((response) => {
      setInvList(response.data);
    });
  }, []);

  const deleteItem = (id) => {
    const url = "http://localhost:8080/inventory/" + id;
    console.log("delete", url);
    Axios.delete(`http://localhost:8080/inventory/${id}`)
      .then((res) => alert("Item Deleted"))
      .catch((error) => console.log(error));
  };

  return (
    <div className="container">
      <Header />
      {invList.length > 0 ? (
        <Inventory invList={invList} onDelete={deleteItem} />
      ) : (
        "No current inventory"
      )}
    </div>
  );
}

export default App;
