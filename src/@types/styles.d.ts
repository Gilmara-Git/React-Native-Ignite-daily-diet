import 'styled-components/native';

declare module 'styled-components/native'{
    export interface DefaultTheme {
        COLORS:{
            background: string,
            brand_green_light: string,
            brand_green_mid: string,
            brand_green_dark: string,
            brand_red_light: string,
            brand_red_mid: string,
            brand_red_dark: string,
            base_white: string,
            base_gray_100:  string,
            base_gray_200: string,
            base_gray_500: string,
            base_gray_600: string,
            base_gray_700: string
    
        },
        FONT_FAMILY:{
            NunitoRegular400: string,
            NunitoBold700: string,
        }
    }
}








// import themes from '@themes';

// declare module 'styled-components/native'{
//     type ThemeType = typeof themes;

//     export interface DefaultTheme extends ThemeType {} 
// }