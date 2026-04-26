---
epic: EP-04
status: draft
created: 2026-04-26
---

# Epic 04: Quản lý Deployment

Epic này tập trung vào việc giám sát và điều khiển quy trình triển khai ứng dụng.

## US-13: Xem lịch sử các đợt Deploy
**Mô tả:**
> Là một **Developer**, tôi muốn **xem danh sách lịch sử các lần deploy của một Service**, để **tôi biết ai đã deploy cái gì và khi nào.**

**Tiêu chí chấp nhận (AC):**
- [ ] Danh sách hiển thị: Deploy ID, Thời gian bắt đầu, Thời gian hoàn thành, Người thực hiện, Trạng thái (Success/Failed/Cancelled).
- [ ] Liên kết đến Commit hash của Github tương ứng.

---

## US-14: Theo dõi tiến trình Deploy (Real-time progress)
**Mô tả:**
> Là một **Developer**, tôi muốn **thấy thanh tiến trình và các bước chi tiết đang chạy (Build -> Test -> Deploy)**, để **tôi biết quá trình đang ở giai đoạn nào.**

**Tiêu chí chấp nhận (AC):**
- [ ] Hiển thị danh sách các Step (Build, Artifact, Infrastructure, Finish).
- [ ] Trạng thái từng step được cập nhật ngay lập tức qua Websocket.
- [ ] Hiển thị log của riêng đợt deploy đó để xử lý lỗi nếu Build fail.

---

## US-15: Rollback phiên bản cũ
**Mô tả:**
> Là một **DevOps Engineer**, tôi muốn **có nút Rollback về phiên bản thành công trước đó**, để **tôi có thể phục hồi hệ thống nhanh nhất khi phiên bản mới có lỗi.**

**Tiêu chí chấp nhận (AC):**
- [ ] Chỉ cho phép Rollback về các phiên bản có trạng thái "Success".
- [ ] Yêu cầu xác nhận (Confirmation Dialog) và lý do rollback.
- [ ] Sau khi nhấn Rollback, một tiến trình Deploy mới cho phiên bản cũ sẽ được kích hoạt.

---

## US-16: Hủy đợt Deploy đang chạy (Cancel Deployment)
**Mô tả:**
> Là một **Developer**, tôi muốn **có thể nhấn Hủy (Cancel) một đợt deploy đang chạy**, để **ngăn chặn việc triển khai nếu tôi phát hiện ra sai sót vào phút chót.**

**Tiêu chí chấp nhận (AC):**
- [ ] Nút "Cancel" chỉ hiển thị khi deploy đang ở trạng thái "In-progress".
- [ ] Hệ thống sẽ gửi tín hiệu terminate đến worker đang xử lý deploy.
- [ ] Cập nhật trạng thái đợt deploy thành "Cancelled" và giải phóng tài nguyên.
