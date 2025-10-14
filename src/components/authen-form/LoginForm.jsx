import React from "react";
import { Button, Checkbox, Form, Input, Card } from "antd";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import { setUserData as saveUserData } from "../../utils/auth";
// import { useDispatch } from "react-redux";
// import { login } from "../../redux/features/userSlice";
// import { toast } from "react-toastify";
// import api from "../../configs/axios";
// import { GoogleLogin } from "@react-oauth/google";

const LoginForm = ({ errorMessage }) => {
  const navigate = useNavigate();
  // const dispatch = useDispatch();

  const onFinish = async (values) => {
    // Giả lập gọi API đăng nhập thành công
    // Thay đoạn này bằng gọi API thực tế của bạn
    const userData = {
      email: values.email,
      fullname: "Nguyễn Văn An",
      patientId: "550e8400",
      gender: "Nam",
      age: 40,
      phone: "0912345678",
      birthday: "15 tháng 3, 1985",
      address: "123 Đường Lê Lợi, Quận 1, TP.HCM",
      idCard: "079085001234",
      healthInsurance: "BH-2024-001234",
      registrationDate: "15 tháng 1, 2024",
      avatar: "", // Có thể cập nhật sau
    };
    // Lưu user vào localStorage sử dụng auth utility
    saveUserData(userData);
    // Chuyển về trang chủ
    navigate("/");
  };

  // const onFinishFailed = (errorInfo) => {
  //   // Xử lý lỗi nếu cần
  // };

  return (
    <div className="auth-login-container">
      <div className="auth-login-welcome">
        <div className="auth-login-welcome-content">
          <h1 className="auth-login-welcome-title">
            Chào mừng đến với HemaLink
          </h1>
          <p className="auth-login-welcome-subtitle">
            Nền tảng quản lý xét nghiệm thông minh – chính xác, nhanh chóng và
            bảo mật.
          </p>

          <div className="auth-login-welcome-features">
            <div className="auth-login-welcome-feature">
              <div className="auth-login-welcome-feature-icon">🧪</div>
              <div className="auth-login-welcome-feature-text">
                Kết quả xét nghiệm chuẩn xác và kịp thời
              </div>
            </div>
            <div className="auth-login-welcome-feature">
              <div className="auth-login-welcome-feature-icon">📊</div>
              <div className="auth-login-welcome-feature-text">
                Theo dõi hồ sơ và lịch sử xét nghiệm tiện lợi
              </div>
            </div>
            <div className="auth-login-welcome-feature">
              <div className="auth-login-welcome-feature-icon">🔒</div>
              <div className="auth-login-welcome-feature-text">
                Bảo mật dữ liệu bệnh nhân nhiều lớp
              </div>
            </div>
            <div className="auth-login-welcome-feature">
              <div className="auth-login-welcome-feature-icon">👨‍⚕️</div>
              <div className="auth-login-welcome-feature-text">
                Kết nối nhanh với đội ngũ y bác sĩ
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Form Section */}
      <div className="auth-login-form-section">
        <div className="auth-login-form-wrapper">
          <Card
            className="auth-login-card"
            title="ĐĂNG NHẬP"
            extra={
              <Link to="/" className="auth-login-back-home">
                Quay về trang chủ
              </Link>
            }
          >
            {errorMessage && (
              <div className="auth-login-error">{errorMessage}</div>
            )}

            <Form
              name="login"
              onFinish={onFinish}
              // onFinishFailed={onFinishFailed}
              layout="vertical"
              className="auth-login-form"
            >
              <Form.Item
                label="Email"
                name="email"
                rules={[
                  { required: true, message: "Vui lòng nhập email!" },
                  { type: "email", message: "Email không hợp lệ!" },
                ]}
              >
                <Input placeholder="Nhập email của bạn" size="large" />
              </Form.Item>
              <Form.Item
                label="Mật khẩu"
                name="password"
                rules={[{ required: true, message: "Vui lòng nhập mật khẩu!" }]}
              >
                <Input.Password placeholder="Nhập mật khẩu" size="large" />
              </Form.Item>
              <Form.Item
                name="remember"
                valuePropName="checked"
                className="auth-login-form-item-remember"
              >
                <div className="auth-login-haha">
                  <Checkbox className="auth-login-checkbox">
                    Ghi nhớ đăng nhập
                  </Checkbox>
                  <div className="auth-login-forgot-link">
                    <Link
                      to="/forgot-password"
                      className="auth-login-forgot-link-a"
                    >
                      Quên mật khẩu?
                    </Link>
                  </div>
                </div>
              </Form.Item>

              <Form.Item className="auth-login-form-item">
                <Button
                  type="primary"
                  htmlType="submit"
                  block
                  className="auth-login-button"
                  size="large"
                >
                  Đăng nhập
                </Button>
              </Form.Item>

              {/* Nút đăng nhập Google - đã comment */}
              {/* <div style={{ marginBottom: 16, textAlign: "center"  }}>
                <GoogleLogin
                  onSuccess={handleGoogleLoginSuccess}
                  onError={() => toast.error("Đăng nhập Google thất bại!")}
                  width="100%"
                />
              </div> */}

              <div className="auth-login-register-link">
                Chưa có tài khoản?
                <Link to="/register" className="auth-login-register-link-a">
                  Đăng ký ngay
                </Link>
              </div>
            </Form>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
