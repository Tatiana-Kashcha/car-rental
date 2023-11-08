// Доступ до select напряму в DOM (не рекомендується)
// export function clearSelect() {
//   let selectInputBrand = document.getElementById('inputBrandText');
//   let selectInputPrice = document.getElementById('inputPriceTo');
//   selectInputBrand.innerHTML += '';
//   selectInputPrice.innerHTML += '';
// }

// Доступ до select за допомогою useRef
export function clearSelect(selectInputBrandRef, selectInputPriceRef) {
  selectInputBrandRef.current.innerHTML += '';
  selectInputPriceRef.current.innerHTML += '';
}
