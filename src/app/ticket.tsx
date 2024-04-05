import { FontAwesome } from '@expo/vector-icons'
import * as ImagePicker from 'expo-image-picker'
import { useState } from 'react'
import { Modal, ScrollView, Text, TouchableOpacity, View } from 'react-native'

import { Header } from '@/components/Header'
import { QRCode } from '@/components/QRCode'
import { Button } from '@/components/button'
import { Credential } from '@/components/credential'
import { colors } from '@/styles/colors'

export default function Ticket() {
  const [uri, setUri] = useState('')
  const [isQRCodeExpanded, setIsQRCodeExpanded] = useState(false)

  async function handleSelectImage() {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 4],
      })

      if (result.assets) {
        setUri(result.assets[0].uri)
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <View className="flex-1 bg-green-500">
      <Header title="Minha credencial" />

      <ScrollView
        className="-mt-28 -z-10"
        contentContainerClassName="px-8 pb-8"
        showsVerticalScrollIndicator={false}
      >
        <Credential
          uri={uri}
          onChangeAvatar={handleSelectImage}
          onExpandQRCode={() => setIsQRCodeExpanded(true)}
        />

        <FontAwesome
          name="angle-double-down"
          size={24}
          color={colors.gray[300]}
          className="self-center my-6"
        />

        <Text className="text-white font-bold text-2xl mt-4">
          Compartilhar credencial
        </Text>

        <Text className="text-white font-regular text-base mt-1 mb-6">
          Mostre ao mundo que você vai participar do United summit!
        </Text>

        <Button>Compartilhar</Button>

        <TouchableOpacity activeOpacity={0.8} className="mt-10">
          <Text className="text-base text-white font-bold text-center">
            Remover Ingresso
          </Text>
        </TouchableOpacity>
      </ScrollView>

      <Modal visible={isQRCodeExpanded} animationType="fade">
        <View className="flex-1 bg-green-500 items-center justify-center">
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => setIsQRCodeExpanded(false)}
          >
            <QRCode value="testeee" size={300} />

            <Text className="text-base text-white font-bold text-center mt-10">
              Fechar QRCode
            </Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  )
}
