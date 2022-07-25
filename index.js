/* If browser back button was used, flush cache */
(function () {
    window.onpageshow = function (event) {
        if (event.persisted) {
            window.location.reload();
        }
    };
})();

window.onload = () => {
    const anchors = document.querySelectorAll('a');
    const transition_el = document.querySelector('.transition');
    transition_el.classList.remove('is-active');

    for (let i = 0; i < anchors.length; i++) {
        const anchor = anchors[i];

        anchor.addEventListener('click', e => {
            e.preventDefault();
            let target = e.target.href;

            console.log(transition_el);

            transition_el.classList.add('is-active');

            console.log(transition_el);

            setInterval(() => {
                window.location.href = target;
            }, 350);
        })
    }
}