/**
 * P7-4：历史人文数据
 * 包含：发现者、发现年代、命名由来、发现者传记、历史价格、文化影响
 * 用法：在 element.html 中加载此文件，数据自动合并到 ELEMENTS
 */

var P7_HISTORY = {};

// ════════════════════════════════════════════════════
//  历史人文数据（按 z 索引）
// ════════════════════════════════════════════════════

// ── 第 1 周期 ────────────────────────────────────────────
P7_HISTORY[1] = {  // H 氢
  discoverer: `亨利·卡文迪许`,
  discoveryYear: `1766`,
  namingOrigin: `希腊语hydro(水)+gen(生成)`,
  biography: `英国化学家卡文迪许将金属溶于酸中首次收集到氢气，误以为是'可燃空气'。拉瓦锡后来命名并证实其为元素。`,
  historicalPrice: `19世纪氢气用于气球填充，价格低廉`,
  culturalImpact: `氢是宇宙最丰富元素，占可见物质质量75%。氢弹(聚变)改变了冷战格局。氢能源被视为未来清洁能源核心。`
};

P7_HISTORY[2] = {  // He 氦
  discoverer: `皮埃尔·让森 & 诺曼·洛克耶`,
  discoveryYear: `1868`,
  namingOrigin: `希腊语helios(太阳)`,
  biography: `法国天文学家让森在日全食时通过太阳光谱发现一条未知黄线，洛克耶命名为氦。1895年拉姆齐在地球上发现氦。`,
  historicalPrice: `20世纪初氦气极昂贵，仅用于军事飞艇`,
  culturalImpact: `氦气因密度小且不燃，取代氢气用于飞艇。兴登堡号事故后氦气成为唯一安全选择。氦是MRI冷却液，全球面临氦短缺危机。`
};


// ── 第 2 周期 ────────────────────────────────────────────
P7_HISTORY[3] = {  // Li 锂
  discoverer: `约翰·阿尔费德松`,
  discoveryYear: `1817`,
  namingOrigin: `希腊语lithos(石头)`,
  biography: `瑞典化学家阿尔费德松在透叶长石矿物中发现锂。他的老师贝采利乌斯命名为锂，意即'来自石头'。`,
  historicalPrice: `20世纪中期锂价格大幅下降`,
  culturalImpact: `锂是电池革命的核心——从手机到电动汽车。锂离子电池获2019年诺贝尔化学奖。锂盐用于治疗双相情感障碍，改变了精神病学。`
};

P7_HISTORY[4] = {  // Be 铍
  discoverer: `路易-尼古拉·沃克兰`,
  discoveryYear: `1798`,
  namingOrigin: `希腊语beryllos(绿柱石)`,
  biography: `法国化学家沃克兰从绿柱石和祖母绿中发现铍。因其味甜曾被称'镥'(glucinium)，后因与钇混淆改用现名。`,
  historicalPrice: `20世纪前铍极昂贵，航天工业推动降价`,
  culturalImpact: `铍铜合金用于制造不产生火花的工具，在爆炸性环境中不可或缺。铍的毒性(铍肺病)催生了职业健康标准。`
};

P7_HISTORY[5] = {  // B 硼
  discoverer: `约瑟夫·路易·盖-吕萨克 & 路易·雅克·泰纳尔`,
  discoveryYear: `1808`,
  namingOrigin: `阿拉伯语buraq(硼砂)`,
  biography: `法国化学家盖-吕萨克和泰纳尔独立从硼酸中分离出硼。此前硼砂在西藏通过丝绸之路交易已千年。`,
  historicalPrice: `硼酸价格稳定，硼砂是廉价家用化学品`,
  culturalImpact: `硼砂是古代文明最早的化学品之一，用于焊接和防腐。硼酸是核反应堆冷却剂。硼是植物必需微量元素，缺乏导致农作物减产。`
};

P7_HISTORY[6] = {  // C 碳
  discoverer: `史前已知`,
  discoveryYear: `史前`,
  namingOrigin: `拉丁语carbo(炭)`,
  biography: `碳是人类最早利用的元素之一——木炭用于取暖和冶炼。金刚石和石墨的价值自古希腊起就被认识。`,
  historicalPrice: `金刚石始终是昂贵宝石，工业碳价格低廉`,
  culturalImpact: `碳是生命的基础，有机化学的全部。碳14测年法革命了考古学。石墨烯(2010年诺贝尔奖)和碳纳米管是材料科学前沿。碳中和成为全球气候政策核心。`
};

P7_HISTORY[7] = {  // N 氮
  discoverer: `丹尼尔·卢瑟福`,
  discoveryYear: `1772`,
  namingOrigin: `希腊语nitron(硝石)+gen(生成)`,
  biography: `苏格兰医生卢瑟福在去除空气中的氧气和二氧化碳后发现了氮。拉瓦锡称其为'azote'(无生命)。`,
  historicalPrice: `工业制氮价格极低(分馏液态空气)`,
  culturalImpact: `氮是大气主成分(78%)。哈伯-博施法合成氨养活了全球一半人口，获诺贝尔奖。氮化镓LED(2014年诺贝尔奖)带来照明革命。硝酸盐炸药改变了战争形态。`
};

P7_HISTORY[8] = {  // O 氧
  discoverer: `卡尔·舍勒 & 约瑟夫·普里斯特利`,
  discoveryYear: `1774`,
  namingOrigin: `希腊语oxys(酸)+gen(生成)`,
  biography: `瑞典的舍勒和英国的普里斯特利几乎同时发现氧。拉瓦锡命名并推翻燃素说。氧的发现是化学史里程碑。`,
  historicalPrice: `工业氧气价格低廉，医疗用氧成本可控`,
  culturalImpact: `氧是地壳最丰富元素(46%)。臭氧层保护生命免受紫外线。氧疗革命了医学。光合作用产生氧气，是地球生命的基础循环。`
};

P7_HISTORY[9] = {  // F 氟
  discoverer: `亨利·莫瓦桑`,
  discoveryYear: `1886`,
  namingOrigin: `拉丁语fluere(流动)`,
  biography: `法国化学家莫瓦桑经过多年努力，用电解氟化氢钾终于分离出氟，为此几乎丧命，获1906年诺贝尔奖。`,
  historicalPrice: `氟气危险且昂贵，氟化物价格适中`,
  culturalImpact: `氟化物防龋齿是公共卫生重大成就。特氟龙(PTFE)改变了炊具和工业涂层。氟利昂曾广泛使用但破坏臭氧层，蒙特利尔议定书禁止使用。`
};

P7_HISTORY[10] = {  // Ne 氖
  discoverer: `威廉·拉姆齐 & 威廉·特拉弗斯`,
  discoveryYear: `1898`,
  namingOrigin: `希腊语neos(新的)`,
  biography: `英国化学家拉姆齐和特拉弗斯在液态空气分馏中发现氖。他们还发现了氪和氙，三人因此获1904年诺贝尔奖。`,
  historicalPrice: `氖气一度昂贵，霓虹灯普及后价格下降`,
  culturalImpact: `氖灯(霓虹灯)定义了20世纪都市夜景美学。液氖是低温制冷剂。氖在宇宙中的丰度是恒星演化的指示器。`
};


// ── 第 3 周期 ────────────────────────────────────────────
P7_HISTORY[11] = {  // Na 钠
  discoverer: `汉弗莱·戴维`,
  discoveryYear: `1807`,
  namingOrigin: `拉丁语natrium(碳酸钠)`,
  biography: `英国化学家戴维用电解熔融氢氧化钠首次分离出钠。此前苏打(碳酸钠)已被使用数千年。`,
  historicalPrice: `金属钠价格适中，工业大量使用`,
  culturalImpact: `钠灯是高效路灯。氯化钠(食盐)是人类生存必需，也是历史上重要的贸易商品和税收来源('salary'一词源于盐)。钠钾合金是核反应堆冷却剂。`
};

P7_HISTORY[12] = {  // Mg 镁
  discoverer: `汉弗莱·戴维`,
  discoveryYear: `1808`,
  namingOrigin: `希腊语Magnesia(马格尼西亚地区)`,
  biography: `戴维用电解法分离出镁。马格尼西亚地区自古就以含镁矿物闻名。`,
  historicalPrice: `二战后镁价格大幅下降`,
  culturalImpact: `镁是最轻的结构金属，用于航空航天和汽车减重。镁粉用于照明弹和烟花。叶绿素中的镁是光合作用的核心，养活整个生物圈。`
};

P7_HISTORY[13] = {  // Al 铝
  discoverer: `汉斯·克里斯蒂安·奥斯特`,
  discoveryYear: `1825`,
  namingOrigin: `拉丁语alumen(明矾)`,
  biography: `丹麦物理学家奥斯特首次从铝土中分离出不纯的铝。1854年法国的德维尔改进了制备方法。`,
  historicalPrice: `19世纪铝比黄金还贵，拿破仑三世用铝餐具宴客`,
  culturalImpact: `电解铝法(霍尔-埃鲁法, 1886)使铝价格暴跌千倍，成为第二大金属。铝改变了建筑、航空、包装。铝制易拉罐是回收率最高的容器之一。`
};

P7_HISTORY[14] = {  // Si 硅
  discoverer: `永斯·贝采利乌斯`,
  discoveryYear: `1824`,
  namingOrigin: `拉丁语silex(燧石)`,
  biography: `瑞典化学家贝采利乌斯用钾还原氟硅酸钾得到不纯的硅。硅是地壳第二丰富元素。`,
  historicalPrice: `冶金级硅便宜，电子级高纯硅极昂贵`,
  culturalImpact: `硅是信息时代的基石——半导体、太阳能、芯片。硅谷因此命名。硅酮(有机硅)广泛用于医疗、建筑和日用品。硅是玻璃的主要成分。`
};

