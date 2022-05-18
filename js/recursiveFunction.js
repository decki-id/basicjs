function rekursif(x) {
    // base case
    if (x === 10001) return;
    console.log(x);
    rekursif(x + 1);
}

rekursif(1);