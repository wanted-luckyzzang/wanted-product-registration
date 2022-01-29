import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
import { Grid, Button, Input, Text } from 'common';
import { border } from 'styles/palette';

const PreviewImage = styled.img`
  width: 100%;
  height: 100%;
`;

const ImageUpload = ({
  preview,
  setProductImage = null,
  setOptionSetData = null,
}) => {
  const [images, setImages] = useState([]);
  const [url, setUrl] = useState('');
  const imgInputRef = useRef(null);
  const imgPreviewInputRef = useRef(null);

  // ################### not preview ################### //

  const addImageButton = () => {
    setImages([]);
    imgInputRef.current.click();
  };

  const imgChange = (e) => {
    const files = e.target.files;
    for (const idx in files) {
      if (!isNaN(idx)) {
        setImages((prev) => [...prev, files[idx].name]);
        setProductImage((images) => [...images]);
      }
    }
  };

  const imageDeleteButton = (e) => {
    const deleteFileName = e.currentTarget.parentNode.textContent.replace(
      'x',
      ''
    );
    setImages((prev) => {
      const filterFiles = [...prev].filter((el) => el !== deleteFileName);
      return filterFiles;
    });
  };

  // ################### preview ################### //
  const addPreviewImageButton = () => {
    imgPreviewInputRef.current.click();
  };

  const imgPreviewChange = (e) => {
    const formData = new FormData();
    formData.append('file', e.target.files[0]);
    formData.append('upload_preset', 'jx6vocqs');
    formData.append('cloud_name', 'ml_default');

    fetch('https://api.cloudinary.com/v1_1/dfuisqpbs/image/upload', {
      method: 'POST',
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        setUrl(data.url);
        setOptionSetData((prev) => [
          ...prev,
          {
            imageUrl: data.url,
          },
        ]);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      {preview ? (
        <Grid
          bg="#e3e3e3"
          height="10rem"
          border
          isFlex
          justify="center"
          align="center"
        >
          {url ? (
            <PreviewImage src={url} />
          ) : (
            <>
              <Button
                bg="#efefef"
                border="#36306e"
                color="black"
                width="12rem"
                height="3rem"
                _onClick={addPreviewImageButton}
              >
                <Text size="1rem">+ 이미지첨부</Text>
              </Button>
              <Input
                type="file"
                _ref={imgPreviewInputRef}
                _onChange={imgPreviewChange}
                none
              />
            </>
          )}
        </Grid>
      ) : (
        <div style={{ display: 'flex' }}>
          <Button
            _onClick={addImageButton}
            width="14rem"
            bg="#fff"
            border="#363168"
            type="button"
          >
            <Text>+ 이미지 첨부</Text>
          </Button>

          <Grid margin="0 0 0 1em">
            {images.map((el) => (
              <Grid isFlex align="center" key={uuidv4()}>
                <Text margin="0 2rem 0 0">{el}</Text>
                <Button
                  sx={{ marginLeft: '0.5rem' }}
                  _onClick={imageDeleteButton}
                  type="delete"
                />
              </Grid>
            ))}
            <Input
              type="file"
              _ref={imgInputRef}
              _onChange={imgChange}
              multiple
              none
            />
          </Grid>
        </div>
      )}
    </>
  );
};

export default ImageUpload;
