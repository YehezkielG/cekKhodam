let cek = document.getElementById("cek");
let inputNama = document.getElementById("getNama");

cek.addEventListener("click",()=>{
    cekkhodam();
})

inputNama.addEventListener("keydown",()=>{
    if (event.key === 'Enter') {
        cekkhodam();
    }
})

function cekkhodam(){    
    document.getElementById("result").innerHTML = `<img src="image/loading.gif" width="80" alt="" class="mt-36">`
    fetch("khodam.json")
        .then(response => response.json())
        .then((result)=>{
            console.log(result.khodam);
            let max = result.khodam.length;
            let min = 0
            let random = Math.random() * (max - min) + min;
            random = Math.floor(random);
            document.getElementById("postNama").textContent = `Khodam yang ada dalam diri ${inputNama.value} :`;
            document.getElementById("result").innerHTML = `
            <div>
            <div class="rounded-md overflow-hidden border-2">
            <img src="image/${result.khodam[random][1]}" alt="khodam" class="" style="width:380px;">
            </div>
            <p class="text-3xl text-blue-400 m-4">${result.khodam[random][0]}</p></div>
            `
            inputNama.value = "";
        })
}