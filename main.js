import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, hashHistory, browserHistory, IndexRoute  } from 'react-router';
import Login from './components/Login';

class App extends React.Component {
   render() {
      return (
         <div>
            <ul>
               <li><Link to={`/home/`}>Home</Link></li>
               <li><Link to={`/about/`}>About</Link></li>
               <li><Link to={`/contact/`}>Contact</Link></li>
               <li><Link to={`/users/`}>Users</Link></li>
               <li><Link to={`/login/`}>Login</Link></li>
               <li><Link to={`/user/1`}>User1</Link></li>
            </ul>
				
           {this.props.children}
         </div>
      )
   }
}

// export default App;

class Account extends React.Component {
   render() {
      return (
         <div>
            <h1>Home...</h1>
         </div>
      )
   }
}

// export default Home;

class About extends React.Component {
   render() {
      return (
         <div>
            <h1>About...</h1>
         </div>
      )
   }
}

// export default About;

class Contact extends React.Component {
   render() {
      return (
         <div>
            <h1>Contact...</h1>
         </div>   
      )
   }
}

// export default Contact;

class NoMatch extends React.Component {
   render() {
      return (
         <div>
            <h1>page Not found</h1>
         </div>
      )
   }
}
// export default NoMatch;


const Users = React.createClass({
   getInitialState: function() {
    return {
      users: [{ id: 1, name: 'ABC'}, { id: 2, name: 'XYZ'}]
   };
  },
  render() {
    return (
      <div>
        <h1>Users</h1>
        <div className="master">
          <ul>
            {/* use Link to route around the app */}
            {this.state.users.map(user => (
              <li key={user.id}><Link to={`/user/${user.id}`}>{user.name}</Link></li>
            ))}
          </ul>
        </div>
        <div className="detail">
          {this.props.children}
        </div>
      </div>
    )
  }
})

const User = React.createClass({
  componentDidMount() {
    // console.log(this.props.params.userId);
    this.setState({
      // route components are rendered with useful information, like URL params
      user: findUserById(this.props.params.userId)
    })
  },
  render() {
    return (
      <div>
        <h2>{this.state.user.name}</h2>
        {/* etc. */}
      </div>
    )
  }
})


ReactDOM.render((
   
   <Router history={hashHistory}>
    <Route path="/" component={App}>
      <Route path="account" component={Account}/>
      <Route path="about" component={About}/>
      <Route path="login" component={Login}/>
      <Route path="contact" component={Contact}/>
      <Route path="users" component={Users}>
        <Route path="/user/:userId" component={User}/>
      </Route>
      <Route path="*" component={NoMatch}/>
    </Route>
  </Router>
	
), document.getElementById('app'))
