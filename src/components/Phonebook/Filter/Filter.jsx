import React from 'react';
import PropTypes from 'prop-types';
import styles from './Filter.module.css';

const Filter = ({ value, onChange }) => (
  <label className={styles.filterLabel}>
    Find contacts by name
    <input type="text" name="filter" value={value} onChange={onChange} className={styles.filterInput}/>
  </label>
);

Filter.propTypes = {
  value: PropTypes.string,
};

export default Filter;