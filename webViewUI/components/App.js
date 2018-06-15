import React from 'react';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    pluginCall('webviewLoaded');
  }

  componentWillMount() {
    //document.addEventListener('keydown', this.onKeyDown.bind(this));
  }

  componentWillUnmount() {
    //document.removeEventListener('keydown', this.onKeyDown.bind(this));
  }

  triggerAction(handlerName) {
    pluginCall(handlerName);
  }

  render() {
    return (
      <div
        style= {{
          overflow: 'scroll',
          height: 640,
        }}>

        <p>Ap React Sketch Plugin Boilerplate</p>

      </div>
    );
  }
}
