import React from 'react';

const BudgetSummary = (props) =>{ 
    return(
        <div>
             <div className="col s4 m4 l2 making-height valign-wrapper add-vertical-line">
                            <div className="speech-bubble speech-bubble-size center">
                                <div className="white-text accumulation-styling">${props.accumulator}.00</div>
                                {/* <div className="text-bottom">To Be Budgeted</div> */}
                            </div>
                        </div>
                        <div className="col s8 m8 l4 making-height valign-wrapper left-align">
                            <div className="budget-text-styling">
                                <div>+$0.00 Funds For Mar</div>
                                <div>-$0.00 Overspent in Feb</div>
                                <div>-$23.00 Budgeted in Mar</div>
                                <div>-$0.00 Budgeted in Future</div>
                            </div>

                        </div>
        </div>
    )
}

export default BudgetSummary;