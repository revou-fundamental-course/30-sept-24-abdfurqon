// Ini javascript

console.log("Hello bro");

function validateForm() {
    console.log("validasi terpanggil");
    const inputSuhu = document.getElementById("input-suhu").value;
    
    
    if (inputSuhu == '') {
        alert("Inputan Anda kosong!")
    } else {
        calculate(inputSuhu);
    }
}

function calculate(value) {
    let result = parseInt(value) * 2;
    document.getElementById("hasil-suhu").value = result;
    document.getElementById("cara-hitung-suhu").value = value + ' x 2 = ' + result;

}

function reset() {
    document.getElementById("input-suhu").value = '';
    document.getElementById("hasil-suhu").value = '';
    document.getElementById("cara-hitung-suhu").value = '';
}