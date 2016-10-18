import React, { Component } from 'react';
import { AppRegistry, Navigator } from 'react-native';

import Landing from './application/components/Landing';
import Dashboard from './application/components/Dashboard';
import Register from './application/components/accounts/Register';
import Login from './application/components/accounts/Login';
import { globals } from './application/styles';

class assemblies extends Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
    this.updateUser = this.updateUser.bind(this);
    this.state = {
      user: null
    };
  }
  updateUser(user) {
    this.setState({ user })
  }
  logout() {
    this.nav.push({ name: 'Landing' });
    this.updateUser(null);
  }
  render() {
    return (
      <Navigator
        style={globals.flex}
        ref={(el) => this.nav = el }
        initialRoute={{ name: 'Landing' }}
        renderScene={(route, navigator) => {
          switch(route.name){
            case 'Landing':
              return (
                <Landing navigator={navigator}/>
            );
            case 'Dashboard':
              return (
                <Dashboard 
                  navigator={navigator}
                  logout={this.logout}
                />
            );
            case 'Register':
              return (
                <Register navigator={navigator} />
              );
            case 'RegisterConfirmation':
              return (
                <RegisterConfirmation
                  {...route}
                  updateUser={this.updateUser}
                  navigator={navigator}
                />
              );
            case 'Login':
              return (
                <Login 
                  navigator={navigator}
                  updateUser={this.updateUser}
                />
              );
            }
          }
        }
      />
    );
  }
}

AppRegistry.registerComponent('assemblies', () => assemblies);
