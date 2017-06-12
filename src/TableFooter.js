import React from 'react';

const TableFooter = ({columns, footerStyle}) => (
  <thead style={{display: 'table', width: 'calc(100% - 1em)', tableLayout: 'fixed'}}>
  <tr>
    <th style={footerStyle}/>
  </tr>
  </thead>
);

export default TableFooter;