import { View, Text, Button, Pressable, Modal, StatusBar, StyleSheet } from 'react-native';
import { useState } from 'react';
const textLabel = 'Add your Record';

export default function Home(params) {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isModal2Visible, setIsModal2Visible] = useState(false);

    return (
        <View style={{ flex: 1, backgroundColor: "lightblue" }}>
            <Text> {textLabel} </Text>

            <View style={{ alignSelf: 'stretch', height: 100, backgroundColor: "yellow" }}>
                <Text
                    style={{ flex: 1, alignSelf: 'stretch', textAlign: 'center', verticalAlign: 'middle' }}
                >
                    View inside view
                </Text>
                <Button
                    title='Add Record'
                    onPress={() => setIsModalVisible(true)}
                    style={{ padding: 100 }}
                />
                <Button
                    title='Open Modal 2'
                    onPress={() => setIsModal2Visible(true)}
                    style={{ padding: 100 }}
                />

                <Modal
                    visible={isModalVisible}
                    onRequestClose={() => setIsModalVisible(false)}
                    animationType='slide'
                    presentationStyle='pageSheet'
                >
                    <View style={[style.maxHeight, style.container]}>
                        <Text>Modal content</Text>
                        <Button title="Close" color="midnightblue" onPress={() => setIsModalVisible(false)} />
                    </View>
                </Modal>

                <Modal
                    visible={isModal2Visible}
                    onRequestClose={() => setIsModal2Visible(false)}
                    animationType='slide'
                    presentationStyle='pageSheet'
                >
                    <View style={[style.maxHeight, style.modal2View]}>
                        <Text style={{ alignSelf: 'stretch', textAlign: 'center', height: 50, fontSize: 20 }}>Modal content</Text>
                        <Button title="Close" color="midnightblue" onPress={() => setIsModal2Visible(false)} />
                    </View>

                </Modal>
            </View>
        </View>
    )
}



const style = StyleSheet.create({
    maxHeight: {
        flex: 1
    },
    container: {
        backgroundColor: "lightblue",
        padding: 60
    },
    modal2View: {
        backgroundColor: "#484729",
        paddingHorizontal: 100,
        paddingTop: 60
    }
})