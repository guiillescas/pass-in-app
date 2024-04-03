import { ReactNode } from "react";
import { ActivityIndicator, Text, TouchableOpacity, TouchableOpacityProps } from "react-native";

interface ButtonProps extends TouchableOpacityProps {
  children: ReactNode
  isLoading?: boolean
}

export function Button(props: ButtonProps) {
  return (
    <TouchableOpacity
      className="w-full h-14 bg-orange-500 items-center justify-center rounded-lg"
      disabled={props.isLoading}
      activeOpacity={0.8}
      {...props}
    >
      {props.isLoading ? (
        <ActivityIndicator className="text-green-500" />
      ) : (
        <Text className="text-green-500 text-base font-bold">
          {props.children}
        </Text>
      )}
    </TouchableOpacity>
  )
}
