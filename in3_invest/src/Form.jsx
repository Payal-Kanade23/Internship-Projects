import React, { useState } from 'react';

function Form({userInput , handleChange}) {
   
   
  return (
    <div className='form'>
       <div className='hor'>
          <div>
           Initial Investment  : <input type="number"
                                       name="investment"
                                    value={userInput.investment}
                                    onChange={handleChange}
                                    />
        </div>
         <div>
             Annual  Investment : <input type="number"
                                       name="annualInvestment"
                                    value={userInput.annualInvestment}
                                    onChange={handleChange}
                                    />
        </div>
       </div>

       <div className='hor'>
           <div>
            Expected Duration: <input type="number"
                                       name="duration"
                                    value={userInput.duration}
                                    onChange={handleChange}
                                    />
        </div>
        <div>
            Expected Return: <input type="number"
                                       name="return"
                                    value={userInput.Ereturn}
                                    onChange={handleChange}
                                    />
        </div>
       </div>
       
       
      
    </div>
  );
}

export default Form;
