import styled from "styled-components"

interface TextInputProps {
  inputType: string
  name: string
  labelName: string
  labelFor: string
  placeholder: string
  value: string
  touched: boolean
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  onFocus: (event: React.FocusEvent<HTMLInputElement>) => void
  onBlur: (event: React.FocusEvent<HTMLInputElement>) => void
}

interface InputStyleProps {
  touched: boolean
}

const TextInput: React.FC<TextInputProps> = ({
  inputType,
  name,
  labelName,
  labelFor,
  placeholder,
  value,
  touched,
  onChange,
  onFocus,
  onBlur,
}) => {
  return (
    <InputContainer>
      <InputLabel htmlFor={labelFor}>{labelName}</InputLabel>
      <InputField
        type={inputType}
        id={name}
        name={name}
        value={value}
        placeholder={placeholder}
        touched={touched}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
      />
    </InputContainer>
  )
}

export default TextInput

const InputContainer = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, min-content);
  gap: 4px;
  width: 100%;
`

const InputLabel = styled.label`
  font-family: sans-serif;
  font-size: 15px;
  font-weight: 500;
  color: var(--color-bodyBurnWorkoutHeadline);
  transform: translateX(26px);
`

const InputField = styled.input<InputStyleProps>`
  margin: 0;
  padding: 12px 20px;
  font-family: sans-serif;
  font-size: 16px;
  font-weight: 500;
  color: var(--color-primaryBodyText);
  background: var(--color-mainBackground);
  border-style: solid;
  border-width: 3px;
  border-radius: 20px;
  border-color: ${(props) =>
    props.touched ? "var(--color-primaryBlue)" : "var(--color-tertiaryPurple)"};
  width: 100%;
  height: 60px;
  outline: none;
  caret-color: var(--color-primaryBlue);
  &::placeholder {
    font-size: 16px;
    color: var(--color-darkBodyText);
  }
`
