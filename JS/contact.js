// Popup
let popup = document.getElementById("contact-popup");
let closePopup = document.getElementById("close-popup");
let userForm = document.getElementById("userForm");

// Sembunyikan popup saat halaman dimuat
popup.style.display = "none";

// Form Submission
document.getElementById("submitBtn").addEventListener("click", function (e) {
    e.preventDefault();

    let namaBaru = document.getElementById("nama").value;
    let emailBaru = document.getElementById("email").value;
    let genderBaru = document.querySelector("input[name='gender']:checked");
    let pesanBaru = document.getElementById("pesan").value;

    // Simpan data lama
    let namaLama = document.getElementById("info-nama").textContent;
    let emailLama = document.getElementById("info-email").textContent;
    let genderLama = document.getElementById("info-gender").textContent;
    let pesanLama = document.getElementById("info-pesan").textContent;

    // Validasi
    if (!namaBaru || !emailBaru || !genderBaru || !pesanBaru) {
        alert("Mohon isi semua form sebelum submit.");
        return;
    }

    // Ganti placeholder dengan data baru
    if (namaBaru && namaBaru !== namaLama) {
        document.getElementById("info-nama").textContent = namaBaru;
    }
    if (emailBaru && emailBaru !== emailLama) {
        document.getElementById("info-email").textContent = emailBaru;
    }
    if (genderBaru && genderBaru.value !== genderLama) {
        document.getElementById("info-gender").textContent = genderBaru.value;
    }
    if (pesanBaru && pesanBaru !== pesanLama) {
        document.getElementById("info-pesan").textContent = pesanBaru;
    }

    // Reset form setelah submit
    document.getElementById("userForm").reset();

    // Show popup after submit
    popup.style.display = "block";
});

// Tutup popup
closePopup.addEventListener("click", function () {
    popup.style.display = "none";
});


