import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";

type TSpecialist = {
  id: string;
  title: string;
  icon: string;
};

const Specialist = async () => {
  const res = await fetch("http://localhost:5000/api/v1/specialties", {
    next: {
      revalidate: 30,
    },
  });
  const { data: specialists } = await res.json();
  //   console.log(specialists);

  return (
    <Container>
      <Box
        sx={{
          margin: "40px 0px",
          textAlign: "center",
        }}
      >
        <Box
          sx={{
            textAlign: "start",
          }}
        >
          <Typography variant="h4" fontWeight={600}>
            Explore Treatments Across Specialist
          </Typography>
          <Typography component="p" fontWeight={300} fontSize={18}>
            Experienced Doctors Across All Specialists
          </Typography>
        </Box>

        {/* display data in card */}
        <Stack direction="row" gap={4} mt={5}>
          {specialists?.map((item: TSpecialist) => (
            <Box
              key={item.id}
              sx={{
                flex: 1,
                width: "150px",
                backgroundColor: "rgba(245, 245, 245, 1)",
                border: "1px solid rgba(250, 250, 250, 1)",
                borderRadius: "10px",
                textAlign: "center",
                padding: "40px 10px",
                "& img": {
                  width: "50px",
                  height: "50px",
                  margin: "0 auto",
                },
                "&:hover": {
                  border: "1px solid blue",
                  padding: "40px 10px",
                  borderRadius: "10px",
                },
              }}
            >
              <Image
                src={item.icon}
                width={100}
                height={100}
                alt={item.title}
              />
              <Box>
                <Typography component="p" fontWeight={600} fontSize={18} mt={2}>
                  {item.title}
                </Typography>
              </Box>
            </Box>
          ))}
        </Stack>

        <Box mt={5}>
          <Button variant="outlined">View All</Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Specialist;
