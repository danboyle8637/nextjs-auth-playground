import { createGlobalStyle } from "styled-components"

export const svgColors = {
  strongKettlebell: "#8b53f6",
  logoWhiteText: "#f8f8f8",
}

const Global = createGlobalStyle`
  :root {
    --color-mainBackground: #1E1E23;
    /* --color-mainBackground: #27274D; */
    --color-darkCardBackground: #101010;
    --color-fitnessCardAccentBackground: #2B2C3A;
    --color-nutritionCardAccentBackground: #7B81FF;
    --color-primaryBodyText: #d2d5ff;
    --color-whiteBodyText: #f8f8f8;
    --color-darkBodyText: #4d4b65;
    --color-primaryBlue: #5AFDF2;
    --color-primaryPurple: #B44CFF;
    --color-secondaryPurple: #8B53F6;
    --color-tertiaryPurple: #7B81FF;
    --color-alertPink: #FF22A5;
    --color-igniteWorkoutHeadline: #B792FF;
    --color-bodyBurnWorkoutHeadline: #AFF8FF;
  }
  
  html {
    box-sizing: border-box;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    background: var(--color-mainBackground);
    width: 100%;
    height: 100%;
  }

  section {
    margin: 0;
    padding: 0;
  }

  h1 {
    margin: 0;
    padding: 0;
    font-family: RobotoBold, sans-serif;
    font-size: 20px;
  }

  h3, h4, h5 {
    margin: 0;
    padding: 0;
    font-family: RobotoBold, sans-serif;
    font-size: 32px;
  }

  p {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
  }

  a {
    font-family: sans-serif;
  }

  button {
    margin: 0;
    padding: 0;
    background: none;
    border: none;
  }

`

export default Global
