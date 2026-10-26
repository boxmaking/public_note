/**
 * 元素重要化合物与衍生物知识库（增强版 v2）
 * 每个元素对应一个对象，包含该元素的重要化合物/衍生物列表
 *
 * 数据模型字段：
 *   nameZh            - 中文名称
 *   nameEn            - 英文名称
 *   formula           - 化学式（支持 HTML 下标，如 H₂O）
 *   type              - 类型：'单质'|'氧化物'|'酸'|'碱'|'盐'|'有机物'|'配合物'|'合金'|'其他'
 *   category          - 分类标签（可选）：如 '同素异形体'|'无机物'|'高分子' 等
 *   physProp          - 物理性质（字符串）
 *   chemProp          - 化学性质（字符串）
 *   background        - 发现/历史背景（字符串或数组，可选）
 *   mechanism         - 作用原理/反应机理（字符串数组，可选）
 *   apps              - 主要应用（数组，每项含 name + desc 字符串）
 *   safetyNote        - 安全注意事项（字符串或数组，可选）
 *   emergencyHandling - 危机处理/应急处置（字符串，可选）
 *   special           - 特殊说明/趣味知识（字符串或数组，可选）
 */
var COMPOUNDS_DATA = {};


COMPOUNDS_DATA['H'] = {
  summary: '氢是宇宙中最丰富的元素（占宇宙可见物质质量的 ~75%），其化合物涵盖水、酸、碱、有机物等几乎所有化学领域。氢能源被视为未来清洁能源的核心方向。',
  compounds: [
    {
      nameZh:'氢气', nameEn:'Hydrogen gas', formula:'H₂', type:'单质', category:'气体单质',
      physProp: '无色无味无臭气体，密度 0.0899 g/L（标准状况下最轻的气体），沸点 −252.87°C（20.28 K），熔点 −259.16°C，难溶于水（27°C 时溶解度仅 0.00016 g/100g 水）。',
      chemProp: '还原性极强（标准电极电势 E° = 0.00 V）；与 O₂ 混合点燃爆炸生成水（2H₂+O₂→2H₂O，ΔH = −571.6 kJ/mol）；在 Cl₂ 中安静燃烧生成 HCl；高温下可从金属氧化物中还原金属。',
      background: '1766 年 Henry Cavendish 首次确认氢为一种独立元素（此前被称为"易燃空气"）。1783 年 Antoine Lavoisier 命名为"Hydrogen"，希腊语意为"生成水之素"。',
      mechanism: [
        '燃烧反应：2H₂ + O₂ → 2H₂O + 热能（链式自由基机理，涉及 H· 和 OH· 自由基中间体）',
        'Haber 合成氨：N₂ + 3H₂ ⇌ 2NH₃（Fe 催化剂，400~500°C，15~25 MPa，放热可逆反应）',
        '燃料电池：H₂ → 2H⁺ + 2e⁻（阳极氧化）；½O₂ + 2H⁺ + 2e⁻ → H₂O（阴极还原），总反应产物仅为水'
      ],
      apps:[
        {name:'合成氨（Haber 工艺）',desc:'全球年产量超 1.8 亿吨氨，是氮肥工业的命脉，支撑全球约 50% 人口的食物供应'},
        {name:'氢氧焰焊接切割',desc:'氢氧焰温度可达 2800°C，用于高熔点金属（钨、石英）的焊接和切割'},
        {name:'火箭液体燃料',desc:'液氢+液氧推进系统比冲最高（ISP ≈ 455 s），用于航天飞机主发动机和长征五号'},
        {name:'氢燃料电池',desc:'质子交换膜燃料电池（PEMFC）效率达 60%，远超内燃机（~30%），丰田 Mirai、现代 NEXO 已量产'},
        {name:'冶炼保护气氛',desc:'氢气作为强还原性气氛，防止金属在热处理过程中被氧化'}
      ],
      safetyNote: [
        '氢气的爆炸极限极宽：4.0%~75.6%（体积比）——这意味着即使空气中只有少量氢气也可能形成爆炸性混合物',
        '氢气泄漏时因密度小于空气而迅速上升聚集于天花板——检测器应安装在房间顶部而非地面',
        '液氢温度低至 −253°C，接触可导致严重冷灼伤（类似冻伤但更严重）',
        '高压储氢容器压力可达 35~70 MPa（350~700 atm），操作不当有物理爆炸风险'
      ],
      emergencyHandling: '泄漏处置：立即切断气源，加强通风，严禁明火和电器火花。人员撤离至上风向安全区。小火可用干粉/CO₂ 灭火器扑灭；大火需冷却周围容器防爆炸。吸入者移至新鲜空气处，必要时吸氧；冻伤者用温水（非热水）复温并就医。',
      special: '太阳的能量来源是核聚变：4¹H → ⁴He + 2e⁺ + 2νₑ + 能量（每秒将约 6 亿吨氢转化为氦）。如果人类能可控实现这一过程，海水中的氘（²H）足以供地球使用数十亿年。'
    },
    {
      nameZh:'水', nameEn:'Water', formula:'H₂O', type:'氧化物', category:'生命溶剂',
      physProp: '常温下无色透明液体，mp 0°C（标准大气压），bp 100°C，密度在 4°C 时最大（1.000 g/cm³），表面张力 72.8 mN/m（20°C），介电常数 78.36（25°C）——所有液体中最高之一。',
      chemProp: '两性极弱电解质（25°C 时 Kw = [H⁺][OH⁻] = 1.0×10⁻¹⁴）；可发生自偶电离（autoionization）：2H₂O ⇌ H₃O⁺ + OH⁻；典型质子性溶剂，分子间形成强氢键网络。',
      background: '水是人类文明起源的核心——所有已知生命形式都依赖水存在。地球表面约 71% 被水覆盖，但淡水资源仅占总水量 2.5%。水的异常性质（冰浮于水面、高比热容）对维持地球生态平衡至关重要。',
      mechanism: [
        '氢键网络：每个水分子平均与 4 个相邻分子形成氢键——这种三维网络赋予水高沸点、高比热容和高表面张力',
        '密度异常：冰中氢键呈规则四面体排列→较大空隙→密度 < 水（0.917 vs 1.000 g/cm³），故冰浮于水面——这一性质保护了水下生物在冬季不被冻结',
        '毛细现象：水在细管中上升（adhesion > cohesion），是植物根部向上输运水分的物理学基础'
      ],
      apps:[
        {name:'生命必需溶剂',desc:'人体约 60% 为水，参与营养运输、体温调节、废物排泄等几乎所有生理过程'},
        {name:'工业反应介质',desc:'超过 80% 的化学反应在水溶液中进行——水解、中和、沉淀、氧化还原等'},
        {name:'冷却剂',desc:'水的比热容 4.184 J/(g·K) 极高，广泛用于发电厂冷却循环、内燃机散热'},
        {name:'超导冷却',desc:'液态氦/氮冷却系统中水作为预冷介质；某些高温超导材料也用水冷却'},
        {name:'农业灌溉',desc:'全球农业用水占淡水取用量 ~70%（水稻种植耗水量最大）'}
      ],
      safetyNote: [
        '虽然水本身无毒，但"水中毒"（低钠血症）确实存在——短时间摄入过量水会稀释血液电解质，导致脑水肿甚至死亡',
        '热水/蒸汽烫伤是最常见的家庭烧伤类型之一（100°C 蒸汽释放潜热 ~2260 J/g，伤害远大于同质量沸水）',
        '水质安全：全球约 20 亿人饮用受粪便污染的水源，每年导致约 50 万例腹泻相关死亡'
      ],
      special: '水在太阳系中极为罕见——地球是目前唯一确认拥有稳定地表液态水的天体。火星曾有液态水（证据：河谷地貌、极地冰盖下的湖泊），木卫二欧罗巴和土卫二恩克拉多斯的冰壳下可能存在地下海洋。水的存在被认为是寻找外星生命的首要标志。'
    }
  ]
};



/* 2. 氦 (He, z=2) */
COMPOUNDS_DATA['He'] = {
  summary: '氦是惰性气体，化学性质极不活泼，在极高压力下可形成极少数化合物。',
  compounds: [
      {
        nameZh:'氦气',nameEn:'Helium',formula:'He',
        type:'单质',category:'惰性气体',
        physProp:'无色无味气体，沸点-269°C，是最难液化的气体，密度0.179g/L',chemProp:'极不活泼，几乎不与任何元素反应',
        apps:[{name:'低温制冷',desc:'液氦用于超导磁体冷却'},{name:'呼吸气体',desc:'深海潜水用氦氧混合气'},{name:'检漏',desc:'工业管道检漏示踪气体'}],safetyNote:'高压氦气有窒息风险，需在通风环境使用，液氦接触可致冷灼伤'
      },
      {
        nameZh:'氦化钠',nameEn:'Sodium helide',formula:'Na₂He',
        type:'其他',category:'稀有化合物',
        physProp:'理论预测的稳定化合物，在大于113GPa高压下存在',chemProp:'极端高压下形成的电子化合物，氦原子不参与共价键',
        apps:[{name:'高压物理',desc:'研究极端条件下的化学键'},{name:'理论研究',desc:'验证惰性气体成键理论'}],safetyNote:'仅在极端高压实验室条件下存在，无常规安全风险'
      }
  ]
};



/* 3. 锂 (Li, z=3) */
COMPOUNDS_DATA['Li'] = {
  summary: '锂是最轻的金属元素，用于锂电池和合金材料。',
  compounds: [
      {
        nameZh:'金属锂',nameEn:'Lithium metal',formula:'Li',
        type:'单质',category:'碱金属',
        physProp:'银白色软金属，密度0.534g/cm3，熔点180.5°C，是最轻的金属',chemProp:'极活泼，遇水剧烈反应放出H2，生成LiOH',
        apps:[{name:'锂电池',desc:'锂离子电池负极材料'},{name:'合金',desc:'与铝镁形成轻质合金'},{name:'医药',desc:'治疗躁郁症'}],safetyNote:'遇水剧烈反应有火灾风险，需保存在矿物油中'
      },
      {
        nameZh:'氢化锂',nameEn:'Lithium hydride',formula:'LiH',
        type:'盐',category:'离子氢化物',
        physProp:'白色晶体，密度0.78g/cm3，熔点688°C',chemProp:'强还原剂，遇水放出氢气',
        apps:[{name:'储氢材料',desc:'可作为氢气储存介质'},{name:'还原剂',desc:'有机合成中的还原剂'},{name:'核工业',desc:'用作屏蔽材料'}],safetyNote:'遇水剧烈反应放出H2，有火灾和腐蚀风险'
      },
      {
        nameZh:'碳酸锂',nameEn:'Lithium carbonate',formula:'Li₂CO₃',
        type:'盐',category:'碳酸盐',
        physProp:'白色粉末，微溶于水，熔点723°C',chemProp:'弱碱性，加热分解为Li2O和CO2',
        apps:[{name:'药物',desc:'治疗双相情感障碍'},{name:'陶瓷',desc:'用于陶瓷釉料'},{name:'电池',desc:'锂离子电池正极前驱体'}],safetyNote:'过量摄入有神经毒性和肾毒性'
      }
  ]
};



/* 4. 铍 (Be, z=4) */
COMPOUNDS_DATA['Be'] = {
  summary: '铍是轻质金属，有毒，主要用于航空航天合金。',
  compounds: [
      {
        nameZh:'氧化铍',nameEn:'Beryllium oxide',formula:'BeO',
        type:'氧化物',category:'两性氧化物',
        physProp:'白色粉末，熔点2578°C，导热性极好',chemProp:'两性氧化物，溶于酸和强碱',
        apps:[{name:'陶瓷',desc:'高导热陶瓷基板'},{name:'核反应堆',desc:'中子减速剂和反射层'}],safetyNote:'铍化合物有毒，吸入粉尘可致铍肺病，致癌'
      },
      {
        nameZh:'氯化铍',nameEn:'Beryllium chloride',formula:'BeCl₂',
        type:'盐',category:'氯化物',
        physProp:'白色固体，易潮解，溶于水',chemProp:'共价型卤化物，水溶液呈酸性',
        apps:[{name:'催化剂',desc:'有机合成Friedel-Crafts反应催化剂'},{name:'化学试剂',desc:'铍化学试剂'}],safetyNote:'剧毒，刺激皮肤和呼吸道，致癌'
      },
      {
        nameZh:'铍铜合金',nameEn:'Beryllium copper alloy',formula:'CuBe',
        type:'合金',category:'铜合金',
        physProp:'高强度高弹性合金，无磁性，耐腐蚀',chemProp:'时效硬化型合金，强度可达1400MPa',
        apps:[{name:'精密仪器',desc:'无火花工具'},{name:'电子',desc:'弹性接触件'},{name:'航空航天',desc:'高强度耐磨件'}],safetyNote:'加工粉尘有毒，需严格防护'
      }
  ]
};



/* 5. 硼 (B, z=5) */
COMPOUNDS_DATA['B'] = {
  summary: '硼是类金属元素，用于玻璃、陶瓷和半导体材料。',
  compounds: [
      {
        nameZh:'硼酸',nameEn:'Boric acid',formula:'H₃BO₃',
        type:'酸',category:'含氧酸',
        physProp:'白色鳞片状晶体，溶于水呈弱酸性，熔点170°C',chemProp:'弱酸(pKa=9.24)，加热脱水生成偏硼酸',
        apps:[{name:'消毒防腐',desc:'外用消毒剂'},{name:'玻璃',desc:'硼硅酸盐玻璃'},{name:'阻燃',desc:'纤维素材料阻燃剂'}],safetyNote:'低毒，大量摄入可致中毒，婴幼儿尤其敏感'
      },
      {
        nameZh:'硼砂',nameEn:'Borax',formula:'Na₂B₄O₇·₁₀H₂O',
        type:'盐',category:'硼酸盐',
        physProp:'无色透明晶体，易溶于热水',chemProp:'水解呈碱性，与酸反应生成硼酸',
        apps:[{name:'玻璃陶瓷',desc:'硼硅酸盐玻璃原料'},{name:'清洁剂',desc:'多功能清洁剂'},{name:'冶金',desc:'焊接助熔剂'}],safetyNote:'低毒但过量摄入有害，已禁用作食品添加剂'
      },
      {
        nameZh:'氮化硼',nameEn:'Boron nitride',formula:'BN',
        type:'其他',category:'先进材料',
        physProp:'白色粉末，有两种晶型：六方BN(白色石墨)和立方BN(超硬)',chemProp:'六方BN类似石墨层状结构，立方BN硬度仅次于金刚石',
        apps:[{name:'高温润滑',desc:'高温固体润滑剂'},{name:'散热',desc:'高导热绝缘填料'},{name:'切削工具',desc:'立方BN刀具'}],safetyNote:'安全低毒，粉尘吸入应防护'
      }
  ]
};



