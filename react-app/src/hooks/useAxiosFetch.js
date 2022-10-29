import axios from "axios";
import { useEffect, useState } from "react";
import { SERVER_URL } from "../constants";

axios.defaults.baseURL = SERVER_URL;

export const useAxiosFetch = (axiosParams) => {
  const [data, setData] = useState(undefined);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await axios.request(axiosParams);
      setData(response.data);
    } catch (error) {
      setError(error);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { data, error, loading, fetchData };
};