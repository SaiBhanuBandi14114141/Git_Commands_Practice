import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import AntIcons from 'react-native-vector-icons/AntDesign';
// import Icon from 'react-native-vector-icons/FontAwesome';
// import Icons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import WelcomeScreen from './screens/welcome.screen';
import RecentActivityScreen from './screens/recent-activity.screen';
import NotificationScreen from './screens/notification.screen';
import ProfileScreen from './screens/profile.screen';
// import {Image} from 'react-native';

const Tab = createBottomTabNavigator();

const MainContainer = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={'Welcome'}
        screenOptions={
          // (({route}) => ({
          //   tabBarIcon: ({focused, color, size}) => {
          //     let iconName;
          //     let rn = route.name;
          //     if (rn === homeName) {
          //       iconName = focused ? 'home' : 'home-outline';
          //     } else if (rn === transactionName) {
          //       iconName = focused ? 'home' : 'home-outline';
          //     } else if (rn === notificationName) {
          //       iconName = focused ? 'home' : 'home-outline';
          //     } else if (rn === profileName) {
          //       iconName = focused ? 'home' : 'home-outline';
          //     }
          //     return <Ionicons name={stepforward} size={size} color={color} />;
          //   },
          // }),
          {headerShown: false}
          // tabBarShowLabel: false
        }>
        <Tab.Screen
          name={'Welcome'}
          component={WelcomeScreen}
          options={{
            tabBarIcon: ({color, size}) => (
              <Ionicons name="home" color={color} size={size} />
              // <Icons name={'home'} color={color} size={size} />
              // <Icon name="rocket" size={30} color="#900" />
              // <AntDesign name="tags" color={color} size={size} />
              // <Image
              //   source={require('../assets/images/bottomTab_Images/home.jpeg')}
              //   style={{height: 25, width: 25}}
              // />
            ),
          }}
        />
        <Tab.Screen
          name={'Transactions'}
          component={RecentActivityScreen}
          options={{
            tabBarIcon: ({color, size}) => (
              <Feather name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name={'Notifications'}
          component={NotificationScreen}
          // options={{
          //   tabBarIcon: ({color, size}) => (
          //     <Ionicons name="home" color={color} size={size} />
          //   ),
          // }}
          options={{
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name={'Profile'}
          component={ProfileScreen}
          options={{
            tabBarIcon: ({color, size}) => (
              <AntIcons name="heart" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default MainContainer;
