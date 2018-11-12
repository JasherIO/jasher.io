import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import _ from 'lodash'

export const PureSocial = ({ data, ...props }) => (
  <div className="field is-grouped is-grouped-centered" {...props}>
    {_.map(data.site.siteMetadata.social, item => {
      return (
        <p className="control">
          <OutboundLink href={item.link} key={`${item.platform}`} aria-label={_.lowerCase(item.platform)} className="button is-primary is-medium is-rounded is-outlined" rel='external'>
            <span className="icon is-small">
              <FontAwesomeIcon icon={['fab', _.toLower(item.platform)]} />
            </span>
          </OutboundLink>
        </p>
      )
    })}
  </div>
)

const query = graphql`
  {
    site {
      siteMetadata {
        social {
          platform
          link
        }
      }
    }
  }
`

export const Section = props => (
  <StaticQuery query={query} render={data => <PureSocial data={data} {...props} />} />
)

export default Section
