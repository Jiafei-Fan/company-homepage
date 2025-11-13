import { Link } from 'react-router-dom';
import { FaTwitter, FaInstagram, FaLinkedin, FaWeixin } from 'react-icons/fa';
import frankPic from '../assets/images/management_photo/Frank.png';
import justinPic from '../assets/images/management_photo/Justin.png';
import jessicaPic from '../assets/images/management_photo/Jessica.png';
import henryPic from '../assets/images/management_photo/Henry.png';
// import michellePic from '../assets/images/management_photo/Michelle.jpg';
import keyinPic from '../assets/images/management_photo/Keyin.png';
import chloePic from '../assets/images/management_photo/Chloe.png';
import estellaPic from '../assets/images/management_photo/Estella.png';
import jurlynPic from '../assets/images/management_photo/Jurlyn.png';

const AboutPage = () => {
  const teamMembers = [
    {
      name: '吴星耀',
      position: '首席执行官',
      image: justinPic,
      imageAdjustments: {
        transform: 'scale(2.4) translateY(12%)',
      },
    },
    {
      name: '顾语函',
      position: '首席营销官',
      image: jessicaPic,
      imageAdjustments: {
        transform: 'scale(1.7) translateY(20%)',
      },
    },
    {
      name: '朱恒进',
      position: '首席技术官',
      image: henryPic,
      imageAdjustments: {
        transform: 'scale(3) translateY(15%) translateX(-20%)',
      },
    },
    {
      name: '张潆天',
      position: '首席财务官',
      image: estellaPic,
      imageAdjustments: {
        transform: 'scale(5)',
      },
    },
    {
      name: '徐克引',
      position: '产品副总裁',
      image: keyinPic,
      imageAdjustments: {
        transform: 'scale(1.4) translateY(5%)',
      },
    },
    {
      name: '范嘉非',
      position: '软件工程副总裁',
      image: frankPic,
      imageAdjustments: {
        transform: 'scale(1.3) translateY(7%)',
      },
    },
    {
      name: '吴好好',
      position: '产品总监',
      image: chloePic,
      imageAdjustments: {
        transform: 'scale(1.7) translateY(17%)',
      },
    },
    {
      name: '田佳静',
      position: '人力资源总监',
      image: jurlynPic,
      imageAdjustments: {
        transform: 'scale(1.3) translateY(5%)',
      },
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="pt-16 pb-5">
        <div className="container-custom">
          <div className="mx-auto text-center justify-center">
            <h1 className="text-3xl font-normal font-sans text-gray-600 mb-5">
              关于我们
            </h1>
            <div className='text-6xl font-extrabold text-accent-blue mb-5 flex flex-wrap justify-center'>
              <span className="whitespace-nowrap">算法在内，</span>
              <span className="whitespace-nowrap">稳健在外。</span>
            </div>
            <p className="subtitle text-center">
                UtilityMax是一家进行理财算法研究的公司<br />
                我们的使命是基于经济学模型，让技术为用户提供理性决策建议。
              </p>
          </div>
        </div>
      </section>

      {/* Our Story Section - White Background (1) */}
      <section className="py-16">
      <div className="container-custom max-w-3xl mr-auto">
        <div className="text-left">
          <h2 className="h2-title">公司介绍</h2>
          <p className="general-text">
            UtilityMax 是一家创办于 2025年的科技公司，致力于通过手机 APP 向用户提供财富管理建议，
            采用<span className="highlight-text">经济学理论和统计学模型</span>，结合历史数据和强大的算法，给用户提供全面、合理的财富管理建议。
            UtilityMax 结合传统经济学理论、
            大数据分析、大型语言模型和金融算法，为个体用户和家庭提供个性化的非投机性财富管理服务，
            以简洁、易懂、直观的方案和数据呈现方式，帮助用户实现终生平滑消费。
          </p>
        </div>
      </div>
      </section>

      {/* Corporate Culture Section - Gray Background (2) */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="h2-title">企业文化</h2>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="mb-8">
              <h3 className="text-lg font-medium mb-3 text-accent-blue font-sans">UtilityMax 的使命</h3>
              <p className="general-text">
                在创新、公开、诚信的基础上，给每一位用户提供合理可靠的财富管理建议，帮助用户实现终生平滑消费，并积极承担企业社会责任。
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-3 text-accent-blue font-sans">UtilityMax 的愿景</h3>
              <p className="general-text">
                成为中国领先的财富管理科技公司，推动全民财富管理个性化、合理化。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Advantages Section - White Background (3) */}
      <section className="py-16">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="h2-title">我们的优势</h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <ul className="space-y-6 list-disc pl-5">
              <li>
                <p className="general-text">
                  采用传统的<span className="highlight-text">经济学理论和统计学模型</span>，结合历史数据和强大的算法，给用户提供全面、合理的财富管理建议。
                </p>
              </li>

              <li>
                <p className="general-text">
                  尊重和保护用户的决策权，只给用户提供个性化的理财建议，<span className="highlight-text">不会以任何形式直接管理或使用用户的资金</span>。
                </p>
              </li>

              <li>
                <p className="general-text">
                  采用强大的<span className="highlight-text">数据加密和保护</span>技术，确保用户的信息和隐私安全。承诺仅将用户数据用作提供个性化理财建议，不在任何非授权范围内使用用户数据。
                </p>
              </li>

              <li>
                <p className="general-text">
                  借助多重工具，<span className="highlight-text">不断更新模型算法和数据</span>，力求提供最新、最全面、最符合实际的理财管理建议。
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Team Section - Gray Background (4) */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="h2-title">管理层成员</h2>
            {/* <p className="general-text">
              我们是一群经济学家，数据科学家，算法科学家和软件工程师，致力于为用户提供最优质的财富管理建议。
            </p> */}
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 xl:gap-10">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden transition-transform duration-200 hover:-translate-y-1 hover:shadow-md"
              >
                <div className="bg-gradient-to-b from-gray-100 to-white">
                  <div
                    className="w-full overflow-hidden flex items-center justify-center"
                    style={{ aspectRatio: '4 / 4' }}
                  >
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-contain object-center"
                      style={{
                        transformOrigin: 'center',
                        ...(member.imageAdjustments || {}),
                      }}
                    />
                  </div>
                </div>
                <div className="px-6 py-5 text-left">
                  <h3 className="text-lg font-semibold font-sans text-accent-blue mb-1">
                    {member.name}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {member.position}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default AboutPage;
