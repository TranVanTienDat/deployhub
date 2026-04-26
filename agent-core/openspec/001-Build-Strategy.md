# 🏗️ Spec: Build Strategy - DeployHub

> **Status:** Approved
> **Epic:** All
> **Reference:** `stitch.md`, `DESIGN.md`, `agent-core/docs/022-User-Stories`

## 1. Overview
Triển khai hệ thống DeployHub Unified Control với thẩm mỹ "Precise Engineering", lấy cảm hứng từ Linear. Ưu tiên trải nghiệm mượt mà, mật độ thông tin cao và hiệu ứng Glassmorphism.

## 2. Technical Stack & Configuration
- **Framework:** Next.js (App Router)
- **Styling:** Tailwind CSS v4 (Alpha/Beta features for better design tokens)
- **Icons:** Lucide React (hoặc các icon pack kỹ thuật như Phosphor)
- **Components:** shadcn/ui (customized to match the precise theme)
- **State Management:** React Context / Server Actions (cho bản demo)

### 🎨 Design Tokens (Tailwind v4)
- `primary`: `#c2c1ff`
- `surface-panel`: `#121315` (rgba white 0.02-0.05 backdrop)
- `border-precise`: `rgba(255,255,255,0.05)`
- `font-feature`: `cv01`, `ss03` enabled.

## 3. Implementation Phases

### Phase 1: Foundation (Design System & Layout)
- [ ] Configure `globals.css` with Inter Variable and custom weights.
- [ ] Implement `RootLayout` with persistent Sidebar (240px) and Glassmorphism effects.
- [ ] Setup `theme-provider` (Dark Mode only as per spec).

### Phase 2: Core Components
- [ ] Precise Buttons (Translucent backgrounds).
- [ ] Data Cards (Subtle borders, specific radius).
- [ ] Status Indicators (Precise colors for Success/Warning/Error).

### Phase 3: Feature Epics
1. **Dashboard (Control Center):** Tổng quan dự án, trạng thái hệ thống.
2. **Deployments:** Pipeline view, logs stream.
3. **Settings & Env Vars:** Quản lý cấu hình.

## 4. Quality Standards
- **Pixel Perfect:** Mọi border phải là 1px semi-transparent.
- **Glassmorphism:** Sử dụng `backdrop-filter: blur(12px)` cho các thành phần nổi.
- **Performance:** Đảm bảo hiệu ứng animation mượt mà (60fps).
