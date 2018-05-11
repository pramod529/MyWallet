import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import '../stylesheets/_select-feild.css';
const CONTRIBUTORS = [
  { github: 'jedwatson', name: 'Jed Watson' },
  { github: 'bruderstein', name: 'Dave Brotherstone' },
  { github: 'jossmac', name: 'Joss Mackison' },
  { github: 'jniechcial', name: 'Jakub Niechciał' },
  { github: 'craigdallimore', name: 'Craig Dallimore' },
  { github: 'julen', name: 'Julen Ruiz Aizpuru' },
  { github: 'dcousens', name: 'Daniel Cousens' },
  { github: 'jgautsch', name: 'Jon Gautsch' },
  { github: 'dmitry-smirnov', name: 'Dmitry Smirnov' },
];
const MAX_CONTRIBUTORS = 6;
const ASYNC_DELAY = 500;
class SelectField extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      multi: true,
      multiValue: [],
      options: [
        { value: 'R', label: 'Red' },
        { value: 'G', label: 'Green' },
        { value: 'B', label: 'Blue' },
      ],
      value: undefined,
    };
  }
  handleOnChange(value) {
    const { multi } = this.state;
    if (multi) {
      this.setState({ multiValue: value });
    } else {
      this.setState({ value });
    }
  }
  render() {
    const { multi, multiValue, options, value } = this.state;
    return (
      <div className="section">
        <Select.Creatable
          multi={multi}
          options={this.props.value}
          onChange={this.handleOnChange.bind(this)}
          value={multi ? multiValue : value}
          placeholder={this.props.placeholder}
        />
      </div>
    );
  }
}
SelectField.propTypes = {
  placeholder: PropTypes.string,
  values: PropTypes.array,
};
export default SelectField;
