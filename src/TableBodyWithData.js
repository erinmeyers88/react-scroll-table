import React from 'react';

const TableBodyWithData = ({shownData, bodyStyle, columns, actionCellFormatter, cellStyle, maxHeight, shaded, shadedColor, backgroundColor}) => (
  <tbody id="table-body" className="react-clean-table-body" style={Object.assign({}, bodyStyle, {maxHeight: maxHeight ? maxHeight - 29 : null})}>
  {shownData.map(function (row, key1) {
    let alternateShade = key1 % 2 === 0 ? shadedColor : backgroundColor;
    return (
      <tr key={key1} style={{display: 'table', width: 'calc(100% - 1px)', tableLayout: 'fixed', backgroundColor: shaded ? alternateShade : backgroundColor}}>
        {columns.map(function (col, key2) {
          return (
            <td key={key2} style={Object.assign({}, cellStyle, {width: col.width})}>
              {col.render === 'actions' ? actionCellFormatter(row) : (col.render ? col.render(row) : row[col.accessor])}
            </td>
          );
        })
        }
      </tr>
    );
  })}
  </tbody>
);

export default TableBodyWithData;