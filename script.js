document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.award-btn');
    
    buttons.forEach(button => {
        button.addEventListener('mouseenter', showAward);
        button.addEventListener('mouseleave', hideAward);
    });

    function showAward(event) {
        const button = event.target;
        const imageContainer = button.nextElementSibling;
        
        imageContainer.style.display = 'block';
        
        // 調整圖片位置
        const buttonRect = button.getBoundingClientRect();
        imageContainer.style.top = `${buttonRect.bottom + window.scrollY}px`;
        imageContainer.style.left = `${buttonRect.left + window.scrollX}px`;
    }

    function hideAward(event) {
        const button = event.target;
        const imageContainer = button.nextElementSibling;
        
        imageContainer.style.display = 'none';
    }
});