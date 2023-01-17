const adder = require ('../AdderSecondNums')

test("recibe algo que no es un number", () => {
    expect(adder("hola")).toBe("Deberías introducir un dato de tipo Number")
  })


  test("recibe algo que no es un number", () => {
    expect(adder(548915381)).toBe(26)
  })