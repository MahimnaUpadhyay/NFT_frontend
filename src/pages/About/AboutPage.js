import React from "react";
import "./style/AboutPage.css";
import Page_Title from "../../components/Page_Title";
import Row_Space from "../../components/Row_Space";

const AboutPage = () => {
  return (
    <>
      {/* PAGE TITLE */}
      <Page_Title Page_Title={"Curious About Us?"} />

      {/* ABOUT COMPANY */}
      <div className="About_Company_BG">
        <div className="About_Company_Layout">
          <div className="About_Company_Image">
            <img
              src="https://images.unsplash.com/photo-1587410198315-1f277736e66d?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>
          <div className="About_Company_Content">
            <p>
              We are pioneers in the exciting new frontier of NFTs, where
              digital creativity meets ownership and community. We believe that
              NFTs are more than just pixels on a screen; they represent a
              paradigm shift in how we value and interact with digital art,
              collectibles, and experiences. <br />
              <br />
              Our Mission: Empower Creators: We provide a platform for creators
              to showcase their work, connect with passionate collectors, and
              build a sustainable future for their art. <br />
              <br />
              Foster Innovation: We push the boundaries of what's possible with
              NFTs, exploring new applications and use cases that extend far
              beyond digital art. <br />
              <br />
              Build a Thriving Community: We cultivate a welcoming space for
              collectors, artists, and enthusiasts to connect, share ideas, and
              participate in the NFT revolution. <br />
              <br />
              What Makes Us Different: Focus on Quality & Curation: We handpick
              high-caliber NFT projects with artistic merit, utility, and a
              strong vision. <br />
              <br />
              Seamless User Experience: We offer a user-friendly platform that
              makes buying, selling, and managing NFTs simple and enjoyable.{" "}
              <br />
              <br />
              Commitment to Transparency: We believe in clear communication and
              fair practices, building trust within the NFT ecosystem. <br />
              <br />
              Join us on this journey! Whether you're a seasoned collector or a
              curious newcomer, we invite you to explore the exciting world of
              NFTs on our platform. We offer a wealth of resources, educational
              content, and a vibrant community to support you every step of the
              way. Together, let's shape the future of digital ownership and
              unlock the full potential of NFTs!
            </p>
          </div>
        </div>
      </div>

      {/* ROW SPACE */}
      <Row_Space />
    </>
  );
};

export default AboutPage;
