import { useEffect, useState } from "react";
import { currentUrl } from "../data/constant";
import type { NoteApi } from "~/models/Note";

export const headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
  "Access-Control-Allow-Origin": "http://localhost:3000",
  "Access-Control-Allow-Credentials": "true",
};

export const useFetch = <T extends NoteApi>(
  path: string
): [
  { isLoading: boolean; error: string; data: T[] },
  fetchData: (path: string) => void
] => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [data, setData] = useState([]);

  const fetchData = (path: String) => {
    setIsLoading(true);
    fetch(currentUrl + "/notes", {
      method: "GET",
      headers: headers,
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setData(data);
      })
      .catch((error) => setError(error));
  };

  useEffect(() => {
    fetchData(path);
  }, [path]);

  return [{ isLoading, error, data }, fetchData];
};
