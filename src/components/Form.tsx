import * as React from 'react';
import { Text, View, StyleSheet, TextInput, Button, Alert } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import Constants from 'expo-constants';

const Form = () => {

    const { register, setValue, handleSubmit, control, reset, formState: { errors } } = useForm({
        defaultValues: {
            firstName: '',
            lastName: ''
        }
    });

    const onSubmit = data => {
        console.log(data);
    };

    const onChange = arg => {
        return {
            value: arg.nativeEvent.text,
        };
    };

    console.log('errors', errors);

    return (
        <View style={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <Text>First name</Text>
            <Controller
                control={control}
                render={({field: { onChange, onBlur, value }}) => (
                    <TextInput
                        style={{
                            width: "75%",
                            height: 20,
                            backgroundColor: "#F2F2F2"
                        }}
                        onBlur={onBlur}
                        onChangeText={value => onChange(value)}
                        value={value}
                    />
                )}
                name="firstName"
                rules={{ required: true }}
            />
            <Text>Last name</Text>
            <Controller
                control={control}
                render={({field: { onChange, onBlur, value }}) => (
                    <TextInput
                        onBlur={onBlur}
                        onChangeText={value => onChange(value)}
                        value={value}
                    />
                )}
                name="lastName"
                rules={{ required: true }}
            />

            <View>
                <Button
                    title="Button"
                    onPress={handleSubmit(onSubmit)}
                />
            </View>
        </View>
    );
};

export default  Form;