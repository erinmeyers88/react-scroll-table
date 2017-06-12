import React from 'react';

const TableBodyNoData = ({bodyStyle, columns, cellStyle, noDataText, borderColor, maxHeight}) => (
  <tbody style={Object.assign({}, bodyStyle, {maxHeight: maxHeight ? maxHeight - 29 : null})}>
  <tr style={{
    display: 'table',
    width: 'calc(100% - 1px)',
    tableLayout: 'fixed',
    textAlign: 'center',
    height: 50,
    lineHeight: '50px',
    border: '1px solid',
    borderColor: borderColor
  }}>
    <td>{noDataText}</td>
  </tr>
  </tbody>
);

export default TableBodyNoData;