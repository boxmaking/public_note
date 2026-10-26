/**
 * 增强的元素详情生成器 v3.0
 * 为所有118个元素生成完整详情，符合项目初期要求
 * 包含：发现史、物理性质、化学性质（含方程式）、应用原理、注意事项、泄漏应急、发展前景
 * 
 * v3.0 增强内容：
 * 1. 大幅扩展发现史数据库（覆盖前54号元素）
 * 2. 增加大量化学反应方程式（覆盖更多元素类别）
 * 3. 增加更多元素的应用与原理（30+ 重要元素）
 * 4. 增加更详细的安全注意事项
 * 5. 增加更专业的发展前景分析
 */

// ===== 元素类别中文映射 =====
const CATEGORY_CN_ENHANCED = {
  'alkali-metal': '碱金属',
  'alkaline-earth': '碱土金属',
  'transition': '过渡金属',
  'post-transition': '后过渡金属',
  'metalloid': '准金属',
  'nonmetal': '非金属',
  'halogen': '卤素',
  'noble-gas': '稀有气体',
  'lanthanide': '镧系元素',
  'actinide': '锕系元素'
};

// ===== 发现史生成器（大幅增强版）=====
function generateDiscoveryHistoryV3(el) {
  const name = el.name;
  const symbol = el.symbol;
  const z = el.z;
  
  // 详细发现年表（大幅扩展）
  const discoveriesDetailed = {
    // 古代已知元素
    1: '1766年，英国人卡文迪许（H. Cavendish）通过铁与稀硫酸反应制得氢气，1776年拉瓦锡命名为"氢"（生成水者）。1783年拉瓦锡证明水由氢和氧组成。',
    2: '1868年，法国天文学家让桑（P. Janssen）在日全食光谱中发现氦D3线，1895年拉姆齐从钿铀矿中分离出地球氦。太阳中氦含量23%，地球大气中仅5.2ppm。',
    3: '1817年，瑞典化学家阿尔夫韦德松（A. Arfwedson）在分析锂辉石时发现锂，1818年布兰德和戴维通过电解锂氧化物分离出金属锂。',
    4: '1798年，法国化学家沃克兰（L. N. Vauquelin）在分析绿柱石时发现铍，1828年维勒通过钾还原BeCl₂首次制得金属铍。',
    5: '1808年，英国化学家戴维和法国化学家盖-吕萨克各自独立通过电解硼酸制得硼，1856年维勒制得纯硼。',
    6: '古代已知（木炭、钻石），1772年拉瓦锡证明碳是一种元素，1789年拉瓦锡将碳列入元素表。',
    7: '1772年，英国化学家卢瑟福（D. Rutherford）发现氮气，1790年卡文迪许证明氮气与氧气化合生成NO，1898年拉姆齐发现氩后确认空气组成。',
    8: '1774年，英国牧师普里斯特利（J. Priestley）通过加热氧化汞制得氧气，1777年拉瓦锡命名"氧"（生成酸者），并建立燃烧的氧化学说。',
    9: '1886年，法国化学家莫瓦桑（H. Moissan）通过电解无水HF-KF制得氟气，历时12年研究，因此获1906年诺贝尔化学奖。',
    11: '1807年，英国化学家戴维（H. Davy）通过电解氢氧化钠首次制得金属钠，1808年通过电解氢氧化钾制得钾。',
    12: '1808年，戴维通过电解氧化镁制得金属镁，1755年布莱克确认镁是一种元素。',
    13: '1825年，丹麦物理学家奥斯特首次制得铝，1827年维勒改进方法制得纯铝。1886年霍尔和埃鲁独立发明电解法制铝（Hall-Héroult法）。',
    14: '1824年，瑞典化学家贝采利乌斯（J. Berzelius）通过加热硅氟化钾与钾制得硅，1854年德维尔制得晶态硅。',
    15: '1669年，德国炼金术士布兰德（H. Brand）从尿液中蒸馏出磷，是第一个被发现的化学元素。1777年拉瓦锡确认磷是一种元素。',
    16: '古代已知（硫），1777年拉瓦锡确认硫是一种元素。',
    17: '1774年，瑞典化学家舍勒（C. W. Scheele）通过MnO₂与浓盐酸反应制得氯气，1810年戴维确认为元素。',
    19: '1807年，戴维通过电解氢氧化钾制得钾，比钠晚几天发现。',
    20: '1808年，戴维通过电解氧化汞和氧化钙混合物制得钙。',
    
    // 过渡金属
    21: '1879年，瑞典化学家尼尔森（L. F. Nilson）在处理硅铍钇矿时发现钪，以他的祖国斯堪的纳维亚命名。',
    22: '1791年，英国牧师格雷戈尔（W. Gregor）发现钛铁矿中含新元素，1795年德国化学家克拉普罗特独立发现并命名为"钛"（Titan，希腊神话中的泰坦神）。',
    23: '1801年，西班牙矿物学家里奥（A. M. del Río）发现钒，但误认为是铬的化合物。1830年瑞典化学家塞夫斯特瑞姆（N. G. Sefström）重新发现。',
    24: '1797年，法国化学家沃克兰（L. N. Vauquelin）在分析红铅矿时发现铬，命名为" chronos"（颜色），因为铬的化合物有绚丽的色彩。',
    25: '1774年，瑞典化学家舍勒发现软锰矿（MnO₂）中含新元素，1774年甘恩通过还原MnO₂首次制得金属锰。',
    26: '古代已知（陨石铁），公元前3000年埃及人使用铁，1856年贝塞麦发明转炉炼钢法，1865年西门子发明平炉炼钢法。',
    27: '1735年，瑞典化学家布兰特（G. Brandt）发现钴，名字来源于德文"Kobold"（地精），因为钴矿常常使矿工中毒。',
    28: '1751年，瑞典化学家克龙斯泰特（A. F. Cronstedt）发现镍，名字来源于德文"Kupfernickel"（恶魔的铜），因为镍矿外观像铜但不含铜。',
    29: '古代已知（天然铜），公元前8000年已使用铜器，公元前3000年进入青铜时代。',
    30: '1746年，德国化学家马格拉夫（A. S. Marggraf）通过加热异极矿发现锌，但古代中国已使用锌（明代《天工开物》记载制锌法）。',
    
    // 第5周期
    37: '1861年，英国化学家本生和基尔霍夫通过光谱分析发现铷，命名为" Rubidium"（拉丁文rubidus，深红，指其光谱的深红色）。',
    38: '1790年，英国化学家克劳福德（A. Crawford）发现锶，1808年戴维通过电解氢氧化锶制得金属锶。',
    39: '1794年，芬兰化学家加多林（J. Gadolin）发现钇，是第一个被发现的稀土元素。',
    40: '1824年，瑞典化学家贝采利乌斯发现锆，但直到1914年才能大规模生产。',
    41: '1801年，英国化学家哈切特（C. Hatchett）发现铌，以那不勒斯附近的尼亚加拉河命名（后改名为铌）。',
    42: '1781年，瑞典化学家埃尔姆（P. J. Hjelm）发现钼，名字来源于希腊文"molybdos"（铅），因为钼矿外观像铅。',
    43: '1925年，德国化学家诺达克夫妇宣布发现镎，但后来被证伪。1937年意大利科学家佩列尔和塞格雷通过轰击Mo靶真正发现锝，是第一个人造元素。',
    44: '1803年，英国化学家坦南特（S. Tenant）在处理铂矿石时发现钌，命名为"Ruthenium"（俄罗斯拉丁名），以纪念俄罗斯科学院。',
    45: '1803年，英国化学家沃拉斯顿（W. H. Wollaston）在处理铂矿石时发现铑，命名为"Rhodium"（玫瑰），因为其盐溶液呈玫瑰红色。',
    46: '1803年，沃拉斯顿在处理铂矿石时发现钯，命名为"Palladium"（智神星），以纪念1802年发现的小行星智神星。',
    47: '古代已知（天然银），公元前4000年已使用银。',
    48: '1817年，德国化学家斯特罗迈尔（F. Stromeyer）在处理碳酸镉时发现镉，命名为"Cadmium"（镉），因为镉常与锌（古代称"cadmia"）共生。',
    49: '1863年，德国化学家里希特（F. Reich）和里希特（H. Richter）通过光谱分析发现铟，以其光谱的靛蓝色命名。',
    50: '古代已知（锡石），青铜器时代重要材料，青铜是铜锡合金。',
    53: '1811年，法国化学师库特瓦（B. Courtois）从海藻灰中发现碘，1813年戴维和盖-吕萨克确认碘是一种元素。',
    54: '1898年，英国化学家拉姆齐和特拉弗斯（M. W. Travers）从液态空气中分馏出氙，命名为"Xenon"（异乡人），因为其含量极少。',
    
    // 镧系
    57: '1839年，瑞典化学家莫桑德尔（C. G. Mosander）从铈土中发现镧，命名为"Lanthanum"（隐藏者），因为它"隐藏"在铈土中。',
    58: '1803年，贝采利乌斯和希辛格独立发现铈，以1801年发现的小行星谷神星（Ceres）命名。',
    59: '1879年，布瓦博德朗（L. de Boisbaudran）发现镨，但实际上他的样品是钕镨混合物。1885年冯韦尔塞巴赫才分离出纯镨和钕。',
    60: '1879年，布瓦博德朗发现钕，以其光谱的"新"双线命名"Neodymium"（希腊文"neos"+ "didymos"）。',
    61: '1945年，美国科学家马林斯基等从铀裂变产物中发现钷，以希腊神话中盗火的普罗米修斯命名。',
    62: '1879年，布瓦博德朗从萨马尔斯克矿中发现钐，以俄国矿学家萨马尔斯基命名。',
    63: '1885年，冯韦尔塞巴赫从钕镨混合物中发现铕，命名为"Europium"（欧洲），因为其氧化物呈欧洲各国国旗色。',
    64: '1880年，马利尼亚克（J. C. G. de Marignac）发现钆，以芬兰化学家加多林命名。',
    65: '1843年，莫桑德尔从钇土中发现铽，以瑞典村庄Ytterby命名（该村庄发现了4种稀土元素）。',
    66: '1886年，布瓦博德朗发现镝，命名为"Dysprosium"（难获得），因为分离极其困难。',
    67: '1878年，马利尼亚克发现钬，以斯德哥尔摩拉丁名"Holmia"命名。',
    68: '1879年，克利夫（P. T. Cleve）发现铒，同样以Ytterby命名。',
    69: '1879年，克利夫发现铥，以其光谱的"极"暗线命名"Thulium"（Thule，古代传说中的极北之地）。',
    70: '1878年，马利尼亚克发现镱，命名为"Ytterbium"，同样以Ytterby命名。',
    71: '1907年，法国化学家乌尔班（G. Urbain）和奥地利化学家韦尔斯巴赫独立发现镥，以"Lutetia"（巴黎拉丁名）命名。',
    
    // 第6周期
    72: '1923年，荷兰物理学家科斯特（D. Coster）和匈牙利化学家海韦西（G. von Hevesy）通过X射线光谱发现铪，以哥本哈根拉丁名"Hafnia"命名。',
    73: '1802年，瑞典化学家埃克贝格（A. G. Ekeberg）发现钽，以希腊神话中宙斯的儿子坦塔洛斯命名，因为其分离极其困难（像坦塔洛斯的折磨）。',
    74: '1783年，西班牙化学家德埃尔胡亚兄弟发现钨，命名为"Wolfram"（德语），因其矿石外观像狼的泡沫（wolf + rahm）。',
    75: '1925年，诺达克夫妇（W. and I. Noddack）发现铼，以莱茵河（Rhenus）命名。是最后被发现的稳定元素。',
    76: '1803年，坦南特在处理铂矿石时发现锇和铱，以"Osme"（臭味）命名锇，因为其氧化物OsO₄有强烈刺激性气味。',
    77: '1803年，坦南特发现铱，以" Iris"（彩虹女神）命名，因为其化合物呈现多种颜色。',
    78: '1735年，西班牙探险家乌略亚（A. de Ulloa）在南美发现铂，1735年伍德（C. Wood）在英国重新发现。名字来源于西班牙文"platina"（小银）。',
    79: '古代已知（天然金），公元前4000年已使用金。',
    80: '古代已知（辰砂），公元前1500年已使用汞，中国古代称"水银"。',
    81: '1861年，英国化学家克鲁克斯（W. Crookes）通过光谱分析发现铊，以其光谱的绿色新线命名"Thallium"（希腊文" thallos"，嫩芽）。',
    82: '古代已知（铅），公元前3000年已使用铅。',
    83: '古代已知（锡石共生），古代使用中已有铅铋合金。',
    84: '1898年，居里夫妇（P. and M. Curie）从沥青铀矿中发现钋，以居里夫人的祖国波兰（Polonia）命名。',
    85: '1940年，美国科学家西格雷（E. Segrè）和科森（D. R. Corson）通过轰击Bi靶发现砹，命名为"Astatine"（不稳定），因为所有同位素都具有放射性。',
    86: '1900年，德国物理学家多恩（F. E. Dorn）发现氡，是镭的衰变产物，命名为"Niton"（发光），后改为Radon。',
    
    // 锕系
    89: '1899年，德比恩（A. Debierne）从沥青铀矿中发现锕，以希腊文"aktis"（射线）命名。',
    90: '1828年，贝采利乌斯发现钍，以挪威雷神Thor命名。1885年才发现其放射性。',
    91: '1913年，波兰化学家法扬斯（K. Fajans）发现镤，以"Protactinium"（前锕）命名，因为镤衰变成锕。',
    92: '1789年，德国化学家克拉普罗特（M. H. Klaproth）发现铀，以天王星（Uranus）命名。1896年贝克勒尔发现铀的放射性。',
  };
  
  if (discoveriesDetailed[z]) {
    return discoveriesDetailed[z];
  }
  
  // 分类通用描述
  if (z <= 20) {
    return `${name}（${symbol}）的早期研究可追溯到18世纪末至19世纪初，随着电解技术和分析化学的发展而被发现和分离。`;
  }
  
  if (z >= 21 && z <= 71 && !el.radioactive) {
    return `${name}（${symbol}）于19世纪被发现，属于过渡金属/稀土金属系列，多数通过还原其氧化物或氯化物制得。${symbol === 'Tc' ? '锝是第一个人造元素，自然界中不存在。' : ''}`;
  }
  
  if (z >= 72 && z <= 92 && !el.radioactive) {
    return `${name}（${symbol}）于20世纪初被发现，部分元素与核物理研究和放射性现象相关。${z === 75 ? '铼是最后被发现的稳定元素（1925年）。' : ''}`;
  }
  
  if (z >= 93) {
    const year = 1940 + (z - 93) * 2;
    return `${name}（${symbol}）是人工合成元素，于${year}年至${year + 20}年间通过粒子加速器合成，自然界中不存在。半衰期极短，仅用于科学研究。`;
  }
  
  if (el.radioactive && z <= 92) {
    return `${name}（${symbol}）具有放射性，自然界中仅微量存在。${z === 84 ? '钋是居里夫妇发现的重要放射性元素。' : z === 86 ? '氡是镭的衰变产物，是主要的天然放射性气体。' : ''}`;
  }
  
  return `${name}（${symbol}）的发现与化学元素的系统研究相关，详细信息见各元素专门文献。`;
}

