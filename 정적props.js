class Mycomponent extends Component {
    render() {
        return (
            <BookDisplay book="React Native in Action" />
        )
    }
}
class BookDisplay extends Component {
    render() {
        return (
            <View>
                <Text>{ this.props.book }</Text>
            </View>
        )
    }
}