import React, { Component } from 'react';

export class Alert extends Component {
    render() {
        const { msg, type } = this.props;
        return (
            msg && (
                <div className={`alert alert-${type} alert-dismissible fade show`} role="alert">
                    <strong>{type.toUpperCase()} : </strong>
                    {msg}
                    <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="alert"
                        aria-label="Close"
                    />
                </div>
            )
        );
    }
}

export default Alert;
