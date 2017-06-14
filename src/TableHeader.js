import React from 'react';

const TableHeader = ({columns, headerStyle, sortFunction, sortState, textColor, upIcon, downIcon}) => (
  <thead style={{display: 'table', width: 'calc(100% - 1em)', tableLayout: 'fixed'}}>
  <tr>
    {columns.map(function (col, key) {
      let isSorted = sortState[col.accessor];
      return <th key={key}
                 style={Object.assign({}, headerStyle, {width: col.width, cursor: col.sortable ? 'pointer' : 'default'})}
                 onClick={col.sortable ? () => sortFunction(col) : null}>

        <span style={{textDecoration: isSorted === undefined ? 'none' : 'underline'}}>{col.header}</span>
        {col.sortable && <span style={{marginLeft: 5}}>
                {isSorted === undefined ?
                  <span style={{color: textColor}}>
                    {upIcon}
                    {downIcon}
                  </span> :
                  (isSorted ?
                    {upIcon} : {downIcon}
                  )}
              </span>}

      </th>;
    })}
  </tr>
  </thead>
);

export default TableHeader;