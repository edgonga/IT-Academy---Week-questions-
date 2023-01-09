const capitalizer = require ('../CapitalAfterVowel')

test("recibe algo que no es un string", () => {
    expect(capitalizer(55)).toBe("Deberías introducir un string")
  })

test("recibe un string y convierte en mayúscula todas las letras que preceden a una vocal", () => {
    expect(capitalizer("hello world")).toBe("heLlo WoRld")
})