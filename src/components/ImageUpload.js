import React, { useRef } from "react";
import styled from "styled-components";
import Button from "common/Button";

const Input = styled.input`
  display: none;
`;

const ImageUpload = () => {
  const imgInputRef = useRef(null);

  const addImageButton = () => {
    imgInputRef.current.click();
  };

  return (
    <>
      <Button
        _onClick={addImageButton}
        width="340px"
        children="+ 이미지 첨부"
        color="black"
      />
      <Input type="file" ref={imgInputRef} />
    </>
  );
};

export default ImageUpload;
