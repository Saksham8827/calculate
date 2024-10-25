import { useState } from "react";

const Calculate = () => {
  let [basicsalary, setbasicsalary] = useState(0);
  let [ta, setTa] = useState(0);
  let [da, setDa] = useState(0);
  let [hra, setHra] = useState(0);
  let [totalsalary, setTotalsalary] = useState(0);
  let [tax, setTax] = useState(0);

  const calculateSalaryAndTax = (e) => {
    e.preventDefault();
    const total =
      parseFloat(basicsalary) +
      parseFloat(ta) +
      parseFloat(da) +
      parseFloat(hra);
    setTotalsalary(total);

    let calculatedTax = 0;
    if (total >= 80000) {
      calculatedTax = total * 0.2;
    } else if (total >= 50000) {
      calculatedTax = total * 0.15;
    } else if (total >= 30000) {
      calculatedTax = total * 0.1;
    } else {
      calculatedTax = 0;
    }
    setTax(calculatedTax);
  };
  return (
    <>
      <div>
        <h1 style={{color:"brown"}}>Salary and TaxCalculate</h1>
        <form onSubmit={calculateSalaryAndTax}>
          <div>
            <label style={{fontWeight:600}}>Basic salary::</label>
            <input style={{border:"2px solid black"}}
              type="number"
              value={basicsalary}
              onChange={(e) => setbasicsalary(e.target.value)}
            />
          </div>
          <br />

          <div>
            <label style={{fontWeight:600}}>Trvael Allowance::</label>
            <input style={{border:"2px solid black"}}
              type="number"
              value={ta}
              onChange={(e) => setTa(e.target.value)}
            />
          </div>
          <br />

          <div>
            <label style={{fontWeight:600}}>Dearness Allowances::</label>
            <input style={{border:"2px solid black"}}
              type="number"
              value={da}
              onChange={(e) => setDa(e.target.value)}
            />
          </div>
          <br />

          <div>
            <label style={{fontWeight:600}}>House Rent Allowances::</label>
            <input style={{border:"2px solid black"}}
              type="number"
              value={hra}
              onChange={(e) => setHra(e.target.value)}
            />
          </div>
          <br />

          <button type="submit" style={{fontWeight:600 ,backgroundColor:"yellow", border:"1px solid black"}} >Calculate</button>

          <br />
        </form>

        <br />

        <h2 style={{fontWeight:600}}>Total salary:{totalsalary}</h2>
        <br />

        <h2 style={{fontWeight:600}}>Tax:{tax}</h2>
      </div>
    </>
  );
};
export default Calculate;
