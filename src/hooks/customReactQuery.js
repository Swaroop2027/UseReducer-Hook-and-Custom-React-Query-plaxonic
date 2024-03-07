import { useEffect, useState } from "react";
import axios from "axios";

const customReactQuery = (urlPath) => {
  const [data, setData] = useState([]);
  const [err, setErr] = useState(false);

  const getData = async () => {
    try {
      setErr(false);
      const res = await axios.get(urlPath);
      setData(res.data);
    } catch (error) {
      setErr(true);
    }
  };

  useEffect(() => {
    // getData();
    setTimeout(getData, 3000);
  }, []);

  // console.log(data);

  return [data, err];
};

export default customReactQuery;
