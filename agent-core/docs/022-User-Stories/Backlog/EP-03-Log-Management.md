---
epic: EP-03
status: draft
created: 2026-04-26
---

# Epic 03: Quản lý Log (Log Management)

Epic này tập trung vào tính năng cốt lõi của hệ thống: Thu thập, hiển thị và truy vấn log dữ liệu.

## US-09: Xem Live Log (Tail Log)
**Mô tả:**
> Là một **Developer**, tôi muốn **xem log đang được đẩy lên theo thời gian thực**, để **tôi có thể debug ứng dụng ngay khi thực hiện thao tác.**

**Tiêu chí chấp nhận (AC):**
- [ ] Giao diện hiển thị log theo dạng console (Dark mode mặc định).
- [ ] Các dòng log mới tự động được đẩy lên phía trên hoặc tự động scroll xuống dưới.
- [ ] Có nút "Pause" để tạm dừng luồng log và "Clear" để xóa màn hình hiện tại.

---

## US-10: Tìm kiếm log bằng từ khóa
**Mô tả:**
> Là một **Developer**, tôi muốn **tìm kiếm các dòng log chứa từ khóa cụ thể (ví dụ: "Error 500")**, để **nhanh chóng tìm ra nguyên nhân lỗi.**

**Tiêu chí chấp nhận (AC):**
- [ ] Thanh tìm kiếm hoạt động trên dữ liệu log hiện có.
- [ ] Highlight từ khóa khớp trong kết quả hiển thị.
- [ ] Hỗ trợ tìm kiếm theo Regex (Advanced).

---

## US-11: Lọc log theo Level (Info, Error, Debug)
**Mô tả:**
> Là một **SRE Engineer**, tôi muốn **lọc danh sách log chỉ hiển thị "Error" hoặc "Critical"**, để **tập trung vào các vấn đề nghiêm trọng cần xử lý.**

**Tiêu chí chấp nhận (AC):**
- [ ] Cung cấp Multi-select filter cho Log Levels.
- [ ] Tự động gán nhãn màu sắc cho từng Level (Đỏ cho Error, Vàng cho Warning, Xanh cho Info).
- [ ] Bộ lọc hoạt động tức thì (Instant filter) không cần reload trang.

---

## US-12: Tải xuống file log (Export)
**Mô tả:**
> Là một **Người dùng**, tôi muốn **tải tập dữ liệu log của một khoảng thời gian nhất định về máy**, để **tôi có thể lưu trữ offline hoặc gửi cho các bên liên quan phân tích.**

**Tiêu chí chấp nhận (AC):**
- [ ] Cho phép chọn định dạng xuất (CSV hoặc Text).
- [ ] Giới hạn số lượng dòng export tối đa (ví dụ: 100,000 dòng) để bảo vệ hiệu năng hệ thống.
- [ ] Quá trình export diễn ra dưới background và thông báo khi sẵn sàng tải về.