COMPOUNDS_DATA['C'] = {
  summary:'碳是有机化学的基础元素，能够形成的化合物种类超过 9000 万种（且仍在快速增长），远超所有其他元素的总和。碳原子独特的 sp/sp²/sp³ 杂化能力和自链接性（catenation，即 C-C 成键倾向）使其能够构建从简单分子（CH₄）到复杂生物大分子（DNA、蛋白质）再到先进材料（石墨烯、碳纳米管）的各类结构。',
  compounds:[
    /* ── 同素异形体（碳单质）── */
    {
      nameZh:'金刚石', nameEn:'Diamond', formula:'C(sp³)', type:'单质', category:'同素异形体',
      physProp: '纯品为无色透明的八面体晶体（天然金刚石常因含杂质呈黄、棕、粉等色），莫氏硬度 10（自然界最硬物质），熔点约 3550°C（高压下），密度 3.515 g/cm³，折射率 2.417（各向同性立方晶系），室温导热率 ~2200 W/(m·K)（天然材料中最高的导热体之一），带隙 5.47 eV（绝缘体/宽禁带半导体）。',
      chemProp: '每个碳原子以 sp³ 杂化与 4 个相邻碳原子形成正四面体结构，C-C σ 键键能高达 347 kJ/mol——这种三维共价网络赋予了金刚石极高的化学稳定性。常温下不与任何酸/碱/氧化剂反应（包括王水）。高温下可在纯 O₂ 中燃烧：C + O₂ → CO₂（ΔH = −393.5 kJ/mol）。',
      background: '金刚石一词源自古希腊语 "adamas"（意为"不可征服/不可驯服"）。公元前 3 世纪起在印度被发现和开采，长期被视为皇室专属珍宝。直到 1797 年 Smithson Tennant 才通过燃烧实验证明金刚石的成分就是纯碳——震惊科学界："如此坚硬美丽的宝石竟然和软绵绵的木炭是同一种东西！"',
      mechanism: [
        '硬度来源：sp³ 四面体共价网络——每个 C-C 键均为强 σ 键，三维空间均匀分布，外力无法找到"薄弱面"滑移（对比石墨层间弱范德华力）',
        'HPHT 合成法（1955 年 GE 公司）：石墨在 5~6 GPa（约 5 万大气压）和 1300~1600°C 下，以 Fe/Ni/Co 为触媒，转变为金刚石相——模拟了地球深处（150~200 km 深 mantle）的天然形成条件',
        'CVD 法（化学气相沉积）：CH₄/H₂ 混合气在微波等离子体中分解，碳原子沉积在衬底上逐层生长金刚石薄膜——可制备大面积多晶/单晶金刚石'
      ],
      apps: [
        {name:'珠宝首饰',desc:'钻石的折射率（2.417）和色散率（0.044）使其呈现璀璨"火彩"。4C 标准（Cut 切工、Color 颜色、Clarity 净度、Carat 克拉重量）决定价值。全球年销售额超 800 亿美元。'},
        {name:'切削/钻探工具',desc:'金刚石砂轮、金刚石车刀、PDC 复合片钻头——用于加工硬质合金、陶瓷、石材、玻璃等超硬材料。石油天然气钻井中 PCD 钻头寿命是普通钢齿钻头的 100 倍以上。'},
        {name:'散热材料',desc:'金刚石的热导率 (~2200 W/mK) 远超 Cu (~400 W/mK) 和 Al (~237 W/mK)，用于激光二极管、高功率芯片、GaN 功率器件的热沉（heat sink）。CVD 金刚石散热片已商业化。'},
        {name:'半导体/电子器件',desc:'掺杂硼（B）后的 p 型金刚石可用于高温/高辐射环境电子器件。金刚石中 NV 色心（氮-空位缺陷）是量子计算和量子传感的有力候选——可在室温下运行量子比特！'},
        {name:'光学窗口',desc:'金刚石从紫外到远红外的宽波段透光性使其成为高功率 CO₂ 激光器、同步辐射光束线的窗口材料和红外光谱仪的 ATR 晶体。'},
        {name:'医疗刀具',desc:'金刚石手术刀刃口半径可 < 10 nm（比钢刀锋利 100 倍以上），用于眼科（角膜切开）和神经外科精细手术——切口平滑、愈合快、疤痕小。'}
      ],
      safetyNote: [
        '金刚石粉尘吸入风险：研磨/抛光金刚石时产生的微细粉尘长期吸入可能导致肺部损伤（类似于矽肺）——需佩戴防尘口罩操作',
        'HPHT 合成设备的高压危险：合成金刚石的压力腔工作在 5~7 万 atm——一旦密封失效后果不堪设想',
        'CVD 合成中的有毒气体：甲烷/氢气等离子体可能泄漏；CO 气体副产物有剧毒'
      ],
      emergencyHandling: '粉尘吸入：移至新鲜空气处，如呼吸困难就医。高压设备事故：紧急泄压后检查是否有碎片嵌入伤者体内，全面医学评估。CVD 毒气泄漏：关闭气源，强力通风，人员撤离至安全区。',
      special: '金刚石不是地球上"最硬"的物质了——2005 年德国科学家合成的蓝丝黛尔石（Lonsdaleite，六方金刚石）理论硬度比普通立方金刚石高 58%；2017 年发现的 nanotwin 金刚石（孪晶金刚石）硬度更是达到普通金刚石的 2 倍。'
    },

    /* ── 碳氧化物 ── */
    {
      nameZh:'一氧化碳', nameEn:'Carbon monoxide', formula:'CO', type:'氧化物', category:'有毒气体',
      physProp: '无色无味无臭的有毒气体（这正是其危险之处——无法凭感官察觉），mp −191.5°C，bp −191.5°C，密度 1.250 kg/m³（略轻于空气）。难溶于水（25°C 时溶解度仅 0.0026 g/100 mL）——故不能用湿法吸收除去。',
      chemProp: 'CO 中 C 以 sp 杂化，含一个 σ 键 + 两个 π 键 + 一个配位键（C≡O:），键级为 3。配位键使 C 带部分负电荷→CO 具有强配位能力（与血红素 Fe²⁺ 配位即源于此）。可燃：2CO + O₂ → 2CO₂（蓝色火焰）。是重要的还原剂和羰基化试剂。',
      background: '古代已知"煤烟毒气"的存在，但直到 1776 年法国化学家 de Lassone 才首次通过加热氧化锌与碳的混合物制得 CO 并将其误认为"氢气"。1800 年 William Cruickshank 确认 CO 是一种独立的碳氧化物化合物。CO 是城市大气中最大量的有毒污染物之一。',
      mechanism: [
        '中毒机理：CO 与血红蛋白（Hb）中 Fe²⁺ 的亲和力约为 O₂ 的 230~270 倍→形成碳氧血红蛋白（HbCO）→Hb 丧失携氧能力→组织缺氧→细胞窒息死亡',
        'HbCO 形成不仅减少了可用 Hb，还增加了剩余 Hb 对 O₂ 的亲和力（变构效应 Bohr effect 逆转）→氧释放困难→缺氧雪上加霜',
        '炼铁还原：Fe₂O₃ + 3CO → 2Fe + 3CO₂（高炉核心反应——现代钢铁工业的根基）'
      ],
      apps: [
        {name:'高炉炼铁',desc:'CO 作为主要还原剂将铁矿石还原为铁水——全球每年消耗焦炭/煤粉产生的 CO 还原剂超过 10 亿吨对应的铁产量。'},
        {name:'合成气原料',desc:'CO + H₂ 混合气（syngas）经 Fischer-Tropsch 合成可制取液态烃类燃料、甲醇等化学品。'},
        {name:'羰基化学',desc:'CO 参与的羰基化反应是有机合成的重要方法——用于生产乙酸（Monsanto 工艺，年产能 >500 万吨）、丙醛/丁醇等。'},
        {name:'燃料电池燃料',desc:'直接 CO 燃料电池可将 CO 的化学能转化为电能——但 CO 易毒化 Pt 催化剂。'}
      ],
      safetyNote: [
        'CO 中毒的隐蔽性：无色无味无臭，受害者往往不知不觉中失去意识→被称为"隐形杀手"',
        '危险浓度阈值：50 ppm 允许 8 小时暴露；200 ppm 轻度头痛；800 ppm 眩晕/恶心/痉挛；12800 ppm 1~3 分钟内死亡',
        '高危场景：燃气热水器不完全燃烧、炭火取暖（密闭空间）、汽车怠速开空调（车库内）、火灾现场烟气',
        '慢性低剂量暴露也会造成损害：心血管疾病风险增加、认知功能下降、胎儿发育受损'
      ],
      emergencyHandling: '立即将患者移至新鲜空气处（注意施救者自身防护）。解开衣领保持呼吸道通畅。呼叫急救电话。轻度中毒者吸氧后可恢复；重度中毒者需高压氧治疗（hyperbaric oxygen therapy, HBO）——在 2~3 atm 纯氧环境下 CO 半衰期从 240~320 min 缩短至 20~80 min。预防措施：安装 CO 报警器（家用必备）。',
      special: '人体内也会产生少量 CO——血红素降解过程中由血红素加氧酶（HO）催化产生，生理浓度 < 0.5 ppm。CO 在体内还充当信号分子（类似 NO），参与血管舒张和神经传递调节。全球每年约有 5~10 万人死于 CO 中毒——其中大部分是可以预防的非故意中毒事件。'
    },
    {
      nameZh:'二氧化碳', nameEn:'Carbon dioxide', formula:'CO₂', type:'氧化物', category:'温室气体',
      physProp: '常温常压下为无色无味气体，mp −78.5°C（升华），密度 1.98 kg/m³（约为空气的 1.5 倍→下沉积累于低洼处可造成窒息）。临界温度 31.1°C（很易液化）。液态 CO₂ 快速膨胀可形成"干冰"（固态 CO₂，mp −78.5°C）。',
      chemProp: '线性分子 O=C=O（D∞h 对称群），C sp 杂化。溶于水生成弱碳酸（H₂CO₃，pKa₁ = 6.35）。光合作用的碳来源（卡尔文循环固定 CO₂ 为葡萄糖）。不助燃（镁等活泼金属除外）。',
      background: '1640s 由 Flemish 科学家 Jan Baptist van Helmont 发现。1756 年 Joseph Black 正式确认为独特气体。CO₂ 是地球碳循环的核心——大气 CO₂ 从工业革命前的 ~280 ppm 升至 2024 年的 ~424 ppm（增长 51%），是全球气候变化的首要驱动因素。',
      mechanism: [
        '温室效应机制：CO₂ 分子吸收地球表面发出的红外辐射（波长 ~15 μm）→分子激发后将能量各向同性重新辐射→其中一部分返回地表→地表温度升高',
        '光合作用固定（卡尔文循环）：RuBP + CO₂ →（Rubisco 酶催化）→ 2 分子 3-PGA → 经一系列反应再生 RuBP 并产出糖类',
        '干冰制冷原理：固态 CO₂ 直接升华为气体→升华潜热 571 kJ/kg→吸收大量热量→制冷效果'
      ],
      apps: [
        {name:'碳酸饮料',desc:'CO₂ 在 ~4 atm 压力下溶解于水中→打开瓶盖降压→CO₂ 过饱和析出→气泡（Henry 定律）。可乐/啤酒中的"杀口感"即来自 CO₂ 刺激口腔感受器。'},
        {name:'干冰制冷剂',desc:'用于食品冷链运输（−78.5°C）、舞台烟雾效果、工业冷冻/清洗。'},
        {name:'灭火',desc:'CO₂ 密度大于空气→覆盖燃烧物隔绝 O₂→窒息灭火。适用于电气/油类火灾。不适用于 Mg/Al/Na 火灾（这些金属可从 CO₂ 中夺 O₂ 燃烧）。'},
        {name:'超临界流体萃取(SFE)',desc:'超临界 CO₂（scCO₂）兼具气体扩散性和液体溶解力→用于咖啡脱因、香料提取、药物纯化。环保优势：无溶剂残留。'},
        {name:'CCUS 碳捕集',desc:'从工业废气中捕集 CO₂→压缩注入 depleted 油田/深部咸水层封存——减缓气候变化的关键技术路径。'}
      ],
      safetyNote: [
        '窒息危险：CO₂ 密度大于空气，会在低洼/密闭空间底部积累→浓度 > 5% 头晕/意识模糊；> 8% 数分钟内致命',
        '干冰冻伤：干冰温度 −78.5°C，裸手接触可瞬间造成严重冻伤——必须使用隔热手套',
        '密闭空间使用干冰需格外小心：1 kg 干冰可产生约 540 L CO₂ 气体→小车内放置几公斤干冰足以使人窒息死亡'
      ],
      emergencyHandling: '窒息：立即转移至新鲜空气处，给予氧气。如呼吸停止立即 CPR。干冰冻伤：切勿揉搓，用温水（38~40°C）复温，不要用热水或火烤。严重冻伤需立即就医。',
      special: '金星的大气层由 96.5% CO₂ 组成→表面温室效应失控→表面温度 465°C（足以熔化铅）——这是温室效应失控的最极端例证。若没有 CO₂ 和其他温室气体，地球平均表面温度将为 −18°C（而非现在的 +15°C）——问题不在于 CO₂ 本身"有害"，而在于其浓度变化太快。'
    },

    /* ── 有机化合物代表 ── */
    {
      nameZh:'甲烷', nameEn:'Methane', formula:'CH₄', type:'有机物', category:'烷烃/天然气主成分',
      physProp: '无色无味气体（天然气臭味来自人为添加的硫醇警示剂），mp −182.5°C，bp −161.6°C，密度 0.656 kg/m³（远轻于空气）。极难溶于水。是天然气的主要成分（75~97%）。',
      chemProp: 'C 以 sp³ 杂化，正四面体结构（Td 对称）。可燃：CH₄ + 2O₂ → CO₂ + 2H₂O（燃烧热 ΔHc = −890 kJ/mol）。可与 Cl₂ 光照自由基取代。',
      background: '1778 年 Alessandro Volta 首次从沼泽气体中分离出 CH₄（"沼气"）。1857 年法国 Bessemer 首次将天然气用于照明/烹饪。',
      mechanism: [
        '燃烧链式反应（自由基机理）：CH₄ →(热解离) CH₃· + H· → H· + O₂ → HO₂· → … → 最终产物 CO₂ + H₂O + 大量热',
        '蒸汽重整制氢：CH₄ + H₂O → CO + 3H₂O（Ni 催化剂，700~1100°C）——工业制氢最主要的路线（~48% 全球 H₂ 来自此法）'
      ],
      apps: [
        {name:'天然气燃料',desc:'全球年消费量超 4 万亿 m³。相比煤炭 CO₂ 排放减少 40~50%，SOx/颗粒物近乎零——化石能源中最清洁的选择。'},
        {name:'化工原料',desc:'经蒸汽重整→合成氨→氮肥；经氧化→甲醇→甲醛/醋酸；经氯化→有机硅——化工行业三大基石之一。'},
        {name:'燃料电池',desc:'固体氧化物燃料电池（SOFC）可直接使用 CH₄ 作燃料，发电效率 60%+'}
      ],
      safetyNote: [
        '爆炸极限：5~15%（空气中体积比）——天然气的实际范围更宽（~4.4%~16%）',
        'GWP₂₀ = 82~86（短期暖化效应是 CO₂ 的 82~86 倍）',
        '煤矿瓦斯爆炸：CH₄ 是煤矿瓦斯主要成分——浓度 5~16% 时遇火源即可爆炸'
      ],
      emergencyHandling: '泄漏：关闭阀门，严禁明火/电器开关，开窗通风，人员撤离。火灾：关气源（如火势允许），小火用干粉/CO₂ 灭火器；大火冷却周边容器。',
      special: '"可燃冰"——海底/冻土层中 CH₄·nH₂O 包合物，1 m³ 可燃冰释放 ~164 m³ CH₄。全球储量估算相当于所有化石燃料储量之和的 2 倍以上。火星上检测到季节性 CH₄ 含量波动——可能的来源包括地质活动或生物代谢？'
    }
  ]
};



/* 7. 氮 (N, z=7) */
COMPOUNDS_DATA['N'] = {
  summary: '氮是空气主要成分(78%)，是生命必需元素和重要工业原料。',
  compounds: [
      {
        nameZh:'氮气',nameEn:'Nitrogen gas',formula:'N₂',
        type:'单质',category:'气体单质',
        physProp:'无色无味气体，沸点-196°C，密度1.251g/L',chemProp:'化学性质极稳定，N三键键能945kJ/mol',
        apps:[{name:'保护气',desc:'焊接和半导体制造的保护气氛'},{name:'液氮制冷',desc:'低温制冷剂'},{name:'食品保鲜',desc:'充氮包装'}],safetyNote:'液氮接触可致冻伤，密闭空间高浓度氮气有窒息风险'
      },
      {
        nameZh:'氨',nameEn:'Ammonia',formula:'NH₃',
        type:'其他',category:'氢化物',
        physProp:'无色有刺激性气体，沸点-33.3°C，易液化，极易溶于水',chemProp:'弱碱性，溶于水生成氨水NH3.H2O',
        apps:[{name:'化肥',desc:'合成氨制尿素硝酸铵'},{name:'制冷剂',desc:'吸收式制冷'},{name:'化工',desc:'制硝酸、肼等'}],safetyNote:'有刺激性，高浓度可致肺水肿，液氨可致冻伤和化学灼伤'
      },
      {
        nameZh:'硝酸',nameEn:'Nitric acid',formula:'HNO₃',
        type:'酸',category:'含氧酸',
        physProp:'无色液体(发黄因含NO2)，密度1.51g/cm3，沸点83°C',chemProp:'强酸强氧化性，与金属反应生成NO或NO2',
        apps:[{name:'化肥',desc:'制硝酸铵复合肥'},{name:'炸药',desc:'制TNT硝化甘油'},{name:'化工',desc:'尼龙前驱体己二酸'}],safetyNote:'强腐蚀性，可致严重化学灼伤，与有机物接触有爆炸风险'
      }
  ]
};



/* 8. 氧 (O, z=8) */
COMPOUNDS_DATA['O'] = {
  summary: '氧是地壳含量最高的元素(46%)，是生命必需元素。',
  compounds: [
      {
        nameZh:'氧气',nameEn:'Oxygen gas',formula:'O₂',
        type:'单质',category:'气体单质',
        physProp:'无色无味气体，沸点-183°C，密度1.429g/L',chemProp:'强氧化性，支持燃烧，与大多数元素反应生成氧化物',
        apps:[{name:'医疗',desc:'呼吸治疗和急救'},{name:'冶金',desc:'炼钢吹氧'},{name:'化工',desc:'氧化反应原料'}],safetyNote:'高浓度氧有火灾风险，液氧与有机物接触可爆炸'
      },
      {
        nameZh:'臭氧',nameEn:'Ozone',formula:'O₃',
        type:'单质',category:'同素异形体',
        physProp:'淡蓝色气体，有鱼腥味，沸点-112°C，不稳定',chemProp:'极强氧化性(电极电势2.07V)，可氧化大多数物质',
        apps:[{name:'消毒',desc:'饮用水和空气消毒'},{name:'漂白',desc:'纸浆纺织漂白'},{name:'工业',desc:'废水处理氧化剂'}],safetyNote:'强氧化性可损伤呼吸道，地面臭氧是光化学烟雾主要成分'
      }
  ]
};



/* 9. 氟 (F, z=9) */
COMPOUNDS_DATA['F'] = {
  summary: '氟是最活泼的非金属元素，用于含氟材料和医药。',
  compounds: [
      {
        nameZh:'氟气',nameEn:'Fluorine gas',formula:'F₂',
        type:'单质',category:'卤素单质',
        physProp:'淡黄色气体，沸点-188°C，剧毒',chemProp:'最强单质氧化剂(E=2.87V)，与几乎所有元素反应',
        apps:[{name:'核工业',desc:'UF6气体扩散法浓缩铀'},{name:'化工',desc:'制含氟塑料'},{name:'火箭',desc:'液体火箭氧化剂'}],safetyNote:'剧毒强腐蚀性，可致严重灼伤和肺水肿，极其危险'
      },
      {
        nameZh:'氟化氢',nameEn:'Hydrogen fluoride',formula:'HF',
        type:'酸',category:'氢卤酸',
        physProp:'无色液体/气体，沸点19.5°C，易溶于水',chemProp:'弱酸但极强腐蚀性，能腐蚀玻璃(SiO2+4HF->SiF4+2H2O)',
        apps:[{name:'氟化物',desc:'制含氟聚合物PTFE'},{name:'蚀刻',desc:'半导体硅片蚀刻'},{name:'冶金',desc:'铝电解助熔剂'}],safetyNote:'剧毒强腐蚀性，灼伤难以愈合，可致骨骼氟中毒和心脏骤停'
      },
      {
        nameZh:'氟化钙',nameEn:'Calcium fluoride',formula:'CaF₂',
        type:'盐',category:'卤化物',
        physProp:'白色晶体，熔点1418°C，难溶于水',chemProp:'离子晶体，溶于强酸生成HF',
        apps:[{name:'冶金',desc:'炼铝助熔剂'},{name:'光学',desc:'紫外红外透镜材料'},{name:'陶瓷',desc:'搪瓷组分'}],safetyNote:'低毒，但粉尘吸入有害，高温分解放出有毒HF'
      }
  ]
};



/* 10. 氖 (Ne, z=10) */
COMPOUNDS_DATA['Ne'] = {
  summary: '氖是惰性气体，化学性质极不活泼，未发现稳定化合物。',
  compounds: [
      {
        nameZh:'氖气',nameEn:'Neon gas',formula:'Ne',
        type:'单质',category:'惰性气体',
        physProp:'无色无味气体，沸点-246°C，密度0.900g/L',chemProp:'极不活泼，不形成任何已知稳定化合物',
        apps:[{name:'霓虹灯',desc:'放电发红橙色光'},{name:'激光',desc:'氦氖激光器'},{name:'半导体',desc:'离子注入掺杂'}],safetyNote:'低毒性，高浓度有窒息风险，需通风使用'
      }
  ]
};



