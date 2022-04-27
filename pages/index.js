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
                        Lợi ích của khách hàng là sự sống còn của chúng tôi{" "}
                      </h1>
                      <p className="header__wrapper__content__text--white">CHÀO MỪNG ĐẾN VỚI OST.VN!</p>
                      <a href="#about"><button className="btn--white">TÌM HIỂU</button></a>
                      <a href="#keysoftFooter">
                        <button className="btn--orange">LIÊN HỆ</button>
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
                        GIỚI THIỆU
                      </a>
                    </li>
                    <li>
                      <a className="active" href="#services">
                        DỊCH VỤ
                      </a>
                    </li>
                    <li>
                      <a href="#projects">DỰ ÁN</a>
                    </li>
                    <li>
                      <a href="#members">ĐỘI NGŨ</a>
                    </li>
                    <li>
                      <a href="#keysoftFooter">LIÊN HỆ</a>
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
                <h2>VỀ OST.VN</h2>
                <hr className="section__title__underline" />
              </div>
              {/* /title */}
              {/* contents */}
              {/* text */}
              <div className="about__text col-md-6">
                <p>
                  Công ty luôn hướng tới những công nghệ cao nhằm mục đích tư vấn cũng
                  như xây dựng những phần mềm có chất lượng cao tới khách hàng. Chính
                  điều này đã mang lại hiệu quả kinh tế cho khách hàng trong bối cảnh
                  kinh tế hội nhập.
                </p>
                <p>
                  Công ty đã xây dựng những nguyên tắc chuẩn trong phục vụ khách hàng
                  như sau:
                </p>
                <div className="about__text__feature">
                  <i className="fas fa-hand-point-right" />
                  <p>Đáp ứng nhanh chóng và hiệu quả mọi yêu cầu của khách hàng.</p>
                </div>
                <div className="about__text__feature">
                  <i className="fas fa-hand-point-right" />
                  <p>
                    Đảm bảo sự hoạt động liên tục đối với các dịch vụ mà Công ty cung
                    cấp.
                  </p>
                </div>
                <div className="about__text__feature">
                  <i className="fas fa-hand-point-right" />
                  <p>Nhiệt tình, chu đáo với thái độ nhanh nhẹn, hòa nhã.</p>
                </div>
                <div className="about__text__feature">
                  <i className="fas fa-hand-point-right" />
                  <p>
                    Đảm bảo cung cấp dịch vụ với giá cả hợp lý và sức cạnh tranh cao.
                  </p>
                </div>
                <div className="about__text__feature">
                  <i className="fas fa-hand-point-right" />
                  <p>
                    Luôn quan tâm đến chính sách đào tạo nhân viên để đảm bảo tính
                    chuyên môn cao.
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
                <h2>DỊCH VỤ</h2>
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
                  <p>Thiết kế, xây dựng, phát triển Front-end và Back-end</p>
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
                  <p>Hỗ trợ, chăm sóc khách hàng sau dự án</p>
                  <p>Tư vấn về kiến trúc, phát triển phần mềm</p>
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
                    Đào tạo, hướng dẫn các bạn trẻ hoặc những người có đam mê với công
                    nghệ thông tin
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
              <h2>DỰ ÁN</h2>
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
                          Thiết kế, xây dựng, phát triển chương trình theo yêu cầu của
                          khách hàng
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
                        <p>Tư vấn, hỗ trợ, khắc phục sự cố và bảo hành sản phẩm</p>
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
                          Đào tạo, hướng dẫn các bạn trẻ hoặc những người có đam mê
                          với công nghệ thông tin
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
        <section id="members">
          <div className="section__container container">
            <div className="row">
              {/* title */}
              <div className="section__title">
                <h2>ĐỘI NGŨ</h2>
                <hr className="section__title__underline" />
              </div>
              {/* /title */}
              {/* contents */}
              <div className="members__info col-md-4">
                <div className="members__info__content">
                  {/* image */}
                  <div className="members__info__image">
                    <img
                      className="img-responsive"
                      src="images/index-member-kiennt.jpg"
                      alt=""
                    />
                  </div>
                  {/* /image */}
                  {/* text */}
                  <div className="members__info__text">
                    <h3>NGUYỄN NGỌC TÚ</h3>
                    <hr className="section__title__underline" />
                    <p>FOUNDER - DIRECTOR</p>
                  </div>
                  {/* /text */}
                </div>
              </div>
              <div className="members__info col-md-4">
                <div className="members__info__content">
                  {/* image */}
                  <div className="members__info__image">
                    <img
                      className="img-responsive"
                      src="images/index-member-kiennt.jpg"
                      alt=""
                    />
                  </div>
                  {/* /image */}
                  {/* text */}
                  <div className="members__info__text">
                    <h3>NGUYỄN NGỌC TÚ</h3>
                    <hr className="section__title__underline" />
                    <p>CO-FOUNDER - DEPUTY DIRECTOR</p>
                  </div>
                  {/* /text */}
                </div>
              </div>
              <div className="members__info col-md-4">
                <div className="members__info__content">
                  {/* image */}
                  <div className="members__info__image">
                    <img
                      className="img-responsive"
                      src="images/index-member-ntu.jpg"
                      alt=""
                    />
                  </div>
                  {/* /image */}
                  {/* text */}
                  <div className="members__info__text">
                    <h3>NGUYỄN NGỌC TÚ</h3>
                    <hr className="section__title__underline" />
                    <p>DEVELOPER</p>
                  </div>
                  {/* /text */}
                </div>
              </div>
              <div className="members__info col-md-4">
                <div className="members__info__content">
                  {/* image */}
                  <div className="members__info__image">
                    <img
                      className="img-responsive"
                      src="images/index-member-kiennt.jpg"
                      alt=""
                    />
                  </div>
                  {/* /image */}
                  {/* text */}
                  <div className="members__info__text">
                    <h3>NGUYỄN NGỌC TÚ</h3>
                    <hr className="section__title__underline" />
                    <p>DEVELOPER</p>
                  </div>
                  {/* /text */}
                </div>
              </div>
              <div className="members__info col-md-4">
                <div className="members__info__content">
                  {/* image */}
                  <div className="members__info__image">
                    <img
                      className="img-responsive"
                      src="images/index-member-kiennt.jpg"
                      alt=""
                    />
                  </div>
                  {/* /image */}
                  {/* text */}
                  <div className="members__info__text">
                    <h3>NGUYỄN NGỌC TÚ</h3>
                    <hr className="section__title__underline" />
                    <p>DEVELOPER</p>
                  </div>
                  {/* /text */}
                </div>
              </div>
              <div className="members__info col-md-4">
                <div className="members__info__content">
                  {/* image */}
                  <div className="members__info__image">
                    <img
                      className="img-responsive"
                      src="images/index-member-kiennt.jpg"
                      alt=""
                    />
                  </div>
                  {/* /image */}
                  {/* text */}
                  <div className="members__info__text">
                    <h3>NGUYỄN NGỌC TÚ </h3>
                    <hr className="section__title__underline" />
                    <p>DEVELOPER</p>
                  </div>
                  {/* /text */}
                </div>
              </div>
              <div className="members__info col-md-4">
                <div className="members__info__content">
                  {/* image */}
                  <div className="members__info__image">
                    <img
                      className="img-responsive"
                      src="images/index-member-kiennt.jpg"
                      alt=""
                    />
                  </div>
                  {/* /image */}
                  {/* text */}
                  <div className="members__info__text">
                    <h3>NGUYỄN NGỌC TÚ </h3>
                    <hr className="section__title__underline" />
                    <p>DEVELOPER</p>
                  </div>
                  {/* /text */}
                </div>
              </div>
              <div className="members__info col-md-4">
                <div className="members__info__content">
                  {/* image */}
                  <div className="members__info__image">
                    <img
                      className="img-responsive"
                      src="images/index-member-kiennt.jpg"
                      alt=""
                    />
                  </div>
                  {/* /image */}
                  {/* text */}
                  <div className="members__info__text">
                    <h3> NGUYỄN NGỌC TÚ </h3>
                    <hr className="section__title__underline" />
                    <p>DEVELOPER</p>
                  </div>
                  {/* /text */}
                </div>
              </div>
              <div className="members__info col-md-4">
                <div className="members__info__content">
                  {/* image */}
                  <div className="members__info__image">
                    <img
                      className="img-responsive"
                      src="images/index-member-kiennt.jpg"
                      alt=""
                    />
                  </div>
                  {/* /image */}
                  {/* text */}
                  <div className="members__info__text">
                    <h3>NGUYỄN NGỌC TÚ </h3>
                    <hr className="section__title__underline" />
                    <p>DEVELOPER</p>
                  </div>
                  {/* /text */}
                </div>
              </div>
              {/* /contents */}
            </div>
          </div>
        </section>
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
                  <h3>Liên hệ:</h3>
                  <p>
                    <i className="fas fa-map-marker-alt" /> C7 Building, Khuất Duy Tiến, Thanh Xuân, Hà Nội
                  </p>
                  <p>
                    <i className="fas fa-phone" /> Phone: (84) 984 715 689
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
                    "OST.VN luôn trân trọng giá trị nền tảng cho sự phát triển, đó là
                    các cơ hội được hợp tác với Quý khách hàng. Và không có bất kỳ khó
                    khăn nào có thể ngăn cản chúng tôi mang lại những giá trị tiện ích
                    phù hợp với mong muốn và lợi ích của Quý khách hàng. Chúng tôi tin
                    tưởng rằng với tập thể OST.VN trẻ trung, sáng tạo và đoàn kết, sẽ
                    làm hài lòng và đem lại thành công cho các bạn."
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
                <small>© OST Co.Ltd 2022. All Rights Reserved.</small>
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
