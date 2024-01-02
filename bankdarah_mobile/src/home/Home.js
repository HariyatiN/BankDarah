import { View, Text, } from 'react-native'
import React, {useState, useEffect} from 'react';
import Icons from "react-native-vector-icons/Feather";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import tw from "twrnc";
import Akun from "./akun/Akun";
import Darah from "./darah/Darah";
import Dashboard from "./dashboard/Dashboard";
import Info from "./info/Info";

const Tab = createBottomTabNavigator();

const Home = () => {

    return (
        <Tab.Navigator
        screenOptions={({ route }) => ({
            headerShown: false,
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
    
              if (route.name === 'Pendonor Aktif') {
                iconName = 'activity'; // Ganti dengan ikon yang sesuai
              } else if (route.name === 'Stok Darah') {
                iconName = 'droplet'; // Ganti dengan ikon yang sesuai
              } else if (route.name === 'Info') {
                iconName = 'info'; // Ganti dengan ikon yang sesuai
              } else if (route.name === 'Profile') {
                iconName = 'user'; // Ganti dengan ikon yang sesuai
              }
    
              return <Icons name={iconName} size={size} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: 'red', // Warna teks yang aktif
            inactiveTintColor: 'gray', // Warna teks yang tidak aktif
          }}
          sceneContainerStyle={{
            ...tw`bg-white`
          }}
        >
            
            <Tab.Screen name="Pendonor Aktif" component={Dashboard} />
            <Tab.Screen name="Stok Darah" component={Darah} />
            <Tab.Screen name="Info" component={Info} />
            <Tab.Screen name="Profile" component={Akun} />
        </Tab.Navigator>
    )
}

export default Home