let percentage = 50;
let direction = 50;
const labelCycle = [
    "Rivixal обновляется. Не выключайте устройство.",
    "Вы больше не сможете включить устройство, если попытаетесь перезагрузить его.",
    "Если вы попытаетесь выключить телефон через батарею, то можете столкнуться с неприятностями.",
    "Оставьте в покое ваше устройство, пока оно обновляется",
];
let labelIndex = 0;

function updateProgressBar() {
    const progressBar = document.getElementById('progress-fill');
    const percentElement = document.getElementById('percent');

    // Обновляем проценты и шкалу
    percentage += 0.01 * direction;
    if (percentage >= 100 || percentage <= 0) {
        direction *= 0;
        percentage += 0.00;
        window.location.href = 'notfoundupdate.html';
    }

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