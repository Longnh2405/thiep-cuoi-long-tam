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
    phone: "0392 859 3401",
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
    phone: "0392 859 3402",
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

// invitation intro (first section)
const introSection = {
  mainImage: "/wedding/DSC01645.JPEG",
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
      father: "Nguyễn Viết Đông",
      mother: "Nguyễn Thị Miền",
      avatar: "/wedding/DSC01825.JPEG",
      images: ["/wedding/DSC01803.JPEG", "/wedding/DSC01840.JPEG"],
    },
    {
      title: "bride",
      name: "Bùi Minh Tâm",
      father: "Bùi Quang Huy",
      mother: "Trần Thị Thanh Mỵ",
      avatar: "/wedding/DSC01645.JPEG",
      images: ["/wedding/DSC01588.JPEG", "/wedding/DSC01671.JPEG"],
    },
  ],
};

// invitation section
const invitationSection = {
  imgs: [
    "/wedding/DSC01404.JPEG",
    "/wedding/DSC01356.JPEG",
    "/wedding/DSC01426.JPEG",
  ],
  activeDay: 29,
};

// album section
const albumSection = {
  images: [
    "/wedding/DSC01356.JPEG",
    "/wedding/DSC01445.JPEG",
    "/wedding/DSC01782.JPEG",
    "/wedding/DSC01909.JPEG",
    "/wedding/DSC02004.JPEG",
    "/wedding/DSC02024.JPEG",
  ],
};

// guestbook section
const guestbookSection = {
  image: "/wedding/DSC02068.JPEG",
  time: "2026-12-31T23:59:59",
};

// gift section
const giftSection = {
  image: "/wedding/DSC01913.JPEG",
  brideBank: {
    name: "BÙI MINH TÂM",
    bankName: "TPBank",
    qr: "https://img.vietqr.io/image/TPB-00003631580-compact2.png?accountName=BUI%20MINH%20TAM",
    bankNumber: "00003631580",
  },
  groomBank: {
    name: "NGUYỄN HẢI LONG",
    bankName: "TPBank",
    qr: "https://img.vietqr.io/image/TPB-03928593401-compact2.png?accountName=NGUYEN%20HAI%20LONG",
    bankNumber: "03928593401",
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
    "/wedding/DSC02108.JPEG",
    "/wedding/DSC02153.JPEG",
    "/wedding/DSC02167.JPEG",
    "/wedding/DSC02171.JPEG",
  ],
};

// Album Page
const albumPage = {
  topImage: "/wedding/DSC01782.JPEG",
  bottomImage: "/wedding/DSC02218.JPEG",
  mainImage: "/wedding/DSC01445.JPEG",
};

const albumA = [
  {
    imgs: [
      { id: 1, img: "/wedding/DSC01356.JPEG" },
      { id: 2, img: "/wedding/DSC01404.JPEG" },
    ],
  },
  {
    imgs: [
      { id: 3, img: "/wedding/DSC01426.JPEG" },
      { id: 4, img: "/wedding/DSC01445.JPEG" },
    ],
  },
  {
    imgs: [
      { id: 5, img: "/wedding/DSC01588.JPEG" },
      { id: 6, img: "/wedding/DSC01645.JPEG" },
    ],
  },
  {
    imgs: [
      { id: 7, img: "/wedding/DSC01671.JPEG" },
      { id: 8, img: "/wedding/DSC01782.JPEG" },
    ],
  },
];

const albumB = [
  {
    imgs: [{ id: 9, img: "/wedding/DSC01803.JPEG" }],
  },
  {
    imgs: [{ id: 10, img: "/wedding/DSC01825.JPEG" }],
  },
  {
    imgs: [{ id: 11, img: "/wedding/DSC01840.JPEG" }],
  },
  {
    imgs: [{ id: 12, img: "/wedding/DSC01909.JPEG" }],
  },
];

const albumC = [
  {
    imgs: [{ id: 13, img: "/wedding/DSC01913.JPEG" }],
  },
  {
    imgs: [{ id: 14, img: "/wedding/DSC02004.JPEG" }],
  },
  {
    imgs: [{ id: 15, img: "/wedding/DSC02024.JPEG" }],
  },
  {
    imgs: [{ id: 16, img: "/wedding/DSC02068.JPEG" }],
  },
  {
    imgs: [{ id: 17, img: "/wedding/DSC02108.JPEG" }],
  },
  {
    imgs: [{ id: 18, img: "/wedding/DSC02153.JPEG" }],
  },
  {
    imgs: [{ id: 19, img: "/wedding/DSC02167.JPEG" }],
  },
  {
    imgs: [{ id: 20, img: "/wedding/DSC02171.JPEG" }],
  },
  {
    imgs: [{ id: 21, img: "/wedding/DSC02218.JPEG" }],
  },
];

const albums = [...albumA, ...albumB, ...albumC]; // for preview

const metaData = {
  main: {
    title: "Thiệp Cưới Hải Long & Minh Tâm | Kính Mời",
    graphImage: "/wedding/DSC01645.JPEG",
  },
  wish: {
    title: "Tất cả lời chúc dành cho Hải Long & Minh Tâm",
    graphImage: "/wedding/DSC01840.JPEG",
  },
  invitation: {
    title: "Thiệp Cưới Hải Long & Minh Tâm",
    graphImage: "/wedding/DSC01445.JPEG",
  },
  album: {
    title: "Album Cưới Hải Long & Minh Tâm",
    graphImage: "/wedding/DSC01671.JPEG",
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
