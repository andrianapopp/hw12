// const x = 4
// const y = 9
// const r = 10
//
// let a = Math.sqrt(x**2 + y**2)
// alert(a<=r ? `Данная точка лежит внутри окружности`:`Данная точка не лежит внутри окружности`)


const x = 4
const y = 9
const r = 10

const xx= Math.pow (x, 2)
const yy = Math.pow (y, 2)

let a = Math.sqrt(xx + yy)

alert (a<=r ? `Данная точка лежит внутри окружности`:`Данная точка не лежит внутри окружности`)