import { ModalBackdrop, InteractionBox, Title } from './styles';
import { TouchableOpacityProps } from 'react-native';
import React from 'react';

type ModalProps = TouchableOpacityProps &{   
    title: string | number | undefined;
    children?: React.ReactNode;
    onCancel: ()=>void;
    height: number;
}

export const Modal = ({ height, title, children, onCancel, ...rest}: ModalProps)=>{

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