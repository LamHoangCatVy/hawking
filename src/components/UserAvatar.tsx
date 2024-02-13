import React from "react";
import { Avatar } from "./ui/avatar";
import Image from 'next/image'
type Props = {};

const UserAvatar = (props: Props) => {
  return (
    <Avatar>
      <Image fill src="https://static-00.iconduck.com/assets.00/google-icon-2048x2048-czn3g8x8.png" alt="user avatar" />
    </Avatar>
  );
};

export default UserAvatar;
