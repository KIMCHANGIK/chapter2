import React {Component} from 'react'

class MyComponent extends Component {
    constructor(){
        super()
        this.state = {
            year: 2018,
        }
    }
    updateYear() {
        this.setState({
            year: 2019
        })
    }
    render() {
        return (
            <View>
                <Text
                  onPress={() => this.updateYear()}>
                  The year is: { this.state.year }
                </Text>
            </View>
        )
    }
