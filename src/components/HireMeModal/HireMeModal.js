import React from "react";
import { Modal, Box, IconButton } from "@mui/material";
import { FaWhatsapp } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { RiLinkedinBoxFill } from "react-icons/ri";
import { IoCloseOutline } from "react-icons/io5";

const HireMeModal = ({ open, setOpen }) => {
  const handleClose = () => {
    setOpen(false);
  };

  const mailToParams =
    "mailto:tristan.plet@gmail.com?subject=Interested in Your Services&body=Hi Tristan,%0D%0A%0D%0AI'm interested in discussing a potential project with you.%0D%0A%0D%0APlease let me know a convenient time for a call or meeting.%0D%0A%0D%0ABest,%0D%0A[Your Name]";

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    maxWidth: 400,
    width: "75vw",
    bgcolor: "#041C32",
    border: "1px solid #102a42",
    borderRadius: 3,
    boxShadow: 24,
    p: 4,
  };

  const items = [
    { emoji: "🌐", text: "Need a new website, online shop or brand?" },
    { emoji: "✨", text: "Want to improve a current website?" },
    { emoji: "👨‍💻", text: "Need a software engineer to work with you?" },
  ];

  const iconButtonProps = {
    sx: {
      "&:hover": {
        transform: "scale(0.95)",
      },
      transition: "transform 0.2s ease-in-out",
      color: "#ECB365",
    },
  };

  const CustomList = ({ items }) => {
    return (
      <ul
        style={{
          color: "#f2f2f2",
          listStyle: "none",
          paddingLeft: 0,
          marginTop: 0,
        }}
      >
        {items.map((item, index) => (
          <li
            key={index}
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "10px",
            }}
          >
            <span style={{ marginRight: "8px" }}>{item.emoji}</span>
            <span style={{ fontSize: "18px" }}>{item.text}</span>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        disableEnforceFocus
        disableRestoreFocus
        sx={{
          "&:focus": {
            outline: "none",
          },
          "& .MuiBackdrop-root": {
            outline: "none",
          },
        }}
      >
        <Box sx={style}>
          <IconButton
            onClick={handleClose}
            size="large"
            style={{ position: "absolute", right: 8, top: 8, color: "#ECB365" }}
          >
            <IoCloseOutline />
          </IconButton>
          <h2 style={{ color: "#f2f2f2", marginBottom: 15 }}>
            Let's discuss your project
          </h2>
          <Box ml={0} mb={7}>
            <CustomList items={items} />
          </Box>
          <h3 style={{ color: "#f2f2f2", marginBottom: 15 }}>
            Get in touch for a{" "}
            <span style={{ color: "#ECB365" }}>free consultation</span>
          </h3>
          <p style={{ color: "#f2f2f2", marginTop: 0, fontSize: "18px" }}>
            I'd love to hear from you!
          </p>
          <Box display="flex" gap={5} justifyContent="center" mt={5}>
            <IconButton
              {...iconButtonProps}
              onClick={() =>
                window.open("https://wa.me/+525539381634", "_blank")
              }
            >
              <FaWhatsapp size="50px" />
            </IconButton>
            <IconButton
              {...iconButtonProps}
              onClick={() => (window.location.href = mailToParams)}
            >
              <HiOutlineMail size="50px" />
            </IconButton>
            <IconButton
              {...iconButtonProps}
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/tristan-plet",
                  "_blank"
                )
              }
            >
              <RiLinkedinBoxFill size="50px" />
            </IconButton>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};

export default HireMeModal;
