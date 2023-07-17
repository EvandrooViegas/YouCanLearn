import { IInput, ISelect, ITextArea, Props } from "./types";


const Field = (props:Props) => {
  const { fieldType, className, id } = props
  switch (fieldType) {
    case "textarea": {
      const { ...textareaRest } = props as ITextArea;
      return <textarea {...textareaRest} className={`h-24 resize-none ${className} `} ></textarea>;
    }
    case "select": {
      const { options, ...selectRest } = props as ISelect;
      return (
        <select {...selectRest}>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      );
    }
    default: {
      const { ...inputRest } = props as IInput;
      return <input {...inputRest} />;
    }
  }
};

export default Field
