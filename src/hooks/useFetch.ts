import React, { useEffect, useState } from "react";
import axios from "axios";

export interface Location {
  country: string;
  region: string;
  city: string;
  lat: number;
  lng: number;
  timezone: string;
}

export interface ResponseData {
  location: Location;
  ip: string;
  isp: string;
  as: object;
}

const useFetch = (ipAddress: string) => {
  const [data, setData] = useState<ResponseData | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const getData = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.get(
        `https://geo.ipify.org/api/v2/country,city?apiKey=at_KGwZ44NhbQgUFjKIlBREaPfZWS1ij&ipAddress=${ipAddress}`
      );
      setData(data);
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, [ipAddress]);

  return { data, isLoading };
};

export default useFetch;
