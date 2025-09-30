// src/components/home/ServiceSection.jsx
import React from "react";
import "./ServiceSection.css";

export default function ServiceSection() {
  return (
    <div className="service-section-bg">
      <div className="service-section-content">
        <span className="service-badge">Dịch vụ của chúng tôi</span>
        <h2 className="service-title">Xét nghiệm nhanh chóng và chính xác</h2>
        <p className="service-desc">
          Hệ thống hiện đại, kết quả chính xác và kịp thời
        </p>
        <div className="service-cards">
          <div className="service-card">
            <div className="service-icon">🧪</div>
            <div>
              <div className="service-card-title">Xét nghiệm nhanh chóng</div>
              <div className="service-card-desc">
                Hệ thống hiện đại, kết quả chính xác và kịp thời. Nhận kết quả
                trong vòng 24 giờ.
              </div>
            </div>
          </div>
          <div className="service-card">
            <div className="service-icon">📋</div>
            <div>
              <div className="service-card-title">Quản lý hồ sơ dễ dàng</div>
              <div className="service-card-desc">
                Theo dõi lịch sử khám chữa bệnh mọi lúc, mọi nơi. Quản lý hồ sơ
                y tế điện tử an toàn.
              </div>
            </div>
          </div>
          <div className="service-card">
            <div className="service-icon">🛡️</div>
            <div>
              <div className="service-card-title">
                Đội ngũ bác sĩ giàu kinh nghiệm
              </div>
              <div className="service-card-desc">
                Tư vấn tận tình, hỗ trợ chuyên sâu cho từng bệnh nhân với đội
                ngũ chuyên gia hàng đầu.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
