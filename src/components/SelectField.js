import React from "react";
import { useField, ErrorMessage } from "formik";
import ErrorText from "./ErrorText";

const SelectField = ({ label, children, ...props }) => {
  const [field] = useField(props);
  return (
    <div className="mb-2">
      <label
        htmlFor={field.name}
        className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
      >
        {label}
      </label>
      <div className="relative">
        <select
          className="block w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded"
          {...field}
          {...props}
        >
          {children}
        </select>
      </div>
      <ErrorMessage name={field.name} render={msg => <ErrorText msg={msg} />}/>
    </div>
  );
};

export default SelectField;
