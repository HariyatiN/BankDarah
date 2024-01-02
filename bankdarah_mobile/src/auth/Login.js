import React, { useState, useEffect }  from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image, Dimensions, Alert, ImageBackground} from 'react-native';
import tw from 'twrnc';
import Input from "./../components/Input";
import { BarIndicator } from 'react-native-indicators';
import { dataApi } from "./../config/api";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { err } from 'react-native-svg';

const setWidth =  Dimensions.get('window').width;
const setHeight = Dimensions.get('window').height;

const Login = ({navigation}) => {


    useEffect(() => {
      cekLogin()
    }, [])


    async function cekLogin(){
        try {
            const value = await AsyncStorage.getItem('ceklogin');
            console.log(value)
            if (value !== null) {
                navigation.navigate('Home');
            }
        } catch (error) {
            console.log(err)
        }
    }
    

    const [kodeP, setKodeP] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setloading] = useState(false);

    function aksiLogin() {
        setloading(true);
        const data = {
            kode_p: kodeP,
            password: password,
        };
    
        try {
            fetch(`${dataApi}/login`, {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })
            .then(response => response.json())
            .then(async function(datas) {
                setloading(false);
                console.log(datas);
                const status = datas.status;
                const pesan = datas.pesan;
                if (status === 200) {
                    navigation.navigate("Home");
                    await AsyncStorage.setItem('ceklogin', JSON.stringify(datas.data));
                } else {
                    Alert.alert(`${status}`, `${pesan}`, [
                        { text: 'Mengerti', onPress: () => navigation.navigate("Login") },
                    ]);
                }
            })
            .catch(error => {
                setloading(false);
                console.error(error);
            });
        } catch (error) {
            setloading(false);
            console.log(error.message);
        }
    }
    


    return (
        <ImageBackground
            source={require('../../assets/background.png')}
            resizeMode='cover'
            style={{ ...tw`w-full h-full` }}
        >
            {
				loading ? (
					<View
						style={{ 
							...tw`flex flex-col items-center justify-center absolute z-50`,
							width: setWidth,
							height: setHeight + 50,
							backgroundColor: 'rgba(0,0,0,0.2)'
						 }}
					>
						<BarIndicator size={50} count={5} color='red'  />
						<Text style={{ ...tw`text-red-500 absolute font-bold text-base`, top: setHeight - 320 }}>Tunggu sebentar ...</Text>
					</View>
				) : null
			}
        <ScrollView>
            <View
                style={{
                    ...tw`flex items-center justify-center`,
                    height: setHeight / 2
                }}
            >
                <Image 
                    source={require('../../assets/images/dblod.jpg')} 
                    resizeMode='contain' 
                    style={{
                        width: 200,
                        height:200
                    }}
                />
            </View>
           <View
                style={{
                    ...tw`px-8`
                }}
           >
            <Input
                title="Kode"
                variant="email"
                placeholder="Masukan kode pendonor ..."
                leftIcons="maximize"
                onChangeText={text => setKodeP(text)} 
            />
            <Input
                title="Password"
                variant="password"
                placeholder="Masukan password ..."
                leftIcons={"lock"}
                onChangeText={text => setPassword(text)} 
            />
            <TouchableOpacity
                onPress={aksiLogin}
                style={{
                    ...tw`w-full h-[48px] bg-red-500 rounded-md flex items-center justify-center shadow-lg mt-6`
                }}
            >
                <Text
                    style={{
                        ...tw`font-medium text-base text-white`
                    }}
                >
                    LOGIN
                </Text>
            </TouchableOpacity>
            <View
                style={{
                    ...tw`pt-8 pb-3 flex flex-row items-center justify-center`
                }}
            >
                <View 
                    style={{
                        ...tw`w-[50px] h-[2px] bg-slate-400`
                    }}
                />
                <Text style={{ ...tw`font-medium text-sm text-slate-400 mx-6` }}>
                    Belum punya akun ?!
                </Text>
                <View 
                    style={{
                        ...tw`w-[50px] h-[2px] bg-slate-400`
                    }}
                />
            </View>
            <TouchableOpacity
                onPress={()=> navigation.navigate('Registrasi')}
                style={{
                    ...tw`w-full h-[48px] flex items-center justify-center`
                }}
            >
                <Text
                    style={{
                        ...tw`font-medium text-base text-red-500`
                    }}
                >
                    REGSITRASI DISINI
                </Text>
            </TouchableOpacity>
           </View>
        </ScrollView>
        </ImageBackground>
    )
}

export default Login