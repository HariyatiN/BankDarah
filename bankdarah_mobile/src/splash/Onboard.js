import React, { useEffect} from 'react';
import tw from 'twrnc';
import { View, Text, Dimensions, StatusBar, Image, ImageBackground } from 'react-native';

const setWidth =  Dimensions.get('window').width;
const setHeight = Dimensions.get('window').height;


const Onboard = ({navigation}) => {

    useEffect(() => {
        setTimeout(() => {
            navigation.navigate("Login")
        }, 3000);
    }, [])
    

    return (
        <ImageBackground
            source={require('../../assets/background.png')}
            resizeMode='cover'
            style={{ ...tw`w-full h-full` }}>
          <View
            style={{
                ...tw`flex items-center justify-center`,
                width: setWidth,
                height: setHeight + 48
            }} 
        >
            <StatusBar barStyle={'dark-content'} backgroundColor={'transparent'} translucent />
            <Image 
                source={require('../../assets/images/dblod.jpg')} 
                resizeMode='contain' 
                style={{
                    width: 200,
                    height: 200
                }}
            />
        </View>
        </ImageBackground>
    )
}

export default Onboard