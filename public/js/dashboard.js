function addTapEffect(element) {
    element.classList.add('moved');
    setTimeout(() => {
        element.classList.remove('moved');
    }, 200);
}

// Add event listeners for both mouse clicks and touch events
document.querySelectorAll('.box').forEach(box => {
    box.addEventListener('click', function() {
        addTapEffect(this);
    });

    box.addEventListener('touchstart', function() {
        addTapEffect(this);
    });
});
