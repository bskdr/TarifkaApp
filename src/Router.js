import {StyleSheet} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Meals from './pages/Meals';
import Detail from './pages/Detail';
import Categories from './pages/Categories';

const Stack = createStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="CategoriesPage"
          component={Categories}
          options={{
            title: 'Categories',
            headerTitleStyle: {color: '#FFA500'},
            headerTitleAlign: 'center',
            headerTintColor: '#FFA500',
          }}
        />
        <Stack.Screen
          name="MealsPage"
          component={Meals}
          options={{
            title: 'Meals',
            headerTitleStyle: {color: '#FFA500'},
            headerTitleAlign: 'center',
            headerTintColor: '#FFA500',
          }}
        />
        <Stack.Screen
          name="DetailPage"
          component={Detail}
          options={{
            title: 'Detail',
            headerTitleStyle: {color: '#FFA500'},
            headerTitleAlign: 'center',
            headerTintColor: '#FFA500',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;

const styles = StyleSheet.create({});
