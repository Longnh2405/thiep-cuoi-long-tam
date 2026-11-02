"use client";
import { giftSection, configConfetti } from "@/app/configs/ui";
import styles from "./gift.module.scss";
import classNames from "classnames/bind";
import { useEffect, useRef, useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import { useDebounce } from "@/app/helper";
import Confetti from "react-dom-confetti";
import { FaGift, FaCopy, FaCheck, FaTimes } from "react-icons/fa";

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

function Gift({ onClose, isGai = false }) {
  const [activeBank, setActiveBank] = useState(null);
  const [isCopied, setIsCopied] = useState(false);
  const [zoomQr, setZoomQr] = useState(false);
  const qrRef = useRef(null);

  const brideBank = giftSection?.brideBank;
  const groomBank = giftSection?.groomBank;

  const hasBride = isBankValid(brideBank);
  const hasGroom = isBankValid(groomBank);

  const handleCopy = useDebounce(() => {
    setIsCopied(true);
  }, 1000);

  useEffect(() => {
    let timeout;
    if (isCopied) {
      timeout = setTimeout(() => {
        setIsCopied(false);
      }, 1500);
    }
    return () => clearTimeout(timeout);
  }, [isCopied]);

  const handleSelectBank = (bankKey) => {
    if (activeBank === bankKey) {
      setActiveBank(null);
    } else {
      setActiveBank(bankKey);
      setTimeout(() => {
        qrRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
      }, 100);
    }
  };

  if (!hasBride && !hasGroom) {
    return null;
  }

  const currentBank = activeBank === "bride" ? brideBank : groomBank;
  const targetLabel = activeBank === "bride" ? "Cô dâu" : "Chú rể";

  return (
    <div className={cx("wrapper")}>
      <div className={cx("header")}>
        <p className={cx("text")}>Mừng cưới</p>
      </div>

      <div className={cx("content")}>
        {giftSection?.image && (
          <img
            className={cx("img")}
            src={giftSection.image}
            alt="gift"
            loading="lazy"
            decoding="async"
          />
        )}

        <p className={cx("subtext")}>
          Sự hiện diện của quý khách là niềm vinh hạnh cho gia đình chúng tôi!
        </p>

        <div className={cx("gift-actions")}>
          {isGai ? (
            <>
              {hasBride && (
                <button
                  type="button"
                  className={cx(
                    "gift-action-btn",
                    activeBank === "bride" && "active"
                  )}
                  onClick={() => handleSelectBank("bride")}
                >
                  <FaGift className={cx("gift-icon")} />
                  Tặng quà cô dâu
                </button>
              )}
              {hasGroom && (
                <button
                  type="button"
                  className={cx(
                    "gift-action-btn",
                    activeBank === "groom" && "active"
                  )}
                  onClick={() => handleSelectBank("groom")}
                >
                  <FaGift className={cx("gift-icon")} />
                  Tặng quà chú rể
                </button>
              )}
            </>
          ) : (
            <>
              {hasGroom && (
                <button
                  type="button"
                  className={cx(
                    "gift-action-btn",
                    activeBank === "groom" && "active"
                  )}
                  onClick={() => handleSelectBank("groom")}
                >
                  <FaGift className={cx("gift-icon")} />
                  Tặng quà chú rể
                </button>
              )}
              {hasBride && (
                <button
                  type="button"
                  className={cx(
                    "gift-action-btn",
                    activeBank === "bride" && "active"
                  )}
                  onClick={() => handleSelectBank("bride")}
                >
                  <FaGift className={cx("gift-icon")} />
                  Tặng quà cô dâu
                </button>
              )}
            </>
          )}
        </div>

        {activeBank && currentBank && (
          <div className={cx("qr-container")} ref={qrRef}>
            <p className={cx("target-title")}>Mừng cưới {targetLabel}</p>
            <p className={cx("scan-hint")}>
              Quét mã QR bằng ứng dụng ngân hàng để chuyển khoản
            </p>

            <div className={cx("bank-card")}>
              {currentBank.qr && (
                <div
                  className={cx("qr-img-wrapper")}
                  onClick={() => setZoomQr(true)}
                  title="Bấm để phóng to mã QR"
                >
                  <img
                    src={String(currentBank.qr).trim()}
                    alt={`Mã QR ${targetLabel}`}
                    className={cx("qr-code-img")}
                    loading="lazy"
                    decoding="async"
                  />
                  <span className={cx("zoom-hint")}>Chạm để phóng to</span>
                </div>
              )}

              <div className={cx("bank-details")}>
                {currentBank.name && (
                  <p className={cx("bank-holder")}>
                    {String(currentBank.name).trim()}
                  </p>
                )}
                {currentBank.bankName && (
                  <p className={cx("bank-name-text")}>
                    Ngân hàng: {String(currentBank.bankName).trim()}
                  </p>
                )}
                {currentBank.bankNumber && (
                  <p className={cx("bank-num-text")}>
                    {String(currentBank.bankNumber).trim()}
                  </p>
                )}
              </div>

              {currentBank.bankNumber && (
                <div className={cx("copy-wrapper")}>
                  <CopyToClipboard
                    text={String(currentBank.bankNumber).trim()}
                    onCopy={handleCopy}
                  >
                    <button type="button" className={cx("copy-btn")}>
                      {isCopied ? (
                        <>
                          <FaCheck className={cx("btn-icon")} /> Đã sao chép số tài khoản
                        </>
                      ) : (
                        <>
                          <FaCopy className={cx("btn-icon")} /> Sao chép số tài khoản
                        </>
                      )}
                    </button>
                  </CopyToClipboard>
                  <Confetti active={isCopied} config={configConfetti} />
                </div>
              )}

              <button
                type="button"
                className={cx("close-card-btn")}
                onClick={() => setActiveBank(null)}
              >
                Thu gọn
              </button>
            </div>
          </div>
        )}

        {zoomQr && currentBank?.qr && (
          <div className={cx("zoom-modal")} onClick={() => setZoomQr(false)}>
            <div
              className={cx("zoom-content")}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                className={cx("zoom-close")}
                onClick={() => setZoomQr(false)}
              >
                <FaTimes />
              </button>
              <img
                src={String(currentBank.qr).trim()}
                alt="QR Code Zoom"
                className={cx("zoom-img")}
              />
              <p className={cx("zoom-title")}>
                {currentBank.name || targetLabel}
              </p>
              {currentBank.bankNumber && (
                <p className={cx("zoom-acc")}>{currentBank.bankNumber}</p>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Gift;
