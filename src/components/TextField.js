import React from "react";
import { useField, ErrorMessage } from "formik";
import ErrorText from "./ErrorText";

const TextField = ({ label, ...props }) => {
  const [field] = useField(props);
  return (
    <div className="mb-2">
      <label
        htmlFor={field.name}
        className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
      >
        {label}
      </label>
      <input
        className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"
        {...field}
        autoComplete="false"
      />
      <ErrorMessage name={field.name} render={msg => <ErrorText msg={msg} />}/>
    </div>
  );
};

export default TextField;
