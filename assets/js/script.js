const layoutList = document.getElementById('layoutList');
const confirmBtn = document.getElementById('confirmBtn');

document.getElementById('confirmBtn').addEventListener('click', function() {
    var selectedLayout = document.querySelector('li.active').id;
    switch(selectedLayout) {

      case 'mainpage':
        window.location.href = 'https://rivixal.github.io';
        break;

      case 'projects':
        window.location.href = 'projects.html';
        break;

      case 'blog':
        window.location.href = 'blog.html';
        break;

      case 'info':
        window.location.href = 'info.html';
        break;

        case 'rivixalclock':
            window.location.href = 'rivixalclock.html';
            break;

        case 'rivixalcalc':
            window.location.href = 'rivixalcalc.html';
            break;

        case 'generatorqrcode':
            window.location.href = 'generatorqrcode.html';
            break;

      // ... Другие случаи ...
      default:
        alert("Error! Please, select the page");
    }
  });

layoutList.addEventListener('click', function(e) {
  if(e.target.tagName === 'LI') {
    document.querySelectorAll('li').forEach(li => li.classList.remove('active'));
    e.target.classList.add('active');
  }
});

