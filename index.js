import { FlatList, Text , StyleSheet } from "react-native";

export default function ProductList(props){
    const ProductList= [
        {id:1, name:'Vu Anh Tu', price:'PH23040'},
        {id:2, name:'Tran Kim Ngan', price:'PH23097'},
        {id:3, name:'Vu Manh Hung', price:'PH23432'},
        {id:4, name:'Nguyen Van Toan', price:'PH23347'},
        {id:5, name:'Tran Duc Manh', price:'PH23032'},
        {id:6, name:'Vu Hoai Nam', price:'PH23567'},
        {id:7, name:'Nguyen Duy Thuong', price:'PH25740'},
        {id:8, name:'Tran Tien Dat', price:'PH26547'},
    ];

    return(
        <FlatList 
            data={ ProductList}
            //item la giao dien tra ve sau moi vong lap
            renderItem={({item}) => (
                <>
                    <Text>Ho ten: {item.name}</Text>
                    <Text>MSV: {item.price} </Text>
                </>
            ) }
            //key la gia tri duy nhat tra ve sau moi vong lap
            keyExtractor= {(item) => item.id }
        />
    )

}

const styles = StyleSheet.create ({});

