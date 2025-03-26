function getPackages() {
    return [
        { name: "HTTP/2 Flood", price: 75000 },
        { name: "TLS Fingerprint Spoofing", price: 120000 },
        { name: "JA3 Super Spoof", price: 150000 },
        { name: "HOIC Node.js Edition", price: 200000 },
        { name: "QUIC/HTTP3 Flood", price: 250000 },
        { name: "Smart Adaptive Attack", price: 300000 }
        { name: "APK BIOSKOP", price: 30000}
        { name: "ADP", price: 10000}
        { name: "unban batu", price: 40000}
        { name: "unban spam", price: 20000}
    ];
}
function saveProduct(produk) {
    let produkList = JSON.parse(localStorage.getItem("produk")) || [];
    produkList.push(produk);
    localStorage.setItem("produk", JSON.stringify(produkList));
        }
