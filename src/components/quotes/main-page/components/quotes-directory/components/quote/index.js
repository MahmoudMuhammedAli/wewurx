import React from "react";
import { Field, reduxForm } from "redux-form";
import { Link } from "react-router-dom";

const QuoteItem = (props) => {
  return (
    <div className='item '>
      <div className='item__nom'>
        <Field
          name='checkAll'
          component='input'
          type='checkbox'
          className='item__checkAll'
        />
        <button className='item__button'>INV-CNA1</button>
      </div>

      <div className='item__date'>
        <span>01/02/2021</span>
      </div>
      <div className='item__duedate'>
        <span>01/03/2021</span>
      </div>
      <div className='item__name'>
        <span>Quote name</span>
      </div>
      <div className='item__customer'>
        <span>fname lname</span>
      </div>
      <div className='item__address'>
        <span>
          <div>Address</div>
          <div>City</div>
          <div>Post/Zip Code</div>
          <div>Streat</div>
        </span>
      </div>
      <div className='item__amount'>
        <span>£40.00</span>
      </div>
      <div className='item__viewbutton'>
        <Link
          to='/system/jobs/quotes/123id/view'
          className='item__button item__viewbutton__button'
        >
          view
        </Link>
      </div>
    </div>
  );
};

export default reduxForm({ form: "invoiceItem" })(QuoteItem);

//   return (
//     <div className='itemHeader item'>

//       <div className='item__duedate'>
//         <button className='item__button'>
//           <span>Due date</span>
//           <i className='fa fa-arrow-circle-down'></i>
//         </button>
//       </div>
//       <div className='item__name'>
//         <button className='item__button'>
//           <span>Quote name</span>
//           <i className='fa fa-arrow-circle-down'></i>
//         </button>
//       </div>
//       <div className='item__customer'>
//         <button className='item__button'>
//           <span>Customer</span>
//           <i className='fa fa-arrow-circle-down'></i>
//         </button>
//       </div>
//       <div className='item__amount'>
//         <button className='item__button'>
//           <span>Address</span>
//           <i className='fa fa-arrow-circle-down'></i>
//         </button>
//       </div>
//       <div className='item__amount'>
//         <button className='item__button'>
//           <span>Amount</span>
//           <i className='fa fa-arrow-circle-down'></i>
//         </button>
//       </div>
//       <div className='item__reset'>
//         <button className='item__buttonHeader  item__button'>
//           <span>Reset</span>
//         </button>
//       </div>
//     </div>
//   );
// };

// export default reduxForm({ form: "quoteViwerHeader" })(QuoteHeader);
