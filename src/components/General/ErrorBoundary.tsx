import React from "react"
import { View } from "react-native"
import AppText from './AppText';
export default class ErrorBoundary extends React.Component {
    constructor(props: any) {
        super(props)
        this.state = { error: false }
    }
    componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
        this.setState({ error: true })
    }
    render() {
        if (this.state.error)
            return (
                <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                    <AppText>Error</AppText>
                </View>
            )

        return (
            this.props.children
        )

    }
}
