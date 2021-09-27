import React, { FunctionComponent } from 'react'
import { HeaderContainer, HeaderTitle, Logo, ProfileLink } from '../Styles/headerStyles'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { Profile } from '../types/profileTypes'
import { Site } from '../types/siteTypes'

interface HomePageTypes {
  profile: Profile;
  site: Site;
}

const Header: FunctionComponent<HomePageTypes> = ({...props}) => {
  return (
    <HeaderContainer>
        <Link to="/">
            <Logo src={props.site.logoImage} alt="Realty Logo Image"/>
        </Link>
        <HeaderTitle>{props.site.title}</HeaderTitle>
        <ProfileLink>
          <Link to="/profile">Welcome {props.profile.firstName}</Link>
        </ProfileLink>
    </HeaderContainer>
  )
}

const mapStateToProps = (state) => {
  const { profile, site } = state;
  return { profile, site }
}

export default connect(mapStateToProps)(Header)
