import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
import { Grid, Button, Input } from 'common';
import { border } from 'styles/palette';

const PreviewImage = styled.img`
  width: 100%;
  height: 100%;
`;

const ImageUpload = ({ preview }) => {
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
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      {preview ? (
        <Grid
          margin="0.5rem"
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
                children="+ 이미지첨부"
                bg="white"
                color="black"
                width="12rem"
                _onClick={addPreviewImageButton}
              />
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
            border={border.button}
            type="button"
          >
            + 이미지 첨부
          </Button>

          <Grid margin="0 0 0 1em">
            {images.map((el) => (
              <Grid
                isFlex
                align="center"
                style={{ display: 'flex' }}
                key={uuidv4()}
              >
                {el}
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
