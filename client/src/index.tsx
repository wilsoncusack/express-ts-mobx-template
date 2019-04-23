import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {observable} from 'mobx';
import {observer} from 'mobx-react';
import DevTools from 'mobx-react-devtools';

class AppState {
    @observable greeting: string;
    @observable id: number; 

    constructor() {
      this.greeting = "";
      this.id = 0;
    }


    handleChange(greeting: string) {
      this.greeting = greeting
    }

    handleSubmit() {      
      fetch('/contact', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName: this.greeting,
          lastName: 'last',
        }),
      }).then(response => response.json()).then(res => this.id = res.id)
     
    }
}

@observer
class App extends React.Component<{appState: AppState}, {}> {
    render() {
        return (
            <div>
              <div>Enter your name: </div>
              <input
                id="name"
                type="text"
                value={this.props.appState.greeting}
                onChange={this.updateGreeting}
              />
              <button onClick={this.handleClick} type="submit">Submit</button>
              
              <p><b>User ID in Database</b>: {this.props.appState.id == 0 ? "pending" :  this.props.appState.id}</p>
              <DevTools />
            </div>
        );
     }

     handleClick = () => {
       this.props.appState.handleSubmit()
     }

     updateGreeting = (e: React.FormEvent<HTMLInputElement>) => {
         this.props.appState.handleChange(e.currentTarget.value);
     }
};

const appState = new AppState();
ReactDOM.render(<App appState={appState} />, document.getElementById('root'));
