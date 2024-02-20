import React from "react";
import { Avatar } from "./ui/avatar";
import Image from "next/image";
import { User } from "next-auth";
import { AvatarFallback } from "@radix-ui/react-avatar";
type Props = {
  user: User;
};

const UserAvatar = ({ user }: Props) => {
  return (
    <Avatar>
      {user.image ? (
        <div className="relative w-full h-full aspect-square">
          <Image fill src={user.image} alt="user avatar" referrerPolicy="no-referrer" />
        </div>
      ) : (
        <AvatarFallback>
          <span className="sr-only">{user?.name}</span>
        </AvatarFallback>
      )}
    </Avatar>
  );
};

export default UserAvatar;
