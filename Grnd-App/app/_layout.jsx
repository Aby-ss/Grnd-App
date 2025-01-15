import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import TabBar from '../components/TabBar'

const _layout = () => {
  return (
    <Tabs
        screenOptions={{headerShown: false}}
        tabBar={props=> <TabBar {...props} />}
    >
        <Tabs.Screen
            name="Home"
            options={{
                title: "Home"
            }}
        />

        <Tabs.Screen
            name="index"
            options={{
                title: "Timer"
            }}
        />
    </Tabs>
  )
}

export default _layout