import React from "react";
import PropTypes from "prop-types";
import TealDropdown from "../Dropdowns/TealDropdown"


export default function CardStats({
    statSubtitle,
    statTitle,
    statArrow,
    statPercent,
    statPercentColor,
    statDescripiron,
    statIconName,
    statIconColor,
}) {
    return (
        <>
            <div className="relative flex flex-col min-w-0 break-words bg-blueGray-200 rounded mb-6 xl:mb-0 shadow-lg">
                <div className="flex flex-row p-4">
                    <TealDropdown />
                    <TealDropdown />
                    <TealDropdown />

                    
                </div>
                <p className="text-sm m-4 text-lg text-blueGray-400 mt-4">
                        Select the categories and thier respective vendors which best fit your org.
                    </p>
            </div>
        </>
    );
}

CardStats.defaultProps = {
    statSubtitle: "Traffic",
    statTitle: "350,897",
    statArrow: "up",
    statPercent: "3.48",
    statPercentColor: "text-emerald-500",
    statDescripiron: "Since last month",
    statIconName: "far fa-chart-bar",
    statIconColor: "bg-red-500",
};

CardStats.propTypes = {
    statSubtitle: PropTypes.string,
    statTitle: PropTypes.string,
    statArrow: PropTypes.oneOf(["up", "down"]),
    statPercent: PropTypes.string,
    // can be any of the text color utilities
    // from tailwindcss
    statPercentColor: PropTypes.string,
    statDescripiron: PropTypes.string,
    statIconName: PropTypes.string,
    // can be any of the background color utilities
    // from tailwindcss
    statIconColor: PropTypes.string,
};
