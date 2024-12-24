import { cookies } from "next/headers";

const getTokenConfig = async () => {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get("token");

  const config: RequestInit = {
    headers: {
      Authorization: accessToken ? `Bearer ${accessToken}` : "",
    },
  };

  return config;
};

export default getTokenConfig;