/* 11. 钠 (Na, z=11) */
COMPOUNDS_DATA['Na'] = {
  summary: '钠是活泼碱金属，广泛用于化工和照明。',
  compounds: [
      {
        nameZh:'金属钠',nameEn:'Sodium metal',formula:'Na',
        type:'单质',category:'碱金属',
        physProp:'银白色软金属，密度0.968g/cm3，熔点97.8°C',chemProp:'极活泼，遇水剧烈反应放出H2和大量热',
        apps:[{name:'还原剂',desc:'冶炼钛锆等金属'},{name:'钠灯',desc:'高压钠灯照明'},{name:'冷却剂',desc:'核反应堆液钠冷却'}],safetyNote:'遇水剧烈反应可爆炸，需保存在矿物油或惰性气氛中'
      },
      {
        nameZh:'氢氧化钠',nameEn:'Sodium hydroxride',formula:'NaOH',
        type:'碱',category:'强碱',
        physProp:'白色固体，易潮解，溶于水放大量热',chemProp:'强碱，腐蚀性强，吸收CO2生成碳酸钠',
        apps:[{name:'化工',desc:'制肥皂造纸'},{name:'纺织',desc:'纤维处理'},{name:'水处理',desc:'pH调节'}],safetyNote:'强腐蚀性，可致严重化学灼伤，溅入眼内可致失明'
      },
      {
        nameZh:'氯化钠',nameEn:'Sodium chloride',formula:'NaCl',
        type:'盐',category:'氯化物',
        physProp:'无色透明晶体，熔点801°C，溶于水',chemProp:'离子晶体，水溶液中性',
        apps:[{name:'食盐',desc:'人类必需调味品和防腐剂'},{name:'化工',desc:'制氯碱和纯碱'},{name:'医疗',desc:'生理盐水'}],safetyNote:'高浓度摄入可致高血压，一般使用安全'
      }
  ]
};



/* 12. 镁 (Mg, z=12) */
COMPOUNDS_DATA['Mg'] = {
  summary: '镁是轻质金属，用于合金和生物体系。',
  compounds: [
      {
        nameZh:'金属镁',nameEn:'Magnesium metal',formula:'Mg',
        type:'单质',category:'碱土金属',
        physProp:'银白色金属，密度1.738g/cm3，熔点649°C',chemProp:'活泼金属，燃烧发出耀眼白光',
        apps:[{name:'合金',desc:'镁铝合金用于汽车航空'},{name:'烟花',desc:'照明弹焰火'},{name:'牺牲阳极',desc:'金属防腐蚀'}],safetyNote:'镁粉易燃易爆，燃烧温度高，火灾难扑灭'
      },
      {
        nameZh:'氧化镁',nameEn:'Magnesium oxide',formula:'MgO',
        type:'氧化物',category:'碱性氧化物',
        physProp:'白色粉末，熔点2852°C，高导热',chemProp:'碱性氧化物，难溶于水但溶于酸',
        apps:[{name:'耐火材料',desc:'高温炉衬材料'},{name:'建材',desc:'轻质镁水泥'},{name:'医药',desc:'抗酸剂和镁补充剂'}],safetyNote:'低毒，粉尘吸入刺激呼吸道'
      },
      {
        nameZh:'硫酸镁',nameEn:'Magnesium sulfate',formula:'MgSO₄',
        type:'盐',category:'硫酸盐',
        physProp:'白色晶体，易溶于水，味苦',chemProp:'水溶液中性，加热分解',
        apps:[{name:'医药',desc:'泻药和子痫治疗'},{name:'农业',desc:'镁肥'},{name:'化工',desc:'造纸鞣革'}],safetyNote:'过量口服可致腹泻和电解质紊乱'
      }
  ]
};



/* 13. 铝 (Al, z=13) */
COMPOUNDS_DATA['Al'] = {
  summary: '铝是地壳含量最高的金属，用于交通包装和电力。',
  compounds: [
      {
        nameZh:'金属铝',nameEn:'Aluminum metal',formula:'Al',
        type:'单质',category:'过渡后金属',
        physProp:'银白色金属，密度2.70g/cm3，熔点660°C',chemProp:'两性金属，溶于强酸和强碱',
        apps:[{name:'交通',desc:'汽车飞机结构件'},{name:'包装',desc:'铝罐铝箔'},{name:'电力',desc:'高压输电线'}],safetyNote:'粉末可燃，日常接触安全'
      },
      {
        nameZh:'氧化铝',nameEn:'Aluminum oxide',formula:'Al₂O₃',
        type:'氧化物',category:'两性氧化物',
        physProp:'白色晶体，熔点2072°C，硬度9(莫氏)',chemProp:'两性氧化物，溶于强酸和强碱',
        apps:[{name:'磨料',desc:'刚玉砂纸砂轮'},{name:'陶瓷',desc:'氧化铝陶瓷'},{name:'催化剂',desc:'催化裂化载体'}],safetyNote:'低毒，粉尘吸入可致铝肺病'
      },
      {
        nameZh:'氢氧化铝',nameEn:'Aluminum hydroxide',formula:'Al(OH)₃',
        type:'碱',category:'两性氢氧化物',
        physProp:'白色胶状沉淀，难溶于水',chemProp:'两性，溶于酸生成Al3+，溶于碱生成AlO2-',
        apps:[{name:'医药',desc:'抗酸药和胃药'},{name:'阻燃',desc:'塑料阻燃剂填料'},{name:'水处理',desc:'絮凝剂'}],safetyNote:'低毒，长期过量摄入可能影响神经系统'
      }
  ]
};



/* 14. 硅 (Si, z=14) */
COMPOUNDS_DATA['Si'] = {
  summary: '硅是地壳第二丰富元素，是半导体工业基础。',
  compounds: [
      {
        nameZh:'硅单质',nameEn:'Silicon',formula:'Si',
        type:'单质',category:'类金属',
        physProp:'灰黑色晶体，熔点1414°C，硬度7',chemProp:'半导体，带隙1.12eV，表面形成致密SiO2保护层',
        apps:[{name:'芯片',desc:'集成电路芯片'},{name:'太阳能',desc:'光伏电池'},{name:'合金',desc:'硅铁合金'}],safetyNote:'硅粉尘吸入可致矽肺病，加工需严格防护'
      },
      {
        nameZh:'二氧化硅',nameEn:'Silicon dioxide',formula:'SiO₂',
        type:'氧化物',category:'酸性氧化物',
        physProp:'无色透明晶体(石英)，熔点1713°C',chemProp:'酸性氧化物，与HF反应，与NaOH缓慢反应',
        apps:[{name:'玻璃',desc:'硅酸盐玻璃'},{name:'光纤',desc:'石英光纤'},{name:'电子',desc:'SiO2绝缘层'}],safetyNote:'硅尘吸入可致矽肺病，结晶SiO2为致癌物'
      },
      {
        nameZh:'硅酸',nameEn:'Silicic acid',formula:'H₂SiO₃',
        type:'酸',category:'含氧酸',
        physProp:'白色胶状沉淀，难溶于水',chemProp:'弱酸，加热脱水生成SiO2',
        apps:[{name:'干燥剂',desc:'硅胶干燥剂'},{name:'吸附剂',desc:'色谱填料'},{name:'医药',desc:'制酸剂'}],safetyNote:'安全无毒，广泛用作食品级干燥剂'
      }
  ]
};



/* 15. 磷 (P, z=15) */
COMPOUNDS_DATA['P'] = {
  summary: '磷是生命必需元素，用于化肥和阻燃剂。',
  compounds: [
      {
        nameZh:'白磷',nameEn:'White phosphorus',formula:'P₄',
        type:'单质',category:'同素异形体',
        physProp:'白色蜡状固体，熔点44°C，极毒，易自燃',chemProp:'极活泼，在空气中自燃，剧毒',
        apps:[{name:'军事',desc:'发烟弹和燃烧弹'},{name:'化工',desc:'制磷酸和含磷化学品'}],safetyNote:'剧毒(50mg致死)，自燃可致严重灼伤，极端危险'
      },
      {
        nameZh:'磷酸',nameEn:'Phosphoric acid',formula:'H₃PO₄',
        type:'酸',category:'含氧酸',
        physProp:'无色粘稠液体，熔点42°C，可与水任意比互溶',chemProp:'中等强酸，三元酸(pKa1=2.16)，具配位能力',
        apps:[{name:'化肥',desc:'磷肥过磷酸钙'},{name:'食品',desc:'酸味剂pH调节'},{name:'金属',desc:'磷酸盐转化涂层'}],safetyNote:'浓磷酸有腐蚀性，食品级低浓度安全'
      },
      {
        nameZh:'五氧化二磷',nameEn:'Phosphorus pentoxide',formula:'P₂O₅',
        type:'氧化物',category:'酸性氧化物',
        physProp:'白色粉末，极易吸潮，升华温度360°C',chemProp:'极强脱水性，与水剧烈反应生成磷酸',
        apps:[{name:'干燥剂',desc:'极强干燥剂'},{name:'脱水剂',desc:'有机合成脱水'},{name:'化工',desc:'制磷酸'}],safetyNote:'遇水剧烈放热，有腐蚀性，可致灼伤'
      }
  ]
};



/* 16. 硫 (S, z=16) */
COMPOUNDS_DATA['S'] = {
  summary: '硫是重要化工原料，用于硫酸和橡胶硫化。',
  compounds: [
      {
        nameZh:'硫单质',nameEn:'Sulfur',formula:'S',
        type:'单质',category:'非金属单质',
        physProp:'黄色固体，熔点115°C(单斜)，不溶于水',chemProp:'中等活泼，与金属反应生成硫化物，与O2燃烧生成SO2',
        apps:[{name:'硫酸',desc:'制硫酸原料'},{name:'橡胶',desc:'硫化交联'},{name:'医药',desc:'硫磺软膏治皮肤病'}],safetyNote:'低毒，粉尘可刺激呼吸道，燃烧产物SO2有毒'
      },
      {
        nameZh:'硫酸',nameEn:'Sulfuric acid',formula:'H₂SO₄',
        type:'酸',category:'含氧酸',
        physProp:'无色油状液体，密度1.84g/cm3，沸点337°C',chemProp:'强酸强氧化性，强脱水性，与水剧烈放热',
        apps:[{name:'化肥',desc:'磷肥生产'},{name:'化工',desc:'制各种化学品'},{name:'冶金',desc:'金属酸洗'},{name:'电池',desc:'铅酸电池'}],safetyNote:'强腐蚀性，遇水剧烈放热可飞溅，可致严重灼伤'
      },
      {
        nameZh:'二氧化硫',nameEn:'Sulfur dioxide',formula:'SO₂',
        type:'氧化物',category:'酸性氧化物',
        physProp:'无色有刺激性气体，沸点-10°C，易液化',chemProp:'酸性氧化物，还原性，溶于水生成亚硫酸',
        apps:[{name:'漂白',desc:'纸浆漂白剂'},{name:'防腐',desc:'食品防腐剂'},{name:'化工',desc:'制硫酸中间体'}],safetyNote:'有刺激性，可致呼吸道损伤，是酸雨主要来源'
      }
  ]
};



/* 17. 氯 (Cl, z=17) */
COMPOUNDS_DATA['Cl'] = {
  summary: '氯是重要化工原料，用于消毒和塑料。',
  compounds: [
      {
        nameZh:'氯气',nameEn:'Chlorine gas',formula:'Cl₂',
        type:'单质',category:'卤素单质',
        physProp:'黄绿色有刺激性气体，沸点-34°C，密度3.21g/L',chemProp:'强氧化性，与金属和非金属反应',
        apps:[{name:'消毒',desc:'自来水消毒'},{name:'化工',desc:'制PVC塑料和含氯化合物'},{name:'冶金',desc:'钛镁冶炼'}],safetyNote:'剧毒，可致肺水肿致死，一战曾用作化学武器'
      },
      {
        nameZh:'盐酸',nameEn:'Hydrochloric acid',formula:'HCl',
        type:'酸',category:'氢卤酸',
        physProp:'无色液体(浓盐酸36%)，易挥发冒白雾',chemProp:'强酸，无氧化性，能与活泼金属反应放出H2',
        apps:[{name:'化工',desc:'pH调节和离子交换树脂再生'},{name:'冶金',desc:'酸洗除锈'},{name:'食品',desc:'食品级水解'}],safetyNote:'强腐蚀性，挥发气体刺激呼吸道，可致灼伤'
      },
      {
        nameZh:'次氯酸钠',nameEn:'Sodium hypochlorite',formula:'NaClO',
        type:'盐',category:'次氯酸盐',
        physProp:'淡黄绿色液体，有氯气味，不稳定',chemProp:'强氧化性，遇酸放出氯气',
        apps:[{name:'漂白消毒',desc:'84消毒液'},{name:'水处理',desc:'泳池消毒'},{name:'纺织',desc:'漂白剂'}],safetyNote:'遇酸放出剧毒氯气，与氨水混合生成有毒氯胺'
      }
  ]
};



/* 18. 氩 (Ar, z=18) */
COMPOUNDS_DATA['Ar'] = {
  summary: '氩是空气中最丰富的惰性气体(0.93%)，用于保护气和照明。',
  compounds: [
      {
        nameZh:'氩气',nameEn:'Argon gas',formula:'Ar',
        type:'单质',category:'惰性气体',
        physProp:'无色无味气体，沸点-186°C，密度1.784g/L',chemProp:'极不活泼，不形成任何已知稳定化合物',
        apps:[{name:'保护气',desc:'焊接保护气和半导体制造'},{name:'照明',desc:'氩气灯填充'},{name:'保存',desc:'文物保存惰性气氛'}],safetyNote:'低毒性，密闭空间高浓度有窒息风险'
      }
  ]
};



/* 19. 钾 (K, z=19) */
COMPOUNDS_DATA['K'] = {
  summary: '钾是活泼碱金属，是生命必需元素，用于化肥。',
  compounds: [
      {
        nameZh:'金属钾',nameEn:'Potassium metal',formula:'K',
        type:'单质',category:'碱金属',
        physProp:'银白色软金属，密度0.862g/cm3，熔点63.4°C',chemProp:'极活泼，遇水剧烈反应放出H2并燃烧',
        apps:[{name:'合金',desc:'钠钾合金室温液态作导热剂'},{name:'科研',desc:'超氧化物制氧'}],safetyNote:'遇水剧烈反应可爆炸，比钠更危险，需保存在矿物油中'
      },
      {
        nameZh:'氢氧化钾',nameEn:'Potassium hydroxide',formula:'KOH',
        type:'碱',category:'强碱',
        physProp:'白色固体，易潮解，溶于水放大量热',chemProp:'强碱，腐蚀性强，吸收CO2生成碳酸钾',
        apps:[{name:'化工',desc:'制钾肥皂和钾盐'},{name:'电池',desc:'碱性电池电解质'},{name:'医药',desc:'钾补充剂'}],safetyNote:'强腐蚀性，可致严重灼伤，溅入眼内可致失明'
      },
      {
        nameZh:'硝酸钾',nameEn:'Potassium nitrate',formula:'KNO₃',
        type:'盐',category:'硝酸盐',
        physProp:'无色透明晶体，熔点334°C，溶于水',chemProp:'氧化性，加热分解放出氧气',
        apps:[{name:'火药',desc:'黑火药主要成分'},{name:'化肥',desc:'钾氮复合肥'},{name:'食品',desc:'腌肉护色剂'}],safetyNote:'氧化性，与有机物混合有爆炸风险，避免高温和明火'
      }
  ]
};



/* 20. 钙 (Ca, z=20) */
COMPOUNDS_DATA['Ca'] = {
  summary: '钙是碱土金属，是骨骼主要成分和重要建筑原料。',
  compounds: [
      {
        nameZh:'金属钙',nameEn:'Calcium metal',formula:'Ca',
        type:'单质',category:'碱土金属',
        physProp:'银白色金属，密度1.55g/cm3，熔点842°C',chemProp:'活泼金属，遇水反应放出H2',
        apps:[{name:'还原剂',desc:'冶金还原剂'},{name:'脱水剂',desc:'有机溶剂脱水'},{name:'电池',desc:'钙电池研发'}],safetyNote:'遇水反应放出H2，粉末有火灾风险'
      },
      {
        nameZh:'氧化钙',nameEn:'Calcium oxide',formula:'CaO',
        type:'氧化物',category:'碱性氧化物',
        physProp:'白色粉末，熔点2613°C，遇水放大量热',chemProp:'碱性氧化物，与水反应生成Ca(OH)2',
        apps:[{name:'建材',desc:'水泥和石灰'},{name:'冶金',desc:'炼铁造渣脱硫'},{name:'化工',desc:'制电石'}],safetyNote:'遇水剧烈放热可飞溅，有腐蚀性，刺激皮肤和眼睛'
      },
      {
        nameZh:'碳酸钙',nameEn:'Calcium carbonate',formula:'CaCO₃',
        type:'盐',category:'碳酸盐',
        physProp:'白色粉末，难溶于水，加热分解',chemProp:'与酸反应放出CO2，加热分解为CaO和CO2',
        apps:[{name:'建材',desc:'水泥石灰石'},{name:'填料',desc:'造纸塑料橡胶'},{name:'医药',desc:'补钙制剂和抗酸剂'}],safetyNote:'低毒，粉尘吸入刺激呼吸道'
      }
  ]
};



/* 21. 钪 (Sc, z=21) */
COMPOUNDS_DATA['Sc'] = {
  summary: '钪是稀有过渡金属，用于高强度合金和照明。',
  compounds: [
      {
        nameZh:'氧化钪',nameEn:'Scandium oxide',formula:'Sc₂O₃',
        type:'氧化物',category:'稀土氧化物',
        physProp:'白色粉末，熔点2485°C',chemProp:'两性氧化物，溶于酸生成钪盐',
        apps:[{name:'陶瓷',desc:'高性能陶瓷'},{name:'催化',desc:'石油裂化催化剂'},{name:'光源',desc:'钪钠灯发光材料'}],safetyNote:'低毒，粉尘吸入应防护'
      },
      {
        nameZh:'钪铝合金',nameEn:'Scandium-aluminum alloy',formula:'ScAl',
        type:'合金',category:'铝合金',
        physProp:'高强度轻质合金，焊接性好',chemProp:'钪添加细化晶粒，提高强度和耐热性',
        apps:[{name:'航空航天',desc:'战斗机和航天器结构'},{name:'体育',desc:'高档自行车棒球棒'}],safetyNote:'低毒，加工粉尘需防护'
      }
  ]
};



