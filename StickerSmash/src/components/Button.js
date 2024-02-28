import { Pressable, StyleSheet, Text, View } from 'react-native'

export default function Button({label}) {
  return (
    <View style={styles.buttonContainer}>
        <Pressable
         style={styles.button}
         onPress={() => alert("Você pressionou o Botão")}
         >
          <Text style={styles.buttonLabel}>{label}</Text>
        </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({})