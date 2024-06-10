document.addEventListener('DOMContentLoaded', (event) => {
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
