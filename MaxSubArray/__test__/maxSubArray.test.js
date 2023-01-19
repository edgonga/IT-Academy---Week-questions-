const maxSubArray = require ('../MaxSubArray')

test("recibe algo que no es un array en el primer parámetro", () => {
    expect(maxSubArray("hola", 2)).toBe("El primer parámetro debe ser un array y el segundo un number")
  })


test("recibe algo que no es un número en el segundo parámetro", () => {
    expect(maxSubArray([3,5,7], "hola")).toBe("El primer parámetro debe ser un array y el segundo un number")
  })


test("devuelve el array de números que maximizan la suma consecutiva respetando el orden", () => {
    expect(maxSubArray([-4,2,-5,1,2,3,6,-5,1], 4)).toEqual([1,2,3,6])
  })