import { useState } from 'react';
import { HiLocationMarker, HiPhone, HiMail, HiClock, HiOutlineExternalLink } from 'react-icons/hi';
import { SiXiaohongshu } from 'react-icons/si';
import companyRednoteQR from '../assets/images/QR_codes/companyRednoteQR.jpg';
import wxyWechatQR from '../assets/images/QR_codes/wxyWechatQR.jpg';
import companyWechatQR from '../assets/images/QR_codes/companyWechatQR.jpg';
import XiaohongshuIcon from '../assets/icons/XiaohongshuIcon';

const ContactPage = () => {
  const contactInfos = [
    {
      label: '公司邮箱',
      value: 'utmwealthmanagement@outlook.com',
      icon: <HiMail className="w-6 h-6" />,
      link: 'mailto:utmwealthmanagement@outlook.com'
    },
    {
      label: 'CEO邮箱',
      value: 'xingyao@bu.edu',
      icon: <HiMail className="w-6 h-6" />,
      link: 'mailto:xingyao@bu.edu'
    },
    {
      label: '总裁邮箱',
      value: 'yg3242@stern.nyu.edu',
      icon: <HiMail className="w-6 h-6" />,
      link: 'mailto:yg3242@stern.nyu.edu'
    },
    {
      label: '副总裁邮箱',
      value: 'hengjinzhu@cmu.edu',
      icon: <HiMail className="w-6 h-6" />,
      link: 'mailto:hengjinzhu@cmu.edu'
    },
    {
      label: 'COO邮箱',
      value: '2023141010074@stu.scu.edu.cn',
      icon: <HiMail className="w-6 h-6" />,
      link: 'mailto:2023141010074@stu.scu.edu.cn'
    }
  ];

  const socialLinks = [
    {
      name: '官方小红书账号',
      qrCode: companyRednoteQR,
      link: 'https://www.xiaohongshu.com/user/profile/6537211f000000000400aad5',
      icon: <XiaohongshuIcon className="w-6 h-6 text-red-500" />
    },
    {
      name: 'CEO的经济评论频道',
      qrCode: wxyWechatQR,
      link: null,
      icon: null
    },
    {
      name: '官方公众号',
      qrCode: companyWechatQR,
      link: null,
      icon: null
    }
  ];
  
  return (
    <div>
      {/* Hero Section */}
      <section className="pt-16 pb-5">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="title">联系我们</h1>
            <p className="subtitle">
              有任何问题或需求？<br />
              联系我们！
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Section - White Background */}
      <section className="py-16">
        <div className="container-custom max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="h2-title">联系方式</h2>
            <p className="general-text">
              通过以下方式联系我们，我们会尽快回复您的咨询
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-6">
            {contactInfos.map((info, index) => (
              <div 
                key={index}
                className="flex items-center p-6 bg-gray-50 rounded-lg hover:shadow-md transition-shadow"
              >
                <div className="bg-white p-3 rounded-full mr-4 text-accent-blue">
                  {info.icon}
                </div>
                <div className="flex-grow">
                  <h3 className="text-lg font-medium font-sans">{info.label}</h3>
                  <a 
                    href={info.link} 
                    className="text-gray-600 hover:text-accent-blue hover:underline"
                  >
                    {info.value}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Social Media Section - Gray Background */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="h2-title">关注我们</h2>
            <p className="general-text">
              通过扫描二维码或点击链接，关注我们的社交媒体账号，获取最新资讯
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {socialLinks.map((social, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg p-6 shadow-sm text-center hover:shadow-md transition-shadow"
              >
                <div className="mb-4">
                  <h3 className="text-lg font-medium mb-3 font-sans">{social.name}</h3>
                  {social.qrCode && (
                    <div className="w-48 h-48 mx-auto border border-gray-100 p-2 rounded-lg mb-4">
                      <img 
                        src={social.qrCode} 
                        alt={`${social.name} QR码`} 
                        className="w-full h-full object-contain"
                      />
                    </div>
                  )}
                  {social.link && (
                    <a 
                      href={social.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-center text-gray-500 hover:underline"
                    >
                      <span className="ml-1">访问链接</span>
                      <HiOutlineExternalLink className="ml-1 w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      {/* <section className="py-16">
        <div className="container-custom max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="h2-title">我们的位置</h2>
            <p className="general-text">
              欢迎您访问我们的办公地点，我们期待与您面对面交流
            </p>
          </div>
          
          <div className="aspect-w-16 aspect-h-9 bg-gray-100 rounded-lg overflow-hidden">
            <iframe 
              title="Map" 
              className="w-full h-96 border-0" 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3446.5602830057665!2d-97.74340782426394!3d30.267599974755364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644b5a7a29d93d9%3A0x471f9d89fe3dd38d!2sDowntown%20Austin%2C%20Austin%2C%20TX%2C%20USA!5e0!3m2!1sen!2s!4v1720418245374!5m2!1sen!2s" 
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default ContactPage;