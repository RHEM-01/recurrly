import {Link, useLocalSearchParams} from "expo-router";
import {View} from "react-native";

function

SubscriptionDetails() {
    const { id } = useLocalSearchParams<{ id: string }>();
    return(
        <View>
            <div>SubscriptionDetails {id}</div>
            <Link href="/">Go back</Link>
        </View>
    )
}
export default SubscriptionDetails
