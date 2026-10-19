import styles from "./profile.module.scss";
import classNames from "classnames/bind";
import { useRef } from "react";
import { useInView } from "framer-motion";

const cx = classNames.bind(styles);

function Chacracter({ data = {} }) {
  const ref = useRef(null);

  const isInView = useInView(ref, { once: false });
  return (
    <div className={cx("profile")} key={data.title} ref={ref}>
      <div className={cx("large-img-box")}>
        <img className={cx("large-img")} src={data.avatar} />
      </div>
      <div className={cx("pro-des")}>
        <h3
          className={cx("title")}
          style={{
            transform: isInView ? "none" : "translateY(60px)",
            opacity: isInView ? 1 : 0,
            transition: "all 1.5s cubic-bezier(0.17, 0.55, 0.55, 1)",
          }}
        >
          {data.title === "groom" ? "Chú rể" : "Cô dâu"}
        </h3>
        <p
          className={cx("name")}
          style={{
            transform: isInView ? "none" : "translateY(60px)",
            opacity: isInView ? 1 : 0,
            transition: "all 1.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s",
          }}
        >
          {data.name}
        </p>
        {(data.father || data.mother) && (
          <div
            className={cx("parents-info")}
            style={{
              fontSize: "1.4rem",
              marginTop: "6px",
              lineHeight: "1.6",
              color: "#666",
              transform: isInView ? "none" : "translateY(60px)",
              opacity: isInView ? 1 : 0,
              transition: "all 1.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.4s",
            }}
          >
            {data.father && <p>Bố: <strong>{data.father}</strong></p>}
            {data.mother && <p>Mẹ: <strong>{data.mother}</strong></p>}
          </div>
        )}
        <div
          className={cx("imgs")}
          style={{
            transform: isInView ? "none" : "scale(0.96)",
            opacity: isInView ? 1 : 0,
            transition: "all 1.2s cubic-bezier(0.17, 0.55, 0.55, 1)",
          }}
        >
          {data.images.map((img, index) => {
            return (
              <div className={cx("small-img-box")} key={index}>
                <img className={cx("small-img")} key={index} src={img} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Chacracter;
