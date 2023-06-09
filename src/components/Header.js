import React from 'react'
import PropTypes from 'prop-types'

const Header = (props) => {
    return (
        <header>
            <h1>{props.title}</h1>
        </header>
    );
};

Header.defaultProps = {
    title: 'Product Information Management',
};

Header.propTypes = {
    title: PropTypes.string,
}

export default Header