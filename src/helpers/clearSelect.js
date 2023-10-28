export function clearSelect() {
  let selectInputBrand = document.getElementById('inputBrandText');
  let selectInputPrice = document.getElementById('inputPriceTo');
  selectInputBrand.innerHTML += '';
  selectInputPrice.innerHTML += '';
}
