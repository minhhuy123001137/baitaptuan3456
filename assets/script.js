/**
 * TRAN LE MINH HUY - JAVASCRIPT MOTION & INTERACTION SUITE
 * Lấy cảm hứng từ hệ thống tương tác https://minhhuy123001137.github.io/BaiTapMoi/
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Quản lý Dark / Light Mode với localStorage
    const savedTheme = localStorage.getItem('minhhuy-theme');
    if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.body.classList.add('dark');
    }

    window.toggleDarkMode = function() {
        document.body.classList.toggle('dark');
        const isDark = document.body.classList.contains('dark');
        localStorage.setItem('minhhuy-theme', isDark ? 'dark' : 'light');
    };

    document.querySelectorAll('[data-theme-toggle], .theme-toggle-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            toggleDarkMode();
        });
    });

    // 2. Tự động đóng menu di động khi nhấn vào link
    document.querySelectorAll('.menu-link, .nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            const toggle = document.getElementById('menu-toggle');
            if (toggle && toggle.checked) {
                toggle.checked = false;
            }
        });
    });

    // 3. Hiệu ứng Micro-interaction 3D Tilt & Glow khi di chuột qua các Cards
    const cards = document.querySelectorAll('.card, .exercise, .hero-card, .demo');
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = ((y - centerY) / centerY) * -5;
            const rotateY = ((x - centerX) / centerX) * 5;

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = '';
        });
    });

    // 4. Xử lý demo form tương tác
    document.querySelectorAll('form, [data-demo-form]').forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const submitBtn = form.querySelector('button[type="submit"], .btn-submit');
            const originalText = submitBtn ? submitBtn.innerHTML : '';
            
            if (submitBtn) {
                submitBtn.disabled = true;
                submitBtn.innerHTML = '<span>⏳ Đang xử lý...</span>';
            }

            setTimeout(() => {
                if (submitBtn) {
                    submitBtn.disabled = false;
                    submitBtn.innerHTML = '<span>✅ Đã gửi thành công!</span>';
                    setTimeout(() => {
                        submitBtn.innerHTML = originalText;
                        form.reset();
                    }, 2500);
                }
            }, 800);
        });
    });

    // 5. Khởi tạo thư viện AOS nếu có trên trang
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 700,
            easing: 'cubic-bezier(0.16, 1, 0.3, 1)',
            once: true,
            offset: 40
        });
    }
});
