import { useState } from 'react';
import { HiSearch, HiDownload, HiOutlineDocumentText, HiOutlineBookOpen, HiOutlinePlay, HiOutlineSpeakerphone, HiOutlineQuestionMarkCircle } from 'react-icons/hi';

const ResourcesPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState('全部');
  
  const filters = ['全部', '重点文章', '相关社媒', '高层采访', '常见问题'];
  
  // Function to get icon based on resource type
  const getIconByType = (type) => {
    switch (type) {
      case '重点文章':
      case '报告':
        return <HiOutlineDocumentText className="w-6 h-6" />;
      case '视频':
        return <HiOutlinePlay className="w-6 h-6" />;
      case '工具':
        return <HiDownload className="w-6 h-6" />;
      case '指南':
        return <HiOutlineBookOpen className="w-6 h-6" />;
      case '相关社媒':
        return <HiOutlineSpeakerphone className="w-6 h-6" />;
      case '高层采访':
        return <HiOutlineSpeakerphone className="w-6 h-6" />;
      case '常见问题':
        return <HiOutlineQuestionMarkCircle className="w-6 h-6" />;
      default:
        return <HiOutlineDocumentText className="w-6 h-6" />;
    }
  };
  
  const resources = [
    {
      id: 1,
      title: '特朗普vs拜登：两个政府的宏观经济政策分析及比较（1）',
      type: '重点文章',
      description: '对比特朗普与拜登政府的宏观经济表现和减税政策影响。',
      date: '2024-11-20',
      link: 'https://mp.weixin.qq.com/s/EPgRBSaZUjIAtypfn0xLnQ',
    },
    {
      id: 2,
      title: '及时行乐 or 延迟满足：什么是终生平滑消费？我们该如何存钱？',
      type: '重点文章',
      description: '用经济学模型解释终生平滑消费概念，并探讨如何合理存钱以实现一生消费稳定。',
      date: '2024-11-23',
      link: 'https://mp.weixin.qq.com/s/xyxPvsJ4C2tjzhTlkhf2ow',
    },
    {
      id: 3,
      title: '如何评价中美贸易战？为什么美国经济学家反对特朗普对中国实施高关税政策？',
      type: '重点文章',
      description: '分析特朗普对华高关税政策为何未能改善美国贸易逆差，反而导致双输局面。',
      date: '2024-11-28',
      link: 'https://mp.weixin.qq.com/s/8-4euvp2gtdpvKz6XEgnfQ',
    },
    {
      id: 4,
      title: '普雷斯科特和萨默斯关于真实经济周期理论的辩论',
      type: '重点文章',
      description: '总结Summers批评RBC理论缺乏实证支持，以及Prescott强调理论指导测量的重要回应。',
      date: '2025-3-21',
      link: 'https://mp.weixin.qq.com/s/Ge-_DsjhNjZxUmngnoMJJA',
    },
    {
      id: 5,
      title: '如何评价特朗普的“对等关税”政策？美国经济学教授们怎么看待这一政策？它对全球经济有何影响？',
      type: '重点文章',
      description: '整理经济学界对特朗普“对等关税”政策的批评，并指出其或将引发全球经济衰退。',
      date: '2025-04-10',
      link: 'https://mp.weixin.qq.com/s/kcLzw5eXoDAnAPftoZGkUg',
    },
    {
      id: 6,
      title: '如何用新凯恩斯主义的理论分析关税影响？什么是三方程模型？央行该如何制定政策利率？',
      type: '重点文章',
      description: '用新凯恩斯主义三方程模型分析关税冲击，并探讨央行应如何制定利率应对通胀与衰退。',
      date: '2025-04-18',
      link: 'https://mp.weixin.qq.com/s/bOSPu6rmKv7G2_WuKekEWg',
    },
    {
      id: 7,
      title: '美国宏观经济学家如何评价“对等关税”可能导致的国内和国际影响？为什么众多学者都对政策表达担忧和失望？',
      description: '整理经济学者对特朗普关税政策引发投资流失、金融动荡和经济衰退风险的担忧。',
      date: '2025-04-26',
      link: 'https://mp.weixin.qq.com/s/vljJnNHI1BUalDO6a4orww',
    },
  ];
  
  const filteredResources = resources.filter(resource => {
    const matchesFilter = activeFilter === '全部' || resource.type === activeFilter;
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                        resource.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });


  return (
    <div>
      {/* Hero Section */}
      <section className="pt-16 pb-5">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="title">资源中心</h1>
            {/* <p className="subtitle">
              探索我们的金融知识库<br />
              获取专业的见解和最新的行业动态
            </p> */}
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 border-b">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Search */}
            <div className="relative w-full md:w-auto md:min-w-[300px] font-sans">
              <input
                type="text"
                placeholder="搜索资源..."
                className="w-full py-2 pl-10 pr-4 border rounded-full focus:outline-none focus:ring-1 focus:ring-black"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <HiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
            
            {/* Filters */}
            <div className="flex flex-wrap justify-center space-x-2 font-sans">
              {filters.map((filter, index) => (
                <button
                  key={index}
                  className={`px-4 py-2 rounded-full text-sm font-medium ${
                    activeFilter === filter
                      ? 'bg-black text-white'
                      : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                  }`}
                  onClick={() => setActiveFilter(filter)}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-16">
        <div className="container-custom">
          {filteredResources.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredResources.map((resource) => (
                <div
                  key={resource.id}
                  className="border rounded-lg p-6 hover:shadow-lg"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-block p-2 bg-gray-100 rounded-full">
                      {getIconByType(resource.type)}
                    </span>
                    <span className="text-sm text-gray-500 font-sans">{resource.date}</span>
                  </div>
                  <h3 className="card-title"><a href={resource.link} target="_blank" rel="noopener noreferrer" className="hover:underline">{resource.title}</a></h3>
                  <div className="mb-4">
                    <span className="inline-block px-2 py-1 bg-gray-100 text-xs text-gray-500 font-medium rounded font-sans">
                      {resource.type}
                    </span>
                  </div>
                  <p className="general-text">{resource.description}</p>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-lg text-gray-500 font-sans">没有找到匹配的资源，请尝试其他搜索词或筛选条件。</p>
            </div>
          )}
        </div>
      </section>


      {/* Newsletter Section */}
      {/* <section className="py-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto bg-gray-100 p-8 rounded-lg">
            <div className="text-center mb-8">
              <h2 className="h2-title">订阅我们的新闻通讯</h2>
              <p className="general-text">
                定期获取最新的金融见解、市场分析和投资策略
              </p>
            </div>
            
            <form className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
                <input
                  type="email"
                  placeholder="您的电子邮箱"
                  className="flex-grow py-2 px-4 border rounded-full focus:outline-none focus:ring-2 focus:ring-black"
                  required
                />
                <button
                  type="submit"
                  className="py-2 px-6 bg-black text-white rounded-full hover:bg-gray-900"
                >
                  订阅
                </button>
              </div>
              <p className="text-xs text-gray-500 mt-2 text-center">
                我们尊重您的隐私，您可以随时取消订阅。
              </p>
            </form>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default ResourcesPage;