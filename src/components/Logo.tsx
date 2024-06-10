import Svg, { Path, Defs, LinearGradient, Stop }  from 'react-native-svg';

const Logo = () => {
    return (
        <Svg width="290" height="75" viewBox="0 0 374 75" fill="none">
            <Path
                d="M39.99 20.53H25.36V14.92C25.36 14.3333 25.14 13.82 24.7 13.38C24.3333 12.94 23.8567 12.72 23.27 12.72H17.22C16.6333 12.72 16.12 12.94 15.68 13.38C15.3133 13.82 15.13 14.3333 15.13 14.92V27.57C15.13 28.1567 15.3133 28.67 15.68 29.11C16.12 29.55 16.6333 29.77 17.22 29.77H27.12C36.2133 29.9167 40.76 34.7567 40.76 44.29V59.58C40.76 69.26 36.2133 74.1 27.12 74.1H14.14C5.04667 74.1 0.5 69.26 0.5 59.58V52.21H15.13V60.13C15.13 60.7167 15.3133 61.23 15.68 61.67C16.12 62.11 16.6333 62.33 17.22 62.33H24.04C24.6267 62.33 25.1033 62.11 25.47 61.67C25.91 61.23 26.13 60.7167 26.13 60.13V46.16C26.13 45.5733 25.91 45.06 25.47 44.62C25.1033 44.18 24.6267 43.96 24.04 43.96H14.14C5.04667 43.96 0.5 39.12 0.5 29.44V15.25C0.5 5.57 5.04667 0.729999 14.14 0.729999H26.35C35.4433 0.729999 39.99 5.57 39.99 15.25V20.53ZM76.4009 18.22C85.4942 18.22 90.0409 23.06 90.0409 32.74V50.12H65.0709V61.34C65.0709 61.9267 65.2542 62.44 65.6209 62.88C66.0609 63.32 66.5742 63.54 67.1609 63.54H73.2109C73.7975 63.54 74.2742 63.32 74.6409 62.88C75.0809 62.44 75.3009 61.9267 75.3009 61.34V55.4H90.0409V59.58C90.0409 69.26 85.4942 74.1 76.4009 74.1H63.9709C54.8775 74.1 50.3309 69.26 50.3309 59.58V32.74C50.3309 23.06 54.8775 18.22 63.9709 18.22H76.4009ZM65.0709 40.44H75.3009V30.54C75.3009 29.9533 75.0809 29.44 74.6409 29C74.2742 28.56 73.7975 28.34 73.2109 28.34H67.1609C66.5742 28.34 66.0609 28.56 65.6209 29C65.2542 29.44 65.0709 29.9533 65.0709 30.54V40.44ZM123.104 19.32H137.844V73H124.424V70.25C122.15 72.8167 118.704 74.1 114.084 74.1H111.774C102.68 74.1 98.1336 69.26 98.1336 59.58V19.32H112.874V61.34C112.874 61.9267 113.057 62.44 113.424 62.88C113.864 63.32 114.377 63.54 114.964 63.54H121.014C121.6 63.54 122.077 63.32 122.444 62.88C122.884 62.44 123.104 61.9267 123.104 61.34V19.32ZM197.166 61.34V50.34H211.796V59.58C211.796 69.26 207.25 74.1 198.156 74.1H184.296C175.203 74.1 170.656 69.26 170.656 59.58V15.25C170.656 5.57 175.203 0.729999 184.296 0.729999H198.156C207.25 0.729999 211.796 5.57 211.796 15.25V21.96H197.166V13.38C197.166 12.7933 196.946 12.28 196.506 11.84C196.14 11.4 195.663 11.18 195.076 11.18H188.146C187.56 11.18 187.046 11.4 186.606 11.84C186.24 12.28 186.056 12.7933 186.056 13.38V61.34C186.056 61.9267 186.24 62.44 186.606 62.88C187.046 63.32 187.56 63.54 188.146 63.54H195.076C195.663 63.54 196.14 63.32 196.506 62.88C196.946 62.44 197.166 61.9267 197.166 61.34ZM260.197 32.74V59.58C260.197 69.26 255.65 74.1 246.557 74.1H234.127C225.034 74.1 220.487 69.26 220.487 59.58V32.74C220.487 23.06 225.034 18.22 234.127 18.22H246.557C255.65 18.22 260.197 23.06 260.197 32.74ZM245.457 62.66V29.55C245.457 28.9633 245.237 28.45 244.797 28.01C244.43 27.57 243.954 27.35 243.367 27.35H237.317C236.73 27.35 236.217 27.57 235.777 28.01C235.41 28.45 235.227 28.9633 235.227 29.55V62.66C235.227 63.2467 235.41 63.76 235.777 64.2C236.217 64.64 236.73 64.86 237.317 64.86H243.367C243.954 64.86 244.43 64.64 244.797 64.2C245.237 63.76 245.457 63.2467 245.457 62.66ZM293.103 18.22H295.963V32.52H288.703C286.21 32.52 284.963 33.8033 284.963 36.37V73H270.223V19.32H283.643V24.49C285.77 20.31 288.923 18.22 293.103 18.22ZM322.137 64.53H326.537V74.1H316.197C307.104 74.1 302.557 69.26 302.557 59.58V7.66H317.297V19.32H326.537V29.99H317.297V59.25C317.297 61.3033 317.701 62.6967 318.507 63.43C319.314 64.1633 320.524 64.53 322.137 64.53ZM360.317 18.22C369.41 18.22 373.957 23.06 373.957 32.74V50.12H348.987V61.34C348.987 61.9267 349.17 62.44 349.537 62.88C349.977 63.32 350.49 63.54 351.077 63.54H357.127C357.714 63.54 358.19 63.32 358.557 62.88C358.997 62.44 359.217 61.9267 359.217 61.34V55.4H373.957V59.58C373.957 69.26 369.41 74.1 360.317 74.1H347.887C338.794 74.1 334.247 69.26 334.247 59.58V32.74C334.247 23.06 338.794 18.22 347.887 18.22H360.317ZM348.987 40.44H359.217V30.54C359.217 29.9533 358.997 29.44 358.557 29C358.19 28.56 357.714 28.34 357.127 28.34H351.077C350.49 28.34 349.977 28.56 349.537 29C349.17 29.44 348.987 29.9533 348.987 30.54V40.44Z"
                fill="url(#paint0_linear_402_13)"
            />
            <Defs>
                <LinearGradient id="paint0_linear_402_13" x1="186.5" y1="-22" x2="186.5" y2="94" gradientUnits="userSpaceOnUse">
                    <Stop stopColor="#FF9700" />
                    <Stop offset="1" stopColor="#FBC231" stopOpacity="0.77" />
                </LinearGradient>
            </Defs>
        </Svg>
    )
}

export default Logo;