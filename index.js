for (var i = 0; i < document.querySelectorAll('h1, h2, h3, h4, h5, h6').length; i++) {
    var el = document.querySelectorAll('h1, h2, h3, h4, h5, h6')[i];
    el.id = 'header-id-' + i;
    var a = document.createElement('a');
    a.setAttribute('href', '#header-id-' + i);
    a.innerText = '::';
    a.className = 'header-link';
    el.insertBefore(a, el.firstChild);
}
document.querySelector('#actn-btn').addEventListener('click', function() {
	document.querySelector('#actn-p').innerHTML = spaghetti.stir(spaghetti.cook(spaghetti.stir(spaghetti.cook(document.querySelector('#actn-p').innerHTML.italics(''),'d',Math.random()*100000000)),'s',Math.random()*100000000000))
});

document.querySelector('#reverse-demo-button').addEventListener('click', function () {
    document.querySelector('#reverse-demo').innerHTML = spaghetti.reverse(document.querySelector('#reverse-demo').innerHTML);
});