/* 22. 钛 (Ti, z=22) */
COMPOUNDS_DATA['Ti'] = {
  summary: '钛被称为"太空金属"，用于航空航天和医疗植入。',
  compounds: [
      {
        nameZh:'金属钛',nameEn:'Titanium metal',formula:'Ti',
        type:'单质',category:'过渡金属',
        physProp:'银白色金属，密度4.51g/cm3，熔点1668°C',chemProp:'耐腐蚀，表面形成致密TiO2钝化膜',
        apps:[{name:'航空航天',desc:'飞机发动机和航天器'},{name:'医疗',desc:'植入物和假体'},{name:'化工',desc:'耐腐蚀设备'}],safetyNote:'低毒，粉末可燃，加工需防爆'
      },
      {
        nameZh:'二氧化钛',nameEn:'Titanium dioxide',formula:'TiO₂',
        type:'氧化物',category:'两性氧化物',
        physProp:'白色粉末，熔点1843°C，折射率高',chemProp:'光催化活性，紫外光吸收',
        apps:[{name:'颜料',desc:'钛白粉白色颜料'},{name:'防晒',desc:'紫外线屏蔽剂'},{name:'光催化',desc:'自清洁材料'}],safetyNote:'低毒，纳米TiO2吸入可能有健康风险'
      },
      {
        nameZh:'四氯化钛',nameEn:'Titanium tetrachloride',formula:'TiCl₄',
        type:'盐',category:'卤化物',
        physProp:'无色液体，沸点136°C，在空气中发烟',chemProp:'遇水剧烈水解生成TiO2和HCl',
        apps:[{name:'冶金',desc:'克劳尔法炼钛中间体'},{name:'催化',desc:'齐格勒-纳塔催化剂组分'}],safetyNote:'遇水放出HCl烟雾，有腐蚀性和刺激性'
      }
  ]
};



/* 23. 钒 (V, z=23) */
COMPOUNDS_DATA['V'] = {
  summary: '钒用于高强度钢和氧化还原液流电池。',
  compounds: [
      {
        nameZh:'五氧化二钒',nameEn:'Vanadium pentoxide',formula:'V₂O₅',
        type:'氧化物',category:'酸性氧化物',
        physProp:'橙黄色粉末，熔点690°C，有毒',chemProp:'两性偏酸，强氧化性',
        apps:[{name:'催化',desc:'接触法制硫酸催化剂'},{name:'电池',desc:'钒液流电池'},{name:'陶瓷',desc:'釉料着色剂'}],safetyNote:'有毒，吸入粉尘可致钒肺病，刺激呼吸道'
      },
      {
        nameZh:'钒铁合金',nameEn:'Ferrovanadium',formula:'VFe',
        type:'合金',category:'铁合金',
        physProp:'灰黑色固体，含钒50-80%',chemProp:'提高钢的强度和韧性',
        apps:[{name:'钢铁',desc:'高强度低合金钢'},{name:'工具',desc:'高速工具钢'}],safetyNote:'低毒，粉末吸入有害'
      }
  ]
};



/* 24. 铬 (Cr, z=24) */
COMPOUNDS_DATA['Cr'] = {
  summary: '铬用于不锈钢、电镀和颜料。',
  compounds: [
      {
        nameZh:'金属铬',nameEn:'Chromium metal',formula:'Cr',
        type:'单质',category:'过渡金属',
        physProp:'银白色金属，密度7.19g/cm3，熔点1907°C',chemProp:'硬而耐腐蚀(莫氏9)，表面形成钝化膜',
        apps:[{name:'电镀',desc:'装饰性和硬铬电镀'},{name:'合金',desc:'不锈钢和超级合金'},{name:'耐火',desc:'耐火砖'}],safetyNote:'低毒，粉末可燃，六价铬化合物剧毒'
      },
      {
        nameZh:'三氧化铬',nameEn:'Chromium trioxide',formula:'CrO₃',
        type:'氧化物',category:'酸性氧化物',
        physProp:'红色晶体，易潮解，强氧化性',chemProp:'强氧化性，遇有机物可燃',
        apps:[{name:'电镀',desc:'镀铬液主要成分'},{name:'氧化剂',desc:'有机合成氧化剂'}],safetyNote:'剧毒强腐蚀性，致癌，遇有机物可着火'
      },
      {
        nameZh:'铬酸钾',nameEn:'Potassium chromate',formula:'K₂CrO₄',
        type:'盐',category:'铬酸盐',
        physProp:'黄色晶体，溶于水',chemProp:'氧化性，在酸性条件下转化为重铬酸根',
        apps:[{name:'颜料',desc:'黄色颜料和防锈漆'},{name:'分析',desc:'银定量指示剂'},{name:'皮革',desc:'鞣制剂'}],safetyNote:'有毒，六价铬致癌，避免接触和吸入'
      }
  ]
};



/* 25. 锰 (Mn, z=25) */
COMPOUNDS_DATA['Mn'] = {
  summary: '锰用于钢铁合金和电池。',
  compounds: [
      {
        nameZh:'金属锰',nameEn:'Manganese metal',formula:'Mn',
        type:'单质',category:'过渡金属',
        physProp:'灰白色金属，密度7.21g/cm3，熔点1246°C',chemProp:'活泼金属，在空气中氧化',
        apps:[{name:'钢铁',desc:'脱氧剂和合金添加剂'},{name:'铝合金',desc:'提高强度'},{name:'铜合金',desc:'高锰铝青铜'}],safetyNote:'粉尘吸入可致锰中毒(神经系统损伤)'
      },
      {
        nameZh:'二氧化锰',nameEn:'Manganese dioxide',formula:'MnO₂',
        type:'氧化物',category:'两性氧化物',
        physProp:'黑色粉末，不溶于水',chemProp:'氧化性，催化分解H2O2和KClO3',
        apps:[{name:'电池',desc:'干电池去极化剂'},{name:'催化',desc:'有机反应催化剂'},{name:'玻璃',desc:'脱色剂'}],safetyNote:'粉尘吸入有害，长期接触可致锰中毒'
      },
      {
        nameZh:'高锰酸钾',nameEn:'Potassium permanganate',formula:'KMnO₄',
        type:'盐',category:'高锰酸盐',
        physProp:'暗紫色晶体，溶于水呈紫红色',chemProp:'强氧化性，遇有机物或还原剂剧烈反应',
        apps:[{name:'消毒',desc:'皮肤和器械消毒'},{name:'水处理',desc:'除铁锰和消毒'},{name:'分析',desc:'氧化还原滴定'}],safetyNote:'强氧化性，遇有机物可燃，与浓硫酸混合可爆炸'
      }
  ]
};



/* 26. 铁 (Fe, z=26) */
COMPOUNDS_DATA['Fe'] = {
  summary: '铁是地壳第二丰富金属，是文明基石。',
  compounds: [
      {
        nameZh:'金属铁',nameEn:'Iron metal',formula:'Fe',
        type:'单质',category:'过渡金属',
        physProp:'银白色金属，密度7.87g/cm3，熔点1538°C',chemProp:'有铁磁性，潮湿空气中生锈',
        apps:[{name:'结构',desc:'钢材铸铁建筑和机械'},{name:'磁材',desc:'电磁铁芯'},{name:'催化',desc:'合成氨催化剂'}],safetyNote:'粉末可燃，粉尘有爆炸风险'
      },
      {
        nameZh:'氧化铁',nameEn:'Iron(III) oxide',formula:'Fe₂O₃',
        type:'氧化物',category:'碱性氧化物',
        physProp:'红棕色粉末，熔点1566°C',chemProp:'碱性氧化物，可被CO还原为铁',
        apps:[{name:'颜料',desc:'红色颜料和抛光剂'},{name:'冶金',desc:'铁矿石主要成分'},{name:'磁记录',desc:'磁带介质'}],safetyNote:'低毒，粉尘吸入刺激呼吸道'
      },
      {
        nameZh:'硫酸亚铁',nameEn:'Iron(II) sulfate',formula:'FeSO₄·₇H₂O',
        type:'盐',category:'硫酸盐',
        physProp:'蓝绿色晶体，易溶于水',chemProp:'还原性，在空气中氧化为Fe3+',
        apps:[{name:'医药',desc:'补铁剂治疗贫血'},{name:'水处理',desc:'絮凝剂除色'},{name:'农业',desc:'调节土壤pH'}],safetyNote:'低毒，过量摄入可致铁中毒'
      }
  ]
};



/* 27. 钴 (Co, z=27) */
COMPOUNDS_DATA['Co'] = {
  summary: '钴用于高温合金、电池和颜料。',
  compounds: [
      {
        nameZh:'金属钴',nameEn:'Cobalt metal',formula:'Co',
        type:'单质',category:'过渡金属',
        physProp:'银灰色金属，密度8.90g/cm3，熔点1495°C',chemProp:'铁磁性，耐腐蚀',
        apps:[{name:'合金',desc:'高温合金和硬质合金'},{name:'电池',desc:'锂离子电池正极'},{name:'磁材',desc:'永磁体'}],safetyNote:'粉尘吸入有害，可致钴肺病'
      },
      {
        nameZh:'氧化钴',nameEn:'Cobalt oxide',formula:'Co₂O₃',
        type:'氧化物',category:'过渡金属氧化物',
        physProp:'黑色粉末',chemProp:'氧化性，加热分解',
        apps:[{name:'颜料',desc:'陶瓷和玻璃蓝色颜料'},{name:'电池',desc:'锂离子电池正极材料'},{name:'催化',desc:'氧化催化剂'}],safetyNote:'粉尘吸入有害，可致钴肺病'
      },
      {
        nameZh:'氯化钴',nameEn:'Cobalt(II) chloride',formula:'CoCl₂',
        type:'盐',category:'氯化物',
        physProp:'蓝色晶体(无水)或粉红色(六水)，易溶于水',chemProp:'吸水变色(蓝->粉)，可作湿度指示剂',
        apps:[{name:'干燥剂',desc:'变色硅胶指示剂'},{name:'电镀',desc:'镀钴'},{name:'催化剂',desc:'有机合成'}],safetyNote:'有毒，长期接触可致甲状腺和心脏损伤'
      }
  ]
};



/* 28. 镍 (Ni, z=28) */
COMPOUNDS_DATA['Ni'] = {
  summary: '镍用于不锈钢、电镀和电池。',
  compounds: [
      {
        nameZh:'金属镍',nameEn:'Nickel metal',formula:'Ni',
        type:'单质',category:'过渡金属',
        physProp:'银白色金属，密度8.90g/cm3，熔点1455°C',chemProp:'铁磁性，耐腐蚀，可形成钝化膜',
        apps:[{name:'合金',desc:'不锈钢和镍基高温合金'},{name:'电镀',desc:'镀镍防腐'},{name:'电池',desc:'镍氢和镍镉电池'}],safetyNote:'金属镍低毒，可溶性镍盐致癌，镍过敏常见'
      },
      {
        nameZh:'硫酸镍',nameEn:'Nickel sulfate',formula:'NiSO₄·₆H₂O',
        type:'盐',category:'硫酸盐',
        physProp:'绿色晶体，易溶于水',chemProp:'水溶液呈酸性',
        apps:[{name:'电镀',desc:'镀镍电解液'},{name:'电池',desc:'镍电池电解质'},{name:'催化剂',desc:'镍催化剂前驱体'}],safetyNote:'有毒，致癌，可致皮肤过敏(镍皮炎)'
      },
      {
        nameZh:'羰基镍',nameEn:'Nickel carbonyl',formula:'Ni(CO)₄',
        type:'配合物',category:'金属羰基物',
        physProp:'无色液体，沸点43°C，剧毒',chemProp:'易分解为Ni和CO， Mond法炼镍',
        apps:[{name:'冶金',desc:'Mond法提纯镍'},{name:'催化',desc:'羰基化反应'}],safetyNote:'剧毒，致癌，致死量低，必须严格防护'
      }
  ]
};



/* 29. 铜 (Cu, z=29) */
COMPOUNDS_DATA['Cu'] = {
  summary: '铜是重要导电金属，用于电气和合金。',
  compounds: [
      {
        nameZh:'金属铜',nameEn:'Copper metal',formula:'Cu',
        type:'单质',category:'过渡金属',
        physProp:'紫红色金属，密度8.96g/cm3，熔点1085°C',chemProp:'优良导电导热性，耐腐蚀',
        apps:[{name:'电气',desc:'电线电缆和电路板'},{name:'管道',desc:'水管和散热器'},{name:'合金',desc:'青铜黄铜'}],safetyNote:'低毒，粉末可燃，铜盐对水生生物有毒'
      },
      {
        nameZh:'氧化铜',nameEn:'Copper(II) oxide',formula:'CuO',
        type:'氧化物',category:'碱性氧化物',
        physProp:'黑色粉末，熔点1326°C',chemProp:'碱性氧化物，可被H2或C还原',
        apps:[{name:'催化',desc:'有机反应催化剂'},{name:'陶瓷',desc:'釉料黑色颜料'},{name:'超导',desc:'铜氧化物超导体前驱体'}],safetyNote:'低毒，粉尘吸入有害，对水生生物有毒'
      },
      {
        nameZh:'硫酸铜',nameEn:'Copper(II) sulfate',formula:'CuSO₄·₅H₂O',
        type:'盐',category:'硫酸盐',
        physProp:'蓝色晶体(胆矾)，易溶于水',chemProp:'重金属盐，使蛋白质凝固',
        apps:[{name:'杀菌',desc:'波尔多液农药'},{name:'电镀',desc:'镀铜电解液'},{name:'分析',desc:'定量分析试剂'}],safetyNote:'有毒，误食可致肝肾损伤，对水生生物高毒'
      }
  ]
};



/* 30. 锌 (Zn, z=30) */
COMPOUNDS_DATA['Zn'] = {
  summary: '锌用于防腐镀层、电池和合金。',
  compounds: [
      {
        nameZh:'金属锌',nameEn:'Zinc metal',formula:'Zn',
        type:'单质',category:'过渡金属',
        physProp:'蓝白色金属，密度7.14g/cm3，熔点419.5°C',chemProp:'两性金属，溶于酸和强碱',
        apps:[{name:'防腐',desc:'镀锌钢铁'},{name:'电池',desc:'锌锰干电池'},{name:'合金',desc:'黄铜和锌铝合金'}],safetyNote:'低毒，粉尘可燃，氧化物烟尘可致金属烟热'
      },
      {
        nameZh:'氧化锌',nameEn:'Zinc oxide',formula:'ZnO',
        type:'氧化物',category:'两性氧化物',
        physProp:'白色粉末，熔点1975°C',chemProp:'两性氧化物，有光催化活性',
        apps:[{name:'橡胶',desc:'硫化活性剂'},{name:'防晒',desc:'紫外线吸收剂'},{name:'医药',desc:'氧化锌软膏'}],safetyNote:'低毒，纳米ZnO吸入可能有健康风险'
      },
      {
        nameZh:'氯化锌',nameEn:'Zinc chloride',formula:'ZnCl₂',
        type:'盐',category:'氯化物',
        physProp:'白色固体，易潮解，溶于水',chemProp:' Lewis酸性，浓溶液可溶解纤维素',
        apps:[{name:'焊接',desc:'焊锡助熔剂'},{name:'防腐',desc:'木材防腐剂'},{name:'电池',desc:'锌锰电池电解质'}],safetyNote:'有腐蚀性，可致皮肤和眼睛灼伤'
      }
  ]
};



/* 31. 镓 (Ga, z=31) */
COMPOUNDS_DATA['Ga'] = {
  summary: '镓是低熔点金属，用于半导体和LED。',
  compounds: [
      {
        nameZh:'金属镓',nameEn:'Gallium metal',formula:'Ga',
        type:'单质',category:'过渡后金属',
        physProp:'银白色金属，密度5.91g/cm3，熔点29.8°C(手心可融化)',chemProp:'两性金属，溶于酸和强碱',
        apps:[{name:'半导体',desc:'GaAs和GaN衬底'},{name:'合金',desc:'低熔点合金'},{name:'医疗',desc:'体温计替代汞'}],safetyNote:'低毒，但长期接触可能有健康风险'
      },
      {
        nameZh:'砷化镓',nameEn:'Gallium arsenide',formula:'GaAs',
        type:'其他',category:'半导体材料',
        physProp:'灰黑色晶体，带隙1.42eV',chemProp:'直接带隙半导体，光电效率高',
        apps:[{name:'LED',desc:'发光二极管'},{name:'太阳能',desc:'高效太阳能电池'},{name:'微波',desc:'高频器件'}],safetyNote:'砷化镓粉尘有毒，砷元素可致中毒和癌症'
      }
  ]
};



/* 32. 锗 (Ge, z=32) */
COMPOUNDS_DATA['Ge'] = {
  summary: '锗是早期半导体材料，用于光纤和红外光学。',
  compounds: [
      {
        nameZh:'金属锗',nameEn:'Germanium metal',formula:'Ge',
        type:'单质',category:'类金属',
        physProp:'灰白色金属，密度5.32g/cm3，熔点938°C',chemProp:'半导体，带隙0.67eV',
        apps:[{name:'光纤',desc:'光纤通信掺杂剂'},{name:'红外',desc:'红外透镜和窗口'},{name:'半导体',desc:'锗晶体管'}],safetyNote:'低毒，粉尘吸入有害'
      },
      {
        nameZh:'二氧化锗',nameEn:'Germanium dioxide',formula:'GeO₂',
        type:'氧化物',category:'两性氧化物',
        physProp:'白色粉末，熔点1116°C',chemProp:'两性氧化物，溶于酸和碱',
        apps:[{name:'光纤',desc:'光纤折射率调节'},{name:'催化',desc:'聚合催化剂'},{name:'医药',desc:'保健补充剂'}],safetyNote:'低毒，但长期过量摄入可能有肾脏损伤风险'
      }
  ]
};



/* 33. 砷 (As, z=33) */
COMPOUNDS_DATA['As'] = {
  summary: '砷是类金属，有毒，用于半导体和木材防腐。',
  compounds: [
      {
        nameZh:'三氧化二砷',nameEn:'Arsenic trioxide',formula:'As₂O₃',
        type:'氧化物',category:'两性氧化物',
        physProp:'白色粉末(砒霜)，熔点312°C，剧毒',chemProp:'两性偏酸，溶于酸和碱',
        apps:[{name:'医药',desc:'白血病治疗药物'},{name:'玻璃',desc:'脱色和澄清剂'},{name:'防腐',desc:'木材防腐(已限制使用)'}],safetyNote:'剧毒(致死量约0.1g)，致癌，急性中毒可致死'
      },
      {
        nameZh:'砷化镓',nameEn:'Gallium arsenide',formula:'GaAs',
        type:'其他',category:'半导体材料',
        physProp:'灰黑色晶体',chemProp:'直接带隙半导体',
        apps:[{name:'LED',desc:'发光二极管'},{name:'太阳能',desc:'高效太阳能电池'},{name:'微波',desc:'高频电子器件'}],safetyNote:'粉尘有毒，砷元素可致中毒和癌症'
      }
  ]
};



