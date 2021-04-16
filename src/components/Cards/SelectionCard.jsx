import React, { useState, useEffect } from "react";
import TealDropdown from "../Dropdowns/TealDropdown";

export default function CardStats(props) {
  const statusList = ["All", "Owned", "New"];
  const [categoryList, setCategoryList] = useState(["All"]);
  const [vendorList, setVendorList] = useState(["All"]);

  useEffect(() => {
    // SET AXIOS CALL TO GET ALL CATEGORIES
    setCategoryList(["All", "Food", "Travel"]);

    // SET AXIOS CALL TO GET ALL Vendors
    setVendorList(["All", "Zomato", "Ola", "Uber", "Swiggy"]);
  }, []);
  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words bg-blueGray-200 rounded mb-6 xl:mb-0 shadow-lg">
        <div className="flex flex-row p-4">
          <TealDropdown
            list={statusList}
            title="Status"
            setFunc={props.setStatus}
          />
          <TealDropdown
            list={categoryList}
            title="Category"
            setFunc={props.setCategory}
          />
          <TealDropdown
            list={vendorList}
            title="Vendor"
            setFunc={props.setVendor}
          />
        </div>
        <p className="text-sm m-4 text-lg text-blueGray-400 mt-4">
          Select the categories and thier respective vendors which best fit your
          org.
        </p>
      </div>
    </>
  );
}
