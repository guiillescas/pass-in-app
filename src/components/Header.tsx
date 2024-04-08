import { Text, View } from 'react-native'

interface HeaderProps {
  title: string
}

export function Header(props: HeaderProps) {
  return (
    <View className="w-full h-28 flex-row items-end bg-green-500 px-8 pb-4 border-b border-white/10">
      <Text className="flex-1 text-white font-medium text-lg text-center">
        {props.title}
      </Text>
    </View>
  )
}
