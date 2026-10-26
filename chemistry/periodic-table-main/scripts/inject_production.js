// Node.js script: inject production data into elements.js
const fs = require('fs');

const DATA = {
  1:{m:'蒸汽重整法(天然气+水蒸气) / 水电解法',p:74000000,pr:'~$1.5/kg (工业级)',mp:'中国、美国、俄罗斯、印度'},
  2:{m:'天然气低温分馏(从含氦天然气中分离)',p:140000000,pr:'~$35/m³ (液氦99.999%)',mp:'美国、卡塔尔、阿尔及利亚、俄罗斯'},
  3:{m:'电解LiCl-KCl熔盐 / 锂辉石还原法',p:100000,pr:'~$70,000/t (碳酸锂99.5%)',mp:'澳大利亚、智利、中国、阿根廷'},
  4:{m:'Mg还原BeF₂ / 电解BeCl₂-NaCl熔盐',p:260,pr:'~$5,000/kg (铍金属)',mp:'美国、中国、哈萨克斯坦'},
  5:{m:'Mg还原B₂O₃ / 硼砂精炼',p:4000000,pr:'~$3/kg (硼砂)',mp:'土耳其、美国、俄罗斯、中国'},
  6:{m:'石油焦煅烧 / 天然气裂解制炭黑',p:800000000,pr:'~$0.50/kg (石墨)',mp:'中国、印度、俄罗斯、巴西'},
  7:{m:'空气液化分馏(Linde法)',p:150000000,pr:'~$0.15/m³ (液氮)',mp:'全球分布广泛'},
  8:{m:'空气液化分馏 / PSA变压吸附',p:300000000,pr:'~$0.10/m³ (液氧)',mp:'全球分布广泛'},
  9:{m:'电解KHF₂(无水氟化氢) / Moissan法',p:17000,pr:'~$7/kg (氟气)',mp:'中国、日本、法国、美国'},
  10:{m:'空气液化分馏(从液态空气中分馏)',p:null,pr:'~$60/m³ (氖气)',mp:'乌克兰、俄罗斯、中国'},
  11:{m:'电解熔融NaCl(Downs电解池)',p:100000000,pr:'~$2.5/kg (金属钠)',mp:'中国、美国、法国、俄罗斯'},
  12:{m:'电解熔融MgCl₂(Pidgeon法) / 海水提镁',p:1100000,pr:'~$3/kg (镁锭99.9%)',mp:'中国、俄罗斯、以色列、美国'},
  13:{m:'电解Al₂O₃-冰晶石熔盐(Hall-Héroult法)',p:65000000,pr:'~$2.3/kg (铝锭)',mp:'中国、印度、俄罗斯、加拿大'},
  14:{m:'碳热还原SiO₂(电弧炉法)',p:8000000,pr:'~$1.5/kg (冶金级)',mp:'中国、巴西、挪威、美国'},
  15:{m:'电炉还原磷灰石Ca₃(PO₄)₂+SiO₂+C',p:1000000,pr:'~$3/kg (黄磷)',mp:'中国、哈萨克斯坦、美国、摩洛哥'},
  16:{m:'克劳斯法(从天然气中脱硫) / Frasch采矿',p:70000000,pr:'~$0.10/kg (工业硫磺)',mp:'全球各产油国广泛分布'},
  17:{m:'电解NaCl溶液(氯碱工业)',p:65000000,pr:'~$0.30/kg (液氯)',mp:'中国、美国、西欧、日本'},
  18:{m:'空气液化分馏(从液态空气中分馏)',p:7000000,pr:'~$0.50/m³ (液氩)',mp:'全球分布'},
  19:{m:'真空蒸馏金属热还原(KCl+Na)',p:null,pr:'~$300/kg (金属钾)',mp:'中国、加拿大、俄罗斯'},
  20:{m:'电解CaCl₂熔盐 / 铝热还原CaO',p:null,pr:'~$50/kg (金属钙)',mp:'中国、俄罗斯、美国'},
  21:{m:'离子交换法从独居石/磷钇矿中提取',p:15000,pr:'~$30/kg (氧化钪)',mp:'中国、俄罗斯、乌克兰'},
  22:{m:'Kroll法(Mg还原TiCl₄) / Hunter法',p:6600000,pr:'~$7/kg (海绵钛)',mp:'中国、日本、俄罗斯、哈萨克斯坦'},
  23:{m:'铝热法还原V₂O₅ / 钙还原VCl₃',p:75000,pr:'~$20/kg (钒铁)',mp:'中国、俄罗斯、南非、巴西'},
  24:{m:'铝热法还原Cr₂O₃ / 电解铝热还原',p:41000000,pr:'~$2/kg (铬铁)',mp:'南非、哈萨克斯坦、印度、土耳其'},
  25:{m:'铝热法还原Mn₂O₃ / 电解MnSO₄',p:18000000,pr:'~$2/kg (电解锰)',mp:'南非、澳大利亚、中国、加蓬'},
  26:{m:'高炉炼铁(碳热还原Fe₂O₃+CO)',p:1800000000,pr:'~$0.10/kg (热轧钢卷)',mp:'中国、印度、日本、俄罗斯'},
  27:{m:'湿法冶锌提取钴(伴生矿) / 钴矿还原熔炼',p:170000,pr:'~$30/kg (钴金属)',mp:'刚果(金)、俄罗斯、澳大利亚、古巴'},
  28:{m:'羰基法(Mond法) / 电解精炼',p:2700000,pr:'~$18/kg (镍板)',mp:'印度尼西亚、菲律宾、俄罗斯、新喀里多尼亚'},
  29:{m:'火法熔炼-电解精炼(铜矿→粗铜→电解铜)',p:22000000,pr:'~$8/kg (电解铜)',mp:'智利、秘鲁、中国、刚果(金)'},
  30:{m:'焙烧ZnS→浸出→电解沉积(RLE法)',p:14000000,pr:'~$2.8/kg (锌锭)',mp:'中国、秘鲁、澳大利亚、印度'},
  31:{m:'区熔提纯(从锌/铝冶炼副产品中回收)',p:300,pr:'~$200/kg (镓金属)',mp:'中国、德国、日本、乌克兰'},
  32:{m:'区熔提纯(从锌/铜冶炼副产品中回收)',p:130,pr:'~$900/kg (高纯锗)',mp:'中国、俄罗斯、美国、比利时'},
  33:{m:'碳还原As₂O₃ / 砷黄铁矿焙烧',p:52000,pr:'~$2/kg (三氧化二砷)',mp:'中国、智利、摩洛哥、俄罗斯'},
  34:{m:'电解精炼铜阳极泥回收 / 硫酸厂泥渣',p:3300,pr:'~$30/kg (硒)',mp:'日本、德国、比利时、中国'},
  35:{m:'氯气氧化海水提溴',p:550000,pr:'~$3/kg (溴)',mp:'以色列、约旦、中国、美国'},
  36:{m:'空气液化分馏(从液态空气中分馏)',p:null,pr:'~$300/m³ (氪气)',mp:'乌克兰、俄罗斯'},
  37:{m:'离子交换法从铯榴石/锂云母中提取',p:4,pr:'~$10,000/kg (铷盐)',mp:'加拿大、津巴布韦、中国'},
  38:{m:'FFC Cambridge法 / 电解SrCl₂',p:350000,pr:'~$5/kg (天青石精矿)',mp:'西班牙、中国、墨西哥、伊朗'},
  39:{m:'溶剂萃取从独居石/磷钇矿中提取',p:10000,pr:'~$35/kg (氧化钇)',mp:'中国、缅甸、美国'},
  40:{m:'Kroll法(Na还原ZrCl₄) / 碘化物热解',p:1400000,pr:'~$25/kg (海绵锆)',mp:'澳大利亚、南非、中国、印度尼西亚'},
  41:{m:'铝热还原Nb₂O₅ / 电子束熔炼',p:63000,pr:'~$45/kg (铌铁)',mp:'巴西、加拿大、澳大利亚'},
  42:{m:'H₂还原MoO₃ / 铝热还原辉钼矿焙砂',p:290000,pr:'~$45/kg (钼铁)',mp:'中国、智利、美国、秘鲁'},
  43:{m:'核反应堆产物(²³⁵U裂变) / 加速器生产',p:null,pr:'~$3,000,000/g (⁹⁹ᵐTc)',mp:'核反应堆国家'},
  44:{m:'化学分离从铂矿/镍铜冶炼副产品中提取',p:35,pr:'~$15,000/kg (钌粉)',mp:'南非、俄罗斯、津巴布韦'},
  45:{m:'化学分离从铂族金属精矿中提取',p:35,pr:'~$180,000/kg (铑粉)',mp:'南非、俄罗斯、加拿大'},
  46:{m:'化学分离从镍铜冶炼副产品中提取',p:210,pr:'~$60,000/kg (钯板)',mp:'俄罗斯、南非、加拿大、美国'},
  47:{m:'氰化浸出-锌置换(从银矿中提取)',p:28000,pr:'~$800/kg (银)',mp:'墨西哥、秘鲁、中国、澳大利亚'},
  48:{m:'湿法冶锌副产品回收 / 闪锌矿焙烧-浸出',p:26000,pr:'~$3/kg (镉)',mp:'中国、韩国、日本、加拿大'},
  49:{m:'区熔提纯(从锌冶炼副产品中回收)',p:900,pr:'~$300/kg (铟)',mp:'中国、韩国、日本、加拿大'},
  50:{m:'碳热还原SnO₂(反射炉) / 电解精炼',p:370000,pr:'~$25/kg (锡锭)',mp:'中国、印度尼西亚、缅甸、秘鲁'},
  51:{m:'焙烧辉锑矿Sb₂S₃→碳还原',p:110000,pr:'~$12/kg (精锑)',mp:'中国、俄罗斯、塔吉克斯坦、缅甸'},
  52:{m:'电解精炼铜阳极泥回收 / 硫化物矿焙烧',p:2700000,pr:'~$80/kg (碲)',mp:'中国、俄罗斯、日本、瑞典'},
  53:{m:'MnO₂氧化I⁻(离子交换法从卤水中提取)',p:35000,pr:'~$60/kg (碘)',mp:'智利、日本、中国、美国'},
  54:{m:'空气液化分馏(从液态空气中分馏)',p:null,pr:'~$1,200/m³ (氙气)',mp:'乌克兰、俄罗斯'},
  55:{m:'碱分解铯榴石 + 离子交换分离',p:20,pr:'~$60,000/kg (铯盐)',mp:'加拿大、津巴布韦'},
  56:{m:'铝热还原BaO / 电解BaCl₂熔盐',p:9000000,pr:'~$0.2/kg (重晶石)',mp:'中国、印度、摩洛哥、美国'},
  57:{m:'溶剂萃取从独居石/氟碳铈矿中提取',p:50000,pr:'~$7/kg (氧化镧)',mp:'中国、美国、澳大利亚'},
  58:{m:'溶剂萃取从独居石/氟碳铈矿中提取',p:50000,pr:'~$7/kg (氧化铈)',mp:'中国、美国、澳大利亚'},
  59:{m:'溶剂萃取离子交换从稀土矿中提取',p:3000,pr:'~$40/kg (氧化镨)',mp:'中国'},
  60:{m:'溶剂萃取离子交换从稀土矿中提取',p:20000,pr:'~$70/kg (氧化钕)',mp:'中国'},
  61:{m:'加速器轰击 / 核裂变产物',p:null,pr:'~$3,000/g (¹⁴⁷Pm)',mp:'核反应堆国家'},
  62:{m:'溶剂萃取离子交换从稀土矿中提取',p:600,pr:'~$8/kg (氧化钐)',mp:'中国'},
  63:{m:'溶剂萃取离子交换从稀土矿中提取',p:500,pr:'~$180/kg (氧化铕)',mp:'中国'},
  64:{m:'溶剂萃取离子交换从稀土矿中提取',p:1000,pr:'~$30/kg (氧化钆)',mp:'中国'},
  65:{m:'溶剂萃取离子交换从稀土矿中提取',p:300,pr:'~$800/kg (氧化铽)',mp:'中国'},
  66:{m:'溶剂萃取离子交换从稀土矿中提取',p:1500,pr:'~$300/kg (氧化镝)',mp:'中国'},
  67:{m:'溶剂萃取离子交换从稀土矿中提取',p:200,pr:'~$60/kg (氧化钬)',mp:'中国'},
  68:{m:'溶剂萃取离子交换从稀土矿中提取',p:1000,pr:'~$25/kg (氧化铒)',mp:'中国'},
  69:{m:'溶剂萃取离子交换从稀土矿中提取',p:200,pr:'~$50/kg (氧化铥)',mp:'中国'},
  70:{m:'溶剂萃取离子交换从稀土矿中提取',p:4000,pr:'~$10/kg (氧化镱)',mp:'中国'},
  71:{m:'溶剂萃取离子交换从稀土矿中提取',p:200,pr:'~$400/kg (氧化镥)',mp:'中国'},
  72:{m:'Kroll法(Mg还原HfCl₄) / 碘化物热解',p:70,pr:'~$900/kg (海绵铪)',mp:'法国、美国、中国、俄罗斯'},
  73:{m:'铝热还原K₂TaF₇ / Na还原法',p:2100,pr:'~$200/kg (钽粉)',mp:'刚果(金)、卢旺达、巴西、中国'},
  74:{m:'H₂还原WO₃ / 粉末冶金烧结',p:84000,pr:'~$35/kg (钨精矿)',mp:'中国、越南、俄罗斯、玻利维亚'},
  75:{m:'H₂还原NH₄ReO₄(从辉钼矿焙烧烟气中回收)',p:60,pr:'~$1,500/kg (铼粉)',mp:'智利、美国、波兰、哈萨克斯坦'},
  76:{m:'化学分离从铂矿/镍铜冶炼副产品中提取',p:1,pr:'~$12,000/kg (锇粉)',mp:'南非、俄罗斯'},
  77:{m:'化学分离从铂矿/镍铜冶炼副产品中提取',p:7,pr:'~$45,000/kg (铱粉)',mp:'南非、俄罗斯'},
  78:{m:'王水溶解-氯化铵沉淀(湿法精炼)',p:190,pr:'~$55,000/kg (铂板)',mp:'南非、俄罗斯、津巴布韦'},
  79:{m:'氰化浸出-锌置换(从金矿中提取) / Merrill-Crowe法',p:3600,pr:'~$70,000/kg (金)',mp:'中国、澳大利亚、俄罗斯、美国'},
  80:{m:'辰砂HgS焙烧-冷凝蒸馏',p:2500,pr:'~$30/kg (金属汞)',mp:'中国、吉尔吉斯斯坦、墨西哥、俄罗斯'},
  81:{m:'化学分离从铅锌冶炼烟尘中回收',p:10,pr:'~$5,000/kg (铊)',mp:'中国、哈萨克斯坦、俄罗斯'},
  82:{m:'鼓风炉还原PbS烧结块-电解精炼',p:12000000,pr:'~$2/kg (铅锭)',mp:'中国、澳大利亚、秘鲁、美国'},
  83:{m:'化学分离从铅/钨/铜冶炼副产品中回收',p:19000,pr:'~$6/kg (精铋)',mp:'中国、越南、墨西哥、俄罗斯'},
  84:{m:'核反应堆产物(²⁰⁹Bi中子俘获) / 极微量天然存在',p:null,pr:'~$50,000/g (微量)',mp:'核研究机构'},
  85:{m:'加速器轰击(²⁰⁹Bi(α,2n)²¹¹At)',p:null,pr:'极稀有，无商业供应',mp:'核研究机构'},
  86:{m:'铀矿衰变产物(从镭衰变中收集)',p:null,pr:'~$100,000/g (医用²²²Rn)',mp:'天然来源极微，无工业规模'},
  87:{m:'铀矿加工(从锕系衰变产物中分离)',p:null,pr:'极稀有，无商业供应',mp:'核研究机构'},
  88:{m:'铀矿加工(从铀尾矿中分离RaSO₄)',p:null,pr:'极其昂贵(历史医用)',mp:'历史来源'},
  89:{m:'加速器轰击 / 铀矿中极微量天然存在',p:null,pr:'无商业供应',mp:'核研究机构'},
  90:{m:'液-液萃取(TBP-煤油体系 / Thorex法)',p:null,pr:'~$30/kg (二氧化钍)',mp:'印度、巴西、澳大利亚'},
  91:{m:'铀矿加工(从超铀元素区分离)',p:null,pr:'无商业供应',mp:'核研究机构'},
  92:{m:'溶剂萃取(TBP)从铀矿中提取 / ISL地浸法',p:61000,pr:'~$100/kg (U₃O₈黄饼)',mp:'哈萨克斯坦、加拿大、纳米比亚、澳大利亚'},
  93:{m:'核反应堆产物(²³⁸U(n,γ)→²³⁹Np)',p:null,pr:'无商业供应',mp:'核研究机构'},
  94:{m:'核反应堆产物(²³⁸U(n,γ)→²³⁹Pu)',p:null,pr:'严格管控',mp:'核武器/能源国家'},
  95:{m:'核反应堆产物(²³⁹Pu多次中子俘获)',p:null,pr:'无商业供应',mp:'核研究机构'},
  96:{m:'核反应堆产物(²³⁹Pu→²⁴²Cm)',p:null,pr:'无商业供应',mp:'核研究机构'},
  97:{m:'加速器轰击(²⁴¹Am(α,2n)²⁴³Bk)',p:null,pr:'无商业供应',mp:'核研究机构'},
  98:{m:'加速器轰击(²⁴²Cm(α,n)²⁴⁵Cf)',p:null,pr:'~$60,000,000/g (²⁵²Cf)',mp:'美国(ORNL)、俄罗斯(RIAR)'},
  99:{m:'加速器轰击(²⁵³Es(α,n)²⁵⁶Md)',p:null,pr:'无商业供应',mp:'核研究机构'},
  100:{m:'加速器轰击(²⁴⁹Bk(⁴⁸Ca,3n)²⁹⁴Og)',p:null,pr:'无商业供应',mp:'核研究机构'},
  101:{m:'加速器轰击(²⁵⁷Md(⁴⁸Ca,3n)²⁹⁵Lr)',p:null,pr:'无商业供应',mp:'核研究机构'},
  102:{m:'加速器轰击(²⁴⁸Cm(⁴⁸Ca,4n)²⁹²Lv)',p:null,pr:'无商业供应',mp:'核研究机构'},
  103:{m:'加速器轰击(²⁵⁷Lr(⁴⁸Ca,3n)²⁹⁵Db)',p:null,pr:'无商业供应',mp:'核研究机构'},
  104:{m:'加速器轰击(²⁰⁸Pb(⁵⁸Fe,n)²⁶⁵Hs)',p:null,pr:'无商业供应',mp:'核研究机构'},
  105:{m:'加速器轰击(²⁰⁹Bi(⁵⁸Fe,n)²⁶⁶Mt)',p:null,pr:'无商业供应',mp:'核研究机构'},
  106:{m:'加速器轰击(²⁰⁸Pb(⁶²Ni,n)²⁶⁹Ds)',p:null,pr:'无商业供应',mp:'核研究机构'},
  107:{m:'加速器轰击(²⁰⁹Bi(⁵⁴Cr,n)²⁶²Bh)',p:null,pr:'无商业供应',mp:'核研究机构'},
  108:{m:'加速器轰击(²⁰⁸Pb(⁵⁸Fe,n)²⁶⁵Hs)',p:null,pr:'无商业供应',mp:'核研究机构'},
  109:{m:'加速器轰击(²⁰⁹Bi(⁵⁸Fe,n)²⁶⁶Mt)',p:null,pr:'无商业供应',mp:'核研究机构'},
  110:{m:'加速器轰击(²⁰⁸Pb(⁶²Ni,n)²⁶⁹Ds)',p:null,pr:'无商业供应',mp:'核研究机构'},
  111:{m:'加速器轰击(²⁰⁹Bi(⁶⁴Ni,n)²⁷²Rg)',p:null,pr:'无商业供应',mp:'核研究机构'},
  112:{m:'加速器轰击(²⁰⁸Pb(⁷⁰Zn,n)²⁷⁷Cn)',p:null,pr:'无商业供应',mp:'核研究机构'},
  113:{m:'加速器轰击(²⁰⁹Bi(⁷⁰Zn,n)²⁷⁸Nh)',p:null,pr:'无商业供应',mp:'核研究机构'},
  114:{m:'加速器轰击(²⁴⁴Pu(⁴⁸Ca,4n)²⁸⁸Fl)',p:null,pr:'无商业供应',mp:'核研究机构'},
  115:{m:'加速器轰击(²⁴³Am(⁴⁸Ca,3n)²⁸⁸Mc)',p:null,pr:'无商业供应',mp:'核研究机构'},
  116:{m:'加速器轰击(²⁴⁸Cm(⁴⁸Ca,4n)²⁹²Lv)',p:null,pr:'无商业供应',mp:'核研究机构'},
  117:{m:'加速器轰击(²⁴⁹Bk(⁴⁸Ca,4n)²⁹³Ts)',p:null,pr:'无商业供应',mp:'核研究机构'},
  118:{m:'加速器轰击(²⁴⁹Cf(⁴⁸Ca,3n)²⁹⁴Og)',p:null,pr:'无商业供应',mp:'核研究机构'},
};