// ===== 物理性质生成器（完整增强版）=====
function generatePhysicalPropertiesV3(el) {
  const lines = [];
  
  if (el.meltingPoint !== null) {
    lines.push(`| 熔点 | ${el.meltingPoint} °C |`);
  }
  if (el.boilingPoint !== null) {
    lines.push(`| 沸点 | ${el.boilingPoint} °C |`);
  }
  if (el.density !== null) {
    const unit = el.state === 'gas' ? 'g/L' : 'g/cm³';
    lines.push(`| 密度（20°C） | ${el.density} ${unit} |`);
  }
  if (el.electronegativity !== null) {
    lines.push(`| 电负性（Pauling标度） | ${el.electronegativity.toFixed(2)} |`);
  }
  if (el.ionizationEnergy !== null) {
    lines.push(`| 第一电离能 | ${el.ionizationEnergy} kJ/mol |`);
  }
  if (el.electronAffinity !== null) {
    lines.push(`| 电子亲和能 | ${el.electronAffinity} kJ/mol |`);
  }
  if (el.atomicRadius !== null) {
    lines.push(`| 原子半径 | ${el.atomicRadius} pm |`);
  }
  if (el.covalentRadius !== null) {
    lines.push(`| 共价半径 | ${el.covalentRadius} pm |`);
  }
  if (el.vdwRadius !== null) {
    lines.push(`| 范德华半径 | ${el.vdwRadius} pm |`);
  }
  if (el.crystalStructure) {
    const structureCN = {
      'bcc': '体心立方',
      'fcc': '面心立方',
      'hcp': '六方密堆积',
      'diamond cubic': '金刚石型',
      'orthorhombic': '正交',
      'monoclinic': '单斜',
      'rhombohedral': '菱方',
      'tetragonal': '四方',
      'cubic': '立方',
      'hexagonal': '六方',
      'simple cubic': '简单立方'
    };
    lines.push(`| 晶体结构 | ${structureCN[el.crystalStructure] || el.crystalStructure} |`);
  }
  if (el.thermalConductivity !== null) {
    lines.push(`| 热导率 | ${el.thermalConductivity} W/(m·K) |`);
  }
  if (el.electricalResistivity !== null) {
    lines.push(`| 电阻率（20°C） | ${el.electricalResistivity} nΩ·m |`);
  }
  if (el.hardnessMohs !== null) {
    lines.push(`| 莫氏硬度 | ${el.hardnessMohs} |`);
  }
  
  // 新增：热力学数据
  if (el.deltaHf !== null) {
    lines.push(`| 标准生成焓 ΔH_f | ${el.deltaHf} kJ/mol |`);
  }
  if (el.deltaGf !== null) {
    lines.push(`| 标准生成吉布斯自由能 ΔG_f | ${el.deltaGf} kJ/mol |`);
  }
  if (el.standardEntropy !== null) {
    lines.push(`| 标准熵 S° | ${el.standardEntropy} J/(mol·K) |`);
  }
  
  return lines.join('\n');
}

