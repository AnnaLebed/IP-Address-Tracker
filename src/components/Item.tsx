import React from "react";

const Item = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className="flex flex-col md:p-6 lg:p-8 gap-2 separator p-2 justify-center items-center separator">
      <p className="text-slate-400 text-xs font-bold tracking-wide">{title}</p>
      <p className=" text-3xl font-medium">{description}</p>
    </div>
  );
};

export default Item;
