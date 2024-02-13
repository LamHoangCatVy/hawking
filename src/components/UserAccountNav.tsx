"use client";

import React from "react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "./ui/dropdown-menu";
// import { Button } from "./ui/button";
// import { signOut } from "next-auth/react";
import { LogOut } from "lucide-react";
import UserAvatar from "./UserAvatar";
// import UserAvatar from "./UserAvatar";

type Props = {
  user: Object;
};

const UserAccountNav = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <UserAvatar />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <div className="flex items-center justify-start gap-2 p-2">
          <div className="flex flex-col space-y-1 leading-none">
            <p className="font-medium">Username</p>
            <p className="w-[200px] truncate text-sm text-secondary-foreground">example@gmail.com</p>
          </div>
        </div>

        <DropdownMenuSeparator />
        <DropdownMenuItem
          //   onSelect={() => {
          //     signOut();
          //   }}
          className="text-red-600 cursor-pointer">
          Sign out
          <LogOut className="w-4 h-4 ml-2" />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserAccountNav;
