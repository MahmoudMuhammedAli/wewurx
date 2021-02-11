import React, { useState } from "react";
import { useSelector } from "react-redux";
import { change, Field, reduxForm } from "redux-form";
import CircledToggleButton from "../../../circled-toggle-button";
import InqueryButton from "../../../inquery-button";
import Styles from "./prices.module.scss";

const renderField = ({
  input,
  change,
  id,
  symbol,
  type,
  perHour,
  handleChange,
  isDisabled,
}) => {
  const handleFocus = (e) => {
    // do what ever you want on foucus here
    input.onFocus(e);
    if (+input.value === 0) change(input.name, "");
  };

  const handleBlur = (e) => {
    // do what ever you want here
    input.onBlur(e);
    if (input.value === "") {
      change(input.name, 0);
    }
  };

  const handleInputChange = (e) => {
    handleChange && handleChange(e.target.value);
    input.onChange(e);
  };

  console.log(isDisabled, "from isDisabled");

  return (
    <div className={Styles.prices__inputcontainer}>
      <div className={Styles.prices__inputwrapper}>
        <span className={Styles.prices__inputwrapper__symbol}>{symbol}</span>
        <input
          {...input}
          id={id}
          onFocus={handleFocus}
          onBlur={handleBlur}
          className={Styles.prices__inputwrapper__input}
          type={type}
          autoComplete='off'
          onChange={handleInputChange}
          disabled={isDisabled}
        />
        <span
          className={Styles.prices__inputwrapper__text}
          style={{ display: `${perHour ? "block" : "none"}` }}
        >
          /ph
        </span>
      </div>
    </div>
  );
};
const Prices = (props) => {
  const forms = useSelector((state) => state.form);
  const isBillable = forms.circledToggleButton.values.isBillable;
  const quantityType = forms.quantityCollector.values.quantityType;
  const perHour = quantityType === "byHours" || false;
  const { moreOptions } = forms.circledToggleButton.values;
  const buyPrice = +forms.addCostItemPrices.values.buyPrice;
  const [newSellPrice, setNewSellPrice] = useState(null);
  const handleMarkupChange = (value) => {
    setNewSellPrice((+value / 100) * buyPrice + buyPrice);
    props.change("sellPrice", newSellPrice);
  };
  console.log(newSellPrice, "from isDisabled");
  return (
    <div className={Styles.prices}>
      <div className={Styles.prices__buyprice}>
        <label
          htmlFor='buyPrice'
          className={Styles.prices__inputcontainer__label}
        >
          Buy price
        </label>
        <Field
          component={renderField}
          type='number'
          name='buyPrice'
          label='Buy price'
          id='buyPrice'
          change={props.change}
          symbol='£'
          perHour={perHour}
        />
        <div className={Styles.prices__inquery}>
          <InqueryButton>
            <div>
              <h5 className={Styles.prices__inquery__heading}>Buy price</h5>
              <p>The amount this service or item costs you to purchase.</p>
              <p className={Styles.prices__inquery__p}>
                Your customers will not see this value. The field is optional.
              </p>
            </div>
          </InqueryButton>
        </div>
      </div>

      <div
        className={Styles.prices__sellprice}
        style={{ display: `${isBillable ? "flex" : "none"}` }}
      >
        <div>
          <label
            htmlFor='sellPrice'
            className={Styles.prices__inputcontainer__label}
          >
            Sell price
          </label>
          <Field
            component={renderField}
            type='number'
            name='sellPrice'
            id='sellPrice'
            change={props.change}
            symbol='£'
            perHour={perHour}
            isDisabled={newSellPrice && true}
          />
          <div className={Styles.prices__inquery}>
            <InqueryButton>
              <div>
                <h5 className={Styles.prices__inquery__heading}>Sell price</h5>
                <p className={Styles.prices__inquery__p}>
                  The price you charge your customer.
                </p>
              </div>
            </InqueryButton>
          </div>
        </div>

        <div className={Styles.prices__togglebutton}>
          <CircledToggleButton
            name='moreOptions'
            initialValues={{ moreOPtions: false }}
            id='moreOptions'
          />
          <label htmlFor='moreOptions'>More Options</label>
        </div>
      </div>

      <div
        className={Styles.prices__moreoptions}
        style={{
          display: `${isBillable ? (moreOptions ? "block" : "none") : "none"}`,
        }}
      >
        <div className={Styles.prices__moreoptions__markup}>
          <label className={Styles.prices__moreoptions__label} htmlFor='markup'>
            Markup
          </label>
          <Field
            component={renderField}
            type='number'
            name='markup'
            id='markup'
            change={props.change}
            symbol='%'
            handleChange={handleMarkupChange}
          />

          <span className={Styles.prices__moreoptions__resultprice}>
            £0.00 markup
          </span>
        </div>
        <div className={Styles.prices__moreoptions__discount}>
          <label
            className={Styles.prices__moreoptions__label}
            htmlFor='discount'
          >
            Discount
          </label>
          <Field
            component={renderField}
            type='number'
            name='discount'
            id='discount'
            change={props.change}
            symbol='%'
          />

          <span className={Styles.prices__moreoptions__resultprice}>
            £0.00 discount
          </span>
        </div>
      </div>
    </div>
  );
};

export default reduxForm({
  form: "addCostItemPrices",
  initialValues: { buyPrice: 0, sellPrice: 0, discount: 0, markup: 0 },
})(Prices);
