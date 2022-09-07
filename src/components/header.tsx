import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { Flex, Icon, Box } from "gestalt"

const links = [
  {
    id: 'rsvp',
    name: 'rsvp',
    path: '/rsvp',
  },
  {
    id: 'photo-album',
    name: 'Photo Album',
    path: '/photo-album',
  },
  {
    id: 'contact',
    name: 'Contact',
    path: '/contact',
  },
  {
    id: 'menu',
    name: 'Menu',
    path: '/menu',
  },
]

const Header = ({ siteTitle }: { siteTitle: string }) => (
  <header
    style={{
      margin: `0 auto`,
      padding: `var(--space-4) var(--size-gutter)`,
      display: `flex`,
      alignItems: `center`,
      justifyContent: `space-between`,
    }}
  >
    <Flex direction="row" gap={12}>
      <Link
        to="/"
        style={{
          fontSize: `var(--font-sm)`,
          textDecoration: `none`,
        }}
      >
        {siteTitle}
      </Link>
      {links.map(value => <Link
        to={value.path}
        style={{
          fontSize: `var(--font-sm)`,
          textDecoration: `none`,
          color: `black`,
          backgroundColor: `transparent`,
        }}
      >
        {value.name.toUpperCase()}
      </Link>)}
    </Flex>

    <Flex direction="row" gap={12}>
      <Link
        to="/direction"
        style={{
          fontSize: `var(--font-sm)`,
          display: `flex`,
          justifyContent: `center`,
          alignItems: `center`,
          color: `black`,
          textDecoration: `none`,
          backgroundColor: `transparent`,
        }}
      >
        <Box marginEnd={3}>DIRECTION</Box>
        <Icon icon="directional-arrow-right" inline accessibilityLabel="Number of views" color="default" />
      </Link>
    </Flex>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
