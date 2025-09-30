// src/components/home/CallToActionSection.jsx
import React from "react";
import "./CallToActionSection.css";

export default function CallToActionSection() {
  return (
    <div className="cta-section-bg">
      <div className="cta-section-content">
        <div className="cta-left">
          <h2 className="cta-title">Sẵn sàng bắt đầu chăm sóc sức khỏe?</h2>
          <p className="cta-desc">
            Đặt lịch xét nghiệm ngay hôm nay và nhận kết quả nhanh chóng, chính
            xác từ đội ngũ chuyên gia của chúng tôi.
          </p>
          <div className="cta-btns">
            <button className="cta-btn-primary">Đặt lịch ngay</button>
            <button className="cta-btn-outline">Tư vấn bác sĩ</button>
          </div>
        </div>
        <div className="cta-right">
          <div className="cta-grid">
            <div className="cta-card">
              <div className="cta-card-icon">⏰</div>
              <div>
                <div className="cta-card-title">24h</div>
                <div className="cta-card-desc">Kết quả nhanh</div>
              </div>
            </div>
            <div className="cta-card">
              <div className="cta-card-icon">🛡️</div>
              <div>
                <div className="cta-card-title">100%</div>
                <div className="cta-card-desc">An toàn</div>
              </div>
            </div>
            <div className="cta-card">
              <div className="cta-card-icon">⭐</div>
              <div>
                <div className="cta-card-title">4.9/5</div>
                <div className="cta-card-desc">Đánh giá</div>
              </div>
            </div>
            <div className="cta-card">
              <div className="cta-card-icon">💙</div>
              <div>
                <div className="cta-card-title">10K+</div>
                <div className="cta-card-desc">Bệnh nhân</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
