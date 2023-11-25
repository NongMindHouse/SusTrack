import React from "react";
import ConResult from "@/components/Result/ConResult";

type Props = {};

const Result: React.FC<Props> = ({}) => {
  return (
    <>
      <div className="flex flex-col">
        <ConResult />
      </div>
    </>
  )

};

export default Result;
