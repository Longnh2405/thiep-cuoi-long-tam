"use client";
import classNames from "classnames/bind";
import styles from "./home.module.scss";
import Invitation from "@/app/component/invitation";
import { useSearchParams } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import Profile from "@/app/component/profile";
import GuestBook from "@/app/component/guestbook";
import Album from "@/app/component/album";
import Intro from "@/app/component/intro/intro";
import { animateScroll as scroll } from "react-scroll";
import PaperText from "@/app/component/paperText/paperText";
import Footer from "@/app/component/footer";
import Final from "@/app/component/final";
import Game from "@/app/component/game";
import { MultiContext } from "@/app/context";
import Disk from "@/app/component/disk";
import Timer from "@/app/component/timer";

const cx = classNames.bind(styles);
export default function Home() {
  const searchParams = useSearchParams();
  const name = searchParams.get("name") || "You";
  const initialSide = (
    searchParams.get("type") ||
    searchParams.get("side") ||
    "trai"
  ).toLowerCase();
  const [isGai, setIsGai] = useState(
    initialSide === "gai" || initialSide === "bride" || initialSide === "nhagai"
  );

  const [isOpen, setIsOpen] = useState(searchParams.get("open") === "1");

  const { dispatch } = useContext(MultiContext);

  useEffect(() => {
    const side = (
      searchParams.get("type") ||
      searchParams.get("side") ||
      ""
    ).toLowerCase();
    if (side === "gai" || side === "bride" || side === "nhagai") {
      setIsGai(true);
    } else if (side === "trai" || side === "groom" || side === "nhatrai") {
      setIsGai(false);
    }
  }, [searchParams]);

  useEffect(() => {
    if (searchParams.get("fbclid")) {
      window.location.href = window.location.origin + "/" + "?name=" + name;
    }
  }, [searchParams]);

  const handleOpenInvitation = () => {
    setIsOpen(true);
    if (dispatch) {
      try {
        dispatch({ type: "TURN_ON" });
      } catch (e) {
        console.error(e);
      }
    }
  };

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        try {
          if (typeof window !== "undefined") {
            window.scrollTo({
              top: window.innerHeight,
              behavior: "smooth",
            });
          }
        } catch (e) {
          console.error(e);
        }
      }, 100);
    }
  }, [isOpen]);
  return (
    <div className={cx("wrapper")}>
      <Disk />
      <Intro
        handleOpen={handleOpenInvitation}
        name={name}
        isGai={isGai}
        onToggleSide={setIsGai}
      />
      {isOpen && (
        <>
          <Profile isGai={isGai} />
          <PaperText>
            “Tình cảm ấy, chẳng cần cứ phải hét to lên cho cả thế giới biết, chỉ
            cần thủ thỉ cho một người là cả thế giới của mình nghe là đủ rồi.
            Điều quan trọng nhất là đến cuối đường vẫn còn ở bên nhau, đi cạnh
            nhau, nắm tay nhau, rung động vì nhau. Cứ thế thôi là đủ rồi!”
          </PaperText>
          <Invitation isGai={isGai} />
          <Album name={name}></Album>
          <GuestBook fName={name} isGai={isGai} />
          <Game />
          <Timer />
          <Final />
          <Footer />
        </>
      )}
    </div>
  );
}
