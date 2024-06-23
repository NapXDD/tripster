import { Tag } from "@/app/types/tag/tag";

export const googleLogo = "/thirdPartyLogo/Google.png";
export const facebookLogo = "/thirdPartyLogo/Facebook.png";
export const avatar = "/avatar/avatar.jpg";
export const wallpaper = "/wallpaper/wallpaper.webp";
export const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID!;
export const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET!;
export const FACEBOOK_CLIENT_ID = process.env.FACEBOOK_CLIENT_ID!;
export const FACEBOOK_CLIENT_SECRET = process.env.FACEBOOK_CLIENT_SECRET!;
// export const SERVER_BASE_URL = "https://bootcamp-3.onrender.com/v1/api";
export const SERVER_BASE_URL =
  "https://ce4a-2001-ee0-1b0c-b4b2-2d1e-761-eef6-7547.ngrok-free.app/v1/api";
export const BASE_URL = "localhost:3000";
export const NEXTAUTH_SECRET = process.env.NEXTAUTH_SECRET!;

export const activitiesTags: Tag[] = [
  {
    id: 1,
    name: "Du lịch biển đảo",
  },
  {
    id: 2,
    name: "Du lịch sinh thái",
  },
  {
    id: 3,
    name: "Du lịch tâm linh",
  },
  {
    id: 4,
    name: "Du lịch giải trí",
  },
  {
    id: 5,
    name: "Địa danh lịch sử",
  },
  {
    id: 6,
    name: "Vãn cảnh & Check-in",
  },
  {
    id: 7,
    name: "Du lịch văn hóa & nghệ thuật",
  },
];

export const amentitiesTags: Tag[] = [
  {
    id: 0,
    name: "Bữa sáng",
  },
  {
    id: 1,
    name: "Wifi miễn phí",
  },
  {
    id: 2,
    name: "Bãi đậu xe",
  },
  {
    id: 3,
    name: "Nước uống chào đón",
  },
  {
    id: 4,
    name: "Nhận phòng nhanh",
  },
  {
    id: 5,
    name: "Phòng tập miễn phí",
  },
  {
    id: 6,
    name: "Phòng tập",
  },
  {
    id: 7,
    name: "Vào hồ bơi miễn phí",
  },
  {
    id: 8,
    name: "Wifi cao cấp miễn phí",
  },
  {
    id: 9,
    name: "Nhận phòng trễ",
  },
  {
    id: 10,
    name: "Thuê xe máy",
  },
  {
    id: 11,
    name: "Giảm giá spa",
  },
  {
    id: 12,
    name: "Bao gồm bữa tối",
  },
  {
    id: 13,
    name: "Free mini bar",
  },
  {
    id: 14,
    name: "Trả phòng muộn",
  },
  {
    id: 15,
    name: "Thuê xe đạp",
  },
  {
    id: 16,
    name: "Bữa sáng món chay",
  },
  {
    id: 17,
    name: "Nhận phòng sớm",
  },
  {
    id: 18,
    name: "Khử trùng phòng",
  },
  {
    id: 19,
    name: "Đưa ra sân bay",
  },
  {
    id: 20,
    name: "Car rental",
  },
  {
    id: 21,
    name: "Pool",
  },
  {
    id: 22,
    name: "Free sauna access",
  },
  {
    id: 23,
    name: "Giảm giá đồ ăn uống",
  },
  {
    id: 24,
    name: "Limited housekeeping",
  },
  {
    id: 25,
    name: "Local Bữa sáng",
  },
  {
    id: 26,
    name: "Quà miễn phí",
  },
  {
    id: 27,
    name: "Meeting Room",
  },
  {
    id: 28,
    name: "Bike rental",
  },
  {
    id: 29,
    name: "Afternoon tea",
  },
  {
    id: 30,
    name: "Vegetarian Bữa sáng",
  },
  {
    id: 31,
    name: "All Inclusive",
  },
];

export const cities = [
  { value: "SGN", name: "Hồ Chí Minh" },
  { value: "HAN", name: "Hà Nội" },
  { value: "DAD", name: "Đà Nẵng" },
  { value: "PQC", name: "Phú Quốc" },
  { value: "CXR", name: "Nha Trang" },
  { value: "BMV", name: "Buôn Ma Thuột" },
  { value: "CAH", name: "Cà Mau" },
  { value: "VCA", name: "Cần Thơ" },
  { value: "VCS", name: "Côn Đảo" },
  { value: "DLI", name: "Đà Lạt" },
  { value: "DIN", name: "Điện Biên" },
  { value: "VDH", name: "Đồng Hới" },
  { value: "HPH", name: "Hải Phòng" },
  { value: "HUI", name: "Huế" },
  { value: "PXU", name: "Pleiku" },
  { value: "UIH", name: "Quy Nhơn" },
  { value: "VKG", name: "Rạch Giá" },
  { value: "THD", name: "Thanh Hóa" },
  { value: "TBB", name: "Tuy Hòa" },
  { value: "VDO", name: "Quảng Ninh" },
  { value: "VII", name: "Vinh" },
  { value: "VCL", name: "Quảng Nam" },
];
