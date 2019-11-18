module.exports = function sanitizeMathJax(str) {
    const container = document.createElement('div');

    container.innerHTML = str;

    const renderedMath = container.querySelectorAll('.MathJax');

    renderedMath.forEach(element => {
        const mml = element.getAttribute('data-mathml');
        const parent = element.parentNode;

        parent.innerHTML = mml;
        parent.removeAttribute('class');
        parent.removeAttribute('style');
    });

    container.querySelectorAll('.MathJax_Preview').forEach(el => {
        el.remove();
    });

    return container.innerHTML.replace(/(\r\n|\n|\r)/gm, '');
}
