---
epic: EP-06
status: draft
created: 2026-04-26
---

# Epic 06: Cảnh báo & Giám sát (Alerting) - [Phase 2]

Epic này tập trung vào việc chủ động thông báo cho người dùng về các sự cố.

## US-20: Cấu hình quy tắc cảnh báo (Alert Rules)
**Mô tả:**
> Là một **SRE Engineer**, tôi muốn **tạo quy tắc: "Nếu log có từ khóa Fatal Error > 5 lần trong 1 phút" thì gửi thông báo**, để **tôi có thể can thiệp kịp thời.**

**Tiêu chí chấp nhận (AC):**
- [ ] Form tạo quy tắc bao gồm: Target (Project/Service), Condition (Keyword count/Time window), Threshold.
- [ ] Cho phép bật/tắt (Enable/Disable) quy tắc dễ dàng.

---

## US-21: Nhận thông báo qua Slack/Telegram
**Mô tả:**
> Là một **Developer**, tôi muốn **nhận thông báo cảnh báo qua Slack hoặc Telegram**, để **tôi không cần phải mở Dashboard liên tục mà vẫn nắm bắt được sự cố.**

**Tiêu chí chấp nhận (AC):**
- [ ] Trang cấu hình Webhook cho Slack/Telegram.
- [ ] Cho phép gửi test message để kiểm tra webhook.
- [ ] Định dạng tin nhắn bao gồm: Tên lỗi, Project, Thời điểm phát hiện và link trực tiếp đến Log.

---

## US-22: Quản lý lịch sử cảnh báo (Alert History)
**Mô tả:**
> Là một **Người dùng**, tôi muốn **xem danh sách tất cả các cảnh báo đã từng được gửi đi**, để **phân tích tần suất và các vấn đề lặp lại.**

**Tiêu chí chấp nhận (AC):**
- [ ] Bảng lịch sử hiển thị: Alert Name, Time, Platform, Status (Resolved/Pending).
- [ ] Cho phép đánh dấu một cảnh báo là "Resolved" (Đã xử lý).
- [ ] Thống kê số lượng cảnh báo theo tuần/tháng.
