import * as React from "react";
import Row from "react-bootstrap/Row";
import img1 from "../image/1.png";
import img2 from "../image/2.png";
import img3 from "../image/3.png";
import img4 from "../image/4.png";
import img5 from "../image/5.png";
import img6 from "../image/6.png";
import ImageGallery from "./ImageGallery";

function srcset(image, width, height, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${width * cols}&h=${height * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${width * cols}&h=${
      height * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function Gallery() {
  return (
    <div className="container">
      <h2 style={{ textAlign: "center", marginBottom: "30px" }}>Gallery</h2>

      <Row>
        <ImageGallery itemData={itemData} />
      </Row>
    </div>
  );
}

const itemData = [
  {
    img: img1,
    title: "Bell 212",
    author: "@bkristastucchio",
    featured: true,
  },
  {
    img: img2,
    title: "Bell 212",
    author: "@helloimnik",
    featured: true,
  },
  {
    img: img3,
    title: "Bell 212",
    author: "@nolanissac",
    featured: true,
  },
  {
    img: img4,
    title: "Bell 212",
    author: "@hjrc33",
    featured: true,
  },
  {
    img: img5,
    title: "Bell 212",
    author: "@arwinneil",
    featured: true,
  },
  {
    img: img6,
    title: "Bell 212",
    author: "@tjdragotta",
    featured: true,
  },
  // {
  //   img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
  //   title: 'Fern',
  //   author: '@katie_wasserman',
  // },
  // {
  //   img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
  //   title: 'Mushrooms',
  //   author: '@silverdalex',
  // },
  // {
  //   img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
  //   title: 'Tomato basil',
  //   author: '@shelleypauls',
  // },
  // {
  //   img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
  //   title: 'Sea star',
  //   author: '@peterlaster',
  // },
  // {
  //   img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
  //   title: 'Bike',
  //   author: '@southside_customs',
  // },
];
