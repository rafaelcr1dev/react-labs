type ProfileInfoComponentPropTypes = {
  name: string;
  email: string;
};

const ProfileInfoComponent = ({
  name,
  email,
}: ProfileInfoComponentPropTypes) => {
  return (
    <div id="profileInfo" className="ml-4">
      <p className="text-sm font-medium leading-none">{name}</p>
      <p className="text-sm text-muted-foreground">{email}</p>
    </div>
  );
};
export default ProfileInfoComponent;
