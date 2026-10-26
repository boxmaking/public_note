/**
 * 19维度元素详情生成器 v3.0
 * 为118个元素生成丰富的详情markdown文件
 * 
 * 每个维度的内容基于:
 *   1. 元素核心数据 (elements.js)
 *   2. 元素类别/族/周期的特定知识模板
 *   3. 元素特定的科学事实和应用
 * 
 * 运行: node generate-detail-md-v3.js
 */
const vm = require('vm');
const fs = require('fs');
const path = require('path');

const JS_FILE = path.join(__dirname, 'data', 'elements.js');
const DETAILS_DIR = path.join(__dirname, 'details');

// ─── 解析元素数据 ───
const rawContent = fs.readFileSync(JS_FILE, 'utf-8');
const codeForVm = rawContent.replace('const ELEMENTS', 'var ELEMENTS');
const ctx = vm.createContext({});
vm.runInContext(codeForVm, ctx);
const elements = ctx.ELEMENTS;
console.log(`解析到 ${elements.length} 个元素`);

// ─── 辅助函数 ───
const ELECTRON_CONFIGS = {
  1:'1s¹',2:'1s²',3:'[He]2s¹',4:'[He]2s²',5:'[He]2s²2p¹',6:'[He]2s²2p²',
  7:'[He]2s²2p³',8:'[He]2s²2p⁴',9:'[He]2s²2p⁵',10:'[He]2s²2p⁶',
  11:'[Ne]3s¹',12:'[Ne]3s²',13:'[Ne]3s²3p¹',14:'[Ne]3s²3p²',15:'[Ne]3s²3p³',
  16:'[Ne]3s²3p⁴',17:'[Ne]3s²3p⁵',18:'[Ne]3s²3p⁶',
  19:'[Ar]4s¹',20:'[Ar]4s²',21:'[Ar]3d¹4s²',22:'[Ar]3d²4s²',23:'[Ar]3d³4s²',
  24:'[Ar]3d⁵4s¹',25:'[Ar]3d⁵4s²',26:'[Ar]3d⁶4s²',27:'[Ar]3d⁷4s²',
  28:'[Ar]3d⁸4s²',29:'[Ar]3d¹⁰4s¹',30:'[Ar]3d¹⁰4s²',
  31:'[Ar]3d¹⁰4s²4p¹',32:'[Ar]3d¹⁰4s²4p²',33:'[Ar]3d¹⁰4s²4p³',
  34:'[Ar]3d¹⁰4s²4p⁴',35:'[Ar]3d¹⁰4s²4p⁵',36:'[Ar]3d¹⁰4s²4p⁶',
  37:'[Kr]5s¹',38:'[Kr]5s²',39:'[Kr]4d¹5s²',40:'[Kr]4d²5s²',41:'[Kr]4d⁴5s¹',
  42:'[Kr]4d⁵5s¹',43:'[Kr]4d⁵5s²',44:'[Kr]4d⁷5s¹',45:'[Kr]4d⁸5s¹',
  46:'[Kr]4d¹⁰',47:'[Kr]4d¹⁰5s¹',48:'[Kr]4d¹⁰5s²',
  49:'[Kr]4d¹⁰5s²5p¹',50:'[Kr]4d¹⁰5s²5p²',51:'[Kr]4d¹⁰5s²5p³',
  52:'[Kr]4d¹⁰5s²5p⁴',53:'[Kr]4d¹⁰5s²5p⁵',54:'[Kr]4d¹⁰5s²5p⁶',
  55:'[Xe]6s¹',56:'[Xe]6s²',57:'[Xe]5d¹6s²',58:'[Xe]4f¹5d¹6s²',
  59:'[Xe]4f³6s²',60:'[Xe]4f⁴6s²',61:'[Xe]4f⁵6s²',62:'[Xe]4f⁶6s²',
  63:'[Xe]4f⁷6s²',64:'[Xe]4f⁷5d¹6s²',65:'[Xe]4f⁹6s²',66:'[Xe]4f¹⁰6s²',
  67:'[Xe]4f¹¹6s²',68:'[Xe]4f¹²6s²',69:'[Xe]4f¹³6s²',70:'[Xe]4f¹⁴6s²',
  71:'[Xe]4f¹⁴5d¹6s²',
  72:'[Xe]4f¹⁴5d²6s²',73:'[Xe]4f¹⁴5d³6s²',74:'[Xe]4f¹⁴5d⁴6s²',
  75:'[Xe]4f¹⁴5d⁵6s²',76:'[Xe]4f¹⁴5d⁶6s²',77:'[Xe]4f¹⁴5d⁷6s²',
  78:'[Xe]4f¹⁴5d⁸6s²',79:'[Xe]4f¹⁴5d⁹6s¹',80:'[Xe]4f¹⁴5d¹⁰6s²',
  81:'[Xe]4f¹⁴5d¹⁰6s²6p¹',82:'[Xe]4f¹⁴5d¹⁰6s²6p²',83:'[Xe]4f¹⁴5d¹⁰6s²6p³',
  84:'[Xe]4f¹⁴5d¹⁰6s²6p⁴',85:'[Xe]4f¹⁴5d¹⁰6s²6p⁵',86:'[Xe]4f¹⁴5d¹⁰6s²6p⁶',
  87:'[Rn]7s¹',88:'[Rn]7s²',89:'[Rn]6d¹7s²',90:'[Rn]6d²7s²',
  91:'[Rn]4f²6d¹7s²',92:'[Rn]5f³6d¹7s²',93:'[Rn]5f⁴6d¹7s²',
  94:'[Rn]5f⁶7s²',95:'[Rn]5f⁷7s²',96:'[Rn]5f⁷6d¹7s²',
  97:'[Rn]5f⁹7s²',98:'[Rn]5f¹⁰7s²',99:'[Rn]5f¹¹7s²',
  100:'[Rn]5f¹²7s²',101:'[Rn]5f¹³7s²',102:'[Rn]5f¹⁴7s²',
  103:'[Rn]5f¹⁴6d¹7s²',
  104:'[Rn]5f¹⁴6d²7s²',105:'[Rn]5f¹⁴6d³7s²',106:'[Rn]5f¹⁴6d⁴7s²',
  107:'[Rn]5f¹⁴6d⁵7s²',108:'[Rn]5f¹⁴6d⁶7s²',109:'[Rn]5f¹⁴6d⁷7s²',
  110:'[Rn]5f¹⁴6d⁸7s²',111:'[Rn]5f¹⁴6d⁹7s²',112:'[Rn]5f¹⁴6d¹⁰7s²',
  113:'[Rn]5f¹⁴6d¹⁰7s²7p¹',114:'[Rn]5f¹⁴6d¹⁰7s²7p²',
  115:'[Rn]5f¹⁴6d¹⁰7s²7p³',116:'[Rn]5f¹⁴6d¹⁰7s²7p⁴',
  117:'[Rn]5f¹⁴6d¹⁰7s²7p⁵',118:'[Rn]5f¹⁴6d¹⁰7s²7p⁶'
};

