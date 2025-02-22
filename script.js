function convertTemperature() {
    const inputTemperature = document.getElementById('inputTemperature').value;
    const unit = document.getElementById('unit').value;
    const resultElement = document.getElementById('result');

    if (inputTemperature === '') {
        resultElement.textContent = 'Please enter a temperature value.';
        return;
    }

    let convertedTemperature;
    if (unit === 'fahrenheit') {
        convertedTemperature = (inputTemperature - 32) * 5 / 9;
        resultElement.textContent = `${inputTemperature}°F is equal to ${convertedTemperature.toFixed(2)}°C`;
    } else {
        convertedTemperature = (inputTemperature * 9 / 5) + 32;
        resultElement.textContent = `${inputTemperature}°C is equal to ${convertedTemperature.toFixed(2)}°F`;
    }
}
