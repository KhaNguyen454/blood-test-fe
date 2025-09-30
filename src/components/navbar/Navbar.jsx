import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-logo">
        <span className="navbar-logo-icon">🩺</span>
        <span className="navbar-logo-text">HemaLink</span>
      </div>
      <nav className="navbar-menu">
        <a href="#hero" className="active">
          Trang chủ
        </a>
        <a href="#services">Dịch vụ</a>
        <a href="#doctors">Bác sĩ</a>
        <a href="#blog">Blog</a>
      </nav>
      <div className="navbar-actions">
        <a href="/login" className="navbar-login">
          Đăng nhập
        </a>
        <a href="/register" className="navbar-register">
          Đăng ký
        </a>
      </div>
    </header>
  );
}

export default Navbar;
