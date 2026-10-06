# 📝 Nhật Ký Kỹ Thuật & Prompt Log — Tuần 03: CSS Layout System

> **Học viên:** Trần Lê Minh Huy  
> **Trường:** Đại học Lạc Hồng (LHU) — Khoa Công Nghệ Thông Tin  
> **Môn học:** Thiết kế Web (111101)  
> **Chủ đề:** CSS Layout System (Làm chủ CSS Grid & Flexbox)

---

## 1. Mục Tiêu & Yêu Cầu Kỹ Thuật
- Nắm vững sự khác biệt giữa Flexbox (bố cục 1 chiều: hàng hoặc cột) và CSS Grid (bố cục 2 chiều: hàng và cột đồng thời).
- Loại bỏ hoàn toàn các kỹ thuật lỗi thời như `float`, `clear`, hoặc lạm dụng `position: absolute`.
- Thiết kế giao diện hiện đại theo phong cách **Smart Interface**: Thẻ kính Glassmorphism, hiệu ứng di chuột nổi bật, chuyển động mượt mà và nút bấm đàn hồi.

---

## 2. Danh Sách Prompt Kỹ Thuật & Giải Pháp Triển Khai

### 🎯 Bài 01: Holy Grail Layout (`week3/ex01-holy-grail`)
- **Prompt:**
  > "Hãy tạo bố cục Holy Grail chuẩn mực gồm Header, Nav bar bên trái, Nội dung chính ở giữa, Aside quảng cáo bên phải và Footer ở đáy. Sử dụng CSS Grid 2 chiều với thuộc tính `grid-template-areas`. Yêu cầu chiều cao tối thiểu 100vh và khu vực nội dung chính tự thích ứng co giãn mà không làm vỡ tỉ lệ 2 Sidebar."
- **Giải Pháp Thực Hiện:**
  - Định nghĩa vùng lưới rõ ràng:
    ```css
    .holy-grail {
        display: grid;
        grid-template-columns: 240px 1fr 260px;
        grid-template-rows: auto 1fr auto;
        grid-template-areas:
            "header header header"
            "nav    main   aside"
            "footer footer footer";
        min-height: 100vh;
    }
    ```
  - Áp dụng các thẻ ngữ nghĩa HTML5 (`<header>`, `<nav>`, `<main>`, `<aside>`, `<footer>`).

---

### 🎯 Bài 02: Bảng Giá Dịch Vụ (`week3/ex02-pricing`)
- **Prompt:**
  > "Xây dựng khu vực bảng giá gồm 3 gói dịch vụ Web & AI bằng Flexbox. Các thẻ có chiều cao bằng nhau, gói Nổi bật (Pro) có viền sáng gradient và nhãn badge. Đặc biệt, các nút bấm 'Đăng Ký Ngay' phải luôn nằm thẳng hàng sát mép dưới thẻ dù danh sách tính năng bên trên dài ngắn khác nhau."
- **Giải Pháp Thực Hiện:**
  - Cấu hình thẻ flex: `display: flex; flex-direction: column;`
  - Đẩy nút CTA xuống đáy:
    ```css
    .pricing-btn {
        margin-top: auto;
    }
    ```
  - Thêm hiệu ứng hover nâng thẻ `transform: translateY(-8px) scale(1.02);` với bóng mờ mềm mại.

---

### 🎯 Bài 03: Lưới Ảnh Tự Do Masonry (`week3/ex03-gallery`)
- **Prompt:**
  > "Thiết kế thư viện ảnh dự án nghệ thuật đan xen phong cách Pinterest bằng CSS Grid. Cho phép các ô chiếm 1 cột, 2 cột (`grid-column: span 2`) hoặc 2 hàng (`grid-row: span 2`). Khoảng cách giữa các ảnh đồng nhất là 15px. Yêu cầu bật `grid-auto-flow: dense` để trình duyệt tự lấp đầy khoảng trống."
