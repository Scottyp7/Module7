import { useState } from 'react'
import './App.css'
import BitcoinRates from './BitcoinRates'
import StateChanger from './StatesEffects'
import ReducerApp from './ReduceState'
import MyComponent from './EffectState'
import MoodChanger from './MoodState'
import { createContext } from 'react'
import { MoodProvider } from './MoodContext'
import Clock from './Clock'
import ClockDisplay from './ClockDisplay'
import ActivityFinder from './ActivityFinder'
import VideoPlayer from './VideoPlayer'

import PostListReducer from './PostListReducer'
import SubscribeForm from './SubscriberForm'
import UserProvider from './UserProvider'
import LoginForm from './LoginForm'
import MyThemeProvider from './MyThemeProvider'
import AppRoutes from './AppRoutes'
import NavBar from './NavBar'

function App() {

  return (


        <MyThemeProvider>
          <UserProvider>
            <NavBar></NavBar>
            <AppRoutes></AppRoutes>
          </UserProvider>
        </MyThemeProvider>

     )
} 
 {/*      
      
            <MoodProvider>
              <BitcoinRates></BitcoinRates>
              <MoodChanger></MoodChanger>
            </MoodProvider>
            <LoginForm></LoginForm>
            <PostListReducer></PostListReducer>
            <ReducerApp></ReducerApp>      
            <StateChanger></StateChanger>
            <MyComponent></MyComponent>
            <ActivityFinder></ActivityFinder>


*/}
export default App
