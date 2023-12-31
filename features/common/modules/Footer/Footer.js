import { Box, Flex, SimpleGrid, Text } from "@chakra-ui/react";
import { services, about, ourOffices, workWithUs } from "./footerConst";
import Link from "next/link";
import { HiHomeModern } from "react-icons/hi2";

const Footer = () => {
    return ( 
        <Box backgroundColor='teal.600'>
            <Box maxWidth="1280px" margin='0 auto' paddingY='2rem' paddingX={{base: "2rem", sm: "0"}}>
                <SimpleGrid columns='4' color='whiteAlpha.700' gap='1.6rem' minChildWidth='200px'>
                    <Flex flexDirection="column" alignItems="center">
                        <FooterHeader title="Services" />
                        {services.map((item) => (
                            <FooterLink key={item.name} {...item} / >
                        ))}
                    </Flex>
                    <Flex flexDirection="column" alignItems="center" >
                        <FooterHeader title="About" />
                        {about.map((item) => (
                            <FooterLink key={item.name} {...item} / >
                        ))}
                </Flex>
                <Flex flexDirection="column" alignItems="center">
                    <FooterHeader title="Our Offices" />
                    {ourOffices.map((item) => (
                        <FooterLink key={item.name} {...item} / >
                ))}
            </Flex>
            <Flex flexDirection="column" alignItems="center">
                <FooterHeader title="Work with Us" />
                {workWithUs.map((item) => (
                    <FooterLink key={item.name} {...item} / >
                ))}
            </Flex>
                </SimpleGrid>
            </Box>
            <Box background="teal.900" display="flex" 
            padding="2rem" justifyContent="center" alignItems="center" flexDirection="column" color="white">
            <Box display="flex" gap="2" alignItems="center">
                <HiHomeModern />
                <Text fontSize="lg" fontWeight="black">
                    6/9
                </Text>
            </Box>
            <Text marginTop="1rem" fontSize="xs" textAlign="center">&copy;All rights reserved - Copyright 6/9, 2023</Text>
            </Box>
        </Box>
     );
}
 
export default Footer;

const FooterLink = ({ name, link }) => {
  return (
    <Text>
      <Link href={link}>{name}</Link>
    </Text>
  );
};

function FooterHeader({ title }) {
    return (
        <Text as='h4' fontWeight='light' fontSize='xl' margin='1rem'>{title}</Text>
    );
}