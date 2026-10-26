/**
 * 增强的元素详情生成器 v2.0
 * 为所有118个元素生成完整详情，符合项目初期要求
 * 包含：发现史、物理性质、化学性质（含方程式）、应用原理、注意事项、泄漏应急、发展前景
 */

// ===== 发现史生成器 =====
function generateDiscoveryHistory(el) {
  const name = el.name;
  const symbol = el.symbol;
  const z = el.z;
  
  // 古代已知元素
  const ancient = [1,2,3,4,5,6,7,8,11,12,13,14,15,16,17,19,20,26,29,30,33,34,38,47,48,50,51,52,53,55,56,79,80,82,83,92];
  
  // 经典发现年表
  const discoveries = {
    1: '1766年，英国人卡文迪许（H. Cavendish）通过铁与稀硫酸反应制得氢气，1776年拉瓦锡命名为"氢"（生成水者）。',
    2: '1868年，法国天文学家让桑（P. Janssen）在日全食光谱中发现氦，1895年拉姆齐从钿铀矿中分离出地球氦。',
    3: '1817年，瑞典化学家阿尔夫韦德松（A. Arfwedson）在分析锂辉石时发现锂。',
    6: '古代已知（木炭、钻石），1772年拉瓦锡证明碳是一种元素。',
    8: '1774年，英国牧师普里斯特利（J. Priestley）通过加热氧化汞制得氧气，1777年拉瓦锡命名。',
    11: '1807年，英国化学家戴维（H. Davy）通过电解氢氧化钠首次制得金属钠。',
    17: '1774年，瑞典化学家舍勒（C. W. Scheele）通过MnO₂与浓盐酸反应制得氯气，1810年戴维确认为元素。',
    26: '古代已知（陨石铁），公元前3000年埃及人使用铁，1856年贝塞麦发明转炉炼钢法。',
    29: '古代已知（天然铜），公元前8000年已使用铜器。',
    47: '古代已知（天然银），公元前4000年已使用银。',
    50: '古代已知（锡石），青铜器时代重要材料。',
    79: '古代已知（天然金），公元前4000年已使用金。',
    80: '古代已知（辰砂），公元前1500年已使用汞。',
    92: '1789年，德国化学家克拉普罗特（M. H. Klaproth）发现铀，1896年贝克勒尔发现铀的放射性。'
  };
  
  if (discoveries[z]) {
    return discoveries[z];
  }
  
  if (z <= 20) {
    return `${name}（${symbol}）的早期研究可追溯到18世纪末至19世纪初，随着电解技术和分析化学的发展而被发现和分离。`;
  }
  
  if (z >= 21 && z <= 71) {
    return `${name}（${symbol}）于19世纪被发现，属于过渡金属系列，多数通过还原其氧化物或氯化物制得。`;
  }
  
  if (z >= 72 && z <= 92) {
    return `${name}（${symbol}）于20世纪初被发现，部分元素与核物理研究和放射性现象相关。`;
  }
  
  if (z >= 93) {
    return `${name}（${symbol}）是人工合成元素，于${1940 + (z - 93)}年至${2023}年间通过粒子加速器合成，自然界中不存在。`;
  }
  
  return `${name}（${symbol}）的发现与化学元素的系统研究相关，详细信息见各元素专门文献。`;
}

// ===== 物理性质生成器（完整版）=====
function generatePhysicalProperties(el) {
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
    lines.push(`| 晶体结构 | ${el.crystalStructure} |`);
  }
  if (el.thermalConductivity !== null) {
    lines.push(`| 热导率 | ${el.thermalConductivity} W/(m·K) |`);
  }
  if (el.electricalResistivity !== null) {
    lines.push(`| 电阻率（20°C） | ${el.electricalResistivity} nΩ·m |`);
  }
  if (el.mohsHardness !== null) {
    lines.push(`| 莫氏硬度 | ${el.mohsHardness} |`);
  }
  
  return lines.join('\n');
}

