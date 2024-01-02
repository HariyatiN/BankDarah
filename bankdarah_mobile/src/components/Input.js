import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Dimensions} from 'react-native'
import tw from 'twrnc';
import Icons from "react-native-vector-icons/Feather";


const Input = ({
    variant,
    title,
    leftIcons,
    rightIcons,
    rightAction,
    onChangeText,
    placeholder,
    labelselect,
}) => {

    const [focus, setFocus] = useState(false)
    const [lihatPassword, setLihatPassword] = useState(true)

    if (variant === 'email') {
        return (
            <View
                style={{
                    ...tw`mb-3`
                }}
            >
                <Text style={{ ...tw`text-sm font-medium text-slate-500` }}>{title}</Text>
               <View
                    style={{
                        ...tw`relative`
                    }}
               >
                    <View
                          style={{
                            ...tw`absolute z-10 h-[48px] w-[48px] flex items-center justify-center`
                        }}
                    >
                        <Icons name={leftIcons} size={20} />
                    </View>
                    <TextInput
                        placeholder={placeholder}
                        style={{
                            ...tw`border border-slate-400 bg-slate-200 h-[48px] rounded-md pl-[48px] font-medium text-slate-600 ${focus ? 'border-blue-500' : null}`
                        }}
                        onFocus={()=> setFocus(true)}
                        onBlur={()=> setFocus(false)}
                        onChangeText={onChangeText}
                    />
                </View>
            </View>
        )
    }
    if (variant === 'password') {
        return (
            <View
                style={{
                    ...tw`mb-3`
                }}
            >
                <Text style={{ ...tw`text-sm font-medium text-slate-500` }}>{title}</Text>
               <View
                    style={{
                        ...tw`relative`
                    }}
               >
                    <View
                          style={{
                            ...tw`absolute z-10 h-[48px] w-[48px] flex items-center justify-center`
                        }}
                    >
                        <Icons name={leftIcons} size={20} />
                    </View>
                    <TextInput
                        placeholder={placeholder}
                        style={{
                            ...tw`border border-slate-400 bg-slate-200 h-[48px] rounded-md pl-[48px] font-medium text-slate-600 ${focus ? 'border-blue-500' : null}`
                        }}
                        onFocus={()=> setFocus(true)}
                        onBlur={()=> setFocus(false)}
                        onChangeText={onChangeText}
                        secureTextEntry={lihatPassword}
                    />
                     <TouchableOpacity
                        onPress={()=> setLihatPassword(!lihatPassword)}
                          style={{
                            ...tw`absolute z-10 h-[48px] w-[48px] flex items-center justify-center right-0`
                        }}
                    >
                        <Icons name={lihatPassword ? 'eye-off' : 'eye'} size={20} />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

   
 
}

export default Input