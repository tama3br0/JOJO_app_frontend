import { Box, Image, Flex, Text, Grid } from '@chakra-ui/react';
import Link from 'next/link';

const MyPost = ({ posts }) => {
    return (
        <>
            <Grid templateColumns="repeat(3, 1fr)" gap={4}>
                {posts.map(post => (
                    <Link key={post.id} href={`/posts/${post.id}`}>
                        <Box key={post.id} mt="4">
                            <Image src={`http://localhost:3000${post.image.url}`} alt={post.title} boxSize="200px" objectFit="cover" />
                            <Text mt="2" boxSize="200px" objectFit="cover">{post.title}</Text>
                            <Text fontSize="sm" color="gray.500">{post.created_at}</Text>
                        </Box>
                    </Link>
                ))}
            </Grid>
        </>
    );
};

export default MyPost;