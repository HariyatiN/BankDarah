import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import tw from "twrnc";


const styles = StyleSheet.create({
    titleSelect: {
        ...tw`font-medium text-slate-500 mb-3`
    },
    boxselect: {
        ...tw` flex flex-row items-center justify-between`
    },
    selectcontent: {
        ...tw`flex flex-row items-center gap-2  w-1/2`
    },
    selectCheckbox: {
        ...tw`border border-slate-300 w-[22px] h-[22px] rounded-sm`
    },
    selectCheckboxpilih: {
        ...tw`border bg-red-500 w-[22px] h-[22px] rounded-sm`
    },
    selectcheckboxtext:{
        ...tw`font-medium text-slate-500`
    }
});

const Select = ({
    label,
    check1,
    check2,
    onChangeText
}) => {


 
    const [dipilih, setdipilih] = useState('');


    function tombolpilihan(item){
        setdipilih(item)
        onChangeText(item)
    }


  return (
    <View style={{ ...tw`mb-3` }}>
        <Text style={styles.titleSelect}>{label}</Text>
        <View style={styles.boxselect}>
            <View style={styles.selectcontent}>
                <TouchableOpacity 
                    onPress={() => tombolpilihan(`${check1}`)}
                    style={[
                        dipilih == `${check1}` ? styles.selectCheckboxpilih : styles.selectCheckbox
                    ]} 
                />
                <Text style={styles.selectcheckboxtext}>{check1}</Text>
            </View>
            <View style={styles.selectcontent}>
                <TouchableOpacity 
                    onPress={() => tombolpilihan(`${check2}`)}
                    style={[
                        dipilih == `${check2}` ? styles.selectCheckboxpilih : styles.selectCheckbox
                    ]}
                />
                <Text style={styles.selectcheckboxtext}>{check2}</Text>
            </View>
        </View>
    </View>
  )
}

export default Select

