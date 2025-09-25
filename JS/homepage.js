// JavaScript Document
window.onload = function () {

    // Ambil elemen
    const popup = document.getElementById("name-popup");
    const input = document.getElementById("name-input");
    const submitBtn = document.getElementById("submit-name");
    const userNameSpan = document.getElementById("user-name");

    // Cek apakah username sudah disimpan
    let savedName = localStorage.getItem("username");

    if (savedName) {
        userNameSpan.textContent = savedName;
        if (popup) popup.style.display = "none"; // langsung sembunyiin popup
    } else {
        if (popup) popup.style.display = "block"; // munculin popup kalau belum ada nama
    }

    // Fungsi submit nama
    function saveName() {
        const username = input.value.trim();
        if (username !== "") {
            userNameSpan.textContent = username;
            localStorage.setItem("username", username); // simpan ke localStorage
            popup.style.display = "none"; // tutup popup
        } else {
            alert("Nama tidak boleh kosong!");
        }
    }

    // Event klik tombol
    if (submitBtn) {
        submitBtn.addEventListener("click", saveName);
    }

    // Event enter
    if (input) {
        input.addEventListener("keypress", (e) => {
            if (e.key === "Enter") {
                saveName();
            }
        });
    }

    // Waktu
    function updateTime() {
        let now = new Date();
        let timeEl = document.getElementById("time");
        if (timeEl) timeEl.textContent = now.toLocaleTimeString();
    }
    setInterval(updateTime, 1000);
    updateTime();

    // Tombol edit nama
    const editBtn = document.getElementById("edit-name");
    if (editBtn) {
        editBtn.addEventListener("click", function () {
            // isi input dengan nama lama biar gampang edit
            let currentName = localStorage.getItem("username") || "";
            input.value = currentName;
            popup.style.display = "flex"; // munculin popup lagi
            input.focus();
        });
    }
}


