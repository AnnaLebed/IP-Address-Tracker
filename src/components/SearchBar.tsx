import { useState } from "react";
import HeaderContainer from "./HeaderContainer";
import { ReactComponent as MyIcon } from "../images/icon-arrow.svg";

interface SearchBarProps {
  handleSearch: (ipAddress: string) => void;
}

export const SearchBar = ({ handleSearch }: SearchBarProps) => {
  const [ipAddress, setIpAddress] = useState("");

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!ipAddress) return;

    handleSearch(ipAddress);
    setIpAddress("");
  };

  return (
    <HeaderContainer>
      <form
        className="mt-4 flex w-4/5 md:w-3/5 sm:w-full"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          className="rounded-xl rounded-e-none min-h-10 p-3 placeholder:text-muted-foreground focus-visible:outline-none w-full"
          placeholder="Search for any IP address or domain"
          value={ipAddress}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setIpAddress(e.target.value)
          }
        />
        <button
          className="bg-black text-white min-h-10 min-w-10 p-3 px-5 rounded-xl rounded-s-none text-bold"
          type="submit"
        >
          <MyIcon />
        </button>
      </form>
    </HeaderContainer>
  );
};
