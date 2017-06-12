import React from 'react';
import ReactScrollTable from './src/index';
import {render} from 'react-dom';

const noteFormatter = (data) => {
  return <pre style={{
    margin: 0,
    whiteSpace: 'pre-line',
    fontFamily: 'Lato, sans-serif',
  }}>{data.text}</pre>;
};

const importantCellFormatter = (data) => {
  return data.favorite ? '*' : '';
};

const tableProps = {
  backgroundColor: '#0B76B2',
  borderColor: '#FF434D',
  columns: [
    {
      header: 'Favorite',
      sortable: true,
      accessor: 'favorite',
      width: '10%',
      render: importantCellFormatter,
    },
    {
      header: 'User',
      accessor: 'username',
      width: '30%',
      sortable: true,
    },
    {
      header: 'Quote',
      sortable: true,
      accessor: 'text',
      width: '40%',
      render: noteFormatter,
    },
    {
      header: 'Date',
      sortable: true,
      accessor: 'date',
      width: '20%',
      sortFunction: function (a, b, order) {
        return order === 'asc' ? new Date(b.date) - new Date(a.date) : new Date(a.date) - new Date(b.date);
      }
    }
  ],
  data: [{favorite: false, username: 'Luke Skywalker', text: 'He told me enough! He told me you killed him!', date: new Date().toDateString()},
    {favorite: true, username: 'Obi-Wan Kenobi', text: 'These aren\'t the droids you\'re looking for.', date: new Date(2014, 10, 5).toDateString()},
    {favorite: false, username: 'Darth Vader', text: 'I am your father.', date: new Date(2002, 1, 17).toDateString()},
    {favorite: true, username: 'C3PO', text: 'I suggest a new strategy, Artoo: let the Wookie win.', date: new Date(2000, 2, 28).toDateString()},
    {favorite: false, username: 'R2D2', text: 'Bleep bloop bleep.', date: new Date(1988, 6, 15).toDateString()},
    {favorite: false, username: 'Han Solo', text: 'Laugh it up, fuzzball!', date: new Date(1990, 4, 7).toDateString()},
    {favorite: true, username: 'Yoda', text: 'Try not. Do—or do not. There is no try.', date: new Date(2005, 6, 12).toDateString()},
    {favorite: false, username: 'Leia Organa', text: 'Help me Obi-Wan Kenobi, you\'re my only hope.', date: new Date(2012, 1, 27).toDateString()}],
  maxHeight: 150,
  noDataText: 'no data here',
  shaded: true,
  shadedColor: '#2AB2FF',
  textColor: '#ffffff'
};

const Example = () => (
  <div style={{padding: 50}}>
    <h2>react-scroll-table</h2>
    <ReactScrollTable {...tableProps} />
  </div>);

render(<Example/>, document.getElementById('render-table-here'))