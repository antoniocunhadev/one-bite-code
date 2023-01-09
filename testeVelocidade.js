let car1 = 'Palio'
let car2 = 'Gol'

let velocidadeCar1 = 100
let velocidadeCar2 = 100

if (velocidadeCar1 > velocidadeCar2) {
  console.log(car1 + ' é mais rápido que ' + car2);
} else if (velocidadeCar2 > velocidadeCar1) {
  console.log(car2 + ' é mais rápido que ' + car1);
} else {
  console.log('Os dois estão na mesma velocidade');
}