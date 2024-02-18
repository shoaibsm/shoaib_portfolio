import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body {
        font-family: 'Montserrat', sans-serif;

		background-color: ${(props) =>
        props.theme.isDarkMode ? '#2C2C2C' : '#ffffff'};
        
    }`;

export const StyledIntroduction = styled.div`
    .Introduction__greeting{
        color: ${(props) => (props.isDarkMode ? '#ffffff' : '#212529')};
    }
    .Introduction__myName{
        color: ${(props) => (props.isDarkMode ? '#ffffff' : '#212529')};
    }
    .Introduction__role{
        color: ${(props) => (props.isDarkMode ? '#ffffff' : '#212529')};
    }
`
export const StyledSkills = styled.div`
    .Skills__headingText{
        color: ${(props) => (props.isDarkMode ? '#ffffff' : '#3A3A47')};
    }
    .Skills__nameText{
        color: ${(props) => (props.isDarkMode ? 'rgba(255,255,255, 0.9)' : '#3A3A47')};
    }
    .Skills__box{
        background-color: ${(props) => (props.isDarkMode ? '#939393' : '#edf2f4')};
    };
    .Skills__descText{
        color: ${(props) => (props.isDarkMode ? 'rgba(255,255,255, 0.7)' : '#3A3A47')};
    }
    .devProficiency{
        background-color: ${(props) => (props.isDarkMode ? '#939393' : '#edf2f4')};
    }
    .devProficiency__subHeadingText{
        color: ${(props) => (props.isDarkMode ? 'rgba(255,255,255, 0.9)' : '#3A3A47')};
    }
    .devProficiency__descText{
        color: ${(props) => (props.isDarkMode ? 'rgba(255,255,255, 0.7)' : '#3A3A47')};
    }
`
export const StyledExperience = styled.div`
    .Experience__headingText{
        color: ${(props) => (props.isDarkMode ? '#ffffff' : '#3A3A47')};
    }
    .Experience__companyName{
        color: ${(props) => (props.isDarkMode ? 'rgba(255,255,255, 0.9)' : '#3A3A47')};
    }
    .Experience__jobProfile{
        color: ${(props) => (props.isDarkMode ? 'rgba(255,255,255, 0.9)' : '#3A3A47')};
    }
    .Experience__jobSummary{
        color: ${(props) => (props.isDarkMode ? 'rgba(255,255,255, 0.7)' : '#3A3A47')};
    }
    .Experience__jobDescHeading{
        color: ${(props) => (props.isDarkMode ? 'rgba(255, 255, 255, 0.9)' : '#3A3A47')};
    }
    .Experience__jobDesc li{
        color: ${(props) => (props.isDarkMode ? 'rgba(255,255,255, 0.7)' : '#3A3A47')};
    }

    .Experience__bottomSummary{
        color: ${(props) => (props.isDarkMode ? 'rgba(255,255,255, 0.7)' : '#3A3A47')};
    }

    .icon{
        color: ${(props) => (props.isDarkMode ? '#ffffff' : '#3A3A47')};
    }
`
export const StyledAboutMe = styled.div`
    .AboutMe__headingText{
        color: ${(props) => (props.isDarkMode ? '#ffffff' : '#212529')};
    }
    .AboutMe__text{
     color: ${(props) => (props.isDarkMode ? 'rgba(255,255,255, 0.7)' : '#212529')};
    }
`
export const StyledProjects = styled.div`
    .Projects__headingText{
        color: ${(props) => (props.isDarkMode ? '#ffffff' : '#212529')};
    }
    .Projects__titleText{
        color: ${(props) => (props.isDarkMode ? 'rgba(255,255,255, 0.9)' : '#212529')};
    }
    .Projects__descText{
        color: ${(props) => (props.isDarkMode ? 'rgba(255,255,255, 0.7)' : '#212529')};
    }
    .Projects__content{
        background-color: ${(props) => (props.isDarkMode ? '#939393' : '#edf2f4')};
        transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;

        &:hover {
            box-shadow: ${(props) => (props.isDarkMode ? '1px 1px 20px rgba(255, 255, 255, 0.3)' : '1px 1px 20px rgba(33, 37, 40, 0.3)')}
        }
    }
`

export const ToggleButton = styled.div`
    background-color: ${(props) => (props.isDarkMode ? '#00A9FF' : '#e9ecef')};
    color: ${(props) => (props.isDarkMode ? '#ffffff' : '#212529')};
    transition: background-color 0.3s ease-in-out;
`