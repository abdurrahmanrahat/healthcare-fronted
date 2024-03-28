import FacebookIcon from "@/assets/landing_page/facebook.png";
import InstagramIcon from "@/assets/landing_page/instagram.png";
import LinkedInIcon from "@/assets/landing_page/linkedin.png";
import TwitterIcon from "@/assets/landing_page/twitter.png";
import { Box, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <Box bgcolor="rgb(17, 26, 34)" py={5}>
      <Container>
        {/* Links */}
        <Stack direction="row" gap={4} justifyContent="center">
          <Typography color="#fff" component={Link} href="/consultation">
            Consultation
          </Typography>
          <Typography color="#fff" component={Link} href="/">
            Health Plans
          </Typography>
          <Typography color="#fff" component={Link} href="/">
            Medicine
          </Typography>
          <Typography color="#fff" component={Link} href="/">
            Diagnostics
          </Typography>
          <Typography color="#fff" component={Link} href="/">
            NFOs
          </Typography>
        </Stack>

        {/* Icons */}
        <Stack direction="row" gap={2} justifyContent="center" py={3}>
          <Image src={FacebookIcon} width={32} height={32} alt="Facebook" />
          <Image src={InstagramIcon} width={32} height={32} alt="Facebook" />
          <Image src={TwitterIcon} width={32} height={32} alt="Facebook" />
          <Image src={LinkedInIcon} width={32} height={32} alt="Facebook" />
        </Stack>

        {/* border */}
        {/* <div className="border-b-[1px] border-dashed"></div> */}
        <Box
          sx={{
            border: "1px dashed lightgray",
          }}
        ></Box>

        {/* logo and policy */}
        <Stack
          direction="row"
          gap={2}
          justifyContent="space-between"
          alignItems="center"
          py={3}
        >
          <Typography component="p" color="white">
            &copy;2024 Ph HealthCare. All Rights Reserved.
          </Typography>
          <Typography
            variant="h5"
            component={Link}
            href="/"
            fontWeight={600}
            color="white"
          >
            P
            <Box component="span" color="primary.main">
              H
            </Box>{" "}
            HealthCare
          </Typography>
          <Typography component="p" color="white">
            Privacy Policy! Terms & Conditions
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
