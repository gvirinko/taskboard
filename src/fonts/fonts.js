import { createGlobalStyle } from 'styled-components'

import RobotoWoff from './roboto-regular-webfont.woff'

export default createGlobalStyle`
    @font-face {
        font-family: 'Roboto';
        src: local('Roboto'),
        url(${RobotoWoff}) format('woff');
        font-weight: 300;
        font-style: normal;
    }
`