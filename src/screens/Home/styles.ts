import styled from 'styled-components/native';
import { SafeAreaView } from 'react-native';

export const Container = styled(SafeAreaView)`
    background-color: ${({theme})=> theme.COLORS.base_white};
    flex: 1; 
    padding: 24px;
   

`