function sortearNumero(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const numeroSorteado = sortearNumero(1, 100);


document.addEventListener('DOMContentLoaded', (event) => {
    const numeroDisplay = document.getElementById('result-values');
});
document.querySelector('button').addEventListener('click', () => {
    const totalResultados = parseInt(document.querySelectorAll('input')[0].value);
    const menorValor = parseInt(document.querySelectorAll('input')[1].value);
    const maiorValor = parseInt(document.querySelectorAll('input')[2].value);
    const resultValues = document.querySelector('.result-values');
    
    resultValues.innerHTML = '';  

    for (let i = 0; i < totalResultados; i++) {
        const numeroSorteado = sortearNumero(menorValor, maiorValor);
        const resultValueDiv = document.createElement('div');
        resultValueDiv.className = 'result-value';
        resultValueDiv.textContent = numeroSorteado;
        resultValues.appendChild(resultValueDiv);
    }

    let storedResults = JSON.parse(localStorage.getItem('storedResults')) || [];
    storedResults.push(numeroSorteado);
    localStorage.setItem('storedResults', JSON.stringify(storedResults));
    }
);