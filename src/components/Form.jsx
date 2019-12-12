import React from 'react';
import { connect } from 'react-redux';
import { inputChange, submit } from '../state/actionCreators';

export function Form({ form, inputChange, submit }) {
  const onValueChange = event => {
    inputChange(
      event.target.name,
      event.target.value,
    );
  };
  const onFormSubmit = event => {
    event.preventDefault();
    submit();
  };

  return (
    <form className='component' onSubmit={onFormSubmit}>
      <label>first name
        <input value={form.fname} onChange={onValueChange} name='fname' />
      </label><br />

      <label>last name
        <input value={form.lname} onChange={onValueChange} name='lname' />
      </label><br />

      <input type='submit' />
    </form>
  );
}

function mapStateToProps(state) {
  return {
    form: state.form,
  };
}
export default connect(
  mapStateToProps,
  { inputChange, submit },
)(Form);
