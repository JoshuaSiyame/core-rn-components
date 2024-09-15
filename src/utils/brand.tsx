import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Brand = () => {
    return (
        <View>
            <Text style={styles.brand_text}>
                <Text style={styles.unwrap_text}>unwrap</Text>
                <Text style={styles.js_text}>Js</Text>
                .dev
            </Text>
        </View>
    )
}

export default Brand;

const styles = StyleSheet.create({
    brand_text: {
        fontSize: 16,
    },
    unwrap_text: {
        color: "#4285f4"
    },
    js_text: {
        color: '#fbbc05'
    }
})