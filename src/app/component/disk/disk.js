"use client";
import styles from "./disk.module.scss";
import classNames from "classnames/bind";
import { useEffect, useRef, useContext } from "react";
import { MultiContext } from "@/app/context";

const cx = classNames.bind(styles);

function Disk() {
  const ref = useRef(null);
  const context = useContext(MultiContext);
  const state = context?.state || { isOpenMusic: false };
  const dispatch = context?.dispatch;
  const { isOpenMusic } = state;

  const handleOpenAudio = () => {
    if (!ref.current || !dispatch) return;
    if (isOpenMusic === false) {
      dispatch({ type: "TURN_ON" });
      const p = ref.current.play();
      if (p !== undefined) {
        p.catch((err) => console.log("Audio play error:", err));
      }
    } else {
      dispatch({ type: "TURN_OFF" });
      ref.current.pause();
    }
  };

  useEffect(() => {
    if (ref.current && isOpenMusic && ref.current.paused) {
      const p = ref.current.play();
      if (p !== undefined) {
        p.catch((err) => console.log("Audio autoplay prevented by browser:", err));
      }
    } else if (ref.current && !isOpenMusic && !ref.current.paused) {
      ref.current.pause();
    }
  }, [isOpenMusic]);

  return (
    <div
      className={cx("music", isOpenMusic && "rotate")}
      onClick={handleOpenAudio}
      title="Bật/Tắt nhạc"
    >
      <audio src="/sound.mp3" ref={ref} preload="auto" loop />
    </div>
  );
}

export default Disk;