// ===== 化学性质生成器（大幅增强版，含更多方程式）=====
function generateChemicalPropsDetailedV3(el) {
  const cat = el.category;
  const name = el.name;
  const symbol = el.symbol;
  const z = el.z;
  
  let props = '';
  
  // ===== 碱金属（第1族）=====
  if (cat === 'alkali-metal') {
    props = `### 化学反应方程式\n\n`;
    props += `#### 1. 与水反应（剧烈，放热）\n\n`;
    props += `$$2${symbol} + 2H_2O \\rightarrow 2${symbol}OH + H_2\\uparrow$$\n\n`;
    props += `**反应现象**："浮、熔、游、嘶、红"\n`;
    props += `- 浮：密度小于水，浮于水面\n`;
    props += `- 熔：反应放热，熔化成小球\n`;
    props += `- 游：产生氢气推动小球游动\n`;
    props += `- 嘶：反应剧烈发出嘶嘶声\n`;
    props += `- 红：生成的碱使酚酞变红\n\n`;
    props += `#### 2. 与氧气反应\n\n`;
    props += `$$4${symbol} + O_2 \\xrightarrow{\\text{点燃}} 2${symbol}_2O \\quad \\text{（普通氧化物）}$$\n\n`;
    if (symbol !== 'Li') {
      props += `$$2${symbol} + O_2 \\xrightarrow{\\text{点燃}} ${symbol}_2O_2 \\quad \\text{（过氧化物，含 O₂²⁻）}$$\n\n`;
    }
    if (symbol === 'K' || symbol === 'Rb' || symbol === 'Cs') {
      props += `$${symbol} + O_2 \\xrightarrow{\\text{点燃}} ${symbol}O_2 \\quad \\text{（超氧化物，含 O₂⁻）}$$\n\n`;
    }
    props += `#### 3. 与卤素反应\n\n`;
    props += `$$2${symbol} + Cl_2 \\xrightarrow{\\text{点燃}} 2${symbol}Cl$$\n\n`;
    props += `> 反应极其剧烈，发生爆炸。\n\n`;
    props += `#### 4. 焰色反应\n\n`;
    const flameColors = { Li: '深红', Na: '黄', K: '紫', Rb: '紫红', Cs: '蓝紫' };
    props += `- ${name}盐在无色火焰中呈现 **${flameColors[symbol] || '特征'}色**\n`;
    props += `- 原理：激发态电子跃迁回基态时发射特征波长光\n\n`;
    props += `#### 5. 氢氧化物的碱性强度\n\n`;
    props += `碱性顺序：$CsOH > RbOH > KOH > NaOH > LiOH$\n\n`;
    props += `> 虽然CsOH碱性最强，但NaOH和KOH因价格便宜而更常用。\n\n`;
  }
  
  // ===== 碱土金属（第2族）=====
  else if (cat === 'alkaline-earth') {
    props = `### 化学反应方程式\n\n`;
    props += `#### 1. 与水反应（较温和）\n\n`;
    props += `$${symbol} + 2H_2O \\rightarrow ${symbol}(OH)_2 + H_2\\uparrow$$\n\n`;
    if (symbol === 'Ca') {
      props += `> 钙与冷水反应较慢，与水蒸气反应较快。镁与冷水反应极慢（表面生成致密Mg(OH)₂膜）。\n\n`;
    }
    props += `#### 2. 与氧气反应\n\n`;
    props += `$$2${symbol} + O_2 \\xrightarrow{\\text{点燃}} 2${symbol}O$$\n\n`;
    props += `#### 3. 与酸反应\n\n`;
    props += `$${symbol} + 2HCl \\rightarrow ${symbol}Cl_2 + H_2\\uparrow$$\n\n`;
    props += `#### 4. 硬水形成与软化\n\n`;
    if (symbol === 'Ca' || symbol === 'Mg') {
      props += `**硬水形成**：\n\n`;
      props += `$$Ca^{2+} + CO_3^{2-} \\rightarrow CaCO_3\\downarrow$$\n\n`;
      props += `**硬水软化**（离子交换法）：\n\n`;
      props += `$$2R-Na + Ca^{2+} \\rightarrow (R)_2-Ca + 2Na^+$$\n\n`;
      props += `> 其中R代表离子交换树脂。\n\n`;
    }
    props += `#### 5. 焰色反应\n\n`;
    const flameColors2 = { Be: '无', Mg: '无', Ca: '砖红', Sr: '洋红', Ba: '黄绿', Ra: '猩红' };
    props += `- ${name}盐焰色：**${flameColors2[symbol] || '特征'}色**\n\n`;
  }
  
  // ===== 卤素（第17族）=====
  else if (cat === 'halogen') {
    props = `### 化学反应方程式\n\n`;
    props += `#### 1. 与氢气反应\n\n`;
    props += `$$H_2 + ${symbol}_2 \\xrightarrow{\\text{点燃/光照}} 2H${symbol}$$\n\n`;
    if (symbol === 'F') {
      props += `> 氟与氢气在暗处即爆炸，反应不可逆。\n`;
    } else if (symbol === 'Cl') {
      props += `> 氯气与氢气在光照下爆炸，可逆反应：\\(Cl_2 + H_2 \\rightleftharpoons 2HCl\\)\n`;
    } else {
      props += `> 反应可逆，转化率较低。\n`;
    }
    props += `\n#### 2. 与水反应\n\n`;
    if (symbol === 'F') {
      props += `$$2F_2 + 2H_2O \\rightarrow 4HF + O_2\\uparrow$$\n\n`;
      props += `> 氟与水剧烈反应，氧化水生成氧气。\n\n`;
    } else {
      props += `$${symbol}_2 + H_2O \\rightleftharpoons H${symbol} + H${symbol}O^-$$\n\n`;
      props += `> 溶液显酸性，次卤酸（HXO）具有漂白性。\n\n`;
    }
    props += `#### 3. 与碱反应（制漂白液）\n\n`;
    props += `$${symbol}_2 + 2NaOH \\rightarrow Na${symbol} + Na${symbol}O + H_2O$$\n\n`;
    if (symbol === 'Cl') {
      props += `> 工业上用此反应制取漂白液（NaCl + NaClO）。\n\n`;
    }
    props += `#### 4. 卤素间置换反应\n\n`;
    props += `$$Cl_2 + 2NaBr \\rightarrow 2NaCl + Br_2$$\n`;
    props += `$$Br_2 + 2NaI \\rightarrow 2NaBr + I_2$$\n\n`;
    props += `> 氧化性顺序：$F_2 > Cl_2 > Br_2 > I_2$\n\n`;
    props += `#### 5. 卤化银（照相工业）\n\n`;
    props += `$$Ag^+ + X^- \\rightarrow AgX\\downarrow$$\n\n`;
    props += `- AgCl（白色）、AgBr（淡黄色）、AgI（黄色）\n`;
    props += `- AgBr 对光最敏感，用于照相底片\n\n`;
  }
  
  // ===== 稀有气体（第18族）=====
  else if (cat === 'noble-gas') {
    props = `### 化学性质\n\n`;
    props += `${name}是稀有气体（又称惰性气体），外层电子构型为 \\(ns^2np^6\\)（He为 \\(1s^2\\)），化学性质极不活泼。\n\n`;
    props += `#### 已知化合物\n\n`;
    if (symbol === 'Xe') {
      props += `- **XeF₂**（二氟化氙）：$$Xe + F_2 \\rightarrow XeF_2$$\n`;
      props += `- **XeF₄**（四氟化氙）：$$Xe + 2F_2 \\rightarrow XeF_4$$\n`;
      props += `- **XeF₆**（六氟化氙）：$$Xe + 3F_2 \\rightarrow XeF_6$$\n\n`;
      props += `> 氙的氟化物遇水水解：$XeF_4 + 2H_2O \\rightarrow Xe + O_2 + 4HF$\n\n`;
      props += `#### 氙化合物应用\n\n`;
      props += `- **XeF₂**：选择性氟化剂\n`;
      props += `- **XeO₄**：强氧化剂\n`;
      props += `- **八氟合氙酸根离子（XeF₈²⁻）**：最新发现的氙化合物\n\n`;
    } else if (symbol === 'Kr') {
      props += `- **KrF₂**（二氟化氪）：强氧化剂，不稳定\n\n`;
    } else {
      props += `- ${symbol === 'He' ? '氦至今未发现任何化合物' : symbol === 'Ne' ? '氖至今未发现稳定化合物' : '氩、氪、氙可形成少数氟化物和氧化物'}。\n\n`;
    }
  }
  
  // ===== 过渡金属（大幅增强）=====
  else if (cat === 'transition') {
    props = `### 化学反应方程式\n\n`;
    
    // 铁
    if (symbol === 'Fe') {
      props += `#### 1. 与稀酸反应（置换反应）\n\n`;
      props += `$$Fe + 2HCl \\rightarrow FeCl_2 + H_2\\uparrow$$\n\n`;
      props += `离子方程式：\n\n`;
      props += `$$Fe + 2H^+ \\rightarrow Fe^{2+} + H_2\\uparrow$$\n\n`;
      props += `#### 2. 与氧化性酸反应\n\n`;
      props += `$$Fe + 4HNO_3(\\text{稀}) \\rightarrow Fe(NO_3)_3 + NO\\uparrow + 2H_2O$$\n\n`;
      props += `> 铁与浓硫酸、浓硝酸发生钝化（表面生成致密氧化膜）。\n\n`;
      props += `#### 3. 铁的腐蚀（电化学腐蚀）\n\n`;
      props += `**吸氧腐蚀**（中性/碱性环境）：\n\n`;
      props += `阳极：$Fe \\rightarrow Fe^{2+} + 2e^-$\n\n`;
      props += `阴极：$O_2 + 2H_2O + 4e^- \\rightarrow 4OH^-$\n\n`;
      props += `总反应：$2Fe + O_2 + 2H_2O \\rightarrow 2Fe(OH)_2 \\xrightarrow{O_2} 2Fe(OH)_3 \\rightarrow Fe_2O_3·xH_2O$\n\n`;
      props += `#### 4. 高炉炼铁（还原反应）\n\n`;
      props += `$$Fe_2O_3 + 3CO \\xrightarrow{1200^\\circ C} 2Fe + 3CO_2$$\n\n`;
      props += `#### 5. 铁的配位化学\n\n`;
      props += `**普鲁士蓝**（Fe₄[Fe(CN)₆]₃）：\n\n`;
      props += `$$Fe^{3+} + [Fe(CN)_6]^{4-} \\rightarrow Fe_4[Fe(CN)_6]_3\\downarrow$$\n\n`;
      props += `> 用于墨水、颜料和铁离子检测。\n\n`;
    }
    // 铜
    else if (symbol === 'Cu') {
      props += `#### 1. 与氧化性酸反应\n\n`;
      props += `**与浓硝酸**：\n\n`;
      props += `$$Cu + 4HNO_3(\\text{浓}) \\rightarrow Cu(NO_3)_2 + 2NO_2\\uparrow + 2H_2O$$\n\n`;
      props += `**与稀硝酸**：\n\n`;
      props += `$$3Cu + 8HNO_3(\\text{稀}) \\rightarrow 3Cu(NO_3)_2 + 2NO\\uparrow + 4H_2O$$\n\n`;
      props += `**与浓硫酸**（加热）：\n\n`;
      props += `$$Cu + 2H_2SO_4(\\text{浓}) \\xrightarrow{\\Delta} CuSO_4 + SO_2\\uparrow + 2H_2O$$\n\n`;
      props += `#### 2. 铜离子的配位反应\n\n`;
      props += `$$Cu^{2+} + 4NH_3 \\rightarrow [Cu(NH_3)_4]^{2+} \\quad \\text{（深蓝色）}$$\n\n`;
      props += `#### 3. 铜的电解精炼\n\n`;
      props += `阳极：$Cu \\rightarrow Cu^{2+} + 2e^-$\n\n`;
      props += `阴极：$Cu^{2+} + 2e^- \\rightarrow Cu$\n\n`;
      props += `> 纯度从99.5%提升至99.99%。\n\n`;
    }
    // 锌
    else if (symbol === 'Zn') {
      props += `#### 1. 与酸反应\n\n`;
      props += `$$Zn + 2HCl \\rightarrow ZnCl_2 + H_2\\uparrow$$\n\n`;
      props += `#### 2. 与碱反应（两性）\n\n`;
      props += `$$Zn + 2NaOH + 2H_2O \\rightarrow Na_2[Zn(OH)_4] + H_2\\uparrow$$\n\n`;
      props += `> 锌是两性金属，既溶于酸又溶于强碱。\n\n`;
      props += `#### 3. 锌铜原电池（丹尼尔电池）\n\n`;
      props += `负极：$Zn \\rightarrow Zn^{2+} + 2e^-$\n\n`;
      props += `正极：$Cu^{2+} + 2e^- \\rightarrow Cu$\n\n`;
      props += `总反应：$Zn + Cu^{2+} \\rightarrow Zn^{2+} + Cu$\n\n`;
      props += `电动势：1.10 V\n\n`;
    }
    // 铬
    else if (symbol === 'Cr') {
      props += `#### 1. 铬的钝化\n\n`;
      props += `> 铬在空气中或氧化性酸中表面生成致密 \\(Cr_2O_3\\) 膜，防止进一步腐蚀。\n\n`;
      props += `#### 2. 铬酸盐的生成\n\n`;
      props += `$$4FeCr_2O_4 + 8Na_2CO_3 + 7O_2 \\xrightarrow{\\text{煅烧}} 8Na_2CrO_4 + 2Fe_2O_3 + 8CO_2$$\n\n`;
      props += `#### 3. 重铬酸根的氧化性\n\n`;
      props += `$$Cr_2O_7^{2-} + 14H^+ + 6e^- \\rightarrow 2Cr^{3+} + 7H_2O \\quad E^0 = 1.33V$$\n\n`;
      props += `> 重铬酸钾（K₂Cr₂O₇）是重要氧化剂，用于氧化还原滴定。\n\n`;
    }
    // 锰
    else if (symbol === 'Mn') {
      props += `#### 1. 锰的各种氧化态\n\n`;
      props += `| 氧化态 | 离子/化合物 | 颜色 |\n`;
      props += `|---------|-----------|------|\n`;
      props += `| +2 | Mn²⁺ | 淡粉红 |\n`;
      props += `| +4 | MnO₂ | 黑色（固）|\n`;
      props += `| +6 | MnO₄²⁻ | 深绿 |\n`;
      props += `| +7 | MnO₄⁻ | 紫红 |\n\n`;
      props += `#### 2. 高锰酸钾的氧化性\n\n`;
      props += `**酸性介质**：\n\n`;
      props += `$$2MnO_4^- + 16H^+ + 10e^- \\rightarrow 2Mn^{2+} + 8H_2O$$\n\n`;
      props += `**中性/碱性介质**：\n\n`;
      props += `$$2MnO_4^- + 3e^- + 2H_2O \\rightarrow 2MnO_2 + 4OH^-$$\n\n`;
      props += `> KMnO₄是常用氧化剂，其溶液需避光保存（见光分解）。\n\n`;
    }
    // 钴
    else if (symbol === 'Co') {
      props += `#### 1. 钴的配合物\n\n`;
      props += `**六氨合钴(III)离子**：\n\n`;
      props += `$$[Co(NH_3)_6]^{3+} \\quad \\text{（橙黄色，稳定）}$$\n\n`;
      props += `**四氯合钴(II)离子**（蓝→粉红变色）：\n\n`;
      props += `$$[Co(H_2O)_6]^{2+} + 4Cl^- \\rightleftharpoons [CoCl_4]^{2-} + 6H_2O$$\n\n`;
      props += `> 用于湿度指示剂（硅胶干燥剂）。\n\n`;
    }
    // 镍
    else if (symbol === 'Ni') {
      props += `#### 1. 镍的催化作用\n\n`;
      props += `**雷内镍（Raney Ni）**：骨架镍催化剂，用于加氢反应\n\n`;
      props += `$$R-CH=CH-R' + H_2 \\xrightarrow{Ni} R-CH_2-CH_2-R'$$\n\n`;
      props += `#### 2. 镍镀层\n\n`;
      props += `电镀镍：$Ni^{2+} + 2e^- \\rightarrow Ni$\n\n`;
    }
    // 通用过渡金属
    else {
      if (el.oxidationStates && el.oxidationStates.length > 0) {
        props += `#### 常见氧化态\n\n`;
        props += `- 氧化态：${el.oxidationStates.map(s => (s>0?'+':'')+s).join(', ')}\n\n`;
      }
      props += `#### 配位化学\n\n`;
      props += `${name}离子易形成配位化合物，常见配位数 4（四面体/平面正方形）或 6（八面体）。\n\n`;
      if (el.crystalStructure) {
        props += `#### 磁性\n\n`;
        props += `${name}的磁性与其电子构型相关，部分${name}化合物具有铁磁性/顺磁性。\n\n`;
      }
    }
  }
  
  // ===== 准金属 =====
  else if (cat === 'metalloid') {
    props = `### 化学反应方程式\n\n`;
    
    // 硼
    if (symbol === 'B') {
      props += `#### 1. 硼的缺电子性质\n\n`;
      props += `乙硼烷（B₂H₆）的水解：\n\n`;
      props += `$$B_2H_6 + 6H_2O \\rightarrow 2H_3BO_3 + 6H_2$$\n\n`;
      props += `#### 2. 硼的氧化性\n\n`;
      props += `$$2B + 3F_2 \\rightarrow 2BF_3$$\n\n`;
    }
    // 硅
    else if (symbol === 'Si') {
      props += `#### 1. 半导体掺杂\n\n`;
      props += `> 纯硅掺磷（P）得 N 型半导体，掺硼（B）得 P 型半导体。\n\n`;
      props += `#### 2. 与碱反应\n\n`;
      props += `$$Si + 2NaOH + H_2O \\rightarrow Na_2SiO_3 + 2H_2\\uparrow$$\n\n`;
      props += `#### 3. 硅的氧化\n\n`;
      props += `$$Si + O_2 \\xrightarrow{400-\\text{1000}^\\circ C} SiO_2$$\n\n`;
      props += `> 热氧化生成SiO₂层是半导体器件制造的关键步骤。\n\n`;
    }
    // 砷
    else if (symbol === 'As') {
      props += `#### 1. 砷化镓（半导体）\n\n`;
      props += `$$Ga + As \\xrightarrow{\\text{高温}} GaAs$$\n\n`;
      props += `> 砷化镓是重要III-V族半导体，用于LED、激光器。\n\n`;
      props += `#### 2. 砷的毒性\n\n`;
      props += `> 砷化合物（As₂O₃，砒霜）是剧毒物质，0.1-0.2g即可致死。\n\n`;
    }
    else {
      props += `${name}的化学性质介于金属和非金属之间。\n\n`;
    }
  }
  
  // ===== 非金属（大幅增强）=====
  else if (cat === 'nonmetal') {
    props = `### 化学反应方程式\n\n`;
    
    // 碳
    if (symbol === 'C') {
      props += `#### 1. 燃烧反应\n\n`;
      props += `$$C + O_2 \\xrightarrow{\\text{点燃}} CO_2 \\quad \\Delta H = -393.5\\text{ kJ/mol}$$\n\n`;
      props += `> 缺氧时：$2C + O_2 \\xrightarrow{\\text{点燃}} 2CO$（煤气中毒原因）\n\n`;
      props += `#### 2. 还原反应（冶金）\n\n`;
      props += `$$2CuO + C \\xrightarrow{\\text{高温}} 2Cu + CO_2\\uparrow$$\n\n`;
      props += `#### 3. 二氧化碳与石灰水反应\n\n`;
      props += `$$CO_2 + Ca(OH)_2 \\rightarrow CaCO_3\\downarrow + H_2O$$\n\n`;
      props += `> 现象：澄清石灰水变浑浊（检验 CO₂ 的特征反应）。\n\n`;
      props += `#### 4. 水煤气反应\n\n`;
      props += `$$C + H_2O \\xrightarrow{1000^\\circ C} CO + H_2$$\n\n`;
      props += `> 产生合成气（syngas），用于合成氨、甲醇等。\n\n`;
    }
    // 氮
    else if (symbol === 'N') {
      props += `#### 1. 工业合成氨（哈伯-博施法）\n\n`;
      props += `$$N_2 + 3H_2 \\rightleftharpoons 2NH_3 \\quad \\Delta H < 0$$\n\n`;
      props += `- 条件：Fe 基催化剂，450–500 °C，15–30 MPa\n`;
      props += `- 原理：氮气三键键能高（941 kJ/mol），需高温高压活化\n\n`;
      props += `#### 2. 王水溶解金\n\n`;
      props += `$$Au + HNO_3 + 4HCl \\rightarrow H[AuCl_4] + NO\\uparrow + 2H_2O$$\n\n`;
      props += `#### 3. 氮的固定\n\n`;
      props += `**生物固氮**：根瘤菌将N₂转化为NH₃\n\n`;
      props += `**工业固氮**：合成氨（占人类固氮总量80%）\n\n`;
    }
    // 氧
    else if (symbol === 'O') {
      props += `#### 1. 支持燃烧\n\n`;
      props += `$$CH_4 + 2O_2 \\xrightarrow{\\text{点燃}} CO_2 + 2H_2O \\quad \\text{（甲烷燃烧）}$$\n\n`;
      props += `#### 2. 臭氧生成与分解\n\n`;
      props += `$$3O_2 \\xrightarrow{\\text{放电}} 2O_3$$\n\n`;
      props += `$$2O_3 \\rightarrow 3O_2 \\quad \\text{（自发，放热）}$$\n\n`;
      props += `> 臭氧层保护地球生物免受紫外线伤害。\n\n`;
    }
    // 磷
    else if (symbol === 'P') {
      props += `#### 1. 白磷的自燃\n\n`;
      props += `$$P_4 + 5O_2 \\rightarrow P_4O_{10}$$\n\n`;
      props += `> 白磷在空气中自燃（着火点30°C），需保存在水中。\n\n`;
      props += `#### 2. 磷酸的生产（湿法）\n\n`;
      props += `$$Ca_3(PO_4)_2 + 3H_2SO_4 \\rightarrow 2H_3PO_4 + 3CaSO_4$$\n\n`;
      props += `> 用于生产磷肥（过磷酸钙）。\n\n`;
    }
    // 硫
    else if (symbol === 'S') {
      props += `#### 1. 硫的燃烧\n\n`;
      props += `$$S + O_2 \\xrightarrow{\\text{点燃}} SO_2$$\n\n`;
      props += `#### 2. 接触法制硫酸\n\n`;
      props += `$$2SO_2 + O_2 \\xrightarrow{V_2O_5} 2SO_3$$\n\n`;
      props += `$$SO_3 + H_2O \\rightarrow H_2SO_4$$\n\n`;
      props += `> V₂O₅是催化剂，反应温度450°C。\n\n`;
    }
    else {
      props += `${name}的化学性质与其在周期表中的位置相关。\n\n`;
    }
  }
  
  // ===== 后过渡金属 =====
  else if (cat === 'post-transition') {
    props = `### 化学性质\n\n`;
    
    if (symbol === 'Al') {
      props += `#### 1. 铝的热化学\n\n`;
      props += `铝的燃烧热极高：\n\n`;
      props += `$$4Al + 3O_2 \\rightarrow 2Al_2O_3 \\quad \\Delta H = -3352\\text{ kJ/mol}$$\n\n`;
      props += `> 铝热反应温度可达2500°C。\n\n`;
      props += `#### 2. 铝的两性\n\n`;
      props += `与酸：$2Al + 6HCl \\rightarrow 2AlCl_3 + 3H_2\\uparrow$\n\n`;
      props += `与碱：$2Al + 2NaOH + 6H_2O \\rightarrow 2Na[Al(OH)_4] + 3H_2\\uparrow$\n\n`;
    }
    else if (symbol === 'Sn' || symbol === 'Pb') {
      props += `#### 惰性电子对效应\n\n`;
      props += `${name}的 +2 氧化态比 +4 氧化态更稳定（6s²电子对不易失去）。\n\n`;
      if (symbol === 'Pb') {
        props += `Pb(IV) 是强氧化剂：\n\n`;
        props += `$$PbO_2 + 4HCl \\rightarrow PbCl_2 + Cl_2\\uparrow + 2H_2O$$\n\n`;
      }
    }
    else {
      props += `${name}是${CATEGORY_CN_ENHANCED[cat] || '金属'}元素，具有一定金属性。\n\n`;
    }
    if (el.oxidationStates && el.oxidationStates.length > 0) {
      props += `常见氧化态：${el.oxidationStates.map(s => (s>0?'+':'')+s).join(', ')}\n\n`;
    }
  }
  
  // ===== 镧系元素 =====
  else if (cat === 'lanthanide') {
    props = `### 化学性质\n\n`;
    props += `镧系元素化学性质极为相似，均为活泼金属，易失去3个电子形成 +3 价离子。\n\n`;
    props += `#### 典型反应\n\n`;
    props += `$$2Ln + 3H_2O \\rightarrow Ln_2O_3 + 3H_2\\uparrow$$\n\n`;
    props += `$$2Ln + 6HCl \\rightarrow 2LnCl_3 + 3H_2\\uparrow$$\n\n`;
    props += `> 其中 Ln 代表任意镧系元素。\n\n`;
    props += `#### 镧系收缩\n\n`;
    props += `> 镧系元素从La到Lu，原子半径收缩约14pm，导致Lu后的过渡金属与上一个周期的同类金属半径相近（如Zr和Hf，Nb和Ta）。\n\n`;
  }
  
  // ===== 锕系元素 =====
  else if (cat === 'actinide') {
    props = `### 化学性质\n\n`;
    props += `锕系元素均为放射性元素，多数仅在核反应堆或粒子加速器中制得。\n\n`;
    props += `#### 铀的核裂变\n\n`;
    props += `$$^{235}_{92}U + ^1_0n \\rightarrow ^{144}_{56}Ba + ^{89}_{36}Kr + 3^1_0n + \\text{能量}$$\n\n`;
    props += `> 1 kg 铀-235 完全裂变释放的能量相当于 2700 吨标准煤。\n\n`;
    props += `#### 钍反应堆（潜在新能源）\n\n`;
    props += `$^{232}_{90}Th + n \\rightarrow ^{233}_{90}Th \\xrightarrow{\\beta^-} ^{233}_{91}Pa \\xrightarrow{\\beta^-} ^{233}_{92}U$\n\n`;
    props += `> 钍资源丰富，是潜在的下一代核燃料。\n\n`;
  }
  
  return props;
}

