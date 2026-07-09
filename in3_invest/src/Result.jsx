import React from 'react';

export function calculateInvestmentResults({
  investment,
        annualInvestment ,
        duration,
        Ereturn
}) {
  const annualData = [];
  let investmentValue = investment;

  for (let year = 1; year <= duration; year++) {
    const interestEarned =
      investmentValue * (Ereturn / 100);

    investmentValue += interestEarned + annualInvestment;

    annualData.push({
      year,
      interest: interestEarned,
      valueEndOfYear: investmentValue,
      annualInvestment,
    });
  }

  return annualData;
}


function Result({userInput}) {
    const resultData = calculateInvestmentResults(userInput)
    if(resultData.length === 0){
      return <p className='center'>No result Found</p>
    }
    const initalInvestment = resultData[0].valueEndOfYear - resultData[0].interest - resultData[0].annualInvestment
    console.log(resultData)
    
  return (
    <table>
        <thead>
            <tr>
                <th>Year</th>
                <th>Investment Value</th>
                <th>Interest (Year)</th>
                <th>Total Interest</th>
                <th>Invested Capital</th>
            </tr>
        </thead>
        <tbody>
            {resultData.map((yearData)=>{
                const totalInterest = yearData.valueEndOfYear - yearData.annualInvestment * yearData.year - initalInvestment;
                const totalAmountInvested = yearData.valueEndOfYear - totalInterest;
                return(
                    <tr key={yearData.year}>
                        <td>{yearData.year}</td>
                        <td>{yearData.valueEndOfYear}</td>
                        <td>{yearData.interest}</td>

                        <td>{totalInterest}</td>
                        <td>{totalAmountInvested}</td>
                    </tr>
                )
            })}
        </tbody>
    </table>
  );

}
export default Result;