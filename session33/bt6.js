const weatherData = {
    "Hà Nội": {
        temperature: 25,
        humidity: 70,
        windSpeed: 5,
        description: "Có mây",
        icon: "☁️"
    },
    "Hồ Chí Minh": {
        temperature: 32,
        humidity: 75,
        windSpeed: 7,
        description: "Nắng",
        icon: "☀️"
    },
    "Đà Nẵng": {
        temperature: 28,
        humidity: 82,
        windSpeed: 12,
        description: "Mưa rào",
        icon: "🌧️"
    }
};
function getWeather(city) {
    // Chuyển đổi tên thành phố về chữ hoa để chuẩn hóa
    const formattedCity = city.trim().toLowerCase();
    const cityData = Object.keys(weatherData).find(key => key.toLowerCase() === formattedCity);
    
    if (cityData) {
        return weatherData[cityData];
    } else {
        return null; // Nếu thành phố không tồn tại
    }
}
// Lắng nghe sự kiện cho nút tìm kiếm
document.getElementById("search-button").addEventListener("click", function() {
    const cityInput = document.getElementById("city-input").value;
    const weather = getWeather(cityInput);

    const weatherInfo = document.getElementById("weather-info");
    const errorDiv = document.getElementById("error");

    if (weather) {
        document.getElementById("city-name").innerText = cityInput.charAt(0).toUpperCase() + cityInput.slice(1);
        document.getElementById("temperature").innerText = `Nhiệt độ: ${weather.temperature}°C ${weather.icon}`;
        document.getElementById("description").innerText = `Mô tả: ${weather.description}`;
        document.getElementById("humidity").innerText = `Độ ẩm: ${weather.humidity}%`;
        document.getElementById("wind-speed").innerText = `Tốc độ gió: ${weather.windSpeed} km/h`;
        
        weatherInfo.style.display = "block";
        errorDiv.innerText = "";
    } else {
        weatherInfo.style.display = "none";
        errorDiv.innerText = "Thành phố không tồn tại. Vui lòng thử lại.";
    }
});