P7_HISTORY[15] = {  // P 磷
  discoverer: `亨尼格·布兰德`,
  discoveryYear: `1669`,
  namingOrigin: `希腊语phosphoros(带光的)`,
  biography: `德国商人布兰德从尿液中蒸馏出磷，是第一个有记录发现元素的人。他是在寻找'贤者之石'时意外发现的。`,
  historicalPrice: `19世纪白磷火柴极便宜但危险`,
  culturalImpact: `磷是DNA和ATP的核心，生命不可或缺。白磷弹的残忍性引发国际禁约。磷肥养活全球农业。火柴从白磷到红磷的安全改进是消费者保护经典案例。`
};

P7_HISTORY[16] = {  // S 硫
  discoverer: `史前已知`,
  discoveryYear: `史前`,
  namingOrigin: `拉丁语sulphur(硫磺)`,
  biography: `硫磺在古代文明中被广泛使用——古埃及用于消毒，中国用于火药，圣经称之为'硫磺之火'。`,
  historicalPrice: `硫磺自古价格低廉`,
  culturalImpact: `硫是火药三大原料之一，改变了战争史。硫化橡胶(硫化工艺)催生了现代橡胶工业。硫酸是工业之母，产量反映国家工业水平。硫是蛋白质必需元素。`
};

P7_HISTORY[17] = {  // Cl 氯
  discoverer: `卡尔·舍勒`,
  discoveryYear: `1774`,
  namingOrigin: `希腊语chloros(黄绿色)`,
  biography: `瑞典化学家舍勒用盐酸和二氧化锰反应首次制得氯气。1810年戴维确认其为元素并命名。`,
  historicalPrice: `工业氯气价格低廉`,
  culturalImpact: `氯消毒饮用水是20世纪最伟大的公共卫生成就之一。PVC塑料是最大氯消耗品。氯气武器(一战)开启了化学武器时代，后为日内瓦公约禁止。`
};

P7_HISTORY[18] = {  // Ar 氩
  discoverer: `瑞利勋爵 & 威廉·拉姆齐`,
  discoveryYear: `1894`,
  namingOrigin: `希腊语argos(懒惰/不活泼)`,
  biography: `英国物理学家瑞利发现从空气中制取的氮比从氨分解的氮重，与拉姆齐合作发现氩。震惊科学界——空气中有未知气体。`,
  historicalPrice: `氩气价格低廉，大量用于工业保护气`,
  culturalImpact: `氩是大气中第三多气体(0.93%)。氩弧焊保护气、灯泡填充气、半导体制造。氩的发现开启了稀有气体化学的整个领域。`
};


// ── 第 4 周期 ────────────────────────────────────────────
P7_HISTORY[19] = {  // K 钾
  discoverer: `汉弗莱·戴维`,
  discoveryYear: `1807`,
  namingOrigin: `阿拉伯语al-qaly(灰烬)`,
  biography: `戴维用电解熔融氢氧化钾分离出钾。钾碱(碳酸钾)从草木灰中提取已有千年历史。`,
  historicalPrice: `金属钾价格适中`,
  culturalImpact: `钾肥(NPK)是全球农业三大肥料之一。钾-40用于岩石测年。钾钠合金在核反应堆中作冷却剂。钾离子是细胞内主要阳离子，心脏功能的必需。`
};

P7_HISTORY[20] = {  // Ca 钙
  discoverer: `汉弗莱·戴维`,
  discoveryYear: `1808`,
  namingOrigin: `拉丁语calx(石灰石)`,
  biography: `戴维电解石灰和氧化汞的混合物得到钙。石灰的使用可追溯到古埃及和古罗马。`,
  historicalPrice: `钙化合物价格极低`,
  culturalImpact: `钙是骨骼和牙齿的主要成分。石灰砂浆建造了万里长城和金字塔。水泥(硅酸钙)是现代建筑基础。钙是地壳第五丰富元素。`
};

P7_HISTORY[21] = {  // Sc 钪
  discoverer: `拉尔斯·弗雷德里克·尼尔森`,
  discoveryYear: `1879`,
  namingOrigin: `拉丁语Scania(斯堪的纳维亚)`,
  biography: `瑞典化学家尼尔森从硅铍钇矿中发现钪，证实了门捷列夫预言的'类硼'。`,
  historicalPrice: `钪价格昂贵，年产量仅数吨`,
  culturalImpact: `钪铝合金用于战斗机和高端自行车框架。钪碘灯模拟太阳光用于摄影和体育场照明。钪的发现验证了元素周期律的预言能力。`
};

P7_HISTORY[22] = {  // Ti 钛
  discoverer: `威廉·格雷戈尔`,
  discoveryYear: `1791`,
  namingOrigin: `希腊神话Titanes(泰坦巨人)`,
  biography: `英国牧师格雷戈尔在钛铁矿中发现钛。1795年克拉普罗特独立发现并命名为钛(泰坦之神)。`,
  historicalPrice: `20世纪钛工业发展后价格下降`,
  culturalImpact: `钛是强度重量比最高的金属，用于航空航天、人工关节和牙科植入物。二氧化钛是最白色颜料，用于油漆、防晒霜和食品添加剂。钛合金深海耐腐蚀。`
};

P7_HISTORY[23] = {  // V 钒
  discoverer: `安德烈·曼努埃尔·德·里奥`,
  discoveryYear: `1801`,
  namingOrigin: `北欧女神Vanadis(弗蕾亚)`,
  biography: `西班牙裔墨西哥矿物学家里奥从钒铅矿中发现钒。命名源自北欧神话美丽女神。1830年瑞典的塞夫斯特伦重新发现。`,
  historicalPrice: `钒价格适中，钢铁工业大量使用`,
  culturalImpact: `钒钢强度极高，用于工具钢和弹簧钢。钒氧化还原电池是大规模储能候选技术。钒催化剂用于硫酸生产。蓝色陶瓷釉含钒。`
};

P7_HISTORY[24] = {  // Cr 铬
  discoverer: `路易-尼古拉·沃克兰`,
  discoveryYear: `1797`,
  namingOrigin: `希腊语chroma(颜色)`,
  biography: `法国化学家沃克兰从西伯利亚红铅矿(PbCrO4)中发现铬。因其化合物色彩丰富而得名。`,
  historicalPrice: `铬价格适中，电镀和不锈钢大量使用`,
  culturalImpact: `不锈钢(含铬12%以上)改变了厨房、建筑和医疗。铬电镀赋予表面硬度和光泽。红宝石和祖母绿的色彩来自铬。铬酸铅是著名的铬黄颜料(梵高最爱)。`
};

P7_HISTORY[25] = {  // Mn 锰
  discoverer: `约翰·戈特利布·甘恩`,
  discoveryYear: `1774`,
  namingOrigin: `拉丁语magnes(磁石)`,
  biography: `瑞典矿物学家甘恩还原软锰矿得到锰。锰的氧化物自古用作玻璃脱色剂。`,
  historicalPrice: `锰价格低廉，钢铁工业第四大金属`,
  culturalImpact: `锰是钢铁工业不可或缺的脱氧脱硫剂。锰钢(含锰13%)极耐磨，用于挖掘机和铁轨。锰是光合作用中水裂解释氧的关键元素。锰中毒导致'锰疯'是职业病史经典案例。`
};

P7_HISTORY[26] = {  // Fe 铁
  discoverer: `史前已知`,
  discoveryYear: `史前`,
  namingOrigin: `拉丁语ferrum(铁)`,
  biography: `铁器时代约始于公元前1200年。陨铁更早被使用(图坦卡蒙匕首)。人类从青铜时代迈入铁器时代改变了文明进程。`,
  historicalPrice: `铁是最廉价结构金属`,
  culturalImpact: `铁是地核主要成分，产生磁场保护生命。钢铁是现代文明骨架——建筑、桥梁、铁路、汽车。铁是血红蛋白核心，运输氧气。铁器时代是人类历史最重要的分水岭之一。`
};

P7_HISTORY[27] = {  // Co 钴
  discoverer: `格奥尔格·勃兰特`,
  discoveryYear: `1735`,
  namingOrigin: `德语kobold(地精)`,
  biography: `瑞典化学家勃兰特从辉钴矿中分离出钴。矿工认为矿物被地精诅咒(因其有毒烟气)而得名。`,
  historicalPrice: `钴价格波动大，电池需求推高`,
  culturalImpact: `钴蓝是陶瓷和玻璃的经典颜料。钴-60是重要的γ射线源(放射治疗和消毒)。锂钴氧化物是手机电池正极材料。钴是维生素B12核心，是唯一含金属的维生素。`
};

P7_HISTORY[28] = {  // Ni 镍
  discoverer: `阿克塞尔·弗雷德里克·克龙斯泰特`,
  discoveryYear: `1751`,
  namingOrigin: `德语Kupfernickel(铜地精)`,
  biography: `瑞典矿物学家克龙斯泰特从红镍矿中发现镍。矿工误以为含铜但提炼不出，归咎于地精恶作剧。`,
  historicalPrice: `镍价格适中，不锈钢需求稳定`,
  culturalImpact: `镍不锈钢耐腐蚀，用于厨房、化工和硬币。镍氢电池是早期混合动力车动力源。镍镉电池曾主导充电电池市场。镍过敏是常见接触性皮炎。`
};

P7_HISTORY[29] = {  // Cu 铜
  discoverer: `史前已知`,
  discoveryYear: `史前`,
  namingOrigin: `拉丁语cuprum(塞浦路斯岛)`,
  biography: `铜是人类最早使用的金属(约公元前9000年)。塞浦路斯是古罗马铜矿中心，铜因此得名。青铜时代因铜锡合金得名。`,
  historicalPrice: `铜价格波动反映全球经济景气`,
  culturalImpact: `铜是电气文明的基础——电线、电机、电子。铜杀菌剂在农业和医疗中使用。铜离子抑菌性使其用于门把手和医院。铜是金融市场'铜博士'指标，反映经济健康。`
};

