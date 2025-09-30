import React from "react";
import { Button, Checkbox, Form, Input, Card } from "antd";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { login } from "../../redux/features/userSlice";
// import { toast } from "react-toastify";
// import api from "../../configs/axios";
// import { GoogleLogin } from "@react-oauth/google";

const LoginForm = ({ onLogin, errorMessage }) => {
  const navigate = useNavigate();
  // const dispatch = useDispatch();

  const onFinish = async (values) => {
    // Xử lý đăng nhập ở đây, ví dụ chỉ chuyển trang sau khi submit thành công
    console.log("Login data:", values);
    navigate("/"); // hoặc navigate("/") tùy role, ở đây mặc định về dashboard
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Login failed:", errorInfo);
  };

  return (
    <div className="auth-login-container">
      <div className="auth-login-welcome">
        <h1>Chào mừng đến với HemaLink </h1>
        <p>Kết nối bệnh nhân và chẩn đoán</p>
        <p className="auth-login-subtitle">
          Quản lý xét nghiệm thông minh – Chính xác, nhanh chóng và bảo mật
        </p>
      </div>

      {/* Right Side - Form Section */}
      <div className="auth-login-form-section">
        <div className="auth-login-form-wrapper">
          <Card className="auth-login-card" title="ĐĂNG NHẬP">
            {errorMessage && (
              <div className="auth-login-error">{errorMessage}</div>
            )}

            <Form
              name="login-form"
              layout="vertical"
              initialValues={{ remember: true }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              className="auth-login-form"
            >
              <Form.Item
                label="Email"
                name="email"
                className="auth-login-form-item"
                rules={[
                  { required: true, message: "Vui lòng nhập email!" },
                  { type: "email", message: "Email không hợp lệ!" },
                ]}
              >
                <Input
                  placeholder="Nhập email của bạn"
                  className="auth-login-input"
                  size="large"
                />
              </Form.Item>

              <Form.Item
                label="Mật khẩu"
                name="password"
                className="auth-login-form-item"
                rules={[
                  { required: true, message: "Vui lòng nhập mật khẩu!" },
                  { min: 6, message: "Mật khẩu phải ít nhất 6 ký tự!" },
                ]}
              >
                <Input.Password
                  placeholder="Nhập mật khẩu"
                  className="auth-login-input"
                  size="large"
                />
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
