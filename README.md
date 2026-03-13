# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## 🛠️ Hướng dẫn khởi chạy thủ công (Local)
Để tự chạy thử ứng dụng trên máy, mở Terminal và chạy:

```bash
cd c:\Users\sanhnguyen\automation\daily-todo
npm install
npm run dev
```
Sau đó truy cập `http://localhost:5173/` nhé!

---

## 🚀 Hướng dẫn đẩy Code lên GitHub (Git Push)

1. **Khởi tạo kho lưu trữ Git và thêm file**:
   ```bash
   git init
   git add .
   ```

2. **Commit mã nguồn**:
   ```bash
   git commit -m "First commit: Hoàn thành ứng dụng Daily ToDo"
   ```

3. **Chuyển nhánh chính thành `main`**:
   ```bash
   git branch -M main
   ```

4. **Kết nối tới Github Repo và Push**:
   *(Lưu ý: Thay thế `<ho-ten>/<ten-repo>` bằng đường link repo Github thực tế của bạn)*
   ```bash
   git remote add origin https://github.com/<ho-ten>/<ten-repo>.git
   git push -u origin main
   ```

---

## 🐳 Hướng dẫn đóng gói Docker & chạy trên Kubernetes (K8s)

### 1. Đóng gói (Build Image) bằng Docker
Tại thư mục gốc dự án (chứa file `Dockerfile`), chạy lệnh build:
```bash
# Thay username-cua-ban bằng tài khoản Dockerhub của bạn
docker build -t username-cua-ban/daily-todo:latest .
```

### 2. Đẩy Image lên Docker Hub (Push Image)
```bash
docker login
docker push username-cua-ban/daily-todo:latest
```

### 3. Triển khai lên Kubernetes (K8s Deploy)
Mở file `k8s-deployment.yaml` và sửa dòng `image: username-cua-ban/daily-todo:latest` thành tên image bạn vừa Push. 
Sau đó áp dụng cấu hình:
```bash
kubectl apply -f k8s-deployment.yaml
```

### 4. Xác nhận trạng thái
Kiểm tra xem các Pod và Service đã hoạt động chưa:
```bash
kubectl get pods
kubectl get svc daily-todo-service
```
Dùng địa chỉ IP (cột `EXTERNAL-IP`) hoặc cổng (cột `PORT(S)`) từ lệnh thứ hai để truy cập ứng dụng.
