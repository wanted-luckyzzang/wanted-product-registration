import React, { useEffect, useRef, useState } from "react";
import Button from "common/Button";
import Input from "common/Input";
import { v4 as uuidv4 } from "uuid";

const ImageUpload = () => {
  const [images, setImages] = useState([]);
  const imgInputRef = useRef(null);

  const addImageButton = () => {
    imgInputRef.current.click();
  };

  const imageDeleteButton = (e) => {
    const deleteFileName = e.target.parentNode.textContent.replace("삭제", "");
    setImages((prev) => {
      const filterFiles = [...prev].filter((el) => el !== deleteFileName);
      return filterFiles;
    });
  };

  const imgChange = (e) => {
    const files = e.target.files;
    for (const idx in files) {
      if (!isNaN(idx)) {
        setImages((prev) => [...prev, files[idx].name]);
      }
    }
  };

  return (
    <>
      <Button
        _onClick={addImageButton}
        width="340px"
        children="+ 이미지 첨부"
        color="black"
      />
      {images.map((el) => (
        <div style={{ display: "flex" }} key={uuidv4()}>
          {el}
          <Button
            width="50px"
            children="삭제"
            color="red"
            _onClick={imageDeleteButton}
          />
        </div>
      ))}
      <Input
        type="file"
        _ref={imgInputRef}
        _onChange={imgChange}
        multiple
        none={true}
      />
    </>
  );
};

export default ImageUpload;
