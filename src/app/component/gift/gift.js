import { giftSection, configConfetti } from "@/app/configs/ui";
import styles from "./gift.module.scss";
import classNames from "classnames/bind";
import { useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import { useDebounce } from "@/app/helper";
import Confetti from "react-dom-confetti";

const cx = classNames.bind(styles);

const isBankValid = (bank) => {
  if (!bank || typeof bank !== "object") return false;
  const { name = "", bankName = "", qr = "", bankNumber = "" } = bank;
  return Boolean(
    (name && String(name).trim()) ||
      (bankName && String(bankName).trim()) ||
      (qr && String(qr).trim()) ||
      (bankNumber && String(bankNumber).trim())
  );
};

function Gift({ onClose, hasNav = true, isGai = false }) {
  const viewRef = useRef();
  const isInView = useInView(viewRef, { once: true });
  const [isCopied, setIsCopied] = useState(false);

  const brideBank = giftSection?.brideBank;
  const groomBank = giftSection?.groomBank;

  const hasBride = isBankValid(brideBank);
  const hasGroom = isBankValid(groomBank);

  const getDefaultNav = () => {
    if (hasBride && !hasGroom) return "bride";
    if (!hasBride && hasGroom) return "groom";
    return isGai ? "bride" : "groom";
  };

  const [nav, setNav] = useState(getDefaultNav);

  useEffect(() => {
    if (hasBride && !hasGroom) {
      setNav("bride");
    } else if (!hasBride && hasGroom) {
      setNav("groom");
    } else {
      setNav(isGai ? "bride" : "groom");
    }
  }, [isGai, hasBride, hasGroom]);

  const handleCopy = useDebounce(() => {
    setIsCopied(true);
  }, 1000);

  useEffect(() => {
    let timeout;
    if (isCopied) {
      timeout = setTimeout(() => {
        setIsCopied(false);
      }, 1000);
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [isCopied]);

  // If neither bank has data, do not display the gift section at all
  if (!hasBride && !hasGroom) {
    return null;
  }

  const currentBank = nav === "bride" ? brideBank : groomBank;
  const showNav = hasNav && hasBride && hasGroom;
  const hasBankNumber = Boolean(
    currentBank?.bankNumber && String(currentBank.bankNumber).trim()
  );
  const hasQr = Boolean(currentBank?.qr && String(currentBank.qr).trim());
  const hasName = Boolean(currentBank?.name && String(currentBank.name).trim());
  const hasBankName = Boolean(
    currentBank?.bankName && String(currentBank.bankName).trim()
  );

  return (
    <div className={cx("wrapper")}>
      <div className={cx("header")}>
        <p className={cx("text")}>Mừng cưới</p>
      </div>

      <div className={cx("content")}>
        {giftSection?.image && (
          <img className={cx("img")} src={giftSection.image} alt="gift" />
        )}

        {showNav && (
          <div className={cx("nav")}>
            {isGai ? (
              <>
                <span
                  className={cx("nav-btn", nav === "bride" && "active")}
                  onClick={() => setNav("bride")}
                >
                  Cô dâu
                </span>
                <span
                  className={cx("nav-btn", nav === "groom" && "active")}
                  onClick={() => setNav("groom")}
                >
                  Chú rể
                </span>
              </>
            ) : (
              <>
                <span
                  className={cx("nav-btn", nav === "groom" && "active")}
                  onClick={() => setNav("groom")}
                >
                  Chú rể
                </span>
                <span
                  className={cx("nav-btn", nav === "bride" && "active")}
                  onClick={() => setNav("bride")}
                >
                  Cô dâu
                </span>
              </>
            )}
          </div>
        )}

        <div className={cx("bank")} ref={viewRef}>
          {hasQr && (
            <img
              src={String(currentBank.qr).trim()}
              alt="QR Code"
              className={cx("qr-code")}
              style={{
                transform: isInView ? "translateX(0)" : "translateX(-150px)",
                opacity: isInView ? 1 : 0,
                transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1)",
              }}
            />
          )}
          {(hasName || hasBankName || hasBankNumber) && (
            <div
              className={cx("info")}
              style={{
                transform: isInView ? "translateX(0)" : "translateX(150px)",
                opacity: isInView ? 1 : 0,
                transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1)",
              }}
            >
              {hasName && (
                <p className={cx("name")}>{String(currentBank.name).trim()}</p>
              )}
              {hasBankName && (
                <p className={cx("bank-name")}>
                  {String(currentBank.bankName).trim()}
                </p>
              )}
              {hasBankNumber && (
                <p className={cx("bank-number")}>
                  {String(currentBank.bankNumber).trim()}
                </p>
              )}
            </div>
          )}
        </div>

        {hasBankNumber && (
          <>
            <CopyToClipboard
              text={String(currentBank.bankNumber).trim()}
              onCopy={handleCopy}
            >
              <button className={cx("btn")}>
                {!isCopied ? "Sao chép" : "Đã sao chép"}
              </button>
            </CopyToClipboard>
            <Confetti active={isCopied} config={configConfetti} />
          </>
        )}
      </div>
    </div>
  );
}

export default Gift;