P7_HISTORY[30] = {  // Zn 锌
  discoverer: `安德烈亚斯·马格拉夫`,
  discoveryYear: `1746`,
  namingOrigin: `德语Zink`,
  biography: `德国化学家马格拉夫首次从锌矿中提炼出金属锌。锌黄铜的使用可追溯到古罗马。中国明代已大规模炼锌。`,
  historicalPrice: `锌价格低廉，第四常用金属`,
  culturalImpact: `镀锌钢防腐蚀用于建筑和汽车。锌是黄铜的关键成分。氧化锌用于防晒霜和橡胶。锌是免疫系统和伤口愈合的必需微量元素。`
};

P7_HISTORY[31] = {  // Ga 镓
  discoverer: `保罗·埃米尔·勒科克·德·布瓦博德兰`,
  discoveryYear: `1875`,
  namingOrigin: `拉丁语Gallia(法国)`,
  biography: `法国化学家布瓦博德兰用光谱法从闪锌矿中发现镓。以祖国法国命名，也证实了门捷列夫预言的'类铝'。`,
  historicalPrice: `镓价格适中，半导体需求增长`,
  culturalImpact: `砷化镓用于高速芯片和LED。氮化镓蓝光LED(2014年诺贝尔奖)带来白光LED革命。镓在体温下即熔化，用于温度计和恶作剧'会融化的勺子'。`
};

P7_HISTORY[32] = {  // Ge 锗
  discoverer: `克莱门斯·温克勒`,
  discoveryYear: `1886`,
  namingOrigin: `拉丁语Germania(德国)`,
  biography: `德国化学家温克勒从银硫矿中发现锗。以祖国命名，也证实了门捷列夫预言的'类硅'。`,
  historicalPrice: `锗价格波动，半导体用途部分被硅取代`,
  culturalImpact: `锗晶体管开启了电子时代(巴丁等人获1956年诺贝尔奖)。锗用于光纤通信和红外夜视。锗-68是PET扫描校准源。锗的发现完美验证了周期表的预言能力。`
};

P7_HISTORY[33] = {  // As 砷
  discoverer: `阿尔伯特·马格努斯`,
  discoveryYear: `1250`,
  namingOrigin: `希腊语arsenikon(雄黄)`,
  biography: `德国修道士马格努斯首次记录从雄黄中提取砷。砷化合物自古用作毒药和药物。`,
  historicalPrice: `砷化合物价格低廉`,
  culturalImpact: `砷是历史上最著名的毒药——波吉亚家族和拿破仑死因之谜都涉及砷。砷凡纳明(606)是第一种有效抗梅毒药物。砷化镓是重要半导体。地下水砷污染影响全球上亿人。`
};

P7_HISTORY[34] = {  // Se 硒
  discoverer: `永斯·贝采利乌斯`,
  discoveryYear: `1817`,
  namingOrigin: `希腊语selene(月亮)`,
  biography: `瑞典化学家贝采利乌斯在检验硫酸厂残渣时发现硒。因其与碲(地球)类似而以月亮命名。`,
  historicalPrice: `硒价格适中，电子和玻璃工业使用`,
  culturalImpact: `硒是早期静电复印(施乐)的核心材料。硒用于玻璃脱色和红玻璃着色。硒是人体必需微量元素，谷胱甘肽过氧化物酶的活性中心。硒中毒(硒壤病)影响牲畜。`
};

P7_HISTORY[35] = {  // Br 溴
  discoverer: `安托万·热罗姆·巴拉尔`,
  discoveryYear: `1826`,
  namingOrigin: `希腊语bromos(恶臭)`,
  biography: `法国化学家巴拉尔从海水制盐的苦卤中发现溴。因其刺激性气味而得名。`,
  historicalPrice: `溴价格低廉`,
  culturalImpact: `溴化银是胶片摄影的基础，记录了整个20世纪的影像。溴化物曾是重要的镇静剂。溴阻燃剂广泛用于电子产品，但因环境持久性逐渐被禁。甲基溴熏蒸剂破坏臭氧层。`
};

P7_HISTORY[36] = {  // Kr 氪
  discoverer: `威廉·拉姆齐 & 威廉·特拉弗斯`,
  discoveryYear: `1898`,
  namingOrigin: `希腊语kryptos(隐藏的)`,
  biography: `拉姆齐和特拉弗斯在液态空气分馏残留物中发现氪。`,
  historicalPrice: `氪价格较高，产量有限`,
  culturalImpact: `氪灯用于机场跑道照明和高速摄影闪光灯。氪-85用于密封容器检漏。1960-1983年间米的定义基于氪-86的波长。氪氟准分子激光用于半导体光刻。`
};


// ── 第 5 周期 ────────────────────────────────────────────
P7_HISTORY[37] = {  // Rb 铷
  discoverer: `罗伯特·本生 & 古斯塔夫·基尔霍夫`,
  discoveryYear: `1861`,
  namingOrigin: `拉丁语rubidus(深红色)`,
  biography: `德国化学家本生和基尔霍夫用光谱法从锂云母中发现铷。因其光谱线呈深红色而得名。`,
  historicalPrice: `铷价格较高`,
  culturalImpact: `铷原子钟是GPS卫星定位的核心——时间精度决定定位精度。铷用于特种玻璃和光电管。铷-87被用于玻色-爱因斯坦凝聚实验(1995年)，验证了量子统计预测。`
};

P7_HISTORY[38] = {  // Sr 锶
  discoverer: `威廉·克鲁克尚克 & 阿道夫·费迪南德·伦佩尔`,
  discoveryYear: `1787-1790`,
  namingOrigin: `苏格兰小镇Strontian`,
  biography: `爱尔兰化学家克鲁克尚克在研究菱锶矿时发现锶。1790年霍普验证。以发现地苏格兰小镇命名。`,
  historicalPrice: `锶价格低廉`,
  culturalImpact: `锶盐产生鲜艳红色火焰，是烟花和信号弹的红色来源。锶铁氧体永磁体用于喇叭和电机。锶-90是核裂变产物，半衰期约29年，是放射性污染的指示核素。`
};

P7_HISTORY[39] = {  // Y 钇
  discoverer: `约翰·加多林`,
  discoveryYear: `1794`,
  namingOrigin: `瑞典小镇Ytterby`,
  biography: `芬兰化学家加多林在硅铍钇矿中发现新氧化物，后证实含钇。以发现地Ytterby命名——这个小镇贡献了4种元素名。`,
  historicalPrice: `钇价格适中，激光和超导材料使用`,
  culturalImpact: `钇铝石榴石(YAG)激光广泛用于医疗和工业。钇钡铜氧(YBCO)是第一种超过液氮温度的高温超导体(1987年)。钇用于LED荧光粉和高温合金。`
};

P7_HISTORY[40] = {  // Zr 锆
  discoverer: `马丁·海因里希·克拉普罗特`,
  discoveryYear: `1789`,
  namingOrigin: `波斯语zargun(金色)`,
  biography: `德国化学家克拉普罗特从锆石中发现锆。锆石自古用作宝石，其名字源于波斯语'金色'。`,
  historicalPrice: `锆价格适中，核工业和陶瓷使用`,
  culturalImpact: `锆合金是核反应堆燃料包壳的首选材料(低中子吸收截面)。氧化锆陶瓷极耐磨耐热，用于牙冠和发动机部件。锆石是9月诞生石。立方氧化锆是最著名的钻石仿品。`
};

P7_HISTORY[41] = {  // Nb 铌
  discoverer: `查尔斯·哈切特`,
  discoveryYear: `1801`,
  namingOrigin: `希腊神话Niobe(坦塔洛斯之女)`,
  biography: `英国化学家哈切特从美洲铌铁矿中发现铌。原名'钶'(columbium)，后以北欧神话命名。1846年罗斯重新确认。`,
  historicalPrice: `铌价格适中，钢铁和超导使用`,
  culturalImpact: `铌钢用于天然气管道和桥梁(高强度低合金)。铌钛和铌锡超导线用于MRI和粒子加速器。铌酸锂是重要的光学晶体。铌钛合金用于超导磁体。`
};

P7_HISTORY[42] = {  // Mo 钼
  discoverer: `彼得·雅各布·舍勒 & 彼得·约瑟夫·许杰尔马赫尔`,
  discoveryYear: `1778-1781`,
  namingOrigin: `希腊语molybdos(铅)`,
  biography: `瑞典化学家舍勒从辉钼矿中发现钼酸，许杰尔马赫还原得到金属钼。钼铅矿自古被误认为铅。`,
  historicalPrice: `钼价格适中，钢铁合金使用`,
  culturalImpact: `钼是高强度合金钢的关键元素，用于飞机和导弹。二硫化钼是优异固体润滑剂。钼是固氮酶和黄嘌呤氧化酶的必需元素。钼靶材用于乳腺X光检查。`
};

P7_HISTORY[43] = {  // Tc 锝
  discoverer: `卡洛·佩里耶 & 埃米利奥·塞格雷`,
  discoveryYear: `1937`,
  namingOrigin: `希腊语technetos(人造的)`,
  biography: `意大利物理学家塞格雷在加利福尼亚用氘核轰击钼靶得到锝。是第一个人工合成的元素，因此得名。`,
  historicalPrice: `锝-99m价格适中，广泛用于医疗`,
  culturalImpact: `锝-99m是核医学最重要的放射性同位素，用于骨扫描、心脏灌注显像等。每天全球数百万次诊断使用。锝的发现证明了元素可以通过人工核反应制造。`
};

P7_HISTORY[44] = {  // Ru 钌
  discoverer: `卡尔·恩斯特·克劳斯`,
  discoveryYear: `1844`,
  namingOrigin: `拉丁语Ruthenia(俄罗斯)`,
  biography: `俄罗斯裔德国化学家克劳斯从铂矿残渣中发现钌。以祖国俄罗斯的拉丁名命名。`,
  historicalPrice: `钌价格波动大，电子工业需求增长`,
  culturalImpact: `钌是电子芯片电阻器和催化剂的重要材料。钌基催化剂用于氨合成和烯烃复分解(2005年诺贝尔奖)。钌红用于生物组织染色。钌配合物是抗癌药物研究热点。`
};

