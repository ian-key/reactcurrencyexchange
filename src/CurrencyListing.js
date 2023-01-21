import React, { useEffect, useState } from 'react'
import './CurrencyListing.css';
import CurrencyInput from './CurrencyInput';

const BASE_URL = 'https://api.frankfurter.app/latest'

function CurrencyListing() {
  const [currencyOptions, setCurrencyOptions] = useState([])
  const [fromCurrency, setFromCurrency] = useState()
  //const [toCurrency, setToCurrency] = useState()
  //const [exchangeValues, setExchangeValue] = useState()
  const [amount, setAmount] = useState(1)
  let resultCurrencies = {}
  let resultValues = {}

  //const [amountInFromCurrency, setAmountInFromCurrency] = useState(true)


  let fromAmount = 1

  useEffect(() => {
    fetch(BASE_URL)
    .then(res => res.json())
    .then(data => {
      setCurrencyOptions([data.base, ...Object.keys(data.rates)])
      setFromCurrency(data.base)
    })
  }, [])

  useEffect(() => {
    if (fromCurrency != null) {
      getResults()
    }
  }, [fromCurrency])

  const getResults = async () => {
    const response = await fetch(`${BASE_URL}?amount=${amount}&from=${fromCurrency}`)
    .then((response) => response.json());
    resultCurrencies = Object.keys(response.rates);
    resultValues = Object.values(response.rates);
    console.log(resultCurrencies)
    console.log(resultValues)
  };

  function handleFromAmountChange(e) {
    setAmount(e.target.value)
    //setAmountInFromCurrency(true)
  }

  return (
    <>
    <div className="container">
      <div className="row">
        <div className="col-12">
        <h1>Currency Listing</h1>
        <CurrencyInput 
          currencyOptions={currencyOptions}
          selectedCurrency={fromCurrency}
          onChangeCurrency={e => setFromCurrency(e.target.value)}
          onChangeAmount={handleFromAmountChange}
          amount={fromAmount}
          />
          </div>
        </div>
      </div>
    </>
  );
}

export default CurrencyListing