/* 34. 硒 (Se, z=34) */
COMPOUNDS_DATA['Se'] = {
  summary: '硒是类金属，用于玻璃、电子和保健品。',
  compounds: [
      {
        nameZh:'金属硒',nameEn:'Selenium',formula:'Se',
        type:'单质',category:'非金属单质',
        physProp:'灰色固体，熔点221°C，有毒',chemProp:'光导电性(光照下电导率增大)',
        apps:[{name:'电子',desc:'硒鼓复印机感光元件'},{name:'玻璃',desc:'玻璃脱色和着色'},{name:'冶金',desc:'锰和铜合金添加剂'}],safetyNote:'有毒，粉尘吸入可致硒中毒(脱发、指甲脱落)'
      },
      {
        nameZh:'二氧化硒',nameEn:'Selenium dioxide',formula:'SeO₂',
        type:'氧化物',category:'酸性氧化物',
        physProp:'白色晶体，易升华，有毒',chemProp:'酸性氧化物，氧化性',
        apps:[{name:'催化',desc:'有机合成氧化催化剂'},{name:'电解',desc:'锰电解添加剂'}],safetyNote:'剧毒，吸入粉尘可致严重硒中毒'
      }
  ]
};



/* 35. 溴 (Br, z=35) */
COMPOUNDS_DATA['Br'] = {
  summary: '溴是唯一常温液态的非金属，用于阻燃剂和消毒。',
  compounds: [
      {
        nameZh:'液溴',nameEn:'Bromine',formula:'Br₂',
        type:'单质',category:'卤素单质',
        physProp:'红棕色液体，密度3.12g/cm3，沸点59°C，有刺激性',chemProp:'强氧化性，与金属和非金属反应',
        apps:[{name:'阻燃',desc:'含溴阻燃剂'},{name:'消毒',desc:'水处理消毒剂'},{name:'医药',desc:'溴化物镇静剂'}],safetyNote:'剧毒强腐蚀性，蒸汽可致肺水肿，液体可致严重灼伤'
      },
      {
        nameZh:'溴化银',nameEn:'Silver bromide',formula:'AgBr',
        type:'盐',category:'卤化物',
        physProp:'淡黄色粉末，难溶于水',chemProp:'见光分解(AgBr->Ag+Br)，感光性',
        apps:[{name:'摄影',desc:'传统胶卷感光材料'}],safetyNote:'低毒，但银盐对水生生物有毒'
      }
  ]
};



/* 36. 氪 (Kr, z=36) */
COMPOUNDS_DATA['Kr'] = {
  summary: '氪是惰性气体，用于照明和激光。',
  compounds: [
      {
        nameZh:'氪气',nameEn:'Krypton gas',formula:'Kr',
        type:'单质',category:'惰性气体',
        physProp:'无色无味气体，沸点-153°C，密度3.749g/L',chemProp:'极不活泼，在放电条件下可形成少数化合物',
        apps:[{name:'照明',desc:'氪灯和荧光灯填充'},{name:'激光',desc:'氪氟准分子激光器'},{name:'窗户',desc:'隔热填充气体'}],safetyNote:'低毒性，高浓度有窒息风险'
      }
  ]
};



/* 37. 铷 (Rb, z=37) */
COMPOUNDS_DATA['Rb'] = {
  summary: '铷是活泼碱金属，用于原子钟和特种玻璃。',
  compounds: [
      {
        nameZh:'氯化铷',nameEn:'Rubidium chloride',formula:'RbCl',
        type:'盐',category:'氯化物',
        physProp:'白色晶体，易溶于水',chemProp:'离子化合物，水溶液中性',
        apps:[{name:'科研',desc:'铷原子钟和玻色-爱因斯坦凝聚'},{name:'医学',desc:'放射性示踪剂'},{name:'玻璃',desc:'特种玻璃添加剂'}],safetyNote:'低毒，但铷盐摄入过量可能干扰钾代谢'
      }
  ]
};



/* 38. 锶 (Sr, z=38) */
COMPOUNDS_DATA['Sr'] = {
  summary: '锶用于焰火、玻璃和磁性材料。',
  compounds: [
      {
        nameZh:'硝酸锶',nameEn:'Strontium nitrate',formula:'Sr(NO₃)₂',
        type:'盐',category:'硝酸盐',
        physProp:'白色晶体，易溶于水',chemProp:'氧化性，加热分解放出氧气',
        apps:[{name:'焰火',desc:'红色焰火着色剂'},{name:'信号弹',desc:'军事照明弹'},{name:'玻璃',desc:'显像管玻璃'}],safetyNote:'氧化性，与有机物混合可燃，粉尘吸入有害'
      },
      {
        nameZh:'碳酸锶',nameEn:'Strontium carbonate',formula:'SrCO₃',
        type:'盐',category:'碳酸盐',
        physProp:'白色粉末，难溶于水',chemProp:'加热分解为SrO和CO2',
        apps:[{name:'磁性材料',desc:'铁氧体永磁材料'},{name:'玻璃',desc:'提高折射率'},{name:'冶金',desc:'精炼脱铅'}],safetyNote:'低毒，粉尘吸入刺激呼吸道'
      }
  ]
};



/* 39. 钇 (Y, z=39) */
COMPOUNDS_DATA['Y'] = {
  summary: '钇用于激光晶体和超导体。',
  compounds: [
      {
        nameZh:'氧化钇',nameEn:'Yttrium oxide',formula:'Y₂O₃',
        type:'氧化物',category:'稀土氧化物',
        physProp:'白色粉末，熔点2410°C',chemProp:'碱性氧化物，溶于酸',
        apps:[{name:'激光',desc:'Nd:YAG激光晶体'},{name:'超导',desc:'钇钡铜氧高温超导体'},{name:'陶瓷',desc:'结构陶瓷稳定剂'}],safetyNote:'低毒，粉尘吸入应防护'
      },
      {
        nameZh:'钇铝石榴石',nameEn:'Yttrium aluminum garnet',formula:'Y₃Al₅O₁₂',
        type:'其他',category:'激光晶体',
        physProp:'无色透明晶体，硬度8.5',chemProp:'掺杂Nd3+后可作激光介质',
        apps:[{name:'激光',desc:'Nd:YAG固体激光器(工业加工和医疗)'},{name:'LED',desc:'白色LED荧光粉基底'}],safetyNote:'低毒，加工粉尘需防护'
      }
  ]
};



/* 40. 锆 (Zr, z=40) */
COMPOUNDS_DATA['Zr'] = {
  summary: '锆用于核反应堆、陶瓷和耐腐蚀设备。',
  compounds: [
      {
        nameZh:'二氧化锆',nameEn:'Zirconium dioxide',formula:'ZrO₂',
        type:'氧化物',category:'两性氧化物',
        physProp:'白色粉末，熔点2715°C，硬度高',chemProp:'两性氧化物，高温离子导电性',
        apps:[{name:'陶瓷',desc:'氧化锆结构陶瓷和刀具'},{name:'耐火',desc:'高温耐火材料'},{name:'牙齿',desc:'牙科陶瓷修复体'}],safetyNote:'低毒，粉尘吸入可刺激肺部'
      },
      {
        nameZh:'锆合金',nameEn:'Zircaloy',formula:'ZrSnFeCr',
        type:'合金',category:'锆合金',
        physProp:'银白色合金，低中子吸收截面',chemProp:'耐高温水腐蚀，核反应堆燃料包壳',
        apps:[{name:'核工业',desc:'核反应堆燃料包壳管'},{name:'化工',desc:'耐腐蚀设备'}],safetyNote:'低毒，粉末可燃'
      }
  ]
};



/* 41. 铌 (Nb, z=41) */
COMPOUNDS_DATA['Nb'] = {
  summary: '铌用于超导磁体和高温合金。',
  compounds: [
      {
        nameZh:'金属铌',nameEn:'Niobium metal',formula:'Nb',
        type:'单质',category:'过渡金属',
        physProp:'灰白色金属，密度8.57g/cm3，熔点2477°C',chemProp:'超导性(Tc=9.3K)，耐腐蚀',
        apps:[{name:'超导',desc:'超导磁体(NbTi和Nb3Sn)'},{name:'合金',desc:'高温合金和不锈钢'},{name:'医疗',desc:'植入物'}],safetyNote:'低毒，粉末可燃'
      },
      {
        nameZh:'铌酸锂',nameEn:'Lithium niobate',formula:'LiNbO₃',
        type:'其他',category:'光电晶体',
        physProp:'无色透明晶体，具有铁电性和压电性',chemProp:'非线性光学性质，电光效应显著',
        apps:[{name:'光通信',desc:'光调制器和波导'},{name:'激光',desc:'倍频和Q开关'},{name:'传感器',desc:'表面声波器件'}],safetyNote:'低毒，加工粉尘需防护'
      }
  ]
};



/* 42. 钼 (Mo, z=42) */
COMPOUNDS_DATA['Mo'] = {
  summary: '钼用于高强度合金和润滑剂。',
  compounds: [
      {
        nameZh:'金属钼',nameEn:'Molybdenum metal',formula:'Mo',
        type:'单质',category:'过渡金属',
        physProp:'银白色金属，密度10.28g/cm3，熔点2623°C',chemProp:'高熔点，耐腐蚀',
        apps:[{name:'合金',desc:'高强度低合金钢和高温合金'},{name:'电极',desc:'玻璃熔炉电极'},{name:'核燃料',desc:'烧结芯块'}],safetyNote:'低毒，粉末可燃，粉尘吸入有害'
      },
      {
        nameZh:'二硫化钼',nameEn:'Molybdenum disulfide',formula:'MoS₂',
        type:'其他',category:'层状材料',
        physProp:'黑色粉末，层状结构，类似石墨',chemProp:'层间弱范德华力，有自润滑性',
        apps:[{name:'润滑',desc:'高温固体润滑剂'},{name:'催化',desc:'加氢脱硫催化剂'},{name:'半导体',desc:'二维材料研究'}],safetyNote:'低毒，粉尘吸入应防护'
      }
  ]
};



/* 43. 锝 (Tc, z=43) */
COMPOUNDS_DATA['Tc'] = {
  summary: '锝是人工合成放射性元素，用于医学显像。',
  compounds: [
      {
        nameZh:'高锝酸盐',nameEn:'Pertechnetate',formula:'TcO₄-',
        type:'盐',category:'含氧酸盐',
        physProp:'放射性阴离子，半衰期6.01小时(99mTc)',chemProp:'氧化性，可被还原为低价锝化合物',
        apps:[{name:'医学显像',desc:'99mTc标记化合物用于SPECT显像(心肌、甲状腺、骨扫描)'},{name:'科研',desc:'放射性示踪剂'}],safetyNote:'放射性同位素，需在核医学科严格防护下使用，半衰期短需现配现用'
      }
  ]
};



/* 44. 钌 (Ru, z=44) */
COMPOUNDS_DATA['Ru'] = {
  summary: '钌用于电子和催化剂。',
  compounds: [
      {
        nameZh:'二氧化钌',nameEn:'Ruthenium dioxide',formula:'RuO₂',
        type:'氧化物',category:'过渡金属氧化物',
        physProp:'蓝黑色固体，导电性',chemProp:'氧化性，催化活性',
        apps:[{name:'电子',desc:'厚膜电阻浆料'},{name:'催化',desc:'电催化和光催化'},{name:'电极',desc:' dimensionally stable anode'}],safetyNote:'低毒，粉末吸入有害'
      }
  ]
};



/* 45. 铑 (Rh, z=45) */
COMPOUNDS_DATA['Rh'] = {
  summary: '铑用于催化剂和电镀。',
  compounds: [
      {
        nameZh:'金属铑',nameEn:'Rhodium metal',formula:'Rh',
        type:'单质',category:'过渡金属',
        physProp:'银白色金属，密度12.41g/cm3，熔点1964°C',chemProp:'极耐腐蚀，高反射率',
        apps:[{name:'催化',desc:'汽车尾气三元催化器'},{name:'电镀',desc:'装饰性镀铑'},{name:'合金',desc:'热电偶合金'}],safetyNote:'低毒，粉末可燃'
      }
  ]
};



/* 46. 钯 (Pd, z=46) */
COMPOUNDS_DATA['Pd'] = {
  summary: '钯是重要的催化剂和储氢材料。',
  compounds: [
      {
        nameZh:'金属钯',nameEn:'Palladium metal',formula:'Pd',
        type:'单质',category:'过渡金属',
        physProp:'银白色金属，密度12.02g/cm3，熔点1555°C',chemProp:'可吸收900倍体积的氢气',
        apps:[{name:'催化',desc:'汽车尾气和有机合成催化剂'},{name:'储氢',desc:'钯膜氢气纯化'},{name:'电子',desc:'MLCC电极'}],safetyNote:'低毒，粉末可燃'
      },
      {
        nameZh:'氯化钯',nameEn:'Palladium chloride',formula:'PdCl₂',
        type:'盐',category:'氯化物',
        physProp:'红棕色晶体，易潮解',chemProp:'催化活性，可被还原为钯黑',
        apps:[{name:'催化',desc:'钯催化剂前驱体(交叉偶联反应)'},{name:'电镀',desc:'镀钯'},{name:'传感',desc:'CO气体传感器'}],safetyNote:'有毒，粉尘吸入有害，可致过敏'
      }
  ]
};



/* 47. 银 (Ag, z=47) */
COMPOUNDS_DATA['Ag'] = {
  summary: '银是最好的导电金属，用于珠宝和电子。',
  compounds: [
      {
        nameZh:'金属银',nameEn:'Silver metal',formula:'Ag',
        type:'单质',category:'过渡金属',
        physProp:'银白色金属，密度10.49g/cm3，熔点962°C',chemProp:'最好导电导热性，稳定',
        apps:[{name:'珠宝',desc:'银饰和餐具'},{name:'电子',desc:'导电浆料和触点'},{name:'摄影',desc:'银盐感光材料'}],safetyNote:'低毒，但可溶性银盐有毒，可致银质沉着症'
      },
      {
        nameZh:'硝酸银',nameEn:'Silver nitrate',formula:'AgNO₃',
        type:'盐',category:'硝酸盐',
        physProp:'无色透明晶体，易溶于水',chemProp:'氧化性，遇有机物变黑(银镜反应)',
        apps:[{name:'医药',desc:'收敛腐蚀剂和消毒剂'},{name:'摄影',desc:'卤化银乳剂'},{name:'检测',desc:'氯离子检测'}],safetyNote:'有腐蚀性，可致皮肤和眼睛灼伤，遇有机物可还原变黑'
      }
  ]
};



/* 48. 镉 (Cd, z=48) */
COMPOUNDS_DATA['Cd'] = {
  summary: '镉有毒，用于电池和颜料。',
  compounds: [
      {
        nameZh:'金属镉',nameEn:'Cadmium metal',formula:'Cd',
        type:'单质',category:'过渡金属',
        physProp:'银白色金属，密度8.65g/cm3，熔点321°C',chemProp:'两性金属，有毒',
        apps:[{name:'电池',desc:'镍镉电池负极'},{name:'颜料',desc:'镉黄镉红颜料'},{name:'防腐',desc:'电镀防腐层'}],safetyNote:'剧毒，致癌，可致肾脏损伤和骨质疏松(痛痛病)'
      },
      {
        nameZh:'硫化镉',nameEn:'Cadmium sulfide',formula:'CdS',
        type:'其他',category:'半导体材料',
        physProp:'黄色或橙红色粉末，不溶于水',chemProp:'半导体，带隙2.42eV，光导电性',
        apps:[{name:'颜料',desc:'镉黄颜料'},{name:'太阳能',desc:'薄膜太阳能电池'},{name:'光检测',desc:'光电导器件'}],safetyNote:'有毒，致癌，粉尘吸入和摄入均有害'
      }
  ]
};



/* 49. 铟 (In, z=49) */
COMPOUNDS_DATA['In'] = {
  summary: '铟用于液晶屏和半导体。',
  compounds: [
      {
        nameZh:'氧化铟锡',nameEn:'Indium tin oxide',formula:'ITO',
        type:'其他',category:'透明导电氧化物',
        physProp:'透明导电薄膜，可见光透过率>85%',chemProp:'n型半导体，导电且透明',
        apps:[{name:'显示',desc:'LCD和OLED触摸屏电极'},{name:'太阳能',desc:'薄膜电池透明电极'},{name:'LED',desc:'透明电极'}],safetyNote:'低毒，但可溶性铟盐可能致肺部损伤(铟肺病)'
      }
  ]
};



/* 50. 锡 (Sn, z=50) */
COMPOUNDS_DATA['Sn'] = {
  summary: '锡用于焊料、镀层和合金。',
  compounds: [
      {
        nameZh:'金属锡',nameEn:'Tin metal',formula:'Sn',
        type:'单质',category:'过渡后金属',
        physProp:'银白色金属，密度7.31g/cm3，熔点232°C',chemProp:'有两种晶型:白锡(>13°C)和灰锡(<13°C)',
        apps:[{name:'焊料',desc:'电子锡铅焊料'},{name:'镀层',desc:'镀锡钢板'},{name:'合金',desc:'青铜和巴氏合金'}],safetyNote:'低毒，有机锡化合物有毒'
      },
      {
        nameZh:'二氧化锡',nameEn:'Tin dioxide',formula:'SnO₂',
        type:'氧化物',category:'两性氧化物',
        physProp:'白色粉末，熔点1630°C',chemProp:'n型半导体，气敏特性',
        apps:[{name:'气敏',desc:'CO和可燃气体传感器'},{name:'玻璃',desc:'导电玻璃涂层'},{name:'催化',desc:'氧化催化剂'}],safetyNote:'低毒，粉尘吸入有害'
      }
  ]
};



/* 51. 锑 (Sb, z=51) */
COMPOUNDS_DATA['Sb'] = {
  summary: '锑用于阻燃剂和合金。',
  compounds: [
      {
        nameZh:'三氧化二锑',nameEn:'Antimony trioxide',formula:'Sb₂O₃',
        type:'氧化物',category:'两性氧化物',
        physProp:'白色粉末，熔点656°C',chemProp:'两性氧化物，有阻燃协效作用',
        apps:[{name:'阻燃',desc:'塑料和纺织阻燃协效剂'},{name:'玻璃',desc:'澄清和脱色'},{name:'陶瓷',desc:'珐琅釉料'}],safetyNote:'有毒，致癌(吸入)，粉尘吸入有害'
      },
      {
        nameZh:'锑铅合金',nameEn:'Antimony-lead alloy',formula:'SbPb',
        type:'合金',category:'铅合金',
        physProp:'灰白色合金，硬度高于纯铅',chemProp:'锑提高铅的硬度和耐腐蚀性',
        apps:[{name:'蓄电池',desc:'铅酸电池板栅'},{name:'轴承',desc:'巴氏合金轴承'},{name:'弹药',desc:'弹头合金'}],safetyNote:'有毒，铅和锑均有健康风险'
      }
  ]
};



