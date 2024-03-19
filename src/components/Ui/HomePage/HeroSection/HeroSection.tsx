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
              gap: 2,
            }}
          >
            <Button>Make Appointment</Button>
            <Button variant="outlined">Contact Us</Button>
          </Box>
        </Box>
      </Box>

      {/* right side */}
      <Box
        sx={{
          p: 1,
          flex: 1,
          display: "flex",
          justifyContent: "center",
          position: "relative",
          mt: 0,
        }}
      >
        <Box
          sx={{
            position: "absolute",
            left: "200px",
            top: "-30px",
          }}
        >
          <Image src={assets.svgs.arrow} width={100} height={100} alt="arrow" />
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: 2,
          }}
        >
          <Box mt={4}>
            <Image
              src={assets.images.doctor1}
              width={240}
              height={380}
              alt="doctor1"
            />
          </Box>
          <Box>
            <Image
              src={assets.images.doctor2}
              width={240}
              height={350}
              alt="doctor2"
            />
          </Box>
        </Box>
        <Box
          sx={{
            position: "absolute",
            bottom: "-50px",
            right: 0,
            zIndex: -1,
          }}
        >
          <Image
            src={assets.images.stethoscope}
            width={180}
            height={180}
            alt="stethoscope"
          />
        </Box>
        <Box
          sx={{
            position: "absolute",
            top: "220px",
            left: "150px",
          }}
        >
          <Image
            src={assets.images.doctor3}
            width={240}
            height={240}
            alt="doctor 3"
          />
        </Box>
      </Box>
    </Container>
  );
};

export default HeroSection;