// 元素类别中文名
const CATEGORY_CN = {
  'alkali-metal': '碱金属', 'alkaline-earth': '碱土金属', 'transition': '过渡金属',
  'post-transition': '后过渡金属', 'metalloid': '准金属', 'nonmetal': '非金属',
  'halogen': '卤素', 'noble-gas': '稀有气体', 'lanthanide': '镧系元素',
  'actinide': '锕系元素'
};

// 族名映射
const GROUP_NAMES = {
  1:'碱金属族(IA)',2:'碱土金属族(IIA)',3:'硼族(IIIA)',4:'碳族(IVA)',5:'氮族(VA)',
  6:'氧族(VIA)',7:'卤族(VIIA)',8:'铁族(VIII)',9:'钴族(VIII)',10:'镍族(VIII)',
  11:'铜族(IB)',12:'锌族(IIB)',13:'硼族(IIIA)',14:'碳族(IVA)',15:'氮族(VA)',
  16:'氧族(VIA)',17:'卤族(VIIA)',18:'稀有气体族(VIIIA)',3:'第3族'
};

// ─── 元素特定知识库 ───
// 为每个元素提供独特的关键事实、特色描述和应用
const ELEMENT_FACTS = {
  1: { key: '宇宙中最丰富的元素，占可见物质质量的约75%', subtitle: '万物之始，宇宙之光',
       dims: { 7:'氢是有机化学的基石，几乎所有有机分子都含氢原子。烃类(烷烃、烯烃、芳烃)是氢与碳的化合物，构成化石燃料和塑料的基础。',
               8:'氢是水的组成元素(H₂O)，是所有生物体的基本成分。人体约60%的质量是水中的氢。氢离子(H⁺)是酸碱化学的核心，ATP合成依赖质子梯度。',
               9:'氢循环与水循环紧密相连。全球水循环蒸发→降水→径流是地球上最大的物质循环。工业氢的排放和化石燃料燃烧改变了大气中H₂的平衡。',
               10:'氢气被视为清洁能源的未来。氢燃料电池只产生水，无碳排放。绿色氢(电解水制氢)是碳中和的关键路径。',
               11:'氢用于石油精炼(加氢脱硫)、合成氨(Haber法)、合成甲醇、氢燃料电池、航天推进剂。液氢是火箭发动机的主要燃料。',
               12:'氢存储是纳米技术的重要研究方向。金属氢化物储氢、碳纳米管储氢、液态有机氢载体(LOHC)等技术正在开发。',
               14:'氢是宇宙中最丰富的元素，占宇宙可见质量的约75%。恒星主要由氢构成，氢核聚变是恒星发光的能源。太阳每秒将6亿吨氢聚变为氦。',
               16:'氢在1766年由卡文迪许(H.Cavendish)识别为独立元素，1783年由拉瓦锡(Lavoisier)命名为"hydrogen"(希腊语hydro=水，genes=生成)。'
       }
  },
  2: { key: '宇宙中第二丰富的元素，太阳和恒星的主要成分', subtitle: '轻如无物，举世无双',
       dims: { 11:'氦广泛用于深潜呼吸气(与氧混合)、气球和飞艇填充、超导冷却(液氦4.2K)、核反应堆冷却、光纤制造保护气、MRI设备超导冷却。',
               14:'氦是宇宙大爆炸核合成的产物，约占宇宙质量的24%。在恒星中，氢聚变产生氦。红巨星中氦聚变产生碳和氧。',
               16:'氦首先在1868年由法国天文学家詹森(Janssen)和英国天文学家洛克耶(Lockyer)从太阳光谱中发现，命名为"helium"(希腊语helios=太阳)。1895年才在地球上被发现(铀矿中)。'
       }
  },
  6: { key: '已知化合物种类最多的元素(>1000万种)，生命的骨架', subtitle: '万物之基，生命之根',
       dims: { 6:'碳有丰富的同素异形体：金刚石(绝缘体，超硬)、石墨(导体，润滑)、富勒烯(C₆₀足球状)、碳纳米管(导电/半导体)、石墨烯(单层，超导热)、无定形碳(炭黑、活性炭)。',
               7:'碳是有机化学的核心。碳能形成sp³(四面体)、sp²(平面)、sp(直线)杂化，构建无数有机分子结构。有机化学涵盖烃类、醇类、羧酸、氨基酸、糖类、脂质等。',
               8:'碳是所有生物大分子的骨架：DNA(脱氧核糖核酸)、RNA、蛋白质(氨基酸链)、碳水化合物、脂质。光合作用将CO₂转化为有机碳，是生命能量来源。',
               9:'碳循环是地球最大的生物地球化学循环之一：CO₂→光合作用→有机碳→分解→CO₂。海洋溶解CO₂构成巨大碳库。化石燃料燃烧打破了自然碳平衡。',
               10:'CO₂是全球气候变化的核心温室气体。工业革命以来大气CO₂从280ppm升至420ppm。碳捕集与封存(CCS)技术是减排的关键策略。',
               11:'碳广泛应用于钢铁冶炼(焦炭)、电池电极(石墨)、润滑剂、复合材料(CFRP)、活性炭过滤、炭黑(轮胎/印刷)、钻石切割工具、碳纤维航空材料。',
               12:'石墨烯(2004年发现)是最薄的纳米材料，厚度仅0.34nm，具有超高导电性、导热性和强度。碳纳米管用于纳米电子器件。富勒烯用于药物递送。',
               13:'¹⁴C放射性碳测年法是考古学和地质学的核心工具。碳核聚变(3α过程)是恒星产生碳的途径：3个⁴He→¹²C。',
               14:'碳是宇宙第四丰富的元素。在恒星核心通过3α过程产生：3个氦核聚变为1个碳核。星际尘埃中含有大量有机碳分子。碳质陨石携带有机化合物到达地球。',
               15:'碳酸盐矿物(方解石CaCO₃、白云石)构成沉积岩的主体。化石燃料(煤、石油、天然气)是地质历史中有机碳的积累。金刚石在地球深部高压下形成。',
               16:'碳自古已知(木炭、烟灰)。1772年拉瓦锡证明金刚石和木炭是同种元素的不同形态。钻石在古代印度就已知。',
               17:'碳的量子化学核心是杂化轨道理论：sp/sp²/sp³杂化决定分子几何和键性质。Hückel分子轨道理论描述π电子体系。密度泛函理论(DFT)广泛用于碳材料计算。',
               18:'碳的光谱特征包括：C₂Swan带(绿色火焰)、CO红外吸收(4.6μm)、CO₂红外吸收(15μm，温室效应核心)、¹³C NMR(有机结构分析)、金刚石紫外吸收边。',
               19:'碳前沿：石墨烯量子器件、碳基量子计算、有机超导、碳纳米管脑机接口、人造光合作用、CO₂直接转化化学品、碳基柔性电子、碳捕获矿物化。'
       }
  },
  // ─── 金属元素通用知识模板(按类别覆盖) ───
  26: { key: '人类文明最重要的金属，钢铁工业的基石', subtitle: '铁铸文明，钢擎天地',
       dims: { 7:'铁的配位化学极为丰富，Fe²⁺/Fe³⁺形成各种络合物。血红蛋白中的铁卟啉络合物是O₂运输的核心。铁催化的Fenton反应(Fe²⁺+H₂O₂)产生羟基自由基。',
               8:'铁是人体必需微量元素，血红蛋白含铁运输O₂，肌红蛋白储存O₂，铁硫蛋白参与电子传递链。缺铁性贫血是全球最常见的营养缺乏症。',
               11:'钢铁是用量最大的金属材料。高炉炼铁→转炉炼钢→轧制是主流流程。特种钢(不锈钢、工具钢、合金钢)用于建筑、汽车、船舶、武器、器具。',
               12:'铁纳米粒子(磁铁矿Fe₃O₄)用于MRI造影剂、磁靶向药物递送、磁分离。铁基纳米催化剂用于环境修复(Fenton催化)。纳米铁线用于磁存储。',
               14:'铁是宇宙中从⁵⁶Ni衰变产生的最稳定核素(⁵⁶Fe)。铁核的结合能/核子最高(~8.8MeV/nucleon)，是恒星核合成的终点。超新星爆发时大量铁被抛射到星际空间。',
               16:'铁自古已知和使用。铁器时代约始于公元前1200年。中国春秋战国时期铁器普及。近代钢铁工业由Bessemer转炉(1856)开创。'
       }
  },
  29: { key: '人类最早使用的金属之一，电气文明的基石', subtitle: '铜线通电，文明启程',
       dims: { 7:'铜的配位化学丰富，Cu⁺/Cu²⁺络合物广泛用于催化和生物学。铜催化的Ullmann反应、Glaser偶联是经典有机合成方法。',
               8:'铜是人体必需微量元素，铜锌超氧化物歧化酶(SOD1)清除自由基。细胞色素c氧化酶含铜参与呼吸链。铜蓝蛋白运输铜。缺铜导致贫血和神经系统障碍。',
               11:'铜是电气工业核心(电线、电缆、电机、变压器)。铜合金(黄铜Cu-Zn、青铜Cu-Sn、白铜Cu-Ni)广泛用于管道、建筑、船舶、硬币、乐器。',
               12:'铜纳米线用于透明导电膜(替代ITO)。铜纳米粒子催化CO₂还原。Cu₂O纳米晶用于太阳能电池和光催化分解水。',
               14:'铜在中等质量恒星中通过s过程产生。宇宙铜丰度约0.7ppm。铜质陨石极少见。',
               16:'铜是人类最早冶炼的金属(~公元前5000年，中东)。青铜时代(~公元前3000年)铜锡合金取代石器。中国商周青铜器是古代文明巅峰。'
       }
  },
  47: { key: '货币金属，摄影术的基石，导电性最好的金属', subtitle: '银光闪耀，价值永恒',
       dims: { 8:'银在医学中用作抗菌剂(Ag⁺破坏细菌细胞膜)。银纳米粒子抗菌敷料用于伤口护理。银丝用于手术缝合线。',
               11:'银用于电子导电接触、光伏电池(PV银浆)、摄影(AgBr/AgCl)、镜面镀银、银合金首饰银器、银焊料、银电池(Ag-Zn、Ag-O)。',
               12:'银纳米粒子(AgNPs)是最广泛使用的纳米抗菌材料。银纳米线透明电极替代ITO。纳米银催化乙烯氧化制环氧乙烷。',
               16:'银自古已知，公元前4000年已有银器。银的化学符号Ag来自拉丁语argentum(闪亮的)。美洲银矿(波托西)改变了全球经济。'
       }
  },
  79: { key: '货币金属之王，电子互连的优选，化学惰性的象征', subtitle: '金心不变，价值千秋',
       dims: { 7:'金几乎不参与经典有机反应，但近年来金催化(Au⁺/Au³⁺活化π键)成为有机合成热点。金催化的烯烃氧化、炔烃水合反应是重要发现。',
               11:'金用于电子互连键合线、芯片封装、航天器热反射膜、金合金首饰牙科、纳米金标定试剂、投资储备货币。',
               12:'金纳米粒子(AuNPs)用于生物传感、药物递送、光热治疗肿瘤、SERS增强光谱。金纳米簇(Au₂₅)具有量子尺寸效应和荧光。',
               14:'金在宇宙中通过r过程(快中子捕获)在超新星中产生。地壳金丰度仅0.004ppm，但金矿集中分布。海水含金但浓度极低(~0.01ppb)。',
               16:'金自古已知，是最早被人类利用的金属之一。金箔、金饰在古埃及、古中国、古印度文明中普遍存在。金的化学符号Au来自拉丁语aurum(闪耀的黎明)。'
       }
  },
  92: { key: '核能时代的开端元素，原子弹和核电的核心材料', subtitle: '铀启核能，双面威力',
       dims: { 8:'铀是高毒性重金属，损害肾脏和骨骼。铀的放射性危害更甚于化学毒性。',
               11:'铀用于核电站燃料(²³⁵U裂变)、核武器(²³⁵U浓缩>90%)、铀合金穿甲弹、铀玻璃(黄色荧光)、铀陶瓷颜料。',
               13:'²³⁵U天然丰度0.72%，是唯一可裂变的天然核素。²³⁸U(丰度99.27%)可通过增殖反应堆转化为可裂变²³⁹Pu。铀裂变产生约200MeV能量。',
               16:'铀在1789年由克拉普罗特(Klaproth)发现，命名为Uranus(天王星)。1841年佩利戈(Peligot)首次分离金属铀。1942年费米实现首次可控核裂变(芝加哥)。'
       }
  },
  // 需要为更多元素补充特定事实...
};

