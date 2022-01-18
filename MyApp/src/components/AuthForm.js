import React from 'react';
import {InputItem} from "./InputItem";
import {StyleSheet, Text, View} from "react-native";

export const AuthForm = ({formData, formName, error}) => {
    return (
        <View>
            <Text style={styles.textPage}>{formName}</Text>
            {error && <Text style={styles.textError}>All fields must be filled in correctly</Text>}
            {formData.length > 0 && formData.map(({
                                                      title,
                                                      secureTextEntry,
                                                      keyboardType,
                                                      value,
                                                      setValue,
                                                      icon
                                                  }, index) => {
                return <InputItem key={index}
                                  value={value}
                                  setValue={setValue}
                                  placeholder={title}
                                  secureTextEntry={secureTextEntry}
                                  keyboardType={keyboardType}
                                  icon={icon}/>
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
    textError: {
        color: 'red',
        marginBottom: 5,
        textAlign: 'center',
    },
    BlockLogin: {
        margin: '5%',
    },
});
