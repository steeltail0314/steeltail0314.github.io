document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.award-btn');
    const overlay = document.querySelector('.overlay');

    buttons.forEach(button => {
        button.addEventListener('click', function(event) {
            const button = event.target;
            const container = button.nextElementSibling;

            // 顯示獎狀圖片
            if (container.classList.contains('award-image')) {
                const imageSrc = button.getAttribute('data-image');
                const image = container.querySelector('img');
                image.src = imageSrc;
                container.style.display = 'block';
                overlay.style.display = 'block';
            }

            // 顯示 PDF 獎狀
            if (container.classList.contains('award-pdf')) {
                const isVisible = container.style.display === 'block';
                document.querySelectorAll('.award-pdf').forEach(div => div.style.display = 'none');
                container.style.display = isVisible ? 'none' : 'block';
                overlay.style.display = isVisible ? 'none' : 'block';
            }

            // 添加關閉按鈕 (避免重複添加)
            if (!container.querySelector('.close-btn')) {
                const closeBtn = document.createElement('button');
                closeBtn.innerHTML = '&times;';
                closeBtn.className = 'close-btn';
                closeBtn.addEventListener('click', hideAward);
                container.appendChild(closeBtn);
            }
        });
    });

    // 點擊遮罩隱藏獎狀或 PDF
    if (overlay) {
        overlay.addEventListener('click', hideAward);
    } else {
        console.error("Overlay element not found.");
    }

    function hideAward(event) {
        event.stopPropagation();
        document.querySelectorAll('.award-image, .award-pdf').forEach(container => {
            container.style.display = 'none';
        });
        overlay.style.display = 'none';
    }
});
