import React, { FunctionComponent } from 'react'
import { connect } from 'react-redux'
import { ProfileContainer, ProfileDetails, ProfilePicture, Title } from '../Styles/profileStyles'
import { Profile, ProfileProperties } from '../types/profileTypes'

const ProfileView: FunctionComponent<Profile> = ({ ...props }) => {
  return (
    <ProfileContainer>
      <Title>Profile</Title>
      <ProfilePicture src={props.avatarImage}/>
      <ProfileDetails>
        <h3>First Name</h3>
        <div>{props.firstName}</div>
        <h3>Last Name</h3>
        <div>{props.lastName}</div>
        <h3>Phone</h3>
        <div>{props.phone}</div>
        <h3>Email</h3>
        <div>{props.email}</div>
        <h3>Bio</h3>
        <div>{props.bio}</div>
      </ProfileDetails>
    </ProfileContainer>)
}

const mapStateToProps = (state) => {
  const { profile }: ProfileProperties = state
  return profile
}

export default connect(mapStateToProps)(ProfileView)
