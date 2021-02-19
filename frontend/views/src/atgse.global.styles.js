// @flow strict-local
import {injectGlobal} from "emotion";

import rubrikWoff from "../assets/fonts/atgwebrubrik.woff";
import rubrikTtf from "../assets/fonts/atgwebrubrik.ttf";
import rubrikSvg from "../assets/fonts/atgwebrubrik.svg";

injectGlobal`
    html {
        height: 100%;
        font-size: @font-size-base;
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
        -webkit-tap-highlight-color: rgba(0,0,0,0);
    }

    body {
        font-size: 12px;
        font-family: Roboto;
        line-height: 1.428571429;
        color: #595953;
        background-color: #142433;
        min-width: 320px;
    }

    *,
    *:before,
    *:after {
        box-sizing: border-box;
    }

    input,
    button,
    select,
    textarea {
        font-family: inherit;
        font-size: inherit;
        line-height: inherit;
    }

    a, input, button {
        -ms-touch-action: none !important;
    }

    a {
        color: #004F9F;
        text-decoration: none;
    }

    a:hover {
        color: darken(#004F9F, 15%);
    }

    label {
        font-weight: normal;
        margin-bottom: 0;

        > * {
            pointer-events: none;
        }
    }

    hr {
        margin-top: 17px;
        margin-bottom: 17px;
        border: 0;
        border-top: 1px solid #d7dcdf;
    }

    @font-face {
        font-family: 'ATGRubrik';
        src: url(${rubrikWoff}) format('woff'),
            url(${rubrikTtf}) format('truetype'),
            url(${rubrikSvg}) format('svg');
        font-weight: normal;
        font-style: normal;
    }
`;
