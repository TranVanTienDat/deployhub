---
epic: EP-05
status: draft
created: 2026-04-26
---

# Epic 05: Biến môi trường (Env Vars) - [Phase 2]

Epic này tập trung vào quản lý cấu hình và bí mật cho ứng dụng.

## US-17: Thêm mới biến môi trường
**Mô tả:**
> Là một **Developer**, tôi muốn **thêm các cặp Key-Value cho từng môi trường (Dev/Staging/Prod)**, để **ứng dụng có thể chạy với cấu hình tương ứng.**

**Tiêu chí chấp nhận (AC):**
- [ ] Giao diện nhập liệu dạng bảng (Key, Value).
- [ ] Cho phép chọn Scope (Global, Project, hoặc Service cụ thể).
- [ ] Validate Key không chứa ký tự đặc biệt không hợp lệ.

---

## US-18: Ẩn giá trị nhạy cảm (Secrets Masking)
**Mô tả:**
> Là một **Admin**, tôi muốn **các giá trị bí mật (như Database Password) được ẩn đi trên giao diện**, để **đảm bảo an toàn thông tin khi chia sẻ màn hình hoặc làm việc chung.**

**Tiêu chí chấp nhận (AC):**
- [ ] Có checkbox "Secret" khi tạo biến.
- [ ] Nếu là Secret, giá trị sẽ hiển thị dạng dấu sao (********).
- [ ] Có icon "Con mắt" để xem giá trị (yêu cầu quyền truy cập hoặc xác thực lại).

---

## US-19: Đồng bộ Env Vars sang Cloud Provider
**Mô tả:**
> Là một **DevOps Engineer**, tôi muốn **các biến môi trường được tự động cập nhật sang AWS Lambda/GCP Cloud Run khi tôi thay đổi trên Thinkway**, để **đảm bảo sự đồng nhất về cấu hình.**

**Tiêu chí chấp nhận (AC):**
- [ ] Sau khi lưu biến, hệ thống sẽ trigger API update cấu hình sang Platform tương ứng.
- [ ] Hiển thị log đồng bộ để biết quá trình cập nhật sang AWS/GCP thành công hay thất bại.
- [ ] Tự động restart Service nếu Platform yêu cầu restart để nhận cấu hình mới.
