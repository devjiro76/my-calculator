const tape = require("tape");
const Processor = require("../src/processor");

tape("#processor Test", t => {
  t.test("15 plus 36", subT => {
    const calc = new Processor();
    const funcType = "plus";
    const x = 15;
    const y = 36;

    calc.input({ type: "number", value: x });
    calc.input({ type: "func", value: funcType });
    calc.input({ type: "number", value: y });

    const res = calc.input({ type: "func", value: "calc" });
    subT.equal(res, 51);
    subT.end();
  });

  t.test("50 minus 11", subT => {
    const calc = new Processor();
    const funcType = "minus";
    const x = 50;
    const y = 11;

    calc.input({ type: "number", value: x });
    calc.input({ type: "func", value: funcType });
    calc.input({ type: "number", value: y });

    const res = calc.input({ type: "func", value: "calc" });
    subT.equal(res, 39);
    subT.end();
  });

  t.test("6 multiply 8", subT => {
    const calc = new Processor();
    const funcType = "multiply";
    const x = 6;
    const y = 8;

    calc.input({ type: "number", value: x });
    calc.input({ type: "func", value: funcType });
    calc.input({ type: "number", value: y });

    const res = calc.input({ type: "func", value: "calc" });
    subT.equal(res, 48);
    subT.end();
  });

  t.test("12 divide 3", subT => {
    const calc = new Processor();
    const funcType = "divide";
    const x = 12;
    const y = 3;

    calc.input({ type: "number", value: x });
    calc.input({ type: "func", value: funcType });
    calc.input({ type: "number", value: y });

    const res = calc.input({ type: "func", value: "calc" });
    subT.equal(res, 4);
    subT.end();
  });

  t.end();
});
