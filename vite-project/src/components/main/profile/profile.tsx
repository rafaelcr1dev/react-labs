type ProfileComponentPropTypes = {
  children: React.ReactNode;
};

const ProfileComponent = ({ children }: ProfileComponentPropTypes) => {
  return (
    <div id="profile" className="flex items-center">
      {children}
    </div>
  );
};
export default ProfileComponent;