P7_HISTORY[45] = {  // Rh 铑
  discoverer: `威廉·海德·沃拉斯顿`,
  discoveryYear: `1803`,
  namingOrigin: `希腊语rhodon(玫瑰)`,
  biography: `英国化学家沃拉斯顿从铂矿中分离出铑。因其盐呈玫瑰红色而得名。`,
  historicalPrice: `铑是贵金属中最昂贵的之一`,
  culturalImpact: `铑是汽车催化转化器的核心，将尾气中的有害气体转化为无害物。铑价格曾因排放法规收紧而暴涨。铑用于高端首饰镀层和化学催化剂。铑的稀缺性使其成为最贵金属。`
};

P7_HISTORY[46] = {  // Pd 钯
  discoverer: `威廉·海德·沃拉斯顿`,
  discoveryYear: `1803`,
  namingOrigin: `希腊语Pallas(智神星)`,
  biography: `沃拉斯顿同时发现了钯和铑。以当年刚发现的小行星智神星(Pallas)命名。`,
  historicalPrice: `钯价格波动大，催化转化器需求驱动`,
  culturalImpact: `钯是汽车催化转化器主力金属。钯金首饰受欢迎。钯催化剂用于交叉偶联反应(2010年诺贝尔奖)，是有机合成和药物制造的关键。钯氢化物可用于氢气纯化。`
};

P7_HISTORY[47] = {  // Ag 银
  discoverer: `史前已知`,
  discoveryYear: `史前`,
  namingOrigin: `盎格鲁-撒克逊语seolfor`,
  biography: `银是人类最早使用的金属之一。银币在数千年中是全球贸易的基础货币。`,
  historicalPrice: `银价格波动，兼具贵金属和工业金属属性`,
  culturalImpact: `银是最佳导电导热金属，用于高端电子接触件。银盐摄影记录了历史。纳米银抗菌剂广泛用于医疗和纺织品。银本位和金本位塑造了近现代金融体系。'月光如银'是跨文化的意象。`
};

P7_HISTORY[48] = {  // Cd 镉
  discoverer: `弗里德里希·施特罗迈尔 & 塞缪尔·赫尔曼`,
  discoveryYear: `1817`,
  namingOrigin: `拉丁语cadmia(菱锌矿)`,
  biography: `德国化学家施特罗迈尔从碳酸锌中发现镉。以碳酸锌的古希腊名命名。`,
  historicalPrice: `镉价格低廉但环保法规限制使用`,
  culturalImpact: `镍镉电池曾主导便携电子市场。镉黄是著名颜料。硫化镉量子点是前沿纳米材料。镉中毒引起'痛痛病'(日本富山事件)，成为环境公害经典案例，推动全球重金属管控。`
};

P7_HISTORY[49] = {  // In 铟
  discoverer: `费迪南德·赖希 & 希罗尼穆斯·里希特`,
  discoveryYear: `1863`,
  namingOrigin: `拉丁语indicum(靛蓝色)`,
  biography: `德国化学家赖希和里希特用光谱法从锌矿中发现铟。因其光谱线呈靛蓝色而得名。`,
  historicalPrice: `铟价格波动，液晶屏需求推高`,
  culturalImpact: `氧化铟锡(ITO)是触摸屏和液晶屏的透明导电层，支撑了整个智能手机产业。铟焊料熔点低。铟磷化物用于红外探测器和高频电子。铟的发现展示了光谱分析的力量。`
};

P7_HISTORY[50] = {  // Sn 锡
  discoverer: `史前已知`,
  discoveryYear: `史前`,
  namingOrigin: `拉丁语stannum`,
  biography: `锡器时代约始于公元前3000年。锡石贸易连接古代文明——青铜(铜锡合金)是青铜时代的基础。`,
  historicalPrice: `锡价格适中，焊料和镀层大量使用`,
  culturalImpact: `锡焊料是电子装配的基础。镀锡铁皮(马口铁)用于食品罐头。锡-铋合金用于无铅焊料。古罗马'锡岛'传说指向英国康沃尔锡矿。锡疫(低温下白锡→灰锡)曾导致探险队悲剧。`
};

P7_HISTORY[51] = {  // Sb 锑
  discoverer: `史前已知`,
  discoveryYear: `史前`,
  namingOrigin: `拉丁语stibium(辉锑矿)`,
  biography: `锑在古代用作化妆品(眼影)和药物。17世纪德国化学家肖勒特制得金属锑。`,
  historicalPrice: `锑价格适中，阻燃剂和铅蓄电池使用`,
  culturalImpact: `三氧化锑是最大阻燃剂品种。锑铅合金用于蓄电池板栅和子弹硬化。锑是半导体掺杂剂。古代用辉锑矿作眼影(kohl)的习俗延续至今。锑中毒与砷类似。`
};

P7_HISTORY[52] = {  // Te 碲
  discoverer: `弗朗茨-约瑟夫·穆勒·冯·赖兴施泰因`,
  discoveryYear: `1782`,
  namingOrigin: `拉丁语tellus(地球)`,
  biography: `奥地利矿物学家穆勒从金矿中发现碲。因其与硒(月亮)类似而以地球命名。`,
  historicalPrice: `碲价格较高，产量有限`,
  culturalImpact: `碲化镉薄膜太阳能电池是大面积光伏候选技术。碲铋合金是热电材料——将废热转化为电能。碲用于合金添加剂改善切削性能。碲是稀有元素，地壳含量极低。`
};

P7_HISTORY[53] = {  // I 碘
  discoverer: `贝尔纳·库尔图瓦`,
  discoveryYear: `1811`,
  namingOrigin: `希腊语iodes(紫色)`,
  biography: `法国化学家库尔图瓦从海藻灰中提取碘。其蒸汽呈紫色而得名。后经盖-吕萨克和戴维确认为元素。`,
  historicalPrice: `碘价格低廉`,
  culturalImpact: `碘伏是常用消毒剂。碘-131用于甲状腺治疗和诊断。碘缺乏导致甲状腺肿(大脖子病)，碘盐计划是重大公共卫生成就。碘化银用于人工增雨。碘是人体必需微量元素。`
};

P7_HISTORY[54] = {  // Xe 氙
  discoverer: `威廉·拉姆齐 & 威廉·特拉弗斯`,
  discoveryYear: `1898`,
  namingOrigin: `希腊语xenos(陌生人)`,
  biography: `拉姆齐和特拉弗斯在液态空气分馏中发现氙。是稀有气体中最后一个被发现的天然元素。`,
  historicalPrice: `氙价格昂贵，产量极少`,
  culturalImpact: `氙灯用于汽车HID前照灯和电影放映机。氙离子推进器用于深空探测(如黎明号)。氙是全身麻醉剂。氙-133用于肺通气显像。氙短弧灯是高端摄影和电影光源。`
};


// ── 第 6 周期 ────────────────────────────────────────────
P7_HISTORY[55] = {  // Cs 铯
  discoverer: `罗伯特·本生 & 古斯塔夫·基尔霍夫`,
  discoveryYear: `1860`,
  namingOrigin: `拉丁语caesius(天蓝色)`,
  biography: `本生和基尔霍夫用光谱法从矿泉水中发现铯。因其光谱线呈天蓝色而得名。`,
  historicalPrice: `铯价格极高，产量极少`,
  culturalImpact: `铯原子钟定义了一秒——铯-133跃迁频率是SI秒的标准。铯原子钟精度达10^-15，是GPS导航的基础。铯-137是核事故的主要放射性污染源(切尔诺贝利)。铯-137辐射源曾导致巴西戈亚尼亚事故。`
};

P7_HISTORY[56] = {  // Ba 钡
  discoverer: `汉弗莱·戴维`,
  discoveryYear: `1808`,
  namingOrigin: `希腊语barys(重的)`,
  biography: `戴维电解氧化钡得到钡。重晶石(硫酸钡)自古用作白色颜料。`,
  historicalPrice: `钡化合物价格低廉`,
  culturalImpact: `硫酸钡'钡餐'是X光胃肠道造影的经典对比剂。碳酸钡是高效灭鼠剂。钡烟火产生绿色。硝酸钡用于绿色信号弹。钡是钻井泥浆的重要成分。钡中毒影响钾通道导致心律失常。`
};

P7_HISTORY[57] = {  // La 镧
  discoverer: `卡尔·古斯塔夫·莫桑德`,
  discoveryYear: `1839`,
  namingOrigin: `希腊语lanthanein(隐藏)`,
  biography: `瑞典化学家莫桑德从铈土中分离出镧。因其被'隐藏'在铈中而得名。`,
  historicalPrice: `镧价格适中，催化剂和电池使用`,
  culturalImpact: `镧镍氢电池是混合动力车主力电池。镧催化剂用于石油裂化。碳酸镧用于肾病患者降磷。镧玻璃具有高折射率和低色散。镧是镧系元素的开端，15种稀土元素的排头兵。`
};

P7_HISTORY[58] = {  // Ce 铈
  discoverer: `永斯·贝采利乌斯 & 威廉·希辛格`,
  discoveryYear: `1803`,
  namingOrigin: `小行星谷神星(Ceres)`,
  biography: `瑞典化学家贝采利乌斯和希辛格从硅铍钇矿中发现铈。以当时刚发现的小行星谷神星命名。`,
  historicalPrice: `铈价格适中，催化剂和抛光粉使用`,
  culturalImpact: `二氧化铈是玻璃抛光粉和自清洁表面催化剂。铈基催化剂是汽车尾气净化的重要组分。铈-镁合金用于打火石。铈是稀土元素中最丰富的，地壳含量与铜相当。`
};

