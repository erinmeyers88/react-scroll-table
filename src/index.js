import React, {Component} from 'react';
import TableHeader from './TableHeader';
import TableBodyWithData from './TableBodyWithData';
import TableBodyNoData from './TableBodyNoData';
import TableFooter from './TableFooter';
import * as _ from 'underscore';
import './Styles.css';

class ReactScrollTable extends Component {

  componentWillMount() {
    this.state = {
      shownData: this.props.data,
      bodyStyle: {
        borderColor: this.props.borderColor,
        boxSizing: 'border-box',
        overflowY: 'auto',
        display: 'block'
      },
      headerStyle: {
        border: '1px solid',
        borderBottom: '2px solid',
        backgroundColor: this.props.backgroundColor,
        borderColor: this.props.borderColor,
        borderBottomColor: this.props.borderColor,
        color: this.props.textColor,
        boxSizing: 'border-box',
        fontSize: 16,
        textAlign: 'left',
        padding: 5
      },
      footerStyle: {
        borderTop: '1px solid',
        borderColor: this.props.borderColor,
        padding: 0
      },
      cellStyle: {
        color: this.props.textColor,
        border: '1px solid',
        borderBottom: 'hidden',
        borderColor: this.props.borderColor,
        boxSizing: 'border-box',
        padding: 5,
        verticalAlign: 'top'
      }
    }
  }

  componentDidMount() {
    let tableBody = document.getElementById('table-body');
    if ((tableBody <= this.props.maxHeight) || !this.props.maxHeight) {
      tableBody.style.paddingRight = '15px';
      tableBody.style.display = 'block';
    }
  }

  resetColumns(currentColumn) {
    let self = this;
    this.props.columns.forEach(function (column) {
      if (column !== currentColumn) {
       self.setState({[column.accessor]: undefined});
      }
    });
  }

  sort(column) {

    this.resetColumns(column);
    if (column.sortFunction) {
      this.setState({
        shownData: this.state[column.accessor] ? this.state.shownData.sort(function (a, b) {
          return column.sortFunction(a, b, 'dsc');
        }) : this.state.shownData.sort(function (a, b) {
          return column.sortFunction(a, b, 'asc');
        }),
        [column.accessor]: !this.state[column.accessor]
      });
    } else {
      let descending = _.sortBy(this.state.shownData, column.accessor);
      let ascending = _.sortBy(this.state.shownData, column.accessor).reverse();
      this.setState({
        shownData: this.state[column.accessor] ? ascending : descending,
        [column.accessor]: !this.state[column.accessor]
      });
    }
  }

  render() {
    return (
      <div style={{width: '100%', paddingLeft: 10, paddingRight: 10, boxSizing: 'border-box'}}>
        <div style={{width: '100%', overflowX: 'auto', display: 'block'}}>
          <table style={{maxWidth: '100%', borderCollapse: 'collapse'}}>
            <TableHeader {...this.props} headerStyle={this.state.headerStyle}
                         sortFunction={this.sort.bind(this)} sortState={this.state}/>
            {this.state.shownData && <TableBodyWithData {...this.props} shownData={this.state.shownData} bodyStyle={this.state.bodyStyle} cellStyle={this.state.cellStyle}/>}
            {(!this.state.shownData || this.state.shownData.length === 0) &&
            <TableBodyNoData {...this.props} bodyStyle={this.state.bodyStyle} cellStyle={this.state.cellStyle}/>}
            <TableFooter {...this.props} headerStyle={this.state.headerStyle} footerStyle={this.state.footerStyle}/>
          </table>
        </div>
      </div>
    )
  }
}

export default ReactScrollTable;