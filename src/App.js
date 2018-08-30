import React, { Component } from 'react';
import { Layout, Menu, Icon, Pagination, Card } from 'antd';
import { getDiscoverMovies } from './Services/DiscoverMovies';
import ImageMissing from './static/image-missing.png';
import MovieAppLogo from './static/mva_96x96.png';

const { Header, Content } = Layout;
const { Meta } = Card;

class App extends Component {
  state = {
    movies: [],
    sortby: 'popularity.desc',
    page: '1',
    loadingMovies: false
  };

  loadMovies = () => {
    this.setState( { loadingMovies: true });
    
    getDiscoverMovies(this.state.sortby, this.state.page).then(response => {
      this.setState({ loadingMovies: false });
      if (response.status === 200) {
        this.setState({ movies: response.data.results });
      }
    });
  };

  onShowSizeChange(current, pageSize) {
    console.log(current, pageSize);
  }

  componentDidMount() {
    this.loadMovies();
  }

  render() {
    return (
      <Layout>
        <Header style={{ backgroundColor: '#fff', height:'96px', position: 'fixed', zIndex: 1, width: '100%' }}>
          <a href="/">
            <img style={{ float: "left" }} src={MovieAppLogo} alt="Movie App Logo" />
          </a>
          <Menu
            theme="light"
            mode="horizontal"
            style={{ lineHeight: '96px' }}
          >
            <Menu.SubMenu title={<span><Icon type="setting" />Sort By</span>}>
              <Menu.Item key=''>Popularity Ascending</Menu.Item>
              <Menu.Item key=''>Popularity Descending</Menu.Item>
              <Menu.Item key=''>Release Date Ascending</Menu.Item>
              <Menu.Item key=''>Release Date Descending</Menu.Item>
              <Menu.Item key=''>Title Ascending</Menu.Item>
              <Menu.Item key=''>Title Descending</Menu.Item>
            </Menu.SubMenu>
          </Menu>
        </Header>
        <Content style={{ padding: '0 50px', marginTop: 96 }}>
          <Pagination showSizeChanger onShowSizeChange={this.onShowSizeChange} defaultCurrent={1} total={50} />
          {this.state.loadingMovies ? <h3>Loading... please wait</h3> : null}
          {this.state.movies.map((item, index) => (
            <Card
              hoverable
              style={{ width: 240 }}
              cover={
                <img 
                  alt={item.title} 
                  src={`http://image.tmdb.org/t/p/original${item.poster_path}`} 
                  onError={e => {
                    e.target.src = `${ImageMissing}`;
                  }} 
                />
              }
            >
              <Meta
                title={item.title}
                description={item.original_title}
              />
            </Card>
        ))}
        </Content>
      </Layout>
    );
  }
}

export default App;
