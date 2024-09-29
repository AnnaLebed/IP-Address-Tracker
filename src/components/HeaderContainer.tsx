import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const HeaderContainer: React.FC<Props> = ({ children }) => {
  return (
    <section className="w-full search-bar-container bg-cover h-80 p-5 flex flex-col items-center">
      <h2 className="text-white text-3xl font-bold">IP Address Tracker</h2>
      {children}
    </section>
  );
};

export default HeaderContainer;
