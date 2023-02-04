import { ImageListItemBar } from "@material-ui/core";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import * as React from "react";
import ImageModal from "./ImageModal";

export default function ImageGallery({ itemData }) {
  const [selectedImg, setSelectedImage] = React.useState(null);
  return (
    <>
      <ImageList variant="masonry" cols={3} gap={8}>
        {itemData.map((item) => (
          <ImageListItem
            key={item.img}
            style={{ cursor: "pointer" }}
            onClick={() => setSelectedImage(item.img)}
          >
            <img
              src={`${item.img}?w=248&fit=crop&auto=format`}
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
            <ImageListItemBar
              // sx={{
              //   background:
              //     "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, " +
              //     "rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
              // }}
              title={item.title}
              // position="top"
              // actionIcon={
              //   <IconButton
              //     sx={{ color: "white" }}
              //     aria-label={`star ${item.title}`}
              //   >
              //     <StarBorderIcon color="white" />
              //   </IconButton>
              // }
              // actionPosition="left"
            />
          </ImageListItem>
        ))}
      </ImageList>

      {selectedImg && <ImageModal img={selectedImg} setSelectedImage={setSelectedImage} />}
    </>
  );
}
