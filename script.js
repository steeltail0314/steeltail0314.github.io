document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.award-btn');
    const overlay = document.querySelector('.overlay');
    const pdfViewer = document.getElementById('pdf-viewer');
    const pdfFrame = document.getElementById('pdf-frame');

    buttons.forEach(button => {
        button.addEventListener('click', function(event) {
            const button = event.target;
            const pdfSrc = button.getAttribute('data-pdf');

            // 如果按鈕是 PDF 顯示
            if (pdfSrc) {
                pdfFrame.src = pdfSrc;
                pdfViewer.style.display = 'block';
                overlay.style.display = 'block';
            }

            // 顯示獎狀圖片
            const imageContainer = button.nextElementSibling;
            if (imageContainer.classList.contains('award-image')) {
                const imageSrc = button.getAttribute('data-image');
                const image = imageContainer.querySelector('img');
                image.src = imageSrc;
                imageContainer.style.display = 'block';
                overlay.style.display = 'block';
            }
        });
    });

    // 點擊遮罩隱藏所有獎狀和 PDF
    overlay.addEventListener('click', hideAward);

    function hideAward(event) {
        event.stopPropagation();
        document.querySelectorAll('.award-image, .award-pdf').forEach(container => {
            container.style.display = 'none';
        });
        overlay.style.display = 'none';
        pdfFrame.src = '';  // 清空 iframe 避免載入過多
    }
});
