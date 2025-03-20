// Fungsi Bayar dengan DANA
function bayarDANA() {
    const nama = document.getElementById('nama').value;
    const nomor = document.getElementById('nomor').value;
    const paket = document.getElementById('paket').value;

    if (!nama || !nomor) {
        alert('Harap isi nama dan nomor HP.');
        return;
    }

    // Notifikasi otomatis
    if (Notification.permission === "granted") {
        new Notification("Pesanan Baru!", { body: `${nama} memesan ${paket}` });
    } else if (Notification.permission !== "denied") {
        Notification.requestPermission().then(permission => {
            if (permission === "granted") {
                new Notification("Pesanan Baru!", { body: `${nama} memesan ${paket}` });
            }
        });
    }

    // Redirect ke DANA
    const harga = paket.includes('1 Hari') ? 2000 :
                  paket.includes('1 Minggu') ? 10000 :
                  paket.includes('1 Bulan') ? 40000 :
                  paket.includes('Batu') ? 40000 : 20000;

    const linkDANA = `https://link.dana.id/buy?phone=085520790814&amount=${harga}`;
    alert('Harap tunggu beberapa menit setelah pembayaran.');
    window.location.href = linkDANA;
}

// Login Admin
document.getElementById('adminForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const user = document.getElementById('username').value;
    const pass = document.getElementById('password').value;

    if (user === 'actzy909' && pass === '3Z^Yk~HaKd6M-spj>PoC') {
        alert('Login berhasil! Anda dapat memantau pembayaran.');
        window.location.href = 'admin.html';
    } else {
        alert('Login gagal. Coba lagi!');
    }
});
