import React from "react";
import "./style/MarketPage.css";
import Card_Component from "../../components/Card_Component.js";
import Row_Space from "../../components/Row_Space.js";

import astro from "../../assets/nfts/astro.jpg";
import killjoy from "../../assets/nfts/Killjoy.jpg";
import skullk from "../../assets/nfts/Skull.jpg";
import fushigoro from "../../assets/nfts/fushigoro.jpg";
import geek from "../../assets/nfts/Geek.jpg";
import skull_griffit from "../../assets/nfts/skull_griffiti.jpg";
import anime_girl from "../../assets/nfts/anime_girl.png";
import bored_ape from "../../assets/nfts/bored_ape.jpg";
import griffit from "../../assets/nfts/griffiti.png";
import Page_Title from "../../components/Page_Title.js";

const MarketPage = () => {
  return (
    <>
      {/* PAGE TITLE */}
      <Page_Title Page_Title={"Explore Vast Vairety of NFT'S"} />

      {/* NFT'S CARD GRID */}
      <div className="Nft_Card_Grid_Container">
        <Card_Component nft_image={astro} button_content={"Buy Now"} />
        <Card_Component nft_image={killjoy} button_content={"Buy Now"} />
        <Card_Component nft_image={geek} button_content={"Buy Now"} />
        <Card_Component nft_image={skullk} button_content={"Buy Now"} />
        <Card_Component nft_image={fushigoro} button_content={"Buy Now"} />
        <Card_Component nft_image={skull_griffit} button_content={"Buy Now"} />
        <Card_Component nft_image={anime_girl} button_content={"Buy Now"} />
        <Card_Component nft_image={bored_ape} button_content={"Buy Now"} />
        <Card_Component nft_image={griffit} button_content={"Buy Now"} />
      </div>

      {/* ROW SPACE */}
      <Row_Space />
    </>
  );
};

export default MarketPage;
