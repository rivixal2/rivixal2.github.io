window.onload = function() {
    // Воспроизведение аудио
      // Создаем новый Audio объект
    var audio = new Audio('../root/startup.mp3');

    setTimeout(function() {
        document.getElementById("audio").muted = false;
      }, 5000); // Включение звука через 5 секунд
  
    // Начинаем воспроизведение звука
    audio.play();
  
    // Появление логотипа
    var logo = document.querySelector('.logo');
    setTimeout(function() {
      logo.style.opacity = '1';
    }, 500); // Появление логотипа через 1 секунду (можно изменить по желанию)
  };