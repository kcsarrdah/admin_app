import React from "react";
import PerksDisplayTable from "../../components/Cards/perksDisplayTable";

// components

import SelectionCard from "components/Cards/SelectionCard";

export default function PerksManagement() {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-10/12 px-4">
          <div className="mb-12">
            <SelectionCard />
          </div>
          <PerksDisplayTable />
        </div>
      </div>
    </>
  );
}
