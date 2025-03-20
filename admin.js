// Fungsi Login Admin
document.getElementById('adminForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const user = document.getElementById('username').value;
    const pass = document.getElementById('password').value;

    // Cek kredensial admin
    if (user === 'actzy909' && pass === '3Z^Yk~HaKd6M-spj>PoC') {
        alert('Login berhasil! Anda dapat memantau pembayaran.');
        document.getElementById('adminForm').style.display = 'none'; // Sembunyikan form login
        document.getElementById('dashboard').style.display = 'block'; // Tampilkan dashboard
        tampilkanPesanan(); // Tampilkan daftar pesanan
    } else {
        alert('Login gagal. Coba lagi!');
    }
});

// Fungsi Menampilkan Data Pesanan
function tampilkanPesanan() {
    const pesanan = JSON.parse(localStorage.getItem('pesanan')) || [];
    const orderList = document.getElementById('orderList');
    orderList.innerHTML = '';

    if (pesanan.length === 0) {
        orderList.innerHTML = '<tr><td colspan="4">Belum ada pesanan.</td></tr>';
    }

    pesanan.forEach((item) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.nama}</td>
            <td>${item.nomor}</td>
            <td>${item.paket}</td>
            <td>${item.status ? 'Sudah Bayar' : 'Belum Bayar'}</td>
        `;
        orderList.appendChild(row);
    });
}
