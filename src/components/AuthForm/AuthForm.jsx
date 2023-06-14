import {
  FormStyled,
  LabelStyled,
  InputStyled,
  BtnStyled,
} from 'components/ContactForm/ContactForm.styled';
import { useState } from 'react';
import PropTypes from 'prop-types';

const AuthForm = ({ onSubmit, submitTitle, options, initialState }) => {
  const [form, setForm] = useState(initialState);

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(form);
  };

  return (
    <FormStyled
      style={{ padding: '100px', margin: '0 auto' }}
      onSubmit={handleSubmit}
    >
      {options.map(el => (
        <LabelStyled key={el.name}>
          <p>{el.label}</p>
          <InputStyled
            type={el.type}
            name={el.name}
            placeholder={el.placeholder}
            value={form[el.name]}
            required
            onChange={handleChange}
          />
        </LabelStyled>
      ))}
      <BtnStyled type="submit">{submitTitle}</BtnStyled>
    </FormStyled>
  );
};
AuthForm.propTypes = {
  onSubmit: PropTypes.func,
  submitTitle: PropTypes.string, 
  options: PropTypes.arrayOf(PropTypes.object),
  initialState: PropTypes.object,
};
export default AuthForm;