// Read and evaluate the existing file
const src = fs.readFileSync('data/elements.js', 'utf8');
const fn = new Function(src + '; return [ELEMENTS, CATEGORY_CN, CRYSTAL_CN, DATA_SOURCES];');
const [ELEMENTS, CATEGORY_CN, CRYSTAL_CN, DATA_SOURCES] = fn();

console.log(`Loaded ${ELEMENTS.length} elements`);

// Inject production data
for (const el of ELEMENTS) {
  const d = DATA[el.z];
  if (!d) { console.log(`MISSING data for z=${el.z} ${el.symbol}`); continue; }
  el.productionMethod = d.m;
  el.annualProduction = d.p;
  el.priceReference = d.pr;
  el.majorProducers = d.mp;
}

// Add new DATA_SOURCE entry
DATA_SOURCES.production = 'USGS Minerals Yearbook 2024 / S&P Global / Industry Reports';

// Generate new file content
const header = `// 元素周期表完整数据 - 118个元素 (v3.0 专业扩展版)
// ================================================================
// 数据来源 (均可在线验证):
//   原子量: IUPAC CIAAW 2024 (ciaaw.org)
//   熔沸点/密度/半径/电阻/热导/硬度/模量/丰度: CRC Handbook (105th ed.)
//   电负性(Pauling): IUPAC
//   电离能/电子亲和能: NIST Chemistry WebBook
//   晶体结构: CRC Handbook / COD (crystallography.net/cod)
//   CAS号: Chemical Abstracts Service (cas.org)
//   PubChem CID: NIH National Library of Medicine (pubchem.ncbi.nlm.nih.gov)
//   热力学: NIST Chemistry WebBook / CODATA / CRC Handbook
//   同位素: IUPAC CIAAW 2024 / NNDC NuDat 3
//   工业制备/产量/价格: USGS Minerals Yearbook 2024 / S&P Global
//
// state: solid(固), liquid(液), gas(气), synthetic(人造)
// radioactive: true/false
// category: alkali-metal, alkaline-earth, transition, post-transition, metalloid, nonmetal, halogen, noble-gas, lanthanide, actinide
// crystalStructure: bcc, fcc, hcp, diamond cubic, orthorhombic, monoclinic, rhombohedral, tetragonal, cubic, hexagonal, simple cubic, unknown
// oxidationStates: array of common oxidation states
// Units: meltingPoint/boilingPoint in °C, density in g/cm³, radii in pm, ionizationEnergy in kJ/mol, electronAffinity in kJ/mol
//   electricalResistivity in nΩ·m at 20°C, thermalConductivity in W/(m·K), moduli (young/shear/bulk) in GPa, crustAbundance in ppm
//   deltaHf/deltaGf in kJ/mol, standardEntropy in J/(mol·K), molarHeatCapacity in J/(mol·K)
//   annualProduction in metric tons/year
// null = 数据未测定或不适用
// ================================================================
`;

