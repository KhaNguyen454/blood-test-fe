// src/components/home/DoctorSection.jsx
import React from "react";
import "./DoctorSection.css";

const doctors = [
  {
    name: "BS. Nguyễn Thị Lan",
    specialty: "Chuyên khoa Huyết học",
    exp: "15+ năm kinh nghiệm",
    location: "Phòng khám Quận 1",
    rating: 4.9,
    img: "https://images2.thanhnien.vn/528068263637045248/2024/3/7/41498385661961282804899348165590311304931596n-17098051418122006775403.jpg",
  },
  {
    name: "BS. Trần Văn Minh",
    specialty: "Chuyên khoa Sinh hóa",
    exp: "12+ năm kinh nghiệm",
    location: "Phòng khám Quận 3",
    rating: 4.8,
    img: "https://htmediagroup.vn/wp-content/uploads/2023/03/Anh-bac-si-nam-4-min.jpg",
  },
  {
    name: "BS. Lê Thị Hương",
    specialty: "Chuyên khoa Vi sinh",
    exp: "18+ năm kinh nghiệm",
    location: "Phòng khám Quận 7",
    rating: 5.0,
    img: "https://media.sohuutritue.net.vn/files/huongmi/2023/01/27/bsi-pham-ly-0853.jpg",
  },
];

export default function DoctorSection() {
  return (
    <div className="doctor-section-bg">
      <span className="doctor-badge">Đội ngũ chuyên gia</span>
      <h2 className="doctor-title">Bác sĩ giàu kinh nghiệm</h2>
      <p className="doctor-desc">
        Đội ngũ bác sĩ chuyên khoa hàng đầu, tận tâm với nghề
      </p>
      <div className="doctor-cards">
        {doctors.map((doc, idx) => (
          <div className="doctor-card" key={idx}>
            <div className="doctor-img-bg">
              <div className="doctor-img-wrapper">
                <img src={doc.img} alt={doc.name} className="doctor-img" />
              </div>
            </div>
            <div className="doctor-info">
              <div className="doctor-name">
                <span>{doc.name}</span>
                <span className="doctor-rating">
                  <span style={{ color: "#3182CE" }}>★</span> {doc.rating}
                </span>
              </div>
              <div className="doctor-specialty">{doc.specialty}</div>
              <div className="doctor-exp">
                <span style={{ color: "#A0AEC0", fontSize: "14px" }}>❤</span>{" "}
                {doc.exp}
              </div>
              <div className="doctor-location">
                <span style={{ color: "#A0AEC0", fontSize: "14px" }}>🏠︎</span>{" "}
                {doc.location}
              </div>
              <button className="doctor-btn">Xem hồ sơ</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
