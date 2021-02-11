import React from "react";

const CostItemHeader = () => {
  return (
    <>
      <div className='costitems__item costitems__item--header'>
        <div className='costitems__item__item'>Item</div>
        <div className='costitems__item__qty'>Qty</div>
        <div className='costitems__item__tax'>Tax</div>
        <div className='costitems__item__discount'>Discount</div>
        <div className='costitems__item__total'>Total</div>
      </div>
    </>
  );
};

export default CostItemHeader;
