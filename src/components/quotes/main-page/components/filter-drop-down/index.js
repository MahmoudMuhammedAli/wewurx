import React, { useState } from "react";
import Styles from "./filter-drop-down.module.scss";
import { reduxForm, Field } from "redux-form";
import Bar from "./components/bar";
import Status from "./components/status";
import DueDate from "./components/due-date";
import DatePage from "./components/date";
import Customer from "./components/customer";
import CustomField from "./components/custom-field";
import Asset from "./components/asset";
import Site from "./components/site";

const renderSelect = (list) => ({ input, className }) => {
  return (
    <select {...input} className={className}>
      {list.map(({ name, value }) => {
        return (
          <option key={value} value={value}>
            {name}
          </option>
        );
      })}
    </select>
  );
};

const FilterDropDown = ({ setIsDropDownOpened }) => {
  // state for routing inside the dropdown

  const [page, setPage] = useState({ status: true });
  const [shouldShowSavePresetInput, setShouldShowSavePresetInput] = useState(
    false
  );

  const renderComponent = () => {
    if (page.status) return <Status />;
    if (page.dueDate) return <DueDate />;
    if (page.date) return <DatePage />;
    if (page.customer) return <Customer />;
    if (page.customeField) return <CustomField />;
    if (page.asset) return <Asset />;
    if (page.site) return <Site />;
  };

  return (
    <div className={Styles.dropdown}>
      <header className={Styles.dropdown__header}>
        <button className={Styles.dropdown__filtersbutton}>filters</button>
        <div className={Styles.dropdown__presets}>
          <label className={Styles.dropdown__presets__label}>
            Presets
            <Field
              name='preset'
              component={renderSelect([])}
              className={Styles.dropdown__presets__select}
            />
          </label>
        </div>

        <button
          onClick={() => setIsDropDownOpened(false)}
          className={Styles.dropdown__cancelbutton}
        >
          Cancel
        </button>
      </header>
      <main className={Styles.dropdown__main}>
        <Bar setPage={setPage} />
        {renderComponent()}
      </main>
      <footer className={Styles.dropdown__footer}>
        <div className={Styles.dropdown__footer__savepreset}>
          <button
            className={Styles.dropdown__footer__savepreset__button}
            onClick={() => setShouldShowSavePresetInput((status) => !status)}
          >
            Save as new Preset
          </button>
          <br />
          <Field
            name='newPreset'
            component='input'
            type='text'
            className={Styles.dropdown__footer__savepreset__input}
            style={{
              display: `${shouldShowSavePresetInput ? "block" : "none"}`,
            }}
          />
        </div>
        <footer className={Styles.dropdown__footer__footer}>
          <button onClick={() => setIsDropDownOpened(false)}>Cancel</button>
          <button>Delete this preset</button>
          <button>Apply</button>
        </footer>
      </footer>
    </div>
  );
};

export default reduxForm({ form: "filterQuotes" })(FilterDropDown);
