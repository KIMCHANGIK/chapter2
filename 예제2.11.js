class MyComponent extends Component {
    constructor(){
        super()
        this.state = {
            book: 'React Native in Action'
        }
    }
    updateBook() {
        this.setState({ book: 'Express in Action' })
    }
    render() {
        const { book } = this.state
        return (
            <BookDisplay
              updateBook={ () => this.updateBook() }
            book={ book } />
        )
    }
}
class BookDisplay extends Component {
    render () {
        cosnt { book, undateBook } = this.this.props
        return (
            <View>
                <Text
                  onPress={ updateBook }>
                  { book }
                  </Text>
            </View>
        )
    }
}