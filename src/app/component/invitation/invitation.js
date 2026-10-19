"use client";
import styles from "./invitation.module.scss";
import classNames from "classnames/bind";
import Days from "./days/days";
import Infomation from "./infomation";
import { weddingInfo, invitationSection } from "@/app/configs/ui";
import { useRef } from "react";
import { useInView } from "framer-motion";

const cx = classNames.bind(styles);

function Invitation({ isGai = false }) {
  const imgs = invitationSection.imgs || [];
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const list = isGai ? [...weddingInfo].reverse() : weddingInfo;
  return (
    <div className={cx("wrapper")}>
      <h2 className={cx("title")}>Invitation</h2>
      <p className={cx("des")}>Đến dự đám cưới của chúng mình</p>
      <div className={cx("img-list")} ref={ref}>
        <div
          className={cx("img-wrap")}
          style={{
            transform: isInView ? "translateX(0)" : "translateX(80px)",
            opacity: isInView ? 1 : 0,
            transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
        >
          <img className={cx("img")} src={imgs[1]} alt="wedding" />
        </div>
        <div className={cx("img-wrap", "center-img")}>
          <img className={cx("img")} src={imgs[0]} alt="wedding" />
        </div>
        <div
          className={cx("img-wrap")}
          style={{
            transform: isInView ? "translateX(0)" : "translateX(-80px)",
            opacity: isInView ? 1 : 0,
            transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s  ",
          }}
        >
          <img className={cx("img")} src={imgs[2]} alt="wedding" />
        </div>
      </div>
      <Days title="Tháng 11" activeDay={invitationSection.activeDay} />
      {list.map((wedInfo, index) => (
        <Infomation
          key={index}
          img={wedInfo.img}
          title={wedInfo.title}
          date={wedInfo.date}
          time={wedInfo.time}
          address={wedInfo.address}
          street={wedInfo.street}
          phone={wedInfo.phone}
          posision={wedInfo.posision}
        />
      ))}
    </div>
  );
}

export default Invitation;
