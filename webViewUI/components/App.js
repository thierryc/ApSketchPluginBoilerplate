import React from 'react';
import pluginCall from 'sketch-module-web-view/client';

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

  triggerAction(handlerName, attrs) {
    pluginCall(handlerName, attrs);
  }

  render() {
    return (
      <div
        style= {{
          overflow: 'scroll',
          height: 640,
          padding: 16,
          textAlign: 'center',
        }}>
        <p>Ap React Sketch Plugin Boilerplate</p>
        <button onClick={() => this.triggerAction('showMessage', 'My Message...')}>Go</button>
      </div>
    );
  }
}