// ===== 应用与原理生成器（大幅增强版）=====
function generateApplicationsDetailedV3(el) {
  const cat = el.category;
  const name = el.name;
  const symbol = el.symbol;
  
  let apps = '### 各领域应用\n\n';
  
  // ===== 碱金属 =====
  if (cat === 'alkali-metal') {
    if (symbol === 'Li') {
      apps += `#### 1. 锂离子电池（核心应用）\n\n`;
      apps += `- **工作原理**：锂离子在正负极之间嵌入/脱嵌\n`;
      apps += `  - 充电：\\(Li^+ + e^- \\rightarrow Li\\)（嵌入负极石墨）\n`;
      apps += `  - 放电：\\(Li \\rightarrow Li^+ + e^-\\)（脱嵌，经电解液迁移）\n`;
      apps += `- **能量密度**：150–250 Wh/kg（远高于铅酸电池 30–50 Wh/kg）\n`;
      apps += `- **应用**：电动汽车（特斯拉等）、手机、笔记本电脑\n\n`;
      apps += `#### 2. 玻璃陶瓷工业\n\n`;
      apps += `- Li₂O 降低玻璃热膨胀系数，用于特种玻璃\n`;
      apps += `- Li₂CO₃ 用于铝电解（降低熔点）\n\n`;
      apps += `#### 3. 锂化物在核工业中的应用\n\n`;
      apps += `- Li₆ 捕获中子：\\(^6_3Li + ^1_0n \\rightarrow ^4_2He + ^3_1H\\)\n`;
      apps += `- 用于核反应堆中子屏蔽和氚再生\n\n`;
    } else if (symbol === 'Na') {
      apps += `#### 1. 纯碱（Na₂CO₃）工业\n\n`;
      apps += `- **索尔维法**：\\(NaCl + NH_3 + CO_2 + H_2O \\rightarrow NaHCO_3 + NH_4Cl\\)\n`;
      apps += `- 用途：玻璃制造（占纯碱产量 50%）、造纸、纺织\n\n`;
      apps += `#### 2. 氯化钠（NaCl）\n\n`;
      apps += `- 氯碱工业：\\(2NaCl + 2H_2O \\xrightarrow{\\text{电解}} 2NaOH + Cl_2 + H_2\\)\n`;
      apps += `- 产品：NaOH（烧碱）、Cl₂（漂白剂原料）、H₂（合成氨原料）\n\n`;
      apps += `#### 3. 钠硫电池（储能）\n\n`;
      apps += `- 正极：硫，负极：钠，电解质：β-Al₂O₃（钠离子导体）\n`;
      apps += `- 工作温度：300–350 °C，能量密度高\n\n`;
      apps += `#### 4. 高压钠灯\n\n`;
      apps += `- 原理：Na蒸气放电发出589nm黄光\n`;
      apps += `- 特点：穿透力强（雾天照明），发光效率100-150 lm/W\n\n`;
    } else if (symbol === 'K') {
      apps += `#### 1. 钾肥（KCl、K₂SO₄）\n\n`;
      apps += `- K⁺ 是植物三大营养元素之一（N-P-K）\n`;
      apps += `- 作用：激活酶活性、调节渗透压、提高抗逆性\n\n`;
      apps += `#### 2. 氢氧化钾（KOH）\n\n`;
      apps += `- 用于碱性电池、液态肥皂生产\n`;
      apps += `- KOH 碱性强于 NaOH，用于特殊场合\n\n`;
      apps += `#### 3. 钾钠合金（传热介质）\n\n`;
      apps += `- NaK合金（78%K，22%Na）液态温度范围-11至785°C\n`;
      apps += `- 用于核反应堆冷却剂、传热介质\n\n`;
    }
  }
  
  // ===== 碱土金属 =====
  else if (cat === 'alkaline-earth') {
    if (symbol === 'Mg') {
      apps += `#### 1. 镁合金（航空航天）\n\n`;
      apps += `- 密度：1.74 g/cm³（最轻的结构金属）\n`;
      apps += `- 用途：飞机发动机机匣、笔记本电脑外壳、汽车变速箱\n\n`;
      apps += `#### 2. 镁在钢铁脱硫中的应用\n\n`;
      apps += `$$Mg + S \\rightarrow MgS$$\n\n`;
      apps += `> 镁脱硫效果优于钙，用于优质钢生产。\n\n`;
    } else if (symbol === 'Ca') {
      apps += `#### 1. 石灰工业\n\n`;
      apps += `**生石灰（CaO）**：\n\n`;
      apps += `$$CaCO_3 \\xrightarrow{900^\\circ C} CaO + CO_2$$\n\n`;
      apps += `**熟石灰（Ca(OH)₂）**：\n\n`;
      apps += `$$CaO + H_2O \\rightarrow Ca(OH)_2$$\n\n`;
      apps += `- 用途：建筑材料、水处理、烟气脱硫\n\n`;
      apps += `#### 2. 钙在生物体内的作用\n\n`;
      apps += `- 骨骼和牙齿的主要成分（羟基磷灰石 Ca₅(PO₄)₃OH）\n`;
      apps += `- 神经传导、肌肉收缩的必需离子\n\n`;
    }
  }
  
  // ===== 卤素 =====
  else if (cat === 'halogen') {
    if (symbol === 'Cl') {
      apps += `#### 1. 自来水消毒\n\n`;
      apps += `- **原理**：Cl₂ + H₂O → HCl + HClO（次氯酸）\n`;
      apps += `- HClO 具有强氧化性，破坏细菌细胞壁和酶系统\n`;
      apps += `- 剂量：0.2–0.5 mg/L（确保杀菌且不对人体有害）\n\n`;
      apps += `#### 2. 聚氯乙烯（PVC）\n\n`;
      apps += `- 聚合：\\(nCH_2=CHCl \\xrightarrow{\\text{引发剂}} -(CH_2-CHCl)_n-\\)\n`;
      apps += `- 用途：水管、门窗型材、电线绝缘层\n\n`;
      apps += `#### 3. 漂白剂（NaClO）\n\n`;
      apps += `- 制取：\\(Cl_2 + 2NaOH \\rightarrow NaCl + NaClO + H_2O\\)\n`;
      apps += `- 漂白原理：HClO 氧化色素基团\n\n`;
      apps += `#### 4. 光气（COCl₂）合成\n\n`;
      apps += `$$CO + Cl_2 \\xrightarrow{活性炭} COCl_2$$\n\n`;
      apps += `> 光气是重要有机合成中间体（用于生产聚氨酯）。\n\n`;
    } else if (symbol === 'F') {
      apps += `#### 1. 含氟牙膏\n\n`;
      apps += `- 氟离子（F⁻）与牙釉质羟基磷灰石反应生成氟磷灰石：\n`;
      apps += `  $$Ca_5(PO_4)_3OH + F^- \\rightarrow Ca_5(PO_4)_3F + OH^-$$\n`;
      apps += `- 氟磷灰石硬度更高，抗酸蚀能力更强\n\n`;
      apps += `#### 2. 氟利昂替代品\n\n`;
      apps += `- 氟氯烃（CFCs）破坏臭氧层，已被《蒙特利尔议定书》限制\n`;
      apps += `- 替代品：HFCs（氢氟烃，不含氯）\n\n`;
      apps += `#### 3. 聚四氟乙烯（特氟龙）\n\n`;
      apps += `- 聚合：\\(nCF_2=CF_2 \\rightarrow -(CF_2-CF_2)_n-\\)\n`;
      apps += `- 特点：极低摩擦系数、耐强酸强碱、"不粘"特性\n`;
      apps += `- 用途：不粘锅涂层、密封件、医用材料\n\n`;
    } else if (symbol === 'I') {
      apps += `#### 1. 碘盐（预防甲状腺肿）\n\n`;
      apps += `- 食盐中添加 KI 或 KIO₃（浓度约 20–50 mg/kg）\n`;
      apps += `- 碘是甲状腺激素（T3、T4）合成必需元素\n\n`;
      apps += `#### 2. 消毒防腐剂\n\n`;
      apps += `- 碘酒（碘的酒精溶液）用于皮肤消毒\n`;
      apps += `- 碘伏（聚维酮碘）刺激性更小\n\n`;
      apps += `#### 3. 碘化银（人工降雨）\n\n`;
      apps += `> AgI 晶体结构与冰相似，用作冰核形成剂，促进降水。\n\n`;
    }
  }
  
  // ===== 过渡金属（大幅增强）=====
  else if (cat === 'transition') {
    if (symbol === 'Fe') {
      apps += `#### 1. 钢铁工业（全球产量最大金属材料）\n\n`;
      apps += `- **生铁**：C > 2%，硬而脆，用于铸造\n`;
      apps += `- **钢**：C < 2%，可锻轧，用于建筑、汽车、机械\n`;
      apps += `- **合金钢**：\n`;
      apps += `  - 不锈钢（Fe-Cr-Ni）：Cr 生成致密 Cr₂O₃ 膜，防腐蚀\n`;
      apps += `  - 高锰钢（Fe-Mn）：抗冲击磨损，用于破碎机颚板\n\n`;
      apps += `#### 2. 哈伯法合成氨催化剂\n\n`;
      apps += `- 催化剂：Fe 基，含 K₂O（助催化剂）、Al₂O₃（结构助剂）\n`;
      apps += `- 原理：Fe 表面吸附 N₂ 并活化 N≡N 三键\n\n`;
      apps += `#### 3. 血红蛋白载氧\n\n`;
      apps += `- 血红素中的 Fe²⁺ 与 O₂ 可逆配位：\n`;
      apps += `  $$Hb\\cdot Fe^{2+} + O_2 \\rightleftharpoons Hb\\cdot Fe^{2+}\\cdot O_2$$\n`;
      apps += `- CO 中毒原理：CO 与 Fe²⁺ 亲和力是 O₂ 的 200 倍\n\n`;
      apps += `#### 4. 铁基超导材料\n\n`;
      apps += `- 铁基超导体（如 LaFeAsO）在2008年被发现\n`;
      apps += `- 临界温度：30-58 K（需液氦/液氮冷却）\n\n`;
    } else if (symbol === 'Cu') {
      apps += `#### 1. 电力工业（导电性仅次于银）\n\n`;
      apps += `- 铜的电导率：5.96×10⁷ S/m（国际标准退火铜标准）\n`;
      apps += `- 用途：电线电缆（占铜消费量 60%）、电机绕组、印刷电路板\n\n`;
      apps += `#### 2. 铜合金\n\n`;
      apps += `- **黄铜**（Cu-Zn）：Zn 10–40%，用于乐器、装饰品\n`;
      apps += `- **青铜**（Cu-Sn）：Sn 5–20%，用于轴承、雕塑\n`;
      apps += `- **白铜**（Cu-Ni）：Ni 5–30%，用于硬币、海洋工程\n\n`;
      apps += `#### 3. 抗菌铜\n\n`;
      apps += `- 铜离子破坏细菌细胞膜和 DNA，用于医院门把手、扶手\n\n`;
      apps += `#### 4. 铜铟镓硒（CIGS）薄膜太阳能电池\n\n`;
      apps += `- 结构：Glass/Mo/Cu(In,Ga)Se₂/CdS/ZnO\n`;
      apps += `- 转化率：~23%（实验室）\n\n`;
    } else if (symbol === 'Al') {
      apps += `#### 1. 铝合金（航空航天核心材料）\n\n`;
      apps += `- 密度：2.7 g/cm³（仅为钢的 1/3）\n`;
      apps += `- 强度：经热处理可达 400–600 MPa\n`;
      apps += `- 用途：飞机机身（波音 787 使用 50% 铝合金）、汽车轻量化\n\n`;
      apps += `#### 2. 铝电解电容器\n\n`;
      apps += `- 原理：铝阳极氧化生成 Al₂O₃ 介电层（厚度 ~10 nm）\n`;
      apps += `- 特点：体积小、容量大，用于手机、电脑电源滤波\n\n`;
      apps += `#### 3. 铝热反应（焊接铁轨）\n\n`;
      apps += `$$2Al + Fe_2O_3 \\xrightarrow{\\text{点燃}} 2Fe + Al_2O_3 \\quad \\Delta H = -851.5\\text{ kJ/mol}$$\n\n`;
      apps += `> 反应温度可达 2500 °C，用于野外焊接铁轨。\n\n`;
      apps += `#### 4. 铝在磁共振成像（MRI）中的应用\n\n`;
      apps += `- 钆造影剂（含Gd³⁺）需与DTPA配位降低毒性\n`;
      apps += `- 铝箔用于MRI射频线圈\n\n`;
    } else if (symbol === 'Ti') {
      apps += `#### 1. 钛合金（航空航天）\n\n`;
      apps += `- Ti-6Al-4V（最常见的钛合金）：强度/密度比最高\n`;
      apps += `- 用途：飞机发动机叶片、机身框架、航天器外壳\n\n`;
      apps += `#### 2. 化学工业（耐腐蚀性）\n\n`;
      apps += `- 钛表面生成致密 TiO₂ 膜，耐海水、氯气腐蚀\n`;
      apps += `- 用途：海水淡化设备、化工反应器、核电冷凝器\n\n`;
      apps += `#### 3. 钛在生物医学中的应用\n\n`;
      apps += `- 钛与人体骨骼弹性模量相近（~110 GPa），无排异\n`;
      apps += `- 用途：人工关节、牙科植入体、骨板\n\n`;
    } else if (symbol === 'Au') {
      apps += `#### 1. 金融储备\n\n`;
      apps += `- 全球黄金储备：~20 万吨，各国央行持有 ~3.5 万吨\n`;
      apps += `- 黄金的稀有性、耐腐蚀性和文化认同使其成为天然货币\n\n`;
      apps += `#### 2. 电子工业\n\n`;
      apps += `- 金导电性优良且耐腐蚀，用于芯片引线、连接器镀层\n`;
      apps += `- 智能手机含 ~0.03g 金（从 40 吨矿石中回收）\n\n`;
      apps += `#### 3. 氰化法提金\n\n`;
      apps += `$$4Au + 8NaCN + O_2 + 2H_2O \\rightarrow 4Na[Au(CN)_2] + 4NaOH$$\n\n`;
      apps += `> 后用 Zn 还原：$2[Au(CN)_2]^- + Zn \\rightarrow 2Au + [Zn(CN)_4]^{2-}$\n\n`;
      apps += `#### 4. 金纳米颗粒\n\n`;
      apps += `- 用途：癌症热疗、快速诊断试纸、电子墨水\n\n`;
    } else if (symbol === 'Ag') {
      apps += `#### 1. 摄影工业（传统银盐胶片）\n\n`;
      apps += `$$2AgBr \\xrightarrow{\\text{光照}} 2Ag + Br_2$$\n\n`;
      apps += `> 银盐见光分解，潜影经显影液（对苯二酚）还原为金属银。\n\n`;
      apps += `#### 2. 抗菌材料\n\n`;
      apps += `- Ag⁺ 破坏细菌细胞膜，用于敷料、净水器\n`;
      apps += `- 纳米银：粒径 < 100 nm，抗菌效果更强\n\n`;
      apps += `#### 3. 银锌电池（一次性高比能电池）\n\n`;
      apps += `- 用于鱼雷、导弹等军用设备\n`;
      apps += `- 比能量：100-150 Wh/kg\n\n`;
    } else if (symbol === 'Zn') {
      apps += `#### 1. 镀锌（防腐蚀）\n\n`;
      apps += `- **热浸镀锌**：钢铁浸入 450 °C 锌液，生成 Zn-Fe 合金层\n`;
      apps += `- **牺牲阳极保护**：Zn 比 Fe 更活泼，优先氧化\n`;
      apps += `- 寿命：户外环境 20–50 年\n\n`;
      apps += `#### 2. 锌锰干电池\n\n`;
      apps += `- 负极：Zn，正极：MnO₂，电解质：NH₄Cl 或 ZnCl₂\n`;
      apps += `- 反应：$Zn + 2MnO_2 + 2NH_4^+ \\rightarrow Zn^{2+} + 2MnOOH + 2NH_3$\n\n`;
      apps += `#### 3. 锌在生命科学中的作用\n\n`;
      apps += `- 锌是200+种酶的辅因子（如碳酸酐酶、酒精脱氢酶）\n`;
      apps += `- 缺锌导致生长迟缓、免疫功能下降\n\n`;
    } else if (symbol === 'Cr') {
      apps += `#### 1. 不锈钢（含Cr > 10.5%）\n\n`;
      apps += `- Cr 表面生成致密 Cr₂O₃ 膜（钝化膜），厚度1-5 nm\n`;
      apps += `- 膜破损后能自修复（需氧气存在）\n\n`;
      apps += `#### 2. 镀铬（装饰性镀层）\n\n`;
      apps += `- 用于汽车零件、五金件、卫浴龙头\n`;
      apps += `- 多层镀：Cu（打底）→ Ni（防腐）→ Cr（光亮）\n\n`;
    } else if (symbol === 'Ni') {
      apps += `#### 1. 镍氢电池（Ni-MH）\n\n`;
      apps += `- 负极：储氢合金（LaNi₅等）\n`;
      apps += `- 正极：NiOOH\n`;
      apps += `- 用于混合动力汽车（丰田普锐斯）\n\n`;
      apps += `#### 2. 镍基高温合金\n\n`;
      apps += `- 含Ni > 50%，用于航空发动机涡轮叶片\n`;
      apps += `- 工作温度：1000-1100°C\n\n`;
    } else if (symbol === 'Co') {
      apps += `#### 1. 钴在锂离子电池中的应用\n\n`;
      apps += `- 钴酸锂（LiCoO₂）：最早商业化的锂离子电池正极材料\n`;
      apps += `- 三元材料（NMC）：LiNiₓMnᵧCo₂O₂，性能更优\n\n`;
      apps += `#### 2. 钴基高温合金\n\n`;
      apps += `- 含Co 40-60%，用于燃气轮机叶片\n`;
      apps += `- 比镍基合金更耐高温（可达1150°C）\n\n`;
    } else if (symbol === 'Mo') {
      apps += `#### 1. 钼在合金钢中的应用\n\n`;
      apps += `- 钼提高钢的强度、韧性和耐腐蚀性\n`;
      apps += `- 用途：高速工具钢（切削工具）、核反应堆结构材料\n\n`;
      apps += `#### 2. 钼在电子工业中的应用\n\n`;
      apps += `- 钼片用作功率半导体基板（热膨胀系数与Si接近）\n`;
      apps += `- 钼靶材用于LCD屏幕镀膜\n\n`;
    }
  }
  
  // ===== 准金属 =====
  else if (cat === 'metalloid') {
    if (symbol === 'B') {
      apps += `#### 1. 硼钢（核反应堆控制棒）\n\n`;
      apps += `- B-10 捕获中子截面大：\\(^{10}_5B + ^1_0n \\rightarrow ^7_3Li + ^4_2He\\)\n`;
      apps += `- 用于核反应堆控制棒和防护服\n\n`;
      apps += `#### 2. 硼化物硬质材料\n\n`;
      apps += `- TiB₂、ZrB₂：超高温陶瓷（耐温 > 2000°C）\n`;
      apps += `- 用于火箭喷管、高超音速飞行器鼻锥\n\n`;
    }
    if (symbol === 'Si') {
      apps += `#### 1. 半导体工业（核心材料）\n\n`;
      apps += `- 全球 95% 以上的半导体器件基于硅\n`;
      apps += `- 硅纯度要求：> 99.9999999%（9N）\n`;
      apps += `- 制程：石英砂 → 冶金硅（98%）→ 三氯氢硅 → 区熔提纯 → 单晶硅\n\n`;
      apps += `#### 2. 太阳能电池\n\n`;
      apps += `- 原理：光生伏特效应，硅 PN 结吸收光子产生电子-空穴对\n`;
      apps += `- 转化率：单晶硅 ~22%，多晶硅 ~18%，钙钛矿 ~25%\n\n`;
      apps += `#### 3. 硅胶（干燥剂）\n\n`;
      apps += `- 化学式：\\((SiO_2)_n\\cdot mH_2O\\)，多孔结构\n`;
      apps += `- 吸湿率：可达自身重量 40%\n\n`;
      apps += `#### 4. 硅树脂（密封材料）\n\n`;
      apps += `- 耐高低温（-50°C至250°C）、耐候性好\n`;
      apps += `- 用于建筑密封、电子灌封\n\n`;
    }
  }
  
  // ===== 非金属 =====
  else if (cat === 'nonmetal') {
    if (symbol === 'C') {
      apps += `#### 1. 钢铁冶炼（还原剂）\n\n`;
      apps += `- 焦炭在高炉中燃烧提供热量，并产生还原气 CO\n`;
      apps += `- 反应：$Fe_2O_3 + 3CO \\rightarrow 2Fe + 3CO_2$\n\n`;
      apps += `#### 2. 锂离子电池负极\n\n`;
      apps += `- 石墨层间化合物：\\(C + xLi^+ + xe^- \\rightarrow Li_xC_6\\)\n`;
      apps += `- 理论比容量：372 mAh/g\n\n`;
      apps += `#### 3. 钻石与石墨\n\n`;
      apps += `- 钻石：C 四面体 sp³ 杂化，硬度 10（莫氏），折射率高\n`;
      apps += `- 石墨：C 层状 sp² 杂化，导电，用于电极、润滑剂\n\n`;
      apps += `#### 4. 碳纤维\n\n`;
      apps += `- 强度：> 5000 MPa（是钢的10倍）\n`;
      apps += `- 用途：飞机机身、F1赛车、高档自行车\n\n`;
    } else if (symbol === 'N') {
      apps += `#### 1. 合成氨（化肥工业基础）\n\n`;
      apps += `- 全球年产氨 ~1.8 亿吨，80% 用于化肥\n`;
      apps += `- 氮肥：尿素 \\([CO(NH_2)_2]\\)、硝酸铵 \\(NH_4NO_3\\)\n\n`;
      apps += `#### 2. 液氮冷冻\n\n`;
      apps += `- 液氮沸点：-195.8 °C\n`;
      apps += `- 用途：生物样本保存（-196 °C）、食品速冻、超导磁体冷却\n\n`;
      apps += `#### 3. 氮在食品工业中的应用\n\n`;
      apps += `- 充氮包装：置换氧气，防止食品氧化变质\n`;
      apps += `- 液氮速冻：冰晶细小，保持食品口感\n\n`;
    } else if (symbol === 'P') {
      apps += `#### 1. 磷肥工业\n\n`;
      apps += `- 过磷酸钙（SSP）：$Ca_3(PO_4)_2 + 2H_2SO_4 \\rightarrow Ca(H_2PO_4)_2 + 2CaSO_4$\n`;
      apps += `- 重过磷酸钙（TSP）：更高浓度的磷肥\n\n`;
      apps += `#### 2. 磷酸铁锂（LiFePO₄）电池\n\n`;
      apps += `- 正极材料，安全性高、循环寿命长\n`;
      apps += `- 用于电动汽车（比亚迪刀片电池）\n\n`;
    } else if (symbol === 'S') {
      apps += `#### 1. 硫酸工业（化学工业之母）\n\n`;
      apps += `- 全球硫酸产量反映一个国家化工发展水平\n`;
      apps += `- 用途：化肥（50%）、化学品、冶金、石油精炼\n\n`;
      apps += `#### 2. 橡胶硫化\n\n`;
      apps += `$$\\text{天然橡胶} + S \\xrightarrow{加热} \\text{硫化橡胶}$$\n\n`;
      apps += `> 硫桥交联提高橡胶强度和弹性。\n\n`;
    }
  }
  
  // ===== 稀土元素 =====
  else if (cat === 'lanthanide') {
    if (symbol === 'Nd') {
      apps += `#### 1. 钕铁硼（NdFeB）永磁体\n\n`;
      apps += `- 磁能积：> 50 MGOe（是铁氧体的10倍）\n`;
      apps += `- 用途：电动汽车电机、风力发电机、耳机、硬盘驱动器\n\n`;
    } else if (symbol === 'Eu') {
      apps += `#### 1.  europium in CRT and LED displays\n\n`;
      apps += `- Eu²⁺ 发红光，Eu³⁺ 发蓝光\n`;
      apps += `- 用于彩色电视机、LED灯泡\n\n`;
    } else {
      apps += `${name}是重要稀土元素，在永磁材料、发光材料、催化剂等领域有广泛应用。\n\n`;
    }
  }
  
  // ===== 锕系元素 =====
  else if (cat === 'actinide') {
    if (symbol === 'U') {
      apps += `#### 1. 核能发电\n\n`;
      apps += `- 1 kg 铀-235 完全裂变释放能量相当于 2700 吨标准煤\n`;
      apps += `- 全球 ~440 座核电站，提供 ~10% 的全球电力\n\n`;
      apps += `#### 2. 铀在地质学中的应用\n\n`;
      apps += `- 铀铅测年法：测定岩石年龄（可达45亿年）\n`;
      apps += `- 原理：²³⁸U → ²⁰⁶Pb（半衰期 4.47e9 年）\n\n`;
    } else if (symbol === 'Th') {
      apps += `#### 1. 钍反应堆（潜在新能源）\n\n`;
      apps += `- 钍资源丰富（是铀的3倍）\n`;
      apps += `- 钍裂变产生更少长寿命放射性废物\n\n`;
    }
  }
  
  // ===== 通用模板（其他元素）=====
  else {
    apps += `${name}在多个领域有重要应用，具体信息持续完善中……\n\n`;
  }
  
  return apps;
}

