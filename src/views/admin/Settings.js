import React from "react";
import PerksDisplayTable from '../../components/Cards/perksDisplayTable'

// components

import CardSettings from "components/Cards/CardSettings.js";
import CardProfile from "components/Cards/CardProfile.js";
import SelectionCard from "components/Cards/SelectionCard";

export default function Settings() {
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
