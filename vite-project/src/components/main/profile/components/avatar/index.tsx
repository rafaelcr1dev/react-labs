import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type ProfileAvatarPropTypes = {
  avatar: string;
};

const ProfileAvatarComponent = ({ avatar }: ProfileAvatarPropTypes) => {
  return (
    <div
      id="profileAvatar"
      className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full"
    >
      <Avatar>
        <AvatarImage src={avatar} />
        <AvatarFallback>AV</AvatarFallback>
      </Avatar>
    </div>
  );
};
export default ProfileAvatarComponent;
