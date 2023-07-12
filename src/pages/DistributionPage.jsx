import React from "react";
import Distribution from "../components/distribution/Distribution";
import Search from "../components/search/Search";

const DistributionPage = () => {
  return (
    <>
      <div style={{ position: "fixed", left: "0", right: "0" }}>
        <Search />
      </div>
      <Distribution />
    </>
  );
};

export default DistributionPage;