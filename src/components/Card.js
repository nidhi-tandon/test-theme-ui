import {Box, Image, Text, Card, Link, Styled} from 'theme-ui'
import React from "react";

export default function CustomCard({title, description, linkText, iconSrc, sx, bgImageSrc, bgImageSrcHover}) {
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
      <Box padding="35px 25px" >
        <Image src={iconSrc} boxSize="44px" marginTop="100px"/>
        <Styled.h1>
          {title}
        </Styled.h1>
        <Text color="rgba(214,219,241,0.9)"
              marginTop="20px"
              marginBottom="20px"
              sx={{
                fontSize: 16,
              }}
        >
          {description}
        </Text>
        <Link color="color.200" href="">{linkText}</Link>
      </Box>
    </Card>
  )
}
