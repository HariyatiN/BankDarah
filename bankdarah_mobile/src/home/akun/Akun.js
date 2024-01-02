import React, { useState, useEffect } from 'react';
import { View, Text, Image, Dimensions, StatusBar, TouchableOpacity, Modal, PermissionsAndroid, ScrollView, ImageBackground } from 'react-native';
import Icons from "react-native-vector-icons/Feather";
import tw from "twrnc";
import Input from "./../../components/Input";

const lebar = Dimensions.get("screen").width;
const tinggi = Dimensions.get("screen").height;

const Akun = () => {

    const [openModal, setOpenModal] = useState(false);
    const [gambarCamera, setGambarCamera] = useState('');

    const ImagePicker = require('react-native-image-picker');



    const options = {
        title: 'Select Avatar',
        storageOptions: {
            skipBackup: true,
            path: 'images',
        },
    };

    async function bukaKamera() {
        setOpenModal(false)
        ImagePicker.launchCamera(options, (response) => {

            console.log(response)
            console.log('Response = ', response);
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            } else {
               
                setGambarCamera(response.assets[0].uri);
            }
        });
    };


    return (
        <View style={{ ...tw`relative` }}>
            <StatusBar barStyle={'dark-content'} backgroundColor={'transparent'} translucent />
            <Image
             source={require('../../../assets/bg-screen.png')}
                resizeMode='contain'
             style={{ 
                height: Dimensions.get('window').height + 200,
                 ...tw`absolute w-full top-[-15]`
              }}
            />
        <ScrollView>
            
            {/* Appbar */}
            <View
                style={{
                    ...tw`relative`
                }}
            >
                <View
                    style={{
                        ...tw`absolute  flex items-center justify-end`,
                        width: lebar * 1.3,
                        height: tinggi / 4.5,
                        borderBottomLeftRadius: 185,
                        borderBottomRightRadius: 185,
                        left: '-15%'
                    }}
                >
                    <View
                        style={{
                            ...tw`rounded-full  overflow-hidden w-[110px] h-[110px] absolute bottom-[-25%] z-20`
                        }}
                    >
                        {
                            gambarCamera == '' ? (
                                <Image
                                    source={require('../../../assets/images/Itachi.jpg')}
                                    resizeMode='contain'
                                    style={{
                                        ...tw`rounded-full w-[110px] h-[110px] bg-white border-[3px] border-white`
                                    }}
                                />
                            ) : (
                                <Image
                                    source={{ uri: gambarCamera }}
                                    resizeMode='contain'
                                    style={{
                                        ...tw`rounded-full w-[110px] h-[110px] bg-white border-[3px] border-white`
                                    }}
                                />
                            )
                        }

                        <TouchableOpacity
                            onPress={() => setOpenModal(true)}
                            style={{
                                ...tw`absolute bottom-3 right-0 bg-white p-3 rounded-full z-10`
                            }}
                        >
                            <Icons name="camera" size={20} color="red" />
                        </TouchableOpacity>
                    </View>
                    
                </View>
                <View
                        style={{ ...tw`mt-[250px] w-full p-8` }}
                    >
                        <Input
                            title="Nama"
                            variant="email"
                            leftIcons="user"
                            placeholder="Muhammad Yusuf"
                        />
                        <Input
                            title="Email"
                            variant="email"
                            leftIcons="mail"
                            placeholder="alghaziaok12@gmail.com"
                        />
                        <Input
                            title="Golongan Darah"
                            variant="email"
                            leftIcons="droplet"
                            placeholder="A+"
                        />
                        <Input
                            title="Tanggal Lahir"
                            variant="email"
                            leftIcons="calendar"
                            placeholder="10-Juli-2003"
                        />
                    </View>
            </View>
            {/* End Appbar */}


            <Modal
                animationType="slide"
                transparent={true}
                visible={openModal}
            >
                <View
                    style={{
                        ...tw` w-full h-full p-8 flex items-center justify-center bg-[rgba(0,0,0,0.3)]`
                    }}
                >
                    <TouchableOpacity
                        onPress={() => setOpenModal(false)}
                        style={{
                            ...tw`absolute top-0 flex items-center justify-center p-3 rounded-full z-10 w-full`
                        }}
                    >
                        <View
                            style={{ ...tw`w-[50px] h-[8px] bg-white rounded-full` }}
                        />
                    </TouchableOpacity>
                    <View style={{ ...tw`flex w-full gap-3 flex-row` }}>
                        <TouchableOpacity
                            style={{
                                ...tw`p-3 bg-white flex items-center justify-center rounded-lg`,
                                width: lebar / 2 - 38
                            }}
                        >
                            <Icons name="image" size={35} />
                            <Text>Pilih Galeri</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={bukaKamera}
                            style={{
                                ...tw`p-3 bg-white flex items-center justify-center rounded-lg`,
                                width: lebar / 2 - 38
                            }}
                        >
                            <Icons name="camera" size={35} />
                            <Text>Pilih Kamera</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </ScrollView>
        </View>
    )
}

export default Akun