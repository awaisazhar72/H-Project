"use client";
import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";

import ModalForm from "../formModal/page";

import ClearIcon from "@mui/icons-material/Clear";

const ProductHunter = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Box
      sx={{
        position: "fixed",
        width: "65%",
        top: "100px",
        marginLeft: "22%",
        height: "80vh",
        backgroundColor: "white",
        borderRadius: "15px",
      }}
    >
      <div style={{ marginTop: "50px" }}>
        <Box sx={{ textAlign: "center" }}>
          <Typography sx={{ fontWeight: "bold" }}>
            Oppo A54 5G 6.5 inches Smartphone , 4/64GB, Fluid Black
          </Typography>
          <p>
            4GB of RAM and 64GB of internal storage Display: 6.5-inch
            touchscreen, 2400 x 1080 pixels, 2MP and 2MP, 16MP front camera
            $741.90
          </p>
        </Box>
      </div>
      <hr style={{ marginTop: "40px", marginBottom: "20px" }} />{" "}
      <div style={{ marginTop: "20px" }}>
        <Box sx={{ textAlign: "center" }}>
          <Typography sx={{ fontWeight: "bold" }}>
            Oppo A54 5G 6.5 inches Smartphone , 4/64GB, Fluid Black
          </Typography>
          <p>
            4GB of RAM and 64GB of internal storage Display: 6.5-inch
            touchscreen, 2400 x 1080 pixels, 2MP and 2MP, 16MP front camera
            $741.90
          </p>
        </Box>
      </div>
      <hr style={{ marginTop: "50px", marginBottom: "20px" }} />{" "}
      <div style={{ marginTop: "40px" }}>
        <Box sx={{ textAlign: "center" }}>
          <Typography sx={{ fontWeight: "bold" }}>
            Oppo A54 5G 6.5 inches Smartphone , 4/64GB, Fluid Black
          </Typography>
          <p>
            4GB of RAM and 64GB of internal storage Display: 6.5-inch
            touchscreen, 2400 x 1080 pixels, 2MP and 2MP, 16MP front camera
            $741.90
          </p>
        </Box>
      </div>
      <Box
        sx={{
          paddingLeft: "15px",
        }}
      >
        <Button
          variant="contained"
          onClick={handleOpenModal}
          sx={{
            background: "#1273eb",
            border: "1px solid grey",
            color: "white",
          }}
        >
          Open
        </Button>
      </Box>
      {isModalOpen && (
        <Box
          sx={{
            position: "fixed",
            top: 0,
            right: 0,
            bottom: 0,
            width: "80%",
            maxWidth: "655px",
            backgroundColor: "white",
            borderRadius: "15px",
            boxShadow: 24,
            p: 4,
            overflowY: "auto",
          }}
        >
          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <ClearIcon onClick={handleCloseModal} />
          </Box>
          <ModalForm />
        </Box>
      )}
    </Box>
  );
};

export default ProductHunter;
