document.addEventListener('DOMContentLoaded', () => {
    const consultationForm = document.getElementById('consultationForm');

    if (consultationForm) {
        consultationForm.addEventListener('submit', function(event) {
            event.preventDefault(); // 기본 폼 제출 방지

            const name = document.getElementById('name').value;
            const region = document.getElementById('region').value;
            const address = document.getElementById('address').value;

            if (name && region && address) {
                alert(`상담 의뢰가 접수되었습니다!\n이름: ${name}\n지역: ${region}\n주소: ${address}`);
                consultationForm.reset(); // 폼 초기화
            } else {
                alert('모든 필드를 채워주세요.');
            }
        });
    }

    // Theme switch logic
    const toggleSwitch = document.getElementById('checkbox');
    const currentTheme = localStorage.getItem('theme');

    // Set initial theme based on localStorage, default to light if not set
    if (currentTheme) {
        document.body.classList.add(currentTheme);
        if (currentTheme === 'dark-theme') {
            toggleSwitch.checked = true;
        }
    } else {
        // If no theme is set, default to light theme
        document.body.classList.add('light-theme');
        localStorage.setItem('theme', 'light-theme');
    }


    function switchTheme(e) {
        if (e.target.checked) {
            document.body.classList.remove('light-theme');
            document.body.classList.add('dark-theme');
            localStorage.setItem('theme', 'dark-theme');
        } else {
            document.body.classList.remove('dark-theme');
            document.body.classList.add('light-theme');
            localStorage.setItem('theme', 'light-theme');
        }
    }

    if (toggleSwitch) {
        toggleSwitch.addEventListener('change', switchTheme, false);
    }
});