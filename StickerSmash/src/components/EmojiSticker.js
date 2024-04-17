import { View, Image } from 'react-native'
import React from 'react'

export default function EmojiSticker({ imageSize, stickerSourse}) {
  return (
    <View style={{ top: -360}}>
      <Image
        source={stickerSourse}
        resizeMode='contain'
        style={{ width: imageSize, height: imageSize}} 
      />
    </View>
  )
}