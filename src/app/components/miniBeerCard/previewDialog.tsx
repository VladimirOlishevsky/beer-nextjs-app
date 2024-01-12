'use client';
import { appStore } from "@/app/store";
import { IBeerEntity } from "@/app/types/beerType";
import {
    Button,
    Modal,
    ModalCloseButton,
    ModalContent,
    ModalOverlay,
    useDisclosure,
    Image,
    Box,
    Text,
    Card,
    Stack,
    CardBody,
    Heading,
    VStack,
    Flex,
    useToast
} from "@chakra-ui/react"

interface IPreviewDialogProps extends IBeerEntity { }

export const PreviewDialog = (beerEntity: IPreviewDialogProps) => {
    const toast = useToast()
    const { name, description } = beerEntity
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>
            <Button w={'max-content'} variant='solid' colorScheme='teal' size='sm'
                onClick={(e) => {
                    e.preventDefault();
                    onOpen()
                }}>
                Open preview
            </Button>
            <Modal isOpen={isOpen} onClose={onClose} isCentered>
                <ModalOverlay />
                <ModalContent style={{ maxWidth: 1000, maxHeight: '80%', width: 'max-content' }}>
                    <ModalCloseButton />
                    <Card
                        direction={{ base: 'column', sm: 'row' }}
                        p={8}
                    >
                        <Box display={'flex'} alignItems={'center'}>
                            <Box
                                overflow={'hidden'}
                                w={200}
                                h={300}
                                display={'flex'}
                                justifyContent={'center'}
                            >
                                <Image
                                    maxWidth={'70%'}
                                    objectFit={'contain'}
                                    src={beerEntity.image_url}
                                    alt={beerEntity.name}
                                />
                            </Box>
                        </Box>
                        <ModalCloseButton />
                        <Stack>
                            <Flex w={300} p={0} h={'100%'} justify={'space-between'} direction={'column'}>
                                <VStack alignItems={'start'}>
                                    <Heading size='md'>{name}</Heading>
                                    <Text py='2'>
                                        {description}
                                    </Text>
                                </VStack>
                                <Flex w={'100%'} justify={'end'}>
                                     <Button
                                    w={'max-content'}
                                    variant='solid'
                                    colorScheme='teal'
                                    size='sm'
                                    onClick={(e) => {
                                        appStore.setBeersToFavorite(beerEntity);
                                        toast({
                                            title: `Successfully added to favorites!`,
                                            status: 'success',
                                            position: 'top',
                                            isClosable: true,
                                        })
                                    }}
                                >
                                    add to favorite
                                </Button>
                                </Flex>
                            </Flex>
                        </Stack>
                    </Card>
                </ModalContent>
            </Modal>
        </>
    )
}