import React, { Component } from 'react'
import { View, Text, TouchableOpactiy } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import NavigationBar from 'react-native-navbar';
import Colors from '../styles/colors';
import { globals } from '../styles';

class Landing extends Component {
	constructor(props) {
		super(props);
		this.visitDashboard = this.visitDashboard.bind(this)
	}
	visitDashboard() {
		this.props.navigator.push({
			name: 'Dashboard'
		});
	}
	render() {
		let titleConfig = { title: 'Landing', tintColor: 'white'};
		return (
			<View style={globals.flexContainer}>
				<NavigationBar
					title={titleCongig}
					tintColor={Collors.brandPrimary}
				/>
				<View style={globals.flexCenter}>
					<Text syle={globals.h2}>
						This is the Landing Page
					</Text>
					<TouchableOpactiy onPress={this.visitDashboard}>
						<Text>Go to the Dashboard</Text>
					</TouchableOpactiy>
				</View>
			</View>
		)
	}
}

export default Landing;