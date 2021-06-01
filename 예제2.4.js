class MyComponent extends Component {
    constructor(){
        super()
        this.state = {
            year: 2018
        }
    }
    updateYear() {
        this.state.year = 2019
    }
    update() {
        this.forceu-this.update()
    }
    render() {
        return(
            <View>
            <Text onPress={ () => this.updateYear() }>
                The year is: { this.state.year }
            </Text>
            <Text
              onPress={ () => this. update () }>Force Update
              </Text>
        </View>
        )
    }
}