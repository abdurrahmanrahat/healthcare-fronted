import assets from "@/assets";
import { Box, Button, Container, Typography } from "@mui/material";
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
      {/* left side */}
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

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            justifyContent: "center",
          }}
        >
          <Box>
            <Typography variant="h3" component="h1" fontWeight={600}>
              Healthier Hearts
            </Typography>
            <Typography variant="h3" component="h1" fontWeight={600}>
              Come From
            </Typography>
            <Typography
              color="primary.main"
              variant="h3"
              component="h1"
              fontWeight={600}
            >
              Preventive Care
            </Typography>
          </Box>

          <Box>
            <Typography
              //   variant="h6"
              component="p"
              fontWeight={400}
              className="max-w-[60ch] text-[14px]"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos ab magnam quasi vero officia, amet laboriosam corrupti
              quisquam minima beatae neque non accusantium dolor explicabo
              labore.
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              gap: "8px",
            }}
          >
            <Button>Make Appointment</Button>
            <Button variant="outlined">Contact Us</Button>
          </Box>
        </Box>
      </Box>

      {/* right side */}
      <Box>right</Box>
    </Container>
  );
};

export default HeroSection;
