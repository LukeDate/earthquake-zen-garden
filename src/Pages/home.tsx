import React, { FunctionComponent } from 'react'
import { connect } from 'react-redux'
import { useSortableData } from '../Utils/tableSorting'
import EarthQuakeTable from '../Components/earthQuakeTable'
import { Data, EarthQuakeProperties } from '../types/earthQuakFeatureTypes'
import { HomePageTitle } from '../Styles/homePageStyles'

const Home: FunctionComponent<Data> = ({ ...props }) => {
  const { features } = props
  const { items, requestSort }  = useSortableData(features)
  return (
    <>
      <HomePageTitle>{props.metadata.title}</HomePageTitle>
      <EarthQuakeTable items={items} requestSort={requestSort}/>
    </>
  )
}

const mapStateToProps = (state) => {
  const { data }: EarthQuakeProperties = state
  return data
}

export default connect(mapStateToProps)(Home)