// ─── 按类别的内容模板 ───
const CATEGORY_DIMS = {
  'alkali-metal': {
    5: '碱金属化学性质活泼，极易与水反应生成强碱和氢气。氧化态通常为+1。',
    7: '碱金属形成的化合物主要是无机盐类(MCl, MOH, M₂CO₃)。碱金属有机化合物(M-R)在有机合成中用作强碱和还原剂。',
    8: '碱金属离子(Na⁺, K⁺)在生物体中维持细胞膜电位和神经信号传导。Na⁺/K⁺-ATPase泵维持细胞内外离子梯度。K⁺是细胞内主要阳离子，Na⁺是细胞外主要阳离子。',
    9: '碱金属在地壳中广泛分布，海水中含大量Na⁺和K⁺。盐湖蒸发沉积NaCl和KCl。碱金属循环与水文循环密切相关。',
    11: '碱金属用于电池(Li-ion, Na-ion)、合金、催化剂、医药(NaCl生理盐水)、照明(Na灯)、核冷却(Na/K液态合金)。',
    12: '碱金属纳米粒子研究较少(极易氧化)。锂纳米材料用于电池电极(LiFePO₄纳米晶)。钠纳米粒子用于催化。',
    13: '碱金属核结合能较低，容易发生核反应。⁷Li是核聚变的重要燃料(D+T→⁴He+n)。⁶Li用于氚生产。',
    14: '碱金属在宇宙中较丰富(Li/Na/K)。锂在宇宙中异常稀少(Li问题)，是大爆炸核合成和恒星演化的关键研究对象。',
    15: '碱金属矿物：锂辉石、锂云母(Li)；岩盐、芒硝(Na)；钾盐、光卤石(K)。盐湖沉积是Na/K的主要工业来源。',
    16: '',
    17: '碱金属的量子化学核心是单电子价层(ns¹)。碱金属原子光谱的ns→np跃迁产生特征谱线(Na D线589nm)。碱金属离子在水溶液中的行为由离子水合模型描述。',
    18: '碱金属有特征光谱：Li(670.8nm红)、Na(589nm黄)、K(766.5nm紫)、Rb(780nm深红)、Cs(852nm红外)。焰色反应是经典定性分析方法。',
    19: '碱金属前沿：锂/钠离子电池下一代正极材料、固态电解质、碱金属有机催化(C-H活化)、碱金属量子光学(原子钟)、碱金属掺杂超导材料。'
  },
  'noble-gas': {
    5: '稀有气体化学性质极其稳定，不易参与化学反应。全满电子层使其几乎无氧化态(少数例外：Xe可形成+2,+4,+6,+8氧化态化合物)。',
    7: '稀有气体几乎不形成化合物。1962年巴特利特首次合成XePtF₆，打破"惰性气体不反应"的观念。此后XeF₂、XeF₄、XeF₆、XeO₃等化合物被合成。',
    8: '稀有气体在生物体系中无直接作用。氦用于深海潜水呼吸气(防氮麻醉)。氩用于保护性气氛保存生物样本。',
    11: '稀有气体用于照明(霓虹灯Ne、氙灯)、激光(He-Ne激光)、焊接保护气(Ar)、深潜呼吸气(He)、MRI超导冷却(液He)、核反应堆冷却、隔热窗(Ar填充)、氪离子推进器。',
    12: '稀有气体纳米应用较少。氙纳米气泡用于超声造影。氦纳米孔研究量子受限效应。',
    13: '稀有气体核性质特殊：³He用于中子检测(中子吸收截面大)。⁸⁵Kr用于密封源检测。Xe同位素用于医学成像。',
    14: '稀有气体在宇宙中：He是第二丰富元素(大爆炸核合成)。Ne/Ar/Kr/Xe通过恒星核合成产生。地球大气中稀有气体极少(地质过程丢失)。',
    15: '稀有气体在地壳中极稀少。天然气中含He(美国天然气He含量最高)。大气中Ar占0.93%(最丰富的稀有气体)。Kr和Xe极稀少。',
    17: '稀有气体的量子化学特征是全满电子层(1s²到ns²np⁶)。轨道能量稳定，电离能极高(He 2372kJ/mol)。Xe和Kr的化合物基于价层空d轨道参与成键。',
    18: '稀有气体有特征光谱：He(587.6nm黄)、Ne(640nm红/543nm绿)、Ar(696nm红)、Kr(770nm红紫)、Xe(828nm蓝绿)。放电管产生鲜艳颜色用于照明和标识。',
    19: '稀有气体前沿：Xe基量子计算(Xe核自旋)、超重稀有气体化学预测(Og化合物可能性)、氦超流体量子效应、稀有气体低温等离子体技术、氙麻醉剂。'
  },
  'halogen': {
    5: '卤素化学性质活泼，强氧化性。氧化态主要为-1(形成卤化物)，也可有+1,+3,+5,+7正氧化态(除F外)。',
    7: '卤素在有机化学中极为重要。卤代烃(R-X)是有机合成的关键中间体。Grignard反应、Wurtz反应、Sandmeyer反应都涉及卤素。含氟有机物(CFCs、PTFE)有特殊性质。',
    8: '卤素在生物体中：氟保护牙齿(氟化物强化牙釉质)、氯是胃酸(HCl)成分、碘是甲状腺激素(T₃/T₄)必需元素。溴在人体作用尚不完全明确。',
    11: '卤素用于消毒(Cl₂/漂白粉)、制冷剂(CFCs→HFCs)、灭火剂(Halons)、聚合物(PVC/PTFE)、医药(含碘造影剂、含氟药物)、电池(Li-F电池)、照明(卤素灯)。',
    12: '卤素纳米应用：氟化纳米材料表面改性、氯/溴化纳米粒子合成、碘化银纳米晶用于太阳能电池和光催化。',
    14: '卤素在宇宙中较稀少。F/Cl通过s过程产生。星际介质中发现HF和Cl⁺。卤素丰度随原子序数增加而降低。',
    16: 'F(1886年Moissan电解分离)、Cl(1774年Scheele发现，1810年Davy命名)、Br(1826年Balard发现)、I(1811年Courtois发现)、At(1940年人工合成)。'
  },
  'transition': {
    5: '过渡金属有多种氧化态(d电子可参与成键)，形成丰富的配位化合物。催化活性是过渡金属的重要特征。',
    7: '过渡金属催化是现代有机合成的核心。Pd催化交叉偶联(Suzuki, Heck, Negishi)获2010诺贝尔奖。Fe/Ru催化、Cu催化、Ni催化是研究热点。过渡金属络合物(如Pt抗癌药顺铂)有重要医药应用。',
    8: '过渡金属是多种酶的辅因子：Fe(血红蛋白)、Zn(碳酸酐酶)、Cu(SOD)、Mn(光合系统II)、Mo(固氮酶)、Co(维生素B₁₂)。过渡金属缺乏导致各种代谢疾病。',
    11: '过渡金属是工业核心：钢(Fe)、铝材连接(Cu)、化工催化(Pt/Pd/Rh)、合金(Ni超合金/Co硬质合金)、电子(Ag导电/Cu互连)、电镀(Cr/Ni/Zn)、磁性材料(Fe/Ni/Co)。',
    12: '过渡金属纳米粒子催化是纳米技术的核心应用。Pt纳米催化剂(燃料电池)、Au纳米催化、Fe₃O₄纳米磁性粒子(MRI造影)、TiO₂纳米光催化、ZnO纳米UV屏蔽。',
    13: '过渡金属核性质各异。⁶⁰Co是医用和工业放射源。⁵⁹Fe用于血液研究。⁹⁹Mo→⁹⁹mTc是医学SPECT成像最常用核素。V/Cr/Mn等有稳定同位素。',
    14: '过渡金属在宇宙中通过s过程和r过程产生。铁峰元素(Fe/Ni/Co)在超新星中大量产生。铁核结合能/核子最高，是核合成终点。',
    17: '过渡金属量子化学核心是d轨道：晶体场理论/配位场理论描述d轨道分裂和颜色。分子轨道理论描述金属-配体键。DFT广泛用于过渡金属体系计算。',
    18: '过渡金属有丰富光谱：d-d跃迁产生特征颜色(Cu²⁺蓝、Co²⁺粉红)，荷移跃迁产生深色。原子吸收光谱(AAS)用于微量金属检测。X射线荧光(XRF)无损分析。',
    19: '过渡金属前沿：单原子催化(SAC)、MOF多孔材料、过渡金属二硫化物(TMDs)二维材料、高温超导(铜氧化物)、过渡金属电催化(CO₂/N₂还原)、过渡金属电池材料。'
  },
  'lanthanide': {
    5: '镧系元素氧化态主要为+3(少数+2/+4)。镧系收缩导致离子半径从La³⁺(103pm)到Lu³⁺(86pm)逐渐减小，化学性质相似但可分离。',
    7: '镧系有机化学：镧系络合物用于有机催化(La/Sm/Yb催化)。Ce⁴⁺氧化剂用于有机合成。镧系烷基化合物是聚合催化Ziegler-Natta体系的一部分。',
    8: '镧系在生物体系中作用有限(无必需镧系元素)。Gd³⁺用于MRI造影剂(7个未配对电子，强顺磁)。LaCl₃曾用作抑藻剂。镧系毒性较低但长期影响尚研究。',
    11: '镧系("稀土")用于永磁材料(NdFeB最强永磁)、荧光粉(Eu/Tb红色绿色)、激光(Nd:YAG)、催化剂(石油裂化La/Ce)、抛光粉(CeO₂)、储氢合金(LaNi₅)、玻璃添加剂(La/Ce)、陶瓷颜色。',
    12: '镧系纳米材料：纳米荧光粉(高效LED)、Gd纳米粒子(MRI造影)、CeO₂纳米催化(汽车尾气)、镧系MOF(气体存储)、镧系纳米晶上转换(生物成像)。',
    14: '镧系在宇宙中通过r过程(快中子捕获)在超新星中产生。Eu在球状星团中的异常丰度是r过程的证据。',
    16: '镧系发现历史漫长：1794年Gadolin发现Y；1803年Berzelius等发现Ce；1839-1843年Mosander分离La/Nd/Pr；后续镧系逐个发现到1947年Pm(最后一个)。'
  },
  'actinide': {
    5: '锕系元素放射性强，氧化态多变(+3为主，但U有+4/+5/+6，Th+4，Np/Pu多种)。5f电子轨道参与成键使锕系化学比镧系更复杂。',
    7: '锕系有机化学研究有限。铀酰络合物(UO₂²⁺)与有机配体形成各种络合物。钚的配位化学用于核废料处理。',
    8: '锕系元素对生物体有毒(重金属毒性+放射性损伤)。铀损害肾脏，钚极毒(吸入致癌)。镅-241用于烟雾探测器(极微量)。',
    11: '锕系主要用于核能(²³⁵U/²³⁹Pu裂变燃料)、核武器(²³⁹Pu/²³⁵U)、放射源(²⁴¹Am烟雾探测器、²⁴⁴Cm航天热源)、研究(²⁴⁸Cm靶材料)。钍是潜在第四代核燃料。',
    13: '锕系核性质复杂：²³⁵U可裂变(热中子)、²³⁸U增殖(→²³⁹Pu)、²³⁹Pu可裂变、²⁴¹Am放射源(α衰变)、²⁵²Cf强自发裂变中子源。锕系衰变链复杂。',
    14: '锕系在宇宙中通过r过程产生。铀/钍是地球长寿放射性元素，地壳中仍有天然存在(⁴⁰K, ²³⁸U, ²³⁵U, ²³²Th)。超铀元素在地球无天然存量。',
    16: 'U(1789Klaproth)、Th(1828Berzelius)、Pa(1913Soddy/Cranston)、Np/Pu(1940-1Seaborg团队)、Am/Cm(1944-5Seaborg)、后续锕系逐个合成至2000年。'
  }
};

