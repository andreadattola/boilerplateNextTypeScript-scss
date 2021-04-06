import * as React from 'react'

const Home: React.FC = () => {
  return (
    <div className='container'>
      <header className='header'>
        <img src='../images/logo.png' alt='logo' className='logo' />
        <form action='' className='search'>
          <input type='text' className='search__input' />
          <button className='search__button'>
            <svg className='search__icon'>
              <use xlinkHref='../images/sprite.svg#icon-magnifying-glass'></use>
            </svg>
          </button>
        </form>
        <nav className='user-nav'>
          <div className='user-nav__icon-box'>
            <svg className='user-nav__icon'>
              <use xlinkHref='../images/sprite.svg#icon-bookmark'></use>
            </svg>
            <span className='user-nav__notification'>2</span>
          </div>
          <div className='user-nav__icon-box'>
            <svg className='user-nav__icon'>
              <use xlinkHref='../images/sprite.svg#icon-bookmark'></use>
            </svg>
            <span className='user-nav__notification'>2</span>
          </div>
          <div className='user-nav__icon-box'>
            <img src='../images/logo.png' alt='logo' className='user-nav__logo logo' />
          </div>
        </nav>
      </header>
      <div className='content'>
        <div className='sidebar'>SideBar</div>
        <div className='hotel-view'>Hotel-View</div>
      </div>
    </div>
  )
}

export default Home
/* 


     <img className='logo' src='../images/logo.png' alt='' />
        <form className='search' action=''>
          <input className='search_input' type='search' placeholder='Search Hotels' />
          <button className='search_button'>
            <svg className='search_icon'>
              <use xlinkHref='../images/sprite.svg#icon-magnifying-glass'></use>
            </svg>
          </button>
        </form>
        <svg className='icon'>
          <use xlinkHref='../images/sprite.svg#icon-bookmark'></use>
        </svg>
        <span className='icon__notification'>2</span>
        <svg className='icon'>
          <use xlinkHref='../images/sprite.svg#icon-chat'></use>
        </svg>
        <span className='icon__notification'>7</span>
*/
