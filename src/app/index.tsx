import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Link } from 'expo-router';
import { useState } from 'react';
import { Alert, Image, View } from 'react-native';

import { Input } from '@/components/Input';
import { Button } from '@/components/button';
import { colors } from '@/styles/colors';

export default function Home() {
  const [code, setCode] = useState('');

  function handleAccessCredential() {
    if (!code.trim()) {
      return Alert.alert('Credencial', 'Informe o código do ingresso');
    }

    console.warn(code);
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

        <Button onPress={handleAccessCredential}>Verificar credencial</Button>

        <Link
          href="/register"
          className="text-gray-100 text-base font-bold text-center mt-8">
          Ainda não possuo ingresso
        </Link>
      </View>
    </View>
  );
}
