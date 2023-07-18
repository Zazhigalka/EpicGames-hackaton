import React, { useState } from "react";
import "./AddProduct.css";
import { useProduct } from "../../contexts/ProductContextProvider";

const AddProduct = () => {
  const { createProduct } = useProduct();

  const [titleOfGame, setTitleOfGame] = useState("");
  const [gameLogo, setGameLogo] = useState("");
  const [titleOfPulisher, setTitleOfPulisher] = useState("");
  const [nameOfDeveloper, setNameOfDeveloper] = useState("");
  const [dateOfIssue, setDateOfIssue] = useState("");
  const [shortDescr, setShortDescr] = useState("");
  const [preview, setPreview] = useState("");
  const [fullDescr, setFullDescr] = useState("");
  const [fullImage, setFullImage] = useState("");
  const [price, setPrice] = useState("");
  const [linkGame, setLinkGame] = useState("");
  const [video, setVideo] = useState("");
  const [category, setCategory] = useState("");
  const [image1, setImage1] = useState("");
  const [image2, setImage2] = useState("");
  const [image3, setImage3] = useState("");
  const [image4, setImage4] = useState("");
  const [image5, setImage5] = useState("");

  // console.log(
  //   titleOfGame,
  //   gameLogo,
  //   titleOfPulisher,
  //   nameOfDeveloper,
  //   dateOfIssue,
  //   shortDescr,
  //   preview,
  //   fullDescr,
  //   fullImage,
  //   price,
  //   linkGame,
  //   video,
  //   category,
  //   image1,
  //   image2,
  //   image3,
  //   image4,
  //   image5
  // );

  const handleSave = () => {
    if (
      !titleOfGame ||
      !gameLogo ||
      !titleOfPulisher ||
      !nameOfDeveloper ||
      !dateOfIssue ||
      !shortDescr ||
      !fullDescr ||
      !price ||
      !linkGame ||
      !category ||
      !image1 ||
      !image2
    ) {
      alert("ЗАПОЛНИТЕ ПОЛЯ!!!");
      return;
    }

    const newProduct = new FormData();

    newProduct.append("title_of_game", titleOfGame);
    newProduct.append("game_logo", gameLogo);
    newProduct.append("title_of_publisher", titleOfPulisher);
    newProduct.append("name_of_developer", nameOfDeveloper);
    newProduct.append("date_of_issue", dateOfIssue);
    newProduct.append("short_description", shortDescr);
    newProduct.append("preview", preview);
    newProduct.append("full_description", fullDescr);
    newProduct.append("image_for_full", fullImage);
    newProduct.append("price", price);
    newProduct.append("link_on_game", linkGame);
    newProduct.append("video", video);
    newProduct.append("category", category);
    newProduct.append("image_one", image1);
    newProduct.append("image_two", image2);
    newProduct.append("image_three", image3);
    newProduct.append("image_four", image4);
    newProduct.append("image_five", image5);

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
            autoFocus
            placeholder="ENTER TITLE OF GAME"
            type="text"
            className="addProduct__inputs"
            onChange={(e) => setTitleOfGame(e.target.value)}
          />
          <input
            autoFocus
            placeholder="ENTER GAME LOGO"
            type="text"
            className="addProduct__inputs"
            onChange={(e) => setGameLogo(e.target.value)}
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
            placeholder="ENTER IMAGE FOR SHORT"
            type="text"
            className="addProduct__inputs"
            onChange={(e) => setPreview(e.target.value)}
            encType="multipart/form-data"
          />
          <input
            placeholder="ENTER FULL DESCRIPTION"
            type="text"
            className="addProduct__inputs"
            onChange={(e) => setFullDescr(e.target.value)}
          />
          <input
            placeholder="ENTER IMAGE FOR FULL"
            type="text"
            className="addProduct__inputs"
            onChange={(e) => setFullImage(e.target.value)}
            encType="multipart/form-data"
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
            placeholder="ENTER FILE TO VIDEO"
            type="text"
            className="addProduct__inputs"
            onChange={(e) => setVideo(e.target.value)}
            encType="multipart/form-data"
          />
          <input
            placeholder="ENTER CATEGORY"
            type="text"
            className="addProduct__inputs"
            onChange={(e) => setCategory(e.target.value)}
          />
          <input
            placeholder="ENTER FIRST IMAGE"
            type="text"
            className="addProduct__inputs"
            onChange={(e) => setImage1(e.target.value)}
          />
          <input
            placeholder="ENTER SECOND IMAGE"
            type="text"
            className="addProduct__inputs"
            onChange={(e) => setImage2(e.target.value)}
          />{" "}
          <input
            placeholder="ENTER THIRT IMAGE"
            type="text"
            className="addProduct__inputs"
            onChange={(e) => setImage3(e.target.value)}
          />{" "}
          <input
            placeholder="ENTER FOUR IMAGE"
            type="text"
            className="addProduct__inputs"
            onChange={(e) => setImage4(e.target.value)}
          />{" "}
          <input
            placeholder="ENTER FIFTH IMAGE"
            type="text"
            className="addProduct__inputs"
            onChange={(e) => setImage5(e.target.value)}
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
