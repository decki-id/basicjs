const box = document.querySelector('.box');
box.addEventListener('click', function () {
    let one = 'size', two = 'caption';

    if (this.classList.contains(one)) {
        [one, two] = [two, one];
    }

    this.classList.toggle(one);
    setTimeout(() => {
        this.classList.toggle(two);
    }, 600);
});