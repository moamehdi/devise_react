import './App.css'

function App() {

  //Création d'un objet qui contient les devises et leur taux de conversion
  const currency = {
    USD: { EUR: 0.85, GBP: 0.75 },
    EUR: { USD: 1.18, GBP: 0.84 },
    GBP: { USD: 1.33, EUR: 1.19 }
  };

  //Fonction qui permet de convertir la valeur donné par l'utilisateur dans la devise qu'il souhaite
  const convert = () => {
    const amount = parseFloat(document.getElementById('amount').value);
    const fromCurrency = document.getElementById('fromCurrency').value;
    const toCurrency = document.getElementById('toCurrency').value;
    const result = amount * currency[fromCurrency][toCurrency];
    if(result){
    document.getElementById('result').innerText = `Le Montant convertie est égale à: ${result.toFixed(2)} ${toCurrency}`;
  }
  else{
    document.getElementById('result').innerText = `Le Montant ne peut pas être convertie`
  }
  };

  //switch la devise à convertir avec celle convertie
  const switchCurrencies = () => {
    const fromCurrency = document.getElementById('fromCurrency');
    const toCurrency = document.getElementById('toCurrency');
    const tampon = fromCurrency.value;
    fromCurrency.value = toCurrency.value;
    toCurrency.value = tampon;
  };
  
  //bloc html de l'application
  return (
    <>
      <div id="converter">
        <input
          type="number"
          id="amount"
          placeholder="Enter amount"
        />
        <select id="fromCurrency">
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="GBP">GBP</option>
        </select>
        <button onClick={switchCurrencies}>⇅</button>
        <select id="toCurrency">
          <option value="EUR">EUR</option>
          <option value="USD">USD</option>
          <option value="GBP">GBP</option>
        </select>
        <button onClick={convert}>Convert</button>
        <div id="result"></div>
      </div>
    </>
  )
}

export default App