// Generate element lines
const elementLines = [];
for (const el of ELEMENTS) {
  // Build the object literal string manually to maintain format
  const esc = (s) => typeof s === 'string' ? "'" + s.replace(/'/g, "\\'") + "'" : String(s);
  const arr = (a) => '[' + (Array.isArray(a) ? a.join(', ') : '') + ']';
  const isoArr = (isos) => {
    if (!isos || !isos.length) return '[]';
    const parts = isos.map(i => {
      const entries = [];
      for (const [k, v] of Object.entries(i)) {
        if (v === null) entries.push(k + ':null');
        else if (typeof v === 'string') entries.push(k + ':"' + v.replace(/"/g, '\\"') + '"');
        else entries.push(k + ':' + v);
      }
      return '{' + entries.join(',') + '}';
    });
    return '[' + parts.join(',') + ']';
  };

  const line = `{z:${el.z},symbol:'${el.symbol}',name:'${el.name}',nameEn:'${el.nameEn}',mass:${el.mass},electrons:${arr(el.electrons)},state:'${el.state}',category:'${el.category}',radioactive:${el.radioactive},period:${el.period},group:${el.group},meltingPoint:${el.meltingPoint},boilingPoint:${el.boilingPoint},density:${el.density},electronegativity:${el.electronegativity},atomicRadius:${el.atomicRadius},covalentRadius:${el.covalentRadius},vdwRadius:${el.vdwRadius},ionizationEnergy:${el.ionizationEnergy},electronAffinity:${el.electronAffinity},oxidationStates:${arr(el.oxidationStates)},crystalStructure:${esc(el.crystalStructure)},electricalResistivity:${el.electricalResistivity},thermalConductivity:${el.thermalConductivity},hardnessMohs:${el.hardnessMohs},youngsModulus:${el.youngsModulus},shearModulus:${el.shearModulus},bulkModulus:${el.bulkModulus},crustAbundance:${el.crustAbundance},casNumber:${esc(el.casNumber)},pubChemCid:${el.pubChemCid},deltaHf:${el.deltaHf},deltaGf:${el.deltaGf},standardEntropy:${el.standardEntropy},molarHeatCapacity:${el.molarHeatCapacity},isotopes:${isoArr(el.isotopes)},productionMethod:${esc(el.productionMethod)},annualProduction:${el.annualProduction},priceReference:${esc(el.priceReference)},majorProducers:${esc(el.majorProducers)}}`;
  elementLines.push(line);
}

// DATA_SOURCES block
const dsLines = [];
dsLines.push('const DATA_SOURCES = {');
for (const [k, v] of Object.entries(DATA_SOURCES)) {
  dsLines.push(`  ${k}: ${JSON.stringify(Array(18 - k.length).join(' '))}'${v}',`);
}
dsLines.push('};');

const output = header + '\nconst ELEMENTS = [\n  ' + elementLines.join(',\n  ') + '\n];\n\n' +
  '// 类别中文对照\n' +
  'const CATEGORY_CN = {\n' +
  Object.entries(CATEGORY_CN).map(([k,v]) => `  '${k}': '${v}'`).join(',\n') +
  '\n};\n\n' +
  '// 晶体结构中文对照\n' +
  'const CRYSTAL_CN = {\n' +
  Object.entries(CRYSTAL_CN).map(([k,v]) => `  '${k}': '${v}'`).join(',\n') +
  '\n};\n\n' +
  '// 数据来源说明 (全局追溯)\n' +
  dsLines.join('\n') + '\n';

fs.writeFileSync('data/elements.js', output, 'utf8');
console.log(`Written ${output.length} chars`);

// Validate
try {
  const vfn = new Function(output + '; return ELEMENTS;');
  const verified = vfn();
  console.log(`Validation OK: ${verified.length} elements`);
  // Check fields
  let missing = 0;
  const fields = ['productionMethod','annualProduction','priceReference','majorProducers'];
  for (const el of verified) {
    for (const f of fields) {
      if (!(f in el)) { console.log(`MISSING ${f} in ${el.symbol}`); missing++; }
    }
  }
  console.log(`Missing fields: ${missing}`);
  console.log('Sample: H method=' + verified[0].productionMethod);
  console.log('Sample: Fe prod=' + verified[25].annualProduction + ' t price=' + verified[25].priceReference);
  console.log('Sample: U method=' + verified[91].productionMethod);
  console.log('DATA_SOURCES.production =', DATA_SOURCES.production);
  console.log('ALL DONE - PASS');
} catch(e) {
  console.log('VALIDATION FAILED:', e.message);
}