/* 52. 碲 (Te, z=52) */
COMPOUNDS_DATA['Te'] = {
  summary: '碲用于太阳能薄膜和热电材料。',
  compounds: [
      {
        nameZh:'碲化镉',nameEn:'Cadmium telluride',formula:'CdTe',
        type:'其他',category:'半导体材料',
        physProp:'黑色晶体，带隙1.45eV',chemProp:'直接带隙半导体，高效吸光',
        apps:[{name:'太阳能',desc:'薄膜太阳能电池(First Solar)'},{name:'红外',desc:'红外检测器'}],safetyNote:'有毒，镉和碲均有健康风险'
      },
      {
        nameZh:'二氧化碲',nameEn:'Tellurium dioxide',formula:'TeO₂',
        type:'氧化物',category:'两性氧化物',
        physProp:'白色粉末，熔点733°C',chemProp:'两性氧化物，非线性光学性质',
        apps:[{name:'光学',desc:'声光调制器'},{name:'催化',desc:'氧化催化剂'}],safetyNote:'低毒，但碲化合物摄入可致"大蒜味呼吸"'
      }
  ]
};



/* 53. 碘 (I, z=53) */
COMPOUNDS_DATA['I'] = {
  summary: '碘是生命必需微量元素，用于消毒和放射对比剂。',
  compounds: [
      {
        nameZh:'碘单质',nameEn:'Iodine',formula:'I₂',
        type:'单质',category:'卤素单质',
        physProp:'紫黑色片状晶体，易升华，蒸气紫色',chemProp:'中等氧化性，溶于KI溶液',
        apps:[{name:'消毒',desc:'碘伏和碘酒消毒剂'},{name:'医药',desc:'放射性碘治疗'},{name:'饲料',desc:'动物饲料添加剂'}],safetyNote:'低毒，但纯碘有腐蚀性，摄入过量可致甲状腺功能紊乱'
      },
      {
        nameZh:'碘化钾',nameEn:'Potassium iodide',formula:'KI',
        type:'盐',category:'碘化物',
        physProp:'白色晶体，易溶于水',chemProp:'还原性，可被氧化为I2',
        apps:[{name:'医药',desc:'补碘和甲状腺保护'},{name:'摄影',desc:'银碘化银乳剂'},{name:'分析',desc:'碘量法滴定'}],safetyNote:'低毒，过量摄入可致甲状腺功能异常'
      }
  ]
};



/* 54. 氙 (Xe, z=54) */
COMPOUNDS_DATA['Xe'] = {
  summary: '氙用于照明、麻醉和离子推进。',
  compounds: [
      {
        nameZh:'氙气',nameEn:'Xenon gas',formula:'Xe',
        type:'单质',category:'惰性气体',
        physProp:'无色无味气体，沸点-108°C，密度5.894g/L',chemProp:'极不活泼，但在电场中可形成少数化合物(如XeF2)',
        apps:[{name:'照明',desc:'氙灯(汽车HID和影院放映)'},{name:'麻醉',desc:'氙气麻醉剂'},{name:'航天',desc:'离子推进器推进剂'}],safetyNote:'低毒性，高浓度有窒息风险'
      },
      {
        nameZh:'六氟化氙',nameEn:'Xenon hexafluoride',formula:'XeF₆',
        type:'其他',category:'稀有气体化合物',
        physProp:'无色固体，强氧化性',chemProp:'强氧化性，遇水水解',
        apps:[{name:'科研',desc:'研究稀有气体化学'},{name:'氧化剂',desc:'特殊氧化反应'}],safetyNote:'强氧化性和腐蚀性，遇水放出有毒HF'
      }
  ]
};



/* 55. 铯 (Cs, z=55) */
COMPOUNDS_DATA['Cs'] = {
  summary: '铯用于原子钟和光电管。',
  compounds: [
      {
        nameZh:'金属铯',nameEn:'Cesium metal',formula:'Cs',
        type:'单质',category:'碱金属',
        physProp:'金黄色金属，密度1.93g/cm3，熔点28.5°C',chemProp:'极活泼(最活泼的稳定金属元素)，遇水爆炸',
        apps:[{name:'原子钟',desc:'铯原子钟(时间标准)'},{name:'光电',desc:'光电管阴极'},{name:'钻井',desc:'甲酸铯钻井液'}],safetyNote:'遇水剧烈爆炸，极端危险，需真空或惰性气氛保存'
      },
      {
        nameZh:'氯化铯',nameEn:'Cesium chloride',formula:'CsCl',
        type:'盐',category:'氯化物',
        physProp:'无色晶体，易溶于水',chemProp:'离子晶体，体心立方结构',
        apps:[{name:'科研',desc:'密度梯度离心分离DNA'},{name:'医药',desc:'放射性铯源'},{name:'光学',desc:'红外光学'}],safetyNote:'低毒，但放射性铯同位素极危险'
      }
  ]
};



/* 56. 钡 (Ba, z=56) */
COMPOUNDS_DATA['Ba'] = {
  summary: '钡用于医学造影和电子材料。',
  compounds: [
      {
        nameZh:'硫酸钡',nameEn:'Barium sulfate',formula:'BaSO₄',
        type:'盐',category:'硫酸盐',
        physProp:'白色粉末，极难溶于水',chemProp:'不溶于水和酸，阻挡X射线',
        apps:[{name:'医学',desc:'胃肠道X射线造影剂(钡餐)'},{name:'颜料',desc:'钡白颜料'},{name:'钻井',desc:'加重泥浆'}],safetyNote:'不溶性钡盐低毒，但可溶性钡盐剧毒'
      },
      {
        nameZh:'碳酸钡',nameEn:'Barium carbonate',formula:'BaCO₃',
        type:'盐',category:'碳酸盐',
        physProp:'白色粉末，难溶于水',chemProp:'溶于酸放出CO2，有毒',
        apps:[{name:'陶瓷',desc:'釉料和特种玻璃'},{name:'杀鼠',desc:'杀鼠剂'},{name:'电子',desc:'PTC热敏电阻'}],safetyNote:'有毒(致死量约1g)，可溶性钡盐可致低钾血症和心律失常'
      }
  ]
};



/* 57. 镧 (La, z=57) */
COMPOUNDS_DATA['La'] = {
  summary: '镧是镧系稀土元素，用于催化剂和光学材料。',
  compounds: [
      {
        nameZh:'氧化镧',nameEn:'Lanthanum oxide',formula:'La₂O₃',
        type:'氧化物',category:'稀土氧化物',
        physProp:'白色粉末，熔点2305°C',chemProp:'碱性氧化物，溶于酸生成镧盐',
        apps:[{name:'催化',desc:'石油裂化催化剂'},{name:'光学',desc:'高折射率镜头'},{name:'陶瓷',desc:'电容器陶瓷'}],safetyNote:'低毒，粉尘吸入应防护'
      },
      {
        nameZh:'氢氧化镧',nameEn:'Lanthanum hydroxide',formula:'La(OH)₃',
        type:'碱',category:'氢氧化物',
        physProp:'白色沉淀，难溶于水',chemProp:'碱性，溶于酸',
        apps:[{name:'水处理',desc:'除磷剂'},{name:'医药',desc:'高磷血症治疗'}],safetyNote:'低毒，粉尘吸入应防护'
      }
  ]
};



/* 58. 铈 (Ce, z=58) */
COMPOUNDS_DATA['Ce'] = {
  summary: '铈是稀土元素，用于催化剂和抛光粉。',
  compounds: [
      {
        nameZh:'二氧化铈',nameEn:'Cerium dioxide',formula:'CeO₂',
        type:'氧化物',category:'稀土氧化物',
        physProp:'淡黄色粉末，熔点2400°C',chemProp:'氧化还原活性(Ce3+/Ce4+)，储氧能力',
        apps:[{name:'抛光',desc:'精密光学和玻璃抛光粉'},{name:'催化',desc:'汽车尾气三效催化'},{name:'燃料',desc:'固体氧化物燃料电池电解质'}],safetyNote:'低毒，粉尘吸入应防护'
      },
      {
        nameZh:'硫酸铈',nameEn:'Cerium(IV) sulfate',formula:'Ce(SO₄)₂',
        type:'盐',category:'硫酸盐',
        physProp:'黄色晶体，溶于水',chemProp:'强氧化性(Ce4+/Ce3+ E=1.44V)',
        apps:[{name:'分析',desc:'氧化还原滴定定量分析'},{name:'催化',desc:'有机合成氧化催化剂'}],safetyNote:'有腐蚀性和刺激性，粉尘吸入有害'
      }
  ]
};



/* 59. 镨 (Pr, z=59) */
COMPOUNDS_DATA['Pr'] = {
  summary: '镨用于永磁体和玻璃着色。',
  compounds: [
      {
        nameZh:'氧化镨',nameEn:'Praseodymium oxide',formula:'Pr₆O₁₁',
        type:'氧化物',category:'稀土氧化物',
        physProp:'黑褐色粉末',chemProp:'混合价态(Pr3+/Pr4+)，溶于酸',
        apps:[{name:'磁性',desc:'钕铁硼磁体添加剂'},{name:'玻璃',desc:'绿色玻璃着色剂'},{name:'陶瓷',desc:'黄色陶瓷颜料'}],safetyNote:'低毒，粉尘吸入应防护'
      }
  ]
};



/* 60. 钕 (Nd, z=60) */
COMPOUNDS_DATA['Nd'] = {
  summary: '钕用于强永磁体和激光。',
  compounds: [
      {
        nameZh:'钕铁硼磁体',nameEn:'Neodymium magnet',formula:'Nd₂Fe₁₄B',
        type:'合金',category:'永磁材料',
        physProp:'最强永磁体，磁能积约50MGOe',chemProp:'高矫顽力和最大磁能积',
        apps:[{name:'电子',desc:'硬盘驱动器和耳机'},{name:'电机',desc:'电动汽车和风力发电机'},{name:'医疗',desc:'MRI磁体'}],safetyNote:'低毒，强磁性需远离电子设备，粉末可燃'
      },
      {
        nameZh:'氧化钕',nameEn:'Neodymium oxide',formula:'Nd₂O₃',
        type:'氧化物',category:'稀土氧化物',
        physProp:'浅蓝色粉末',chemProp:'碱性氧化物，溶于酸',
        apps:[{name:'玻璃',desc:'激光玻璃和着色'},{name:'陶瓷',desc:'电容器陶瓷'},{name:'催化',desc:'聚合催化剂'}],safetyNote:'低毒，粉尘吸入应防护'
      }
  ]
};



/* 61. 钷 (Pm, z=61) */
COMPOUNDS_DATA['Pm'] = {
  summary: '钷是放射性稀土元素，用于发光涂层。',
  compounds: [
      {
        nameZh:'钷-147',nameEn:'Promethium-147',formula:'Pm',
        type:'单质',category:'放射性元素',
        physProp:'半衰期2.62年，beta衰变',chemProp:'放射性，beta衰变',
        apps:[{name:'发光',desc:'夜光涂料和放射发光源(历史用途)'},{name:'电池',desc:'放射性同位素电池'},{name:'科研',desc:'核化学研究'}],safetyNote:'放射性，需防辐射防护，避免接触和吸入'
      }
  ]
};



/* 62. 钐 (Sm, z=62) */
COMPOUNDS_DATA['Sm'] = {
  summary: '钐用于永磁体和红外吸收。',
  compounds: [
      {
        nameZh:'钐钴磁体',nameEn:'Samarium-cobalt magnet',formula:'SmCo₅',
        type:'合金',category:'永磁材料',
        physProp:'银色磁体，磁能积约30MGOe',chemProp:'高矫顽力，耐高温',
        apps:[{name:'电机',desc:'航空航天高温电机'},{name:'传感器',desc:'高温磁性传感器'},{name:'微波',desc:'行波管'}],safetyNote:'低毒，粉末可燃'
      },
      {
        nameZh:'氧化钐',nameEn:'Samarium oxide',formula:'Sm₂O₃',
        type:'氧化物',category:'稀土氧化物',
        physProp:'淡黄色粉末',chemProp:'碱性氧化物，溶于酸',
        apps:[{name:'光学',desc:'红外吸收玻璃'},{name:'催化',desc:'有机反应催化剂'},{name:'陶瓷',desc:'结构陶瓷'}],safetyNote:'低毒，粉尘吸入应防护'
      }
  ]
};



/* 63. 铕 (Eu, z=63) */
COMPOUNDS_DATA['Eu'] = {
  summary: '铕是最活泼的稀土元素，用于荧光材料。',
  compounds: [
      {
        nameZh:'氧化铕',nameEn:'Europium oxide',formula:'Eu₂O₃',
        type:'氧化物',category:'稀土氧化物',
        physProp:'淡粉色粉末',chemProp:'Eu3+发红光(611nm)，Eu2+发蓝光',
        apps:[{name:'荧光',desc:'红色荧光粉(显示器和LED)'},{name:'防伪',desc:'欧元纸币荧光标记'},{name:'标记',desc:'生物荧光标记'}],safetyNote:'低毒，粉尘吸入应防护'
      },
      {
        nameZh:'铕激活荧光粉',nameEn:'Europium-activated phosphor',formula:'Y₂O₃:Eu₃+',
        type:'其他',category:'荧光材料',
        physProp:'红色荧光粉，发射波长611nm',chemProp:'紫外激发发红光',
        apps:[{name:'照明',desc:'三基色荧光灯红色组分'},{name:'显示',desc:'CRT和PDP显示屏'}],safetyNote:'低毒，粉尘吸入应防护'
      }
  ]
};



/* 64. 钆 (Gd, z=64) */
COMPOUNDS_DATA['Gd'] = {
  summary: '钆用于磁共振造影剂和核反应堆控制。',
  compounds: [
      {
        nameZh:'氧化钆',nameEn:'Gadolinium oxide',formula:'Gd₂O₃',
        type:'氧化物',category:'稀土氧化物',
        physProp:'白色粉末',chemProp:'高热中子吸收截面',
        apps:[{name:'核反应堆',desc:'中子吸收控制棒'},{name:'光学',desc:'闪烁晶体'},{name:'陶瓷',desc:'电容器陶瓷'}],safetyNote:'低毒，粉尘吸入应防护'
      },
      {
        nameZh:'钆喷酸葡胺',nameEn:'Gadopentetate dimeglumine',formula:'Gd-DTPA',
        type:'配合物',category:'MRI造影剂',
        physProp:'无色透明注射液',chemProp:'顺磁性，缩短T1弛豫时间',
        apps:[{name:'医学',desc:'MRI对比增强造影剂'}],safetyNote:'肾功能不全者有肾源性系统性纤维化风险'
      }
  ]
};



/* 65. 铽 (Tb, z=65) */
COMPOUNDS_DATA['Tb'] = {
  summary: '铽用于荧光粉和磁光材料。',
  compounds: [
      {
        nameZh:'氧化铽',nameEn:'Terbium oxide',formula:'Tb₄O₇',
        type:'氧化物',category:'稀土氧化物',
        physProp:'暗褐色粉末',chemProp:'混合价态(Tb3+/Tb4+)',
        apps:[{name:'荧光',desc:'绿色荧光粉(日光灯和LED)'},{name:'磁光',desc:'磁光存储材料'},{name:'声光',desc:'声光器件'}],safetyNote:'低毒，粉尘吸入应防护'
      }
  ]
};



/* 66. 镝 (Dy, z=66) */
COMPOUNDS_DATA['Dy'] = {
  summary: '镝用于高温永磁体和红外材料。',
  compounds: [
      {
        nameZh:'氧化镝',nameEn:'Dysprosium oxide',formula:'Dy₂O₃',
        type:'氧化物',category:'稀土氧化物',
        physProp:'白色粉末',chemProp:'高热中子吸收截面',
        apps:[{name:'磁性',desc:'钕铁硼磁体高温添加剂'},{name:'核反应堆',desc:'中子吸收'},{name:'陶瓷',desc:'介电陶瓷'}],safetyNote:'低毒，粉尘吸入应防护'
      }
  ]
};



/* 67. 钬 (Ho, z=67) */
COMPOUNDS_DATA['Ho'] = {
  summary: '钬用于激光和磁性材料。',
  compounds: [
      {
        nameZh:'氧化钬',nameEn:'Holmium oxide',formula:'Ho₂O₃',
        type:'氧化物',category:'稀土氧化物',
        physProp:'淡黄色粉末(依观察角度变色)',chemProp:'Ho3+有特征吸收峰',
        apps:[{name:'激光',desc:'Ho:YAG激光器(医疗碎石)'},{name:'玻璃',desc:'滤光玻璃'},{name:'校准',desc:'分光光度计校准'}],safetyNote:'低毒，粉尘吸入应防护'
      }
  ]
};



/* 68. 铒 (Er, z=68) */
COMPOUNDS_DATA['Er'] = {
  summary: '铒用于光纤放大器和激光。',
  compounds: [
      {
        nameZh:'氧化铒',nameEn:'Erbium oxide',formula:'Er₂O₃',
        type:'氧化物',category:'稀土氧化物',
        physProp:'粉色粉末',chemProp:'Er3+发射1.53微米光',
        apps:[{name:'光纤',desc:'掺铒光纤放大器(EDFA)'},{name:'激光',desc:'Er:YAG激光(皮肤和牙科)'},{name:'玻璃',desc:'粉红色玻璃'}],safetyNote:'低毒，粉尘吸入应防护'
      }
  ]
};



/* 69. 铥 (Tm, z=69) */
COMPOUNDS_DATA['Tm'] = {
  summary: '铥用于便携式X射线源和激光。',
  compounds: [
      {
        nameZh:'氧化铥',nameEn:'Thulium oxide',formula:'Tm₂O₃',
        type:'氧化物',category:'稀土氧化物',
        physProp:'绿色粉末',chemProp:'Tm3+近红外发射',
        apps:[{name:'激光',desc:'掺铥光纤激光器(手术切割)'},{name:'辐射',desc:'便携式X射线源(Tm-170)'},{name:'陶瓷',desc:'介电陶瓷'}],safetyNote:'低毒，粉尘吸入应防护'
      }
  ]
};



/* 70. 镱 (Yb, z=70) */
COMPOUNDS_DATA['Yb'] = {
  summary: '镱用于光纤激光和原子钟。',
  compounds: [
      {
        nameZh:'氧化镱',nameEn:'Ytterbium oxide',formula:'Yb₂O₃',
        type:'氧化物',category:'稀土氧化物',
        physProp:'白色粉末',chemProp:'Yb3+近红外发射(1.03微米)',
        apps:[{name:'激光',desc:'掺镱光纤激光器(高功率切割焊接)'},{name:'原子钟',desc:'镱光晶格钟'},{name:'陶瓷',desc:'热障涂层'}],safetyNote:'低毒，粉尘吸入应防护'
      }
  ]
};



