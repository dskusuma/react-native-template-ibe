import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {navigationRef} from '../utils/navigation.utils';

import ExampleScreen from '../screens/Example/ExampleScreen';
import {Text} from 'react-native';

const Tab = createBottomTabNavigator();

interface ITab {
  name: string;
  component: React.ComponentType;
  iconName: string;
}

function TabRouter() {
  const TABS: ITab[] = [
    {
      name: 'Dashboard',
      component: ExampleScreen,
      iconName: 'home',
    },
    {
      name: 'Home',
      component: ExampleScreen,
      iconName: 'home',
    },
  ];

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          paddingVertical: 8,
          paddingBottom: 8,
          backgroundColor: '#fff',
          elevation: 10,
          borderTopWidth: 0,
          position: 'absolute',
          bottom: 0,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
        },
        tabBarLabelStyle: {
          // fontFamily: 'WorkSans',
        },
      }}>
      {TABS.map(t => (
        <Tab.Screen
          key={t.name}
          name={t.name}
          component={t.component}
          options={{
            tabBarItemStyle: {
              paddingTop: 5,
              paddingBottom: 2,
            },
            // tabBarIcon: ({color, size}) => (
            //   // TODO: Use custom icon
            //   // <Iconly name={t.iconName} color={color} size={25} />
            // ),
            tabBarStyle: {
              height: 50,
              borderTopRightRadius: 20,
              borderTopLeftRadius: 20,
            },
            headerTitle: props => <Text>{props.children}</Text>,
          }}
        />
      ))}
    </Tab.Navigator>
  );
}

const Stack = createNativeStackNavigator();
function StackRouter() {
  return (
    <Stack.Navigator
      initialRouteName={'/inapp'}
      screenOptions={{gestureEnabled: false, headerShown: false}}>
      <Stack.Screen name="/inapp" component={TabRouter} />
    </Stack.Navigator>
  );
}

export default function Router() {
  return (
    <NavigationContainer ref={navigationRef}>
      <StackRouter />
    </NavigationContainer>
  );
}
