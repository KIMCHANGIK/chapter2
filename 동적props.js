class Mycomponent extends Component {
    constructor() {
        super()
        this.state = {
            book: 'React Native in Action'
        }
    }
    render() {
        return (
            <BookDisplay book={this.state.book} />
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