import React from 'react';
import SectionTitle from '../../components/SectionTitles/SectionTitle';
import LogInForm from '../../components/LogInForm/LogInForm';

export default function LogIn() {
  return(
    <>
      <style>
        {`
          .LogInForm_hr{
            height:1px;
            margin:60px 0 50px 0;
            background:rgba(102,102,102,.2);
          }
          .LogInForm_foot-lnk{
            text-align:center;
          }
        `}
      </style>
      <div className="section section-padding contact-section overlay-two" style={{backgroundImage: `url(${process.env.PUBLIC_URL}/images/bg/contact-bg.jpg)`}}>
        <div className="container mt-20">
            <div className="row row-cols-2 align-items-center">
                <div className="col-3" data-aos="fade-up">
                    
                </div>
                <div className="col-6 mt-lg-0 mt-md-10 mt-8" data-aos="fade-up" data-aos-delay="300">
                    <div className="contact-form-area">
                        <SectionTitle
                            titleOption="section-title text-center mb-7"
                            headingOption="title fz-28"
                            title="로그인"
                            subTitle=""
                        />
                        <LogInForm />
                        <div className="LogInForm_hr"></div>
                        <div className="LogInForm_foot-lnk">
                          <div className='row'>
                            <div className="col" data-aos="fade-up">
                              <a href="#forgot">회원가입</a>
                            </div>
                            <div className="col" data-aos="fade-up">
                              <a href="#forgot">이메일/비밀번호 찾기</a>
                            </div>
                          </div>
                        </div>
                    </div>
                </div>
                <div className="col-3" data-aos="fade-up">
                    
                </div>
            </div>
        </div>

      </div>
    </>
    
  );
}