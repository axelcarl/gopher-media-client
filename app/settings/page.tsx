"use client";

import { Button } from "@/components/Button";
import { StateContext } from "@/contexts/StateContext";
import { setProfilePicture } from "@/utils/api";
import uploadFile from "@/utils/uploadFile";
import Image from "next/image";
import { ChangeEvent, useContext } from "react";
import { IconType } from "react-icons";
import { HiMiniUser } from "react-icons/hi2";

interface SettingProps {
  Icon: IconType;
  title: string;
  onClick: () => void;
  children: React.ReactNode;
}

export default function SettingsPage() {
  const state = useContext(StateContext);

  const onSetProfilePicture = async () => {
    const file = await uploadFile();

    if (state?.user?.ID) {
      setProfilePicture(state.user.ID, file);
    }
  };

  return (
    <div className="mt-5">
      {state.user ? (
        <Setting
          Icon={HiMiniUser}
          title="Profile Picture"
          onClick={onSetProfilePicture}
        >
          <Image
            src={state.user.picture}
            alt="Profile picture"
            width={70}
            height={70}
            className="rounded-full"
          />
        </Setting>
      ) : null}
    </div>
  );
}

function Setting({ title, onClick, children, Icon }: SettingProps) {
  return (
    <div className="flex w-screen px-4 flex-col gap-2 ">
      <div className="flex flex-col gap-1">
        <div className="font-semibold flex gap-1 items-center">
          <Icon />
          {title}
        </div>
        <hr />
      </div>
      <div className="flex w-full py-2 px-6 justify-between items-center">
        {children}
        <div>
          <Button onClick={onClick}>Change</Button>
        </div>
      </div>
    </div>
  );
}
