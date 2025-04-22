import { useState } from 'react';
import { FaChartLine, FaShieldAlt, FaUserCog, FaMobileAlt } from 'react-icons/fa';
import lifecycleChart from '../assets/images/figures/lifecycle-chart.svg'; // Lifecycle chart image
import normalChart from '../assets/images/figures/example-analysis-normal.svg';
import linesChart from '../assets/images/figures/data-example-lines.svg';

const ProductsPage = () => {
  

  return (
    <div>
      {/* Hero Section */}
      <section className="pt-16 pb-5">
        <div className="container-custom text-center">
            <h1 className="title">
              产品特征及原理
            </h1>
        </div>
      </section>

      {/* Product Overview Section - White Background */}
      <section className="py-16">
        <div className="container-custom max-w-3xl mx-auto">
          <div className="text-left">
            <h2 className="h2-title">产品概述</h2>
            <p className="general-text">
              UtilityMax通过手机APP为用户提供专业的理财模拟工具。用户可以随时更新自己的收入、储蓄、支出及投资情况，UtilityMax会根据既定算法和实时数据，以图表、线图、计算和文字报告的形式向用户呈现基于模型的最优理财方案。
            </p>
            <p className="general-text mt-4">
              UtilityMax基于终生平滑消费理论，持续优化模型和算法，采用蒙特卡洛模拟、大型语言模型等分析工具，力求为用户提供<span className="highlight-text">最专业</span>的理财报告。
            </p>
            <p className="general-text mt-4">
              UtilityMax不断跟进市场利率、债券价格、保险公司算法等不断更新的实时信息，力求为用户提供<span className="highlight-text">最精确</span>的理财报告。
            </p>
            <p className="general-text mt-4">
              UtilityMax丰富呈现的内容和方式，包括收入及收益预测、储蓄及消费建议、投资组合的统计模拟等，力求为用户提供<span className="highlight-text">最全面</span>的理财报告。
            </p>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-4 bg-accent-blue text-white">
        <div className="container-custom max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center">
            {/* <div className="md:w-1/2 mb-8 md:mb-0">
              <img 
                src={buildingImage} 
                alt="现代建筑" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div> */}
            <div className="md:w-2/3 md:pl-12">
              <blockquote className="text-xl font-light italic mb-4">
                "UtilityMax，让理财不再遥远。无论是规划个人财富，还是管理家庭资产，UtilityMax 都在这里，助您做出更明智的财务决策。"
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Lifecycle Consumption Section - Gray Background */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-8">
            <h2 className="h2-title">终生平滑消费模型</h2>
          </div>
          <div className="flex flex-col lg:flex-row gap-8 max-w-4xl mx-auto">
            <div className="lg:w-1/2">
              <p className="general-text">
              根据 Franco Modigliani 和 Richard Brumberg 在20世纪50年代提出的生命周期假说， 人们应该基于一生的预期总收入做出消费、投资等经济决策，而不是当下的收入。<br />
              Modigliani 也因这一理论获得了 1985 年的诺贝尔经济学奖。终身平滑消费 Lifetime Smooth Consumption （LSC）是生命周期假说中的一个重要推论，它表明，人一生的消费应当保持平衡和稳定，从而实现每个阶段的生活水平一致——没有人会希望自己在收入高时挥霍无度，以致于没有任何用于养老、子女教育和生病住院的存款。
              </p>
            </div>
            <div className="lg:w-1/2">
              <div className="bg-white p-4 rounded-lg shadow-sm flex justify-center md:max-w-xl">
                <img 
                  src={lifecycleChart} 
                  alt="生命周期消费模型图表" 
                  className="w-full h-auto mx-auto"
                />
                
              </div>
            </div>
          </div>
          <div className="max-w-4xl mx-auto mt-8">
            <p className="general-text mt-4">
              假设现在有一个名叫 Henry 的人。Henry 学生时代或许没有收入，但为了保证正常消费，他会选择借贷来支付自己的学费和正常生活。工作后，收入不断上升，通过这一过程，他会偿还学生时代的贷款，直到还清，同时为自己的退休生活而储蓄。退休后，他靠着中年时期的存款和投资生活。正是因为 Henry 合理、有远见的财富管理， 他才可以在退休后保证自己的生活水平和退休前一致——也就是说，他这一生最优的消费水平应该保持在图示的"平滑消费"。
            </p>

            <p className="general-text">
              当然，现实中会影响到人们消费水平的因素有很多，利率、价格水平、养老金、社保、 子女教育、资产组合等等。UtilityMax 会考虑这些因素，结合用户个人的的收入曲线、 支出偏好、风险承受偏好、时间偏好、寿命预期、退休规划等信息，根据生命周期模型， 帮助人们进行财富管理和决策规划，最终实现终生平滑消费。
            </p>
          </div>
        </div>
      </section>

      {/* Quote Section 2 */}
      <section className="py-4 bg-accent-blue text-white">
        <div className="container-custom max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center">
            {/* <div className="md:w-1/2 mb-8 md:mb-0">
              <img 
                src={buildingImage} 
                alt="现代建筑" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div> */}
            <div className="md:w-2/3 md:pl-12">
              <blockquote className="text-xl font-light italic mb-4">
                "UtilityMax 不仅关注短期收益，更注重长期财富保值与生活质量的平衡。"
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Data Analysis Section - White Background */}
      <section className="py-16">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-8 max-w-4xl mx-auto">
            <div className="lg:w-1/2">
              <div className="text-center max-w-4xl mx-auto mb-8">
                <h2 className="h2-title text-left">蒙特·卡洛模拟</h2>
              </div>
              <p className="general-text">
                蒙特•卡洛模拟是一种基于随机抽样的统计模型，广泛用于金融风险分析与资产配置。
                UtilityMax 将应用蒙特•卡洛模拟，通过对市场利率、投资回报、通胀变动、寿命预期等变量进行上万次随机模拟，全面评估每种理财策略在不同未来状态下的表现，为用户的理财决策提供理性和全面的建议。
              </p>
            </div>
            <div className="lg:w-1/2">
              <div className="bg-white p-4 rounded-lg shadow-sm flex justify-center">
                <img 
                  src={linesChart} 
                  alt="蒙特卡洛模拟线图" 
                  className="w-full h-auto mx-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Analysis Example Section - Gray Background */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-8 max-w-4xl mx-auto mb-8">
            <div className="lg:w-1/2">
              <div className="bg-white p-4 rounded-lg shadow-sm flex justify-center">
                <img 
                  src={normalChart} 
                  alt="正态分布结果图" 
                  className="w-full h-auto mx-auto"
                />
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="text-center max-w-4xl mx-auto mb-8">
                <h2 className="h2-title text-right">案例分析</h2>
              </div>
              <p className="general-text">
                此案例为蒙特•卡洛模拟的一个简化演示。假设 Henry 考虑了一种投资组合，这个组合包括了"某政府一年期折价债券"+"某政府三年期息票债券"＋"某政府五年期息票债券"＋"某政府十年期息票债券"+"黄金"，共五种投资理财产品。为了演示的简化，我们只采用2024 年2月14日至2025年2月14日的一年数据，随后根据经济模型公式和数据进行蒙特卡洛模拟。
              </p>
            </div>
          </div>
          <div className="max-w-4xl mx-auto">
            <p className="general-text">
              我们进行了1000 次蒙特卡洛模拟，每次随机抽取债券收益率数据和黄金价格数据，生成随机模拟量来计算总收益。结果显示，均值约为58.7，标准差约为 2088.7，收益范围在-6767 到 6931 之间。这说明，模拟得到的总收益在1000 次重复中平均约为 58.7， 而结果在均值附近有非常大的波动——一次模拟可能得到的收益和平均值之间通常会有几千的差异。
            </p>
            <p className="general-text mt-4">
              主要分布集中在-2000 到+3000 区域附近，分布峰值在略大于0左右，左右两侧有一定尾巴，体现出收益的随机性与较大不确定性。因此，这1000 次随机模拟的总体分布是以接近0~100 中心、向两端延伸较多的波动。平均收益稍偏正，但由于波动性很大，负收益和正收益的极端情形在模拟中都能出现。意味着，这五种投资理财产品的投资组合从平均上会产生正收益，但投资风险较大。
            </p>
          </div>
        </div>
      </section>

    
    </div>
  );
};

export default ProductsPage;