P7_HISTORY[59] = {  // Pr 镨
  discoverer: `卡尔·莫桑德`,
  discoveryYear: `1885`,
  namingOrigin: `希腊语prasios(绿色)+didymos(双)`,
  biography: `莫桑德从铈土中分离出'镨钕'(didymium)，后由奥地利化学家威尔斯巴赫于1885年分离为镨和钕。`,
  historicalPrice: `镨价格适中，磁体和玻璃使用`,
  culturalImpact: `镨钕合金(PrNd)是钕铁硼磁体的重要组分。镨黄是陶瓷和玻璃颜料。镨用于碳弧灯芯和焊工护目镜。镨的发现推动了稀土分离化学的发展。`
};

P7_HISTORY[60] = {  // Nd 钕
  discoverer: `卡尔·奥尔·冯·威尔斯巴赫`,
  discoveryYear: `1885`,
  namingOrigin: `希腊语neos(新的)+didymos(双)`,
  biography: `奥地利化学家威尔斯巴赫通过分步结晶将'镨钕'分离为镨和钕。'新双'之意因其从镨钕中分出。`,
  historicalPrice: `钕价格适中，磁体需求旺盛`,
  culturalImpact: `钕铁硼磁体是已知最强永磁体，用于电动车电机、风力发电机和耳机。钕YAG激光用于医疗。钕玻璃用于激光放大器(国家点火装置)。钕是稀土应用的明星元素。`
};

P7_HISTORY[61] = {  // Pm 钷
  discoverer: `雅各布·马林斯基 & 劳伦斯·格伦丹宁`,
  discoveryYear: `1945`,
  namingOrigin: `希腊神话Prometheus(普罗米修斯)`,
  biography: `美国科学家马林斯基和格伦丹宁在铀裂变产物中发现钷。以普罗米修斯(盗火者)命名，象征核能的威力。`,
  historicalPrice: `钷-147价格较高`,
  culturalImpact: `钷-147用于夜光涂料和微型核电池。钷曾是beta辐射厚度测量仪的辐射源。钷的发现填补了周期表最后一块空白。钷-147曾用于发光表盘，后因安全考虑被氚替代。`
};

P7_HISTORY[62] = {  // Sm 钐
  discoverer: `保罗·埃米尔·勒科克·德·布瓦博德兰`,
  discoveryYear: `1879`,
  namingOrigin: `俄罗斯矿物学家Samarsky`,
  biography: `法国化学家布瓦博德兰从铌酸钇矿中发现钐。以最先提供该矿物的俄罗斯矿物学家萨马尔斯基命名——首个以人名命名的元素。`,
  historicalPrice: `钐价格适中，磁体和激光使用`,
  culturalImpact: `钐钴磁体耐高温耐腐蚀，用于航空航天和军事。钐-153用于骨转移癌治疗(放射性药物)。钐在生物成像和肿瘤治疗中有应用。钐钴磁体是第一代稀土永磁体。`
};

P7_HISTORY[63] = {  // Eu 铕
  discoverer: `欧仁·阿纳托尔·德马凯`,
  discoveryYear: `1901`,
  namingOrigin: `拉丁语Europa(欧洲)`,
  biography: `法国化学家德马凯从钐钆混合物中发现铕。以欧洲命名。`,
  historicalPrice: `铕价格波动，荧光粉需求驱动`,
  culturalImpact: `铕是荧光灯和LED磷光体的关键——Eu³⁺发红光，Eu²⁺发蓝光。欧元纸币荧光防伪用铕。铕-155用于钚同位素分析。铕的4f电子构型使其成为优异发光中心。`
};

P7_HISTORY[64] = {  // Gd 钆
  discoverer: `让·夏尔·加利萨尔·德·马里尼亚克`,
  discoveryYear: `1880`,
  namingOrigin: `芬兰矿物学家Gadolin`,
  biography: `瑞士化学家马里尼亚克从铌酸钇矿中发现钆。以芬兰化学家加多林(首位发现钇的人)命名。`,
  historicalPrice: `钆价格适中，MRI造影剂使用`,
  culturalImpact: `钆-DTPA是MRI最常用的造影剂。钆镓石榴石(GGG)用于磁泡存储。钆-157中子俘获截面极高，用于核反应堆控制棒。钆磁致冷效应是室温磁制冷技术的候选。`
};

P7_HISTORY[65] = {  // Tb 铽
  discoverer: `佩尔·特奥多尔·克利夫`,
  discoveryYear: `1843`,
  namingOrigin: `瑞典小镇Ytterby`,
  biography: `瑞典化学家克利夫从铒土中分离出铽。再次以Ytterby小镇命名。`,
  historicalPrice: `铽价格较高，产量有限`,
  culturalImpact: `铽发绿色荧光，用于三基色荧光灯和PDP显示。铽镝铁(Terfenol-D)是磁致伸缩材料，用于声纳和传感器。铽-160用于放射性治疗。铽是稀缺稀土元素之一。`
};

P7_HISTORY[66] = {  // Dy 镝
  discoverer: `佩尔·特奥多尔·克利夫`,
  discoveryYear: `1843`,
  namingOrigin: `希腊语dysprositos(难以获取)`,
  biography: `瑞典化学家克利夫从铒土中分离出镝。因难以分离而得名。`,
  historicalPrice: `镝价格波动大，磁体需求驱动`,
  culturalImpact: `镝添加到钕铁硼磁体中可大幅提高耐热性，电动车电机必需。镝灯是高显色性光源，用于摄影和电影。镝-165用于医疗放射治疗。镝热中子俘获截面大，用于核反应堆控制。`
};

P7_HISTORY[67] = {  // Ho 钬
  discoverer: `马克·德拉方丹 & 雅克-路易·索雷`,
  discoveryYear: `1878`,
  namingOrigin: `拉丁语Holmia(斯德哥尔摩)`,
  biography: `瑞士化学家索雷和德拉方丹从铒土中发现钬。以斯德哥尔摩的拉丁名命名。`,
  historicalPrice: `钬价格较高`,
  culturalImpact: `钬激光是泌尿外科碎石和前列腺手术的标准工具。钬磁矩在所有元素中最大，用于最强磁场磁体。钬-166用于肝癌放射治疗。钬玻璃产生2.1μm激光，用于医疗和军事。`
};

P7_HISTORY[68] = {  // Er 铒
  discoverer: `卡尔·古斯塔夫·莫桑德`,
  discoveryYear: `1843`,
  namingOrigin: `瑞典小镇Ytterby`,
  biography: `莫桑德从硅铍钇矿中分离出铒。Ytterby小镇贡献了第4个元素名。`,
  historicalPrice: `铒价格适中，光纤通信使用`,
  culturalImpact: `铒掺杂光纤放大器(EDFA)是光通信的里程碑——使跨洋光缆成为可能。铒发绿光，用于显示器荧光粉。铒激光(1.5μm)用于眼科和皮肤科。铒是Ytterby命名的4种元素之一。`
};

P7_HISTORY[69] = {  // Tm 铥
  discoverer: `佩尔·特奥多尔·克利夫`,
  discoveryYear: `1879`,
  namingOrigin: `瑞典小镇Ytterby`,
  biography: `克利夫从铒土中分离出铥。Ytterby的第5个也是最后一个元素名贡献。`,
  historicalPrice: `铥价格高，产量极少`,
  culturalImpact: `铥激光(2.01μm)用于泌尿外科碎石。铥-170是便携式X射线源，用于野外医疗和工业探伤。铥发蓝光，用于安全标签荧光。铥是稀土中最稀缺的元素之一。`
};

P7_HISTORY[70] = {  // Yb 镱
  discoverer: `让·夏尔·加利萨尔·德·马里尼亚克`,
  discoveryYear: `1878`,
  namingOrigin: `瑞典小镇Ytterby`,
  biography: `瑞士化学家马里尼亚克从铒土中分离出镱。Ytterby小镇贡献的第6个元素名。`,
  historicalPrice: `镱价格适中`,
  culturalImpact: `镱光纤激光器(1μm)是工业加工主力——切割、焊接、标记。镱-169用于伽马射线源(便携式无损检测)。镱原子钟精度与铯相当，是新一代原子钟候选。镱在高压下转变为金属性。`
};

P7_HISTORY[71] = {  // Lu 镥
  discoverer: `乔治·于尔班`,
  discoveryYear: `1907`,
  namingOrigin: `拉丁语Lutetia(巴黎)`,
  biography: `法国化学家于尔班从镱土中分离出镥。以巴黎的古罗马名命名。同时美国化学家詹姆斯独立发现。`,
  historicalPrice: `镥价格高，产量极少`,
  culturalImpact: `镥硅氧闪晶体用于PET扫描探测器，是癌症诊断的重要工具。镥用于石油裂化催化剂。镥掺杂闪烁体具有快速响应和高密度。镥是镧系元素最后一位，也是最难分离的稀土之一。`
};

P7_HISTORY[72] = {  // Hf 铪
  discoverer: `德克·科斯特 & 乔治·德·海韦西`,
  discoveryYear: `1923`,
  namingOrigin: `拉丁语Hafnia(哥本哈根)`,
  biography: `荷兰物理学家科斯特和匈牙利化学家海韦西在锆矿中发现铪。以哥本哈根的拉丁名命名(玻尔建议)。`,
  historicalPrice: `铪价格较高，核工业和芯片使用`,
  culturalImpact: `铪的中子吸收截面极高，是核反应堆控制棒的首选材料。铪基氧化物是7nm以下芯片的高k栅介质材料。铪与锆化学性质极相似，分离困难。铪灯用于等离子切割。`
};

