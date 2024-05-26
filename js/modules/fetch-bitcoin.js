export default function fetchBitcoin(url, target) {
  fetch(url)
    .then((r) => r.json())
    .then((btc) => {
      const btcPreco = document.querySelector(target);
      btcPreco.innerText = (1000 / btc.BRL.buy).toFixed(4);
    })
    .catch((erro) => {
      console.log(Error(erro));
    });
}
