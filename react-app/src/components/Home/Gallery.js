import * as React from "react";
import Row from "react-bootstrap/Row";
import img1 from "../image/1.png";
import img2 from "../image/2.png";
import img3 from "../image/3.png";
import img4 from "../image/4.png";
import img5 from "../image/5.png";
import img6 from "../image/6.png";
import ImageGallery from "./ImageGallery";


export const itemData = [
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
];


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
