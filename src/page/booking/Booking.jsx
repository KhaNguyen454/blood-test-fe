import React, { useState, useEffect } from "react";
import BookingNavbar from "../../components/booking/BookingNavbar";
import BookingHeader from "../../components/booking/BookingHeader";
import PackageSelection from "../../components/booking/PackageSelection";
import LoginRequirement from "../../components/booking/LoginRequirement";
import "./Booking.css";

function Booking() {
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [currentStep, setCurrentStep] = useState(1);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Kiểm tra trạng thái đăng nhập (giả lập)
  useEffect(() => {
    // Trong thực tế, bạn sẽ kiểm tra token hoặc session
    const checkLoginStatus = () => {
      const token = localStorage.getItem("authToken");
      setIsLoggedIn(!!token);
    };

    checkLoginStatus();
  }, []);

  const handlePackageSelect = (packageId) => {
    setSelectedPackage(packageId);
  };

  const handleContinue = () => {
    if (selectedPackage) {
      setCurrentStep(2);
    }
  };

  // Nếu chưa đăng nhập, hiển thị yêu cầu đăng nhập
  if (!isLoggedIn) {
    return (
      <div className="booking-container">
        <BookingNavbar />
        <LoginRequirement />
      </div>
    );
  }

  // Nếu đã đăng nhập, hiển thị trang đặt lịch
  return (
    <div className="booking-container">
      <BookingNavbar />
      <div className="booking-content">
        <BookingHeader
          title="Đặt lịch xét nghiệm"
          subtitle="Chọn gói xét nghiệm, địa điểm và thời gian phù hợp với bạn"
          currentStep={currentStep}
        />

        <PackageSelection
          selectedPackage={selectedPackage}
          onPackageSelect={handlePackageSelect}
        />

        <div className="booking-actions">
          <button
            className="continue-btn"
            onClick={handleContinue}
            disabled={!selectedPackage}
          >
            Tiếp tục
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M6 12L10 8L6 4"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Booking;
