import images from "../images";

const WISH_API_LINK = ""; // use mock api

// common

// config Confetti
const configConfetti = {
  angle: "188",
  spread: 360,
  startVelocity: "50",
  elementCount: "133",
  dragFriction: 0.12,
  duration: 3000,
  stagger: "0",
  width: "10px",
  perspective: "500px",
  colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"],
};

const weddingInfo = [
  {
    title: "LỄ THÀNH HÔN (NHÀ TRAI)",
    time: {
      date: "29/11",
      year: "2026",
      time: "11:30",
      full: "Chủ nhật, Ngày 29 Tháng 11 năm 2026",
    },
    address: "Xóm 7, xã Giao Minh, Ninh Bình",
    street: "Xóm 7, xã Giao Minh, Ninh Bình",
    phone: "",
    posision: "bottom left",
  },
  {
    title: "LỄ VU QUY (NHÀ GÁI)",
    time: {
      date: "29/11",
      year: "2026",
      time: "07:15",
      full: "Chủ nhật, Ngày 29 Tháng 11 năm 2026",
    },
    address: "Nhà văn hóa tổ dân phố Phượng Đồng, phường Chương Mỹ, Hà Nội",
    street: "Nhà văn hóa tổ dân phố Phượng Đồng, phường Chương Mỹ, Hà Nội",
    phone: "",
    posision: "bottom left",
  },
];

// November 2026
const daysInMonth = [
  {
    title: "mon",
    days: [0, 2, 9, 16, 23, 30],
  },
  {
    title: "tue",
    days: [0, 3, 10, 17, 24, 0],
  },
  {
    title: "wed",
    days: [0, 4, 11, 18, 25, 0],
  },
  {
    title: "thu",
    days: [0, 5, 12, 19, 26, 0],
  },
  {
    title: "fri",
    days: [0, 6, 13, 20, 27, 0],
  },
  {
    title: "sat",
    days: [0, 7, 14, 21, 28, 0],
  },
  {
    title: "sun",
    days: [1, 8, 15, 22, 29, 0],
  },
];

const IMG_VERSION = "?v=20261030_02";
const weddingImg = (file) =>
  `/wedding/${file.replace(/\.jpeg$/i, ".jpg")}${IMG_VERSION}`;

// invitation intro (first section)
const introSection = {
  mainImage: weddingImg("DSC01645.jpg"),
  groomFirstLetter: "L",
  brideFirstLetter: "T",
};

// profile section
const profileSection = {
  description:
    "Hôn nhân không phải là một điểm đến mà là một cuộc hành trình nơi mà hai người cùng xây dựng và phát triển",
  profiles: [
    {
      title: "groom",
      name: "Nguyễn Hải Long",
      // father: "Nguyễn Viết Đông",
      // mother: "Nguyễn Thị Miền",
      avatar: weddingImg("DSC01782.jpg"),
      images: [weddingImg("DSC01803.jpg"), weddingImg("DSC01426.jpg")],
    },
    {
      title: "bride",
      name: "Bùi Minh Tâm",
      // father: "Bùi Quang Huy",
      // mother: "Trần Thị Thanh Mỵ",
      avatar: weddingImg("DSC01356.jpg"),
      images: [weddingImg("DSC01825.jpg"), weddingImg("DSC02024.jpg")],
    },
  ],
};

// invitation section
const invitationSection = {
  imgs: [
    weddingImg("DSC01909.jpg"),
    weddingImg("DSC01588a.jpg"),
    weddingImg("DSC01645.jpg"),
  ],
  activeDay: 29,
};

// album section
const albumSection = {
  shareTheLove: [
    weddingImg("DSC02218.jpg"),
    weddingImg("DSC02171.jpg"),
  ],
  images: [
    weddingImg("DSC01356.jpg"),
    weddingImg("DSC01445.jpg"),
    weddingImg("DSC02218.jpg"),
    weddingImg("DSC01909.jpg"),
    weddingImg("DSC02004.jpg"),
    weddingImg("DSC02171.jpg"),
  ],
};

// guestbook section
const guestbookSection = {
  image: weddingImg("DSC02068.jpg"),
  time: "2026-12-31T23:59:59",
};

