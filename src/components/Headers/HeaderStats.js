import React, { useState, useEffect } from "react";

// components
import CardStats from "components/Cards/CardStats.js";
import axios from "../../../node_modules/axios/index";

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export default function HeaderStats() {
  const [balance, setBalance] = useState({ used: 0, total: 0 });

  useEffect(() => {
    axios
      .get("http://localhost:3000/admin/credits", {
        headers: {
          "x-organizationid": "Krishnna1234",
        },
      })
      .then((resp) => {
        // console.log(resp);
        setBalance({
          used: numberWithCommas(resp.data.totalConsumedCredits),
          total: numberWithCommas(resp.data.totalCredits),
        });
      })
      .catch((err) => {
        console.log("Error");
        setBalance({
          used: "Loading Error",
          total: "Loading Error",
        });
      });
  }, []);
  return (
    <>
      {/* Header */}
      <div className="relative bg-lightBlue-600 md:pt-32 pb-32 pt-12">
        <div className="px-4 md:px-10 mx-auto w-full">
          <div>
            {/* Card stats */}
            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="Budget Used"
                  statTitle={balance.used}
                  statDescripiron="last used on"
                  statDate="5-4-2021"
                  statIconName="fas fa-money-check-alt"
                  statIconColor="bg-red-500"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="TOTAL BUDGET"
                  statTitle={balance.total}
                  statDescripiron="Since added on"
                  statDate="5-4-2021"
                  statIconName="fas fa-hand-holding-usd"
                  statIconColor="bg-emerald-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
