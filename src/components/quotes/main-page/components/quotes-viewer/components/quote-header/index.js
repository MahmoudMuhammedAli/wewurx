import React from "react";
import { reduxForm, Field } from "redux-form";
import "../shared/quote.scss";

const QuoteHeader = (props) => {
  return (
    <div className='quote quote--header'>
      <div className='quote__number'>
        <Field
          name='shouldCheckAllQuoteNumber'
          component='input'
          type='checkbox'
        />
        <button>
          Quote num <i className='fa fa-arrow-circle-down'></i>
        </button>
      </div>
      <div className='quote__date'>
        <button>
          Date <i className='fa fa-arrow-circle-down'></i>
        </button>
      </div>
    </div>
  );
};
export default reduxForm({ form: "quoteViwerHeader" })(QuoteHeader);
