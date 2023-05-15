import React from 'react';
import {NavigationDots, SocialMedia} from '../components';

const AppWrap = (Component, idName, classNames) => function HigherOrderComponent() {
  return (
    <div id={idName} className={`app__container ${classNames}`}>
       <SocialMedia/>

       <div className='app__wrapper app__flex'>
            <Component/>
            <div className='copyright'>
                <a className='p-text' href='https://github.com/MatinJiridity'>my git</a>
                <a className='p-text' href='https://app.enhancv.com/share/d8ef5d29/?utm_medium=growth&utm_campaign=share-resume&utm_source=dynamic'>my resume</a>
            </div>
        </div>  
        <NavigationDots active={idName}/>  
    </div>
  )
}

export default AppWrap;