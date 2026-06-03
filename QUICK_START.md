# ⚡ QUICK START GUIDE - Hướng Dẫn Nhanh (2 phút)

## 🎯 Cách 1: Dùng Node.js (Khuyến Nghị)

### Bước 1️⃣: Chuẩn Bị
```bash
# Giải nén file
unzip posealert-v6-fixed.zip
cd posealert-v6-fixed

# Cài đặt dependencies
npm install
```

### Bước 2️⃣: Chạy
```bash
# Khởi động development server
npm run dev

# Trình duyệt sẽ tự mở tại:
# http://localhost:5173
```

### Bước 3️⃣: Sử Dụng
- Chọn **Mô Phỏng** hoặc **Webcam Thực**
- Nếu webcam: Cho phép quyền camera
- Ngồi sai tư thế > 5 giây → Cảnh báo âm thanh 🔊

✅ **Done!** Ứng dụng chạy ngay.

---

## 🎮 Cách 2: Standalone (Không Cần Node.js)

### Bước 1️⃣: Tạo Thư Mục
```
Tạo thư mục trống tên: posealert
```

### Bước 2️⃣: Copy Files
```
Lấy từ tab "Code" trong ứng dụng:
├─ Chọn "1. index.html" → Copy → Dán vào file
├─ Chọn "2. style.css"  → Copy → Dán vào file
└─ Chọn "3. script.js"  → Copy → Dán vào file
```

### Bước 3️⃣: Chạy
```
1. Chuột phải vào index.html
2. Chọn "Open with Live Server"
   (Nếu chưa có: VS Code → Extension → Live Server)
3. Trình duyệt mở tự động ✨
```

✅ **Done!** Dùng luôn.

---

## 🚀 Build for Production

```bash
# Build optimized version
npm run build

# Output: dist/ folder (upload lên server)
# VD: Vercel, Netlify, GitHub Pages
```

---

## ⚙️ System Requirements

```
✅ Browser: Chrome, Edge, Firefox (mới)
✅ Webcam: HD 720p (cho camera mode)
✅ Internet: Để tải AI model (sau đó offline được)
⚠️ Chạy trên LOCALHOST, KHÔNG dùng IP address!
```

---

## 🐛 Troubleshooting (Nếu Lỗi)

### ❌ Camera không hoạt động
```
→ Click biểu tượng 🔒 camera trên thanh địa chỉ
→ Chọn "Allow"
→ Reload trang F5
```

### ❌ Không nghe thấy âm thanh cảnh báo
```
→ Click nút 🔊 góc trên bên phải (bật âm thanh)
→ Check volume hệ thống
→ Check browser volume (không được mute)
```

### ❌ Model load timeout
```
→ Kiểm tra internet connection
→ F5 reload trang
→ Đợi 30 giây, thử lại
→ Thử trình duyệt khác
```

### ❌ Pose detection không chính xác
```
→ Tăng đèn phòng (ánh sáng)
→ Đứng/ngồi cách camera 1-2 mét
→ Đảm bảo cơ thể toàn bộ trong frame
→ Không mặc quần áo quá rộng/tối
```

---

## 📚 Tài Liệu Chi Tiết

Sau khi chạy, xem:
- **README.md** - Hướng dẫn đầy đủ
- **CHANGELOG.md** - Danh sách thay đổi
- **FIXES.md** - Lỗi & giải pháp
- **VISUAL_SUMMARY.md** - So sánh chi tiết

---

## 🎉 Tính Năng Chính

✅ Phát hiện tư thế ngồi sai  
✅ Cảnh báo âm thanh sau 5 giây  
✅ Thống kê sức khỏe chi tiết  
✅ Pomodoro timer tích hợp  
✅ Ghi log vi phạm  
✅ Không cần training data  
✅ Hoạt động offline (sau load model)  

---

## ⭐ Support

Nếu gặp vấn đề:
1. Xem **Troubleshooting** phía trên
2. Kiểm tra **Browser Console** (F12)
3. Thử trình duyệt khác
4. Clear cache & reload

---

## 🔐 Privacy

✅ Không upload video/ảnh  
✅ Xử lý 100% local (trên máy)  
✅ Không lưu dữ liệu  
✅ Close app → Dữ liệu xóa  

---

**Version**: 6.1 | **Status**: ✅ Production Ready  

🚀 **Thôi nào, bắt đầu dùng ngay!** 🚀
