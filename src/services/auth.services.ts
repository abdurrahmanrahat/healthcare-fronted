import { authKey } from "@/constants/authkey";
import { decodedToken } from "@/utils/jwt";
import { getFromLocalStorage, setToLocalStorage } from "@/utils/local-storage";

// store user info to local storage
export const storeUserInfo = ({ accessToken }: { accessToken: string }) => {
  return setToLocalStorage(authKey, accessToken);
};

// get user info from local storage
export const getUserInfo = () => {
  const authToken = getFromLocalStorage(authKey);

  if (authToken) {
    const decodedData: any = decodedToken(authToken);
    return {
      ...decodedData,
      role: decodedData?.role.toLowerCase(),
    };
  }
};

export const isLoggedIn = () => {
  const authToken = getFromLocalStorage(authKey);

  if (authKey) {
    return !!authToken;
  }
};
