import axios from "axios";
import { useEffect, useState } from "react";
import Url from '../../assets/json/icones.json'


export const GetIcons = () => {
  const [icones, setIcones] = useState([]);

  useEffect(() => {
    const FetchIcones = async () => {
      try {
        const response = await axios.get(Url)
        setIcones(response.data)
      } catch (error) {
        console.error("Erro ao buscar os icones das Skills", error);
      }
    };

    FetchIcones();
  }, []);
};
