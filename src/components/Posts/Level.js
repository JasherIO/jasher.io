import React from 'react'
import { Link } from 'gatsby'
import _ from 'lodash'
import moment from 'moment'

const Level = ({ category, date, isLocale=false, ...props }) => (
  <div className="level is-mobile" {...props}>
    <div className="level-left">
      <div className="level-item">
        <Link to={`/blog/categories/${_.kebabCase(category)}`} className="tag">
          {category}
        </Link>
      </div>
    </div>
    <div className="level-right">
      <div className="level-item">
        {isLocale ? (
          <time dateTime={date} className="has-text-weight-light">{moment(date).format("LL")}</time>
        ) : (
          <time dateTime={date} className="has-text-weight-light">{moment(date).fromNow()}</time>
        )}
      </div>
    </div>
  </div>
)

export default Level