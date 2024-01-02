import React, {useState, useEffect} from 'react';
import tw from 'twrnc';
import { View, Text, StatusBar, Image, ScrollView, Dimensions, TextInput, TouchableOpacity, FlatList } from 'react-native';
import Icons from "react-native-vector-icons/Feather";
const lebar = Dimensions.get("screen").width;
const tinggi = Dimensions.get("screen").height;
import { golDarah, userData } from "./../../config/dummy";
import { getPendonor } from '../../auth/data/fetch/pendonor';
import { err } from 'react-native-svg';




const Dashboard = () => {

    const [dataUser, setDataUser] = useState(userData);


    const [pendonor, setPendonor] = useState([]);



    useEffect(() => {
        function ambilData(){
            try {
                return fetch(userData)
                .then(response => response.json())
                .then(json => {
                    setDataUser(json)
                })
                .catch(error => {
                  console.error(error);
                });
            } catch (error) {
                console.error(error);
            }
        }
        ambilData();
    }, [])

    useEffect(()=>{
        ambilData();
    }, [])


    const ambilData = async ()=>{
        try {
            const data = await getPendonor();
            setPendonor(data.pendonor);
        } catch (error) {
            console.log(error.message);
            
        }
    }


    


    function renderItem({item}){
        return(
            <View
                style={{
                    ...tw`
                    flex 
                    flex-row 
                    justify-between
                    mx-6
                    mb-6
                    bg-red-100
                    p-3
                    rounded-md
                `
                }}
            >
                {
                    item.foto == 'null' ? (
                        <Image source={require('./../../../assets/images/Itachi.jpg')} style={{ ...tw`w-[70px] h-[70px] rounded-md` }} />
                    ) : (
                        <Image source={item.foto} style={{ ...tw`w-[80px] h-[80px] rounded-md` }} />
                    ) 
                }
                
                
                <View 
                    style={{
                        ...tw`w-[180px] pl-3`
                    }}
                >
                    <Text style={{ ...tw`font-bold text-xl text-slate-700` }}>{item.nama}</Text>
                    <Text>{item.alamat}</Text>
                </View>
                <View
                    style={{
                        ...tw`flex items-center justify-between`
                    }}
                >
                    <Text style={{ ...tw`font-bold text-2xl text-red-500` }}>{item.gol_darah}</Text>
                    <View
                        style={{
                            ...tw`flex flex-row items-center justify-between w-[64px]`
                        }}
                    >
                        <TouchableOpacity
                            style={{ ...tw`bg-red-200 flex items-center justify-center w-[32px] h-[32px] rounded-full` }}
                        >
                             <Icons name="message-circle" size={14} color="red" />
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{ ...tw`bg-red-200 flex items-center justify-center w-[32px] h-[32px] rounded-full` }}
                        >
                            <Icons name="phone" size={14} color="red" />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }

    function renderHeader(){
        return(
            <ScrollView
                style={{
                    ...tw`p-4 my-6`,
                }}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            >
                {
                    golDarah.map((datas, index) => {
                        return (
                            <TouchableOpacity
                                key={index}
                                style={{
                                    ...tw`bg-red-500 p-3 mr-3 flex items-center justify-center rounded-md w-[60px]`
                                }}
                                
                            >
                                <Text style={{ ...tw`font-medium text-base text-white` }}>{datas.golongan}</Text>
                            </TouchableOpacity>
                        )
                    })
                }
            </ScrollView>
        )
    }


    return (
        <View>
            <StatusBar barStyle={'dark-content'} backgroundColor={'transparent'} translucent />
            <View style={{ ...tw`flex flex-col px-6 pt-16 bg-red-600 pb-3 shadow` }}>
                <View style={{ ...tw`flex flex-row items-center bg-red-600 pb-3 shadow` }}>
                    <View style={{ ...tw`w-[35px] h-[35px] rounded-full border border-slate-400` }}>
                        <Image source={require('./../../../assets/images/PDI.jpg')} style={{ ...tw`w-[35px] h-[35px] rounded-full` }} />
                    </View>
                    <View
                        style={{
                            ...tw`ml-3`
                        }}
                    >
                        <Text style={{ ...tw`font-medium text-base text-white` }}>Muhammad </Text>
                        <Text style={{ ...tw`font-normal text-sm text-slate-50` }}>yusuf@gmail.com</Text>
                    </View>
                </View>
                <View
                    style={{
                        ...tw`relative`
                    }}
                >
                    <TouchableOpacity
                        style={{
                            ...tw`absolute z-10 w-[52px] h-[52px] flex items-center justify-center`
                        }}
                    >
                        <Icons name="search" size={20} color="grey" />
                    </TouchableOpacity>
                    <TextInput
                        placeholder='Search ...'
                        style={{
                            ...tw`w-full bg-white rounded-full border border-slate-200 px-[52px] font-medium text-slate-500 text-base`
                        }}
                    />
                </View>
            </View>
            <FlatList
                data={dataUser}
                renderItem={renderItem}
                ListHeaderComponent={renderHeader}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ ...tw`pb-[200px]` }}
            />
        </View>
    )
}

export default Dashboard