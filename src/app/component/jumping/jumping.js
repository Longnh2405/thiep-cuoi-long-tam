"use client";
import { useEffect, useRef, useState } from "react";
import classNames from "classnames/bind";
import styles from "./jumping.module.scss";

const items = ["alcohol", "cigarette", "punch", "at"];
const cx = classNames.bind(styles);

const random = () => {
  return Math.floor(Math.random() * 4);
};

const LEVEL_CONFIG = {
  10: { speed: 1.6, target: 10, jumpDuration: 450 },
  20: { speed: 1.35, target: 12, jumpDuration: 450 },
  50: { speed: 1.1, target: 15, jumpDuration: 420 },
  80: { speed: 0.9, target: 18, jumpDuration: 390 },
  100: { speed: 0.75, target: 20, jumpDuration: 360 },
};

function Jumping({ className, dif = 20 }) {
  const groomRef = useRef();
  const cactusRef = useRef();
  const brideRef = useRef();
  const hasPassedRef = useRef(false);

  const config = LEVEL_CONFIG[dif] || LEVEL_CONFIG[20];
  const targetScore = config.target;
  const obsSpeed = config.speed;
  const jumpDuration = config.jumpDuration;

  const [item, setItem] = useState(items[0]);
  const [isJumping, setIsJumping] = useState(false);
  const [score, setScore] = useState(0);
  const [isStart, setIsStart] = useState(false);
  const [isDie, setIsDie] = useState(false);
  const [isWin, setIsWin] = useState(false);

  const jump = (e) => {
    if (e && (e.code === "Space" || e.key === " " || e.key === "ArrowUp")) {
      e.preventDefault();
    }
    if (!!groomRef.current && groomRef.current.classList.length === 1) {
      setIsJumping(true);
      setTimeout(function () {
        setIsJumping(false);
      }, jumpDuration);
    }
  };

  useEffect(() => {
    let isAlive;
    if (isStart && !isWin) {
      isAlive = setInterval(function () {
        if (!groomRef.current || !cactusRef.current) return;

        // get current dino Y position
        const groomTop = parseInt(
          getComputedStyle(groomRef.current).getPropertyValue("top")
        );

        // get current cactus X position
        const cactusLeft = parseInt(
          getComputedStyle(cactusRef.current).getPropertyValue("left")
        );

        // detect collision: forgiving hitbox
        if (cactusLeft < 55 && cactusLeft > 10 && groomTop >= 270) {
          setIsStart(false);
          setIsDie(true);
        } else if (cactusLeft <= -25) {
          if (!hasPassedRef.current) {
            hasPassedRef.current = true;
            setScore((pre) => {
              const nextScore = pre + 1;
              if (nextScore >= targetScore) {
                setIsWin(true);
                return targetScore;
              }
              return nextScore;
            });
            setItem(items[random()]);
          }
        } else if (cactusLeft > 300) {
          hasPassedRef.current = false;
        }
      }, 10);
    } else if (isStart && isWin) {
      isAlive = setInterval(() => {
        if (!groomRef.current || !brideRef.current) return;

        const groomLeft = parseInt(
          getComputedStyle(groomRef.current).getPropertyValue("left")
        );

        const brideLeft = parseInt(
          getComputedStyle(brideRef.current).getPropertyValue("left")
        );

        if (groomLeft >= 0 && brideLeft <= 30) {
          setIsStart(false);
        }
      }, 10);
    }

    return () => clearInterval(isAlive);
  }, [isStart, isWin, targetScore]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === "Space" || e.key === " " || e.key === "ArrowUp") {
        if (isStart) {
          e.preventDefault();
        }
        jump(e);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isStart, jumpDuration]);

  return (
    <div
      className={cx("game", className)}
      onClick={jump}
      onTouchStart={jump}
    >
      {isStart ? (
        <div className={cx("gaming-ui")}>
          <span className={cx("score")}>
            Điểm: {score} / {targetScore}
          </span>
          <div
            className={cx("groom", isJumping && "jump")}
            ref={groomRef}
            style={{ animationDuration: `${jumpDuration}ms` }}
          ></div>
          {!isWin && (
            <div
              className={cx("obs", item)}
              ref={cactusRef}
              style={{ animationDuration: `${obsSpeed}s` }}
            ></div>
          )}
          {isWin && <div className={cx("bride")} ref={brideRef}></div>}
        </div>
      ) : (
        <div
          className={cx("finshish-ui", isDie && "die-ui", isWin && "win-ui")}
        >
          <p className={cx("title")}>
            {isDie ? "Game over" : isWin ? "You Win!" : "Đi tìm cô dâu"}
          </p>

          <p
            className={cx("start-button")}
            onClick={() => {
              setIsDie(false);
              setIsStart(true);
              setScore(0);
              setIsWin(false);
              hasPassedRef.current = false;
            }}
          >
            {isDie ? "Chơi lại" : isWin ? "Chơi tiếp" : "Start"}
          </p>
        </div>
      )}
    </div>
  );
}

export default Jumping;
