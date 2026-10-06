# 📝 Nhật Ký Kỹ Thuật & Prompt Log — Tuần 04: Design System & Responsive

> **Học viên:** Trần Lê Minh Huy  
> **Trường:** Đại học Lạc Hồng (LHU) — Khoa Công Nghệ Thông Tin  
> **Môn học:** Thiết kế Web (111101)  
> **Chủ đề:** Design System & Tư Duy Mobile First (CSS Variables, Media Queries & Responsive)

---

## 1. Mục Tiêu & Yêu Cầu Kỹ Thuật
- Nắm vững tư duy **Mobile First**: Viết CSS mặc định cho thiết bị di động trước, sau đó dùng `min-width` mở rộng dần cho Tablet và Desktop.
- Xây dựng hệ thống **Design Tokens** đồng bộ: Toàn bộ bảng màu, khoảng cách (spacing), bán kính góc (border-radius), và cỡ chữ (typography) phải khai báo bằng CSS Custom Properties (`--var`).
- Ứng dụng các kỹ thuật co giãn tự động: `repeat(auto-fit, minmax(...))` và chuyển đổi giao diện Dark / Light Mode tức thời.

---

## 2. Danh Sách Prompt Kỹ Thuật & Giải Pháp Triển Khai

### 🎯 Bài 01: Responsive Typography Scale (`week4/ex01-typography`)
- **Prompt:**
  > "Hãy thiết kế một hệ thống cấp bậc cỡ chữ động (Typography Scale) gồm H1, H2, H3 và văn bản Body Text. Mọi kích cỡ font phải được lưu bằng biến CSS tại `:root`. Tạo một Media Query tại mốc 600px để tự động giảm cỡ chữ font khi ở màn hình điện thoại, ngăn chặn hiện tượng tràn chữ hoặc ngắt dòng không mong muốn."
- **Giải Pháp Thực Hiện:**
  - Định nghĩa biến tại `:root` và ghi đè kích thước theo breakpoint:
    ```css
    :root {
        --fs-h1: 2.75rem;
        --fs-h2: 2rem;
        --fs-h3: 1.5rem;
        --fs-body: 1rem;
    }
    @media (max-width: 600px) {
        :root {
            --fs-h1: 2rem;
            --fs-h2: 1.6rem;
            --fs-h3: 1.25rem;
            --fs-body: 0.925rem;
        }
    }
    ```

---

### 🎯 Bài 02: Adaptive Card Layout (`week4/ex02-adaptive-card`)
- **Prompt:**
  > "Xây dựng thẻ sản phẩm thích ứng theo triết lý Mobile First: Mặc định trên màn hình nhỏ di động, thẻ được xếp theo chiều dọc (ảnh phía trên, nội dung chữ bên dưới) dùng `flex-direction: column`. Khi màn hình đạt độ rộng từ 768px trở lên, thẻ tự động chuyển sang chiều ngang (ảnh bên trái, nội dung bên phải) dùng `flex-direction: row`."
- **Giải Pháp Thực Hiện:**
  - CSS Mobile First mặc định:
    ```css
    .adaptive-card {
        display: flex;
        flex-direction: column;
    }
    @media (min-width: 768px) {
        .adaptive-card {
            flex-direction: row;
        }
        .card-media {
            flex: 0 0 42%;
        }
    }
    ```

---

### 🎯 Bài 03: Smart Navigation Bar (`week4/ex03-smart-nav`)
- **Prompt:**
  > "Tạo thanh điều hướng thông minh đa màn hình: Trên máy tính để bàn (Desktop), menu hiển thị danh sách các mục liên kết nằm ngang. Trên màn hình di động (&lt; 768px), danh sách menu bị ẩn đi bằng `display: none` và xuất hiện nút Hamburger 3 gạch. Khi bấm vào nút Hamburger, menu trượt xuống êm ái và biểu tượng biến thành dấu X."
