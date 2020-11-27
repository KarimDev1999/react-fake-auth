import React, { Fragment, useEffect } from 'react';
import { Header, Profile, News, Login, Gallery } from "./components";
import { HashRouter, Route } from 'react-router-dom';
import { setAuthStatus } from './redux/actions/auth';
import { fetchImages } from './redux/actions/gallery';
import { fetchNews } from './redux/actions/news';
import { useSelector, useDispatch } from 'react-redux';
import './App.css';

function App() {

  const isAuth = useSelector(({ auth }) => auth.isAuth);
  const username = useSelector(({ auth }) => auth.username);
  const password = useSelector(({ auth }) => auth.password);
  const profileImg = useSelector(({ auth }) => auth.profileImg);
  const images = useSelector(({ gallery }) => gallery.items);
  const news = useSelector(({ news }) => news.items)

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchImages());
    dispatch(fetchNews());
  }, [])

  const setAuth = (bool) => {
    dispatch(setAuthStatus(bool))
  }

  return (
    <HashRouter>
      <Fragment>
        <Header />
        <div className='container'>
          <Route path='/profile' render={() => <Profile profileImg={profileImg} username={username} isAuth={isAuth} />} />
          <Route path='/news' render={() => <News news={news} isAuth={isAuth} />} />
          <Route path='/login' render={() => <Login setAuth={setAuth} username={username} password={password} />} />
          <Route path='/gallery' render={() => <Gallery images={images} isAuth={isAuth} />} />
        </div>


      </Fragment>
    </HashRouter>
  );
}

export default App;
