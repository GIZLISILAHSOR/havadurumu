// Hava durumu bilgilerini almak için API'yi kullanma fonksiyonu
function havaDurumunuGoster() {
    // Kullanıcıdan şehir ismini al
    const sehir = document.getElementById("sehirInput").value.trim();

    // Eğer şehir ismi boşsa kullanıcıya uyarı göster
    if (sehir === "") {
        alert("Lütfen geçerli bir şehir adı girin.");
        return;
    }

    const apiKey = '2d880e3c71b7d908f4f3143baac5d7d3'; // OpenWeather API anahtarınızı buraya girin
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${sehir}&appid=${apiKey}&units=metric&lang=tr`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            let havaDurumuAlani = document.getElementById("havaDurumuAlani");

            if (data.cod === "404") {
                havaDurumuAlani.innerHTML = `<p>Şehir bulunamadı. Lütfen doğru bir şehir adı girin.</p>`;
            } else {
                havaDurumuAlani.innerHTML = `
                    <h3>Hava Durumu: ${sehir}</h3>
                    <p>Sıcaklık: ${data.main.temp} °C</p>
                    <p>Hava Durumu: ${data.weather[0].description}</p>
                    <p>Rüzgar Hızı: ${data.wind.speed} m/s</p>
                `;
            }
        })
        .catch(error => {
            let havaDurumuAlani = document.getElementById("havaDurumuAlani");
            havaDurumuAlani.innerHTML = `<p>Hava durumu alınırken bir hata oluştu.</p>`;
        });
}