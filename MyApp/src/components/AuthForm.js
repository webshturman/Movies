import React from 'react';
import {InputItem} from "./InputItem";
import {StyleSheet, Text, View} from "react-native";

export const AuthForm = ({formData, formName}) => {
    return (
        <View>
            <Text style={styles.textPage}>{formName}</Text>
            {formData.length > 0 && formData.map(({title, keyboardType, secureTextEntry, value, setValue}) => {
                return <InputItem value={value}
                                  setValue={setValue}
                                  placeholder={title}
                                  keyboardType={keyboardType}
                                  secureTextEntry={secureTextEntry}/>
            })

            }
        </View>
    );
};


const styles = StyleSheet.create({
    textPage: {
        marginTop: 10,
        marginBottom: 10,
        color: 'rgb(90,97,169)',
        textAlign: 'center',
        fontSize: 24,
        fontWeight: 'bold',
    },
    BlockLogin: {
        margin: '5%',
    },
});
