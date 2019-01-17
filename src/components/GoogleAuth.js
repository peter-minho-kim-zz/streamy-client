import React from 'react'

class GoogleAuth extends React.Component {
  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: '182445530246-9hqt13la1fud9v2jumnuogs3jqajpi9j.apps.googleusercontent.com',
        scope: 'email'
      })
    })
  }

  render() {
    return (
      <div>Google Auth</div>
    )
  }
}

export default GoogleAuth