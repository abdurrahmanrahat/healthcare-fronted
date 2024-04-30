import { authKey } from "@/constants/authkey";
import { deleteCookies } from "@/services/actions/deleteCookies";
import { getUserInfo, removeUser } from "@/services/auth.services";
import { Button } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";

const AuthButton = () => {
  const router = useRouter();

  const userInfo = getUserInfo();
  // console.log(isLoggedIn());

  // logout user
  const handleLogout = () => {
    removeUser();
    deleteCookies([authKey, "refreshToken"]);
    router.push("/");
    router.refresh();
  };

  return (
    <>
      {userInfo?.userId ? (
        <Button color="error" onClick={handleLogout}>
          Logout
        </Button>
      ) : (
        <Button component={Link} href="/login">
          Login
        </Button>
      )}
    </>
  );
};

export default AuthButton;