P7_HISTORY[73] = {  // Ta 钽
  discoverer: `安德斯·古斯塔夫·埃克贝里`,
  discoveryYear: `1802`,
  namingOrigin: `希腊神话Tantalus(坦塔洛斯)`,
  biography: `瑞典化学家埃克贝里从钽铁矿中发现钽。以希腊神话中永远够不到食物和水的坦塔洛斯命名——因其极难溶于酸。`,
  historicalPrice: `钽价格较高，电子和医疗使用`,
  culturalImpact: `钽电解电容器体积小容量大，用于手机和电脑。钽生物相容性极佳，用于人工骨骼和牙科植入物。钽碳化物是最硬物质之一。钽钨合金耐高温耐腐蚀。刚果钽矿引发'冲突矿物'争议。`
};

P7_HISTORY[74] = {  // W 钨
  discoverer: `西班牙裔墨西哥化学家`,
  discoveryYear: `1783`,
  namingOrigin: `瑞典语tung sten(重石)`,
  biography: `埃利胡亚兄弟从黑钨矿中还原出钨。瑞典语'重石'之意。此前钨矿被称为'wolf rahm'(狼沫)。`,
  historicalPrice: `钨价格适中，硬质合金使用`,
  culturalImpact: `钨是熔点最高的金属(3422°C)，白炽灯丝因此发光。碳化钨(硬质合金)是切削工具和钻头的基础。钨合金穿甲弹用于军事。钨重密度的特性用于配重和辐射屏蔽。`
};

P7_HISTORY[75] = {  // Re 铼
  discoverer: `瓦尔特·诺达克 & 伊达·塔克 & 奥托·伯格`,
  discoveryYear: `1925`,
  namingOrigin: `莱茵河`,
  biography: `德国化学家诺达克和塔克(科学史上罕见的夫妻合作团队)从铂矿中发现铼。以莱茵河命名。是最后发现的稳定元素。`,
  historicalPrice: `铼价格极高，年产量仅数十吨`,
  culturalImpact: `铼是喷气发动机涡轮叶片的关键添加元素——耐高温1700°C以上。铼-188用于癌症放射治疗。铼铂重整催化剂用于石油精炼。铼是地壳中最稀缺的元素之一。`
};

P7_HISTORY[76] = {  // Os 锇
  discoverer: `史密斯森·坦南特`,
  discoveryYear: `1803`,
  namingOrigin: `希腊语osme(气味)`,
  biography: `英国化学家坦南特从铂矿残渣中发现锇和铱。锇因其氧化物有强烈刺激性气味而得名。`,
  historicalPrice: `锇价格极高，产量极少`,
  culturalImpact: `锇是已知密度最大的元素(22.59 g/cm³)。锇铱合金用于钢笔笔尖(高端钢笔标准配置)。锇用于电触点和催化剂。锇-187用于古陨石测年。锇的化合物有毒，四氧化锇是生物组织固定剂。`
};

P7_HISTORY[77] = {  // Ir 铱
  discoverer: `史密斯森·坦南特`,
  discoveryYear: `1803`,
  namingOrigin: `希腊神话Iris(彩虹女神)`,
  biography: `坦南特与锇同时发现铱。因其盐呈多种颜色(如彩虹)而得名。`,
  historicalPrice: `铱价格极高，年产量仅数吨`,
  culturalImpact: `铱是抗腐蚀性最强的金属，用于火花塞和坩埚。铱-192是工业探伤和癌症治疗的重要放射源。铱催化不对称反应(2001年诺贝尔奖相关)。铱在K-Pg界限异常富集，是小行星撞击导致恐龙灭绝的证据。`
};

P7_HISTORY[78] = {  // Pt 铂
  discoverer: `安东尼奥·德·乌略亚`,
  discoveryYear: `1735`,
  namingOrigin: `西班牙语platina(小银)`,
  biography: `西班牙探险家乌略亚在哥伦比亚发现铂。因其像银但更难熔而被贬称为'小银'。18世纪铂的稀缺性使其比金还珍贵。`,
  historicalPrice: `铂是贵金属，价格波动大`,
  culturalImpact: `铂催化转化器是汽车尾气净化核心。铂首饰是高端珠宝标配。顺铂(含铂抗癌药)革命了癌症化疗(1978年上市)。铂铱合金定义了国际千克原器(至2019年)。铂是标准电极电势的基准。`
};

P7_HISTORY[79] = {  // Au 金
  discoverer: `史前已知`,
  discoveryYear: `史前`,
  namingOrigin: `拉丁语aurum(光辉的黎明)`,
  biography: `金是人类最早认识的金属之一。因不氧化、易加工、色泽美丽，在所有文明中都是财富和权力的象征。`,
  historicalPrice: `金是贵金属的基准，价格持续上涨`,
  culturalImpact: `金本位制度塑造了近现代国际金融体系(至1971年布雷顿森林体系解体)。金用于高端电子接触件和航天器反射膜。纳米金用于医学诊断和靶向治疗。'金'是跨文化的至高价值象征。`
};

P7_HISTORY[80] = {  // Hg 汞
  discoverer: `史前已知`,
  discoveryYear: `史前`,
  namingOrigin: `罗马神Mercury(水星/信使神)`,
  biography: `汞在古代文明中已知。因流动如液体而得名'水银'。炼金术中是七大金属之一(对应水星)。`,
  historicalPrice: `汞价格低廉但环保法规严格限制`,
  culturalImpact: `汞是常温下唯一液态金属。水银温度计和血压计使用数百年(现逐步淘汰)。汞蒸气灯用于路灯。汞中毒(水俣病)是日本四大公害之一。水俣公约(2013)全球限制汞使用。炼金术中汞是'万物之本'。`
};

P7_HISTORY[81] = {  // Tl 铊
  discoverer: `威廉·克鲁克斯`,
  discoveryYear: `1861`,
  namingOrigin: `希腊语thallos(嫩枝)`,
  biography: `英国化学家克鲁克斯用光谱法从铅矿残渣中发现铊。因其光谱线呈嫩绿色而得名。`,
  historicalPrice: `铊价格适中`,
  culturalImpact: `铊曾是常见鼠药和杀虫剂，因剧毒后被多国禁用。铊-201用于心脏负荷显像(核医学)。铊硫化物用于红外探测器。铊掺杂晶体用于室温半导体辐射探测器。铊中毒是经典推理小说情节(阿加莎·克里斯蒂)。`
};

P7_HISTORY[82] = {  // Pb 铅
  discoverer: `史前已知`,
  discoveryYear: `史前`,
  namingOrigin: `拉丁语plumbum`,
  biography: `铅是人类最早冶炼的金属之一。罗马人用铅制水管——'plumbing'一词源于铅。铅字印刷延续了数百年。`,
  historicalPrice: `铅价格低廉，电池工业大量使用`,
  culturalImpact: `铅酸蓄电池是汽车标配(每辆车一块)。铅用于辐射屏蔽(X光室和核设施)。铅玻璃防辐射。铅中毒导致罗马帝国衰退假说是经典历史争议。含铅汽油的 phased out 是20世纪重大环保胜利。铅是稳定同位素测年的工具。`
};

P7_HISTORY[83] = {  // Bi 铋
  discoverer: `克劳德·弗朗索瓦·热弗鲁瓦`,
  discoveryYear: `1753`,
  namingOrigin: `德语weise Masse(白色物质)`,
  biography: `法国化学家热弗鲁瓦从铋矿中确认铋为独立元素。铋在古代与铅锡混淆。15世纪已有铋器物。`,
  historicalPrice: `铋价格低廉，替代铅使用`,
  culturalImpact: `铋是无毒'绿色'铅替代品——铋弹丸用于狩猎(防止铅中毒)。铋 subsalicylate (Pepto-Bismol)是常用胃药。铋晶体彩虹色是最美金属晶体之一。铋用于低熔点合金(自动喷淋头)。铋-209曾有最长半衰期记录(1.9×10¹⁹年)。`
};

P7_HISTORY[84] = {  // Po 钋
  discoverer: `皮埃尔与玛丽·居里`,
  discoveryYear: `1898`,
  namingOrigin: `拉丁语polonia(波兰)`,
  biography: `居里夫妇从铀矿残渣中发现钋。玛丽·居里以祖国波兰命名——这是第一个以国家政治争议命名的元素。`,
  historicalPrice: `钋价格极高，产量极少`,
  culturalImpact: `钋-210是剧毒放射性同位素——前特工利特维年科钋中毒案震惊世界。钋-210曾用于静电消除器和卫星热源。钋-铍中子源用于核武器引爆。居里夫妇因发现钋和镭获1903年诺贝尔物理学奖。`
};

P7_HISTORY[85] = {  // At 砹
  discoverer: `戴尔·科森 & 肯尼斯·麦肯齐 & 埃米利奥·塞格雷`,
  discoveryYear: `1940`,
  namingOrigin: `希腊语astatos(不稳定的)`,
  biography: `美国科学家科森、麦肯齐和塞格雷在伯克利用α粒子轰击铋得到砹。因其极不稳定而得名。`,
  historicalPrice: `砹价格极高，仅可微量合成`,
  culturalImpact: `砹-211是α放射治疗的前沿药物(靶向癌症)。砹是地壳中最稀缺的天然元素——任何时刻全球总量不到1克。砹的所有同位素半衰期都短于8小时。砹的化学性质只能通过示踪实验研究。`
};

P7_HISTORY[86] = {  // Rn 氡
  discoverer: `弗里德里希·恩斯特·多恩`,
  discoveryYear: `1900`,
  namingOrigin: `拉丁语nitens(发光的)`,
  biography: `德国物理学家多恩发现镭化合物释放的气体——氡。最初称为'镭射气'。1923年定名氡。`,
  historicalPrice: `氡价格极低(天然放射性气体)`,
  culturalImpact: `氡是天然放射性气体，地下室氡积累是肺癌第二大原因(仅次于吸烟)。氡-222用于示踪地下水运动。氡曾用于放射治疗(氡种子植入)。氡检测是房屋买卖检测项目之一。`
};


