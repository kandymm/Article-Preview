const share_box = document.querySelector('.share__box');
const share = document.querySelector('#share_image');

share.addEventListener('click', () => {
    share_box.classList.toggle('hidden');
});
