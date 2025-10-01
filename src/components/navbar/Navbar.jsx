import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { isAuthenticated, demoLogout } from "../../utils/auth";
import "./Navbar.css";

function Navbar() {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    setLoggedIn(isAuthenticated());
  }, []);

  const handleLogout = () => {
    demoLogout();
    setLoggedIn(false);
  };

  return (
    <header className="navbar">
      <div className="navbar-inner">
        <div className="navbar-logo">
          <span className="navbar-logo-icon">
            <img
              src="/logo.png"
              alt="HemaLink Logo"
              className="navbar-logo-img"
            />
          </span>
          <span className="navbar-logo-text">HemaLink</span>
        </div>
        <nav className="navbar-menu">
          <a href="#hero" className="active">
            Trang chủ
          </a>
          <a href="#services">Dịch vụ</a>
          <a href="#doctors">Bác sĩ</a>
          <a href="#blog">Blog</a>
          <Link to="/booking" className="navbar-link">
            Đặt lịch
          </Link>
        </nav>
        <div className="navbar-actions">
          {loggedIn ? (
            <>
              <span className="navbar-user">Xin chào!</span>
              <button onClick={handleLogout} className="navbar-logout">
                Đăng xuất
              </button>
            </>
          ) : (
            <>
              <a href="/login" className="navbar-login">
                Đăng nhập
              </a>
              <a href="/register" className="navbar-register">
                Đăng ký
              </a>
            </>
          )}
        </div>
      </div>
    </header>
  );
}

export default Navbar;
