import React from "react";
import "./style/HomePage.css";
import Row_Space from "../../components/Row_Space";

import Card_Component from "../../components/Card_Component";
import Contact_Us_Form from "../../components/Contact_Us_Form";

import bored_ape from '../../assets/nfts/bored_ape.jpg';
import anime_girl from '../../assets/nfts/anime_girl.png';
import killjoy from '../../assets/nfts/Killjoy.jpg';

const HomePage = () => {
  return (
    <>
      {/* HERO SECTION */}
      <div className="Hero_Container">
        <div className="Grid_Container">
          <div className="Hero_Image">
            <img
              src="https://images.pexels.com/photos/5011647/pexels-photo-5011647.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Hero_Image"
            />
          </div>
          <div className="Hero_Content">
            <div className="Hero_Title">
              <p>Buy | Rent | Sell | Earn</p>
            </div>
            <div className="Hero_Subtitle">
              <p>Via The Best Platform</p>
            </div>
            <div className="Hero_Button">
              <button>Explore More</button>
            </div>
          </div>
        </div>
      </div>

      {/* Row Space */}
      <Row_Space />

      {/* CARD SECTION */}
      <div className="Card_Container">
        <div className="Title">
          <p>Popular NFT'S</p>
        </div>

        <div className="Card_Grid_Container">
          <div className="">
            <Card_Component
              nft_image={bored_ape}
              content={"About NFT about a Bored Ape."}
              button_content={"Read More"}
            />
          </div>
          <div className="">
            <Card_Component
              nft_image={anime_girl}
              content={"About NFT about a Anime Girl."}
              button_content={"Read More"}
            />
          </div>
          <div className="">
            <Card_Component
              nft_image={killjoy}
              content={"About NFT about a Chibi Killjoy."}
              button_content={"Read More"}
            />
          </div>
        </div>
      </div>

      {/* Row Space */}
      <Row_Space />

      {/* ABOUT SECTION */}
      <div className="About_Container">
        <div className="About_Grid_Container">
          <div className="About_Image">
            <img
              src="https://images.pexels.com/photos/17497303/pexels-photo-17497303/free-photo-of-an-artist-s-illustration-of-artificial-intelligence-ai-this-image-visualises-the-benefits-and-flaws-of-large-language-models-it-was-created-by-tim-west-as-part-of-the-visualising-ai-pr.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
          </div>
          <div className="About_Content">
            <p className="p_Title">Who we are</p>
            <p>
              Own a piece of the future! Join our thriving NFT marketplace where
              creators meet collectors. Discover unique digital art, music,
              collectibles, and more – all secured by blockchain technology.
              Buy, sell, and trade NFTs with ease, and become part of a
              revolutionary new era of ownership and creative expression.
            </p>
            <div className="Hero_Button">
              <button>Read More</button>
            </div>
          </div>
        </div>
      </div>

      <div className="Contact_Us_Container">
        <Contact_Us_Form />
      </div>

      {/* Row Space */}
      <Row_Space />
    </>
  );
};

export default HomePage;
