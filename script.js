// scroll top button script 
$(window).on('scroll', function () {
  $('.scroll-top').toggleClass('show', $(window).scrollTop() >= 100);
});

$('.scroll-top').on('click', function () {
  $('html, body').stop().animate({ scrollTop: 0}, 1500);
});

let path = document.querySelector('.scroll-top path');
let length_path = path.getTotalLength();
path.style.strokeDasharray = length_path + " " + length_path;
path.style.strokeDashoffset = length_path;
path.getBoundingClientRect();
path.style.transition = path.style.WebkitTransition = 'stroke-dashoffset 10ms linear';

function updateScrollTop() {
  let offset = $(document).height() - $(window).height();
  path.style.strokeDashoffset = length_path - ($(window).scrollTop() * length_path) / offset;
}

updateScrollTop();
$(window).scroll(updateScrollTop);



/* НАЧАЛО блока ПЕРЕЗАГРУЗКА loader script start */
function loader() {
  document.querySelector('.loader-container').classList.add('active');
}

function fadeOut() {
  setTimeout(loader, 1500);
}

fadeOut();
/* КОНЕЦ блока ПЕРЕЗАГРУЗКА loader script end */



// document.querySelectorAll('.img-container img').forEach(img =>{
//     img.onclick = () => {
//         document.querySelector('.pop-up').style.display = 'blok';
//         document.querySelector('.pop-up img').src = img.getAttribute('src');
//     }
// });

// document.querySelector('.pop-up span').onclick = () => {
//     document.querySelector('.pop-up').style.display = 'none';
// }