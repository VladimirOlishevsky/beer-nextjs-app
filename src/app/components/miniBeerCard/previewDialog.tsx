'use client';
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
    Heading
} from "@chakra-ui/react"

interface IPreviewDialogProps extends IBeerEntity { }

export const PreviewDialog = (beerEntity: IPreviewDialogProps) => {
    const { name, description, image_url, id, abv, first_brewed, food_pairing, ibu } = beerEntity
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>
            <Button w={'max-content'} variant='solid' colorScheme='teal' size='sm' onClick={onOpen}>Open preview</Button>
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
                            <CardBody>
                                <Heading size='md' w={300}>{name}</Heading>

                                <Text py='2' w={300}>
                                    {description}
                                </Text>
                            </CardBody>
                        </Stack>
                    </Card>
                </ModalContent>
            </Modal>
        </>
    )
}