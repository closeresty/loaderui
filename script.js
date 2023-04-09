const loadingNumber = document.querySelector('#loadingNumber');
const loadingCircle = document.querySelector('.loading-circle');
let load = 0;

setInterval(updateLoader, 150);

function updateLoader() {
  load += (load < 100);
  loadingNumber.innerHTML = load;
  loadingCircle.style.background = 'conic-gradient(from 0deg at 50% 50%, rgba(111, 123, 247, 1) 0%, rgba(155, 248, 244, 1) ' + load + '%, #101012 ' + load + '%)'
}