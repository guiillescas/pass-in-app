import { Feather } from '@expo/vector-icons'
import { MotiView } from 'moti'
import {
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from 'react-native'

import { QRCode } from './QRCode'

import { BadgeStoreProps } from '@/store/badge-store'
import { colors } from '@/styles/colors'

interface CredentialProps {
  data: BadgeStoreProps
  onChangeAvatar?: () => void
  onExpandQRCode?: () => void
}

export function Credential(props: CredentialProps) {
  const { height } = useWindowDimensions()

  return (
    <MotiView
      className="w-full self-stretch items-center"
      from={{
        opacity: 0,
        translateY: -height,
        rotateZ: '50deg',
        rotateY: '30deg',
        rotateX: '30deg',
      }}
      animate={{
        opacity: 1,
        translateY: 0,
        rotateZ: '0deg',
        rotateY: '0deg',
        rotateX: '0deg',
      }}
      transition={{
        type: 'spring',
        damping: 20,
        rotateZ: {
          damping: 15,
          mass: 3,
        },
      }}
    >
      <Image
        source={require('@/assets/ticket/band.png')}
        className="w-24 h-52 z-10"
      />

      <View className="bg-black/20 self-stretch items-center pb-6 border border-white/30 mx-3 rounded-2xl -mt-5">
        <ImageBackground
          source={require('@/assets/ticket/header.png')}
          className="px-6 py-8 h-40 items-center self-stretch border-b border-white/10 overflow-hidden"
        >
          <View className="w-full flex-row items-center justify-between">
            <Text className="text-zinc-50 text-sm font-bold">
              {props.data.eventTitle}
            </Text>
            <Text className="text-zinc-50 text-sm font-bold">
              #{props.data.id}
            </Text>
          </View>

          <View className="w-40 h-40 bg-black rounded-full" />
        </ImageBackground>

        {props.data.image ? (
          <TouchableOpacity onPress={props.onChangeAvatar} activeOpacity={0.8}>
            <Image
              source={{ uri: props.data.image }}
              className="w-36 h-36 rounded-full -mt-24"
            />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            className="w-36 h-36 rounded-full -mt-24 bg-gray-400 items-center justify-center"
            onPress={props.onChangeAvatar}
            activeOpacity={0.8}
          >
            <Feather name="camera" color={colors.green[400]} size={32} />
          </TouchableOpacity>
        )}

        <Text className="font-bold text-2xl text-zinc-50 mt-4">
          {props.data.name}
        </Text>
        <Text className="font-bold text-base text-zinc-300 mb-4">
          {props.data.email}
        </Text>

        <QRCode value={props.data.checkInURL} size={120} />

        <TouchableOpacity
          activeOpacity={0.8}
          className="mt-6"
          onPress={props.onExpandQRCode}
        >
          <Text className="font-body text-orange-500 text-sm">
            Ampliar QRCode
          </Text>
        </TouchableOpacity>
      </View>
    </MotiView>
  )
}
