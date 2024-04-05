import QRCodeSvg from 'react-native-qrcode-svg'

import { colors } from '@/styles/colors'

interface QRCodeProps {
  value: string
  size: number
}

export function QRCode(props: QRCodeProps) {
  return (
    <QRCodeSvg {...props} color={colors.white} backgroundColor="transparent" />
  )
}
