import React, { FunctionComponent } from 'react'
import { connect } from 'react-redux'
import { DetailContainer, EarthQuakeDetails, Title } from '../Styles/detailStyles'
import { EarthQuakeProperties, FeaturesEntity, Properties } from '../types/earthQuakFeatureTypes'
import { dateConverter } from '../Utils/dateConverter'

const Detail: FunctionComponent<FeaturesEntity[]> = ({ ...props }) => {
  const earthQuakeDetails : Properties  = props[0].properties
  return (
    <DetailContainer>
        <Title>{earthQuakeDetails.title}</Title>
        <EarthQuakeDetails>
          <h3>Title</h3>
          <div>{earthQuakeDetails.title}</div>
          <h3>Magnitude</h3>
          <div>{earthQuakeDetails.mag}</div>
          <h3>Time</h3>
          <div>{dateConverter(earthQuakeDetails.time)}</div>
          <h3>Status</h3>
          <div>{earthQuakeDetails.status}</div>
          <h3>Tsunami</h3>
          <div>{earthQuakeDetails.tsunami}</div>
          <h3>Type</h3>
          <div>{earthQuakeDetails.type}</div>
        </EarthQuakeDetails>
    </DetailContainer>
  )
}

const mapStateToProps = (state, ownProps) => {
  const { data }: EarthQuakeProperties = state
  const { match } = ownProps
  return Object.values(data.features).filter((x) => x.id === match.params.detailId)
}

export default connect(mapStateToProps)(Detail)
