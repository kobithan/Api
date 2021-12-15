import React, { useState, useEffect } from 'react'
import { View, StyleSheet, Text, Button, FlatList } from 'react-native'
import NewsCard from '../components/Huex'
import newAPI from '../apis/Huex'

const Huex = ({ navigation }) => {

    // const [news, setNews] = useState([])
    const [huex, setHuex] = useState([]);

    useEffect(() => {
        getHuexFromAPI()
    }, [])

    // const newsResponse = async() =>{
    //     const response = await newAPI.get('top-headlines?country=us&apiKey=aa6a097fb9fb4509958fdabd1942e6d1')
    //     console.log(response.data)
    // }

    function getHuexFromAPI() {
        newAPI.get('http://oiikii.huex.xyz:8080/api/v1/service')
            .then(async function (response) {JSON.stringify(response),
                console.log(response.data)

                setHuex(response.data);
            })
            .catch(function (error) {
                console.log(error)
            })
    }

    if (!huex) {
        return null
    }



    return (
        <View>
            <FlatList data={huex.service}
                keyExtractor={(item, index) => 'key' + index}
                renderItem={({item}) => {
                    return <HuexCard item = {item}/>
                }}
            />
        </View>
    )
}

export default Huex




