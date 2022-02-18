var tanya = true;

while (tanya) {
    // Menangkap pilihan player & siapkan variabel hasil
    var p = prompt('Pilih (Gajah, Semut, Orang):');

    if (p != null) {
        var hasil = '';

        // Menangkap pilihan player & memunculkan bilangan random
        var comp = Math.random();
        if (comp < 0.34) {
            comp = 'Gajah';
        } else if (comp >= 0.34 && comp < 0.67) {
            comp = 'Orang';
        } else {
            comp = 'Semut';
        }

        // Menentukan rules
        if (p == comp) {
            hasil = 'SERI!';
        } else if (p == 'Gajah') {
            // if (comp == 'Orang') {
            //     hasil = 'MENANG!';
            // } else {
            //     hasil = 'KALAH!';
            // }
            hasil = (comp == 'Orang') ? 'MENANG!' : 'KALAH!';
        } else if (p == 'Orang') {
            hasil = (comp == 'Gajah') ? 'KALAH!' : 'MENANG!';
        } else if (p == 'Semut') {
            hasil = (comp == 'Orang') ? 'KALAH!' : 'MENANG!';
        } else {
            hasil = 'Pilihanmu salah!';
        }

        // Alert
        alert('Kamu memilih: ' + p + ', dan Komputer memilih: ' + comp + '.\nHasil: Kamu ' + hasil);

        // Lagi atau udahan
        tanya = confirm('Lagi?');
    } else {
        tanya = false;
    }
}