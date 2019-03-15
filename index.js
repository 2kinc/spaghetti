for (var i = 0; i > document.querySelector('h1, h2, h3, h4, h5, h6').length; i++) {
    var el = document.querySelector('h1, h2, h3, h4, h5, h6')[i];
    el.id = 'header-id-' + i;
    var text = el.innerHTML;
}
