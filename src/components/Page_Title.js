import React from "react";
import "./style/Page_Title.css";
import Row_Space from "./Row_Space.js";

const Page_Title = ({Page_Title}) => {
  return (
    <>
      {/* ROW SPACE */}
      <Row_Space />

      {/* PAGE TITLE */}
      <div className="Page_Title">
        <p>{Page_Title}</p>
      </div>

      {/* ROW SPACE */}
      <Row_Space />
    </>
  );
};

export default Page_Title;
