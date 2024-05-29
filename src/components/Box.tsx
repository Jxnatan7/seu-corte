import { Dimensions } from "react-native";
import styled from "styled-components/native";

const { width, height } = Dimensions.get("window");

const Box = styled.View`
    width: ${width}px;
    height: ${height}px;
    background-color: #12131b;
`;

export default Box;


// const colors = {
//     barber: {
//       900: '#12131b',
//       400: '#1b1c29',
//       100: '#c6c6c6'
//     },
//     button: {
//       cta: '#fba931',
//       default: '#FFF',
//       gray: '#DFDFDF',
//       danger: '#FF4040',
//       dark: '#1b1c29',
//       black: '#191b2c'
//     },
//     orange: {
//       900: '#fba931'
//     }
//   };