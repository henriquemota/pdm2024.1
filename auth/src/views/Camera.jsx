import { CameraView, useCameraPermissions } from 'expo-camera'
import React, { useState } from 'react'
import { Button, Text, TouchableOpacity, View } from 'react-native'

const Camera = () => {
  const [facing, setFacing] = useState('back')
  const [permission, requestPermission] = useCameraPermissions()

  function toggleCameraFacing() {
    setFacing(current => (current === 'back' ? 'front' : 'back'))
  }

  if (!permission) return <View />
  if (!permission.granted)
    return (
      <View style={{ padding: 8 }}>
        <Text style={{ textAlign: 'center' }}>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    )

  return (
    <View style={{ padding: 8, flex: 1 }}>
      <CameraView style={{ flex: 1 }} facing={facing}>
        <View style={{ flex: 1 }}>
          <TouchableOpacity style={{}} onPress={toggleCameraFacing}>
            <Text>Flip Camera</Text>
          </TouchableOpacity>
        </View>
      </CameraView>
    </View>
  )
}

export default Camera
