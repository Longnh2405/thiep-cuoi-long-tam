import styles from "./guestbook.module.scss";
import classNames from "classnames/bind";
import { useInView } from "framer-motion";

import { useEffect, useRef, useState } from "react";
import Gift from "../gift";
import Sad from "@/app/icons/sad";
import Angry from "@/app/icons/angry";
import Love from "@/app/icons/love";

import Confetti from "react-dom-confetti";
import { useDebounce } from "@/app/helper";
import validation from "@/app/helper/validation";
import { useRouter } from "next/navigation";
import {
  configConfetti,
  guestbookSection,
  WISH_API_LINK,
} from "@/app/configs/ui";
const cx = classNames.bind(styles);

function GuestBook({ fName, isGai = false }) {
  const ref = useRef();
  const viewRef = useRef();
  const isInView = useInView(ref, { once: true });
  const isInViewBox = useInView(viewRef, { once: false });
  const [isOpenGift, setIsOpenGift] = useState(false);
  const router = useRouter();

  const [name, setName] = useState("");
  const [wish, setWish] = useState("");
  const [willArrive, setWillArrive] = useState(null);

  const [active, setActive] = useState(false);

  const handleChangeRadio = (type) => {
    setWillArrive(type);
  };

  const handleSendMessage = useDebounce(() => {
    const now = new Date();
    const last = new Date(guestbookSection.time);

    if (!isNaN(last.getTime()) && now.getTime() > last.getTime()) {
      alert("Đã hết thời gian gửi lời chúc mừng!");
      return;
    }

    const isValid = validation({ name, wish, isAttend: willArrive });
    if (!isValid) {
      return;
    }

    const newWish = {
      name: name.trim(),
      wish: wish.trim(),
      isAttend: willArrive,
      createdAt: Math.floor(Date.now() / 1000),
      id: Date.now().toString(),
    };

    const saveLocalWish = () => {
      try {
        const stored = JSON.parse(
          localStorage.getItem("wedding_wishes") || "[]"
        );
        stored.unshift(newWish);
        localStorage.setItem("wedding_wishes", JSON.stringify(stored));
      } catch (e) {
        console.error(e);
      }
      setName("");
      setWish("");
      setWillArrive(null);
      setActive(true);
      alert("Cảm ơn bạn đã gửi lời chúc mừng tới cô dâu & chú rể!");
    };

    if (WISH_API_LINK) {
      fetch(WISH_API_LINK, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newWish),
      })
        .then((response) => response.json())
        .then(() => {
          saveLocalWish();
        })
        .catch(() => {
          saveLocalWish();
        });
    } else {
      saveLocalWish();
    }
  }, 500);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (active) {
        setActive(false);
      }
    }, 3000);

    return () => {
      clearTimeout(timeout);
    };
  }, [active]);

  const renderIcon = (type) => {
    return type !== null && type === "yes" ? (
      <Love className={cx("emoij")} />
    ) : type === "no" ? (
      <Sad className={cx("emoij")} />
    ) : type === "or" ? (
      <Angry className={cx("emoij")} />
    ) : (
      ""
    );
  };

  return (
    <div className={cx("wrapper")}>
      <div className={cx("header")} ref={viewRef}>
        <div className={cx("background")}>
          <h2 className={cx("title")}>Sổ lưu bút</h2>
        </div>
        <div className={cx("img-wrap")}>
          <div
            className={cx("img")}
            style={{
              backgroundImage: `url(${guestbookSection.image})`,
              transform: isInViewBox
                ? "translateX(0) scale(1)"
                : "translateX(-40px) scale(0.95)",
              opacity: isInViewBox ? 1 : 0,
              transition: "all 0.8s cubic-bezier(0.17, 0.55, 0.55, 1)",
            }}
          />
          <div className={cx("frame")} />
        </div>
      </div>
      <div className={cx("container")}>
        <input
          type="text"
          className={cx("iname")}
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Tên hoặc nickname của bạn"
        />

        <textarea
          className={cx("iwish")}
          placeholder="Viết lời chúc ở đây ..."
          value={wish}
          onChange={(e) => setWish(e.target.value)}
        />
        <div className={cx("radio-box")}>
          <input
            className={cx("radio")}
            type="radio"
            id="yes"
            name="will_arrive"
            onChange={(e) => handleChangeRadio("yes")}
            value="Sẽ đến dự tiệc"
          />
          <label htmlFor="yes">Sẽ đến dự tiệc</label>
          <input
            className={cx("radio")}
            type="radio"
            id="no"
            name="will_arrive"
            value="Không thể đến dự"
            onChange={(e) => handleChangeRadio("no")}
          />
          <label htmlFor="no">Không thể đến dự</label>
          <input
            className={cx("radio")}
            type="radio"
            name="will_arrive"
            id="or"
            value="Không biết"
            onChange={(e) => handleChangeRadio("or")}
          />
          <label htmlFor="or">Không biết</label>
        </div>
        <p className={cx("help-text")}>
          Nếu không thể gửi lời nhắn bằng trình duyệt trong{" "}
          <strong>Messeger</strong> , hãy thử mở trình duyệt bên ngoài (
          <strong>Chome, Safia,...</strong>){" "}
        </p>

        <button
          ref={ref}
          className={cx("btn")}
          style={{
            transform: isInView ? "translateY(0)" : "translateY(80px)",
            opacity: isInView ? 1 : 0,
            transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) ",
          }}
          onClick={handleSendMessage}
        >
          {renderIcon(willArrive)}
          Gửi lời nhắn
          {renderIcon(willArrive)}
        </button>
        {/* <button
          className={cx("btn")}
          style={{
            transform: isInView ? "translateY(0)" : "translateY(80px)",
            opacity: isInView ? 1 : 0,
            transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s",
          }}
          onClick={() => setIsOpenGift(true)}
        >
          Mừng cưới
        </button> */}
        <button
          className={cx("btn")}
          style={{
            transform: isInView ? "translateY(0)" : "translateY(80px)",
            opacity: isInView ? 1 : 0,
            transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s",
          }}
          onClick={() => {
            router.push(`/wish?name=${fName}`);
          }}
        >
          Xem lời chúc
        </button>
      </div>
      <Confetti active={active} config={configConfetti} />

      {/* {isOpenGift && (
        <div className={cx("overlay")}> */}
      <Gift onClose={() => setIsOpenGift(false)} isGai={isGai} />
      {/* </div>
      )} */}
    </div>
  );
}

export default GuestBook;
