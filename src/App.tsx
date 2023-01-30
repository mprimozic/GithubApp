import { Component } from 'react';
import './App.css';
import { TAppState } from './helpers/types/TAppState';
import Form from './components/Form';
import { getUser } from './services/user';
import { getRepo } from './services/repo';
import Table from './components/Table';

export default class App extends Component<{}, TAppState> {
  state = {
    showTable: false,
    user: {
      avatar_url: '',
      name: '',
      location: '',
      bio: ''
    },
    repo: [
      {
        id: '',
        name: ''
      }
    ]
  }

  onResetButtonClick = ():void => {
    this.setState({
      showTable: false
    })
  }

  onHandleSumit = (e: any):void => {
    console.log(e);
    e.preventDefault();
    const searchValue = e.target.childNodes[0].childNodes[1].value;
    const data: Promise<any> = Promise.all([getUser(searchValue), getRepo(searchValue)]);
    // const userData: Promise<any> = getUser(searchValue);
    // const repoData: Promise<any> = getRepo(searchValue);

    // userData.then((userData: IUser) => {
    //   this.setState({
    //     user: userData
    //   });
    // })
    // repoData.then((repoData: Array<IRepo>) => {
    //   this.setState({
    //     repo: repoData
    //   })
    // })
    // this.setState({
    //   showTable: true
    // });

    data.then((data: Array<any>) => {
      this.setState({
        user: data[0],
        repo: data[1],
        showTable: true
      });
    })

}

  render():JSX.Element {
    const {showTable, user, repo} = this.state;

    return (
      <>
        {
          !showTable && <Form handleSumbit={this.onHandleSumit}/>
        }
        {
          showTable && <Table handleClick={this.onResetButtonClick} user={user} repo={repo}/> 
        }

      </>

    );
  }
} 
