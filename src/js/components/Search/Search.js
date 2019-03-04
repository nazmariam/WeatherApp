import Component from "../../framework/Component";

export default class Search extends  Component{
    constructor(host, props){
        super(host, props);

        this.requestWeather.bind(Search);

    }

    requestWeather(){
        // e.preventDefault();
        console.log('clicked');
    }

    render(){
        return [
            {
                tag: 'form',
                classList: 'search-form',
                children:[
                    {
                        tag:'label',
                        classList: 'search-label',
                        children:[
                            {
                                tag:'input',
                                classList: 'search-weather',
                                attributes: [
                                    {
                                        name: 'type',
                                        value: 'text',
                                    },
                                    {
                                        name: 'name',
                                        value:'search-weather',
                                    },
                                    {
                                        name: 'id',
                                        value: 'search-weather',
                                    },
                                    {
                                        name: 'placeholder',
                                        value: 'Enter city name or coordinates',
                                    }
                                ]
                            },
                            {
                                tag: 'button',
                                content: 'Search',
                                attributes:[
                                    {
                                        name: 'type',
                                        value: 'submit',
                                    }
                                ]
                            }
                        ]
                    }
                ],
                eventHandlers: [
                    {
                        eventType: 'click',
                        eventMethod: this.requestWeather,
                    }
                ]
            }
        ]
    }
}


