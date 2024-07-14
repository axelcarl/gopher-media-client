"use client";

import {
  StateAction,
  StateContext,
  StateDispatchContext,
} from "@/contexts/StateContext";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { useRouter } from "next/navigation";
import { MouseEventHandler, useContext } from "react";
import { HiHome, HiLogin, HiLogout, HiMenu } from "react-icons/hi";
import { HiCog } from "react-icons/hi2";

export default function Dropdown() {
  const router = useRouter();
  const state = useContext(StateContext);
  const dispatch = useContext(StateDispatchContext);

  const logout = async () => {
    dispatch({ type: StateAction.SET_USER, payload: null });
    router.push("/login");
  };

  const loggedInItems = (
    <>
      <DropdownItem
        text="Home"
        onClick={() => router.push("/")}
        icon={<HiHome />}
      />
      <DropdownItem
        text="Settings"
        onClick={() => router.push("/settings")}
        icon={<HiCog />}
      />
      <DropdownItem
        text="Logout"
        onClick={() => logout()}
        icon={<HiLogout />}
      />
    </>
  );

  const loggedOutItems = (
    <DropdownItem
      text="Login"
      onClick={() => router.push("/login")}
      icon={<HiLogin />}
    />
  );

  return (
    <Menu>
      <MenuButton>
        <HiMenu />
      </MenuButton>
      <MenuItems anchor="bottom end">
        <div className="bg-white h-full w-full border rounded border-slate-100">
          {state.user ? loggedInItems : loggedOutItems}
        </div>
      </MenuItems>
    </Menu>
  );
}

function DropdownItem(props: {
  text: string;
  onClick: MouseEventHandler;
  icon: React.ReactNode;
}) {
  return (
    <MenuItem>
      <div
        className="flex items-center gap-2 w-full h-full cursor-pointer border-b-slate-100 border-b p-3
            hover:bg-slate-50"
        onClick={props.onClick}
      >
        <span className="text-indigo-500">{props.icon}</span> {props.text}
      </div>
    </MenuItem>
  );
}
