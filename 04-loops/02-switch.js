const myObject = { key: "values" };

switch (myObject) {
  case myObject + 1: // This case will  match
    console.log("Matched!");
    break;
  case { key: "value" }: //this wont match
    console.log("matched");
    break;
  case myObject + "s":
    console.log("s added");
    break;
  default:
    console.log("Not matched!");
}