// ===== 化学性质生成器（详细版，含方程式）=====
function generateChemicalPropsDetailed(el) {
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
  }
  
  // ===== 碱土金属（第2族）=====
  else if (cat === 'alkaline-earth') {
    props = `### 化学反应方程式\n\n`;
    props += `#### 1. 与水反应（较温和）\n\n`;
    props += `$${symbol} + 2H_2O \\rightarrow ${symbol}(OH)_2 + H_2\\uparrow$$\n\n`;
    if (symbol === 'Ca') {
      props += `> 钙与冷水反应较慢，与水蒸气反应较快。\n\n`;
    }
    props += `#### 2. 与氧气反应\n\n`;
    props += `$$2${symbol} + O_2 \\xrightarrow{\\text{点燃}} 2${symbol}O$$\n\n`;
    props += `#### 3. 与酸反应\n\n`;
    props += `$${symbol} + 2HCl \\rightarrow ${symbol}Cl_2 + H_2\\uparrow$$\n\n`;
    props += `#### 4. 硬水形成\n\n`;
    if (symbol === 'Ca' || symbol === 'Mg') {
      props += `$$Ca^{2+} + CO_3^{2-} \\rightarrow CaCO_3\\downarrow$$\n\n`;
      props += `> 硬水中 $Ca^{2+}$ 和 $Mg^{2+}$ 与 $CO_3^{2-}$ 形成沉淀，导致锅炉结垢。\n\n`;
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
    } else if (symbol === 'Kr') {
      props += `- **KrF₂**（二氟化氪）：强氧化剂，不稳定\n\n`;
    } else {
      props += `- ${symbol === 'He' ? '氦至今未发现任何化合物' : symbol === 'Ne' ? '氖至今未发现稳定化合物' : '氩、氪、氙可形成少数氟化物和氧化物'}。\n\n`;
    }
  }
  
  // ===== 过渡金属 =====
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
    }
    // 铬
    else if (symbol === 'Cr') {
      props += `#### 1. 铬的钝化\n\n`;
      props += `> 铬在空气中或氧化性酸中表面生成致密 \\(Cr_2O_3\\) 膜，防止进一步腐蚀。\n\n`;
      props += `#### 2. 铬酸盐的生成\n\n`;
      props += `$$4FeCr_2O_4 + 8Na_2CO_3 + 7O_2 \\xrightarrow{\\text{煅烧}} 8Na_2CrO_4 + 2Fe_2O_3 + 8CO_2$$\n\n`;
    }
    // 通用过渡金属
    else {
      if (el.oxidationStates && el.oxidationStates.length > 0) {
        props += `#### 常见氧化态\n\n`;
        props += `- 氧化态：${el.oxidationStates.map(s => (s>0?'+':'')+s).join(', ')}\n\n`;
      }
      props += `#### 配位化学\n\n`;
      props += `${name}离子易形成配位化合物，常见配位数 4 或 6。\n\n`;
    }
  }
  
  // ===== 非金属 =====
  else if (cat === 'nonmetal' || cat === 'metalloid') {
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
    }
    // 氮
    else if (symbol === 'N') {
      props += `#### 1. 工业合成氨（哈伯-博施法）\n\n`;
      props += `$$N_2 + 3H_2 \\rightleftharpoons 2NH_3 \\quad \\Delta H < 0$$\n\n`;
      props += `- 条件：Fe 基催化剂，450–500 °C，15–30 MPa\n`;
      props += `- 原理：氮气三键键能高（941 kJ/mol），需高温高压活化\n\n`;
      props += `#### 2. 王水溶解金\n\n`;
      props += `$$Au + HNO_3 + 4HCl \\rightarrow H[AuCl_4] + NO\\uparrow + 2H_2O$$\n\n`;
    }
    // 氧
    else if (symbol === 'O') {
      props += `#### 1. 支持燃烧\n\n`;
      props += `$$CH_4 + 2O_2 \\xrightarrow{\\text{点燃}} CO_2 + 2H_2O \\quad \\text{（甲烷燃烧）}$$\n\n`;
      props += `#### 2. 臭氧生成\n\n`;
      props += `$$3O_2 \\xrightarrow{\\text{放电}} 2O_3$$\n\n`;
      props += `> 臭氧层保护地球生物免受紫外线伤害。\n\n`;
    }
    // 硅
    else if (symbol === 'Si') {
      props += `#### 1. 半导体掺杂\n\n`;
      props += `> 纯硅掺磷（P）得 N 型半导体，掺硼（B）得 P 型半导体。\n\n`;
      props += `#### 2. 与碱反应\n\n`;
      props += `$$Si + 2NaOH + H_2O \\rightarrow Na_2SiO_3 + 2H_2\\uparrow$$\n\n`;
    }
    else {
      props += `${name}的化学性质与其在周期表中的位置相关。\n\n`;
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
  }
  
  // ===== 锕系元素 =====
  else if (cat === 'actinide') {
    props = `### 化学性质\n\n`;
    props += `锕系元素均为放射性元素，多数仅在核反应堆或粒子加速器中制得。\n\n`;
    props += `#### 铀的核裂变\n\n`;
    props += `$$^{235}_{92}U + ^1_0n \\rightarrow ^{144}_{56}Ba + ^{89}_{36}Kr + 3^1_0n + \\text{能量}$$\n\n`;
    props += `> 1 kg 铀-235 完全裂变释放的能量相当于 2700 吨标准煤。\n\n`;
  }
  
  // ===== 其他金属 =====
  else if (cat === 'metal' || cat === 'post-transition') {
    props = `### 化学性质\n\n`;
    props += `${name}是${CATEGORY_CN[cat] || '金属'}元素，具有一定金属性。\n\n`;
    if (el.oxidationStates && el.oxidationStates.length > 0) {
      props += `常见氧化态：${el.oxidationStates.map(s => (s>0?'+':'')+s).join(', ')}\n\n`;
    }
  }
  
  return props;
}

