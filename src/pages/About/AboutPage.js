import React from "react";
import "./style/AboutPage.css";
import Row_Space from "../../components/Row_Space";

const AboutPage = () => {
  return (
    <>
      {/* ROW SPACE */}
      <Row_Space />

      {/* PAGE TITLE */}
      <div className="Page_Title">
        <p>About Us</p>
      </div>

      {/* ROW SPACE */}
      <Row_Space />
    </>
  );
};

export default AboutPage;
