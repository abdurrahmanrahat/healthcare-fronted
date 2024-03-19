import assets from "@/assets";
import { Box, Container } from "@mui/material";
import Image from "next/image";

const HeroSection = () => {
  return (
    <Container
      sx={{
        display: "flex",
        direction: "row",
        my: 16,
      }}
    >
      <Box
        sx={{
          flex: 1,
          position: "relative",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: "-90px",
            left: "-120px",
            width: "700px",
          }}
        >
          <Image src={assets.svgs.grid} alt="grid" />
        </Box>
      </Box>
      <Box>right</Box>
    </Container>
  );
};

export default HeroSection;
