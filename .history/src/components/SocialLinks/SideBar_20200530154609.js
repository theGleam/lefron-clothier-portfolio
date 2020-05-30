import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { slide as Menu } from 'react-burger-menu'
import FbIcon from '@assets/fb.svg'
import LinkedinIcon from '@assets/linkedin.svg'
import InstagramIcon from '@assets/instagram.svg'
import PhoneIcon from '@assets/phone.svg'
import GmailIcon from '@assets/gmail.svg'
import './SocialLinks.css'

const iconConfig = {
  fb: FbIcon,
  linkedin: LinkedinIcon,
  instagram: InstagramIcon,
  phone: PhoneIcon,
  gmail: GmailIcon
}

function SocialLinks(props) {
  return (
    <Menu {...props}>

      {
        props.menuLinks.map(({ name, link }) => <Link className="menu-item" key={name} to={link}> {name} </Link>)
      }
      <div className="icon-strip">
        {
          props.socialLinks.map(({ name, link }) => {
            const Icon = iconConfig[name];
            return <a key={name} href={link} target={'__blank'} className="link"><Icon className="icon" /></a>
          })
        }

      </div>

    </Menu>
  )
}

SocialLinks.propTypes = {
  menuLinks: PropTypes.array,
  socialLinks: PropTypes.array
}


export default SocialLinks