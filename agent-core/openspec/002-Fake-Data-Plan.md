# 📊 Spec: Fake Data Plan - DeployHub

> **Status:** Approved
> **Target:** Development Mocking

## 1. Goal
Cung cấp dữ liệu giả thực tế, mang tính kỹ thuật để kiểm tra giao diện (UI) và trải nghiệm người dùng (UX) mà không cần hệ thống backend thật.

## 2. Data Models & Sample Data

### 📂 Projects (Dự án)
| Field | Type | Sample Value |
| :--- | :--- | :--- |
| `id` | UUID | `proj-72a6d8f` |
| `name` | String | `api-gateway-v2`, `auth-service-node` |
| `status` | Enum | `healthy`, `deploying`, `degraded`, `failed` |
| `lastDeploy` | ISO Date | `2024-04-26T10:30:00Z` |
| `environment` | String | `Production`, `Staging` |

### 🚀 Deployments (Lịch sử triển khai)
| Field | Type | Sample Value |
| :--- | :--- | :--- |
| `id` | String | `dep-477d2bd` |
| `branch` | String | `main`, `feat/auth-v2` |
| `commit` | String | `72a6d8f` |
| `author` | String | `ttcenter` |
| `status` | Enum | `success`, `running`, `failed`, `canceled` |
| `duration` | String | `2m 45s` |

### 📝 Logs (Nhật ký hệ thống)
```text
[2024-04-26 13:50:17] INFO: Initializing application...
[2024-04-26 13:50:18] DEBUG: Connecting to database at postgres://localhost:5432
[2024-04-26 13:50:19] SUCCESS: Server running on port 3000
[2024-04-26 13:51:02] WARN: High memory usage detected (85%)
```

### 🔔 Alerts (Cảnh báo)
- `level`: `critical`, `warning`, `info`
- `message`: "CPU Usage exceeded 90% on node-01", "SSL Certificate expiring in 3 days"

## 3. Implementation
- Tạo file `apps/web/lib/mock-data.ts` (hoặc tương đương).
- Xuất các hằng số dữ liệu hoặc các hàm generator để sử dụng trong các components.