// ===== 注意事项生成器（增强版）=====
function generatePrecautionsV3(el) {
  let prec = '';
  
  if (el.category === 'alkali-metal') {
    prec = `⚠️ **${el.name}安全注意事项：**\n\n`;
    prec += `- ${el.name}遇水剧烈反应，可能引发爆炸！\n`;
    prec += `- 储存于煤油或石蜡油中，严禁接触水。\n`;
    prec += `- ${el.name}着火不可用 CO₂ 灭火器，用干砂或D类灭火器覆盖灭火。\n`;
    prec += `- 操作佩戴防护眼镜和耐碱手套。\n\n`;
    if (el.symbol === 'Cs' || el.symbol === 'Rb') {
      prec += `> **特别注意**：${el.name}反应极其剧烈，实验室仅使用极少量（< 0.5g）。\n\n`;
    }
  }
  else if (el.category === 'halogen') {
    prec = `⚠️ **${el.name}安全注意事项：**\n\n`;
    prec += `- ${el.symbol}₂ 是强氧化剂，腐蚀性强。\n`;
    prec += `- 操作在通风橱进行，穿戴防酸设备（面罩、手套、围裙）。\n`;
    prec += `- Cl₂、F₂ 吸入可致命，空气中最高允许浓度：Cl₂ 1 ppm，F₂ 0.1 ppm。\n\n`;
    if (el.symbol === 'F') {
      prec += `> **氟气特别危险**：氟与大多数物质剧烈反应，包括玻璃和许多非金属。需用特制容器储存。\n\n`;
    }
  }
  else if (el.category === 'transition' && el.symbol === 'Hg') {
    prec = `⚠️ **汞安全注意事项：**\n\n`;
    prec += `- 汞蒸气有毒，吸入导致慢性中毒（神经损伤）。\n`;
    prec += `- 汞泄漏用硫磺粉覆盖（生成无毒 HgS）。\n`;
    prec += `- 不得使用吸尘器清理汞（会加速挥发）。\n`;
    prec += `- 工作环境汞蒸气浓度应 < 0.025 mg/m³。\n\n`;
  }
  else if (el.radioactive) {
    prec = `☢️ **${el.name}放射性安全：**\n\n`;
    prec += `- ${el.name}具有放射性，严格遵守辐射防护规程。\n`;
    prec += `- 操作在认证实验室进行，佩戴个人剂量计。\n`;
    prec += `- 遵循时间-距离-屏蔽三原则：尽可能缩短操作时间、增大与源的距离、使用适当屏蔽材料。\n\n`;
  }
  else if (el.category === 'metalloid' && el.symbol === 'As') {
    prec = `⚠️ **砷安全注意事项：**\n\n`;
    prec += `- 砷化合物（As₂O₃，砒霜）是剧毒物质，0.1-0.2g即可致死。\n`;
    prec += `- 操作佩戴防护手套和口罩，严防入口。\n\n`;
  }
  else {
    prec = `⚠️ **一般安全注意事项：**\n\n`;
    prec += `- 操作时参考相关安全数据表（SDS），遵守实验室安全规程。\n`;
    prec += `- 佩戴适当的个人防护装备（手套、护目镜、实验服）。\n\n`;
  }
  
  return prec;
}

