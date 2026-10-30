"use client";
import classNames from "classnames/bind";
import styles from "./intro.module.scss";
import { motion } from "framer-motion";
import { useRef } from "react";
import { introSection, weddingInfo } from "@/app/configs/ui";
const cx = classNames.bind(styles);

function Intro({ handleOpen, name = "Bạn", isGai = false, onToggleSide }) {
  const ref = useRef(null);
  const currentWedInfo = isGai ? weddingInfo[1] : weddingInfo[0];
  const topLetter = isGai
    ? introSection.brideFirstLetter
    : introSection.groomFirstLetter;
  const bottomLetter = isGai
    ? introSection.groomFirstLetter
    : introSection.brideFirstLetter;

  return (
    <div className={cx("wrapper")} ref={ref}>
      {onToggleSide && (
        <div className={cx("side-toggle-container")}>
          <button
            type="button"
            className={cx("side-btn", !isGai && "active-side")}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              onToggleSide(false);
            }}
          >
            Thiệp Nhà Trai
          </button>
          <button
            type="button"
            className={cx("side-btn", isGai && "active-side")}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              onToggleSide(true);
            }}
          >
            Thiệp Nhà Gái
          </button>
        </div>
      )}
      <div className={cx("block-wrapper")}>
        <div className={cx("block")}>
          <div className={cx("left")}>
            <p className={cx("header-text")}>SAVE THE DATE</p>

            <div className={cx("img-box")}>
              <img
                className={cx("img")}
                src={introSection.mainImage}
                alt="wedding-cover"
                fetchPriority="high"
                decoding="async"
              />
            </div>
          </div>
          <div className={cx("right")}>
            <div className={cx("text-box")}>
              <p className={cx("date")}>{currentWedInfo?.time?.full}</p>
              <div className={cx("name-box")}>
                <h3 className={cx("name", "name-top")}>
                  {topLetter}
                </h3>
                <span className={cx("and")}></span>
                <h3 className={cx("name", "name-bottom")}>
                  {bottomLetter}
                </h3>
              </div>

              <div className={cx("dear-box")}>
                <p className={cx("dear")}>Thân mời : </p>
                <span className={cx("dear-name")}>{name}</span>
              </div>
            </div>

            <motion.button
              type="button"
              className={cx("btn")}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => {
                e.preventDefault();
                if (handleOpen) handleOpen();
              }}
            >
              <span className={cx("heart-icon")}>
                <img
                  className={cx("icon")}
                  src="/images/invite.png"
                  alt="invite"
                />
              </span>
              Mở thiệp
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Intro;
