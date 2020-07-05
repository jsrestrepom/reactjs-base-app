import React, { Component } from 'react';
import AppService from '../../api/todo/AppService';


class FooterComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      apiStatus: 'Unknown'
    };
  }

  handleSuccessfulRespone(response) {
    console.log(response);
    this.setState({
      apiStatus: response.data
    });
  }

  handleFailedRespone(error) {
    console.log(error);
    this.setState({
      apiStatus: 'Down'
    });
  }

  render() {
    AppService.executeHealthCheckService()
      .then(response => this.handleSuccessfulRespone(response))
      .catch(error => this.handleFailedRespone(error));
    return (
      <footer className="footer">
        <span className="text-muted">Build it by @jsrestrepomoncada</span>
        <span className="text-muted justify-content-end">API status: { this.state.apiStatus }</span>
      </footer>
    );
  }
}

export default FooterComponent;
