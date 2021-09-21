import React from "react";
import PropTypes from "prop-types";

export default class GreetComponent extends React.Component {
    render() {
        const { greeting, name, children } = this.props;
        return (
            <div>
                <div>
                    {greeting} {name}!
                </div>
                {children}
            </div>
        )
    }
}

GreetComponent.propTypes = {
    greeting: PropTypes.string,
    name: PropTypes.string,
    children: PropTypes.any,
};