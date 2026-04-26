---
epic: EP-01
status: draft
created: 2026-04-26
---

# Epic 01: Auth & Kết nối Platform

Dưới đây là chi tiết các User Stories thuộc Epic 01, tập trung vào việc xác thực người dùng và thiết lập kết nối với các nền tảng hạ tầng.

## US-01: Đăng nhập bằng tài khoản Github
**Mô tả:**
> Là một **Developer**, tôi muốn **đăng nhập vào Thinkway bằng tài khoản Github**, để **tôi có thể nhanh chóng truy cập hệ thống mà không cần tạo mật khẩu mới và tự động đồng bộ repository sau này.**

**Tiêu chí chấp nhận (AC):**
- [ ] Hiển thị nút "Continue with Github" tại trang Login.
- [ ] Chuyển hướng người dùng sang trang OAuth của Github thành công.
- [ ] Sau khi xác thực, người dùng được đưa về Dashboard của Thinkway.
- [ ] Lưu trữ thông tin cơ bản: Github ID, Email, Avatar URL.

---

## US-02: Kết nối tài khoản AWS
**Mô tả:**
> Là một **Admin hệ thống**, tôi muốn **kết nối tài khoản AWS thông qua Access Key/Secret Key**, để **Thinkway có thể thu thập dữ liệu logs và quản lý các dịch vụ trên AWS.**

**Tiêu chí chấp nhận (AC):**
- [ ] Form nhập liệu bao gồm: Account Name, Access Key ID, Secret Access Key, Default Region.
- [ ] Có tính năng "Test Connection" để kiểm tra tính hợp lệ của Key trước khi lưu.
- [ ] Mã hóa và lưu trữ bí mật Key an toàn trong database.
- [ ] Thông báo thành công/thất bại rõ ràng cho người dùng.

---

## US-03: Kết nối tài khoản Google Cloud (GCP)
**Mô tả:**
> Là một **Admin hệ thống**, tôi muốn **tải lên file Service Account JSON của GCP**, để **Thinkway có thể truy cập vào các project Cloud Run/GKE của tôi.**

**Tiêu chí chấp nhận (AC):**
- [ ] Cho phép upload file `.json` hoặc dán nội dung JSON trực tiếp.
- [ ] Validate cấu trúc file JSON của GCP Service Account.
- [ ] Liên kết Service Account với một hoặc nhiều Project ID cụ thể.
- [ ] Hiển thị trạng thái kết nối của GCP trên giao diện.

---

## US-04: Quản lý danh sách Platform đã kết nối
**Mô tả:**
> Là một **Người dùng**, tôi muốn **xem danh sách tất cả các Platform (AWS, GCP, Vercel...) đã kết nối**, để **tôi có thể kiểm soát và gỡ bỏ các kết nối không còn sử dụng.**

**Tiêu chí chấp nhận (AC):**
- [ ] Trang quản lý hiển thị danh sách các platform theo dạng Card hoặc Table.
- [ ] Hiển thị thông tin: Tên kết nối, Loại Platform, Trạng thái (Connected/Error), Ngày kết nối.
- [ ] Có nút "Disconnect" hoặc "Edit" cho từng kết nối.
- [ ] Yêu cầu xác nhận trước khi xóa (Disconnect).
