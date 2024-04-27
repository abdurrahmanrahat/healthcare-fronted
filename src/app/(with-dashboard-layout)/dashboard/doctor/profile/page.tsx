"use client";

import { useGetMYProfileQuery } from "@/redux/api/myProfile";

const DoctorProfile = () => {
  const { data, isLoading } = useGetMYProfileQuery({});
  console.log(data);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return <div>DoctorProfile</div>;
};

export default DoctorProfile;
