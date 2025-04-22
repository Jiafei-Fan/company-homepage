const ResponsibilityPage = () => {
  const initiatives = [
    {
      title: '金融普惠计划',
      description: '我们致力于为弱势群体提供金融服务，通过金融教育和无障碍服务，帮助更多人获得金融机会。',
      image: 'https://images.unsplash.com/photo-1573497491765-dccce02b29df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    },
    {
      title: '环境可持续发展',
      description: '我们积极推动绿色金融，支持环保项目，并在日常运营中践行环保理念，减少碳足迹。',
      image: 'https://images.unsplash.com/photo-1623314675487-5dce599e3c53?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    },
    {
      title: '社区投资项目',
      description: '我们通过各种方式支持社区发展，包括志愿服务、慈善捐赠和社区项目投资。',
      image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    },
  ];
  
  const stats = [
    { value: '100+', label: '受益社区' },
    { value: '¥1000万+', label: '慈善捐款' },
    { value: '5000+', label: '志愿服务小时' },
    { value: '50+', label: '公益项目' },
  ];
  
  return (
    <div>
      {/* Hero Section */}
      <section className="pt-16 pb-5">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="title">社会责任</h1>
            <p className="subtitle">
              我们深信企业应该为社会创造积极的影响<br />
              致力于推动金融普惠、支持社区发展、促进可持续发展
            </p>
          </div>
        </div>
      </section>

      {/* Our Commitment Section - White Background */}
      <section className="py-16">
        <div className="container-custom max-w-3xl mx-auto">
          <div className="text-left">
            <h2 className="h2-title">我们的承诺</h2>
            <p className="general-text">
              我们承诺依照相关法律法规及内部安全制度，妥善处理用户在使用UtilityMax 相关产品时的所有信息和数据，确保不将用户隐私用于与本产品服务无关的商业或其他用途，亦不会泄露给任何未获授权的第三方。
            </p>
            <p className="general-text mt-4">
              我们承诺将严格遵守《中华人民共和国网络安全法》《个人信息保护法》等相关法律法规，持续完善公司治理结构，强化数据安全和合规管理，保障用户权益不受侵犯。
            </p>
            <p className="general-text mt-4">
              与此同时，UtilityMax 始终坚信企业不仅是经济实体，更是社会责任的承担者。我们将积极履行企业社会责任，力求社会创造长期价值。
            </p>
            <p className="general-text mt-4 font-bold italic text-accent-blue">
              相信UtilityMax！
            </p>
          </div>
        </div>
      </section>
      
      
    </div>
  );
};

export default ResponsibilityPage;