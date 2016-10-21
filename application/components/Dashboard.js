import React, { Component } from 'react';
import { TabBarIOS } from 'react-native';
import { TabBarItemIOS } from 'react-native-vector-icons/Ionicons';

import ActivityView from './activity/ActivityView';
import MessagesView from './messages/MessagesView';
import ProfileView from './profile/ProfileView';

import { Headers } from '../fixtures';
import { API } from '../config';

class Dashboard extends Component {
	constructor(props) {
		super(props);
    this.logout = this.logout.bind(this);
		this.state = { selectedTab: 'Activity' };
	}
  logout() {
    fetch(`${API}/users/logout`, { method: 'POST'})
    .then(response => response.json())
    .then(data => this.props.logout())
    .catch(err => {})
    .done();
  }
	render() {
    let { user } = this.props;
    console.log(user);
		return (
			<TabBarIOS>
        <TabBarItemIOS
          title='Activity'
          selected={this.state.selectedTab === 'Activity'}
          iconName='ios-pulse'
          onPress={() => this.setState({ selectedTab: 'Activity' })}
        >
          <ActivityView />
        </TabBarItemIOS>
        <TabBarItemIOS
          title='Messages'
          selected={this.state.selectedTab === 'Messages'}
          iconName='ios-chatboxes'
          onPress={() => this.setState({ selectedTab: 'Messages' })}
        >
          <MessagesView />
        </TabBarItemIOS>
        <TabBarItemIOS
          title='Profile'
          selected={this.state.selectedTab === 'Profile'}
          iconName='ios-person'
          onPress={() => this.setState({ selectedTab: 'Profile' })}
        >
          <ProfileView currentUser={user} logout={this.logout}/>
        </TabBarItemIOS>
      </TabBarIOS>
		)
	}
}

export default Dashboard;

