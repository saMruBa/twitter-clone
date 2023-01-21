import React from "react";

function UserProfile({ imageSrc, fullname, username }) {
  return (
    <div className="flex gap-3 text-sm items-center">
      <img src={imageSrc} className="w-10 h-10 object-cover rounded-full" />
      <div>
        <p className="font-semibold capitalize">{fullname}</p>
        <p className="text-gray-500 text-xs">@{username}</p>
      </div>
    </div>
  );
}

export default UserProfile;
