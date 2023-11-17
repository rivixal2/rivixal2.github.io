let percentage = 20;
let direction = 44;
const labelCycle = [
    "Сайт Rivixal обновляется.",
    "Введется крупное обновление нашего сайта",
    "Мы постепенно улучшаем сайт, добавляя туда много фишек",
    "Сайт не только улучшается фишками, но и улучшается в плане дизайна",
];
let labelIndex = 0;

function updateProgressBar() {
    const progressBar = document.getElementById('progress-fill');
    const percentElement = document.getElementById('percent');

    progressBar.style.width = percentage + '%';
    percentElement.textContent = percentage.toFixed(2);
}

// Запускаем обновление каждые 50 миллисекунд (0.05 секунды)
setInterval(updateProgressBar, 50);

// Изменение текста каждые 10 секунд в цикле
function updateLabel() {
    const labelElement = document.getElementById('label');
    labelElement.innerHTML = labelCycle[labelIndex];
    labelIndex = (labelIndex + 1) % labelCycle.length;
}
setInterval(updateLabel, 10000);

document.addEventListener("DOMContentLoaded", function() {
    updateProgressBar();
    updateLabel();
});