// gift section
const giftSection = {
  image: weddingImg("DSC01913.jpg"),
  brideBank: {
    name: "",
    bankName: "",
    qr: "",
    bankNumber: "",
  },
  groomBank: {
    name: "",
    bankName: "",
    qr: "",
    bankNumber: "",
  },
};

// timer
const timerSection = {
  weddingTime: {
    year: 2026,
    day: 29,
    month: 11,
  },
};

// final section
const finalSection = {
  images: [
    weddingImg("DSC02108.jpg"),
    weddingImg("DSC02153.jpg"),
    weddingImg("DSC02167.jpg"),
    weddingImg("DSC02171.jpg"),
  ],
};

// Album Page
const albumPage = {
  topImage: weddingImg("DSC01782.jpg"),
  bottomImage: weddingImg("DSC02218.jpg"),
  mainImage: weddingImg("DSC01445.jpg"),
};

const albumA = [
  {
    imgs: [
      { id: 1, img: weddingImg("DSC01356.jpg") },
      { id: 2, img: weddingImg("DSC01404.jpg") },
    ],
  },
  {
    imgs: [
      { id: 3, img: weddingImg("DSC01426.jpg") },
      { id: 4, img: weddingImg("DSC01445.jpg") },
    ],
  },
  {
    imgs: [
      { id: 5, img: weddingImg("DSC01588.jpg") },
      { id: 6, img: weddingImg("DSC01645.jpg") },
    ],
  },
  {
    imgs: [
      { id: 7, img: weddingImg("DSC01671.jpg") },
      { id: 8, img: weddingImg("DSC01782.jpg") },
    ],
  },
];

const albumB = [
  {
    imgs: [{ id: 9, img: weddingImg("DSC01803.jpg") }],
  },
  {
    imgs: [{ id: 10, img: weddingImg("DSC01825.jpg") }],
  },
  {
    imgs: [{ id: 11, img: weddingImg("DSC01840.jpg") }],
  },
  {
    imgs: [{ id: 12, img: weddingImg("DSC01909.jpg") }],
  },
];

const albumC = [
  {
    imgs: [{ id: 13, img: weddingImg("DSC01913.jpg") }],
  },
  {
    imgs: [{ id: 14, img: weddingImg("DSC02004.jpg") }],
  },
  {
    imgs: [{ id: 15, img: weddingImg("DSC02024.jpg") }],
  },
  {
    imgs: [{ id: 16, img: weddingImg("DSC02068.jpg") }],
  },
  {
    imgs: [{ id: 17, img: weddingImg("DSC02108.jpg") }],
  },
  {
    imgs: [{ id: 18, img: weddingImg("DSC02153.jpg") }],
  },
  {
    imgs: [{ id: 19, img: weddingImg("DSC02167.jpg") }],
  },
  {
    imgs: [{ id: 20, img: weddingImg("DSC02171.jpg") }],
  },
  {
    imgs: [{ id: 21, img: weddingImg("DSC02218.jpg") }],
  },
];

const albums = [...albumA, ...albumB, ...albumC]; // for preview

const metaData = {
  main: {
    title: "Thiệp Cưới Hải Long & Minh Tâm | Kính Mời",
    graphImage: weddingImg("DSC01645.jpg"),
  },
  wish: {
    title: "Tất cả lời chúc dành cho Hải Long & Minh Tâm",
    graphImage: weddingImg("DSC01840.jpg"),
  },
  invitation: {
    title: "Thiệp Cưới Hải Long & Minh Tâm",
    graphImage: weddingImg("DSC01445.jpg"),
  },
  album: {
    title: "Album Cưới Hải Long & Minh Tâm",
    graphImage: weddingImg("DSC01671.jpg"),
  },
};

export {
  weddingInfo,
  daysInMonth,
  albumPage,
  albumA,
  albumB,
  albumC,
  albums,
  configConfetti,
  introSection,
  profileSection,
  invitationSection,
  albumSection,
  guestbookSection,
  giftSection,
  timerSection,
  finalSection,
  WISH_API_LINK,
  metaData,
};
