for (var i = 0; i < document.querySelectorAll('h1, h2, h3, h4, h5, h6').length; i++) {
    var el = document.querySelectorAll('h1, h2, h3, h4, h5, h6')[i];
    el.id = 'header-id-' + i;
    var a = document.createElement('a');
    a.setAttribute('href', '#header-id-' + i);
    a.innerText = '::';
    a.className = 'header-link';
    el.insertBefore(a, el.firstChild);
}
/*document.querySelector('#reverse-demo-button').addEventListener('click', function () {
    var string = document.querySelector('#reverse-demo').innerHTML;
    var t1 = performance.now();
    string = spaghetti.reverse(string);
    var t2 = performance.now();
    document.querySelector('#reverse-demo').innerText = string;
    document.querySelector('#reverse-demo-speed').innerText = 'Reversed in ' + (t2 - t1).toFixed(3) + 'ms ' + '(' + Math.floor(1000 / (t2 - t1)) + ' queries per second)';
});*/
