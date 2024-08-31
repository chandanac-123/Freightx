import { headers } from "next/headers";

export const getPathname = () => {
  const headersList = headers();
  const pathname = headersList.get("x-current-path");

  return { pathname };
};
