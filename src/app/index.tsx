import { MaterialCommunityIcons } from '@expo/vector-icons'
import { Link, Redirect } from 'expo-router'
import { useState } from 'react'
import { Alert, Image, View } from 'react-native'

import { Input } from '@/components/Input'
import { Button } from '@/components/button'
import { api } from '@/server/api'
import { useBadgeStore } from '@/store/badge-store'
import { colors } from '@/styles/colors'

export default function Home() {
  const [code, setCode] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const badgeStore = useBadgeStore()

  async function handleAccessCredential() {
    try {
      setIsLoading(true)

      if (!code.trim()) {
        return Alert.alert('Credencial', 'Informe o código do ingresso')
      }

      const { data } = await api.get(`/attendees/${code}/badge`)
      console.log({ data })

      badgeStore.save(data.badge)
    } catch (error) {
      console.log(error)

      Alert.alert('Ingresso', 'Ingresso não encontrado')
      setIsLoading(false)
    }
  }

  if (badgeStore.data?.checkInURL) {
    return <Redirect href="/ticket" />
  }

  return (
    <View className="flex-1 bg-green-500 items-center justify-center p-8">
      <Image
        source={require('@/assets/logo.png')}
        className="h-16"
        resizeMode="contain"
      />

      <View className="w-full mt-12 gap-3">
        <Input>
          <MaterialCommunityIcons
            name="ticket-confirmation-outline"
            size={20}
            color={colors.green[200]}
          />

          <Input.Field
            placeholder="Código do ingresso"
            onChangeText={setCode}
          />
        </Input>

        <Button onPress={handleAccessCredential} isLoading={isLoading}>
          Verificar credencial
        </Button>

        <Link
          href="/register"
          className="text-gray-100 text-base font-bold text-center mt-8"
        >
          Ainda não possuo ingresso
        </Link>
      </View>
    </View>
  )
}
