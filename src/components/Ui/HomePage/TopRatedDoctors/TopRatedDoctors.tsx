import { Box, Typography } from "@mui/material";

const TopRatedDoctors = () => {
  return (
    <Box
      sx={{
        my: 10,
        py: 30,
        backgroundColor: "rgba(20, 20, 20, 0.1)",
        clipPath: "polygon(0 0, 100% 25%, 100% 100%, 0 75%)",
      }}
    >
      <Box textAlign="center">
        <Typography variant="h4" fontWeight={700}>
          Our Top Rated Doctors
        </Typography>
        <Typography
          component="p"
          fontWeight={400}
          fontSize={18}
          sx={{
            margin: "12px auto",
          }}
          className="max-w-[60ch]"
        >
          Access to expert physicians and surgeons, advanced technologies and
          top-quality surgery facilities right here.
        </Typography>
      </Box>
    </Box>
  );
};

export default TopRatedDoctors;
