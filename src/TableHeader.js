import React from 'react';

const TableHeader = ({columns, headerStyle, sortFunction, sortState, textColor}) => (
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
                    <i className="fa fa-angle-up"/>
                    <i className="fa fa-angle-down"/>
                  </span> :
                  (isSorted ?
                      <i style={{color: textColor}} className="fa fa-angle-up"/> : <i style={{color: textColor}} className="fa fa-angle-down"/>
                  )}
              </span>}

      </th>;
    })}
  </tr>
  </thead>
);

export default TableHeader;