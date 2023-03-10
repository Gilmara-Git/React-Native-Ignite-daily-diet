import styled from 'styled-components/native';
import { SafeAreaView } from 'react-native';

export const Container = styled(SafeAreaView)`
    background-color: ${({theme})=> theme.COLORS.background};
    flex: 1; 
    padding: 24px;
   

`