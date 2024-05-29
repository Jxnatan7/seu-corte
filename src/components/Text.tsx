import { Dimensions } from "react-native";
import styled from "styled-components/native";

const { width, height } = Dimensions.get("window");

const CustomText = styled.Text`
    font-size: large;
    font-weight: bold;
    color: #FFF;
`;

export default CustomText;
