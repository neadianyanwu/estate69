import { Box, FormControl, Text, Input, Flex, Checkbox, Button } from "@chakra-ui/react"
import { useForm } from "react-hook-form";

const HeroForm = () => {

    const { register, 
        handleSubmit, 
        formState: { errors }
    } = useForm();

    const onSubmit = (data) => console.log(data) 
    return ( 
        <>
            <Box width="100%" padding="0.9rem" borderRadius="sm" marginLeft="1rem"
            backgroundColor="white" color="gray.700">
              <Text fontSize="xl" fontWeight="bold">Click Me</Text>
              <Text fontSize="lg">Complete the Form Below to get in touch</Text>
              <form onSubmit={handleSubmit(onSubmit)}>
                <FormControl>
                  <Input
                    marginTop="1rem"
                    id="name"
                    type="text"
                    placeholder="Name"
                    {...register("name", { required: true })}
                  />
                  {errors.name && <Text fontSize="xs"color="red.400">{errors.name.type}</Text>}
                  <Flex gap={{base: "0", sm: "1rem"}} flexDirection={{base: "column", sm: "row"}}>
                    <Input
                      marginTop="0.8rem"
                      id="email"
                      type="text"
                      placeholder="Email"
                      {...register("email", { required: true })}
                    />
                    {errors.email && <Text fontSize="xs"color="red.400">{errors.email.type}</Text>}
                    <Input
                      marginTop="0.8rem"
                      id="phone"
                      type="text"
                      placeholder="Phone"
                      {...register("phone", { required: true })}
                    />
                    {errors.phone && <Text fontSize="xs"color="red.400">{errors.phone.type}</Text>}
                  </Flex>
                  <Input
                      marginTop="0.8rem"
                      id="message"
                      type="text"
                      placeholder="Message"
                      {...register("message", { required: true })}
                    />
                    {/* {errors.phone && <Text fontSize="xs"color="red.400">{errors.phone.type}</Text>} */}
                  <Checkbox marginTop="0.5rem" id="ndpr" 
                  type="checkbox" placeholder="NDPR"{...register("ndpr",
                  {required: true})}>
                      I consent to having this website store my submitted info
                  </Checkbox>
                  {errors.ndpr && <Text fontSize="xs"color="red.400">{errors.ndpr.type}</Text>}
                  <Button type="submit" colorScheme="teal" 
                  width="100%" fontSize="xl" padding="1rem" marginTop="1rem">Submit</Button>
                </FormControl>
            </form>
            </Box>
        </>
     );
}
 
export default HeroForm;