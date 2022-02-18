var add = null;

function tambah() {
    for (var a = 0; a < arguments.length; a++) {
        add += arguments[a];
    }
    return add;
}

console.log(tambah(2, 2, 2, 2));