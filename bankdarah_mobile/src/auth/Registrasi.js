import React, { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage'; // Import AsyncStorage from the correct package
import { View, Text, ScrollView, TouchableOpacity, Dimensions, Alert } from 'react-native';
import tw from 'twrnc';
import Icons from 'react-native-vector-icons/Feather';
import { BarIndicator } from 'react-native-indicators';
import { registerPendonor } from '../auth/data/fetch/register';
import { dataApi } from "./../config/api";
import Input from '../components/Input';
import Select from '../components/Select';

const setWidth = Dimensions.get('window').width;
const setHeight = Dimensions.get('window').height;

const Registrasi = ({ navigation }) => {
  const [nama, setNama] = useState('');
  const [jk, setJk] = useState('');
  const [tlp, setTlp] = useState('');
  const [alamat, setAlamat] = useState('');
  const [gol_darah, setGolDarah] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);

  async function registrasibtn() {
    setLoading(true);

    if (password === confirmPassword) {
      const dataForm = {
        nama: nama,
        jk: jk,
        tlp: tlp,
        alamat: alamat,
        gol_darah: gol_darah,
        password: password
      }
  
      fetch(`${dataApi}/register`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataForm),
      })
      .then(res => res.json())
      .then(async datas => {
        setLoading(false);
        const status = datas.status;
   
        if (status == 200) {
            const kode = datas.data.kode_p;
          const value = await AsyncStorage.setItem('ceklogin', kode);
          console.log(kode)
        }else{
          Alert.alert(`${datas.status}`, `${datas.message}`, [
            { text: 'Mengerti', onPress: () => navigation.navigate("Login") },
          ]);
        }
      })
      .catch(error => {
        setLoading(false);
        console.log(error);
      });
    }else{ 
      setLoading(false);
      setErrorMessage(true);
      setInterval(() => {
        setErrorMessage(false);
      }, 2000);
    }

    
  }






  return (
    <>
      {loading ? (
        <View
          style={{
            ...tw`flex flex-col items-center justify-center absolute z-50`,
            width: setWidth,
            height: setHeight + 50,
            backgroundColor: 'rgba(0,0,0,0.5)',
          }}
        >
          <BarIndicator size={40} count={3} color="red" />
          <Text style={{ ...tw`text-white absolute font-bold text-base`, top: setHeight - 320 }}>
            Tunggu sebentar ...
          </Text>
        </View>
      ) : null}
      {errorMessage ? (
        <View
          style={{
            ...tw`flex flex-col items-center justify-center absolute z-50`,
            width: setWidth,
            height: setHeight + 50,
            backgroundColor: 'rgba(0,0,0,0.5)',
          }}
        >
          <View
            style={{
              ...tw`flex relative flex-col items-center justify-center bg-white rounded-md p-8`,
              width: setWidth - 64,
              height: setHeight / 4,
            }}
          >
            <View
              style={{
                ...tw`flex items-center justify-center absolute -top-[40px] bg-red-500 w-[70px] h-[70px] rounded-full`,
              }}
            >
              <Icons name="alert-circle" color="white" size={30} />
            </View>
            <Text style={{ ...tw`font-semibold text-2xl text-red-500` }}>Error 404</Text>
            <Text style={{ ...tw`font-semibold text-base text-slate-500 text-center mt-2` }}>
              Ulangi password anda tidak sama dengan password sebelumnya!
            </Text>
          </View>
        </View>
      ) : null}

      <ScrollView style={{ ...tw`bg-white` }}>
        <View
          style={{
            ...tw`flex flex-row items-center pt-8 shadow-lg bg-white`,
          }}
        >
          <TouchableOpacity
            onPress={() => navigation.navigate('Login')}
            style={{
              ...tw`w-[57px] h-[57px] flex items-center justify-center`,
            }}
          >
            <Icons name="arrow-left" size={24} color={'grey'} />
          </TouchableOpacity>
          <Text style={{ ...tw`font-medium text-xl text-red-500` }}>REGISTRASI AKUN</Text>
        </View>
        <View
          style={{
            ...tw`p-8`,
          }}
        >
          <Input
            title="Nama"
            variant="email"
            placeholder="Masukan nama ..."
            leftIcons="user"
            onChangeText={(text) => setNama(text)}
          />
          <Select label="Jenis Kelamin" check1="Laki-laki" check2="Perempuan" onChangeText={(text) => setJk(text)} />
          <Input
            title="Alamat"
            variant="email"
            placeholder="Masukan alamat ..."
            leftIcons="map"
            onChangeText={(text) => setAlamat(text)}
          />
          <Input
            title="No Telepon"
            variant="email"
            placeholder="Masukan No Telepon..."
            leftIcons="smartphone"
            onChangeText={(text) => setTlp(text)}
          />
          <Input
            title="Golongan Darah"
            variant="email"
            placeholder="Masukan gol darah ..."
            leftIcons="droplet"
            onChangeText={(text) => setGolDarah(text)}
          />

          <Input
            title="Password"
            variant="password"
            placeholder="Masukan password ..."
            leftIcons="lock"
            onChangeText={(text) => setPassword(text)}
          />

          <Input
            title="Konfirmasi"
            variant="password"
            placeholder="Masukan ulang password ..."
            leftIcons="key"
            onChangeText={(text) => setConfirmPassword(text)}
          />

          <TouchableOpacity
            onPress={registrasibtn}
            style={{
              ...tw`w-full h-[48px] bg-red-500 rounded-md flex items-center justify-center shadow-lg mt-8`,
            }}
          >
            <Text
              style={{
                ...tw`font-medium text-base text-white`,
              }}
            >
              REGISTRASI
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </>
  );
};

export default Registrasi;
