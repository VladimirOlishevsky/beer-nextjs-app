'use client';
import { Box, Image } from "@chakra-ui/react"
import { PreviewDialog } from "./previewDialog";
import { IBeerEntity } from "@/app/types/beerType";
import Link from "next/link";

interface IMiniBeerCardProps extends IBeerEntity { }

export const MiniBeerCard = (beerEntity: IMiniBeerCardProps) => {
    return (
        <Link href={`/beers/${beerEntity.id}`}>
            <Box
                overflow={'hidden'}
                w={200}
                h={200}
                padding={4}
                display={'flex'}
                flexDirection={'column'}
                alignItems={'center'}
                justifyContent={'space-between'}
                gap={4}
                _hover={{
                    cursor: 'pointer',
                    boxShadow: '0 0 11px rgba(33,33,33,.2)'
                }}
            >
                <Image
                    maxWidth={'70%'}
                    maxHeight={'70%'}
                    objectFit={'contain'}
                    src={beerEntity.image_url}
                    alt={beerEntity.name}
                />
                <PreviewDialog {...beerEntity} />
            </Box>
        </Link>
    )
}
