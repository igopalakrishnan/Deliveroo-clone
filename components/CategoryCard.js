import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
//import { TouchableOpacity } from 'react-native-gesture-handler';

const CategoryCard = ({ imgUrl, title }) => {
    return (
        <TouchableOpacity className='relative mr-2'>
            <Image
                source={{
                    uri: imgUrl,
                }}
                className='h-20 v-20 rounded'
            />
            <Text className='bottom-5 left-0 text-white font-bold'>
                {title}
            </Text>
        </TouchableOpacity>
    )
}

export default CategoryCard