/* 71. 镥 (Lu, z=71) */
COMPOUNDS_DATA['Lu'] = {
  summary: '镥是最后一个镧系元素，用于PET闪烁体。',
  compounds: [
      {
        nameZh:'硅酸镥',nameEn:'Lutetium oxyorthosilicate',formula:'Lu₂SiO₅:Ce',
        type:'其他',category:'闪烁晶体',
        physProp:'高密度闪烁晶体，快衰减时间',chemProp:'Ce3+激活，高效闪烁',
        apps:[{name:'医学',desc:'PET-CT探测器闪烁晶体'}],safetyNote:'低毒，粉尘吸入应防护'
      }
  ]
};



/* 72. 铪 (Hf, z=72) */
COMPOUNDS_DATA['Hf'] = {
  summary: '铪用于核反应堆控制棒和高温陶瓷。',
  compounds: [
      {
        nameZh:'二氧化铪',nameEn:'Hafnium dioxide',formula:'HfO₂',
        type:'氧化物',category:'两性氧化物',
        physProp:'白色粉末，熔点2900°C，高介电常数(约25)',chemProp:'高k介电材料，化学稳定性好',
        apps:[{name:'半导体',desc:'高k栅介质替代SiO2'},{name:'陶瓷',desc:'耐高温陶瓷'},{name:'光学',desc:'光学涂层'}],safetyNote:'低毒，粉尘吸入应防护'
      },
      {
        nameZh:'碳化铪',nameEn:'Hafnium carbide',formula:'HfC',
        type:'其他',category:'超高温陶瓷',
        physProp:'灰黑色固体，熔点约3900°C(最高熔点化合物之一)',chemProp:'极高硬度，耐高温',
        apps:[{name:'航空航天',desc:'超高温防热材料'},{name:'切割',desc:'硬质合金添加剂'},{name:'核',desc:'控制棒材料'}],safetyNote:'低毒，粉末可燃'
      }
  ]
};



/* 73. 钽 (Ta, z=73) */
COMPOUNDS_DATA['Ta'] = {
  summary: '钽用于电容器和医疗植入物。',
  compounds: [
      {
        nameZh:'金属钽',nameEn:'Tantalum metal',formula:'Ta',
        type:'单质',category:'过渡金属',
        physProp:'灰蓝色金属，密度16.69g/cm3，熔点3017°C',chemProp:'极耐腐蚀，生物相容性好',
        apps:[{name:'电子',desc:'钽电容器'},{name:'医疗',desc:'骨植入物和手术缝合线'},{name:'化工',desc:'耐腐蚀设备'}],safetyNote:'低毒，生物相容性好，粉末可燃'
      },
      {
        nameZh:'五氧化二钽',nameEn:'Tantalum pentoxide',formula:'Ta₂O₅',
        type:'氧化物',category:'酸性氧化物',
        physProp:'白色粉末，熔点1872°C',chemProp:'高介电常数(约27)，化学稳定',
        apps:[{name:'电子',desc:'钽电容器介质层'},{name:'光学',desc:'高折射率涂层'},{name:'催化',desc:'光催化剂'}],safetyNote:'低毒，粉尘吸入应防护'
      }
  ]
};



/* 74. 钨 (W, z=74) */
COMPOUNDS_DATA['W'] = {
  summary: '钨是熔点最高的金属，用于灯丝和硬质合金。',
  compounds: [
      {
        nameZh:'金属钨',nameEn:'Tungsten metal',formula:'W',
        type:'单质',category:'过渡金属',
        physProp:'灰白色金属，密度19.25g/cm3，熔点3422°C(最高)',chemProp:'高熔点高密度，硬而脆',
        apps:[{name:'灯丝',desc:'白炽灯和卤素灯灯丝'},{name:'合金',desc:'硬质合金(碳化钨)'},{name:'军事',desc:'穿甲弹'}],safetyNote:'低毒，粉末可燃，粉尘吸入可致钨肺病'
      },
      {
        nameZh:'碳化钨',nameEn:'Tungsten carbide',formula:'WC',
        type:'其他',category:'硬质合金',
        physProp:'灰黑色固体，硬度9-9.5(莫氏)',chemProp:'极高硬度和耐磨性',
        apps:[{name:'切削',desc:'硬质合金刀具和钻头'},{name:'耐磨',desc:'耐磨零件和模具'},{name:'珠宝',desc:'钨钢戒指'}],safetyNote:'低毒，粉尘吸入可致肺纤维化'
      }
  ]
};



/* 75. 铼 (Re, z=75) */
COMPOUNDS_DATA['Re'] = {
  summary: '铼用于高温合金和催化剂。',
  compounds: [
      {
        nameZh:'金属铼',nameEn:'Rhenium metal',formula:'Re',
        type:'单质',category:'过渡金属',
        physProp:'银白色金属，密度21.02g/cm3，熔点3186°C',chemProp:'高熔点，耐腐蚀，催化活性',
        apps:[{name:'合金',desc:'单晶高温合金(航空发动机叶片)'},{name:'催化',desc:'石油重整催化剂'},{name:'热电',desc:'高温热电偶'}],safetyNote:'低毒，粉末可燃，稀有昂贵'
      }
  ]
};



/* 76. 锇 (Os, z=76) */
COMPOUNDS_DATA['Os'] = {
  summary: '锇是密度最大的天然元素，用于催化剂和合金。',
  compounds: [
      {
        nameZh:'四氧化锇',nameEn:'Osmium tetroxide',formula:'OsO₄',
        type:'氧化物',category:'酸性氧化物',
        physProp:'浅黄色晶体，熔点40°C，沸点130°C，剧毒',chemProp:'强氧化性，挥发性和穿透性强',
        apps:[{name:'生物',desc:'电镜样品染色剂'},{name:'有机',desc:'烯烃双羟基化催化剂'}],safetyNote:'剧毒，蒸汽对眼睛和肺有严重损伤，可致失明'
      }
  ]
};



/* 77. 铱 (Ir, z=77) */
COMPOUNDS_DATA['Ir'] = {
  summary: '铱是最耐腐蚀的金属，用于火花塞和催化。',
  compounds: [
      {
        nameZh:'金属铱',nameEn:'Iridium metal',formula:'Ir',
        type:'单质',category:'过渡金属',
        physProp:'银白色金属，密度22.56g/cm3，熔点2446°C',chemProp:'极耐腐蚀(不溶于王水)，高硬度',
        apps:[{name:'火花塞',desc:'铱金火花塞'},{name:'催化',desc:'有机合成催化剂'},{name:'坩埚',desc:'高温晶体生长坩埚'}],safetyNote:'低毒，生物相容性好，粉末可燃'
      }
  ]
};



/* 78. 铂 (Pt, z=78) */
COMPOUNDS_DATA['Pt'] = {
  summary: '铂是贵重金属，用于催化剂和珠宝。',
  compounds: [
      {
        nameZh:'金属铂',nameEn:'Platinum metal',formula:'Pt',
        type:'单质',category:'过渡金属',
        physProp:'银白色金属，密度21.45g/cm3，熔点1768°C',chemProp:'极耐腐蚀，催化活性强',
        apps:[{name:'催化',desc:'汽车尾气催化转化器'},{name:'珠宝',desc:'铂金首饰'},{name:'化学',desc:'铂电极和催化加氢'}],safetyNote:'低毒，但铂配合物(如顺铂)有毒性'
      },
      {
        nameZh:'顺铂',nameEn:'Cisplatin',formula:'Pt(NH₃)₂Cl₂',
        type:'配合物',category:'金属配合物',
        physProp:'黄色晶体，溶于水',chemProp:'与DNA形成交联，抑制癌细胞复制',
        apps:[{name:'抗癌',desc:'广谱抗癌药物(睾丸癌、卵巢癌、膀胱癌)'}],safetyNote:'肾毒性和神经毒性，需严格控制剂量'
      }
  ]
};



/* 79. 金 (Au, z=79) */
COMPOUNDS_DATA['Au'] = {
  summary: '金是最具延展性的金属，用于珠宝和电子。',
  compounds: [
      {
        nameZh:'金属金',nameEn:'Gold metal',formula:'Au',
        type:'单质',category:'过渡金属',
        physProp:'金黄色金属，密度19.32g/cm3，熔点1064°C',chemProp:'极稳定，不氧化，耐腐蚀',
        apps:[{name:'珠宝',desc:'黄金首饰'},{name:'电子',desc:'键合线和触点'},{name:'金融',desc:'黄金储备和投资'}],safetyNote:'无毒，极稳定，金盐(如金化合物)可致过敏'
      },
      {
        nameZh:'氯化金',nameEn:'Gold(III) chloride',formula:'AuCl₃',
        type:'盐',category:'氯化物',
        physProp:'橙红色晶体，易吸潮',chemProp:'配位化合物，可被还原为金纳米颗粒',
        apps:[{name:'镀金',desc:'电镀金液'},{name:'催化',desc:'有机合成催化剂'},{name:'纳米',desc:'金纳米颗粒前驱体'}],safetyNote:'有腐蚀性，可致皮肤过敏'
      }
  ]
};



/* 80. 汞 (Hg, z=80) */
COMPOUNDS_DATA['Hg'] = {
  summary: '汞是唯一常温液态金属，有毒，用于温度计和照明。',
  compounds: [
      {
        nameZh:'金属汞',nameEn:'Mercury metal',formula:'Hg',
        type:'单质',category:'过渡金属',
        physProp:'银白色液体，密度13.55g/cm3，熔点-38.8°C',chemProp:'常温挥发，蒸汽剧毒',
        apps:[{name:'仪表',desc:'温度计和血压计'},{name:'照明',desc:'荧光灯和高压汞灯'},{name:'电极',desc:'氯碱工业电极'}],safetyNote:'剧毒，蒸汽可致汞中毒(神经损伤和肾损伤)，严格避免吸入'
      },
      {
        nameZh:'硫化汞',nameEn:'Mercury sulfide',formula:'HgS',
        type:'其他',category:'硫化物',
        physProp:'红色粉末(朱砂)或黑色(黑辰砂)，不溶于水',chemProp:'极难溶，加热分解',
        apps:[{name:'颜料',desc:'朱砂红色颜料和印泥'},{name:'医药',desc:'中药朱砂安神(已限制使用)'}],safetyNote:'有毒，加热分解放出汞蒸汽，长期接触可致慢性汞中毒'
      }
  ]
};



/* 81. 铊 (Tl, z=81) */
COMPOUNDS_DATA['Tl'] = {
  summary: '铊是剧毒金属，用于电子和红外光学。',
  compounds: [
      {
        nameZh:'硫酸铊',nameEn:'Thallium sulfate',formula:'Tl₂SO₄',
        type:'盐',category:'硫酸盐',
        physProp:'无色晶体，易溶于水，剧毒',chemProp:'重金属毒性，干扰钾代谢',
        apps:[{name:'杀鼠',desc:'杀鼠剂(已多国禁用)'},{name:'红外',desc:'红外光学材料(卤化铊)'}],safetyNote:'剧毒(致死量约1g)，可致脱发和神经损伤，已被多国禁用'
      }
  ]
};



/* 82. 铅 (Pb, z=82) */
COMPOUNDS_DATA['Pb'] = {
  summary: '铅是重金属，用于电池和辐射防护。',
  compounds: [
      {
        nameZh:'金属铅',nameEn:'Lead metal',formula:'Pb',
        type:'单质',category:'过渡后金属',
        physProp:'蓝灰色金属，密度11.34g/cm3，熔点327.5°C',chemProp:'柔软，密度大，耐腐蚀',
        apps:[{name:'电池',desc:'铅酸蓄电池'},{name:'辐射',desc:'X射线和核辐射防护'},{name:'合金',desc:'焊料和轴承合金'}],safetyNote:'有毒，损害神经系统和肾脏，尤其影响儿童智力发育'
      },
      {
        nameZh:'四乙基铅',nameEn:'Tetraethyl lead',formula:'Pb(C₂H₅)₄',
        type:'有机物',category:'有机金属',
        physProp:'无色液体，易燃，剧毒',chemProp:'抗爆震剂，提高汽油辛烷值',
        apps:[{name:'汽油',desc:'抗爆剂(已全球基本禁用)'}],safetyNote:'剧毒，可通过皮肤吸收，损害神经系统，已全球禁用'
      },
      {
        nameZh:'二氧化铅',nameEn:'Lead dioxide',formula:'PbO₂',
        type:'氧化物',category:'酸性氧化物',
        physProp:'暗棕色粉末，难溶于水',chemProp:'氧化性，铅酸电池正极活性物质',
        apps:[{name:'电池',desc:'铅酸蓄电池正极'}],safetyNote:'有毒，粉尘吸入有害'
      }
  ]
};



/* 83. 铋 (Bi, z=83) */
COMPOUNDS_DATA['Bi'] = {
  summary: '铋是低毒性重金属，用于医药和合金。',
  compounds: [
      {
        nameZh:'金属铋',nameEn:'Bismuth metal',formula:'Bi',
        type:'单质',category:'过渡后金属',
        physProp:'银白略带粉色金属，密度9.78g/cm3，熔点271.4°C',chemProp:'低熔点，凝固时体积膨胀',
        apps:[{name:'合金',desc:'低熔点合金(伍德合金)'},{name:'医药',desc:'胃药和收敛剂'},{name:'冶金',desc:'铋锡合金'}],safetyNote:'低毒(重金属中最安全)，但长期大量摄入可致肾损伤'
      },
      {
        nameZh:'次水杨酸铋',nameEn:'Bismuth subsalicylate',formula:'C₇H₅BiO₄',
        type:'盐',category:'有机铋盐',
        physProp:'白色粉末，微溶于水',chemProp:'抗菌和抗分泌作用',
        apps:[{name:'医药',desc:'治疗腹泻和胃溃疡(如Pepto-Bismol)'},{name:'抗菌',desc:'幽门螺杆菌治疗'}],safetyNote:'低毒，长期使用可致铋性脑病(罕见)'
      }
  ]
};



/* 84. 钋 (Po, z=84) */
COMPOUNDS_DATA['Po'] = {
  summary: '钋是放射性元素，极毒。',
  compounds: [
      {
        nameZh:'钋-210',nameEn:'Polonium-210',formula:'Po',
        type:'单质',category:'放射性元素',
        physProp:'银灰色金属，半衰期138.4天，alpha放射性',chemProp:'极强放射性毒性，发射alpha粒子',
        apps:[{name:'科研',desc:'中子源和静电消除器(历史用途)'},{name:'暗杀',desc:'极微量即可致死(利特维年科案)'}],safetyNote:'极端危险，alpha辐射体内极毒，微克量级可致死，需核设施级防护'
      }
  ]
};



/* 85. 砹 (At, z=85) */
COMPOUNDS_DATA['At'] = {
  summary: '砹是半金属放射性元素，极稀少。',
  compounds: [
      {
        nameZh:'砹-211',nameEn:'Astatine-211',formula:'At',
        type:'单质',category:'放射性元素',
        physProp:'半衰期7.2小时，极稀少(地壳中总量<30g)',chemProp:'卤族元素，类似碘的化学性质',
        apps:[{name:'医学',desc:'靶向alpha放射治疗(211At标记抗体)'},{name:'科研',desc:'核化学研究'}],safetyNote:'强放射性，仅限于专业核医学研究，极危险'
      }
  ]
};



/* 86. 氡 (Rn, z=86) */
COMPOUNDS_DATA['Rn'] = {
  summary: '氡是放射性惰性气体，是肺癌第二病因。',
  compounds: [
      {
        nameZh:'氡-222',nameEn:'Radon-222',formula:'Rn',
        type:'单质',category:'放射性元素',
        physProp:'无色无味气体，半衰期3.8天，alpha放射性',chemProp:'惰性气体，alpha衰变',
        apps:[{name:'科研',desc:'地震前兆监测'},{name:'医学',desc:'历史放射治疗(已停用)'}],safetyNote:'放射性，长期吸入可致肺癌(仅次于吸烟)，需监测室内氡浓度'
      }
  ]
};



/* 87. 钫 (Fr, z=87) */
COMPOUNDS_DATA['Fr'] = {
  summary: '钫是最活泼的天然元素，极不稳定。',
  compounds: [
      {
        nameZh:'钫-223',nameEn:'Francium-223',formula:'Fr',
        type:'单质',category:'放射性元素',
        physProp:'半衰期22分钟，alpha衰变',chemProp:'极活泼(最活泼的金属元素)，极不稳定',
        apps:[{name:'科研',desc:'原子物理和电化学基础研究(量极少，仅原子级实验)'}],safetyNote:'极端放射性，半衰期极短，仅限于基础物理研究'
      }
  ]
};



/* 88. 镭 (Ra, z=88) */
COMPOUNDS_DATA['Ra'] = {
  summary: '镭是放射性元素，历史用于发光涂料。',
  compounds: [
      {
        nameZh:'镭-226',nameEn:'Radium-226',formula:'Ra',
        type:'单质',category:'放射性元素',
        physProp:'银白色金属，半衰期1600年，alpha衰变',chemProp:'化学性质类似钡，极毒',
        apps:[{name:'历史用途',desc:'发光表盘涂料(已禁用)'},{name:'科研',desc:'放射化学研究'}],safetyNote:'极端放射性，可致骨癌(镭女孩事件)，严格禁止民用'
      },
      {
        nameZh:'氯化镭',nameEn:'Radium chloride',formula:'RaCl₂',
        type:'盐',category:'放射性盐',
        physProp:'白色晶体，溶于水',chemProp:'与BaCl2同晶，放射性',
        apps:[{name:'历史用途',desc:'放射治疗(已淘汰)'},{name:'科研',desc:'镭化学研究'}],safetyNote:'极端放射性，仅限核设施研究'
      }
  ]
};



/* 89. 锕 (Ac, z=89) */
COMPOUNDS_DATA['Ac'] = {
  summary: '锕是锕系第一个元素，放射性。',
  compounds: [
      {
        nameZh:'锕-227',nameEn:'Actinium-227',formula:'Ac',
        type:'单质',category:'放射性元素',
        physProp:'银白色金属，半衰期21.8年',chemProp:'化学性质类似镧，极毒',
        apps:[{name:'医学',desc:'靶向alpha治疗(225Ac标记抗体)'},{name:'科研',desc:'中子源'}],safetyNote:'极端放射性，仅限核医学和核物理研究'
      }
  ]
};



