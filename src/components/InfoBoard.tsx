import { ResponseData } from "../hooks/useFetch";
import Item from "./Item";

interface InfoBoardProps {
  data: ResponseData | null;
  isLoading: boolean;
}

const InfoBoard = ({ data, isLoading }: InfoBoardProps) => {
  if (isLoading || !data) {
    return (
      <div className="rounded-md p-4 bg-white justify-center flex absolute top-1/3 min-h-24 items-center w-1/2">
        <p className="text-xl font-medium">Loading...</p>
      </div>
    );
  }

  const { country, region, timezone } = data?.location;
  const { ip, isp } = data;

  const infoData = [
    {
      title: "IP ADDRESS",
      description: ip,
    },
    {
      title: "LOCATION",
      description: `${region}, ${country}`,
    },
    {
      title: "TIMEZONE",
      description: timezone,
    },
    {
      title: "ISP",
      description: isp,
    },
  ];

  return (
    <div className="relative w-full h-max" style={{ zIndex: 999 }}>
      <article className="rounded-xl bg-white w-max flex flex-col justify-between md:gap-4 md:flex-row md:rounded-lg absolute top-0 md:separator p-4 md:p-0 -translate-y-1/2 -translate-x-1/2 left-1/2">
        {infoData.map((item) => (
          <Item
            key={item.title}
            title={item.title}
            description={item.description}
          />
        ))}
      </article>
    </div>
  );
};

export default InfoBoard;
