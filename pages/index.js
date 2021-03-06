import React, { Component } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import Script from 'next/script'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';



function Home() {

  return (
    <>
      <>
        <title>OST - IT Software Solution &amp; Consulting Company </title>
        <link
          rel="shortcut icon"
          href="images/keysoft-logo.ico"
          type="image/x-icon"
        />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Bootstrap */}
        <link
          rel="stylesheet"
          href="../maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
        />
        {/* CSS */}
        <link type="text/css" rel="stylesheet" href="css/style.css" />
        <link type="text/css" rel="stylesheet" href="css/normalize.css" />
        {/* <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"> */}
        {/* Font */}
        <link
          href="https://fonts.googleapis.com/css?family=Roboto+Slab"
          rel="stylesheet"
        />
        {/* Font Awesome Icons */}
        <link type="text/css" rel="stylesheet" href="css/fontawesome.css" />
        <link type="text/css" rel="stylesheet" href="css/font-awesome.min.html" />
        <link
          rel="stylesheet"
          href="../maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css"
        />
        <link
          rel="stylesheet"
          href="../use.fontawesome.com/releases/v5.1.0/css/all.css"
        // integrity="sha384-lKuwvrZot6UHsBSfcMvOkWwlCMgc0TaWr+30HWe3a4ltaBwTZhyTEggF5tJv8tbt"
        //crossOrigin="anonymous"
        />
        {/* jQuery*/}
        {/* scroll to top button */}
        <button onClick="topFunction()" id="homeBtn" title="">
          <i className="fas fa-angle-up" />
        </button>
        {/* /scroll to top button */}
        {/* header */}
        <section id="home">
          <header>
            {/* background image */}
            <div className="header__background-image">
              <div className="header__background-image--overlay overlay"></div>
            </div>
            {/* /background image */}
            {/* text */}
            <div className="header__wrapper">
              <div className="container">
                <div className="row">
                  <div className="col-md-10 col-md-offset-1">
                    <div className="header__wrapper__content">
                      <h1
                        style={{ fontSize: "300%" }}
                        className="header__wrapper__content__title--white"
                      >
                        L???i ??ch c???a kh??ch h??ng l?? s??? s???ng c??n c???a ch??ng t??i{" "}
                      </h1>
                      <p className="header__wrapper__content__text--white">CH??O M???NG ?????N V???I OST.VN!</p>
                      <a href="#about"><button className="btn--white">T??M HI???U</button></a>
                      <a href="#keysoftFooter">
                        <button className="btn--orange">LI??N H???</button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* /text */}
            {/* navigation bar */}
            <nav className="nav-bar navbar navbar-fixed-top" id="navBar">
              <div className="nav-bar__container container">
                {/* logo */}
                <div className="nav-bar__header">
                  <a className="nav-bar__logo navbar-brand" href="#">
                    <img src="images/keysoft-logo.png" />
                  </a>
                </div>
                {/* /logo */}
                {/* main menu */}
                <div
                  className="nav-bar__main-menu navbar-right navbar-collapse collapse"
                  id="mainNavBar"
                >
                  <ul className="nav-bar__main-menu__menu nav navbar-nav">
                    <li>
                      <a className="active" href="#about">
                        GI???I THI???U
                      </a>
                    </li>
                    <li>
                      <a className="active" href="#services">
                        D???CH V???
                      </a>
                    </li>
                    <li>
                      <a href="#projects">D??? ??N</a>
                    </li>
                    <li>
                      <a href="#members">?????I NG??</a>
                    </li>
                    <li>
                      <a href="#keysoftFooter">LI??N H???</a>
                    </li>
                  </ul>
                </div>
                {/* /main menu */}
              </div>
            </nav>
            {/* /navigation bar */}
          </header>
        </section>
        {/* /header */}
        {/* about */}
        <section id="about">
          <div className="section__container container">
            <div className="row">
              {/* title */}
              <div className="section__title">
                <h2>V??? OST.VN</h2>
                <hr className="section__title__underline" />
              </div>
              {/* /title */}
              {/* contents */}
              {/* text */}
              <div className="about__text col-md-6">
                <p>
                  C??ng ty lu??n h?????ng t???i nh???ng c??ng ngh??? cao nh???m m???c ????ch t?? v???n c??ng
                  nh?? x??y d???ng nh???ng ph???n m???m c?? ch???t l?????ng cao t???i kh??ch ha??ng. Ch??nh
                  ??i???u n??y ???? mang l???i hi???u qu??? kinh t??? cho kh??ch h??ng trong b???i c???nh
                  kinh t??? h???i nh???p.
                </p>
                <p>
                  C??ng ty ???? x??y d???ng nh???ng nguy??n t???c chu???n trong ph???c v??? kh??ch h??ng
                  nh?? sau:
                </p>
                <div className="about__text__feature">
                  <i className="fas fa-hand-point-right" />
                  <p>????p ???ng nhanh ch??ng v?? hi???u qu??? m???i y??u c???u c???a kh??ch h??ng.</p>
                </div>
                <div className="about__text__feature">
                  <i className="fas fa-hand-point-right" />
                  <p>
                    ?????m b???o s??? ho???t ?????ng li??n t???c ?????i v???i c??c d???ch v??? m?? C??ng ty cung
                    c???p.
                  </p>
                </div>
                <div className="about__text__feature">
                  <i className="fas fa-hand-point-right" />
                  <p>Nhi???t t??nh, chu ????o v???i th??i ????? nhanh nh???n, h??a nh??.</p>
                </div>
                <div className="about__text__feature">
                  <i className="fas fa-hand-point-right" />
                  <p>
                    ?????m b???o cung c???p d???ch v??? v???i gi?? c??? h???p l?? v?? s???c c???nh tranh cao.
                  </p>
                </div>
                <div className="about__text__feature">
                  <i className="fas fa-hand-point-right" />
                  <p>
                    Lu??n quan t??m ?????n ch??nh s??ch ????o t???o nh??n vi??n ????? ?????m b???o t??nh
                    chuy??n m??n cao.
                  </p>
                </div>
              </div>
              {/* /text */}
              {/* images */}
              <div className="about__image__slide-show col-md-6" id="slideShow">
                <Carousel autoPlay={true} infiniteLoop={true} showThumbs={false}>
                  <div>
                    <img src="images/index-about-it.jpg" />
                  </div>
                  <div>
                    <img src="images/index-about-bigdata.jpg" />
                  </div>
                  <div>
                    <img src="images/index-about-ai.png" />
                  </div>
                </Carousel>
              </div>
              {/* /images */}
              {/* /contents */}
            </div>
          </div>
        </section>
        {/* /about */}
        {/* services */}
        <section id="services">
          <div className="section__container container">
            <div className="row">
              {/* title */}
              <div className="section__title">
                <h2>D???CH V???</h2>
                <hr className="section__title__underline" />
              </div>
              {/* /title */}
              {/* contents */}
              <div className="services__info col-md-4">
                <div>
                  <span>
                    <a href="#sd">
                      <i className="services__info__icon fas fa-code" />
                    </a>
                  </span>
                </div>
                <div className="services__info__text">
                  <h3>SOFTWARE DEVELOPMENT</h3>
                  <hr className="section__title__underline" />
                  <p>Thi???t k???, x??y d???ng, ph??t tri???n Front-end v?? Back-end</p>
                </div>
              </div>
              <div className="services__info col-md-4">
                <div>
                  <span>
                    <a href="#its">
                      <i className="services__info__icon fas fa-laptop" />
                    </a>
                  </span>
                </div>
                <div className="services__info__text">
                  <h3>IT SUPPORT</h3>
                  <hr className="section__title__underline" />
                  <p>H??? tr???, ch??m s??c kh??ch h??ng sau d??? ??n</p>
                  <p>T?? v???n v??? ki???n tr??c, ph??t tri???n ph???n m???m</p>
                </div>
              </div>
              <div className="services__info col-md-4">
                <div>
                  <span>
                    <a href="#itt">
                      <i className="services__info__icon fas fa-bug" />
                    </a>
                  </span>
                </div>
                <div className="services__info__text">
                  <h3>IT TRAINING</h3>
                  <hr className="section__title__underline" />
                  <p>
                    ????o t???o, h?????ng d???n c??c b???n tr??? ho???c nh???ng ng?????i c?? ??am m?? v???i c??ng
                    ngh??? th??ng tin
                  </p>
                </div>
              </div>
              {/* /contents */}
            </div>
          </div>
        </section>
        {/* /services */}
        {/* projects */}
        <section id="projects">
          <div className="section__container container-fluid">
            {/* title */}
            <div className="section__title">
              <h2>D??? ??N</h2>
              <hr className="section__title__underline" />
            </div>
            {/* /title */}
            {/* contents */}
            <div className="projects__content__container">
              <div className="row">
                <div className="projects__content col-md-7">
                  <a href="sd.html">
                    {/* image */}
                    <img src="images/index-projects-sd.jpg" />
                    {/* /image */}
                    {/* text */}
                    <div className="projects__content__caption">
                      <div className="projects__content__caption__text">
                        <h2>SOFTWARE DEVELOPMENT</h2>
                        <p>
                          Thi???t k???, x??y d???ng, ph??t tri???n ch????ng tr??nh theo y??u c???u c???a
                          kh??ch h??ng
                        </p>
                      </div>
                    </div>
                    {/* /text */}
                  </a>
                </div>
                <div className="projects__content col-md-5">
                  <a href="its.html">
                    {/* image */}
                    <img src="images/index-projects-is.jpg" />
                    {/* /image */}
                    {/* text */}
                    <div className="projects__content__caption">
                      <div className="projects__content__caption__text">
                        <h2>IT SUPPORT</h2>
                        <p>T?? v???n, h??? tr???, kh???c ph???c s??? c??? v?? b???o h??nh s???n ph???m</p>
                      </div>
                    </div>
                    {/* text */}
                  </a>
                </div>
                <div className="projects__content col-md-12">
                  <a href="itt.html">
                    {/* image */}
                    <img src="images/index-projects-it.jpg" />
                    {/* /image */}
                    {/* text */}
                    <div className="projects__content__caption">
                      <div className="projects__content__caption__text">
                        <h2>IT TRAINING</h2>
                        <p>
                          ????o t???o, h?????ng d???n c??c b???n tr??? ho???c nh???ng ng?????i c?? ??am m??
                          v???i c??ng ngh??? th??ng tin
                        </p>
                      </div>
                    </div>
                    {/* /text */}
                  </a>
                </div>
              </div>
            </div>
            {/* /contents */}
          </div>
        </section>
        {/* /projects */}
        {/* members */}
      
        {/* /members */}
        {/* gallery */}
        <section id="gallery"></section>
        {/* /gallery */}
        {/* footer */}
        <section id="keysoftFooter">
          <footer>
            <div className="keysoft-footer__container container-fluid">
              <div className="row">
                {/* contents */}
                {/* contact */}
                <div className="keysoft-footer__contact col-md-8">
                  <h3>Li??n h???:</h3>
                  <p>
                    <i className="fas fa-map-marker-alt" /> C7 Building, Khu???t Duy Ti???n, Thanh Xu??n, H?? N???i
                  </p>
                  <p>
                    <i className="fas fa-phone" /> Phone: (84) 904 920 923
                  </p>
                  <p>
                    <i className="fas fa-envelope" /> Email:{" "}
                    <a href="mailto:ntu@ost.vn">contact@ost.vn</a>
                  </p>

                  <h3>
                    <a href="index-2.html">
                      <img
                        className="logo"
                        src="images/keysoft-logo.png"
                        alt="logo"
                      />
                    </a>
                  </h3>
                  <p>
                    "OST.VN lu??n tr??n tr???ng gi?? tr??? n???n t???ng cho s??? ph??t tri???n, ???? l??
                    c??c c?? h???i ???????c h???p t??c v???i Qu?? kh??ch h??ng. V?? kh??ng c?? b???t k??? kh??
                    kh??n n??o c?? th??? ng??n c???n ch??ng t??i mang l???i nh???ng gi?? tr??? ti???n ??ch
                    ph?? h???p v???i mong mu???n v?? l???i ??ch c???a Qu?? kh??ch h??ng. Ch??ng t??i tin
                    t?????ng r???ng v???i t???p th??? OST.VN tr??? trung, s??ng t???o v?? ??o??n k???t, s???
                    l??m h??i l??ng v?? ??em l???i th??nh c??ng cho c??c b???n."
                  </p>
                </div>
                {/* /contact */}
                {/* /contents */}
                {/* google map */}
                <div className="keysoft-footer__map col-md-4">
                  <div className="col-md-4">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3725.017864670301!2d105.80035931533185!3d20.991920994409977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135acbeff769389%3A0xc50824db75079116!2zQzcgS2h14bqldCBEdXkgVGnhur9uLCBUaGFuaCBYdcOibiBC4bqvYywgVGhhbmggWHXDom4sIEjDoCBO4buZaSwgVmlldG5hbQ!5e0!3m2!1sen!2s!4v1650619766422!5m2!1sen!2s"
                      width={600}
                      height={400}
                      frameBorder={0}
                      style={{ border: 0 }}
                      allowFullScreen=""
                      aria-hidden="false"
                      tabIndex={0}
                    />
                  </div>
                </div>
                {/* /google map */}

              </div>
            </div>
            <p> </p>
            <p> </p>
            <p> </p>
            <p> </p>
            <p />
            <div className=" text-center">
              <h5 style={{ fontSize: 13 }}>
                <small>?? OST Co.Ltd 2022. All Rights Reserved.</small>
              </h5>
            </div>
          </footer>
        </section>
        {/* /footer */}
        {/* script */}
        {/* about - image */}
        {/* /about - image */}
        {/* scroll to top button */}
        {/* /scroll to top button */}
        {/* smooth scrolling */}
        {/* /smooth scrolling */}
        {/* /script */}
      </>

    </>



  )
}

export default Home
