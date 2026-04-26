# 🚀 OpenSpec: Deployment History Page

Tài liệu này xác định cách trang Lịch sử Triển khai (Deployment History) của DeployHub được triển khai.

## 1. Mục tiêu (Objectives)
Cung cấp cho Developer cái nhìn toàn diện về lịch sử các lần deploy, hỗ trợ truy xuất nguồn gốc (commit hash) và xử lý sự cố nhanh (Rollback/Logs).

## 2. Ánh xạ User Stories (US Mapping)
- **US-13**: Xem danh sách lịch sử (ID, Status, Time, Duration, Author, Commit).
- **US-15**: Nút Rollback cho các phiên bản thành công.

## 3. Giao diện người dùng (UI Specification)

### 🎨 Phong cách thiết kế
- **Mật độ thông tin cao (High Density)**: Theo phong cách "Precise Engineering".
- **Glassmorphism**: Sử dụng `backdrop-blur-md` và border semi-transparent.
- **Màu sắc**: Dark theme (Background `#121315`), Accent (`#c2c1ff`).

### 📊 Các thành phần chính
1. **Header**:
   - Breadcrumb: `Projects / [Project Name] / History`.
   - Title: `Deployment History`.
   - Action: Nút `+ New Deployment`.
2. **Filters & Search**:
   - Ô Search theo Deploy ID hoặc Commit.
   - Tabs bộ lọc: `All`, `Success`, `Failed`, `Cancelled`.
   - Date range selector: `Last 30 days`.
3. **Deployment Table**:
   - **Deploy ID**: Dạng `#dep-XXXX` (font mono).
   - **Status**: 
     - `SUCCESS`: Green indicator.
     - `FAILED`: Red indicator.
     - `CANCELLED`: Gray indicator.
   - **Time & Duration**: Hiển thị ngày giờ và thời gian chạy (vd: 2m 14s).
   - **Author**: Avatar + Tên.
   - **Commit**: Link icon + hash (vd: `a1b2c3d`).
   - **Actions**: Nút `Rollback` (Ghost style), `View Logs`.
4. **Summary Stats (Bottom Cards)**:
   - Success Rate (Last 7d).
   - Avg. Deployment Time.
   - Active Pipelines.

## 4. Kỹ thuật triển khai (Technical Implementation)

### 🏗️ Cấu trúc thư mục & Routing
- **Route**: `/deployments/history`
- **File**: `apps/web/src/routes/deployments/history.tsx`
- **Layout**: Sử dụng `DashboardLayout`.

### 🛠️ Thư viện & Components
- **Router**: `@tanstack/react-router`
- **Icons**: `lucide-react`
- **UI Components**:
  - `Card`, `Table`, `Badge`, `Button`, `Input` từ `@workspace/ui/components`.
  - `Avatar` cho người thực hiện.

### 📦 Dữ liệu (Data Model)
Sử dụng dữ liệu mẫu (mock data) từ `apps/web/src/lib/mock-data.ts`.

---
_Tài liệu này được Milkyway viết và sẽ được duy trì trong suốt quá trình phát triển._
