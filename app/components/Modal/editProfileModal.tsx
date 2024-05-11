import Image from "next/image";
import OverlayModal from "./overlayModal";
import { avatar } from "@/utils/importer";
import { EditOutlined } from "@ant-design/icons";
import ProfileEditForm from "../form/profileEditForm/profileEditForm";

export default function EditProfileModal() {
  return (
    <OverlayModal title="Edit profile">
      <div className="flex flex-col justify-center gap-2">
        <div className="w-full flex justify-center items-center">
          <div className="flex aspect-square rounded-full justify-center w-[30%] relative">
            <Image
              src={avatar}
              alt="avatar"
              width={200}
              height={200}
              style={{
                width: "100%",
                objectFit: "cover",
                maxWidth: "none",
                borderRadius: "50%",
              }}
            />
            <button
              className="bgRed w-[30%] h-[30%] absolute rounded-full
           bottom-0 right-0 text-white flex justify-center 
           items-center hover:bgRedHover"
            >
              <EditOutlined />
            </button>
          </div>
        </div>
        <ProfileEditForm />
      </div>
    </OverlayModal>
  );
}