// ─── 每个维度的标题 ───
const DIM_TITLES = [
  '基本属性','原子结构','同位素','物理性质','化学性质',
  '同素异形体/相态','有机/无机化学','生物化学与生命','循环与环境','环境与气候',
  '工业应用','纳米技术','核物理','天体物理','地质学','发现历史',
  '量子化学','光谱学','前沿与未来'
];

// ─── MD生成函数 ───
function generateDetailMD(el) {
  const config = ELECTRON_CONFIGS[el.z] || '...';
  const catCn = CATEGORY_CN[el.category] || el.category;
  const groupName = GROUP_NAMES[el.group] || `第${el.group}族`;
  const facts = ELEMENT_FACTS[el.z] || {};
  const catDims = CATEGORY_DIMS[el.category] || {};
  const subtitle = facts.subtitle || `${catCn}典范，周期之${el.period}`;
  const keyFact = facts.key || `${el.nameEn}，第${el.z}号元素，${catCn}`;
  const stateCn = {solid:'固态',liquid:'液态',gas:'气态',synthetic:'人造'}[el.state] || el.state;
  
  // 维度特定内容生成器
  function dimContent(dimNum) {
    // 优先使用元素特定知识
    if (facts.dims && facts.dims[dimNum]) return facts.dims[dimNum];
    // 其次使用类别模板
    if (catDims[dimNum]) return catDims[dimNum];
    // 最后用通用模板
    return genericDimContent(el, dimNum);
  }

  function genericDimContent(el, dim) {
    switch(dim) {
      case 6: // 同素异形体
        if (el.category === 'nonmetal' || el.category === 'metalloid') {
          return `${el.name}存在多种同素异形体/相态，不同形态具有截然不同的物理性质。详情参见化合物知识库。`;
        }
        return `${el.name}在不同温度/压力下可能存在不同的晶体相态。当前常温稳定相态为${el.crystalStructure || '待研究'}结构。`;
      case 8: // 生物化学
        const essentialMetals = [11,12,13,19,20,22,23,24,25,26,27,28,29,30,34,42,53,74,78];
        if (essentialMetals.includes(el.z)) {
          return `${el.name}是人体必需微量元素，参与多种酶和蛋白质的功能。${el.z<=30?'缺乏'+el.name+'可导致特定代谢疾病。':''}`;
        }
        if (el.category === 'noble-gas') return `${el.name}在生物体系中无直接生化作用。`;
        if (el.radioactive) return `${el.name}是放射性元素，对生物体有辐射损伤风险。`;
        return `${el.name}在生物体系中作用有限，高浓度可能有毒。`;
      case 9: // 循环与环境
        if (el.crustAbundance) return `${el.name}的地壳丰度约${el.crustAbundance}ppm。${el.name}在环境中通过地质和生物过程循环。`;
        return `${el.name}的环境循环信息待补充。`;
      case 10: // 环境与气候
        if (el.category === 'halogen') return `卤素化合物(CFCs等)曾是臭氧层破坏的主要因素，已被蒙特利尔议定书限制。含卤持久性有机污染物(POPs)是环境关注重点。`;
        if (el.category === 'nonmetal' && el.z === 6) return 'CO₂是全球气候变化的核心温室气体。';
        if (el.category === 'alkali-metal' || el.category === 'alkaline-earth') return `${el.name}的环境影响主要来自工业开采和废弃物。`;
        return `${el.name}的环境影响主要取决于其化合物的毒性和生物可利用性。`;
      case 13: // 核物理
        const bindingE = el.z <= 30 ? `约${(el.z * 8).toFixed(0)} MeV（估算）` : '待详细计算';
        return `${el.name}的核结合能${bindingE}。${el.radioactive ? `${el.name}是放射性元素，半衰期取决于具体同位素。` : `最稳定同位素的核结合能/核子约为7-8.8 MeV。`}`;
      case 14: // 天体物理
        return `${el.name}的地壳丰度约${el.crustAbundance || '极低'}ppm。在宇宙中通过恒星核合成过程产生。`;
      case 15: // 地质学
        return `${el.name}在地质过程中通过矿物形成、风化、沉积等循环。主要矿物形式参见工业制备部分。`;
      case 16: // 发现历史
        return `${el.name}的发现历史和命名来源参见基本信息。${el.radioactive ? '放射性元素多由加速器合成发现。' : ''}`;
      case 17: // 量子化学
        return `${el.name}的量子化学性质由其电子构型${config}决定。价电子层结构决定了其成键模式和分子几何。`;
      case 18: // 光谱学
        return `${el.name}有特征光谱线，用于定性分析和定量检测。焰色反应和原子吸收光谱是常用的分析方法。`;
      case 19: // 前沿与未来
        return `${el.name}的前沿研究方向包括：新型合金材料、催化应用、纳米技术、能源存储、量子材料等。`;
      default: return `${el.name}在此领域的详细信息待进一步补充。`;
    }
  }

  // ─── 构建MD ───
  let md = '';
  md += `# ${el.name}（${el.symbol}）· ${el.nameEn} — 全面知识图谱\n\n`;
  md += `> ${el.name}，第${el.z}号元素，${catCn}，第${el.period}周期${el.group > 0 ? '第'+el.group+'族' : ''}。\n\n`;
  md += `**核心标签：** 第${el.z}号元素 | ${catCn} | ${el.period}周期${el.group>0?el.group+'族':''} | ${stateCn}\n\n`;

  // 维度1: 基本属性
  md += `## 1. 基本属性\n\n`;
  md += `${el.name}（${el.nameEn}）是第${el.z}号元素，属于${catCn}，位于第${el.period}周期${el.group>0?'第'+el.group+'族':''}。常温下为${stateCn}，电子构型 **${config}**。${el.electronegativity ? `电负性${el.electronegativity}（Pauling标度）。` : ''}${el.ionizationEnergy ? `第一电离能${el.ionizationEnergy} kJ/mol。` : ''}\n\n`;
  md += `${keyFact}\n\n`;

  md += `### 基本参数总表\n\n`;
  md += `| 属性 | 数值 | 属性 | 数值 |\n|------|------|------|------|\n`;
  md += `| 符号 | ${el.symbol} | 原子量 | ${el.mass} u |\n`;
  md += `| 熔点 | ${el.meltingPoint !== null ? el.meltingPoint + '°C' : '待测定'} | 沸点 | ${el.boilingPoint !== null ? el.boilingPoint + '°C' : '待测定'} |\n`;
  md += `| 密度 | ${el.density !== null ? el.density + ' g/cm³' : '待测定'} | 电负性 | ${el.electronegativity !== null ? el.electronegativity : '未定义'} |\n`;
  md += `| 第一电离能 | ${el.ionizationEnergy !== null ? el.ionizationEnergy + ' kJ/mol' : '待测定'} | 电子亲和能 | ${el.electronAffinity !== null ? el.electronAffinity + ' kJ/mol' : '待测定'} |\n`;
  md += `| 原子半径 | ${el.atomicRadius !== null ? el.atomicRadius + ' pm' : '待测定'} | 共价半径 | ${el.covalentRadius !== null ? el.covalentRadius + ' pm' : '待测定'} |\n`;
  md += `| 范德华半径 | ${el.vdwRadius !== null ? el.vdwRadius + ' pm' : '待测定'} | 离子半径 | ${el.ionicRadius !== null ? el.ionicRadius + ' pm' : '待测定'} |\n`;
  md += `| 晶体结构 | ${el.crystalStructure || '未知'} | CAS号 | ${el.casNumber || '待查'} |\n`;
  md += `| 氧化态 | ${el.oxidationStates.join(', ')} | 元素类别 | ${catCn} |\n\n`;

  // 维度2: 原子结构
  md += `## 2. 原子结构\n\n`;
  md += `${el.name}的核外电子排布为 **${config}**。原子序数${el.z}，核外有${el.z}个电子分布在各电子层上。\n\n`;
  md += `- **完整电子排布：** ${config}\n`;
  md += `- **价电子：** ${el.electrons ? el.electrons.join(',') + '层分布' : '由最外层轨道决定'}\n\n`;
  
  // 维度3: 同位素
  md += `## 3. 同位素\n\n`;
  md += `${el.name}有${el.isotopes ? el.isotopes.length : 0}种已知同位素。\n\n`;
  md += `| 同位素 | 质量数 | 天然丰度 | 半衰期 | 衰变方式 | 说明 |\n|--------|--------|----------|--------|----------|------|\n`;
  if (el.isotopes) {
    el.isotopes.forEach(iso => {
      md += `| ${el.symbol}-${iso.massNumber} | ${iso.massNumber} | ${iso.abundance !== null ? (iso.abundance + '%') : '痕量/人工'} | ${iso.halfLife || '—'} | ${iso.decayMode || '—'} | ${iso.note || ''} |\n`;
    });
  }
  md += '\n';

  // 维度4: 物理性质
  md += `## 4. 物理性质\n\n`;
  md += `${el.name}在常温下为${stateCn}。\n\n`;
  md += `### 热力学性质\n\n`;
  md += `| 性质 | 数值 | 说明 |\n|------|------|------|\n`;
  md += `| 熔点 | ${el.meltingPoint !== null ? el.meltingPoint + '°C' : '待测定'} | — |\n`;
  md += `| 沸点 | ${el.boilingPoint !== null ? el.boilingPoint + '°C' : '待测定'} | — |\n`;
  md += `| 密度 | ${el.density !== null ? el.density + ' g/cm³' : '待测定'} | 常温 |\n`;
  md += `| 热导率 | ${el.thermalConductivity !== null ? el.thermalConductivity + ' W/(m·K)' : '待测定'} | — |\n`;
  md += `| 电阻率 | ${el.electricalResistivity !== null ? el.electricalResistivity + ' nΩ·m' : '待测定'} | 20°C |\n`;
  md += `| 莫氏硬度 | ${el.hardnessMohs !== null ? el.hardnessMohs : '待测定'} | — |\n`;
  md += `| 杨氏模量 | ${el.youngsModulus !== null ? el.youngsModulus + ' GPa' : '待测定'} | — |\n`;
  md += `| 剪切模量 | ${el.shearModulus !== null ? el.shearModulus + ' GPa' : '待测定'} | — |\n`;
  md += `| 体积模量 | ${el.bulkModulus !== null ? el.bulkModulus + ' GPa' : '待测定'} | — |\n`;
  md += `| 标准熵 | ${el.standardEntropy !== null ? el.standardEntropy + ' J/(mol·K)' : '待测定'} | — |\n`;
  md += `| 摩尔热容 | ${el.molarHeatCapacity !== null ? el.molarHeatCapacity + ' J/(mol·K)' : '待测定'} | — |\n\n`;

  // 维度5: 化学性质
  md += `## 5. 化学性质\n\n`;
  md += dimContent(5) + '\n\n';

  // 维度6-19
  for (let dim = 6; dim <= 19; dim++) {
    md += `## ${dim}. ${DIM_TITLES[dim-1]}\n\n`;
    const content = dimContent(dim);
    md += content + '\n\n';
  }

  return md;
}

// ─── 生成所有MD文件 ───
if (!fs.existsSync(DETAILS_DIR)) fs.mkdirSync(DETAILS_DIR, {recursive:true});

let totalChars = 0;
let generated = 0;
for (const el of elements) {
  const key = el.detailKey || el.symbol;
  const mdPath = path.join(DETAILS_DIR, `${key}.md`);
  const mdContent = generateDetailMD(el);
  fs.writeFileSync(mdPath, mdContent, 'utf-8');
  totalChars += mdContent.length;
  generated++;
}
console.log(`✅ 生成 ${generated} 个详情MD文件，总计 ${totalChars} 字符`);
console.log(`平均每文件 ${Math.round(totalChars/generated)} 字符`);