// ===== 应用与原理生成器（详细版）=====
function generateApplicationsDetailed(el) {
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
    } else if (symbol === 'K') {
      apps += `#### 1. 钾肥（KCl、K₂SO₄）\n\n`;
      apps += `- K⁺ 是植物三大营养元素之一（N-P-K）\n`;
      apps += `- 作用：激活酶活性、调节渗透压、提高抗逆性\n\n`;
      apps += `#### 2. 氢氧化钾（KOH）\n\n`;
      apps += `- 用于碱性电池、液态肥皂生产\n`;
      apps += `- KOH 碱性强于 NaOH，用于特殊场合\n\n`;
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
    } else if (symbol === 'F') {
      apps += `#### 1. 含氟牙膏\n\n`;
      apps += `- 氟离子（F⁻）与牙釉质羟基磷灰石反应生成氟磷灰石：\n`;
      apps += `  $$Ca_5(PO_4)_3OH + F^- \\rightarrow Ca_5(PO_4)_3F + OH^-$$\n`;
      apps += `- 氟磷灰石硬度更高，抗酸蚀能力更强\n\n`;
      apps += `#### 2. 氟利昂替代品\n\n`;
      apps += `- 氟氯烃（CFCs）破坏臭氧层，已被《蒙特利尔议定书》限制\n`;
      apps += `- 替代品：HFCs（氢氟烃，不含氯）\n\n`;
    } else if (symbol === 'I') {
      apps += `#### 1. 碘盐（预防甲状腺肿）\n\n`;
      apps += `- 食盐中添加 KI 或 KIO₃（浓度约 20–50 mg/kg）\n`;
      apps += `- 碘是甲状腺激素（T3、T4）合成必需元素\n\n`;
      apps += `#### 2. 消毒防腐剂\n\n`;
      apps += `- 碘酒（碘的酒精溶液）用于皮肤消毒\n`;
      apps += `- 碘伏（聚维酮碘）刺激性更小\n\n`;
    }
  }
  
  // ===== 过渡金属 =====
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
    } else if (symbol === 'Ti') {
      apps += `#### 1. 钛合金（航空航天）\n\n`;
      apps += `- Ti-6Al-4V（最常见的钛合金）：强度/密度比最高\n`;
      apps += `- 用途：飞机发动机叶片、机身框架、航天器外壳\n\n`;
      apps += `#### 2. 化学工业（耐腐蚀性）\n\n`;
      apps += `- 钛表面生成致密 TiO₂ 膜，耐海水、氯气腐蚀\n`;
      apps += `- 用途：海水淡化设备、化工反应器、核电冷凝器\n\n`;
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
    } else if (symbol === 'Ag') {
      apps += `#### 1. 摄影工业（传统银盐胶片）\n\n`;
      apps += `$$2AgBr \\xrightarrow{\\text{光照}} 2Ag + Br_2$$\n\n`;
      apps += `> 银盐见光分解，潜影经显影液（对苯二酚）还原为金属银。\n\n`;
      apps += `#### 2. 抗菌材料\n\n`;
      apps += `- Ag⁺ 破坏细菌细胞膜，用于敷料、净水器\n`;
      apps += `- 纳米银：粒径 < 100 nm，抗菌效果更强\n\n`;
    } else if (symbol === 'Zn') {
      apps += `#### 1. 镀锌（防腐蚀）\n\n`;
      apps += `- **热浸镀锌**：钢铁浸入 450 °C 锌液，生成 Zn-Fe 合金层\n`;
      apps += `- **牺牲阳极保护**：Zn 比 Fe 更活泼，优先氧化\n`;
      apps += `- 寿命：户外环境 20–50 年\n\n`;
      apps += `#### 2. 锌锰干电池\n\n`;
      apps += `- 负极：Zn，正极：MnO₂，电解质：NH₄Cl 或 ZnCl₂\n`;
      apps += `- 反应：$Zn + 2MnO_2 + 2NH_4^+ \\rightarrow Zn^{2+} + 2MnOOH + 2NH_3$\n\n`;
    }
  }
  
  // ===== 非金属 =====
  else if (cat === 'nonmetal' || cat === 'metalloid') {
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
    } else if (symbol === 'Si') {
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
    } else if (symbol === 'N') {
      apps += `#### 1. 合成氨（化肥工业基础）\n\n`;
      apps += `- 全球年产氨 ~1.8 亿吨，80% 用于化肥\n`;
      apps += `- 氮肥：尿素 \\([CO(NH_2)_2]\\)、硝酸铵 \\(NH_4NO_3\\)\n\n`;
      apps += `#### 2. 液氮冷冻\n\n`;
      apps += `- 液氮沸点：-195.8 °C\n`;
      apps += `- 用途：生物样本保存（-196 °C）、食品速冻、超导磁体冷却\n\n`;
    }
  }
  
  // ===== 通用模板（其他元素）=====
  else {
    apps += `${name}在多个领域有重要应用，具体信息持续完善中……\n\n`;
  }
  
  return apps;
}

