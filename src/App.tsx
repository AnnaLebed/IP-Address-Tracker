import { useState } from "react";
import "./App.css";
import { SearchBar } from "./components/SearchBar";
import Map from "./components/Map";
import InfoBoard from "./components/InfoBoard";
import useFetch from "./hooks/useFetch";

function App() {
  const [ipAddress, setIpAddress] = useState("");

  const { data, isLoading } = useFetch(ipAddress);

  const handleSearch = (ip: string) => {
    setIpAddress(ip);
  };

  return (
    <div className="flex flex-col items-center h-screen">
      <SearchBar handleSearch={handleSearch} />
      <InfoBoard data={data} isLoading={isLoading} />
      <Map location={data?.location} isLoading={isLoading} />
    </div>
  );
}

export default App;
