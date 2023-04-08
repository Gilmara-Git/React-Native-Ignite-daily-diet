import { ModalBackdrop, InteractionBox, Title } from './styles';
import { MainButton } from '@components/MainButton';
import { useTheme } from 'styled-components/native';
import { TouchableOpacityProps } from 'react-native';
import React from 'react';

type ModalProps = TouchableOpacityProps &{   
    title: string;
    children?: React.ReactNode;
    onCancel: ()=>void;
    height: number;
}

export const Modal = ({ height, title, children, onCancel, ...rest}: ModalProps)=>{
    console.log(height)
    const theme =  useTheme();

    return (

        <ModalBackdrop
        onPress={onCancel}
        {...rest}
        >
            <InteractionBox 
                height={height}
            >
                <Title>{title}</Title>

                    {children}

            </InteractionBox>
        </ModalBackdrop>
    )
}