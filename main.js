var spaghetti = {
    reverse: function (text, splitter) {
        var setSplitter = splitter || '';
        var string = text.split(setSplitter);
        string = string.reverse();
        string = string.join(setSplitter);
        return string;
    },
    generate: function () {
        var string = spaghetti.cook(Math.floor(Math.random()*100000000000000001+1).toString(36).slice(-11).toString(Math.floor(Math.random()*36+1)),'dkjafsldkxzczlseqer',0.03);
        return string;
    },
    stir: function (text) {
        var length = text.length;
        var arr = text.split('');
        var stirredString = '';
        for (var i = 0; i < length; i++) {
            var number = Math.floor(Math.random() * arr.length);
            var selected = arr[number];
            stirredString += selected;
            arr.splice(number, 1);
        }
        return stirredString;
    },
    capitalizeFirst: function (text) {
        var split = text.split(' ');
        var total = '';
        split.forEach(function (element) {
            total += element.charAt(0).toUpperCase() + element.slice(1) + ' ';
        });
        total = total.slice(0, -1);
        return total;
    },
    cook: function (text, password, oven_heat_level) {
        var seed = password.split('');
        var arr = [];
        seed.forEach(function (element) {
            element = element.charCodeAt(0);
            element *= oven_heat_level;
            arr.push(element);
        });
        seed = arr;
        var string = text.split('');
        arr = [];
        string.forEach(function (element, index) {
            element = String.fromCharCode(element.charCodeAt(0) + seed[index % seed.length]);
            arr.push(element);
        });
        string = arr.join('');
        if (oven_heat_level > 10000000000000) {
            console.warn('WARNING: The requested oven_heat_level is very high. You may have burnt your spaghetti string. Proceed with caution.')
        }
        return string;
    },
    uncook: function (text, password, oven_heat_level) {
        var seed = password.split('');
        var arr = [];
        seed.forEach(function (element) {
            element = element.charCodeAt(0);
            element *= oven_heat_level;
            arr.push(element);
        });
        seed = arr;
        var string = text.split('');
        arr = [];
        string.forEach(function (element, index) {
            element = String.fromCharCode(element.charCodeAt(0) - seed[index % seed.length]);
            arr.push(element);
        });
        string = arr.join('');
        return string;
    },
    is: function (string, key) {
        this.value = string;
        Object.defineProperty(this, 'value', {
            enumerable: true,
            writable: false
        });
        this.heated = true;
        this.heat = function (heating_key) {
            if (heating_key == key) {
                this.heated = true;
                Object.defineProperty(this, 'value', {
                    enumerable: true,
                    writable: true
                })
            }
        };
        this.freeze = function (freezing_key) {
            if (freezing_key == key) {
                this.heated = false;
                Object.defineProperty(this, 'value', {
                    enumerable: true,
                    writable: false
                })
            }
        };
        this.lock = function () {
            Object.defineProperty(this, 'value', {
                enumerable: false,
                writable: false
            });
        };
        this.unlock = function (unlocking_key) {
            if (unlocking_key == key) {
                Object.defineProperty(this, 'value', {
                    enumerable: true,
                    writable: true
                });
            }
        };
    }
};
