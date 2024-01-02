import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import Icons from "react-native-vector-icons/Feather";
import tw from "twrnc";

const Darah = () => {
    return (
        <View style={{ ...tw`bg-white` }}>
            <View
                style={{ ...tw`pt-16 flex items-center justify-center flex-row bg-red-500 pb-3 px-6 shadow-md` }}
            >

                <Text style={{ ...tw`font-medium text-white text-xl` }}>STOK DARAH</Text>
            </View>
            
            <ScrollView style={{ ...tw`p-6` }}>
                <View style={{ ...tw`bg-red-100 p-3 rounded-md shadow-md flex flex-row mb-6` }}>
                    <View style={{ ...tw`w-[75px] h-[75px] rounded-md` }}>
                        <Image source={require('./../../../assets/images/user/rs-fatima.jpg')} style={{ ...tw`w-[75px] h-[75px] rounded-md` }} resizeMode='cover' />
                    </View>
                    <View style={{ ...tw`px-3` }}>
                        <Text style={{ ...tw`font-medium text-base text-slate-600 mb-1` }}>RS FATIMA</Text>
                        <Text style={{ ...tw`font-normal text-sm text-slate-700` }}>Jl.Jend.Sudirman no.27</Text>
                    </View>
                </View>
                <View style={{ ...tw`bg-red-100 p-3 rounded-md shadow-md flex flex-row mb-6` }}>
                    <View style={{ ...tw`w-[75px] h-[75px] rounded-md` }}>
                        <Image source={require('./../../../assets/images/AGUSDJAM.jpeg')} style={{ ...tw`w-[75px] h-[75px] rounded-md` }} resizeMode='cover' />
                    </View>
                    <View style={{ ...tw`px-3` }}>
                        <Text style={{ ...tw`font-medium text-base text-slate-600 mb-1` }}>RSUD AGOESDJAM</Text>
                        <Text style={{ ...tw`font-normal text-sm text-slate-700` }}>Jl. DI Panjaitan No.51</Text>
                    </View>
                </View>
                <View style={{ ...tw`bg-red-100 p-3 rounded-md shadow-md flex flex-row mb-6` }}>
                    <View style={{ ...tw`w-[75px] h-[75px] rounded-md` }}>
                        <Image source={require('./../../../assets/images/RSIA.jpg')} style={{ ...tw`w-[75px] h-[75px] rounded-md` }} resizeMode='cover' />
                    </View>
                    <View style={{ ...tw`px-3` }}>
                        <Text style={{ ...tw`font-medium text-base text-slate-600 mb-1` }}>RSIA PERMATA BUNDA</Text>
                        <Text style={{ ...tw`font-normal text-sm text-slate-700` }}>Jl. Brigjend.Katamso No.7</Text>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default Darah
