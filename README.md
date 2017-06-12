**react-scroll-table**

Table Props:

| Name | Type | Default Value | Notes |
| --- | --- | --- | --- |
| backgroundColor | String (color name, hex value, RGB value) |   | If shaded is set to true, then this will be the color of the table header. |
| borderColor | String (color name, hex value, RGB value) | Black |   |
| columns | Array of column objects |   |   |
| data | Array of data objects |   |   |
| maxHeight | Number |   | If this property is set, the table will scroll when its contents cause it to exceed this number. |
| noDataText | String |   | Text to show if the data property is empty. |
| shaded | Boolean |   | If set to true, the table will use backgroundColor starting with the header, and alternate the color of the rows with shadedColor. |
| shadedColor | String (color name, hex value, RGB value) |   | Color to be displayed every other row, starting with the first row of the body, if shaded is set to true. |
| textColor | String (color name, hex value, RGB value) | Black |   |

Column Object Props:

| Name | Type | Default Value | Notes |
| --- | --- | --- | --- |
| accessor | String |   | The property in the data that the table body will display. |
| header | String |   | The label the table header will display. |
| render | Function |   | Receives a row of data, returns a custom formatted string or JSX element. |
| sortable | Boolean | False | Triggers the display of up/down carats in the column header and allows columns containing strings or numbers to be sorted alpha-numerically.  If the column is a date  value, you must pass a custom sort function via sortFunction. |
| sortFunction | Function |   | Allows customized sorting, for example sorting date time values. |
| width | String (for percentage value) or Number (for pixel value) |   | Determines the width of the column. |

Data Object:

An object of key value pairs. Each key can be assigned to a column in the table via the accessor property of a column object.  The table body will display the value or what is returned from the function passed to the column object&#39;s render property.

Styling:

The class &quot;react-clean-table-body&quot; can be used to apply CSS styling to the table&#39;s scrollbar.