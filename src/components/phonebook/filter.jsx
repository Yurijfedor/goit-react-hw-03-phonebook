import { Component } from 'react';
import PropTypes from 'prop-types';
import { LabelFilterEl } from './contactForm.styled';

export class Filter extends Component {
  getFilterValue = evt => {
    const value = evt.target.value;
    this.props.onChange(value);
  };

  render() {
    return (
      <LabelFilterEl>
        Find contacts by name
        <input onChange={this.getFilterValue} type="text" />
      </LabelFilterEl>
    );
  }
}

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
};
