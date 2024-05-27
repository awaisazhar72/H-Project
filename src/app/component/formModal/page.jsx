import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import React from "react";
import ClearIcon from "@mui/icons-material/Clear";

const ModalForm = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            display: "flex ",
            gap: "15px",
            margin: "5px",
            padding: "5px",
          }}
        >
          <ClearIcon />
          <Typography>Filter</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            padding: "5px",
            margin: "2px",
            gap: "15px",
          }}
        >
          <Button
            sx={{ border: "1px solid grey", marginTop: "3px", width: "70px" }}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            sx={{
              variant: "contained",
              backgroundColor: "#1273eb",
              border: "1px solid grey",
              color: "white",
            }}
          >
            Save
          </Button>
        </Box>
      </Box>

      <form>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Box>
              <Typography>Number of Items</Typography>
              <TextField />
            </Box>

            <Box>
              <Typography>Minimum reviews</Typography>
              <TextField />
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Box>
              <Typography>Max Price</Typography>
              <TextField />
            </Box>

            <Box>
              <Typography>Min Price</Typography>
              <TextField />
            </Box>
          </Box>

          <Box>
            <Typography>Keywords</Typography>
            <TextField
              sx={{
                width: "550px",
              }}
            />
          </Box>
          <Box>
            <Typography>Keyword To Exclude</Typography>
            <TextField
              sx={{
                width: "550px",
              }}
            />
          </Box>
        </Box>
      </form>
    </>
  );
};

export default ModalForm;
