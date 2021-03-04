import React from 'react'
import {Box, Flex} from "theme-ui"
import Card from './components/Card';

/* eslint-disable import/no-webpack-loader-syntax */
// @ts-ignore
import Content from '!babel-loader!@mdx-js/loader!./Content.mdx'


const customStyles = {
    box: {
        maxWidth: "315px", // overriding default maxWidth
        margin: ["20px", "0"]
    }
}

const CardComponent: React.FC = () => {
    return (
        <Box sx={{
            maxWidth: "1080px",
            margin: "auto"
        }}>
            <Flex sx={{
                justifyContent: ["center", "space-between"],
                flexDirection: ["column", "row"],
                alignItems: ["center", "center"],
            }}>
                <Card title="Razorpay Capital"
                      description="Get payments within 12 working hours &amp; never have a shortfall of working capital."
                      linkText="Learn More"
                      iconSrc="capital-icon.svg"
                      sx={customStyles}
                      bgImageSrc={"capital-bg.svg"}
                      bgImageSrcHover={"capital-dark-bg.svg"}
                />

                <Card title="Razorpay Capital"
                      description="Get payments within 12 working hours &amp; never have a shortfall of working capital."
                      linkText="Learn More"
                      iconSrc="capital-icon.svg"
                      sx={customStyles}
                      bgImageSrc={"capital-bg.svg"}
                      bgImageSrcHover={"capital-dark-bg.svg"}
                />

                <Card title="Razorpay Capital"
                      description="Get payments within 12 working hours &amp; never have a shortfall of working capital."
                      linkText="Learn More"
                      iconSrc="capital-icon.svg"
                      sx={customStyles}
                      bgImageSrc={"capital-bg.svg"}
                      bgImageSrcHover={"capital-dark-bg.svg"}
                />
            </Flex>
            <Box sx={{
                backgroundColor: "pink.800",
                margin: "16px",
                padding: "16px"

            }}>
                <Content/>
            </Box>
        </Box>
    );
}

export default CardComponent;