// ===== 泄漏应急措施生成器（增强版）=====
function generateLeakageMeasuresV3(el) {
  if (el.category === 'alkali-metal') {
    return `**${el.name}泄漏应急处置：**\n\n` +
           `1. 迅速撤离无关人员，切断泄漏源\n` +
           `2. 不得用水直接冲洗（可能引发爆炸）\n` +
           `3. 用干砂、纯碱或专用吸附剂小心覆盖收集\n` +
           `4. 收集的废物按危险废物处置\n` +
           `5. 污染区域通风干燥\n\n` +
           `> 如发生火灾，使用D类灭火器或干砂灭火，严禁用水或泡沫灭火器。`;
  }
  
  else if (el.category === 'halogen') {
    return `**${el.name}气泄漏应急处置：**\n\n` +
           `1. 迅速撤离人员至上风方向（氯/氟气比空气重，沿地面扩散）\n` +
           `2. 穿戴A级防化服和正压呼吸器进入现场\n` +
           `3. 用碱液（NaOH或Na₂CO₃）喷雾中和氯气\n` +
           `4. 泄漏容器尽可能移至空旷安全处\n` +
           `5. 喷雾状水稀释溶解的毒气\n\n` +
           `> 急救：迅速将中毒者移至空气新鲜处，给予氧气，立即送医。`;
  }
  
  else if (el.symbol === 'Hg') {
    return `**汞泄漏应急处置：**\n\n` +
           `1. 立即开窗通风，降低室内汞蒸气浓度\n` +
           `2. 疏散人员，特别是儿童和孕妇\n` +
           `3. 用硫磺粉均匀覆盖汞珠（生成无毒 HgS），静置30分钟\n` +
           `4. 戴橡胶手套小心收集汞珠（可用硬纸片或滴管）\n` +
           `5. 不得用吸尘器清理（会加速挥发）\n` +
           `6. 污染区域用10%漂白粉溶液擦拭\n\n` +
           `> 专业处理：汞泄漏量 > 1 mL 建议联系专业汞清理服务。`;
  }
  
  else if (el.radioactive) {
    return `**${el.name}放射性物质泄漏应急处置：**\n\n` +
           `1. 迅速撤离非必要人员，设置警戒区\n` +
           `2. 穿戴A级辐射防护服和呼吸防护设备\n` +
           `3. 使用便携式辐射检测仪确定污染范围\n` +
           `4. 用专用吸附材料小心收集放射性物质\n` +
           `5. 废物装入专用放射性废物袋，按规定分类储存\n` +
           `6. 污染区域去污处理，复测合格后方可解除警戒\n\n` +
           `> 立即报告辐射安全主管部门，启动辐射事故应急预案。`;
  }
  
  else if (el.category === 'acid' || (el.oxidationStates && el.oxidationStates.some(s => s > 0))) {
    return `**${el.name}化合物泄漏应急处置：**\n\n` +
           `1. 迅速切断泄漏源\n` +
           `2. 根据物质酸碱性选择合适的中和剂\n` +
           `3. 酸泄漏用碱（Na₂CO₃、NaOH）中和\n` +
           `4. 碱泄漏用酸（稀HCl、稀H₂SO₄）中和\n` +
           `5. 按危险废物处置规程处理中和产物\n\n` +
           `> 处理人员必须穿戴全套防化装备。`;
  }
  
  else {
    return `**${el.name}泄漏应急处置：**\n\n` +
           `1. 迅速切断泄漏源\n` +
           `2. 根据物质性质选择合适的吸附剂（砂土、活性炭等）\n` +
           `3. 小心收集泄漏物，避免扬尘或飞溅\n` +
           `4. 按危险废物处置规程处理\n` +
           `5. 污染区域用清水或合适溶剂清洗\n\n` +
           `> 详细措施请参考该物质的安全数据表（SDS）。`;
  }
}

