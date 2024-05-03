import DashedLine from "@/components/Ui/Doctor/DashedLine/DashedLine";
import DoctorCard from "@/components/Ui/Doctor/DoctorCard/DoctorCard";
import ScrollCategory from "@/components/Ui/Doctor/ScrollCategory/ScrollCategory";
import { TDoctor } from "@/types";
import { Box, Container } from "@mui/material";

interface PropType {
  searchParams: { specialties: string };
}

const Doctors = async ({ searchParams }: PropType) => {
  let res;

  if (searchParams.specialties) {
    res = await fetch(
      `http://localhost:5000/api/v1/doctor?specialties=${searchParams.specialties}`
    );
  } else {
    res = await fetch("http://localhost:5000/api/v1/doctor");
  }

  const { data } = await res.json();

  // console.log(data);

  return (
    <Container>
      <DashedLine />

      <ScrollCategory specialties={searchParams.specialties} />

      <Box sx={{ mt: 4, mb: 6, p: 3, bgcolor: "secondary.light" }}>
        {data?.map((doctor: TDoctor, index: number) => (
          <Box key={doctor.id}>
            <DoctorCard doctor={doctor} />

            {index === data.length - 1 ? null : <DashedLine />}
          </Box>
        ))}
        {data.length === 0 && <Box>No Doctor Found With This Specialty</Box>}
      </Box>
    </Container>
  );
};

export default Doctors;
