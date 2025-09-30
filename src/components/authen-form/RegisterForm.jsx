import React from "react";
import { Button, Form, Input, Card } from "antd";
import { Link, useNavigate } from "react-router-dom";
import "./register.css";

function RegisterForm() {
  const navigate = useNavigate();

  const onFinish = async (values) => {
    console.log("Đăng ký:", values);
    navigate("/login");
  };

  return (
    <div className="auth-register-container">
      <div className="auth-register-left">
        <div className="auth-register-left-content">
          <h1 className="auth-register-welcome-title">HemaLink</h1>
          <p className="auth-register-subtitle">
            Phòng khám hiện đại, kết nối chẩn đoán và điều trị, mang đến dịch vụ
            y tế chất lượng và đáng tin cậy.
          </p>

          <div className="auth-register-features">
            <div className="auth-register-feature-item">
              <div className="auth-register-feature-icon">🧪</div>
              <div className="auth-register-feature-text">
                <h3>Xét nghiệm nhanh chóng</h3>
                <p>Hệ thống hiện đại, kết quả chính xác và kịp thời</p>
              </div>
            </div>

            <div className="auth-register-feature-item">
              <div className="auth-register-feature-icon">📋</div>
              <div className="auth-register-feature-text">
                <h3>Quản lý hồ sơ dễ dàng</h3>
                <p>Theo dõi lịch sử khám chữa bệnh mọi lúc, mọi nơi</p>
              </div>
            </div>

            <div className="auth-register-feature-item">
              <div className="auth-register-feature-icon">👨‍⚕️</div>
              <div className="auth-register-feature-text">
                <h3>Đội ngũ bác sĩ giàu kinh nghiệm</h3>
                <p>Tư vấn tận tình, hỗ trợ chuyên sâu cho từng bệnh nhân</p>
              </div>
            </div>
          </div>

          {/* <div className="auth-register-stats">
            <div className="auth-register-stat-item">
              <h4>5000+</h4>
              <p>Bệnh nhân tin tưởng</p>
            </div>
            <div className="auth-register-stat-item">
              <h4>98%</h4>
              <p>Tỷ lệ hài lòng</p>
            </div>
            <div className="auth-register-stat-item">
              <h4>24/7</h4>
              <p>Đặt lịch và hỗ trợ</p>
            </div>
          </div> */}
        </div>
      </div>

      {/* Right Side - Register Form */}
      <div className="auth-register-form-section">
        <Card className="auth-register-card" title="Đăng ký tài khoản">
          <Form
            name="register"
            layout="vertical"
            onFinish={onFinish}
            autoComplete="off"
          >
            <Form.Item
              label="Họ và tên"
              name="fullname"
              rules={[{ required: true, message: "Vui lòng nhập họ tên!" }]}
            >
              <Input placeholder="Nhập họ và tên" size="large" />
            </Form.Item>

            <Form.Item
              label="Email"
              name="email"
              rules={[
                { required: true, message: "Vui lòng nhập email!" },
                { type: "email", message: "Email không hợp lệ!" },
              ]}
            >
              <Input placeholder="Nhập email" size="large" />
            </Form.Item>

            <Form.Item
              label="Mật khẩu"
              name="password"
              rules={[
                { required: true, message: "Vui lòng nhập mật khẩu!" },
                { min: 6, message: "Mật khẩu ít nhất 6 ký tự" },
              ]}
              hasFeedback
            >
              <Input.Password placeholder="Nhập mật khẩu" size="large" />
            </Form.Item>

            <Form.Item
              label="Xác nhận mật khẩu"
              name="confirmPassword"
              dependencies={["password"]}
              hasFeedback
              rules={[
                { required: true, message: "Vui lòng xác nhận mật khẩu!" },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(new Error("Mật khẩu không khớp!"));
                  },
                }),
              ]}
            >
              <Input.Password placeholder="Nhập lại mật khẩu" size="large" />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" size="large" block>
                Đăng ký ngay
              </Button>
            </Form.Item>

            <div style={{ textAlign: "center" }}>
              Đã có tài khoản? <Link to="/login">Đăng nhập ngay</Link>
            </div>
          </Form>
        </Card>
      </div>
    </div>
  );
}

export default RegisterForm;
