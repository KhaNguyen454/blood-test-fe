import React from "react";
import "./SuccessBooking.css";
import { useNavigate } from "react-router-dom";

export default function SuccessBooking({
  paymentResult,
  selectedItems,
  selectedDateTime,
  onNewBooking,
}) {
  const navigate = useNavigate();

  const orderCode = paymentResult?.orderCode || "XN2025010001";
  const total =
    selectedItems?.total ||
    (selectedItems?.package?.price ?? paymentResult?.amount) ||
    300000;
  const formattedTotal = (total || 0).toLocaleString("vi-VN") + "đ";

  const pkgName =
    selectedItems?.package?.name ||
    selectedItems?.package?.title ||
    "Xét nghiệm tổng quát";

  const formatDate = (iso) => {
    if (!iso) return "—";
    try {
      const d = new Date(iso);
      return d.toLocaleDateString("vi-VN", {
        weekday: "short",
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      });
    } catch {
      return iso;
    }
  };

  const handleNew = () => {
    if (typeof onNewBooking === "function") {
      onNewBooking();
      return;
    }
    navigate("/booking");
  };

  return (
    <div className="sb-page">
      <div className="sb-inner">
        <div className="sb-top">
          <div className="sb-check">
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="12" fill="#E6FFF0" />
              <path
                d="M7 12.5l2.5 2.5L17 8"
                stroke="#0FAC5A"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <h1 className="sb-title">Đặt lịch thành công!</h1>
          <p className="sb-desc">
            Cảm ơn bạn đã đặt lịch. Chúng tôi đã gửi xác nhận đến email của bạn.
          </p>
        </div>

        <div className="sb-content">
          <div className="sb-receipt">
            <div className="sb-receipt-top">
              <div className="sb-code">
                Mã đặt lịch: <span className="sb-code-val">{orderCode}</span>
              </div>
              <div className="sb-total">{formattedTotal}</div>
            </div>

            <div className="sb-receipt-body">
              <div className="sb-row">
                <div className="sb-icon">
                  {/* icon list */}
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M3 7h18M6 11h12M9 15h6"
                      stroke="#2563EB"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="sb-text">
                  <div className="sb-label">Gói xét nghiệm</div>
                  <div className="sb-value">{pkgName}</div>
                </div>
              </div>

              <div className="sb-row">
                <div className="sb-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M21 10.5c0 6-9 11-9 11s-9-5-9-11a9 9 0 1118 0z"
                      stroke="#2563EB"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="sb-text">
                  <div className="sb-label">Địa điểm</div>
                  <div className="sb-value">
                    Phòng khám Xét nghiệm Y tế
                    <br />
                    123 Nguyễn Huệ, Q.1, TP.HCM
                  </div>
                </div>
              </div>

              <div className="sb-row">
                <div className="sb-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M8 7V3M16 7V3M3 11h18M5 21h14"
                      stroke="#2563EB"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="sb-text">
                  <div className="sb-label">Ngày khám</div>
                  <div className="sb-value">
                    {formatDate(selectedDateTime?.date)}
                  </div>
                </div>
              </div>

              <div className="sb-row">
                <div className="sb-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M12 6v6l4 2"
                      stroke="#2563EB"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="sb-text">
                  <div className="sb-label">Giờ khám</div>
                  <div className="sb-value">
                    {selectedDateTime?.time || "—"}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="sb-customer">
            <div className="sb-cust-title">Thông tin khách hàng</div>
            <div className="sb-cust-grid">
              <div>
                <div className="c-l">Họ và tên</div>
                <div className="c-v">
                  {paymentResult?.name || "Nguyễn Văn A"}
                </div>
              </div>
              <div>
                <div className="c-l">Email</div>
                <div className="c-v">
                  {paymentResult?.email || "email@example.com"}
                </div>
              </div>
              <div>
                <div className="c-l">Số điện thoại</div>
                <div className="c-v">
                  {paymentResult?.phone || "0912345678"}
                </div>
              </div>
            </div>
          </div>

          <div className="sb-note">
            <div className="sb-note-title">Lưu ý quan trọng</div>
            <ul>
              <li>Vui lòng đến trước giờ hẹn 15 phút để làm thủ tục.</li>
              <li>Nhịn ăn 8-12 tiếng trước khi xét nghiệm nếu cần.</li>
              <li>Mang theo CMND/CCCD và in/gửi vé khi đến khám.</li>
              <li>Kết quả xét nghiệm sẽ có sau 24-48 giờ (tùy dịch vụ).</li>
            </ul>
          </div>

          <div className="sb-actions">
            <button className="btn outline">Tải xuống xác nhận</button>
            <button className="btn outline">Gửi lại email</button>

            <button className="btn primary" onClick={handleNew}>
              Đặt lịch mới
            </button>
          </div>

          <div className="sb-help">
            Cần hỗ trợ? Liên hệ hotline: <strong>1900 1234</strong> hoặc email:{" "}
            <strong>support@xetnghiem.vn</strong>
          </div>
        </div>
      </div>
    </div>
  );
}
