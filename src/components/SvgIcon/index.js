import React from 'react'
import PropTypes from 'prop-types'
import style from './index.less'

console.log(style)

const SvgIcon = props => {
    const { iconClass, fill, customClass } = props
    return (
        <svg className={["svg-class", customClass].join(" ")} aria-hidden={true}>
            <use xlinkHref={"#icon-" + iconClass} fill={fill}></use>
        </svg>
    )
}

SvgIcon.propTypes = {
    iconClass: PropTypes.string.isRequired,
    fill: PropTypes.string,
    customClass: PropTypes.string
}

SvgIcon.defaultProps = {
    fill: "currentColor",
    customClass: ""
}

export default SvgIcon
