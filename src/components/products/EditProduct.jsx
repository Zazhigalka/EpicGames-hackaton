import React, { useEffect, useState } from "react";
import "./AddProduct.css";
import { useProduct } from "../../contexts/ProductContextProvider";
import { useParams } from "react-router-dom";

const EditProduct = () => {
  const {
    categories,
    getCategories,
    updateProduct,
    oneProduct,
    getOneProduct,
  } = useProduct();

  const { id } = useParams();
  useEffect(() => {
    getOneProduct(id);
    getCategories();
  }, []);

  useEffect(() => {
    if (oneProduct) {
      setTitleOfGame(oneProduct.title_of_game);
      setGameLogo(oneProduct.game_logo);
      setTitleOfPulisher(oneProduct.title_of_publisher);
      setNameOfDeveloper(oneProduct.name_of_developer);
      setDateOfIssue(oneProduct.date_of_issue);
      setShortDescr(oneProduct.short_description);
      setPreview(oneProduct.preview);
      setFullDescr(oneProduct.full_description);
      setFullImage(oneProduct.image_for_full);
      setPrice(oneProduct.price);
      setLinkGame(oneProduct.link_on_game);
      setVideo(oneProduct.video);
      setCategory(oneProduct.category);
      setImage1(oneProduct.image_one);
      setImage2(oneProduct.image_two);
      setImage3(oneProduct.image_three);
      setImage4(oneProduct.image_four);
      setImage5(oneProduct.image_five);
    }
  }, [oneProduct]);

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
    updateProduct(id, newProduct);
  };

  return (
    <div className="addProduct__container">
      <div className="addProduct">
        <div className="addProduct__title">
          <h3 className="addProduct__title_h3">UPDATE PRODUCT</h3>
        </div>
        <div className="addProduct__input_group">
          <input
            autoFocus
            placeholder="ENTER TITLE OF GAME"
            type="text"
            className="addProduct__inputs"
            onChange={(e) => setTitleOfGame(e.target.value)}
            value={titleOfGame}
          />
          <input
            placeholder="ENTER GAME LOGO"
            type="text"
            className="addProduct__inputs"
            onChange={(e) => setGameLogo(e.target.value)}
            value={gameLogo}
          />
          <input
            placeholder="ENTER TITLE OF PULISHER"
            type="text"
            className="addProduct__inputs"
            onChange={(e) => setTitleOfPulisher(e.target.value)}
            value={titleOfPulisher}
          />
          <input
            placeholder="ENTER NAME OF DEVELOPER"
            type="text"
            className="addProduct__inputs"
            onChange={(e) => setNameOfDeveloper(e.target.value)}
            value={nameOfDeveloper}
          />
          <input
            placeholder="ENTER DATE OF ISSUE"
            type="text"
            className="addProduct__inputs"
            onChange={(e) => setDateOfIssue(e.target.value)}
            value={dateOfIssue}
          />
          <input
            placeholder="ENTER SHORT DESCRIPTION"
            type="text"
            className="addProduct__inputs"
            onChange={(e) => setShortDescr(e.target.value)}
            value={shortDescr}
          />
          <input
            placeholder="ENTER PREVIEW"
            type="text"
            className="addProduct__inputs"
            onChange={(e) => setPreview(e.target.value)}
            encType="multipart/form-data"
            value={preview}
          />
          <input
            placeholder="ENTER FULL DESCRIPTION"
            type="text"
            className="addProduct__inputs"
            onChange={(e) => setFullDescr(e.target.value)}
            value={fullDescr}
          />
          <input
            placeholder="ENTER IMAGE FOR FULL"
            type="text"
            className="addProduct__inputs"
            onChange={(e) => setFullImage(e.target.value)}
            value={fullImage}
          />
          <input
            placeholder="ENTER PRICE"
            type="text"
            className="addProduct__inputs"
            onChange={(e) => setPrice(e.target.value)}
            value={price}
          />
          <input
            placeholder="ENTER LINK ON GAME"
            type="text"
            className="addProduct__inputs"
            onChange={(e) => setLinkGame(e.target.value)}
            value={linkGame}
          />
          <input
            placeholder="ENTER FILE TO VIDEO"
            type="text"
            className="addProduct__inputs"
            onChange={(e) => setVideo(e.target.value)}
            encType="multipart/form-data"
            value={video}
          />
          {/* <input
            placeholder="ENTER CATEGORY"
            type="text"
            className="addProduct__inputs"
            onChange={(e) => setCategory(e.target.value)}
            value={category}
          /> */}
          <select
            className="addProduct__inputs"
            onChange={(e) => setCategory(e.target.value)}
            value={category}
          >
            <option>Choose category</option>
            {categories.map((item) => (
              <option key={item.slug} value={item.slug}>
                {item.name}
              </option>
            ))}
          </select>
          <input
            placeholder="ENTER FIRST IMAGE"
            type="text"
            className="addProduct__inputs"
            onChange={(e) => setImage1(e.target.value)}
            value={image1}
          />
          <input
            placeholder="ENTER SECOND IMAGE"
            type="text"
            className="addProduct__inputs"
            onChange={(e) => setImage2(e.target.value)}
            value={image2}
          />{" "}
          <input
            placeholder="ENTER THIRT IMAGE"
            type="text"
            className="addProduct__inputs"
            onChange={(e) => setImage3(e.target.value)}
            value={image3}
          />{" "}
          <input
            placeholder="ENTER FOUR IMAGE"
            type="text"
            className="addProduct__inputs"
            onChange={(e) => setImage4(e.target.value)}
            value={image4}
          />{" "}
          <input
            placeholder="ENTER FIFTH IMAGE"
            type="text"
            className="addProduct__inputs"
            onChange={(e) => setImage5(e.target.value)}
            value={image5}
          />
        </div>
        <div className="addProduct__btn">
          <button className="addProduct__button" onClick={handleSave}>
            SAVE CHANGES
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditProduct;
