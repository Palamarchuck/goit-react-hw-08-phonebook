import React from 'react';
import PropTypes from 'prop-types';
import styles from './Filter.module.css';
import Form from 'react-bootstrap/Form';

const Filter = ({ value, onChange }) => (
  <Form.Label className={styles.filterLabel}>
    Find contacts by name
    <Form.Control type="text" name="filter" value={value} onChange={onChange} className={styles.filterInput}/>
  </Form.Label>
);

Filter.propTypes = {
  value: PropTypes.string,
};

export default Filter;