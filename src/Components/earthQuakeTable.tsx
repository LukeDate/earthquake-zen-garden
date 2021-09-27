import React, { FunctionComponent } from 'react'
import { dateConverter } from '../Utils/dateConverter'
import { Link } from 'react-router-dom'
import { FeaturesEntity, TableTypes } from '../types/earthQuakFeatureTypes'
import { EarthQuakeTableStyle, MagTd, TableHeader, TableHeaderButton, TableRow } from '../Styles/homePageStyles'

const renderTable: FunctionComponent<FeaturesEntity[]> = (items) => {
  return (<tbody>
     {items.map(earthQuake =>
          <TableRow key={earthQuake.id}>
              <td>
                  <Link to={`/detail/${earthQuake.id}`}>{earthQuake.properties.place}</Link>
              </td>
              <MagTd>{earthQuake.properties.mag}</MagTd>
              <td>{dateConverter(earthQuake.properties.time)}</td>
          </TableRow>)}
      </tbody>
  )
}

const EarthQuakeTable: FunctionComponent<TableTypes> = ({ items, requestSort }) => {
    return (<EarthQuakeTableStyle>
        <thead>
            <tr>
                <TableHeader>
                    <TableHeaderButton onClick={() => requestSort('place')}>Title</TableHeaderButton>
                </TableHeader>
                <TableHeader>
                    <TableHeaderButton onClick={() => requestSort('mag')}>Magnitude</TableHeaderButton>
                </TableHeader>
                <TableHeader>
                    <TableHeaderButton onClick={() => requestSort('time')}>Time</TableHeaderButton>
                </TableHeader>
            </tr>
        </thead>
        {renderTable(items)}
    </EarthQuakeTableStyle>)
}

export default EarthQuakeTable
