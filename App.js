import React from 'react'
import { Image, TouchableHighlight } from 'react-native'
import {
  Container,
  Header,
  Body,
  Text,
  View,
  Button,
  Title,
  Content,
  Toast
} from 'native-base'
import ImageSlider from 'react-native-image-slider'
import { openCameraActionSheet } from './utility'
import { styles } from './styles'
import { AppObjects } from './constants'
let images = []

async function openActionSheet() {
  let imageSrc = await openCameraActionSheet()
  if (imageSrc) {
    images.push(imageSrc)
    Toast.show({
      text: AppObjects.IMAGE_ADDED
    });
  }
}

const App = () => {
  images = [
    'https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    'https://placeimg.com/640/640/beer',
  ]
  return (
    <Container>
      <Header>
        <Body>
          <Title>Image Slider for Sneed</Title>
        </Body>
      </Header>
      <Content>
        <View style={styles.container}>
          <ImageSlider
            loop
            autoPlayWithInterval={6000}
            images={images}
            onPress={({ index }) => alert(index)}
            customSlide={({ index, item, style }) => (
              <View key={index} style={[style, styles.customSlide]}>
                <Image source={{ uri: item }} style={styles.customImage} />
              </View>
            )}
            customButtons={(position, move) => (
              <View style={styles.buttons}>
                {images.map((image, index) => {
                  return (
                    <TouchableHighlight
                      key={index}
                      underlayColor='#ccc'
                      onPress={() => move(index)}
                      style={styles.button}
                    >
                      <Text style={position === index && styles.buttonSelected}>
                        {index + 1}
                      </Text>
                    </TouchableHighlight>
                  )
                })}
              </View>
            )}
          />
        </View>
        <View style={styles.addImgBtnContainer}>
          <Button style={styles.addImgBtn} onPress={() => openActionSheet()}>
            <Text>Add Image</Text>
          </Button>
        </View>
      </Content>
    </Container>
  )
}

export default App
