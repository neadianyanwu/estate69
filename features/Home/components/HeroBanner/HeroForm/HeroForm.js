import { Box, FormControl, Text, Input, Flex } from "@chakra-ui/react"
import { useForm } from "react-hook-form";

const HeroForm = () => {

    const { register, 
        handleSubmit, 
        formState: { errors }
    } = useForm();

    const onSubmit = (data) => console.log(data) 
    return ( 
        <>
            <Box width="100%" padding="2rem" borderRadius="sm" 
            backgroundColor="white" color="gray.700">
              <Text fontSize="xl" fontWeight="bold">Click Me</Text>
              <Text fontSize="lg">Complete the Form Below to get in touch</Text>
              <form onSubmit={handleSubmit(onSubmit)}>
                <FormControl>
                  <Input
                    marginTop="1.5rem"
                    id="name"
                    type="text"
                    placeholder="Name"
                    {...register("name", { required: true })}
                  />
                  {errors.name && <Text fontSize="xs"color="red.400">{errors.name.type}</Text>}
                  <Flex>
                    <Input
                      marginTop="1.5rem"
                      id="email"
                      type="text"
                      placeholder="Email"
                      {...register("email", { required: true })}
                    />
                    {errors.email && <Text fontSize="xs"color="red.400">{errors.email.type}</Text>}
                    <Input
                      marginTop="1.5rem"
                      id="phone"
                      type="text"
                      placeholder="Phone"
                      {...register("phone", { required: true })}
                    />
                    {errors.phone && <Text fontSize="xs"color="red.400">{errors.phone.type}</Text>}
                  </Flex>
                </FormControl>
            </form>
            </Box>
        </>
     );
}
 
export default HeroForm;