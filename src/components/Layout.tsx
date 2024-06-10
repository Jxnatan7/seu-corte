import React, {ReactNode} from "react";
import { Dimensions } from "react-native";
import styled from "styled-components/native";
import { colors } from "../config/theme";

interface LayoutProps {
    children: ReactNode
}

const LayoutContainer = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: ${colors.barber["900"]};
    padding: 5px;
`;

const Layout = ({ children }: LayoutProps) => {
    return (
        <LayoutContainer>
            {children}
        </LayoutContainer>
    );
};

export default Layout;