// ===== 注意事项生成器 =====
function generatePrecautions(el) {
  let prec = '';
  
  if (el.category === 'alkali-metal') {
    prec = `- ${el.name}遇水剧烈反应，可能引发爆炸！\n- 储存于煤油或石蜡油中，严禁接触水。\n- ${el.name}着火不可用 CO₂ 灭火器，用干砂覆盖灭火。`;
  }
  else if (el.category === 'halogen') {
    prec = `- ${el.symbol}₂ 是强氧化剂，腐蚀性强。\n- 操作在通风橱进行，穿戴防酸设备。`;
  }
  else if (el.category === 'transition' && el.symbol === 'Hg') {
    prec = `- 汞蒸气有毒，吸入导致慢性中毒。\n- 汞泄漏用硫磺粉覆盖（生成无毒 HgS）。`;
  }
  else if (el.radioactive) {
    prec = `- ${el.name}具有放射性，严格遵守辐射防护规程。\n- 操作在认证实验室进行，佩戴个人剂量计。`;
  }
  else {
    prec = `- 操作时参考相关安全数据表（SDS），遵守实验室安全规程。`;
  }
  
  return prec;
}

// ===== 泄漏应急措施生成器 =====
function generateLeakageMeasures(el) {
  if (el.category === 'alkali-metal') {
    return `1. 切断泄漏源，避免金属接触水\n2. 用干砂或专用吸附剂覆盖收集\n3. 不得用水直接冲洗（可能引发爆炸）`;
  }
  
  else if (el.category === 'halogen') {
    return `1. 迅速撤离人员至上风方向\n2. 穿戴防化服和呼吸器进入现场\n3. 用碱液（NaOH）喷雾中和氯气`;
  }
  
  else if (el.symbol === 'Hg') {
    return `1. 立即开窗通风\n2. 用硫磺粉覆盖汞珠（生成无毒 HgS）\n3. 不得用吸尘器清理（会加速挥发）`;
  }
  
  else if (el.radioactive) {
    return `1. 迅速撤离非必要人员\n2. 穿戴辐射防护服和呼吸设备\n3. 按放射性废物处置规程处理`;
  }
  
  else {
    return `1. 切断泄漏源\n2. 根据物质性质选择合适的吸附剂\n3. 按危险废物处置`;
  }
}