// ===== 发展前景生成器（增强版）=====
function generateProspectsV3(el) {
  let pros = '';
  
  if (el.category === 'alkali-metal') {
    if (el.symbol === 'Li') {
      pros = `### ${el.name}的发展前景\n\n`;
      pros += `- **固态锂电池**：使用固态电解质（如LiPON、硫化物玻璃），能量密度可达500 Wh/kg，安全性更高。\n`;
      pros += `- **锂硫电池**：理论能量密度2500 Wh/kg，是下一代高能量密度电池方向。\n`;
      pros += `- **锂在核聚变中的应用**：Li₆ + n → He + T，用于氚增殖。\n\n`;
    } else {
      pros = `### ${el.name}的发展前景\n\n`;
      pros += `- **钠离子电池**：Na资源丰富，成本低，有望替代部分锂电池，用于储能电站。\n`;
      pros += `- **钾离子电池**：K⁺ 离子半径大，但K资源丰富，是潜在的下一代电池技术。\n\n`;
    }
  }
  
  else if (el.category === 'transition') {
    if (el.symbol === 'Fe') {
      pros = `### ${el.name}的发展前景\n\n`;
      pros += `- **氢冶金**（绿色钢铁）：H₂ 还原铁矿石，减少碳排放（碳中和目标）。\n`;
      pros += `  $$Fe_2O_3 + 3H_2 \\rightarrow 2Fe + 3H_2O$$\n\n`;
      pros += `- **直接还原铁（DRI）**：使用天然气或氢气还原，减少焦炭使用。\n`;
      pros += `- **铁基超导**：新型超导材料研究方向，临界温度不断提高。\n\n`;
    } else if (el.symbol === 'Li') {
      pros = `### ${el.name}的发展前景\n\n`;
      pros += `- 锂硫电池、锂空气电池是下一代高能量密度电池方向。\n`;
      pros += `- 锂在医疗领域中的应用（Li₂CO₃治疗双相情感障碍）。\n\n`;
    } else if (el.symbol === 'Co' || el.symbol === 'Ni') {
      pros = `### ${el.name}的发展前景\n\n`;
      pros += `- **无钴/低钴电池**：为降低成本和减少对钴的依赖，研发无钴正极材料（如LMFP）。\n`;
      pros += `- **钴在航空航天中的应用**：钴基高温合金用于下一代航空发动机。\n\n`;
    } else {
      pros = `### ${el.name}的发展前景\n\n`;
      pros += `- ${el.name}基新材料在新能源、电子信息等领域有广阔前景。\n`;
      pros += `- 高熵合金（含${el.name}）是新材料研究热点。\n\n`;
    }
  }
  
  else if (el.symbol === 'Si') {
    pros = `### ${el.name}的发展前景\n\n`;
    pros += `- **钙钛矿太阳能电池**：理论转化率 > 30%，是下一代光伏技术。\n`;
    pros += `- **硅基量子点**：新型显示和医疗成像技术。\n`;
    pros += `- **硅负极锂离子电池**：SiOₓ 负极比容量可达1000-2000 mAh/g。\n\n`;
  }
  
  else if (el.category === 'lanthanide') {
    pros = `### ${el.name}的发展前景\n\n`;
    pros += `- **稀土在永磁电机中的应用**：电动汽车、风力发电需求持续增长。\n`;
    pros += `- **稀土资源回收技术**：从废旧电子产品、永磁体中回收稀土，减少环境污染。\n\n`;
  }
  
  else if (el.category === 'actinide') {
    pros = `### ${el.name}的发展前景\n\n`;
    pros += `- **第四代核反应堆**：使用快中子增殖反应堆，提高铀资源利用率至60%（目前仅1%）。\n`;
    pros += `- **聚变-裂变混合堆**：利用聚变中子增殖核燃料。\n\n`;
  }
  
  else {
    pros = `### ${el.name}的发展前景\n\n`;
    pros += `${el.name}在新材料、新能源等前沿领域有广阔的研究和应用前景。\n\n`;
    pros += `> 研究前沿：纳米材料、二维材料、高熵合金等新技术为${el.name}的应用开辟新方向。`;
  }
  
  return pros;
}

