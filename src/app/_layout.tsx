import { StatusBar } from 'react-native'
import { Slot } from 'expo-router'

import Loading from '@/components/loading'

import { 
  useFonts,
  Roboto_700Bold,
  Roboto_500Medium,
  Roboto_400Regular
} from '@expo-google-fonts/roboto'

import '../styles/global.css'

export default function Layout() {
  const [ fontsLoaded ] = useFonts({
    Roboto_700Bold,
    Roboto_500Medium,
    Roboto_400Regular
  })

  if (!fontsLoaded) {
    return <Loading />
  }

  return (
    <>
      <StatusBar barStyle="light-content" />

      <Slot />
    </>
  )
}