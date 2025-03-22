import { useUser } from "./useUser";

function UserAvatar() {
  const { user } = useUser();

  const fullName = user?.user_metadata?.fullName;
  const avatar = user?.user_metadata?.avatar;

  return (
    <div className="flex ~gap-1/3 items-center text-gray-600 font-medium text-sm">
      <img
        src={avatar || "default-user.jpg"}
        alt={`Avatar of ${fullName}`}
        className="block w-10 h-10 rounded-full object-cover object-center border-2 border-gray-100"
      />
      <span className="font-semibold capitalize ~text-xs/base">{fullName}</span>
    </div>
  );
}

export default UserAvatar;
