import React from "react";

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