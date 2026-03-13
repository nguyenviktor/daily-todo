# Bước 1: Build ứng dụng React (Môi trường Node.js)
FROM node:20-alpine as build
WORKDIR /app

# Copy package.json và package-lock.json để cài dependencies trước (tối ưu cache)
COPY package*.json ./
RUN npm install

# Copy toàn bộ mã nguồn và 빌드 (build)
COPY . .
RUN npm run build

# Bước 2: Chạy ứng dụng bằng Nginx (Môi trường nhẹ để phục vụ file tĩnh)
FROM nginx:alpine

# Copy kết quả file đã build từ bước 1 sang Nginx thư mục root
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80 cho Nginx container
EXPOSE 80

# Chạy Nginx
CMD ["nginx", "-g", "daemon off;"]
