import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import * as React from "react";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function ImageModal({ img, setSelectedImage }) {
  const [open, setOpen] = React.useState(img);

  const handleClose = () => {
    setOpen(false);
    setSelectedImage(null)
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box
            component="img"
            src={img}
            height="100%"
            width="100%"
            fit="cover"
            duration={3000}
            easing="cubic-bezier(0.7, 0, 0.6, 1)"
            showLoading={true}
            errorIcon={true}
            shift={null}
            distance="100px"
            shiftDuration={900}
            bgColor="inherit"
          />
        </Box>
      </Modal>
    </div>
  );
}
