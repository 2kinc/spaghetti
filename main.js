var $s = s => new Spaghetti(s);
$s.strings = [];
class Spaghetti {
    constructor(string, notpush) {
    	notpush = notpush || false;
    	this.string = string;
    	if (!notpush) $s.strings.push(this);
   	}
   	*[Symbol.iterator]() {
   	    for (let key in this.string) {
   	        yield key;
   	    }
   	}
    get val() {
        return this.string;
    }
    get len() {
        return this.string.length;
    }
    reverse(d) {
        this.string = this.string.split(d || '').reverse().join('');
        return this.string;
    }
    get reversed() {
        return new Spaghetti(this.string).reverse();
    }
    stir() {
        var a = [...this.string],
            n = a.length;
        for (var i = n - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var tmp = a[i];
            a[i] = a[j];
            a[j] = tmp;
        }
        this.string = a.join("");
        return this.string;
    }
    get stirred() {
        return new Spaghetti(this.string).randomize();
    }
    add(...strings) {
        strings.forEach(string => {
            if (typeof string == 'string') this.string += string;
            else this.string += string.string;
            return this.string;
        });
    }
    remove(...strings) {
        strings.forEach(i => this.string = this.string.replace(i, ''));
        return this.string;
    }
    at(num) {
        return this.string.charAt(num);
    }
    freeze() {
        Object.defineProperty(this, 'string', {
            writable: false
        });
        return this.string;
    }
    heat() {
        Object.defineProperty(this, 'string', {
            writable: true
        });
        return this.string;
    }
    array(splitter) {
        return this.string.split(splitter || '')
    }
    has(s) {
        return this.string.indexOf(s) > -1
    }
    replace(s, t) {
        this.string = this.string.replace(s, t);
        return this.string;
    }
    replaceAt(n, t) {
        this.string = this.string.substr(0, n) + t + this.string.substr(n + t.length);
        return this.string;
    }
    removeAt(n) {
        this.string = n == 0 ? this.string.slice(1) : str.slice(0, index - 1) + str.slice(index);
        return this.string;
    }
    cook(password, oven_heat_level) {
        var arr = [];
        password.split('').forEach(e => arr.push(e.charCodeAt(0) * oven_heat_level));
        var seed = arr,
            string = [...this.string],
            arr = [];
        string.forEach((e, i) => arr.push(String.fromCharCode(e.charCodeAt(0) + seed[i % seed.length])));
        if (oven_heat_level > 1e+13) console.warn('WARNING: The requested heat level is very high. You may have burnt your spaghetti string. Proceed with caution.');
        this.string = arr.join('');
        return this.string;
    }
    uncook(password, oven_heat_level) {
        var arr = [];
        password.split('').forEach(e => arr.push(e.charCodeAt(0) * oven_heat_level));
        var seed = arr,
            string = [...this.string],
            arr = [];
        string.forEach((e, i) => arr.push(String.fromCharCode(e.charCodeAt(0) - seed[i % seed.length])));
        this.string = arr.join('');
        return this.string;
    }
    copy() {
        return new Spaghetti(this.string, true)
    }
    map(f) {
        this.string = [...this.string].map(f).join('');
        return this.string;
    }
    each(f) {
        [...this.string].forEach(f);
        return this.string;
    }
    sort(f) {
        this.string = [...this.string].sort(f).join('');
        return this.string
    }
    hasAt(s, n) {
        return this.string.charAt(n) == s
    }
	addAt(s, n) {
		this.string = this.string.slice(0, n) + s + this.string.slice(n);
		return this.string;
	}
}
$s.alphabet = $s('abcdefghijklmnopqrstuvwxyz');
$s.random = n => $s([...Array(n)].map(i => (~~(Math.random() * 36)).toString(36)).join(''));
