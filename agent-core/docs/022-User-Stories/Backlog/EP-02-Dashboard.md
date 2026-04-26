---
epic: EP-02
status: draft
created: 2026-04-26
---

# Epic 02: Dashboard Tổng quan

Epic này tập trung vào việc cung cấp một cái nhìn toàn cảnh về tình trạng hệ thống và các tài nguyên quan trọng nhất.

## US-05: Xem thống kê tổng quát tài nguyên
**Mô tả:**
> Là một **Người dùng**, tôi muốn **xem tổng số Project, số lượng Service đang chạy và tổng số Logs thu thập được**, để **tôi có quy mô hoạt động hiện tại của hệ thống.**

**Tiêu chí chấp nhận (AC):**
- [ ] Hiển thị các khối (Cards) thống kê số lượng ở phía trên cùng của Dashboard.
- [ ] Dữ liệu được cập nhật tự động (Real-time hoặc định kỳ 1 phút).
- [ ] Có biểu đồ nhỏ (Mini-chart) thể hiện xu hướng tăng trưởng của Logs trong 24h qua.

---

## US-06: Xem danh sách các Project mới nhất
**Mô tả:**
> Là một **Developer**, tôi muốn **truy cập nhanh vào các Project tôi vừa làm việc**, để **tối ưu hóa thời gian điều hướng trong hệ thống.**

**Tiêu chí chấp nhận (AC):**
- [ ] Hiển thị danh sách 5-10 Project được cập nhật gần nhất.
- [ ] Mỗi item hiển thị: Tên Project, Platform, Trạng thái Deploy cuối cùng (Success/Fail).
- [ ] Cho phép click để đi thẳng vào chi tiết Project đó.

---

## US-07: Xem biểu đồ trạng thái Service
**Mô tả:**
> Là một **DevOps Engineer**, tôi muốn **xem biểu đồ tỷ lệ Service (Up/Down/Warning)**, để **tôi có thể nhận diện ngay lập tức nếu có sự cố xảy ra trên diện rộng.**

**Tiêu chí chấp nhận (AC):**
- [ ] Sử dụng biểu đồ tròn (Pie chart) hoặc biểu đồ thanh (Bar chart) thể hiện tỷ lệ trạng thái.
- [ ] Màu sắc quy chuẩn: Xanh (Healthy), Đỏ (Critical), Vàng (Warning).
- [ ] Có bộ lọc Dashboard theo Platform (AWS, GCP, etc.).

---

## US-08: Tùy chỉnh khoảng thời gian xem Dashboard
**Mô tả:**
> Là một **Người dùng**, tôi muốn **thay đổi mốc thời gian xem Dashboard (1h, 24h, 7 ngày)**, để **phân tích dữ liệu theo các chu kỳ khác nhau.**

**Tiêu chí chấp nhận (AC):**
- [ ] Cung cấp Dropdown chọn thời gian (Time picker) ở góc phải Dashboard.
- [ ] Các widget thống kê và biểu đồ phải tự động tải lại dữ liệu theo mốc thời gian đã chọn.
- [ ] Ghi nhớ lựa chọn thời gian cuối cùng của người dùng cho phiên làm việc tiếp theo.
