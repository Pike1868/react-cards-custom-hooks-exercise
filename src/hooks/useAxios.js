import { useState } from "react";
import axios from "axios";
import { v1 as uuid } from "uuid";

const useAxios = (url) => {
  const [data, setData] = useState([]);

  const addData = async (urlEnd) => {
    try {
      const response = await axios.get(`${url}${urlEnd}`);
      //Add new data to state
      setData((oldData) => [...oldData, { ...response.data, id: uuid() }]);
    } catch (err) {
      console.error(err);
    }
  };

  const resetData = () => {
    setData([]);
  };

  return [data, addData, resetData];
};

export default useAxios;
