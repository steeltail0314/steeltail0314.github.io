document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.award-btn');
    const overlay = document.querySelector('.overlay');

    console.log(overlay);  // 输出 overlay 变量的值

    buttons.forEach(button => {
        button.addEventListener('click', showAward);
    });

    // 如果 overlay 为 null，将跳过添加事件监听器的步骤
    if (overlay) {
        overlay.addEventListener('click', hideAward);
    } else {
        console.error("Overlay element not found.");
    }

    function showAward(event) {
        const button = event.target;
        const imageSrc = button.getAttribute('data-image');
        const imageContainer = button.nextElementSibling;
        const image = imageContainer.querySelector('img');

        const oldCloseBtn = imageContainer.querySelector('.close-btn');
        if (oldCloseBtn) {
            oldCloseBtn.remove();
        }

        const closeBtn = document.createElement('button');
        closeBtn.innerHTML = '&times;';
        closeBtn.className = 'close-btn';
        closeBtn.addEventListener('click', hideAward);

        imageContainer.insertBefore(closeBtn, imageContainer.firstChild);

        image.src = imageSrc;
        imageContainer.style.display = 'block';
        overlay.style.display = 'block';
    }

    function hideAward(event) {
        event.stopPropagation();

        document.querySelectorAll('.award-image').forEach(container => {
            container.style.display = 'none';
        });
        overlay.style.display = 'none';
    }
});
