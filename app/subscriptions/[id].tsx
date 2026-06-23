import {Link, useLocalSearchParams} from "expo-router";
import {Text, View} from "react-native";
import { styled } from "nativewind";
import {SafeAreaView as RNSafeAreaView} from "react-native-safe-area-context";

const SafeAreaView = styled(RNSafeAreaView);

function SubscriptionDetails() {
    const { id } = useLocalSearchParams<{ id: string }>();
    return(
        <SafeAreaView className="flex-1 bg-background p-5">
            <Text>SubscriptionDetails {id}</Text>
            <Link href="/">Go back</Link>
        </SafeAreaView>
    )
}
export default SubscriptionDetails
