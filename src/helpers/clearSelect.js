// Доступ до select за допомогою useRef
export function clearSelect(selectInputBrandRef, selectInputPriceRef) {
  selectInputBrandRef.current.innerHTML += '';
  selectInputPriceRef.current.innerHTML += '';
}
