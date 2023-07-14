import React, { useState } from "react";
import "./AddProduct.css";
import { useProduct } from "../../contexts/ProductContextProvider";

const AddProduct = () => {
  const { createProduct } = useProduct();
  const [slug, setSlug] = useState();
  const [titleOfGame, setTitleOfGame] = useState();
  const [titleOfPulisher, setTitleOfPulisher] = useState();
  const [nameOfDeveloper, setNameOfDeveloper] = useState();
  const [dateOfIssue, setDateOfIssue] = useState();
  const [shortDescr, setShortDescr] = useState();
  const [fullDescr, setFullDescr] = useState();
  const [price, setPrice] = useState();
  const [linkGame, setLinkGame] = useState();
  const [discord, setDiscord] = useState();
  const [insta, setInsta] = useState();
  const [twitter, setTwitter] = useState();
  const [facebook, setFacebook] = useState();
  const [category, setCategory] = useState();

  //   console.log(
  //     slug,
  //     titleOfGame,
  //     titleOfPulifher,
  //     nameOfDeveloper,
  //     dateOfIssue,
  //     shortDescr,
  //     fullDescr,
  //     price,
  //     linkGame,
  //     discord,
  //     insta,
  //     twitter,
  //     facebook,
  //     category
  //   );

  const handleSave = () => {
    if (
      !slug.trim() ||
      !titleOfGame.trim() ||
      !titleOfPulisher.trim() ||
      !nameOfDeveloper.trim() ||
      !dateOfIssue.trim() ||
      !shortDescr.trim() ||
      !fullDescr.trim() ||
      !price.trim() ||
      !linkGame.trim() ||
      !discord.trim() ||
      !insta.trim() ||
      !twitter.trim() ||
      !facebook.trim() ||
      !category.trim()
    ) {
      alert("ЗАПОЛНИТЕ ПОЛЯ!!!");
      return;
    }

    const newProduct = new FormData();
    newProduct.append("slug", slug);
    newProduct.append("title_of_game", titleOfGame);
    newProduct.append("title_of_publisher", titleOfPulisher);
    newProduct.append("name_of_developer", nameOfDeveloper);
    newProduct.append("date_of_issue", dateOfIssue);
    newProduct.append("short_description", shortDescr);
    newProduct.append("full_description", fullDescr);
    newProduct.append("price", price);
    newProduct.append("link_on_game", linkGame);
    newProduct.append("link_on_discord", discord);
    newProduct.append("link_on_instagram", insta);
    newProduct.append("link_on_twitter", twitter);
    newProduct.append("link_on_facebook", facebook);
    newProduct.append("category", category);

    createProduct(newProduct);
  };

  return (
    <div className="addProduct__container">
      <div className="addProduct">
        <div className="addProduct__title">
          <h3 className="addProduct__title_h3">ADD PRODUCT</h3>
        </div>
        <div className="addProduct__input_group">
          <input
            placeholder="ENTER SLUG"
            type="text"
            className="addProduct__inputs"
            onChange={(e) => setSlug(e.target.value)}
          />
          <input
            placeholder="ENTER TITLE OF GAME"
            type="text"
            className="addProduct__inputs"
            onChange={(e) => setTitleOfGame(e.target.value)}
          />
          <input
            placeholder="ENTER TITLE OF PULISHER"
            type="text"
            className="addProduct__inputs"
            onChange={(e) => setTitleOfPulisher(e.target.value)}
          />
          <input
            placeholder="ENTER NAME OF DEVELOPER"
            type="text"
            className="addProduct__inputs"
            onChange={(e) => setNameOfDeveloper(e.target.value)}
          />
          <input
            placeholder="ENTER DATE OF ISSUE"
            type="text"
            className="addProduct__inputs"
            onChange={(e) => setDateOfIssue(e.target.value)}
          />
          <input
            placeholder="ENTER SHORT DESCRIPTION"
            type="text"
            className="addProduct__inputs"
            onChange={(e) => setShortDescr(e.target.value)}
          />
          <input
            placeholder="ENTER FULL DESCRIPTION"
            type="text"
            className="addProduct__inputs"
            onChange={(e) => setFullDescr(e.target.value)}
          />
          <input
            placeholder="ENTER PRICE"
            type="text"
            className="addProduct__inputs"
            onChange={(e) => setPrice(e.target.value)}
          />
          <input
            placeholder="ENTER LINK ON GAME"
            type="text"
            className="addProduct__inputs"
            onChange={(e) => setLinkGame(e.target.value)}
          />
          <input
            placeholder="ENTER LINK ON DISCORD"
            type="text"
            className="addProduct__inputs"
            onChange={(e) => setDiscord(e.target.value)}
          />
          <input
            placeholder="ENTER LINK ON INSTAGRAM"
            type="text"
            className="addProduct__inputs"
            onChange={(e) => setInsta(e.target.value)}
          />
          <input
            placeholder="ENTER LINK ON TWITTER"
            type="text"
            className="addProduct__inputs"
            onChange={(e) => setTwitter(e.target.value)}
          />
          <input
            placeholder="ENTER LINK ON FACEBOOK"
            type="text"
            className="addProduct__inputs"
            onChange={(e) => setFacebook(e.target.value)}
          />
          <input
            placeholder="ENTER CATEGORY"
            type="text"
            className="addProduct__inputs"
            onChange={(e) => setCategory(e.target.value)}
          />
        </div>
        <div className="addProduct__btn">
          <button className="addProduct__button" onClick={handleSave}>
            ADD
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