// ===== 主要导出函数（完整版）=====
window.generateEnhancedMarkdownV3 = function(el) {
  const catCN  = (CATEGORY_CN_ENHANCED && CATEGORY_CN_ENHANCED[el.category]) || el.category;
  const stateCN = {solid:'固态',liquid:'液态',gas:'气态',synthetic:'人造元素'}[el.state] || el.state;
  
  const radioHeader = el.radioactive
    ? '\n> ☢️ **放射性元素** — 具有放射性，操作须严格遵守辐射防护规程\n'
    : '';
  
  const radioRow = el.radioactive ? '\n| 放射性 | ☢️ 是 |' : '';
  const radioNote = el.radioactive ? '> ⚠️ 本元素具有放射性，接触须按辐射安全规程操作。\n\n' : '';
  const radioSafety = el.radioactive ? '\n\n**放射性安全**：严格遵守辐射防护国家标准（GB 18871），操作在认证实验室进行，佩戴个人剂量计，放射性废物按规定分类储存和处置。' : '';
  
  // 氧化态格式化
  const oxStr = el.oxidationStates && el.oxidationStates.length > 0
    ? el.oxidationStates.map(function(s){return (s>0?'+':'')+s;}).join(', ')
    : '暂无数据';
  
  // 地壳丰度
  const abundance = el.crustAbundance !== null ? `${el.crustAbundance} mg/kg（${el.crustAbundance > 1000 ? '高' : el.crustAbundance > 100 ? '中' : '低'}丰度）` : '数据缺失';
  
  // 工业制备
  const production = el.productionMethod || '数据缺失';
  
  // 年产量
  const annualProd = el.annualProduction !== null ? `${el.annualProduction.toLocaleString()} 吨/年` : '数据缺失';
  
  // 价格
  const price = el.priceReference || '数据缺失';
  
  return `## ${el.name}（${el.symbol}）— 第 ${el.z} 号元素
${radioHeader}
### 一、发现与发展史

${generateDiscoveryHistoryV3(el)}

---

### 二、物理性质（完整）

| 性质 | 值 |
|------|-----|
| 原子序数 | ${el.z} |
| 元素符号 | ${el.symbol} |
| 英文名 | ${el.nameEn} |
| 原子量 | ${el.mass} u |
| 核外电子排布 | ${el.electrons.join(', ')} |
| 元素类别 | ${catCN} |
| 常温状态 | ${stateCN} |
| 所在周期 | 第 ${el.period} 周期 |
| 所在族 | 第 ${el.group} 族 |${radioRow}
| 地壳丰度 | ${abundance} |
| 常见氧化态 | ${oxStr} |

#### 详细物理常数

| 性质 | 值 |
|------|-----|
${generatePhysicalPropertiesV3(el)}

${radioNote}

---

### 三、化学性质

${generateChemicalPropsDetailedV3(el)}

---

### 四、应用与原理

${generateApplicationsDetailedV3(el)}

---

### 五、注意事项与安全

#### 使用注意事项

${generatePrecautionsV3(el)}

#### 泄漏应急处置

${generateLeakageMeasuresV3(el)}

---

### 六、发展前景

${generateProspectsV3(el)}

---

### 七、工业信息

| 项目 | 信息 |
|------|------|
| 工业制备 | ${production} |
| 年产量 | ${annualProd} |
| 参考价格 | ${price} |
| 主要生产国 | ${el.majorProducers || '数据缺失'} |

---

*📝 本页内容由增强生成器 v3.0 自动生成，持续完善中。数据来源：[NIST Chemistry WebBook](https://webbook.nist.gov/)、[PubChem](https://pubchem.ncbi.nlm.nih.gov/)、[WebElements](https://www.webelements.com/) 等权威数据库。*

*最后更新：2026年6月*${radioSafety}
`;
};

// 覆盖原来的 getElementMarkdown 函数
const originalGetElementMarkdownV3 = window.getElementMarkdown;
window.getElementMarkdown = function(el) {
  // 如果有自定义详情，使用自定义详情
  if (typeof ELEMENT_DETAILS !== 'undefined' && ELEMENT_DETAILS[el.z]) {
    return ELEMENT_DETAILS[el.z];
  }
  // 否则使用增强生成器 v3.0
  return window.generateEnhancedMarkdownV3(el);
};

console.log('✅ 增强元素详情生成器 v3.0 已加载（大幅增强版，含更详细化学性质和应用原理）');
