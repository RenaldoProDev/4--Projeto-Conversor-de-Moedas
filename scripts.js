const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select-converted")

function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert") // Valor em Real
    const currencyValueConverted = document.querySelector(".currency-value")// Outros Valores


    const dolarToday = 5.20
    const euroToday = 6.20
    const bitcoinToday = 323.547
    const libraToday = 6.83



    if (currencySelect.value == "dolar") {

        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)

    }

    if (currencySelect.value == "euro") {

        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)

    }

    if (currencySelect.value == "bitcoin") {

        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue / bitcoinToday)
    }

    if (currencySelect.value == "libra") {

        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libraToday)
    }

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)

}

function changeCurrency() {

    const currencyName = document.querySelector("#currency-name")
    const currencyImage = document.querySelector(".currency-img")
    const currencyGif = document.querySelector(".currency-logo-gif")

    if (currencySelect.value == "dolar") {

        currencyName.innerHTML = "Dólar americano"
        currencyImage.src = "./assets/Dolar.png"
        currencyGif.src = "./assets/Moeda 1 Dolar.gif"
    }

    if (currencySelect.value == "euro") {

        currencyName.innerHTML = "Euro"
        currencyImage.src = "./assets/Euro.png"
        currencyGif.src = "./assets/Moeda 1 Euro.gif"
    }

    if (currencySelect.value == "bitcoin") {

        currencyName.innerHTML = "Bitcoin"
        currencyImage.src = "./assets/Bitcoin.png"
        currencyGif.src = "./assets/Moeda 1 Bitcoin.gif"
    }

    if (currencySelect.value == "libra") {

        currencyName.innerHTML = "Libra"
        currencyImage.src = "./assets/Libra.png"
        currencyGif.src = "./assets/Moeda 1 Libra.gif"
    }

    convertValues()
}

currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)

