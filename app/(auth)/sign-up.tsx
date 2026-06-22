import {Text, View} from "react-native";
import {Link} from "expo-router";

const signUp = () => {
    return (
        <View>
            <Text>SignUp</Text>
            <Link href="/(auth)/sign-in">Sign In</Link>
        </View>
    )
}

export default signUp;