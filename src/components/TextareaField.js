import React from "react";
import { useField, ErrorMessage } from "formik";

const TextareaField = ({ label, ...props }) => {
  const [field] = useField(props);
  return (
    <div className="mb-2">
      <label
        htmlFor={field.name}
        className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
      >
        {label}
      </label>
      <textarea
        className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 mb-3"
        id={field.name}
        {...field}
        {...props}
      />
      <ErrorMessage name={field.name} />
    </div>
  );
};

export default TextareaField;
