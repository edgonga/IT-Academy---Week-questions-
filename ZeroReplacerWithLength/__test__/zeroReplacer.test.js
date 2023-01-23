const zeroReplacer = require ('../zeroReplacer')

test("recibe algo que no es un string", () => {
    expect(zeroReplacer(2)).toBe("El input debe ser un string")
  })

test("recibe algo que no es un string", () => {
    expect(zeroReplacer("1234500362000440")).toBe("1234523623441")
  })