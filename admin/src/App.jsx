import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

function App() {
  const [data, setData] = useState("");
  useEffect(() => {
    const fetch = async () => {
      await axios
        .get("http://localhost:3000/admin")
        .then((res) => setData(res.data))
        .catch(function (err) {
          console.log(err);
        });
    };
    fetch();
  }, []);
  console.log(data);
  return <>Hello this is data server send: {data.data}</>;
}

export default App;
