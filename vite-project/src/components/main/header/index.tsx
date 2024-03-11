import { useContext } from "react";
import LogoComponent from "../logo";
import { Profile } from "../profile";
import { UserContext } from "@/contexts/user-context";

const Header = () => {
  const { name, email, avatar } = useContext(UserContext);

  return (
    <header>
      <div className="flex items-center justify-between px-2">
        <LogoComponent />

        <Profile.Root>
          <Profile.Avatar avatar={avatar} />
          <Profile.Info name={name} email={email} />
        </Profile.Root>
      </div>
    </header>
  );
};
export default Header;