// ── 第 7 周期 ────────────────────────────────────────────
P7_HISTORY[87] = {  // Fr 钫
  discoverer: `玛格丽特·佩里`,
  discoveryYear: `1939`,
  namingOrigin: `法国`,
  biography: `法国女化学家佩里从锕-227衰变产物中发现钫。以祖国法国命名。她也是居里研究所的重要成员。`,
  historicalPrice: `钫价格极高，仅可微量合成`,
  culturalImpact: `钫是碱性金属中最重的，也是最不稳定的天然元素之一。钫-223半衰期仅22分钟。钫的化学性质主要通过超微量示踪实验研究。钫曾用于探索碱金属-原子相互作用的量子物理实验。`
};

P7_HISTORY[88] = {  // Ra 镭
  discoverer: `皮埃尔与玛丽·居里`,
  discoveryYear: `1898`,
  namingOrigin: `拉丁语radius(光线)`,
  biography: `居里夫妇从铀矿(沥青铀矿)中提取出镭。因其发出射线而得名。镭的发现革命了对放射性的认识。`,
  historicalPrice: `镭价格极高(已基本不再使用)`,
  culturalImpact: `镭-226曾是癌症放射治疗的先驱(20世纪初)。镭发光涂料用于表盘(镭女孩事件推动了职业安全法)。镭-铍中子源用于早期核研究。居里夫人因发现镭和钋获1911年诺贝尔化学奖。镭的发现开启了原子时代。`
};

P7_HISTORY[89] = {  // Ac 锕
  discoverer: `安德烈-路易·德比耶纳`,
  discoveryYear: `1899`,
  namingOrigin: `希腊语aktis(光线)`,
  biography: `法国化学家德比耶纳(居里的同事)从沥青铀矿残渣中发现锕。因放射性发光而得名。`,
  historicalPrice: `锕-227价格高，产量有限`,
  culturalImpact: `锕-227是靶向α放射治疗药物的前沿同位素——用于前列腺癌和白血病治疗。锕-铍中子源用于中子测井。锕是锕系元素的开端，15种锕系元素的排头兵(类比镧系)。`
};

P7_HISTORY[90] = {  // Th 钍
  discoverer: `永斯·贝采利乌斯`,
  discoveryYear: `1828`,
  namingOrigin: `北欧神话Thor(雷神)`,
  biography: `瑞典化学家贝采利乌斯从挪威产矿石中发现钍。以北欧雷神命名。`,
  historicalPrice: `钍价格低廉，储量丰富`,
  culturalImpact: `钍-232被认为是未来核能的潜在燃料——钍基熔盐堆(TMSR)是第四代核能候选。钍钨电极用于TIG焊(不放射性的替代)。钍气灯罩曾广泛使用(后因放射性淘汰)。钍的储量是铀的3-4倍。`
};

P7_HISTORY[91] = {  // Pa 镤
  discoverer: `卡西米尔·法扬斯 & 戈林`,
  discoveryYear: `1913`,
  namingOrigin: `希腊语protos(最初的)+actinium`,
  biography: `波兰裔美国化学家法扬斯从铀衰变链中发现镤。意为'锕的前驱'(镤衰变为锕)。1927年首次分离。`,
  historicalPrice: `镤价格极高，仅毫克级生产`,
  culturalImpact: `镤-231用于古海洋沉积物测年(半衰期3.3万年)。镤-233是钍燃料循环的关键中间产物。镤的化学性质研究极有限，因极稀缺和强放射性。镤的发现填补了放射性衰变链的关键环节。`
};

P7_HISTORY[92] = {  // U 铀
  discoverer: `马丁·海因里希·克拉普罗特`,
  discoveryYear: `1789`,
  namingOrigin: `希腊神话Ouranos(天王星)`,
  biography: `德国化学家克拉普罗特从沥青铀矿中发现铀。以当时刚发现的天王星命名。1841年法国人佩里戈特首次制得金属铀。`,
  historicalPrice: `铀价格受核能和军事需求影响`,
  culturalImpact: `铀-235是核电站和核武器的基础——1公斤铀-235裂变释放相当于2万吨TNT。铀-238贫铀用于穿甲弹和辐射屏蔽。铀玻璃(凡士林玻璃)在UV下发出绿色荧光。铀的发现间接开启了核时代。`
};

P7_HISTORY[93] = {  // Np 镎
  discoverer: `埃德温·麦克米伦 & 菲利普·艾贝尔森`,
  discoveryYear: `1940`,
  namingOrigin: `希腊神话Poseidon之子Neptune(海王星)`,
  biography: `美国物理学家麦克米伦和艾贝尔森在伯克利用中子轰击铀得到镎。以天王星外层的海王星命名——铀之后如海王星在天王星之外。`,
  historicalPrice: `镎价格极高，仅微量生产`,
  culturalImpact: `镎-237是钚-238生产的前驱体(用于太空核电池)。镎-237用于中子探测器和核武器。镎的发现开启了超铀元素时代——证明铀之后还有元素。麦克米伦因发现超铀元素获1951年诺贝尔化学奖。`
};

P7_HISTORY[94] = {  // Pu 钚
  discoverer: `格伦·西博格 & 阿瑟·沃尔 & 约瑟夫·肯尼迪`,
  discoveryYear: `1940`,
  namingOrigin: `希腊神话Pluto(冥王星)`,
  biography: `美国化学家西博格团队在伯克利用氘核轰击铀得到钚。以冥王星命名——在海王星(镎)之外。`,
  historicalPrice: `钚价格极高，核工业核心材料`,
  culturalImpact: `钚-239是核武器和反应堆的核心材料——1克钚的能量相当于2吨石油。钚-238是深空探测器核电池的动力源(旅行者号、好奇号火星车)。钚的发现使核武器小型化成为可能。西博格因超铀元素获1951年诺贝尔奖。`
};

P7_HISTORY[95] = {  // Am 镅
  discoverer: `格伦·西博格团队`,
  discoveryYear: `1944`,
  namingOrigin: `美国(America)`,
  biography: `西博格团队在伯克利用中子轰击钚得到镅。以美洲命名——类比铕(欧洲)以大陆命名。`,
  historicalPrice: `镅-241价格适中，工业大量使用`,
  culturalImpact: `镅-241是家用烟雾报警器的核心——每台报警器含0.3微克镅-241。镅-241铍中子源用于工业测井和探伤。镅是超铀元素中最常见的工业用途之一。镅-243用于制造更重的超铀元素。`
};

P7_HISTORY[96] = {  // Cm 锔
  discoverer: `格伦·西博格团队`,
  discoveryYear: `1944`,
  namingOrigin: `玛丽与皮埃尔·居里`,
  biography: `西博格团队用氦离子轰击钚得到锔。以居里夫妇命名——致敬放射性研究的先驱。`,
  historicalPrice: `锔价格极高，仅毫克级生产`,
  culturalImpact: `锔-244用于火星车Alpha粒子X射线光谱仪(APXS)分析岩石成分。锔-242和锔-244是紧凑型放射性同位素热源。锔-244用于制造更重的超锔元素。锔是强α辐射体，操作需在手套箱中进行。`
};

P7_HISTORY[97] = {  // Bk 锫
  discoverer: `格伦·西博格团队`,
  discoveryYear: `1949`,
  namingOrigin: `美国伯克利(Berkeley)`,
  biography: `西博格团队用氦离子轰击镅得到锫。以加州伯克利命名——元素发现地。`,
  historicalPrice: `锫价格极高，仅微克级生产`,
  culturalImpact: `锫-249用于合成更重的超锕系元素(如117号元素Ts)。锫-249曾用于制造特殊中子源。锫是半衰期较长的超锕系元素之一(锫-249半衰期320天)。锫的化学性质仅在示踪尺度研究。`
};

P7_HISTORY[98] = {  // Cf 锎
  discoverer: `格伦·西博格团队`,
  discoveryYear: `1950`,
  namingOrigin: `加州(California)`,
  biography: `西博格团队用氦离子轰击锔得到锎。以加州命名。`,
  historicalPrice: `锎-252价格极高(每克数百万美元)`,
  culturalImpact: `锎-252是最强中子源——用于石油测井、骨癌治疗和核武器引爆检测。锎-252中子源用于癌症治疗(中子俘获治疗)。锎是少数有实际工业应用的超锕系元素。锎-252每微克每秒释放230万中子。`
};

P7_HISTORY[99] = {  // Es 锿
  discoverer: `劳伦斯伯克利实验室`,
  discoveryYear: `1952`,
  namingOrigin: `爱因斯坦(Albert Einstein)`,
  biography: `美国科学家在1952年氢弹试验(常春藤麦克)碎片中发现锿。以爱因斯坦命名——E=mc²解释了核能的本质。`,
  historicalPrice: `锿价格极高，仅微克级生产`,
  culturalImpact: `锿-253用于合成更重的超锕系元素。锿曾用于合成109号元素𬭳(Mt)。锿-254曾被考虑作为紧凑型核动力源。锿的发现来自核武器试验——证明了氢弹聚变可以产生超重元素。`
};

P7_HISTORY[100] = {  // Fm 镄
  discoverer: `劳伦斯伯克利实验室`,
  discoveryYear: `1952`,
  namingOrigin: `恩里科·费米`,
  biography: `锿和镄同时在氢弹试验碎片中被发现。以意大利物理学家费米命名——建造了第一个核反应堆。`,
  historicalPrice: `镄价格极高，仅微克级生产`,
  culturalImpact: `镄-255是超重元素合成的关键靶材料。镄-257是最稳定的镄同位素(半衰期100天)。镄是最后一个可以通过中子俘获途径合成的元素。更重的元素必须用离子束轰击法制造。`
};

