import { Dimensions } from "react-native";
import styled from "styled-components/native";

const { width, height } = Dimensions.get("window");

const Box = styled.View`
    width: ${width}px;
    height: ${height}px;
    background-color: #12131b;
`;

export default Box;