import { UserContext } from "@/contexts/user-context";
import { Outlet } from "react-router-dom";

import { userData } from "@/mocks";
import Header from "@/components/main/header";

const Layout = () => {
  return (
    <UserContext.Provider value={userData}>
      <Header />
      <Outlet />
    </UserContext.Provider>
  );
};

export default Layout;