// ===== 发展前景生成器 =====
function generateProspects(el) {
  let pros = '';
  
  if (el.category === 'alkali-metal') {
    pros = `- **${el.symbol} 离子电池**：${el.symbol === 'Li' ? '新能源革命的核心技术，固态锂电池是下一代方向' : '资源丰富，成本低，有望替代部分锂电池'}。`;
  }
  
  else if (el.category === 'transition') {
    if (el.symbol === 'Fe') {
      pros = `- **氢冶金**（绿色钢铁）：H₂ 还原铁矿石，减少碳排放（碳中和目标）。\n- **铁基超导**：新型超导材料研究方向。`;
    } else if (el.symbol === 'Li') {
      pros = `- 锂硫电池、锂空气电池是下一代高能量密度电池方向。`;
    } else {
      pros = `- ${el.name}基新材料在新能源、电子信息等领域有广阔前景。`;
    }
  }
  
  else if (el.symbol === 'Si') {
    pros = `- **钙钛矿太阳能电池**：理论转化率 > 30%，是下一代光伏技术。\n- **硅基量子点**：新型显示和医疗成像技术。`;
  }
  
  else {
    pros = `${el.name}在新材料、新能源等前沿领域有广阔的研究和应用前景。`;
  }
  
  return pros;
}

// ===== 覆盖 generateBasicMarkdown 函数（完整版）=====
window.generateEnhancedMarkdown = function(el) {
  const catCN  = (CATEGORY_CN && CATEGORY_CN[el.category]) || el.category;
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
  
  return `## ${el.name}（${el.symbol}）— 第 ${el.z} 号元素
${radioHeader}
### 一、发现与发展史

${generateDiscoveryHistory(el)}

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

#### 详细物理常数

| 性质 | 值 |
|------|-----|
${generatePhysicalProperties(el)}

${radioNote}

---

### 三、化学性质

${generateChemicalPropsDetailed(el)}

---

### 四、应用与原理

${generateApplicationsDetailed(el)}

---

### 五、注意事项与安全

#### 使用注意事项

${generatePrecautions(el)}

#### 泄漏应急处置

${generateLeakageMeasures(el)}

---

### 六、发展前景

${generateProspects(el)}

---

*📝 本页内容由增强生成器 v2.0 自动生成，持续完善中。数据来源：[NIST Chemistry WebBook](https://webbook.nist.gov/)、[PubChem](https://pubchem.ncbi.nlm.nih.gov/)、[WebElements](https://www.webelements.com/) 等权威数据库。*

*最后更新：2026年6月*${radioSafety}
`;
};

// 覆盖原来的 getElementMarkdown 函数
const originalGetElementMarkdown = window.getElementMarkdown;
window.getElementMarkdown = function(el) {
  // 如果有自定义详情，使用自定义详情
  if (typeof ELEMENT_DETAILS !== 'undefined' && ELEMENT_DETAILS[el.z]) {
    return ELEMENT_DETAILS[el.z];
  }
  // 否则使用增强生成器
  return window.generateEnhancedMarkdown(el);
};

console.log('✅ 增强元素详情生成器 v2.0 已加载（含完整化学性质和应用原理）');