P7_HISTORY[101] = {  // Md 钔
  discoverer: `阿尔伯特·吉奥索团队`,
  discoveryYear: `1955`,
  namingOrigin: `德米特里·门捷列夫`,
  biography: `吉奥索团队用氦离子轰击锿得到钔。以门捷列夫命名——元素周期表的创立者。实验仅获得17个原子。`,
  historicalPrice: `钔价格极高，仅原子级生产`,
  culturalImpact: `钔-256是超重元素研究的中间产物。钔的化学性质只能在'原子一个一个'的尺度上研究。钔的发现是对门捷列夫最好的致敬——用他命名周期表上的元素。`
};

P7_HISTORY[102] = {  // No 锘
  discoverer: `杜布纳联合核研究所`,
  discoveryYear: `-8`,
  namingOrigin: `阿尔弗雷德·诺贝尔`,
  biography: `苏联杜布纳实验室和瑞典诺贝尔研究所几乎同时报道。1966年确认。以诺贝尔命名。`,
  historicalPrice: `锘价格极高，仅原子级生产`,
  culturalImpact: `锘-254用于超重元素合成实验。锘的发现过程涉及苏联和西方科学家的命名权争议——最终IUPAC采纳了诺贝尔的命名。锘的化学性质极有限地通过气相热色谱法研究。`
};

P7_HISTORY[103] = {  // Lr 铹
  discoverer: `阿尔伯特·吉奥索团队`,
  discoveryYear: `1961`,
  namingOrigin: `欧内斯特·劳伦斯`,
  biography: `吉奥索团队用硼离子轰击锎得到铹。以劳伦斯命名——回旋加速器的发明者，使超重元素合成成为可能。`,
  historicalPrice: `铹价格极高，仅原子级生产`,
  culturalImpact: `铹是最后一个可用化学方法研究的超锕系元素(半衰期最长的铹-266约11小时)。铹的化学行为在原子级别上展示了两性特征——既像镧系又像锕系。铹标志着周期表中最后一个具名的锕系元素。`
};

P7_HISTORY[104] = {  // Rf Rf
  discoverer: `杜布纳/伯克利实验室`,
  discoveryYear: `1964/1969`,
  namingOrigin: `卢瑟福(Ernest Rutherford)`,
  biography: `苏联杜布纳实验室1964年首次报道，伯克利1969年确认。以原子核发现者卢瑟福命名。命名权争议持续数十年。`,
  historicalPrice: `仅原子级合成`,
  culturalImpact: `Rf是第一个超锕系元素(第7周期d区)。其化学行为证明超锕系元素在周期表中的位置遵循常规规律。`
};

P7_HISTORY[105] = {  // Db Db
  discoverer: `杜布纳/伯克利实验室`,
  discoveryYear: `1967/1970`,
  namingOrigin: `杜布纳(Dubna)`,
  biography: `苏联杜布纳实验室1967年首次报道，伯克利1970年确认。以发现地杜布纳命名。`,
  historicalPrice: `仅原子级合成`,
  culturalImpact: `Db的化学行为证实了第5族超重元素的性质预测。`
};

P7_HISTORY[106] = {  // Sg Sg
  discoverer: `吉奥索团队/杜布纳`,
  discoveryYear: `1974`,
  namingOrigin: `西博格(Glenn Seaborg)`,
  biography: `伯克利团队1974年合成。以在世时即命名的西博格命名(极罕见)。西博格是超铀元素研究的核心人物。`,
  historicalPrice: `仅原子级合成`,
  culturalImpact: `Sg是第一个以在世人名命名的元素。西博格亲自出席了命名仪式。`
};

P7_HISTORY[107] = {  // Bh Bh
  discoverer: `GSI达姆施塔特`,
  discoveryYear: `1981`,
  namingOrigin: `达姆施塔特(Darmstadt)`,
  biography: `德国GSI研究中心1981年合成。以达姆施塔特命名。`,
  historicalPrice: `仅原子级合成`,
  culturalImpact: `Bh是GSI超重元素系列的第一项成果，展示了重离子加速器的威力。`
};

P7_HISTORY[108] = {  // Hs Hs
  discoverer: `GSI达姆施塔特`,
  discoveryYear: `1984`,
  namingOrigin: `黑森州(Hassia)`,
  biography: `GSI 1984年合成。以黑森州的拉丁名命名(GSI所在地)。`,
  historicalPrice: `仅原子级合成`,
  culturalImpact: `Hs的化学性质研究表明其行为符合第8族预期。Hs-270是'幻数'核素，具有异常稳定性。`
};

P7_HISTORY[109] = {  // Mt Mt
  discoverer: `GSI达姆施塔特`,
  discoveryYear: `1982`,
  namingOrigin: `莉泽·迈特纳`,
  biography: `GSI 1982年合成，仅获得一个原子。以奥地利裔瑞典物理学家迈特纳命名——核裂变的共同发现者。`,
  historicalPrice: `仅原子级合成`,
  culturalImpact: `Mt的命名纠正了对迈特纳的历史不公——她本应与哈恩分享1944年诺贝尔化学奖。`
};

P7_HISTORY[110] = {  // Ds Ds
  discoverer: `GSI达姆施塔特`,
  discoveryYear: `1994`,
  namingOrigin: `达姆施塔特(Darmstadt)`,
  biography: `GSI 1994年合成。以发现地达姆施塔特命名。`,
  historicalPrice: `仅原子级合成`,
  culturalImpact: `Ds-281是目前已知最稳定的同位素(半衰期约11秒)。`
};

P7_HISTORY[111] = {  // Rg Rg
  discoverer: `GSI达姆施塔特`,
  discoveryYear: `1994`,
  namingOrigin: `威廉·伦琴`,
  biography: `GSI 1994年合成。以X射线发现者伦琴命名——第一种获诺贝尔物理学奖的发现。`,
  historicalPrice: `仅原子级合成`,
  culturalImpact: `Rg的化学性质研究表明其行为类似金(第11族)，验证了相对论效应预测。`
};

P7_HISTORY[112] = {  // Cn Cn
  discoverer: `GSI达姆施塔特`,
  discoveryYear: `1996`,
  namingOrigin: `哥白尼(Nicolaus Copernicus)`,
  biography: `GSI 1996年合成。以哥白尼命名——日心说改变了人类宇宙观，类比超重元素改变了元素周期表。`,
  historicalPrice: `仅原子级合成`,
  culturalImpact: `Cn的化学行为表明它是过渡金属中挥发性最高的——类似汞，验证了相对论效应。`
};

P7_HISTORY[113] = {  // Nh Nh
  discoverer: `日本理化学研究所`,
  discoveryYear: `2004`,
  namingOrigin: `日本(Nihon)`,
  biography: `日本理化学研究所森田浩介团队2004年合成。以日本命名——这是亚洲首次发现新元素。`,
  historicalPrice: `仅原子级合成`,
  culturalImpact: `Nh的合成是亚洲科学史的里程碑——打破了欧美对元素发现的垄断。`
};

P7_HISTORY[114] = {  // Fl Fl
  discoverer: `杜布纳联合核研究所`,
  discoveryYear: `1998-2004`,
  namingOrigin: `弗廖罗夫(Georgy Flyorov)`,
  biography: `俄罗斯杜布纳实验室合成。以核物理实验室创始人弗廖罗夫命名。`,
  historicalPrice: `仅原子级合成`,
  culturalImpact: `Fl是'稳定性岛'理论的核心候选元素——预测N=184附近存在超重元素稳定区。Fl-289半衰期约2.7秒。`
};

P7_HISTORY[115] = {  // Mc Mc
  discoverer: `杜布纳联合核研究所`,
  discoveryYear: `2003`,
  namingOrigin: `莫斯科(Moscovium)`,
  biography: `俄罗斯杜布纳与美国LLNL合作合成。以莫斯科州命名。`,
  historicalPrice: `仅原子级合成`,
  culturalImpact: `Mc衰变为Nh，间接确认了113号元素。Mc的合成路径是超重元素标准方法(钙48轰击镅243)。`
};

P7_HISTORY[116] = {  // Lv Lv
  discoverer: `杜布纳联合核研究所`,
  discoveryYear: `2000`,
  namingOrigin: `利弗莫尔(Livermore)`,
  biography: `杜布纳-LLNL合作合成。以美国利弗莫尔实验室命名。`,
  historicalPrice: `仅原子级合成`,
  culturalImpact: `Lv-293半衰期约53毫秒，衰变为Fl-289。Lv是第7周期第16族元素。`
};

P7_HISTORY[117] = {  // Ts Ts
  discoverer: `杜布纳联合核研究所 & 橡树岭`,
  discoveryYear: `2010`,
  namingOrigin: `田纳西州(Tennessee)`,
  biography: `杜布纳-橡树岭合作合成。以田纳西州命名(橡树岭实验室所在地)。`,
  historicalPrice: `仅原子级合成`,
  culturalImpact: `Ts是第二重的元素。Ts的合成需要极稀缺的锫-249靶材料。Ts的完成使第7周期完整。`
};

P7_HISTORY[118] = {  // Og Og
  discoverer: `杜布纳联合核研究所 & 橡树岭`,
  discoveryYear: `2002-2006`,
  namingOrigin: `奥加涅相(Yuri Oganessian)`,
  biography: `杜布纳-LLNL合作2002年首次合成，2006年确认。以在世俄罗斯核物理学家奥加涅相命名——仅有第二位在世获命名者。`,
  historicalPrice: `仅原子级合成`,
  culturalImpact: `Og是最重元素。Og-294半衰期约0.7毫秒。Og的命名标志着周期表第7周期完成。以在世人命名是极罕见的荣誉(仅西博格和奥加涅相两人)。`
};


// ════════════════════════════════════════════════════
//  自动合并到 ELEMENTS
// ════════════════════════════════════════════════════

function mergeP7History(ELEMENTS) {
  for (var i = 0; i < ELEMENTS.length; i++) {
    var el = ELEMENTS[i];
    var z  = el.z;
    if (P7_HISTORY[z]) {
      el.history = P7_HISTORY[z];
    }
  }
}

if (typeof ELEMENTS !== 'undefined') {
  mergeP7History(ELEMENTS);
}
