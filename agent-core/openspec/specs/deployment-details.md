# 🚀 OpenSpec: Deployment Details Page

Tài liệu này xác định cách trang Chi tiết Deployment (Deployment Details) của DeployHub được triển khai.

## 1. Mục tiêu (Objectives)
Cung cấp giao diện "Phòng điều khiển" cho từng đợt triển khai, cho phép theo dõi tiến trình thực tế, xem log và thực hiện các thao tác quản trị (Cancel/Rollback).

## 2. Ánh xạ User Stories (US Mapping)
- **US-14**: Theo dõi tiến trình thời gian thực (Build -> Test -> Deploy).
- **US-15**: Rollback (cho các đợt thành công).
- **US-16**: Hủy đợt deploy đang chạy (Cancel).

## 3. Giao diện người dùng (UI Specification)

### 🎨 Phong cách thiết kế
- **Command Center Aesthetic**: Sử dụng tông màu tối sâu, các hiệu ứng ánh sáng (glow) cho trạng thái đang chạy.
- **Terminal View**: Khu vực hiển thị log sử dụng font JetBrains Mono, hỗ trợ highlight cú pháp cơ bản.

### 📊 Các thành phần chính
1. **Status Header**:
   - Hiển thị: `Deploy ID`, `Status Badge`, `Project Name`, `Environment`.
   - Action: Nút `Cancel` (chỉ khi đang Running) hoặc `Rollback/Redeploy`.
2. **Deployment Steps (Sidebar/Top Nav)**:
   - Danh sách các giai đoạn:
     1. **Setup**: Khởi tạo môi trường.
     2. **Fetch**: Lấy mã nguồn từ Git.
     3. **Build**: Build Docker image / Compile code.
     4. **Test**: Chạy Unit tests / Integration tests.
     5. **Deploy**: Đẩy lên Cluster/Server.
   - Trạng thái từng bước: `Pending`, `Running`, `Success`, `Failed`.
3. **Log Console (Main Area)**:
   - Khu vực cuộn hiển thị log chi tiết.
   - Hỗ trợ nút: `Scroll to Bottom`, `Clear Logs`, `Download Logs`.
4. **Metadata Info**:
   - Branch, Commit Hash, Author, Duration, Timestamp.

## 4. Kỹ thuật triển khai (Technical Implementation)

### 🏗️ Routing
- **Route**: `/deployments/$deploymentId`
- **File**: `apps/web/src/routes/deployments/$deploymentId.tsx`

### 📦 Dữ liệu mẫu (Enhanced Mock Data)
Cần mở rộng `Deployment` interface:
```typescript
interface DeploymentStep {
  id: string;
  name: string;
  status: 'pending' | 'running' | 'success' | 'failed';
  duration?: string;
}

interface Deployment {
  // ... existing fields
  steps: DeploymentStep[];
  logs: string[]; // Hoặc map theo stepId
}
```

---
_Tài liệu này được Milkyway viết phục vụ yêu cầu của Lão đại._
