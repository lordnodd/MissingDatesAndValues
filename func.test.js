const {solution} = require("./func");
var D = {
  "2019-01-10": 10,
  "2019-01-11": 20,
  "2019-01-15": 10
};
//perform a check on function
test("Solution function exists", () => {
  expect(solution).toBeDefined();
});
//Input not NULL
test("Dictionary D should not be NULL",()=>{
  expect(D).not.toBeNull()
});

//COmparing the Output with required output
test("Returns a dictionary", () => {
  var D1={
    "2019-01-10": 10,
    "2019-01-11": 20,
    "2019-01-12": 17.5,
    "2019-01-13": 15,
    "2019-01-14": 12.5,
    "2019-01-15": 10
  };
  expect(solution(D)).toEqual(D1);
});
