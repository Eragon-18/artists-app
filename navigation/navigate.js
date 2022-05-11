import React, { Component } from "react";
import { StyleSheet } from "react-native";

import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import { RFValue } from "react-native-responsive-fontsize";
import Ionicons from "react-native-vector-icons/Ionicons";

import Fb from "../screens/Fb";
import FbUpload from "../screens/FbUpload";
import Twitter from "../screens/Twitter";
import TwitterUpload from "../screens/TwitterUpload";
import SMHome from "../screens/SMHome";

import Search from "../screens/Search";
import SearchDetails from "../screens/SearchDetails";

import Profile from "../screens/Profile";
import Logout from "../screens/Logout";
import ContactUs from "../screens/ContactUs";
import UpdateProfile from "../screens/UpdateProfile";

import Home from "../screens/Home";
import AddWork from "../screens/AddWork";

const Tab = createMaterialBottomTabNavigator();
function TabNavigator() {
  return (
    <Tab.Navigator
      labeled={false}
      barStyle={styles.bottomTabStyle}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "AddWork") {
            iconName = focused ? "add-circle" : "alert-circle-outline";
          } else if (route.name === "Search") {
            iconName = focused ? "search" : "search-outline";
          } else if (route.name === "SMHome") {
            iconName = focused ? "share-social" : "share-social-outline";
          } else if (route.name === "Profile") {
            iconName = focused ? "person" : "person-outline";
          }
          return (
            <Ionicons
              name={iconName}
              size={RFValue(25)}
              color={color}
              style={styles.icons}
            />
          );
        },
      })}
      activeColor={"#25CDEF"}
      inactiveColor={"gray"}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="AddWork" component={AddWork} />
      <Tab.Screen name="Search" component={SearchStackNavigator} />
      <Tab.Screen name="SMHome" component={SMStackNavigator} />
      <Tab.Screen name="Profile" component={ProfileStackNavigator} />
    </Tab.Navigator>
  );
}
export default TabNavigator;

const SMStack = createStackNavigator();
const SMStackNavigator = () => {
  return (
    <SMStack.Navigator
      initialRouteName="SMHome"
      screenOptions={{ headerShown: false }}
    >
      <SMStack.Screen name="SMHome" component={SMHome} />
      <SMStack.Screen name="Fb" component={Fb} />
      <SMStack.Screen name="FbUpload" component={FbUpload} />
      <SMStack.Screen name="Twitter" component={Twitter} />
      <SMStack.Screen name="TwitterUpload" component={TwitterUpload} />
    </SMStack.Navigator>
  );
};

const SearchStack = createStackNavigator();
const SearchStackNavigator = () => {
  return (
    <SearchStack.Navigator
      initialRouteName="Search"
      screenOptions={{ headerShown: false }}
    >
      <SearchStack.Screen name="Search" component={Search} />
      <SearchStack.Screen name="SearchDetails" component={SearchDetails} />
    </SearchStack.Navigator>
  );
};

const ProfileStack = createStackNavigator();
const ProfileStackNavigator = () => {
  return (
    <ProfileStack.Navigator
      initialRouteName="Profile"
      screenOptions={{ headerShown: false }}
    >
      <ProfileStack.Screen name="Profile" component={Profile} />
      <ProfileStack.Screen name="UpdateProfile" component={UpdateProfile} />
      <ProfileStack.Screen name="Logout" component={Logout} />
      <ProfileStack.Screen name="ContactUs" component={ContactUs} />
    </ProfileStack.Navigator>
  );
};

const styles = StyleSheet.create({
  bottomTabStyle: {
    backgroundColor: "#2C3332",
    height: "8%",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    overflow: "hidden",
    position: "absolute",
  },
  icons: {
    width: RFValue(30),
    height: RFValue(30),
  },
});
