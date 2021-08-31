import React, { Component } from 'react';

export class TextArea extends Component {
    state = { text: 'Input Your Text Here', dark: false };

    render() {
        const { text, dark } = this.state;
        const { heading, mode } = this.props;
        const darkMode = {
            backgroundColor: 'rgb(0 10 24)',
            color: '#fff',
        };
        const lightMode = {
            backgroundColor: '#fff',
            color: '#333',
        };
        return (
            <div>
                <div className="container">
                    <h3 className={`py-1 pt-3 ${mode === 'dark' ? 'text-light' : 'text-dark'}`}>
                        {' '}
                        {heading} <span className="text-warning">Analyze</span>{' '}
                    </h3>
                    <textarea
                        className="form-control my-3"
                        value={text}
                        onChange={(event) => this.setState({ text: event.target.value })}
                        cols="30"
                        rows="10"
                        id="myForm"
                        style={dark || mode === 'dark' ? darkMode : lightMode}
                    />
                    <button
                        className="btn btn-warning"
                        onClick={() =>
                            this.setState((state) => ({
                                text: state.text.toUpperCase(),
                            }))
                        }
                        type="button"
                    >
                        Convert To UpperCase
                    </button>
                    <button
                        className="btn btn-info mx-2"
                        type="button"
                        onClick={() =>
                            this.setState((state) => ({
                                text: state.text.toLowerCase(),
                            }))
                        }
                    >
                        Convert To LowerCase
                    </button>
                    <button
                        className="btn btn-info mx-2"
                        type="button"
                        onClick={() => {
                            const inpt = document.getElementById('myForm');
                            inpt.select();
                            document.execCommand('copy');
                        }}
                    >
                        Copy
                    </button>
                    <button
                        className="btn btn-primary"
                        type="button"
                        onClick={() =>
                            this.setState((state) => ({
                                dark: !state.dark,
                            }))
                        }
                    >
                        {dark ? 'Light Mode' : 'Dark Mode'}
                    </button>

                    <h3 className={`my-3 mb-1 ${mode === 'dark' ? 'text-light' : 'text-dark'}`}>
                        Your Text Summery
                    </h3>
                    <div
                        className={`p-3 bg-light ${
                            mode === 'dark' ? 'bg-dark text-light' : 'text-dark bg-light'
                        }`}
                    >
                        <span className="text-primary"> {text.split(' ').length} </span> Words
                        <span className="text-primary"> {text.length} </span>
                        Characters
                    </div>
                    <div
                        className={`p-3 bg-light ${
                            mode === 'dark' ? 'bg-dark text-light' : 'text-dark bg-light'
                        }`}
                    >
                        <span className="text-primary"> {text.split(' ').length * 0.008} </span>{' '}
                        Minutes To Read
                    </div>
                    <div className={`py-3 ${mode === 'dark' ? 'text-light' : 'text-dark'}`}>
                        <h2 className="my-2">Preview</h2>
                        <p style={{ wordWrap: 'breakWord' }}>
                            {text.length > 0 ? text : 'Please Enter A Text To Preview'}
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default TextArea;