- **Giải Pháp Thực Hiện:**
  - Khai báo lưới 4 cột linh hoạt:
    ```css
    .masonry-grid {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-auto-rows: 220px;
        grid-auto-flow: dense;
        gap: 15px;
    }
    ```
  - Đặt `object-fit: cover` và `overflow: hidden` cho hình ảnh để zoom nhẹ khi hover.

---

### 🎯 Bài 04: Complex Navigation Bar (`week3/ex04-navbar`)
- **Prompt:**
  > "Tạo thanh Header định hướng gồm 3 nhóm thành phần riêng biệt: Nhóm 1 là Logo thương hiệu, Nhóm 2 là Menu liên kết chính, Nhóm 3 là Cụm tìm kiếm và nút Gọi Hành Động (CTA). Căn chỉnh 3 nhóm dạt đều bằng Flexbox `justify-content: space-between`. Trong đó mục 'Dịch vụ' có menu Dropdown đa cấp hiển thị mượt mà khi hover."
- **Giải Pháp Thực Hiện:**
  - Sử dụng Flexbox dàn ngang với căn chỉnh:
    ```css
    .nav-wrapper {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    ```
  - Cấu trúc Dropdown bằng `position: absolute` kết hợp `opacity`, `transform: translateY(10px)` và `visibility` kích hoạt khi hover vào thẻ cha.

---

### 🎯 Bài 05: Trang Chi Tiết Sản Phẩm (`week3/ex05-product`)
- **Prompt:**
  > "Xây dựng giao diện trang chi tiết sản phẩm thương mại điện tử kết hợp CSS Grid và Flexbox. Chia làm 2 cột: Cột trái (60%) chứa ảnh sản phẩm lớn và danh sách ảnh thumbnail; Cột phải (40%) chứa tên sản phẩm, giá, đánh giá sao, các nút chọn kích thước/màu sắc và bộ đếm số lượng được dàn hàng ngang bằng Flexbox."
- **Giải Pháp Thực Hiện:**
  - Kết hợp 2 mô hình layout:
    ```css
    .product-layout {
        display: grid;
        grid-template-columns: 6fr 4fr;
        gap: 40px;
    }
    .variant-group, .quantity-control {
        display: flex;
        align-items: center;
        gap: 12px;
    }
    ```

---

### 🎯 Bài 06: Admin Panel Dashboard (`week3/ex06-dashboard`)
- **Prompt:**
  > "Tạo giao diện bảng điều khiển quản trị Dashboard: Sidebar bên trái cố định (sticky hoặc fixed) chiếm 250px không cuộn theo trang. Khu vực nội dung bên phải cuộn độc lập, gồm Top Header, 4 Thẻ KPI thống kê dàn hàng ngang bằng CSS Grid, và một Bảng dữ liệu người dùng (Data Table) chiếm trọn vẹn 100% độ rộng với sọc màu zebra stripe."
- **Giải Pháp Thực Hiện:**
  - Cấu trúc 2 cột chính:
    ```css
    .dashboard-container {
        display: grid;
        grid-template-columns: 260px 1fr;
        min-height: 100vh;
    }
    .stats-grid {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 20px;
    }
    ```

---

## 3. Bài Học & Đánh Giá
- **Ưu thế của CSS Grid:** Cực kỳ mạnh mẽ trong việc phân định các khung vùng lớn 2 chiều (Header, Sidebar, Main, Footer hoặc Lưới 4 Thẻ thống kê).
- **Ưu thế của Flexbox:** Tối ưu hóa tuyệt vời cho các chi tiết giao diện 1 chiều (Căn giữa icon, thanh menu dạt đều 2 bên, căn chân nút bấm bằng `margin-top: auto`).
- **Trải nghiệm tương tác:** Việc tích hợp hiệu ứng lò xo CSS `cubic-bezier(0.16, 1, 0.3, 1)` giúp giao diện có cảm giác nhạy bén, sống động như ứng dụng hiện đại.