- **Giải Pháp Thực Hiện:**
  - Xử lý ẩn/hiện theo breakpoint và kỹ thuật checkbox hack thuần CSS hoặc JavaScript:
    ```css
    @media (max-width: 768px) {
        .menu {
            display: none;
            flex-direction: column;
            width: 100%;
        }
        #menu-toggle:checked ~ .menu {
            display: flex;
        }
        .hamburger {
            display: flex;
        }
    }
    ```

---

### 🎯 Bài 04: Dark / Light Mode System (`week4/ex04-theme`)
- **Prompt:**
  > "Xây dựng hệ thống giao diện 2 chế độ Sáng / Tối hoàn chỉnh: Khai báo bộ biến màu giao diện sáng tại `:root` và bộ biến màu giao diện tối tại lớp `body.dark`. Khi bấm nút chuyển đổi (Toggle), toàn bộ màu nền, màu chữ và bóng viền của trang phải chuyển đổi đồng bộ mượt mà nhờ thuộc tính `transition`."
- **Giải Pháp Thực Hiện:**
  - Cấu trúc Design Tokens 2 tầng:
    ```css
    :root {
        --bg-main: #f8fafc;
        --text-main: #0f172a;
        --card-bg: #ffffff;
    }
    body.dark {
        --bg-main: #090d16;
        --text-main: #f1f5f9;
        --card-bg: rgba(22, 27, 46, 0.7);
    }
    body {
        background-color: var(--bg-main);
        color: var(--text-main);
        transition: background-color 0.3s ease, color 0.3s ease;
    }
    ```

---

### 🎯 Bài 05: Responsive Image Gallery (`week4/ex05-gallery`)
- **Prompt:**
  > "Tạo lưới trưng bày hình ảnh phản hồi tự động hoàn toàn mà không cần viết các câu lệnh Media Queries thủ công. Ứng dụng công thức `repeat(auto-fit, minmax(250px, 1fr))` trong CSS Grid. Từng ô ảnh phải có tỷ lệ co giãn đồng đều và hiệu ứng phóng to nhẹ khi di chuột."
- **Giải Pháp Thực Hiện:**
  - Cấu hình CSS Grid Auto-Fit:
    ```css
    .responsive-gallery {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 20px;
    }
    .gallery-img {
        width: 100%;
        height: 240px;
        object-fit: cover;
        border-radius: var(--radius-md);
        transition: transform 0.4s var(--ease-spring);
    }
    .gallery-item:hover .gallery-img {
        transform: scale(1.05);
    }
    ```

---

### 🎯 Bài 06: Mobile-First Contact Form (`week4/ex06-contact`)
- **Prompt:**
  > "Thiết kế biểu mẫu liên hệ chuyên nghiệp theo nguyên tắc Mobile First: Mặc định trên di động, các trường nhập liệu (Input, Select, Textarea) và nút gửi chiếm trọn 100% chiều rộng để dễ thao tác ngón cái. Trên màn hình máy tính (&ge; 768px), giới hạn `max-width: 720px` và căn giữa màn hình với hiệu ứng phản hồi trạng thái gửi thành công."
- **Giải Pháp Thực Hiện:**
  - Bố cục co giãn Mobile First:
    ```css
    .contact-card {
        width: 100%;
        margin: 0 auto;
    }
    .form-group input, .form-group textarea {
        width: 100%;
        padding: 14px 16px;
    }
    @media (min-width: 768px) {
        .contact-card {
            max-width: 720px;
            padding: 40px;
        }
    }
    ```

---

## 3. Bài Học & Đánh Giá
- **Tư duy Mobile First:** Giúp mã nguồn CSS gọn gàng hơn vì cấu trúc trên di động luôn đơn giản nhất. Mở rộng dần bằng `min-width` hạn chế tối đa việc ghi đè (override) CSS phức tạp.
- **Sức mạnh của CSS Custom Properties:** Cho phép thay đổi toàn bộ chủ đề giao diện Dark/Light Mode chỉ trong 1 dòng mã gắn/gỡ class `dark` trên `<body>`.
- **CSS Grid Auto-Fit:** Tiết kiệm hàng chục dòng Media Query trong việc xây dựng lưới sản phẩm hoặc thư viện ảnh đa thiết bị.
