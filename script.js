document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.award-btn');
    const overlay = document.querySelector('.overlay');
    
    buttons.forEach(button => {
        button.addEventListener('click', showAward);
    });

    overlay.addEventListener('click', hideAward);

    function showAward(event) {
        const button = event.target;
        const imageSrc = button.getAttribute('data-image');
        const imageContainer = button.nextElementSibling;
        const image = imageContainer.querySelector('img');

        // 移除舊的關閉按鈕（如果存在）
        const oldCloseBtn = imageContainer.querySelector('.close-btn');
        if (oldCloseBtn) {
            oldCloseBtn.remove();
        }

        // 創建新的關閉按鈕
        const closeBtn = document.createElement('button');
        closeBtn.innerHTML = '&times;';
        closeBtn.className = 'close-btn';
        closeBtn.addEventListener('click', hideAward);

        // 將關閉按鈕添加到圖片容器
        imageContainer.insertBefore(closeBtn, imageContainer.firstChild);

        image.src = imageSrc;
        imageContainer.style.display = 'block';
        overlay.style.display = 'block';
    }

    function hideAward(event) {
        // 防止點擊事件傳播到 overlay
        event.stopPropagation();

        document.querySelectorAll('.award-image').forEach(container => {
            container.style.display = 'none';
        });
        overlay.style.display = 'none';
    }
});