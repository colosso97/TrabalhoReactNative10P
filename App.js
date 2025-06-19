import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Main from './src/components/Main'

export default function App() {
    return (
        <View style={styles.container}>
            <Main />
        </View>
    )
}

const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#d9d9d9",
    
        },

    }
)