import React from 'react'
import Prodcut from '../Product/product.component'
import './Home.style.css'



const Home = () => {

    return (
        <div className="home">
            <div className="home_container">
                <img className="slider" src='https://www.topsinfosolutions.com/wp-content/uploads/2019/01/react-js-web-bg.jpg' alt='FullStack Banner' />
                {/* image slider */}<br/>
                <div className="home_row">

                    <Prodcut 
                    id={12345} 
                    title='React ZeroToMastery' 
                    price={899} rating={4} 
                    desc='Starts from basics to Mastery'
                    imageUrl='https://img-a.udemycdn.com/course/750x422/2365628_0b60_7.jpg' />

                    <Prodcut 
                    id={12346}
                    title='styleSheet Mastery' 
                    price={499} rating={5} 
                    desc='Html,Css and flexbox properties'
                    imageUrl='https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/CSS3_and_HTML5_logos_and_wordmarks.svg/1280px-CSS3_and_HTML5_logos_and_wordmarks.svg.png'/>
                </div>

                <div className="home_row">
                    <Prodcut 
                    id={12347}
                    title='JavaScript Algorithm' 
                    price={899} rating={4} 
                    desc='Javascript algorithm and DataStructures'
                    imageUrl='https://img-a.udemycdn.com/course/750x422/1406344_1d65_3.jpg'/>

                    <Prodcut 
                    id={12348}
                    title='GraphQl' 
                    price={899} rating={4} 
                    desc='Graphql basics and api structures'
                    imageUrl='https://graphql.org/img/og_image.png'/>

                    <Prodcut 
                    id={12349}
                    title='Docker' 
                    price={899} rating={4} 
                    desc='Basoc concepts to survive docker'
                    imageUrl='https://www.cbtechinc.com/app/uploads/2019/03/docker-banner-cbt.png'/>
                </div>
                
                <div className="home_row">
                    <Prodcut 
                    id={12340}
                    title='React ZeroToMastery' 
                    price={899} rating={4} 
                    desc='Starts from basics to Mastery'
                    imageUrl='https://img-a.udemycdn.com/course/750x422/2365628_0b60_7.jpg'/>

                    <Prodcut 
                    id={12341}
                    title='React ZeroToMastery' 
                    price={899} rating={4} 
                    desc='Starts from basics to Mastery'
                    imageUrl='https://img-a.udemycdn.com/course/750x422/2365628_0b60_7.jpg'/>
                </div>
            </div>
        </div>
    )

}

export default Home