/* 90. 钍 (Th, z=90) */
COMPOUNDS_DATA['Th'] = {
  summary: '钍是锕系元素，可用于核燃料。',
  compounds: [
      {
        nameZh:'二氧化钍',nameEn:'Thorium dioxide',formula:'ThO₂',
        type:'氧化物',category:'放射性氧化物',
        physProp:'白色粉末，熔点3390°C',chemProp:'高熔点，化学稳定，放射性',
        apps:[{name:'核能',desc:'钍基熔盐堆燃料(研发中)'},{name:'催化',desc:'催化裂化(历史)'},{name:'光学',desc:'高折射率透镜(历史)'}],safetyNote:'放射性，长期接触可致肺癌，需严格防护'
      },
      {
        nameZh:'硝酸钍',nameEn:'Thorium nitrate',formula:'Th(NO₃)₄',
        type:'盐',category:'硝酸盐',
        physProp:'白色晶体，易溶于水',chemProp:'放射性盐，可被草酸沉淀',
        apps:[{name:'历史用途',desc:'煤气灯罩(已淘汰)'},{name:'科研',desc:'钍化学研究'}],safetyNote:'放射性，有毒，需核设施级防护'
      }
  ]
};



/* 91. 镤 (Pa, z=91) */
COMPOUNDS_DATA['Pa'] = {
  summary: '镤是放射性锕系元素，极稀少。',
  compounds: [
      {
        nameZh:'镤-231',nameEn:'Protactinium-231',formula:'Pa',
        type:'单质',category:'放射性元素',
        physProp:'银灰色金属，半衰期32760年',chemProp:'化学性质复杂，易水解',
        apps:[{name:'科研',desc:'核化学和地球化学研究'},{name:'测年',desc:'海洋沉积物年代测定'}],safetyNote:'极端放射性和毒性，仅限专业核研究设施'
      }
  ]
};



/* 92. 铀 (U, z=92) */
COMPOUNDS_DATA['U'] = {
  summary: '铀是核燃料和核武器原料。',
  compounds: [
      {
        nameZh:'八氧化三铀',nameEn:'Triuranium octoxide',formula:'U₃O₈',
        type:'氧化物',category:'放射性氧化物',
        physProp:'暗绿色粉末，稳定氧化物形式',chemProp:'U4+/U6+混合价态，溶于酸',
        apps:[{name:'核燃料',desc:'铀浓缩原料中间体'},{name:'颜料',desc:'历史用作陶瓷黄色釉料'}],safetyNote:'放射性，化学毒性致肾损伤，需严格辐射防护'
      },
      {
        nameZh:'六氟化铀',nameEn:'Uranium hexafluoride',formula:'UF₆',
        type:'其他',category:'铀化合物',
        physProp:'无色固体，升华温度56°C',chemProp:'分子量大，气体扩散法分离同位素',
        apps:[{name:'核工业',desc:'铀浓缩(气体扩散和离心法)'},{name:'核燃料',desc:'235U富集'}],safetyNote:'放射性和化学毒性，HF腐蚀风险，严格核设施防护'
      },
      {
        nameZh:'二氧化铀',nameEn:'Uranium dioxide',formula:'UO₂',
        type:'氧化物',category:'放射性氧化物',
        physProp:'黑色粉末，熔点2865°C',chemProp:'离子晶体，U4+价态',
        apps:[{name:'核反应堆',desc:'轻水堆燃料芯块(UO2烧结块)'}],safetyNote:'放射性，化学毒性致肾损伤，需严格辐射防护'
      }
  ]
};



/* 93. 镎 (Np, z=93) */
COMPOUNDS_DATA['Np'] = {
  summary: '镎是超铀元素，用于钚-238生产。',
  compounds: [
      {
        nameZh:'二氧化镎',nameEn:'Neptunium dioxide',formula:'NpO₂',
        type:'氧化物',category:'放射性氧化物',
        physProp:'绿色粉末',chemProp:'Np4+氧化物，化学稳定',
        apps:[{name:'核工业',desc:'237Np辐照生产238Pu(航天电池)'},{name:'科研',desc:'锕系化学研究'}],safetyNote:'放射性，极毒，需核设施防护'
      }
  ]
};



/* 94. 钚 (Pu, z=94) */
COMPOUNDS_DATA['Pu'] = {
  summary: '钚是核武器和核燃料元素。',
  compounds: [
      {
        nameZh:'二氧化钚',nameEn:'Plutonium dioxide',formula:'PuO₂',
        type:'氧化物',category:'放射性氧化物',
        physProp:'黄绿色粉末，熔点2400°C',chemProp:'Pu4+氧化物，极稳定',
        apps:[{name:'核燃料',desc:'混合氧化物燃料(MOX)'},{name:'航天',desc:'放射性同位素热电发电机(RTG)原料'}],safetyNote:'极端放射性和毒性，239Pu可用于核武器，严格管控'
      },
      {
        nameZh:'金属钚',nameEn:'Plutonium metal',formula:'Pu',
        type:'单质',category:'放射性元素',
        physProp:'银灰色金属，熔点640°C',chemProp:'活泼金属，有多个同素异形体',
        apps:[{name:'核武器',desc:'239Pu裂变材料'},{name:'航天',desc:'238Pu同位素电池(深空探测)'}],safetyNote:'极端放射性和毒性，吸入可致肺癌，最严格管控物质'
      }
  ]
};



/* 95. 镅 (Am, z=95) */
COMPOUNDS_DATA['Am'] = {
  summary: '镅用于烟雾报警器和仪表。',
  compounds: [
      {
        nameZh:'镅-241',nameEn:'Americium-241',formula:'Am',
        type:'单质',category:'放射性元素',
        physProp:'银白色金属，半衰期432年，alpha衰变',chemProp:'alpha辐射源',
        apps:[{name:'安全',desc:'离子型烟雾报警器辐射源'},{name:'测量',desc:'厚度计和料位计'},{name:'科研',desc:'中子源(Am-Be)'}],safetyNote:'放射性，alpha辐射源需防内照射，专业管理'
      }
  ]
};



/* 96. 锔 (Cm, z=96) */
COMPOUNDS_DATA['Cm'] = {
  summary: '锔用于航天电源和中子源。',
  compounds: [
      {
        nameZh:'锔-244',nameEn:'Curium-244',formula:'Cm',
        type:'单质',category:'放射性元素',
        physProp:'银白色金属，半衰期18年',chemProp:'alpha辐射源',
        apps:[{name:'航天',desc:'RTG同位素电池(深空探测)'},{name:'科研',desc:'锕系元素化学研究'}],safetyNote:'极端放射性，仅限核研究设施'
      }
  ]
};



/* 97. 锫 (Bk, z=97) */
COMPOUNDS_DATA['Bk'] = {
  summary: '锫用于超重元素合成。',
  compounds: [
      {
        nameZh:'锫-249',nameEn:'Berkelium-249',formula:'Bk',
        type:'单质',category:'放射性元素',
        physProp:'半衰期330天',chemProp:'alpha衰变，可作靶材料',
        apps:[{name:'科研',desc:'合成超重元素(如Ts的靶材料)'},{name:'核化学',desc:'锕系研究'}],safetyNote:'放射性，仅限核研究设施'
      }
  ]
};



/* 98. 锎 (Cf, z=98) */
COMPOUNDS_DATA['Cf'] = {
  summary: '锎用于中子源和癌症治疗。',
  compounds: [
      {
        nameZh:'锎-252',nameEn:'Californium-252',formula:'Cf',
        type:'单质',category:'放射性元素',
        physProp:'半衰期2.65年，自发裂变中子源',chemProp:'强中子发射体',
        apps:[{name:'工业',desc:'中子活化分析和测井'},{name:'医疗',desc:'子宫颈癌中子治疗'},{name:'安全',desc:'行李检测中子源'}],safetyNote:'极端放射性和中子辐射，需最严格核设施防护'
      }
  ]
};



/* 99. 锿 (Es, z=99) */
COMPOUNDS_DATA['Es'] = {
  summary: '锿是极稀少的超铀元素。',
  compounds: [
      {
        nameZh:'锿-253',nameEn:'Einsteinium-253',formula:'Es',
        type:'单质',category:'放射性元素',
        physProp:'半衰期20.5天',chemProp:'锕系元素，alpha衰变',
        apps:[{name:'科研',desc:'超重元素合成靶材料'},{name:'核化学',desc:'锕系化学研究'}],safetyNote:'极端放射性，仅限核研究设施，量极微'
      }
  ]
};



/* 100. 镄 (Fm, z=100) */
COMPOUNDS_DATA['Fm'] = {
  summary: '镄是第100号元素，无稳定同位素。',
  compounds: [
      {
        nameZh:'镄-255',nameEn:'Fermium-255',formula:'Fm',
        type:'单质',category:'放射性元素',
        physProp:'半衰期20小时，alpha衰变',chemProp:'锕系最后一个可称量元素',
        apps:[{name:'科研',desc:'核物理和锕系化学基础研究'}],safetyNote:'极端放射性，仅限核研究设施，量仅原子级'
      }
  ]
};



/* 101. 钔 (Md, z=101) */
COMPOUNDS_DATA['Md'] = {
  summary: '钔是合成超重元素，无法称量。',
  compounds: [
      {
        nameZh:'钔-258',nameEn:'Mendelevium-258',formula:'Md',
        type:'单质',category:'放射性元素',
        physProp:'半衰期51.5天',chemProp:'锕系元素，仅原子级研究',
        apps:[{name:'科研',desc:'核化学和原子物理基础研究'}],safetyNote:'极端放射性，仅原子级实验'
      }
  ]
};



/* 102. 锘 (No, z=102) */
COMPOUNDS_DATA['No'] = {
  summary: '锘是合成超重元素。',
  compounds: [
      {
        nameZh:'锘-259',nameEn:'Nobelium-259',formula:'No',
        type:'单质',category:'放射性元素',
        physProp:'半衰期58分钟',chemProp:'锕系元素，+2价稳定',
        apps:[{name:'科研',desc:'核化学和原子物理基础研究'}],safetyNote:'极端放射性，仅原子级实验'
      }
  ]
};



/* 103. 铹 (Lr, z=103) */
COMPOUNDS_DATA['Lr'] = {
  summary: '铹是最后一个锕系元素。',
  compounds: [
      {
        nameZh:'铹-262',nameEn:'Lawrencium-262',formula:'Lr',
        type:'单质',category:'放射性元素',
        physProp:'半衰期约4小时',chemProp:'锕系最后一个元素，化学性质待研究',
        apps:[{name:'科研',desc:'核化学和原子物理基础研究'}],safetyNote:'极端放射性，仅原子级实验'
      }
  ]
};



/* 104. 鑪 (Rf, z=104) */
COMPOUNDS_DATA['Rf'] = {
  summary: '鑪是人工合成的超重元素，半衰期极短。',
  compounds: [
      {
        nameZh:'鑪-267',nameEn:'Rutherfordium-267',formula:'Rf',
        type:'单质',category:'超重元素',
        physProp:'半衰期约1.3小时，仅原子级研究',chemProp:'过渡金属，预期化学性质类似铪',
        apps:[{name:'科研',desc:'核化学和超重元素性质研究'}],safetyNote:'极端放射性，仅原子级实验'
      }
  ]
};



/* 105. 𬭊 (Db, z=105) */
COMPOUNDS_DATA['Db'] = {
  summary: '𬭊是人工合成的超重元素。',
  compounds: [
      {
        nameZh:'𬭊-268',nameEn:'Dubnium-268',formula:'Db',
        type:'单质',category:'超重元素',
        physProp:'半衰期约29小时(已知最长同位素)',chemProp:'预期化学性质类似铌或钽',
        apps:[{name:'科研',desc:'核化学基础研究'}],safetyNote:'极端放射性，仅原子级实验'
      }
  ]
};



/* 106. 𬭳 (Sg, z=106) */
COMPOUNDS_DATA['Sg'] = {
  summary: '𬭳是人工合成的超重元素。',
  compounds: [
      {
        nameZh:'𬭳-269',nameEn:'Seaborgium-269',formula:'Sg',
        type:'单质',category:'超重元素',
        physProp:'半衰期约14分钟',chemProp:'预期化学性质类似钨',
        apps:[{name:'科研',desc:'核化学和相对论效应研究'}],safetyNote:'极端放射性，仅原子级实验'
      }
  ]
};



/* 107. 𬭛 (Bh, z=107) */
COMPOUNDS_DATA['Bh'] = {
  summary: '𬭛是人工合成的超重元素。',
  compounds: [
      {
        nameZh:'𬭛-270',nameEn:'Bohrium-270',formula:'Bh',
        type:'单质',category:'超重元素',
        physProp:'半衰期约1分钟',chemProp:'预期化学性质类似铼',
        apps:[{name:'科研',desc:'核化学基础研究'}],safetyNote:'极端放射性，仅原子级实验'
      }
  ]
};



/* 108. 𬭶 (Hs, z=108) */
COMPOUNDS_DATA['Hs'] = {
  summary: '𬭶是人工合成的超重元素。',
  compounds: [
      {
        nameZh:'𬭶-269',nameEn:'Hassium-269',formula:'Hs',
        type:'单质',category:'超重元素',
        physProp:'半衰期约9.7秒',chemProp:'预期化学性质类似锇',
        apps:[{name:'科研',desc:'核化学和相对论效应研究'}],safetyNote:'极端放射性，仅原子级实验'
      }
  ]
};



/* 109. 鿏 (Mt, z=109) */
COMPOUNDS_DATA['Mt'] = {
  summary: '鿏是人工合成的超重元素。',
  compounds: [
      {
        nameZh:'鿏-278',nameEn:'Meitnerium-278',formula:'Mt',
        type:'单质',category:'超重元素',
        physProp:'半衰期约4.5秒',chemProp:'预期化学性质类似铱',
        apps:[{name:'科研',desc:'核物理基础研究'}],safetyNote:'极端放射性，仅原子级实验'
      }
  ]
};



/* 110. 鐽 (Ds, z=110) */
COMPOUNDS_DATA['Ds'] = {
  summary: '鐽是人工合成的超重元素。',
  compounds: [
      {
        nameZh:'鐽-281',nameEn:'Darmstadtium-281',formula:'Ds',
        type:'单质',category:'超重元素',
        physProp:'半衰期约9.6秒',chemProp:'预期化学性质类似铂',
        apps:[{name:'科研',desc:'核物理基础研究'}],safetyNote:'极端放射性，仅原子级实验'
      }
  ]
};



/* 111. 鐭 (Rg, z=111) */
COMPOUNDS_DATA['Rg'] = {
  summary: '鐭是人工合成的超重元素。',
  compounds: [
      {
        nameZh:'鐭-282',nameEn:'Roentgenium-282',formula:'Rg',
        type:'单质',category:'超重元素',
        physProp:'半衰期约2.7分钟',chemProp:'预期化学性质类似金',
        apps:[{name:'科研',desc:'核物理基础研究'}],safetyNote:'极端放射性，仅原子级实验'
      }
  ]
};



/* 112. 鎶 (Cn, z=112) */
COMPOUNDS_DATA['Cn'] = {
  summary: '鎶是人工合成的超重元素，可能呈气态。',
  compounds: [
      {
        nameZh:'鎶-285',nameEn:'Copernicium-285',formula:'Cn',
        type:'单质',category:'超重元素',
        physProp:'半衰期约30秒',chemProp:'可能类似汞呈液态或气态，相对论效应显著',
        apps:[{name:'科研',desc:'核物理和相对论效应研究'}],safetyNote:'极端放射性，仅原子级实验'
      }
  ]
};



/* 113. 鉨 (Nh, z=113) */
COMPOUNDS_DATA['Nh'] = {
  summary: '鉨是人工合成的超重元素。',
  compounds: [
      {
        nameZh:'鉨-286',nameEn:'Nihonium-286',formula:'Nh',
        type:'单质',category:'超重元素',
        physProp:'半衰期约20秒',chemProp:'预期化学性质可能类似铊',
        apps:[{name:'科研',desc:'核物理基础研究'}],safetyNote:'极端放射性，仅原子级实验'
      }
  ]
};



/* 114. 𫓧 (Fl, z=114) */
COMPOUNDS_DATA['Fl'] = {
  summary: '𫓧是人工合成的超重元素。',
  compounds: [
      {
        nameZh:'𫓧-289',nameEn:'Flerovium-289',formula:'Fl',
        type:'单质',category:'超重元素',
        physProp:'半衰期约1.9秒',chemProp:'可能具有惰性气体特征(相对论效应)',
        apps:[{name:'科研',desc:'核物理和相对论效应研究'}],safetyNote:'极端放射性，仅原子级实验'
      }
  ]
};



/* 115. 镆 (Mc, z=115) */
COMPOUNDS_DATA['Mc'] = {
  summary: '镆是人工合成的超重元素。',
  compounds: [
      {
        nameZh:'镆-290',nameEn:'Moscovium-290',formula:'Mc',
        type:'单质',category:'超重元素',
        physProp:'半衰期约0.65秒',chemProp:'预期化学性质类似铋',
        apps:[{name:'科研',desc:'核物理基础研究'}],safetyNote:'极端放射性，仅原子级实验'
      }
  ]
};



/* 116. 𫟷 (Lv, z=116) */
COMPOUNDS_DATA['Lv'] = {
  summary: '𫟷是人工合成的超重元素。',
  compounds: [
      {
        nameZh:'𫟷-293',nameEn:'Livermorium-293',formula:'Lv',
        type:'单质',category:'超重元素',
        physProp:'半衰期约53毫秒',chemProp:'预期化学性质类似钋',
        apps:[{name:'科研',desc:'核物理基础研究'}],safetyNote:'极端放射性，仅原子级实验'
      }
  ]
};



/* 117. 鿬 (Ts, z=117) */
COMPOUNDS_DATA['Ts'] = {
  summary: '鿬是人工合成的超重元素。',
  compounds: [
      {
        nameZh:'鿬-294',nameEn:'Tennessine-294',formula:'Ts',
        type:'单质',category:'超重元素',
        physProp:'半衰期约51毫秒',chemProp:'预期化学性质可能有金属性(不同于其他卤素)',
        apps:[{name:'科研',desc:'核物理基础研究'}],safetyNote:'极端放射性，仅原子级实验'
      }
  ]
};



/* 118. 鿫 (Og, z=118) */
COMPOUNDS_DATA['Og'] = {
  summary: '鿫是已知最重的元素，可能室温气体。',
  compounds: [
      {
        nameZh:'鿫-294',nameEn:'Oganesson-294',formula:'Og',
        type:'单质',category:'超重元素',
        physProp:'半衰期约0.69毫秒',chemProp:'预期可能为室温气体(相对论效应导致)，非惰性',
        apps:[{name:'科研',desc:'核物理和超重元素理论化学研究'}],safetyNote:'极端放射性，仅原子级实验'
      }
  ]
};




/* ═══════════════════════════════════════
   导出
   ═══════════════════════════════════════ */
if (typeof window !== 'undefined') {
  window.COMPOUNDS_DATA = COMPOUNDS_DATA;
}
