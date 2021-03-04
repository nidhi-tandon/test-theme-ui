import {Box, Image, Text, Card, Link, Styled, SxProps} from 'theme-ui'
import React from "react";

interface Props {
    title: string,
    description: string,
    linkText: string,
    iconSrc: string,
    sx: {
        box: SxProps
    },
    bgImageSrc: string,
    bgImageSrcHover: string
}


const CustomCard: React.FC<Props> = ({title, description, linkText, iconSrc, sx, bgImageSrc, bgImageSrcHover}) => {
    let boxStyles = {
        backgroundImage: `url(${bgImageSrc})`,
        backgroundPositionX: "14px",
        backgroundPositionY: "top",
        backgroundRepeat: "no-repeat",
        maxWidth: "320px",
        borderRadius: "5px",
        boxShadow: "0 2px 15px rgb(17 29 143 / 11%)",
        "&:hover": {
            backgroundImage: `url(${bgImageSrcHover})`,
            transform: "scale(1.05,1.05)",
            transition: "transform 175ms ease-in,opacity 175ms ease-in,-webkit-transform 175ms ease-in",
            transformOrigin: "center",
        },
        ...sx.box
    }

    return (
        <Card backgroundColor="background.blue.800" // theme color
              sx={boxStyles}>
            <Box padding="35px 25px">
                <Image src={iconSrc} marginTop="100px" height={"44px"}/>
                <Styled.h1>
                    {title}
                </Styled.h1>
                <Text color="rgba(214,219,241,0.9)"
                      marginTop="20px"
                      marginBottom="20px"
                      sx={{
                          fontSize: 3, // theme.fontSizes[3]
                      }}
                >
                    {description}
                </Text>
                <Link color="color.200" href="">{linkText}</Link>
            </Box>
        </Card>
    )
}

export default CustomCard;