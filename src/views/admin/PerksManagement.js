import React, { useState, useEffect } from "react";
import PerksDisplayTable from "../../components/Cards/perksDisplayTable";

import SelectionCard from "components/Cards/SelectionCard";

export default function PerksManagement() {
  const [status, setStatus] = useState("All");
  const [category, setCategory] = useState("All");
  const [vendor, setVendor] = useState("All");
  const [perks, setPerks] = useState([
    {
      vendor: "Ola",
      cost: "200",
      status: false,
      description: "Some One Line for Ola",
    },
    {
      vendor: "Uber",
      cost: "400",
      status: true,
      description: "Some One Line for Uber",
    },
  ]);

  useEffect(() => {
    console.log(status, category, vendor);
  }, [status, category, vendor]);
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-10/12 px-4">
          <div className="mb-12">
            <SelectionCard
              status={status}
              category={category}
              vendor={vendor}
              setStatus={setStatus}
              setCategory={setCategory}
              setVendor={setVendor}
            />
          </div>
          <PerksDisplayTable list={perks} />
        </div>
      </div>
    </>
  );
}
