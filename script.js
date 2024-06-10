document.addEventListener('DOMContentLoaded', (event) => {
    const fixedWindow = document.querySelector('.fixed-window');

    // Initial positions
    let offsetX, offsetY;
    let isDragging = false;

    // Mouse down event to start dragging
    fixedWindow.addEventListener('mousedown', (e) => {
        offsetX = e.clientX - fixedWindow.getBoundingClientRect().left;
        offsetY = e.clientY - fixedWindow.getBoundingClientRect().top;
        isDragging = true;
    });

    // Mouse move event to handle dragging
    document.addEventListener('mousemove', (e) => {
        if (isDragging) {
            fixedWindow.style.left = `${e.clientX - offsetX}px`;
            fixedWindow.style.top = `${e.clientY - offsetY}px`;
        }
    });

    // Mouse up event to stop dragging
    document.addEventListener('mouseup', () => {
        isDragging = false;
    });

    // Update button functionality
    document.getElementById('update-button').addEventListener('click', () => {
        const uid = document.getElementById('input-uid').value;
        const name = document.getElementById('input-name').value;
        const subject = document.getElementById('input-subject').value;
        const grade = document.getElementById('input-grade').value;

        if (uid) {
            document.getElementById('uid').innerText = `报名号：${uid}`;
        }
        if (name) {
            document.getElementById('name').innerText = `姓名：${name}`;
        }
        if (subject) {
            document.getElementById('subject_name').innerHTML = `${subject}<br>等级考等级`;
        }
        if (grade) {
            document.getElementById('subject_grade').innerText = grade;
        }
    });
});
