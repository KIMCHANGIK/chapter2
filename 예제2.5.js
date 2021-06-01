class MyComponent extends Component {
    constructor(){
        super()
        this.state = {
            year: 2018,
            leapYear: true,
            topics: ['React', 'React Native', 'JavaScript'],
            info: {
                paperback: true,
                length: '335 pages',
                type: 'programming'
            }
        }
    }
    render() {
        let leapyear = <Text>This is not a leapyear!</Text>
        if (this.state.leapYear) {
            leapyear = <Text>This is a leapyear!</Text>
        }
        return (
            <View>
                <Text>{ this.state.year }</Text>
                <Text>Lenght: { this.state.info.lenght }</Text>
                <Text>Type: { this.state.info.type }</Text>
                { leapyear }
            </View>
        )
    }
}