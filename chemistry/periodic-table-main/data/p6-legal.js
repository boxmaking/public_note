/**
 * P6 法规合规数据 — 独立数据文件
 * 加载方式：<script src="data/p6-legal.js"></script>
 *
 * 数据来源:
 *   中国《危险化学品目录》(2015版)
 *   EU REACH法规 (EC 1907/2006)
 *   RoHS指令 (2011/65/EU)
 *   IMDG Code / IATA-DGR / ADR
 *   GB 16297-1996 / GB 8978-1996 / GB 36600-2018 / GBZ 2.1-2019
 *   《两用物项和技术进出口许可证管理目录》
 *   GB 18871-2002《电离辐射防护与辐射源安全基本标准》
 */

const P6_LEGAL = {};


// H — 氢

P6_LEGAL['H'] = {
  "chinaHazChem": {
    "catalogEntry": "第1662项",
    "hazardClass": "易燃气体",
    "note": "列入目录——压缩氢气"
  },
  "reach": {
    "svhc": false,
    "authorization": false,
    "restriction": "附录XVII 第40条",
    "registrationStatus": "已注册",
    "note": ""
  },
  "rohs": {
    "restricted": false,
    "maxConcentration": null,
    "scope": "",
    "note": ""
  },
  "transport": {
    "imdg": {
      "un": "UN1049",
      "class": "2.1",
      "pg": "-"
    },
    "iata": {
      "un": "UN1049",
      "class": "2.1",
      "pg": "-"
    },
    "adr": {
      "un": "UN1049",
      "class": "2.1",
      "pg": "-"
    },
    "note": ""
  },
  "environmental": {
    "airEmission": {
      "standard": "GB 16297-1996",
      "limit": "无组织排放监控浓度限值",
      "note": ""
    },
    "waterDischarge": {
      "standard": "GB 8978-1996",
      "limit": "—",
      "note": ""
    },
    "soil": {
      "standard": "GB 36600-2018",
      "limit": "—",
      "note": ""
    },
    "note": ""
  },
  "importExport": {
    "dualUseControlled": false,
    "licenseRequired": false,
    "controlList": "",
    "note": ""
  },
  "occupationalHealth": {
    "oelTwa": null,
    "oelStel": null,
    "gbzStandard": "GBZ 2.1-2019",
    "biologicalMonitoring": "",
    "healthSurveillance": "",
    "note": "单纯窒息性气体，无特定OEL"
  }
};


// He — 氦

P6_LEGAL['He'] = {
  "chinaHazChem": {
    "catalogEntry": "不列入危化品目录",
    "hazardClass": "—",
    "note": "不列入危化品目录"
  },
  "reach": {
    "svhc": false,
    "authorization": false,
    "restriction": "",
    "registrationStatus": "",
    "note": "惰性气体，REACH豁免（附件V）"
  },
  "rohs": {
    "restricted": false,
    "maxConcentration": null,
    "scope": "",
    "note": ""
  },
  "transport": {
    "imdg": {
      "un": "UN1046",
      "class": "2.2",
      "pg": "-"
    },
    "iata": {
      "un": "UN1046",
      "class": "2.2",
      "pg": "-"
    },
    "adr": {
      "un": "UN1046",
      "class": "2.2",
      "pg": "-"
    },
    "note": ""
  },
  "environmental": {
    "airEmission": {
      "standard": "",
      "limit": "",
      "note": ""
    },
    "waterDischarge": {
      "standard": "",
      "limit": "",
      "note": ""
    },
    "soil": {
      "standard": "",
      "limit": "",
      "note": ""
    },
    "note": "惰性气体，无特定排放标准"
  },
  "importExport": {
    "dualUseControlled": false,
    "licenseRequired": false,
    "controlList": "",
    "note": ""
  },
  "occupationalHealth": {
    "oelTwa": null,
    "oelStel": null,
    "gbzStandard": "GBZ 2.1-2019",
    "biologicalMonitoring": "",
    "healthSurveillance": "",
    "note": "单纯窒息性气体，无特定OEL"
  }
};


// Li — 锂

P6_LEGAL['Li'] = {
  "chinaHazChem": {
    "catalogEntry": "第1557项",
    "hazardClass": "遇水放出易燃气体的物质",
    "note": "列入目录"
  },
  "reach": {
    "svhc": false,
    "authorization": false,
    "restriction": "",
    "registrationStatus": "已注册",
    "note": "锂离子电池行业关注物质"
  },
  "rohs": {
    "restricted": false,
    "maxConcentration": null,
    "scope": "",
    "note": "锂电池豁免条款参照RoHS指令附录"
  },
  "transport": {
    "imdg": {
      "un": "UN1415",
      "class": "4.3",
      "pg": "-"
    },
    "iata": {
      "un": "UN1415",
      "class": "4.3",
      "pg": "-"
    },
    "adr": {
      "un": "UN1415",
      "class": "4.3",
      "pg": "-"
    },
    "note": ""
  },
  "environmental": {
    "airEmission": {
      "standard": "",
      "limit": "",
      "note": ""
    },
    "waterDischarge": {
      "standard": "GB 8978-1996",
      "limit": "总锂排放限值",
      "note": ""
    },
    "soil": {
      "standard": "",
      "limit": "",
      "note": ""
    },
    "note": "锂电池回收管理适用"
  },
  "importExport": {
    "dualUseControlled": true,
    "licenseRequired": false,
    "controlList": "两用物项和技术出口许可证管理目录",
    "note": "金属锂出口受管制"
  },
  "occupationalHealth": {
    "oelTwa": "0.025mg/m³",
    "oelStel": null,
    "gbzStandard": "GBZ 2.1-2019",
    "biologicalMonitoring": "",
    "healthSurveillance": "",
    "note": "锂化合物以Li计"
  }
};


// Be — 铍

P6_LEGAL['Be'] = {
  "chinaHazChem": {
    "catalogEntry": "第1558项",
    "hazardClass": "毒性物质",
    "note": "列入目录——铍及其化合物"
  },
  "reach": {
    "svhc": true,
    "authorization": false,
    "restriction": "",
    "registrationStatus": "已注册",
    "note": "铍及其化合物列入SVHC清单"
  },
  "rohs": {
    "restricted": false,
    "maxConcentration": null,
    "scope": "",
    "note": ""
  },
  "transport": {
    "imdg": {
      "un": "UN1567",
      "class": "6.1",
      "pg": "-"
    },
    "iata": {
      "un": "UN1567",
      "class": "6.1",
      "pg": "-"
    },
    "adr": {
      "un": "UN1567",
      "class": "6.1",
      "pg": "-"
    },
    "note": ""
  },
  "environmental": {
    "airEmission": {
      "standard": "GB 16297-1996",
      "limit": "铍及其化合物排放限值",
      "note": ""
    },
    "waterDischarge": {
      "standard": "GB 8978-1996",
      "limit": "总铍 0.005mg/L",
      "note": ""
    },
    "soil": {
      "standard": "GB 36600-2018",
      "limit": "建设用地第一类用地筛选值 20mg/kg",
      "note": ""
    },
    "note": ""
  },
  "importExport": {
    "dualUseControlled": true,
    "licenseRequired": false,
    "controlList": "核材料管制",
    "note": "铍用于核工业，属战略物资"
  },
  "occupationalHealth": {
    "oelTwa": "0.0005mg/m³",
    "oelStel": null,
    "gbzStandard": "GBZ 2.1-2019",
    "biologicalMonitoring": "尿铍",
    "healthSurveillance": "职业性铍病体检",
    "note": "IARC 1类致癌物"
  }
};


// B — 硼

P6_LEGAL['B'] = {
  "chinaHazChem": {
    "catalogEntry": "不列入危化品目录（单质硼）",
    "hazardClass": "—",
    "note": "硼化合物部分列入"
  },
  "reach": {
    "svhc": false,
    "authorization": false,
    "restriction": "",
    "registrationStatus": "已注册",
    "note": ""
  },
  "rohs": {
    "restricted": false,
    "maxConcentration": null,
    "scope": "",
    "note": ""
  },
  "transport": {
    "imdg": {
      "un": null,
      "class": null,
      "pg": "-"
    },
    "iata": {
      "un": null,
      "class": null,
      "pg": "-"
    },
    "adr": {
      "un": null,
      "class": null,
      "pg": "-"
    },
    "note": "非危险货物"
  },
  "environmental": {
    "airEmission": {
      "standard": "",
      "limit": "",
      "note": ""
    },
    "waterDischarge": {
      "standard": "GB 8978-1996",
      "limit": "硼 0.5mg/L（硼砂）",
      "note": ""
    },
    "soil": {
      "standard": "GB 36600-2018",
      "limit": "—",
      "note": ""
    },
    "note": ""
  },
  "importExport": {
    "dualUseControlled": false,
    "licenseRequired": false,
    "controlList": "",
    "note": ""
  },
  "occupationalHealth": {
    "oelTwa": "10mg/m³",
    "oelStel": null,
    "gbzStandard": "GBZ 2.1-2019",
    "biologicalMonitoring": "",
    "healthSurveillance": "",
    "note": "硼化合物以B计，总粉尘"
  }
};


// C — 碳

P6_LEGAL['C'] = {
  "chinaHazChem": {
    "catalogEntry": "不列入危化品目录（单质碳）",
    "hazardClass": "—",
    "note": "碳黑、活性碳等部分形态有专项规定"
  },
  "reach": {
    "svhc": false,
    "authorization": false,
    "restriction": "",
    "registrationStatus": "已注册",
    "note": "碳黑已注册"
  },
  "rohs": {
    "restricted": false,
    "maxConcentration": null,
    "scope": "",
    "note": ""
  },
  "transport": {
    "imdg": {
      "un": null,
      "class": null,
      "pg": "-"
    },
    "iata": {
      "un": null,
      "class": null,
      "pg": "-"
    },
    "adr": {
      "un": null,
      "class": null,
      "pg": "-"
    },
    "note": "非危险货物（碳黑：UN1361，4.2类）"
  },
  "environmental": {
    "airEmission": {
      "standard": "GB 16297-1996",
      "limit": "颗粒物排放限值",
      "note": ""
    },
    "waterDischarge": {
      "standard": "GB 8978-1996",
      "limit": "—",
      "note": ""
    },
    "soil": {
      "standard": "GB 36600-2018",
      "limit": "多环芳烃类参照GB 36600",
      "note": ""
    },
    "note": ""
  },
  "importExport": {
    "dualUseControlled": false,
    "licenseRequired": false,
    "controlList": "",
    "note": ""
  },
  "occupationalHealth": {
    "oelTwa": "4mg/m³",
    "oelStel": null,
    "gbzStandard": "GBZ 2.1-2019",
    "biologicalMonitoring": "",
    "healthSurveillance": "",
    "note": "碳黑为IARC 2B类致癌物，呼吸性粉尘"
  }
};


// N — 氮

P6_LEGAL['N'] = {
  "chinaHazChem": {
    "catalogEntry": "不列入危化品目录（氮气）",
    "hazardClass": "—",
    "note": "压缩氮气按气体管理"
  },
  "reach": {
    "svhc": false,
    "authorization": false,
    "restriction": "",
    "registrationStatus": "",
    "note": "元素态氮气，REACH豁免"
  },
  "rohs": {
    "restricted": false,
    "maxConcentration": null,
    "scope": "",
    "note": ""
  },
  "transport": {
    "imdg": {
      "un": "UN1066",
      "class": "2.2",
      "pg": "-"
    },
    "iata": {
      "un": "UN1066",
      "class": "2.2",
      "pg": "-"
    },
    "adr": {
      "un": "UN1066",
      "class": "2.2",
      "pg": "-"
    },
    "note": ""
  },
  "environmental": {
    "airEmission": {
      "standard": "",
      "limit": "",
      "note": ""
    },
    "waterDischarge": {
      "standard": "",
      "limit": "",
      "note": ""
    },
    "soil": {
      "standard": "",
      "limit": "",
      "note": ""
    },
    "note": "氮氧化物(NOx)排放受GB 16297管控"
  },
  "importExport": {
    "dualUseControlled": false,
    "licenseRequired": false,
    "controlList": "",
    "note": ""
  },
  "occupationalHealth": {
    "oelTwa": null,
    "oelStel": null,
    "gbzStandard": "GBZ 2.1-2019",
    "biologicalMonitoring": "",
    "healthSurveillance": "",
    "note": "单纯窒息性气体，无特定OEL"
  }
};


// O — 氧

P6_LEGAL['O'] = {
  "chinaHazChem": {
    "catalogEntry": "不列入危化品目录（氧气）",
    "hazardClass": "—",
    "note": "压缩氧气按气体管理"
  },
  "reach": {
    "svhc": false,
    "authorization": false,
    "restriction": "",
    "registrationStatus": "",
    "note": "元素态氧气，REACH豁免"
  },
  "rohs": {
    "restricted": false,
    "maxConcentration": null,
    "scope": "",
    "note": ""
  },
  "transport": {
    "imdg": {
      "un": "UN1072",
      "class": "2.2",
      "pg": "-"
    },
    "iata": {
      "un": "UN1072",
      "class": "2.2",
      "pg": "-"
    },
    "adr": {
      "un": "UN1072",
      "class": "2.2",
      "pg": "-"
    },
    "note": "氧化性气体"
  },
  "environmental": {
    "airEmission": {
      "standard": "",
      "limit": "",
      "note": ""
    },
    "waterDischarge": {
      "standard": "",
      "limit": "",
      "note": ""
    },
    "soil": {
      "standard": "",
      "limit": "",
      "note": ""
    },
    "note": "不适用"
  },
  "importExport": {
    "dualUseControlled": false,
    "licenseRequired": false,
    "controlList": "",
    "note": ""
  },
  "occupationalHealth": {
    "oelTwa": null,
    "oelStel": null,
    "gbzStandard": "GBZ 2.1-2019",
    "biologicalMonitoring": "",
    "healthSurveillance": "",
    "note": "富氧环境火灾风险，无特定OEL"
  }
};


// F — 氟

P6_LEGAL['F'] = {
  "chinaHazChem": {
    "catalogEntry": "第1559项",
    "hazardClass": "氧化性气体,毒性气体",
    "note": "列入目录"
  },
  "reach": {
    "svhc": false,
    "authorization": false,
    "restriction": "附录XVII",
    "registrationStatus": "已注册",
    "note": ""
  },
  "rohs": {
    "restricted": false,
    "maxConcentration": null,
    "scope": "",
    "note": ""
  },
  "transport": {
    "imdg": {
      "un": "UN1045",
      "class": "2.3",
      "pg": "-"
    },
    "iata": {
      "un": "UN1045",
      "class": "2.3",
      "pg": "-"
    },
    "adr": {
      "un": "UN1045",
      "class": "2.3",
      "pg": "-"
    },
    "note": "兼有氧化性（5.1副危险性）"
  },
  "environmental": {
    "airEmission": {
      "standard": "GB 16297-1996",
      "limit": "氟化物排放限值",
      "note": ""
    },
    "waterDischarge": {
      "standard": "GB 8978-1996",
      "limit": "氟化物 10mg/L",
      "note": ""
    },
    "soil": {
      "standard": "GB 36600-2018",
      "limit": "—",
      "note": ""
    },
    "note": ""
  },
  "importExport": {
    "dualUseControlled": false,
    "licenseRequired": false,
    "controlList": "",
    "note": ""
  },
  "occupationalHealth": {
    "oelTwa": "0.2mg/m³",
    "oelStel": "0.6mg/m³",
    "gbzStandard": "GBZ 2.1-2019",
    "biologicalMonitoring": "",
    "healthSurveillance": "",
    "note": "以F计"
  }
};


// Ne — 氖

P6_LEGAL['Ne'] = {
  "chinaHazChem": {
    "catalogEntry": "不列入危化品目录",
    "hazardClass": "—",
    "note": "不列入危化品目录"
  },
  "reach": {
    "svhc": false,
    "authorization": false,
    "restriction": "",
    "registrationStatus": "",
    "note": "惰性气体，REACH豁免（附件V）"
  },
  "rohs": {
    "restricted": false,
    "maxConcentration": null,
    "scope": "",
    "note": ""
  },
  "transport": {
    "imdg": {
      "un": "UN1065",
      "class": "2.2",
      "pg": "-"
    },
    "iata": {
      "un": "UN1065",
      "class": "2.2",
      "pg": "-"
    },
    "adr": {
      "un": "UN1065",
      "class": "2.2",
      "pg": "-"
    },
    "note": ""
  },
  "environmental": {
    "airEmission": {
      "standard": "",
      "limit": "",
      "note": ""
    },
    "waterDischarge": {
      "standard": "",
      "limit": "",
      "note": ""
    },
    "soil": {
      "standard": "",
      "limit": "",
      "note": ""
    },
    "note": "惰性气体，无特定排放标准"
  },
  "importExport": {
    "dualUseControlled": false,
    "licenseRequired": false,
    "controlList": "",
    "note": ""
  },
  "occupationalHealth": {
    "oelTwa": null,
    "oelStel": null,
    "gbzStandard": "GBZ 2.1-2019",
    "biologicalMonitoring": "",
    "healthSurveillance": "",
    "note": "单纯窒息性气体，无特定OEL"
  }
};


// Na — 钠

P6_LEGAL['Na'] = {
  "chinaHazChem": {
    "catalogEntry": "第1560项",
    "hazardClass": "遇水放出易燃气体的物质",
    "note": "列入目录"
  },
  "reach": {
    "svhc": false,
    "authorization": false,
    "restriction": "",
    "registrationStatus": "已注册",
    "note": ""
  },
  "rohs": {
    "restricted": false,
    "maxConcentration": null,
    "scope": "",
    "note": ""
  },
  "transport": {
    "imdg": {
      "un": "UN1428",
      "class": "4.3",
      "pg": "-"
    },
    "iata": {
      "un": "UN1428",
      "class": "4.3",
      "pg": "-"
    },
    "adr": {
      "un": "UN1428",
      "class": "4.3",
      "pg": "-"
    },
    "note": ""
  },
  "environmental": {
    "airEmission": {
      "standard": "",
      "limit": "",
      "note": ""
    },
    "waterDischarge": {
      "standard": "",
      "limit": "",
      "note": ""
    },
    "soil": {
      "standard": "",
      "limit": "",
      "note": ""
    },
    "note": "钠块处置需防潮防燃"
  },
  "importExport": {
    "dualUseControlled": false,
    "licenseRequired": false,
    "controlList": "",
    "note": ""
  },
  "occupationalHealth": {
    "oelTwa": "0.5mg/m³",
    "oelStel": null,
    "gbzStandard": "GBZ 2.1-2019",
    "biologicalMonitoring": "",
    "healthSurveillance": "",
    "note": "金属钠烟"
  }
};


// Mg — 镁

P6_LEGAL['Mg'] = {
  "chinaHazChem": {
    "catalogEntry": "第1572项",
    "hazardClass": "遇水放出易燃气体的物质",
    "note": "镁粉列入目录"
  },
  "reach": {
    "svhc": false,
    "authorization": false,
    "restriction": "",
    "registrationStatus": "已注册",
    "note": ""
  },
  "rohs": {
    "restricted": false,
    "maxConcentration": null,
    "scope": "",
    "note": ""
  },
  "transport": {
    "imdg": {
      "un": "UN1869",
      "class": "4.1",
      "pg": "-"
    },
    "iata": {
      "un": "UN1869",
      "class": "4.1",
      "pg": "-"
    },
    "adr": {
      "un": "UN1869",
      "class": "4.1",
      "pg": "-"
    },
    "note": "镁粉；镁锭非危险货物"
  },
  "environmental": {
    "airEmission": {
      "standard": "",
      "limit": "",
      "note": ""
    },
    "waterDischarge": {
      "standard": "",
      "limit": "",
      "note": ""
    },
    "soil": {
      "standard": "",
      "limit": "",
      "note": ""
    },
    "note": "非特定污染物"
  },
  "importExport": {
    "dualUseControlled": false,
    "licenseRequired": false,
    "controlList": "",
    "note": "镁粉出口受管制（易制爆化学品）"
  },
  "occupationalHealth": {
    "oelTwa": "10mg/m³",
    "oelStel": null,
    "gbzStandard": "GBZ 2.1-2019",
    "biologicalMonitoring": "",
    "healthSurveillance": "",
    "note": "镁烟 3mg/m³"
  }
};


// Al — 铝

P6_LEGAL['Al'] = {
  "chinaHazChem": {
    "catalogEntry": "不列入危化品目录（铝锭）",
    "hazardClass": "—",
    "note": "铝粉列入第1561项"
  },
  "reach": {
    "svhc": false,
    "authorization": false,
    "restriction": "",
    "registrationStatus": "已注册",
    "note": ""
  },
  "rohs": {
    "restricted": false,
    "maxConcentration": null,
    "scope": "",
    "note": ""
  },
  "transport": {
    "imdg": {
      "un": "UN1396",
      "class": "4.1",
      "pg": "-"
    },
    "iata": {
      "un": "UN1396",
      "class": "4.1",
      "pg": "-"
    },
    "adr": {
      "un": "UN1396",
      "class": "4.1",
      "pg": "-"
    },
    "note": "铝粉；铝锭非危险货物"
  },
  "environmental": {
    "airEmission": {
      "standard": "",
      "limit": "",
      "note": ""
    },
    "waterDischarge": {
      "standard": "GB 8978-1996",
      "limit": "—",
      "note": ""
    },
    "soil": {
      "standard": "GB 36600-2018",
      "limit": "—",
      "note": ""
    },
    "note": ""
  },
  "importExport": {
    "dualUseControlled": false,
    "licenseRequired": false,
    "controlList": "",
    "note": ""
  },
  "occupationalHealth": {
    "oelTwa": "3mg/m³",
    "oelStel": null,
    "gbzStandard": "GBZ 2.1-2019",
    "biologicalMonitoring": "",
    "healthSurveillance": "",
    "note": "铝粉尘 3mg/m³"
  }
};


// Si — 硅

P6_LEGAL['Si'] = {
  "chinaHazChem": {
    "catalogEntry": "不列入危化品目录（单质硅）",
    "hazardClass": "—",
    "note": ""
  },
  "reach": {
    "svhc": false,
    "authorization": false,
    "restriction": "",
    "registrationStatus": "已注册",
    "note": ""
  },
  "rohs": {
    "restricted": false,
    "maxConcentration": null,
    "scope": "",
    "note": ""
  },
  "transport": {
    "imdg": {
      "un": null,
      "class": null,
      "pg": "-"
    },
    "iata": {
      "un": null,
      "class": null,
      "pg": "-"
    },
    "adr": {
      "un": null,
      "class": null,
      "pg": "-"
    },
    "note": "非危险货物"
  },
  "environmental": {
    "airEmission": {
      "standard": "",
      "limit": "",
      "note": ""
    },
    "waterDischarge": {
      "standard": "",
      "limit": "",
      "note": ""
    },
    "soil": {
      "standard": "",
      "limit": "",
      "note": ""
    },
    "note": "硅粉尘按总粉尘管理"
  },
  "importExport": {
    "dualUseControlled": false,
    "licenseRequired": false,
    "controlList": "",
    "note": "高纯硅材料出口管制（半导体相关）"
  },
  "occupationalHealth": {
    "oelTwa": "5mg/m³",
    "oelStel": null,
    "gbzStandard": "GBZ 2.1-2019",
    "biologicalMonitoring": "",
    "healthSurveillance": "",
    "note": "呼吸性结晶型二氧化硅需更低限值"
  }
};


// P — 磷

P6_LEGAL['P'] = {
  "chinaHazChem": {
    "catalogEntry": "第1562项",
    "hazardClass": "自燃物质",
    "note": "白磷（黄磷）列入目录"
  },
  "reach": {
    "svhc": false,
    "authorization": false,
    "restriction": "附录XVII",
    "registrationStatus": "已注册",
    "note": "白磷受限"
  },
  "rohs": {
    "restricted": false,
    "maxConcentration": null,
    "scope": "",
    "note": ""
  },
  "transport": {
    "imdg": {
      "un": "UN1381",
      "class": "4.2",
      "pg": "-"
    },
    "iata": {
      "un": "UN1381",
      "class": "4.2",
      "pg": "-"
    },
    "adr": {
      "un": "UN1381",
      "class": "4.2",
      "pg": "-"
    },
    "note": "白磷自燃；红磷为UN1338, 4.1类"
  },
  "environmental": {
    "airEmission": {
      "standard": "GB 16297-1996",
      "limit": "磷化氢排放限值",
      "note": ""
    },
    "waterDischarge": {
      "standard": "GB 8978-1996",
      "limit": "总磷 0.5mg/L",
      "note": ""
    },
    "soil": {
      "standard": "GB 36600-2018",
      "limit": "—",
      "note": ""
    },
    "note": ""
  },
  "importExport": {
    "dualUseControlled": true,
    "licenseRequired": false,
    "controlList": "两用物项——黄磷出口管制",
    "note": ""
  },
  "occupationalHealth": {
    "oelTwa": "0.05mg/m³",
    "oelStel": null,
    "gbzStandard": "GBZ 2.1-2019",
    "biologicalMonitoring": "",
    "healthSurveillance": "",
    "note": "白磷蒸气"
  }
};


// S — 硫

P6_LEGAL['S'] = {
  "chinaHazChem": {
    "catalogEntry": "第1563项",
    "hazardClass": "易燃固体",
    "note": "硫磺列入目录"
  },
  "reach": {
    "svhc": false,
    "authorization": false,
    "restriction": "",
    "registrationStatus": "已注册",
    "note": ""
  },
  "rohs": {
    "restricted": false,
    "maxConcentration": null,
    "scope": "",
    "note": ""
  },
  "transport": {
    "imdg": {
      "un": "UN1350",
      "class": "4.1",
      "pg": "-"
    },
    "iata": {
      "un": "UN1350",
      "class": "4.1",
      "pg": "-"
    },
    "adr": {
      "un": "UN1350",
      "class": "4.1",
      "pg": "-"
    },
    "note": "硫磺粉；熔融硫为UN2448"
  },
  "environmental": {
    "airEmission": {
      "standard": "GB 16297-1996",
      "limit": "二氧化硫排放限值",
      "note": ""
    },
    "waterDischarge": {
      "standard": "GB 8978-1996",
      "limit": "硫化物 1.0mg/L",
      "note": ""
    },
    "soil": {
      "standard": "GB 36600-2018",
      "limit": "—",
      "note": ""
    },
    "note": ""
  },
  "importExport": {
    "dualUseControlled": false,
    "licenseRequired": false,
    "controlList": "",
    "note": "硫磺属易制爆化学品"
  },
  "occupationalHealth": {
    "oelTwa": "10mg/m³",
    "oelStel": null,
    "gbzStandard": "GBZ 2.1-2019",
    "biologicalMonitoring": "",
    "healthSurveillance": "",
    "note": "二氧化硫 5mg/m³"
  }
};


// Cl — 氯

P6_LEGAL['Cl'] = {
  "chinaHazChem": {
    "catalogEntry": "第1564项",
    "hazardClass": "毒性气体,氧化性气体",
    "note": "列入目录"
  },
  "reach": {
    "svhc": false,
    "authorization": false,
    "restriction": "附录XVII",
    "registrationStatus": "已注册",
    "note": ""
  },
  "rohs": {
    "restricted": false,
    "maxConcentration": null,
    "scope": "",
    "note": ""
  },
  "transport": {
    "imdg": {
      "un": "UN1017",
      "class": "2.3",
      "pg": "-"
    },
    "iata": {
      "un": "UN1017",
      "class": "2.3",
      "pg": "-"
    },
    "adr": {
      "un": "UN1017",
      "class": "2.3",
      "pg": "-"
    },
    "note": "兼有氧化性（5.1副危险性）"
  },
  "environmental": {
    "airEmission": {
      "standard": "GB 16297-1996",
      "limit": "氯气排放限值",
      "note": ""
    },
    "waterDischarge": {
      "standard": "GB 8978-1996",
      "limit": "总余氯 0.5mg/L",
      "note": ""
    },
    "soil": {
      "standard": "GB 36600-2018",
      "limit": "—",
      "note": ""
    },
    "note": ""
  },
  "importExport": {
    "dualUseControlled": true,
    "licenseRequired": false,
    "controlList": "两用物项——氯气可作化学武器前体",
    "note": ""
  },
  "occupationalHealth": {
    "oelTwa": "1mg/m³",
    "oelStel": "2mg/m³",
    "gbzStandard": "GBZ 2.1-2019",
    "biologicalMonitoring": "",
    "healthSurveillance": "",
    "note": ""
  }
};


// Ar — 氩

P6_LEGAL['Ar'] = {
  "chinaHazChem": {
    "catalogEntry": "不列入危化品目录",
    "hazardClass": "—",
    "note": "不列入危化品目录"
  },
  "reach": {
    "svhc": false,
    "authorization": false,
    "restriction": "",
    "registrationStatus": "",
    "note": "惰性气体，REACH豁免（附件V）"
  },
  "rohs": {
    "restricted": false,
    "maxConcentration": null,
    "scope": "",
    "note": ""
  },
  "transport": {
    "imdg": {
      "un": "UN1006",
      "class": "2.2",
      "pg": "-"
    },
    "iata": {
      "un": "UN1006",
      "class": "2.2",
      "pg": "-"
    },
    "adr": {
      "un": "UN1006",
      "class": "2.2",
      "pg": "-"
    },
    "note": ""
  },
  "environmental": {
    "airEmission": {
      "standard": "",
      "limit": "",
      "note": ""
    },
    "waterDischarge": {
      "standard": "",
      "limit": "",
      "note": ""
    },
    "soil": {
      "standard": "",
      "limit": "",
      "note": ""
    },
    "note": "惰性气体，无特定排放标准"
  },
  "importExport": {
    "dualUseControlled": false,
    "licenseRequired": false,
    "controlList": "",
    "note": ""
  },
  "occupationalHealth": {
    "oelTwa": null,
    "oelStel": null,
    "gbzStandard": "GBZ 2.1-2019",
    "biologicalMonitoring": "",
    "healthSurveillance": "",
    "note": "单纯窒息性气体，无特定OEL"
  }
};


// K — 钾

P6_LEGAL['K'] = {
  "chinaHazChem": {
    "catalogEntry": "第1565项",
    "hazardClass": "遇水放出易燃气体的物质",
    "note": "列入目录"
  },
  "reach": {
    "svhc": false,
    "authorization": false,
    "restriction": "",
    "registrationStatus": "已注册",
    "note": ""
  },
  "rohs": {
    "restricted": false,
    "maxConcentration": null,
    "scope": "",
    "note": ""
  },
  "transport": {
    "imdg": {
      "un": "UN2257",
      "class": "4.3",
      "pg": "-"
    },
    "iata": {
      "un": "UN2257",
      "class": "4.3",
      "pg": "-"
    },
    "adr": {
      "un": "UN2257",
      "class": "4.3",
      "pg": "-"
    },
    "note": ""
  },
  "environmental": {
    "airEmission": {
      "standard": "",
      "limit": "",
      "note": ""
    },
    "waterDischarge": {
      "standard": "",
      "limit": "",
      "note": ""
    },
    "soil": {
      "standard": "",
      "limit": "",
      "note": ""
    },
    "note": "非特定污染物"
  },
  "importExport": {
    "dualUseControlled": false,
    "licenseRequired": false,
    "controlList": "",
    "note": ""
  },
  "occupationalHealth": {
    "oelTwa": "2mg/m³",
    "oelStel": null,
    "gbzStandard": "GBZ 2.1-2019",
    "biologicalMonitoring": "",
    "healthSurveillance": "",
    "note": "钾烟"
  }
};


// Ca — 钙

P6_LEGAL['Ca'] = {
  "chinaHazChem": {
    "catalogEntry": "第1566项",
    "hazardClass": "遇水放出易燃气体的物质",
    "note": "钙列入目录"
  },
  "reach": {
    "svhc": false,
    "authorization": false,
    "restriction": "",
    "registrationStatus": "已注册",
    "note": ""
  },
  "rohs": {
    "restricted": false,
    "maxConcentration": null,
    "scope": "",
    "note": ""
  },
  "transport": {
    "imdg": {
      "un": "UN1401",
      "class": "4.3",
      "pg": "-"
    },
    "iata": {
      "un": "UN1401",
      "class": "4.3",
      "pg": "-"
    },
    "adr": {
      "un": "UN1401",
      "class": "4.3",
      "pg": "-"
    },
    "note": ""
  },
  "environmental": {
    "airEmission": {
      "standard": "",
      "limit": "",
      "note": ""
    },
    "waterDischarge": {
      "standard": "",
      "limit": "",
      "note": ""
    },
    "soil": {
      "standard": "",
      "limit": "",
      "note": ""
    },
    "note": "非特定污染物"
  },
  "importExport": {
    "dualUseControlled": false,
    "licenseRequired": false,
    "controlList": "",
    "note": ""
  },
  "occupationalHealth": {
    "oelTwa": "2mg/m³",
    "oelStel": null,
    "gbzStandard": "GBZ 2.1-2019",
    "biologicalMonitoring": "",
    "healthSurveillance": "",
    "note": "钙烟"
  }
};


// Sc — 钪

P6_LEGAL['Sc'] = {
  "chinaHazChem": {
    "catalogEntry": "不列入危化品目录",
    "hazardClass": "—",
    "note": "稀土元素"
  },
  "reach": {
    "svhc": false,
    "authorization": false,
    "restriction": "",
    "registrationStatus": "已注册",
    "note": ""
  },
  "rohs": {
    "restricted": false,
    "maxConcentration": null,
    "scope": "",
    "note": ""
  },
  "transport": {
    "imdg": {
      "un": null,
      "class": null,
      "pg": "-"
    },
    "iata": {
      "un": null,
      "class": null,
      "pg": "-"
    },
    "adr": {
      "un": null,
      "class": null,
      "pg": "-"
    },
    "note": "非危险货物"
  },
  "environmental": {
    "airEmission": {
      "standard": "",
      "limit": "",
      "note": ""
    },
    "waterDischarge": {
      "standard": "",
      "limit": "",
      "note": ""
    },
    "soil": {
      "standard": "",
      "limit": "",
      "note": ""
    },
    "note": "稀土元素参照行业标准"
  },
  "importExport": {
    "dualUseControlled": false,
    "licenseRequired": false,
    "controlList": "",
    "note": "稀土出口许可证管理"
  },
  "occupationalHealth": {
    "oelTwa": "5mg/m³",
    "oelStel": null,
    "gbzStandard": "GBZ 2.1-2019",
    "biologicalMonitoring": "",
    "healthSurveillance": "",
    "note": "钪化合物粉尘"
  }
};


// Ti — 钛

P6_LEGAL['Ti'] = {
  "chinaHazChem": {
    "catalogEntry": "不列入危化品目录（钛金属）",
    "hazardClass": "—",
    "note": "钛粉列入第1567项"
  },
  "reach": {
    "svhc": false,
    "authorization": false,
    "restriction": "",
    "registrationStatus": "已注册",
    "note": ""
  },
  "rohs": {
    "restricted": false,
    "maxConcentration": null,
    "scope": "",
    "note": ""
  },
  "transport": {
    "imdg": {
      "un": "UN2546",
      "class": "4.1",
      "pg": "-"
    },
    "iata": {
      "un": "UN2546",
      "class": "4.1",
      "pg": "-"
    },
    "adr": {
      "un": "UN2546",
      "class": "4.1",
      "pg": "-"
    },
    "note": "钛粉；钛金属非危险货物"
  },
  "environmental": {
    "airEmission": {
      "standard": "",
      "limit": "",
      "note": ""
    },
    "waterDischarge": {
      "standard": "",
      "limit": "",
      "note": ""
    },
    "soil": {
      "standard": "",
      "limit": "",
      "note": ""
    },
    "note": "钛粉尘按总粉尘管理"
  },
  "importExport": {
    "dualUseControlled": false,
    "licenseRequired": false,
    "controlList": "",
    "note": ""
  },
  "occupationalHealth": {
    "oelTwa": "10mg/m³",
    "oelStel": null,
    "gbzStandard": "GBZ 2.1-2019",
    "biologicalMonitoring": "",
    "healthSurveillance": "",
    "note": "二氧化钛粉尘"
  }
};


// V — 钒

P6_LEGAL['V'] = {
  "chinaHazChem": {
    "catalogEntry": "第1568项",
    "hazardClass": "毒性物质",
    "note": "钒化合物列入目录"
  },
  "reach": {
    "svhc": true,
    "authorization": false,
    "restriction": "",
    "registrationStatus": "已注册",
    "note": "五氧化二钒列入SVHC"
  },
  "rohs": {
    "restricted": false,
    "maxConcentration": null,
    "scope": "",
    "note": ""
  },
  "transport": {
    "imdg": {
      "un": "UN3287",
      "class": "6.1",
      "pg": "-"
    },
    "iata": {
      "un": "UN3287",
      "class": "6.1",
      "pg": "-"
    },
    "adr": {
      "un": "UN3287",
      "class": "6.1",
      "pg": "-"
    },
    "note": "钒化合物"
  },
  "environmental": {
    "airEmission": {
      "standard": "GB 16297-1996",
      "limit": "钒及其化合物排放限值",
      "note": ""
    },
    "waterDischarge": {
      "standard": "GB 8978-1996",
      "limit": "总钒 1.0mg/L",
      "note": ""
    },
    "soil": {
      "standard": "GB 36600-2018",
      "limit": "—",
      "note": ""
    },
    "note": ""
  },
  "importExport": {
    "dualUseControlled": false,
    "licenseRequired": false,
    "controlList": "",
    "note": ""
  },
  "occupationalHealth": {
    "oelTwa": "0.05mg/m³",
    "oelStel": "0.15mg/m³",
    "gbzStandard": "GBZ 2.1-2019",
    "biologicalMonitoring": "尿钒",
    "healthSurveillance": "",
    "note": "钒化合物以V2O5计，IARC 2B类"
  }
};


// Cr — 铬

P6_LEGAL['Cr'] = {
  "chinaHazChem": {
    "catalogEntry": "第1569项",
    "hazardClass": "毒性物质",
    "note": "铬化合物列入目录"
  },
  "reach": {
    "svhc": true,
    "authorization": false,
    "restriction": "",
    "registrationStatus": "已注册",
    "note": "六价铬化合物列入SVHC"
  },
  "rohs": {
    "restricted": true,
    "maxConcentration": "0.1%",
    "scope": "电子电气设备",
    "note": "六价铬(Cr6+)受限"
  },
  "transport": {
    "imdg": {
      "un": "UN1759",
      "class": "8",
      "pg": "-"
    },
    "iata": {
      "un": "UN1759",
      "class": "8",
      "pg": "-"
    },
    "adr": {
      "un": "UN1759",
      "class": "8",
      "pg": "-"
    },
    "note": "铬化合物"
  },
  "environmental": {
    "airEmission": {
      "standard": "GB 16297-1996",
      "limit": "铬酸雾排放限值",
      "note": ""
    },
    "waterDischarge": {
      "standard": "GB 8978-1996",
      "limit": "总铬 1.5mg/L，六价铬 0.5mg/L",
      "note": ""
    },
    "soil": {
      "standard": "GB 36600-2018",
      "limit": "建设用地第一类用地筛选值",
      "note": ""
    },
    "note": ""
  },
  "importExport": {
    "dualUseControlled": true,
    "licenseRequired": false,
    "controlList": "两用物项——铬酸出口管制",
    "note": ""
  },
  "occupationalHealth": {
    "oelTwa": "0.05mg/m³",
    "oelStel": "0.15mg/m³",
    "gbzStandard": "GBZ 2.1-2019",
    "biologicalMonitoring": "尿铬",
    "healthSurveillance": "铬鼻病体检",
    "note": "六价铬为IARC 1类致癌物"
  }
};


// Mn — 锰

P6_LEGAL['Mn'] = {
  "chinaHazChem": {
    "catalogEntry": "不列入危化品目录（金属锰）",
    "hazardClass": "—",
    "note": "锰化合物部分列入"
  },
  "reach": {
    "svhc": false,
    "authorization": false,
    "restriction": "",
    "registrationStatus": "已注册",
    "note": ""
  },
  "rohs": {
    "restricted": false,
    "maxConcentration": null,
    "scope": "",
    "note": ""
  },
  "transport": {
    "imdg": {
      "un": null,
      "class": null,
      "pg": "-"
    },
    "iata": {
      "un": null,
      "class": null,
      "pg": "-"
    },
    "adr": {
      "un": null,
      "class": null,
      "pg": "-"
    },
    "note": "非危险货物"
  },
  "environmental": {
    "airEmission": {
      "standard": "GB 16297-1996",
      "limit": "锰及其化合物排放限值",
      "note": ""
    },
    "waterDischarge": {
      "standard": "GB 8978-1996",
      "limit": "总锰 2.0mg/L",
      "note": ""
    },
    "soil": {
      "standard": "GB 36600-2018",
      "limit": "—",
      "note": ""
    },
    "note": ""
  },
  "importExport": {
    "dualUseControlled": false,
    "licenseRequired": false,
    "controlList": "",
    "note": ""
  },
  "occupationalHealth": {
    "oelTwa": "0.15mg/m³",
    "oelStel": null,
    "gbzStandard": "GBZ 2.1-2019",
    "biologicalMonitoring": "尿锰",
    "healthSurveillance": "锰中毒体检",
    "note": "锰烟 0.2mg/m³"
  }
};


// Fe — 铁

P6_LEGAL['Fe'] = {
  "chinaHazChem": {
    "catalogEntry": "不列入危化品目录",
    "hazardClass": "—",
    "note": ""
  },
  "reach": {
    "svhc": false,
    "authorization": false,
    "restriction": "",
    "registrationStatus": "已注册",
    "note": ""
  },
  "rohs": {
    "restricted": false,
    "maxConcentration": null,
    "scope": "",
    "note": ""
  },
  "transport": {
    "imdg": {
      "un": null,
      "class": null,
      "pg": "-"
    },
    "iata": {
      "un": null,
      "class": null,
      "pg": "-"
    },
    "adr": {
      "un": null,
      "class": null,
      "pg": "-"
    },
    "note": "非危险货物"
  },
  "environmental": {
    "airEmission": {
      "standard": "",
      "limit": "",
      "note": ""
    },
    "waterDischarge": {
      "standard": "",
      "limit": "",
      "note": ""
    },
    "soil": {
      "standard": "",
      "limit": "",
      "note": ""
    },
    "note": "非特定污染物"
  },
  "importExport": {
    "dualUseControlled": false,
    "licenseRequired": false,
    "controlList": "",
    "note": "钢铁产品出口退税政策"
  },
  "occupationalHealth": {
    "oelTwa": "10mg/m³",
    "oelStel": null,
    "gbzStandard": "GBZ 2.1-2019",
    "biologicalMonitoring": "",
    "healthSurveillance": "",
    "note": "铁烟 5mg/m³，氧化铁粉尘"
  }
};


// Co — 钴

P6_LEGAL['Co'] = {
  "chinaHazChem": {
    "catalogEntry": "第1570项",
    "hazardClass": "毒性物质",
    "note": "钴化合物列入目录"
  },
  "reach": {
    "svhc": true,
    "authorization": false,
    "restriction": "",
    "registrationStatus": "已注册",
    "note": "钴及其化合物列入SVHC"
  },
  "rohs": {
    "restricted": false,
    "maxConcentration": null,
    "scope": "",
    "note": ""
  },
  "transport": {
    "imdg": {
      "un": "UN1314",
      "class": "4.1",
      "pg": "-"
    },
    "iata": {
      "un": "UN1314",
      "class": "4.1",
      "pg": "-"
    },
    "adr": {
      "un": "UN1314",
      "class": "4.1",
      "pg": "-"
    },
    "note": "环烷酸钴等化合物"
  },
  "environmental": {
    "airEmission": {
      "standard": "",
      "limit": "",
      "note": ""
    },
    "waterDischarge": {
      "standard": "GB 8978-1996",
      "limit": "总钴 1.0mg/L",
      "note": ""
    },
    "soil": {
      "standard": "GB 36600-2018",
      "limit": "—",
      "note": ""
    },
    "note": ""
  },
  "importExport": {
    "dualUseControlled": false,
    "licenseRequired": false,
    "controlList": "",
    "note": "钴为关键矿产，部分国家战略管控"
  },
  "occupationalHealth": {
    "oelTwa": "0.05mg/m³",
    "oelStel": "0.15mg/m³",
    "gbzStandard": "GBZ 2.1-2019",
    "biologicalMonitoring": "尿钴",
    "healthSurveillance": "",
    "note": "钴及其化合物为IARC 2B类致癌物"
  }
};


// Ni — 镍

P6_LEGAL['Ni'] = {
  "chinaHazChem": {
    "catalogEntry": "第1571项",
    "hazardClass": "毒性物质",
    "note": "镍化合物列入目录"
  },
  "reach": {
    "svhc": true,
    "authorization": false,
    "restriction": "",
    "registrationStatus": "已注册",
    "note": "镍及其化合物列入SVHC"
  },
  "rohs": {
    "restricted": false,
    "maxConcentration": null,
    "scope": "",
    "note": ""
  },
  "transport": {
    "imdg": {
      "un": "UN3288",
      "class": "6.1",
      "pg": "-"
    },
    "iata": {
      "un": "UN3288",
      "class": "6.1",
      "pg": "-"
    },
    "adr": {
      "un": "UN3288",
      "class": "6.1",
      "pg": "-"
    },
    "note": "镍化合物"
  },
  "environmental": {
    "airEmission": {
      "standard": "GB 16297-1996",
      "limit": "镍及其化合物排放限值",
      "note": ""
    },
    "waterDischarge": {
      "standard": "GB 8978-1996",
      "limit": "总镍 1.0mg/L",
      "note": ""
    },
    "soil": {
      "standard": "GB 36600-2018",
      "limit": "建设用地第一类用地筛选值 150mg/kg",
      "note": ""
    },
    "note": ""
  },
  "importExport": {
    "dualUseControlled": false,
    "licenseRequired": false,
    "controlList": "",
    "note": ""
  },
  "occupationalHealth": {
    "oelTwa": "0.5mg/m³",
    "oelStel": null,
    "gbzStandard": "GBZ 2.1-2019",
    "biologicalMonitoring": "尿镍",
    "healthSurveillance": "镍鼻病体检",
    "note": "镍化合物为IARC 1类致癌物"
  }
};


// Cu — 铜

P6_LEGAL['Cu'] = {
  "chinaHazChem": {
    "catalogEntry": "不列入危化品目录（金属铜）",
    "hazardClass": "—",
    "note": "铜化合物部分列入"
  },
  "reach": {
    "svhc": false,
    "authorization": false,
    "restriction": "",
    "registrationStatus": "已注册",
    "note": ""
  },
  "rohs": {
    "restricted": false,
    "maxConcentration": null,
    "scope": "",
    "note": ""
  },
  "transport": {
    "imdg": {
      "un": null,
      "class": null,
      "pg": "-"
    },
    "iata": {
      "un": null,
      "class": null,
      "pg": "-"
    },
    "adr": {
      "un": null,
      "class": null,
      "pg": "-"
    },
    "note": "非危险货物"
  },
  "environmental": {
    "airEmission": {
      "standard": "",
      "limit": "",
      "note": ""
    },
    "waterDischarge": {
      "standard": "GB 8978-1996",
      "limit": "总铜 0.5mg/L",
      "note": ""
    },
    "soil": {
      "standard": "GB 36600-2018",
      "limit": "建设用地第一类用地筛选值 2000mg/kg",
      "note": ""
    },
    "note": ""
  },
  "importExport": {
    "dualUseControlled": false,
    "licenseRequired": false,
    "controlList": "",
    "note": ""
  },
  "occupationalHealth": {
    "oelTwa": "0.2mg/m³",
    "oelStel": "0.6mg/m³",
    "gbzStandard": "GBZ 2.1-2019",
    "biologicalMonitoring": "血清铜, 尿铜",
    "healthSurveillance": "",
    "note": "铜烟 0.2mg/m³"
  }
};


// Zn — 锌

P6_LEGAL['Zn'] = {
  "chinaHazChem": {
    "catalogEntry": "不列入危化品目录（金属锌）",
    "hazardClass": "—",
    "note": "锌粉列入第1573项"
  },
  "reach": {
    "svhc": false,
    "authorization": false,
    "restriction": "",
    "registrationStatus": "已注册",
    "note": ""
  },
  "rohs": {
    "restricted": false,
    "maxConcentration": null,
    "scope": "",
    "note": ""
  },
  "transport": {
    "imdg": {
      "un": "UN1435",
      "class": "4.3",
      "pg": "-"
    },
    "iata": {
      "un": "UN1435",
      "class": "4.3",
      "pg": "-"
    },
    "adr": {
      "un": "UN1435",
      "class": "4.3",
      "pg": "-"
    },
    "note": "锌粉；锌锭非危险货物"
  },
  "environmental": {
    "airEmission": {
      "standard": "",
      "limit": "",
      "note": ""
    },
    "waterDischarge": {
      "standard": "GB 8978-1996",
      "limit": "总锌 2.0mg/L",
      "note": ""
    },
    "soil": {
      "standard": "GB 36600-2018",
      "limit": "建设用地第一类用地筛选值 800mg/kg",
      "note": ""
    },
    "note": ""
  },
  "importExport": {
    "dualUseControlled": false,
    "licenseRequired": false,
    "controlList": "",
    "note": ""
  },
  "occupationalHealth": {
    "oelTwa": "3mg/m³",
    "oelStel": "5mg/m³",
    "gbzStandard": "GBZ 2.1-2019",
    "biologicalMonitoring": "血清锌",
    "healthSurveillance": "",
    "note": "锌烟 5mg/m³"
  }
};


// Ga — 镓

P6_LEGAL['Ga'] = {
  "chinaHazChem": {
    "catalogEntry": "不列入危化品目录",
    "hazardClass": "—",
    "note": ""
  },
  "reach": {
    "svhc": false,
    "authorization": false,
    "restriction": "",
    "registrationStatus": "已注册",
    "note": ""
  },
  "rohs": {
    "restricted": false,
    "maxConcentration": null,
    "scope": "",
    "note": ""
  },
  "transport": {
    "imdg": {
      "un": null,
      "class": null,
      "pg": "-"
    },
    "iata": {
      "un": null,
      "class": null,
      "pg": "-"
    },
    "adr": {
      "un": null,
      "class": null,
      "pg": "-"
    },
    "note": "非危险货物"
  },
  "environmental": {
    "airEmission": {
      "standard": "",
      "limit": "",
      "note": ""
    },
    "waterDischarge": {
      "standard": "",
      "limit": "",
      "note": ""
    },
    "soil": {
      "standard": "",
      "limit": "",
      "note": ""
    },
    "note": "非特定污染物"
  },
  "importExport": {
    "dualUseControlled": false,
    "licenseRequired": false,
    "controlList": "",
    "note": "镓为战略金属，半导体材料出口管制"
  },
  "occupationalHealth": {
    "oelTwa": null,
    "oelStel": null,
    "gbzStandard": "GBZ 2.1-2019",
    "biologicalMonitoring": "",
    "healthSurveillance": "",
    "note": "镓化合物OEL未专门制定"
  }
};


// Ge — 锗

P6_LEGAL['Ge'] = {
  "chinaHazChem": {
    "catalogEntry": "不列入危化品目录",
    "hazardClass": "—",
    "note": "锗烷有危险性"
  },
  "reach": {
    "svhc": false,
    "authorization": false,
    "restriction": "",
    "registrationStatus": "已注册",
    "note": ""
  },
  "rohs": {
    "restricted": false,
    "maxConcentration": null,
    "scope": "",
    "note": ""
  },
  "transport": {
    "imdg": {
      "un": null,
      "class": null,
      "pg": "-"
    },
    "iata": {
      "un": null,
      "class": null,
      "pg": "-"
    },
    "adr": {
      "un": null,
      "class": null,
      "pg": "-"
    },
    "note": "非危险货物"
  },
  "environmental": {
    "airEmission": {
      "standard": "",
      "limit": "",
      "note": ""
    },
    "waterDischarge": {
      "standard": "",
      "limit": "",
      "note": ""
    },
    "soil": {
      "standard": "",
      "limit": "",
      "note": ""
    },
    "note": "非特定污染物"
  },
  "importExport": {
    "dualUseControlled": false,
    "licenseRequired": false,
    "controlList": "",
    "note": "高纯锗为战略物资"
  },
  "occupationalHealth": {
    "oelTwa": "6mg/m³",
    "oelStel": null,
    "gbzStandard": "GBZ 2.1-2019",
    "biologicalMonitoring": "",
    "healthSurveillance": "",
    "note": "二氧化锗粉尘"
  }
};


// As — 砷

P6_LEGAL['As'] = {
  "chinaHazChem": {
    "catalogEntry": "第1574项",
    "hazardClass": "毒性物质",
    "note": "砷及其化合物列入目录"
  },
  "reach": {
    "svhc": true,
    "authorization": false,
    "restriction": "",
    "registrationStatus": "已注册",
    "note": "三氧化二砷等列入SVHC"
  },
  "rohs": {
    "restricted": true,
    "maxConcentration": "0.1%",
    "scope": "电子电气设备",
    "note": "部分砷化合物受限"
  },
  "transport": {
    "imdg": {
      "un": "UN1558",
      "class": "6.1",
      "pg": "-"
    },
    "iata": {
      "un": "UN1558",
      "class": "6.1",
      "pg": "-"
    },
    "adr": {
      "un": "UN1558",
      "class": "6.1",
      "pg": "-"
    },
    "note": "砷及其化合物"
  },
  "environmental": {
    "airEmission": {
      "standard": "GB 16297-1996",
      "limit": "砷及其化合物排放限值",
      "note": ""
    },
    "waterDischarge": {
      "standard": "GB 8978-1996",
      "limit": "总砷 0.5mg/L",
      "note": ""
    },
    "soil": {
      "standard": "GB 36600-2018",
      "limit": "建设用地第一类用地筛选值 20mg/kg",
      "note": ""
    },
    "note": ""
  },
  "importExport": {
    "dualUseControlled": true,
    "licenseRequired": false,
    "controlList": "两用物项——三氧化二砷出口管制",
    "note": "砷可用于化学武器前体"
  },
  "occupationalHealth": {
    "oelTwa": "0.01mg/m³",
    "oelStel": "0.02mg/m³",
    "gbzStandard": "GBZ 2.1-2019",
    "biologicalMonitoring": "尿砷",
    "healthSurveillance": "砷中毒体检",
    "note": "砷为IARC 1类致癌物"
  }
};


// Se — 硒

P6_LEGAL['Se'] = {
  "chinaHazChem": {
    "catalogEntry": "第1575项",
    "hazardClass": "毒性物质",
    "note": "硒及其化合物列入目录"
  },
  "reach": {
    "svhc": false,
    "authorization": false,
    "restriction": "",
    "registrationStatus": "已注册",
    "note": ""
  },
  "rohs": {
    "restricted": false,
    "maxConcentration": null,
    "scope": "",
    "note": ""
  },
  "transport": {
    "imdg": {
      "un": "UN3283",
      "class": "6.1",
      "pg": "-"
    },
    "iata": {
      "un": "UN3283",
      "class": "6.1",
      "pg": "-"
    },
    "adr": {
      "un": "UN3283",
      "class": "6.1",
      "pg": "-"
    },
    "note": "硒化合物"
  },
  "environmental": {
    "airEmission": {
      "standard": "",
      "limit": "",
      "note": ""
    },
    "waterDischarge": {
      "standard": "GB 8978-1996",
      "limit": "总硒 0.1mg/L",
      "note": ""
    },
    "soil": {
      "standard": "GB 36600-2018",
      "limit": "—",
      "note": ""
    },
    "note": ""
  },
  "importExport": {
    "dualUseControlled": false,
    "licenseRequired": false,
    "controlList": "",
    "note": ""
  },
  "occupationalHealth": {
    "oelTwa": "0.1mg/m³",
    "oelStel": null,
    "gbzStandard": "GBZ 2.1-2019",
    "biologicalMonitoring": "尿硒",
    "healthSurveillance": "硒中毒体检",
    "note": "硒及其化合物"
  }
};


// Br — 溴

P6_LEGAL['Br'] = {
  "chinaHazChem": {
    "catalogEntry": "第1576项",
    "hazardClass": "腐蚀性物质",
    "note": "列入目录——溴"
  },
  "reach": {
    "svhc": false,
    "authorization": false,
    "restriction": "附录XVII",
    "registrationStatus": "已注册",
    "note": ""
  },
  "rohs": {
    "restricted": false,
    "maxConcentration": null,
    "scope": "",
    "note": ""
  },
  "transport": {
    "imdg": {
      "un": "UN1744",
      "class": "8",
      "pg": "-"
    },
    "iata": {
      "un": "UN1744",
      "class": "8",
      "pg": "-"
    },
    "adr": {
      "un": "UN1744",
      "class": "8",
      "pg": "-"
    },
    "note": "腐蚀性液体，兼有毒性"
  },
  "environmental": {
    "airEmission": {
      "standard": "",
      "limit": "",
      "note": ""
    },
    "waterDischarge": {
      "standard": "",
      "limit": "",
      "note": ""
    },
    "soil": {
      "standard": "",
      "limit": "",
      "note": ""
    },
    "note": "溴化物排放参照相关标准"
  },
  "importExport": {
    "dualUseControlled": true,
    "licenseRequired": false,
    "controlList": "两用物项——溴可作化学武器前体",
    "note": ""
  },
  "occupationalHealth": {
    "oelTwa": "0.1mg/m³",
    "oelStel": "0.3mg/m³",
    "gbzStandard": "GBZ 2.1-2019",
    "biologicalMonitoring": "尿溴",
    "healthSurveillance": "",
    "note": "溴蒸气"
  }
};


// Kr — 氪

P6_LEGAL['Kr'] = {
  "chinaHazChem": {
    "catalogEntry": "不列入危化品目录",
    "hazardClass": "—",
    "note": "不列入危化品目录"
  },
  "reach": {
    "svhc": false,
    "authorization": false,
    "restriction": "",
    "registrationStatus": "",
    "note": "惰性气体，REACH豁免（附件V）"
  },
  "rohs": {
    "restricted": false,
    "maxConcentration": null,
    "scope": "",
    "note": ""
  },
  "transport": {
    "imdg": {
      "un": "UN1056",
      "class": "2.2",
      "pg": "-"
    },
    "iata": {
      "un": "UN1056",
      "class": "2.2",
      "pg": "-"
    },
    "adr": {
      "un": "UN1056",
      "class": "2.2",
      "pg": "-"
    },
    "note": ""
  },
  "environmental": {
    "airEmission": {
      "standard": "",
      "limit": "",
      "note": ""
    },
    "waterDischarge": {
      "standard": "",
      "limit": "",
      "note": ""
    },
    "soil": {
      "standard": "",
      "limit": "",
      "note": ""
    },
    "note": "惰性气体，无特定排放标准"
  },
  "importExport": {
    "dualUseControlled": false,
    "licenseRequired": false,
    "controlList": "",
    "note": ""
  },
  "occupationalHealth": {
    "oelTwa": null,
    "oelStel": null,
    "gbzStandard": "GBZ 2.1-2019",
    "biologicalMonitoring": "",
    "healthSurveillance": "",
    "note": "单纯窒息性气体，无特定OEL"
  }
};


// Rb — 铷

P6_LEGAL['Rb'] = {
  "chinaHazChem": {
    "catalogEntry": "第1577项",
    "hazardClass": "遇水放出易燃气体的物质",
    "note": "列入目录"
  },
  "reach": {
    "svhc": false,
    "authorization": false,
    "restriction": "",
    "registrationStatus": "已注册",
    "note": ""
  },
  "rohs": {
    "restricted": false,
    "maxConcentration": null,
    "scope": "",
    "note": ""
  },
  "transport": {
    "imdg": {
      "un": "UN1423",
      "class": "4.3",
      "pg": "-"
    },
    "iata": {
      "un": "UN1423",
      "class": "4.3",
      "pg": "-"
    },
    "adr": {
      "un": "UN1423",
      "class": "4.3",
      "pg": "-"
    },
    "note": ""
  },
  "environmental": {
    "airEmission": {
      "standard": "",
      "limit": "",
      "note": ""
    },
    "waterDischarge": {
      "standard": "",
      "limit": "",
      "note": ""
    },
    "soil": {
      "standard": "",
      "limit": "",
      "note": ""
    },
    "note": "非特定污染物"
  },
  "importExport": {
    "dualUseControlled": false,
    "licenseRequired": false,
    "controlList": "",
    "note": ""
  },
  "occupationalHealth": {
    "oelTwa": "0.5mg/m³",
    "oelStel": null,
    "gbzStandard": "GBZ 2.1-2019",
    "biologicalMonitoring": "",
    "healthSurveillance": "",
    "note": "铷烟"
  }
};


// Sr — 锶

P6_LEGAL['Sr'] = {
  "chinaHazChem": {
    "catalogEntry": "第1578项",
    "hazardClass": "遇水放出易燃气体的物质",
    "note": "列入目录"
  },
  "reach": {
    "svhc": false,
    "authorization": false,
    "restriction": "",
    "registrationStatus": "已注册",
    "note": ""
  },
  "rohs": {
    "restricted": false,
    "maxConcentration": null,
    "scope": "",
    "note": ""
  },
  "transport": {
    "imdg": {
      "un": "UN1383",
      "class": "4.3",
      "pg": "-"
    },
    "iata": {
      "un": "UN1383",
      "class": "4.3",
      "pg": "-"
    },
    "adr": {
      "un": "UN1383",
      "class": "4.3",
      "pg": "-"
    },
    "note": "锶粉"
  },
  "environmental": {
    "airEmission": {
      "standard": "",
      "limit": "",
      "note": ""
    },
    "waterDischarge": {
      "standard": "GB 8978-1996",
      "limit": "锶排放限值",
      "note": ""
    },
    "soil": {
      "standard": "GB 36600-2018",
      "limit": "—",
      "note": ""
    },
    "note": ""
  },
  "importExport": {
    "dualUseControlled": false,
    "licenseRequired": false,
    "controlList": "",
    "note": ""
  },
  "occupationalHealth": {
    "oelTwa": "2mg/m³",
    "oelStel": null,
    "gbzStandard": "GBZ 2.1-2019",
    "biologicalMonitoring": "",
    "healthSurveillance": "",
    "note": "锶烟"
  }
};


// Y — 钇

P6_LEGAL['Y'] = {
  "chinaHazChem": {
    "catalogEntry": "不列入危化品目录",
    "hazardClass": "—",
    "note": "稀土元素"
  },
  "reach": {
    "svhc": false,
    "authorization": false,
    "restriction": "",
    "registrationStatus": "已注册",
    "note": ""
  },
  "rohs": {
    "restricted": false,
    "maxConcentration": null,
    "scope": "",
    "note": ""
  },
  "transport": {
    "imdg": {
      "un": null,
      "class": null,
      "pg": "-"
    },
    "iata": {
      "un": null,
      "class": null,
      "pg": "-"
    },
    "adr": {
      "un": null,
      "class": null,
      "pg": "-"
    },
    "note": "非危险货物"
  },
  "environmental": {
    "airEmission": {
      "standard": "",
      "limit": "",
      "note": ""
    },
    "waterDischarge": {
      "standard": "",
      "limit": "",
      "note": ""
    },
    "soil": {
      "standard": "",
      "limit": "",
      "note": ""
    },
    "note": "稀土元素参照行业标准"
  },
  "importExport": {
    "dualUseControlled": false,
    "licenseRequired": false,
    "controlList": "",
    "note": "稀土出口许可证管理"
  },
  "occupationalHealth": {
    "oelTwa": "5mg/m³",
    "oelStel": null,
    "gbzStandard": "GBZ 2.1-2019",
    "biologicalMonitoring": "",
    "healthSurveillance": "",
    "note": "钇化合物粉尘"
  }
};


// Zr — 锆

P6_LEGAL['Zr'] = {
  "chinaHazChem": {
    "catalogEntry": "不列入危化品目录（金属锆）",
    "hazardClass": "—",
    "note": "锆粉列入第1579项"
  },
  "reach": {
    "svhc": false,
    "authorization": false,
    "restriction": "",
    "registrationStatus": "已注册",
    "note": ""
  },
  "rohs": {
    "restricted": false,
    "maxConcentration": null,
    "scope": "",
    "note": ""
  },
  "transport": {
    "imdg": {
      "un": "UN2008",
      "class": "4.1",
      "pg": "-"
    },
    "iata": {
      "un": "UN2008",
      "class": "4.1",
      "pg": "-"
    },
    "adr": {
      "un": "UN2008",
      "class": "4.1",
      "pg": "-"
    },
    "note": "锆粉；金属锆非危险货物"
  },
  "environmental": {
    "airEmission": {
      "standard": "",
      "limit": "",
      "note": ""
    },
    "waterDischarge": {
      "standard": "",
      "limit": "",
      "note": ""
    },
    "soil": {
      "standard": "",
      "limit": "",
      "note": ""
    },
    "note": "锆粉尘按总粉尘管理"
  },
  "importExport": {
    "dualUseControlled": true,
    "licenseRequired": false,
    "controlList": "核材料管制",
    "note": "锆用于核反应堆"
  },
  "occupationalHealth": {
    "oelTwa": "5mg/m³",
    "oelStel": null,
    "gbzStandard": "GBZ 2.1-2019",
    "biologicalMonitoring": "",
    "healthSurveillance": "",
    "note": "锆化合物粉尘"
  }
};


// Nb — 铌

P6_LEGAL['Nb'] = {
  "chinaHazChem": {
    "catalogEntry": "不列入危化品目录",
    "hazardClass": "—",
    "note": ""
  },
  "reach": {
    "svhc": false,
    "authorization": false,
    "restriction": "",
    "registrationStatus": "已注册",
    "note": ""
  },
  "rohs": {
    "restricted": false,
    "maxConcentration": null,
    "scope": "",
    "note": ""
  },
  "transport": {
    "imdg": {
      "un": null,
      "class": null,
      "pg": "-"
    },
    "iata": {
      "un": null,
      "class": null,
      "pg": "-"
    },
    "adr": {
      "un": null,
      "class": null,
      "pg": "-"
    },
    "note": "非危险货物"
  },
  "environmental": {
    "airEmission": {
      "standard": "",
      "limit": "",
      "note": ""
    },
    "waterDischarge": {
      "standard": "",
      "limit": "",
      "note": ""
    },
    "soil": {
      "standard": "",
      "limit": "",
      "note": ""
    },
    "note": "非特定污染物"
  },
  "importExport": {
    "dualUseControlled": false,
    "licenseRequired": false,
    "controlList": "",
    "note": "铌为关键矿产，部分应用受战略管控"
  },
  "occupationalHealth": {
    "oelTwa": "10mg/m³",
    "oelStel": null,
    "gbzStandard": "GBZ 2.1-2019",
    "biologicalMonitoring": "",
    "healthSurveillance": "",
    "note": "铌粉尘按总粉尘管理"
  }
};


// Mo — 钼

P6_LEGAL['Mo'] = {
  "chinaHazChem": {
    "catalogEntry": "不列入危化品目录（金属钼）",
    "hazardClass": "—",
    "note": "钼化合物部分列入"
  },
  "reach": {
    "svhc": false,
    "authorization": false,
    "restriction": "",
    "registrationStatus": "已注册",
    "note": ""
  },
  "rohs": {
    "restricted": false,
    "maxConcentration": null,
    "scope": "",
    "note": ""
  },
  "transport": {
    "imdg": {
      "un": null,
      "class": null,
      "pg": "-"
    },
    "iata": {
      "un": null,
      "class": null,
      "pg": "-"
    },
    "adr": {
      "un": null,
      "class": null,
      "pg": "-"
    },
    "note": "非危险货物"
  },
  "environmental": {
    "airEmission": {
      "standard": "",
      "limit": "",
      "note": ""
    },
    "waterDischarge": {
      "standard": "GB 8978-1996",
      "limit": "总钼 0.5mg/L",
      "note": ""
    },
    "soil": {
      "standard": "GB 36600-2018",
      "limit": "—",
      "note": ""
    },
    "note": ""
  },
  "importExport": {
    "dualUseControlled": false,
    "licenseRequired": false,
    "controlList": "",
    "note": ""
  },
  "occupationalHealth": {
    "oelTwa": "4mg/m³",
    "oelStel": null,
    "gbzStandard": "GBZ 2.1-2019",
    "biologicalMonitoring": "",
    "healthSurveillance": "",
    "note": "钼烟 4mg/m³"
  }
};


// Tc — 锝

P6_LEGAL['Tc'] = {
  "chinaHazChem": {
    "catalogEntry": "不列入危化品目录",
    "hazardClass": "放射性物质",
    "note": "适用《放射性同位素与射线装置安全和防护条例》"
  },
  "reach": {
    "svhc": false,
    "authorization": false,
    "restriction": "",
    "registrationStatus": "",
    "note": "放射性物质适用特殊规定"
  },
  "rohs": {
    "restricted": false,
    "maxConcentration": null,
    "scope": "",
    "note": ""
  },
  "transport": {
    "imdg": {
      "un": "UN2910",
      "class": "7",
      "pg": "-"
    },
    "iata": {
      "un": "UN2910",
      "class": "7",
      "pg": "-"
    },
    "adr": {
      "un": "UN2910",
      "class": "7",
      "pg": "-"
    },
    "note": "放射性物质，按比活度分类运输；人造放射性元素，主要用于医学显像"
  },
  "environmental": {
    "airEmission": {
      "standard": "GB 16297-1996",
      "limit": "参照GB 18871-2002",
      "note": ""
    },
    "waterDischarge": {
      "standard": "GB 8978-1996",
      "limit": "参照GB 18871-2002",
      "note": ""
    },
    "soil": {
      "standard": "GB 36600-2018",
      "limit": "参照GB 18871-2002",
      "note": ""
    },
    "note": "适用《电离辐射防护与辐射源安全基本标准》(GB 18871-2002)"
  },
  "importExport": {
    "dualUseControlled": true,
    "licenseRequired": true,
    "controlList": "放射性物质进出口管制",
    "note": "需环保部门（生态环境部）审批"
  },
  "occupationalHealth": {
    "oelTwa": null,
    "oelStel": null,
    "gbzStandard": "GBZ 188-2014",
    "biologicalMonitoring": "",
    "healthSurveillance": "",
    "note": "放射性职业照射，年有效剂量限值20mSv"
  }
};


// Ru — 钌

P6_LEGAL['Ru'] = {
  "chinaHazChem": {
    "catalogEntry": "不列入危化品目录",
    "hazardClass": "—",
    "note": "钌化合物部分列入"
  },
  "reach": {
    "svhc": false,
    "authorization": false,
    "restriction": "",
    "registrationStatus": "已注册",
    "note": ""
  },
  "rohs": {
    "restricted": false,
    "maxConcentration": null,
    "scope": "",
    "note": ""
  },
  "transport": {
    "imdg": {
      "un": null,
      "class": null,
      "pg": "-"
    },
    "iata": {
      "un": null,
      "class": null,
      "pg": "-"
    },
    "adr": {
      "un": null,
      "class": null,
      "pg": "-"
    },
    "note": "非危险货物"
  },
  "environmental": {
    "airEmission": {
      "standard": "",
      "limit": "",
      "note": ""
    },
    "waterDischarge": {
      "standard": "",
      "limit": "",
      "note": ""
    },
    "soil": {
      "standard": "",
      "limit": "",
      "note": ""
    },
    "note": "非特定污染物"
  },
  "importExport": {
    "dualUseControlled": false,
    "licenseRequired": false,
    "controlList": "",
    "note": ""
  },
  "occupationalHealth": {
    "oelTwa": "1mg/m³",
    "oelStel": null,
    "gbzStandard": "GBZ 2.1-2019",
    "biologicalMonitoring": "",
    "healthSurveillance": "",
    "note": "钌化合物粉尘"
  }
};


// Rh — 铑

P6_LEGAL['Rh'] = {
  "chinaHazChem": {
    "catalogEntry": "不列入危化品目录",
    "hazardClass": "—",
    "note": ""
  },
  "reach": {
    "svhc": false,
    "authorization": false,
    "restriction": "",
    "registrationStatus": "已注册",
    "note": ""
  },
  "rohs": {
    "restricted": false,
    "maxConcentration": null,
    "scope": "",
    "note": ""
  },
  "transport": {
    "imdg": {
      "un": null,
      "class": null,
      "pg": "-"
    },
    "iata": {
      "un": null,
      "class": null,
      "pg": "-"
    },
    "adr": {
      "un": null,
      "class": null,
      "pg": "-"
    },
    "note": "非危险货物"
  },
  "environmental": {
    "airEmission": {
      "standard": "",
      "limit": "",
      "note": ""
    },
    "waterDischarge": {
      "standard": "",
      "limit": "",
      "note": ""
    },
    "soil": {
      "standard": "",
      "limit": "",
      "note": ""
    },
    "note": "非特定污染物"
  },
  "importExport": {
    "dualUseControlled": false,
    "licenseRequired": false,
    "controlList": "",
    "note": ""
  },
  "occupationalHealth": {
    "oelTwa": "1mg/m³",
    "oelStel": null,
    "gbzStandard": "GBZ 2.1-2019",
    "biologicalMonitoring": "",
    "healthSurveillance": "",
    "note": "铑化合物粉尘"
  }
};


// Pd — 钯

P6_LEGAL['Pd'] = {
  "chinaHazChem": {
    "catalogEntry": "不列入危化品目录",
    "hazardClass": "—",
    "note": ""
  },
  "reach": {
    "svhc": false,
    "authorization": false,
    "restriction": "",
    "registrationStatus": "已注册",
    "note": ""
  },
  "rohs": {
    "restricted": false,
    "maxConcentration": null,
    "scope": "",
    "note": ""
  },
  "transport": {
    "imdg": {
      "un": null,
      "class": null,
      "pg": "-"
    },
    "iata": {
      "un": null,
      "class": null,
      "pg": "-"
    },
    "adr": {
      "un": null,
      "class": null,
      "pg": "-"
    },
    "note": "非危险货物"
  },
  "environmental": {
    "airEmission": {
      "standard": "",
      "limit": "",
      "note": ""
    },
    "waterDischarge": {
      "standard": "",
      "limit": "",
      "note": ""
    },
    "soil": {
      "standard": "",
      "limit": "",
      "note": ""
    },
    "note": "非特定污染物"
  },
  "importExport": {
    "dualUseControlled": false,
    "licenseRequired": false,
    "controlList": "",
    "note": ""
  },
  "occupationalHealth": {
    "oelTwa": "1mg/m³",
    "oelStel": null,
    "gbzStandard": "GBZ 2.1-2019",
    "biologicalMonitoring": "",
    "healthSurveillance": "",
    "note": "钯化合物粉尘"
  }
};


// Ag — 银

P6_LEGAL['Ag'] = {
  "chinaHazChem": {
    "catalogEntry": "不列入危化品目录（金属银）",
    "hazardClass": "—",
    "note": "银化合物部分列入"
  },
  "reach": {
    "svhc": false,
    "authorization": false,
    "restriction": "",
    "registrationStatus": "已注册",
    "note": ""
  },
  "rohs": {
    "restricted": false,
    "maxConcentration": null,
    "scope": "",
    "note": ""
  },
  "transport": {
    "imdg": {
      "un": null,
      "class": null,
      "pg": "-"
    },
    "iata": {
      "un": null,
      "class": null,
      "pg": "-"
    },
    "adr": {
      "un": null,
      "class": null,
      "pg": "-"
    },
    "note": "非危险货物"
  },
  "environmental": {
    "airEmission": {
      "standard": "",
      "limit": "",
      "note": ""
    },
    "waterDischarge": {
      "standard": "GB 8978-1996",
      "limit": "总银 0.5mg/L",
      "note": ""
    },
    "soil": {
      "standard": "GB 36600-2018",
      "limit": "—",
      "note": ""
    },
    "note": ""
  },
  "importExport": {
    "dualUseControlled": false,
    "licenseRequired": false,
    "controlList": "",
    "note": ""
  },
  "occupationalHealth": {
    "oelTwa": "0.1mg/m³",
    "oelStel": "0.3mg/m³",
    "gbzStandard": "GBZ 2.1-2019",
    "biologicalMonitoring": "血银, 尿银",
    "healthSurveillance": "",
    "note": "银可致银质沉着症"
  }
};


// Cd — 镉

P6_LEGAL['Cd'] = {
  "chinaHazChem": {
    "catalogEntry": "第1580项",
    "hazardClass": "毒性物质",
    "note": "镉及其化合物列入目录"
  },
  "reach": {
    "svhc": true,
    "authorization": true,
    "restriction": "附录XVII 第23条",
    "registrationStatus": "已注册",
    "note": "镉及其化合物列入SVHC及授权清单"
  },
  "rohs": {
    "restricted": true,
    "maxConcentration": "0.01%",
    "scope": "电子电气设备",
    "note": "镉最大允许浓度0.01%，比其他RoHS物质更严格"
  },
  "transport": {
    "imdg": {
      "un": "UN2570",
      "class": "6.1",
      "pg": "-"
    },
    "iata": {
      "un": "UN2570",
      "class": "6.1",
      "pg": "-"
    },
    "adr": {
      "un": "UN2570",
      "class": "6.1",
      "pg": "-"
    },
    "note": "镉化合物"
  },
  "environmental": {
    "airEmission": {
      "standard": "",
      "limit": "",
      "note": ""
    },
    "waterDischarge": {
      "standard": "GB 8978-1996",
      "limit": "总镉 0.1mg/L",
      "note": ""
    },
    "soil": {
      "standard": "GB 36600-2018",
      "limit": "建设用地第一类用地筛选值 20mg/kg",
      "note": ""
    },
    "note": ""
  },
  "importExport": {
    "dualUseControlled": true,
    "licenseRequired": false,
    "controlList": "两用物项——镉出口管制",
    "note": ""
  },
  "occupationalHealth": {
    "oelTwa": "0.01mg/m³",
    "oelStel": "0.02mg/m³",
    "gbzStandard": "GBZ 2.1-2019",
    "biologicalMonitoring": "尿镉, 血镉",
    "healthSurveillance": "镉中毒体检",
    "note": "镉为IARC 1类致癌物"
  }
};


// In — 铟

P6_LEGAL['In'] = {
  "chinaHazChem": {
    "catalogEntry": "不列入危化品目录",
    "hazardClass": "—",
    "note": ""
  },
  "reach": {
    "svhc": false,
    "authorization": false,
    "restriction": "",
    "registrationStatus": "已注册",
    "note": ""
  },
  "rohs": {
    "restricted": false,
    "maxConcentration": null,
    "scope": "",
    "note": ""
  },
  "transport": {
    "imdg": {
      "un": null,
      "class": null,
      "pg": "-"
    },
    "iata": {
      "un": null,
      "class": null,
      "pg": "-"
    },
    "adr": {
      "un": null,
      "class": null,
      "pg": "-"
    },
    "note": "非危险货物"
  },
  "environmental": {
    "airEmission": {
      "standard": "",
      "limit": "",
      "note": ""
    },
    "waterDischarge": {
      "standard": "GB 8978-1996",
      "limit": "总铟 0.1mg/L",
      "note": ""
    },
    "soil": {
      "standard": "",
      "limit": "",
      "note": ""
    },
    "note": "铟排放限值"
  },
  "importExport": {
    "dualUseControlled": false,
    "licenseRequired": false,
    "controlList": "",
    "note": "铟为关键矿产，半导体材料"
  },
  "occupationalHealth": {
    "oelTwa": "0.1mg/m³",
    "oelStel": null,
    "gbzStandard": "GBZ 2.1-2019",
    "biologicalMonitoring": "",
    "healthSurveillance": "",
    "note": "铟及其化合物"
  }
};


// Sn — 锡

P6_LEGAL['Sn'] = {
  "chinaHazChem": {
    "catalogEntry": "不列入危化品目录（金属锡）",
    "hazardClass": "—",
    "note": "有机锡化合物列入目录"
  },
  "reach": {
    "svhc": true,
    "authorization": false,
    "restriction": "附录XVII 第20条",
    "registrationStatus": "已注册",
    "note": "有机锡化合物受限"
  },
  "rohs": {
    "restricted": false,
    "maxConcentration": null,
    "scope": "",
    "note": ""
  },
  "transport": {
    "imdg": {
      "un": null,
      "class": null,
      "pg": "-"
    },
    "iata": {
      "un": null,
      "class": null,
      "pg": "-"
    },
    "adr": {
      "un": null,
      "class": null,
      "pg": "-"
    },
    "note": "非危险货物"
  },
  "environmental": {
    "airEmission": {
      "standard": "",
      "limit": "",
      "note": ""
    },
    "waterDischarge": {
      "standard": "GB 8978-1996",
      "limit": "总锡 2.0mg/L",
      "note": ""
    },
    "soil": {
      "standard": "GB 36600-2018",
      "limit": "—",
      "note": ""
    },
    "note": ""
  },
  "importExport": {
    "dualUseControlled": false,
    "licenseRequired": false,
    "controlList": "",
    "note": ""
  },
  "occupationalHealth": {
    "oelTwa": "2mg/m³",
    "oelStel": null,
    "gbzStandard": "GBZ 2.1-2019",
    "biologicalMonitoring": "",
    "healthSurveillance": "",
    "note": "有机锡化合物 0.1mg/m³"
  }
};


// Sb — 锑

P6_LEGAL['Sb'] = {
  "chinaHazChem": {
    "catalogEntry": "第1581项",
    "hazardClass": "毒性物质",
    "note": "锑及其化合物列入目录"
  },
  "reach": {
    "svhc": true,
    "authorization": false,
    "restriction": "",
    "registrationStatus": "已注册",
    "note": "三氧化二锑列入SVHC"
  },
  "rohs": {
    "restricted": false,
    "maxConcentration": null,
    "scope": "",
    "note": ""
  },
  "transport": {
    "imdg": {
      "un": "UN1549",
      "class": "6.1",
      "pg": "-"
    },
    "iata": {
      "un": "UN1549",
      "class": "6.1",
      "pg": "-"
    },
    "adr": {
      "un": "UN1549",
      "class": "6.1",
      "pg": "-"
    },
    "note": "锑化合物"
  },
  "environmental": {
    "airEmission": {
      "standard": "",
      "limit": "",
      "note": ""
    },
    "waterDischarge": {
      "standard": "GB 8978-1996",
      "limit": "总锑 0.5mg/L",
      "note": ""
    },
    "soil": {
      "standard": "GB 36600-2018",
      "limit": "—",
      "note": ""
    },
    "note": ""
  },
  "importExport": {
    "dualUseControlled": false,
    "licenseRequired": false,
    "controlList": "",
    "note": ""
  },
  "occupationalHealth": {
    "oelTwa": "0.5mg/m³",
    "oelStel": null,
    "gbzStandard": "GBZ 2.1-2019",
    "biologicalMonitoring": "尿锑",
    "healthSurveillance": "",
    "note": "锑及其化合物"
  }
};


// Te — 碲

P6_LEGAL['Te'] = {
  "chinaHazChem": {
    "catalogEntry": "第1582项",
    "hazardClass": "毒性物质",
    "note": "碲及其化合物列入目录"
  },
  "reach": {
    "svhc": false,
    "authorization": false,
    "restriction": "",
    "registrationStatus": "已注册",
    "note": ""
  },
  "rohs": {
    "restricted": false,
    "maxConcentration": null,
    "scope": "",
    "note": ""
  },
  "transport": {
    "imdg": {
      "un": "UN3284",
      "class": "6.1",
      "pg": "-"
    },
    "iata": {
      "un": "UN3284",
      "class": "6.1",
      "pg": "-"
    },
    "adr": {
      "un": "UN3284",
      "class": "6.1",
      "pg": "-"
    },
    "note": "碲化合物"
  },
  "environmental": {
    "airEmission": {
      "standard": "",
      "limit": "",
      "note": ""
    },
    "waterDischarge": {
      "standard": "GB 8978-1996",
      "limit": "总碲 0.1mg/L",
      "note": ""
    },
    "soil": {
      "standard": "GB 36600-2018",
      "limit": "—",
      "note": ""
    },
    "note": ""
  },
  "importExport": {
    "dualUseControlled": false,
    "licenseRequired": false,
    "controlList": "",
    "note": ""
  },
  "occupationalHealth": {
    "oelTwa": "0.1mg/m³",
    "oelStel": null,
    "gbzStandard": "GBZ 2.1-2019",
    "biologicalMonitoring": "尿碲",
    "healthSurveillance": "",
    "note": "碲及其化合物"
  }
};


// I — 碘

P6_LEGAL['I'] = {
  "chinaHazChem": {
    "catalogEntry": "第1583项",
    "hazardClass": "腐蚀性物质,毒性物质",
    "note": "碘列入目录"
  },
  "reach": {
    "svhc": false,
    "authorization": false,
    "restriction": "",
    "registrationStatus": "已注册",
    "note": ""
  },
  "rohs": {
    "restricted": false,
    "maxConcentration": null,
    "scope": "",
    "note": ""
  },
  "transport": {
    "imdg": {
      "un": "UN1759",
      "class": "8",
      "pg": "-"
    },
    "iata": {
      "un": "UN1759",
      "class": "8",
      "pg": "-"
    },
    "adr": {
      "un": "UN1759",
      "class": "8",
      "pg": "-"
    },
    "note": "碘兼有毒性"
  },
  "environmental": {
    "airEmission": {
      "standard": "",
      "limit": "",
      "note": ""
    },
    "waterDischarge": {
      "standard": "",
      "limit": "",
      "note": ""
    },
    "soil": {
      "standard": "",
      "limit": "",
      "note": ""
    },
    "note": "碘化物排放参照相关标准"
  },
  "importExport": {
    "dualUseControlled": true,
    "licenseRequired": false,
    "controlList": "两用物项——碘可用于毒品制造",
    "note": "碘列入易制毒化学品目录"
  },
  "occupationalHealth": {
    "oelTwa": "0.01mg/m³",
    "oelStel": "0.03mg/m³",
    "gbzStandard": "GBZ 2.1-2019",
    "biologicalMonitoring": "尿碘",
    "healthSurveillance": "",
    "note": "碘蒸气"
  }
};


// Xe — 氙

P6_LEGAL['Xe'] = {
  "chinaHazChem": {
    "catalogEntry": "不列入危化品目录",
    "hazardClass": "—",
    "note": "不列入危化品目录"
  },
  "reach": {
    "svhc": false,
    "authorization": false,
    "restriction": "",
    "registrationStatus": "",
    "note": "惰性气体，REACH豁免（附件V）"
  },
  "rohs": {
    "restricted": false,
    "maxConcentration": null,
    "scope": "",
    "note": ""
  },
  "transport": {
    "imdg": {
      "un": "UN2036",
      "class": "2.2",
      "pg": "-"
    },
    "iata": {
      "un": "UN2036",
      "class": "2.2",
      "pg": "-"
    },
    "adr": {
      "un": "UN2036",
      "class": "2.2",
      "pg": "-"
    },
    "note": ""
  },
  "environmental": {
    "airEmission": {
      "standard": "",
      "limit": "",
      "note": ""
    },
    "waterDischarge": {
      "standard": "",
      "limit": "",
      "note": ""
    },
    "soil": {
      "standard": "",
      "limit": "",
      "note": ""
    },
    "note": "惰性气体，无特定排放标准"
  },
  "importExport": {
    "dualUseControlled": false,
    "licenseRequired": false,
    "controlList": "",
    "note": ""
  },
  "occupationalHealth": {
    "oelTwa": null,
    "oelStel": null,
    "gbzStandard": "GBZ 2.1-2019",
    "biologicalMonitoring": "",
    "healthSurveillance": "",
    "note": "单纯窒息性气体，无特定OEL"
  }
};


// Cs — 铯

P6_LEGAL['Cs'] = {
  "chinaHazChem": {
    "catalogEntry": "第1584项",
    "hazardClass": "遇水放出易燃气体的物质",
    "note": "列入目录"
  },
  "reach": {
    "svhc": false,
    "authorization": false,
    "restriction": "",
    "registrationStatus": "已注册",
    "note": ""
  },
  "rohs": {
    "restricted": false,
    "maxConcentration": null,
    "scope": "",
    "note": ""
  },
  "transport": {
    "imdg": {
      "un": "UN1407",
      "class": "4.3",
      "pg": "-"
    },
    "iata": {
      "un": "UN1407",
      "class": "4.3",
      "pg": "-"
    },
    "adr": {
      "un": "UN1407",
      "class": "4.3",
      "pg": "-"
    },
    "note": ""
  },
  "environmental": {
    "airEmission": {
      "standard": "",
      "limit": "",
      "note": ""
    },
    "waterDischarge": {
      "standard": "",
      "limit": "",
      "note": ""
    },
    "soil": {
      "standard": "",
      "limit": "",
      "note": ""
    },
    "note": "非特定污染物"
  },
  "importExport": {
    "dualUseControlled": false,
    "licenseRequired": false,
    "controlList": "",
    "note": ""
  },
  "occupationalHealth": {
    "oelTwa": "0.3mg/m³",
    "oelStel": null,
    "gbzStandard": "GBZ 2.1-2019",
    "biologicalMonitoring": "",
    "healthSurveillance": "",
    "note": "铯烟"
  }
};


// Ba — 钡

P6_LEGAL['Ba'] = {
  "chinaHazChem": {
    "catalogEntry": "第1585项",
    "hazardClass": "毒性物质",
    "note": "钡及其化合物列入目录"
  },
  "reach": {
    "svhc": false,
    "authorization": false,
    "restriction": "",
    "registrationStatus": "已注册",
    "note": ""
  },
  "rohs": {
    "restricted": false,
    "maxConcentration": null,
    "scope": "",
    "note": ""
  },
  "transport": {
    "imdg": {
      "un": "UN1564",
      "class": "6.1",
      "pg": "-"
    },
    "iata": {
      "un": "UN1564",
      "class": "6.1",
      "pg": "-"
    },
    "adr": {
      "un": "UN1564",
      "class": "6.1",
      "pg": "-"
    },
    "note": "钡化合物"
  },
  "environmental": {
    "airEmission": {
      "standard": "",
      "limit": "",
      "note": ""
    },
    "waterDischarge": {
      "standard": "GB 8978-1996",
      "limit": "总钡 2.0mg/L",
      "note": ""
    },
    "soil": {
      "standard": "GB 36600-2018",
      "limit": "—",
      "note": ""
    },
    "note": ""
  },
  "importExport": {
    "dualUseControlled": false,
    "licenseRequired": false,
    "controlList": "",
    "note": ""
  },
  "occupationalHealth": {
    "oelTwa": "0.5mg/m³",
    "oelStel": "1.5mg/m³",
    "gbzStandard": "GBZ 2.1-2019",
    "biologicalMonitoring": "尿钡",
    "healthSurveillance": "",
    "note": "可溶性钡化合物"
  }
};


// La — 镧

P6_LEGAL['La'] = {
  "chinaHazChem": {
    "catalogEntry": "不列入危化品目录",
    "hazardClass": "—",
    "note": "稀土元素"
  },
  "reach": {
    "svhc": false,
    "authorization": false,
    "restriction": "",
    "registrationStatus": "已注册",
    "note": ""
  },
  "rohs": {
    "restricted": false,
    "maxConcentration": null,
    "scope": "",
    "note": ""
  },
  "transport": {
    "imdg": {
      "un": null,
      "class": null,
      "pg": "-"
    },
    "iata": {
      "un": null,
      "class": null,
      "pg": "-"
    },
    "adr": {
      "un": null,
      "class": null,
      "pg": "-"
    },
    "note": "非危险货物"
  },
  "environmental": {
    "airEmission": {
      "standard": "",
      "limit": "",
      "note": ""
    },
    "waterDischarge": {
      "standard": "GB 8978-1996",
      "limit": "稀土工业水污染物排放标准(GB 26451)",
      "note": ""
    },
    "soil": {
      "standard": "",
      "limit": "",
      "note": ""
    },
    "note": "稀土冶炼分离"
  },
  "importExport": {
    "dualUseControlled": false,
    "licenseRequired": false,
    "controlList": "",
    "note": "稀土出口许可证管理"
  },
  "occupationalHealth": {
    "oelTwa": "5mg/m³",
    "oelStel": null,
    "gbzStandard": "GBZ 2.1-2019",
    "biologicalMonitoring": "",
    "healthSurveillance": "",
    "note": "镧化合物粉尘"
  }
};


// Ce — 铈

P6_LEGAL['Ce'] = {
  "chinaHazChem": {
    "catalogEntry": "不列入危化品目录",
    "hazardClass": "—",
    "note": "稀土元素"
  },
  "reach": {
    "svhc": false,
    "authorization": false,
    "restriction": "",
    "registrationStatus": "已注册",
    "note": ""
  },
  "rohs": {
    "restricted": false,
    "maxConcentration": null,
    "scope": "",
    "note": ""
  },
  "transport": {
    "imdg": {
      "un": null,
      "class": null,
      "pg": "-"
    },
    "iata": {
      "un": null,
      "class": null,
      "pg": "-"
    },
    "adr": {
      "un": null,
      "class": null,
      "pg": "-"
    },
    "note": "非危险货物"
  },
  "environmental": {
    "airEmission": {
      "standard": "",
      "limit": "",
      "note": ""
    },
    "waterDischarge": {
      "standard": "GB 8978-1996",
      "limit": "稀土工业水污染物排放标准(GB 26451)",
      "note": ""
    },
    "soil": {
      "standard": "",
      "limit": "",
      "note": ""
    },
    "note": "稀土冶炼分离"
  },
  "importExport": {
    "dualUseControlled": false,
    "licenseRequired": false,
    "controlList": "",
    "note": "稀土出口许可证管理"
  },
  "occupationalHealth": {
    "oelTwa": "5mg/m³",
    "oelStel": null,
    "gbzStandard": "GBZ 2.1-2019",
    "biologicalMonitoring": "",
    "healthSurveillance": "",
    "note": "铈化合物粉尘"
  }
};


// Pr — 镨

P6_LEGAL['Pr'] = {
  "chinaHazChem": {
    "catalogEntry": "不列入危化品目录",
    "hazardClass": "—",
    "note": "稀土元素"
  },
  "reach": {
    "svhc": false,
    "authorization": false,
    "restriction": "",
    "registrationStatus": "已注册",
    "note": ""
  },
  "rohs": {
    "restricted": false,
    "maxConcentration": null,
    "scope": "",
    "note": ""
  },
  "transport": {
    "imdg": {
      "un": null,
      "class": null,
      "pg": "-"
    },
    "iata": {
      "un": null,
      "class": null,
      "pg": "-"
    },
    "adr": {
      "un": null,
      "class": null,
      "pg": "-"
    },
    "note": "非危险货物"
  },
  "environmental": {
    "airEmission": {
      "standard": "",
      "limit": "",
      "note": ""
    },
    "waterDischarge": {
      "standard": "",
      "limit": "",
      "note": ""
    },
    "soil": {
      "standard": "",
      "limit": "",
      "note": ""
    },
    "note": "稀土元素参照行业标准"
  },
  "importExport": {
    "dualUseControlled": false,
    "licenseRequired": false,
    "controlList": "",
    "note": "稀土出口许可证管理"
  },
  "occupationalHealth": {
    "oelTwa": "5mg/m³",
    "oelStel": null,
    "gbzStandard": "GBZ 2.1-2019",
    "biologicalMonitoring": "",
    "healthSurveillance": "",
    "note": "镨化合物粉尘"
  }
};


// Nd — 钕

P6_LEGAL['Nd'] = {
  "chinaHazChem": {
    "catalogEntry": "不列入危化品目录",
    "hazardClass": "—",
    "note": "稀土元素"
  },
  "reach": {
    "svhc": false,
    "authorization": false,
    "restriction": "",
    "registrationStatus": "已注册",
    "note": ""
  },
  "rohs": {
    "restricted": false,
    "maxConcentration": null,
    "scope": "",
    "note": ""
  },
  "transport": {
    "imdg": {
      "un": null,
      "class": null,
      "pg": "-"
    },
    "iata": {
      "un": null,
      "class": null,
      "pg": "-"
    },
    "adr": {
      "un": null,
      "class": null,
      "pg": "-"
    },
    "note": "非危险货物"
  },
  "environmental": {
    "airEmission": {
      "standard": "",
      "limit": "",
      "note": ""
    },
    "waterDischarge": {
      "standard": "",
      "limit": "",
      "note": ""
    },
    "soil": {
      "standard": "",
      "limit": "",
      "note": ""
    },
    "note": "稀土元素参照行业标准"
  },
  "importExport": {
    "dualUseControlled": false,
    "licenseRequired": false,
    "controlList": "",
    "note": "稀土出口许可证管理"
  },
  "occupationalHealth": {
    "oelTwa": "5mg/m³",
    "oelStel": null,
    "gbzStandard": "GBZ 2.1-2019",
    "biologicalMonitoring": "",
    "healthSurveillance": "",
    "note": "钕化合物粉尘"
  }
};


// Pm — 钷

P6_LEGAL['Pm'] = {
  "chinaHazChem": {
    "catalogEntry": "不列入危化品目录",
    "hazardClass": "放射性物质",
    "note": "适用《放射性同位素与射线装置安全和防护条例》"
  },
  "reach": {
    "svhc": false,
    "authorization": false,
    "restriction": "",
    "registrationStatus": "",
    "note": "放射性物质适用特殊规定"
  },
  "rohs": {
    "restricted": false,
    "maxConcentration": null,
    "scope": "",
    "note": ""
  },
  "transport": {
    "imdg": {
      "un": "UN2910",
      "class": "7",
      "pg": "-"
    },
    "iata": {
      "un": "UN2910",
      "class": "7",
      "pg": "-"
    },
    "adr": {
      "un": "UN2910",
      "class": "7",
      "pg": "-"
    },
    "note": "放射性物质，按比活度分类运输；人造放射性元素"
  },
  "environmental": {
    "airEmission": {
      "standard": "GB 16297-1996",
      "limit": "参照GB 18871-2002",
      "note": ""
    },
    "waterDischarge": {
      "standard": "GB 8978-1996",
      "limit": "参照GB 18871-2002",
      "note": ""
    },
    "soil": {
      "standard": "GB 36600-2018",
      "limit": "参照GB 18871-2002",
      "note": ""
    },
    "note": "适用《电离辐射防护与辐射源安全基本标准》(GB 18871-2002)"
  },
  "importExport": {
    "dualUseControlled": true,
    "licenseRequired": true,
    "controlList": "放射性物质进出口管制",
    "note": "需环保部门（生态环境部）审批"
  },
  "occupationalHealth": {
    "oelTwa": null,
    "oelStel": null,
    "gbzStandard": "GBZ 188-2014",
    "biologicalMonitoring": "",
    "healthSurveillance": "",
    "note": "放射性职业照射，年有效剂量限值20mSv"
  }
};


// Sm — 钐

P6_LEGAL['Sm'] = {
  "chinaHazChem": {
    "catalogEntry": "不列入危化品目录",
    "hazardClass": "—",
    "note": "稀土元素"
  },
  "reach": {
    "svhc": false,
    "authorization": false,
    "restriction": "",
    "registrationStatus": "已注册",
    "note": "稀土元素已行业联合注册"
  },
  "rohs": {
    "restricted": false,
    "maxConcentration": null,
    "scope": "",
    "note": ""
  },
  "transport": {
    "imdg": {
      "un": null,
      "class": null,
      "pg": "-"
    },
    "iata": {
      "un": null,
      "class": null,
      "pg": "-"
    },
    "adr": {
      "un": null,
      "class": null,
      "pg": "-"
    },
    "note": "非危险货物，粉末可按可燃固体管理"
  },
  "environmental": {
    "airEmission": {
      "standard": "",
      "limit": "",
      "note": ""
    },
    "waterDischarge": {
      "standard": "GB 8978-1996",
      "limit": "稀土工业水污染物排放标准(GB 26451)",
      "note": ""
    },
    "soil": {
      "standard": "",
      "limit": "",
      "note": ""
    },
    "note": "稀土冶炼分离有行业排放标准"
  },
  "importExport": {
    "dualUseControlled": false,
    "licenseRequired": false,
    "controlList": "",
    "note": "稀土出口许可证管理"
  },
  "occupationalHealth": {
    "oelTwa": "5mg/m³",
    "oelStel": null,
    "gbzStandard": "GBZ 2.1-2019",
    "biologicalMonitoring": "",
    "healthSurveillance": "",
    "note": "稀土化合物粉尘"
  }
};


// Eu — 铕

P6_LEGAL['Eu'] = {
  "chinaHazChem": {
    "catalogEntry": "不列入危化品目录",
    "hazardClass": "—",
    "note": "稀土元素"
  },
  "reach": {
    "svhc": false,
    "authorization": false,
    "restriction": "",
    "registrationStatus": "已注册",
    "note": "稀土元素已行业联合注册"
  },
  "rohs": {
    "restricted": false,
    "maxConcentration": null,
    "scope": "",
    "note": ""
  },
  "transport": {
    "imdg": {
      "un": null,
      "class": null,
      "pg": "-"
    },
    "iata": {
      "un": null,
      "class": null,
      "pg": "-"
    },
    "adr": {
      "un": null,
      "class": null,
      "pg": "-"
    },
    "note": "非危险货物，粉末可按可燃固体管理"
  },
  "environmental": {
    "airEmission": {
      "standard": "",
      "limit": "",
      "note": ""
    },
    "waterDischarge": {
      "standard": "GB 8978-1996",
      "limit": "稀土工业水污染物排放标准(GB 26451)",
      "note": ""
    },
    "soil": {
      "standard": "",
      "limit": "",
      "note": ""
    },
    "note": "稀土冶炼分离有行业排放标准"
  },
  "importExport": {
    "dualUseControlled": false,
    "licenseRequired": false,
    "controlList": "",
    "note": "稀土出口许可证管理"
  },
  "occupationalHealth": {
    "oelTwa": "5mg/m³",
    "oelStel": null,
    "gbzStandard": "GBZ 2.1-2019",
    "biologicalMonitoring": "",
    "healthSurveillance": "",
    "note": "稀土化合物粉尘"
  }
};


// Gd — 钆

P6_LEGAL['Gd'] = {
  "chinaHazChem": {
    "catalogEntry": "不列入危化品目录",
    "hazardClass": "—",
    "note": "稀土元素"
  },
  "reach": {
    "svhc": false,
    "authorization": false,
    "restriction": "",
    "registrationStatus": "已注册",
    "note": "稀土元素已行业联合注册"
  },
  "rohs": {
    "restricted": false,
    "maxConcentration": null,
    "scope": "",
    "note": ""
  },
  "transport": {
    "imdg": {
      "un": null,
      "class": null,
      "pg": "-"
    },
    "iata": {
      "un": null,
      "class": null,
      "pg": "-"
    },
    "adr": {
      "un": null,
      "class": null,
      "pg": "-"
    },
    "note": "非危险货物，粉末可按可燃固体管理"
  },
  "environmental": {
    "airEmission": {
      "standard": "",
      "limit": "",
      "note": ""
    },
    "waterDischarge": {
      "standard": "GB 8978-1996",
      "limit": "稀土工业水污染物排放标准(GB 26451)",
      "note": ""
    },
    "soil": {
      "standard": "",
      "limit": "",
      "note": ""
    },
    "note": "稀土冶炼分离有行业排放标准"
  },
  "importExport": {
    "dualUseControlled": false,
    "licenseRequired": false,
    "controlList": "",
    "note": "稀土出口许可证管理"
  },
  "occupationalHealth": {
    "oelTwa": "5mg/m³",
    "oelStel": null,
    "gbzStandard": "GBZ 2.1-2019",
    "biologicalMonitoring": "",
    "healthSurveillance": "",
    "note": "稀土化合物粉尘"
  }
};


// Tb — 铽

P6_LEGAL['Tb'] = {
  "chinaHazChem": {
    "catalogEntry": "不列入危化品目录",
    "hazardClass": "—",
    "note": "稀土元素"
  },
  "reach": {
    "svhc": false,
    "authorization": false,
    "restriction": "",
    "registrationStatus": "已注册",
    "note": "稀土元素已行业联合注册"
  },
  "rohs": {
    "restricted": false,
    "maxConcentration": null,
    "scope": "",
    "note": ""
  },
  "transport": {
    "imdg": {
      "un": null,
      "class": null,
      "pg": "-"
    },
    "iata": {
      "un": null,
      "class": null,
      "pg": "-"
    },
    "adr": {
      "un": null,
      "class": null,
      "pg": "-"
    },
    "note": "非危险货物，粉末可按可燃固体管理"
  },
  "environmental": {
    "airEmission": {
      "standard": "",
      "limit": "",
      "note": ""
    },
    "waterDischarge": {
      "standard": "GB 8978-1996",
      "limit": "稀土工业水污染物排放标准(GB 26451)",
      "note": ""
    },
    "soil": {
      "standard": "",
      "limit": "",
      "note": ""
    },
    "note": "稀土冶炼分离有行业排放标准"
  },
  "importExport": {
    "dualUseControlled": false,
    "licenseRequired": false,
    "controlList": "",
    "note": "稀土出口许可证管理"
  },
  "occupationalHealth": {
    "oelTwa": "5mg/m³",
    "oelStel": null,
    "gbzStandard": "GBZ 2.1-2019",
    "biologicalMonitoring": "",
    "healthSurveillance": "",
    "note": "稀土化合物粉尘"
  }
};


// Dy — 镝

P6_LEGAL['Dy'] = {
  "chinaHazChem": {
    "catalogEntry": "不列入危化品目录",
    "hazardClass": "—",
    "note": "稀土元素"
  },
  "reach": {
    "svhc": false,
    "authorization": false,
    "restriction": "",
    "registrationStatus": "已注册",
    "note": "稀土元素已行业联合注册"
  },
  "rohs": {
    "restricted": false,
    "maxConcentration": null,
    "scope": "",
    "note": ""
  },
  "transport": {
    "imdg": {
      "un": null,
      "class": null,
      "pg": "-"
    },
    "iata": {
      "un": null,
      "class": null,
      "pg": "-"
    },
    "adr": {
      "un": null,
      "class": null,
      "pg": "-"
    },
    "note": "非危险货物，粉末可按可燃固体管理"
  },
  "environmental": {
    "airEmission": {
      "standard": "",
      "limit": "",
      "note": ""
    },
    "waterDischarge": {
      "standard": "GB 8978-1996",
      "limit": "稀土工业水污染物排放标准(GB 26451)",
      "note": ""
    },
    "soil": {
      "standard": "",
      "limit": "",
      "note": ""
    },
    "note": "稀土冶炼分离有行业排放标准"
  },
  "importExport": {
    "dualUseControlled": false,
    "licenseRequired": false,
    "controlList": "",
    "note": "稀土出口许可证管理"
  },
  "occupationalHealth": {
    "oelTwa": "5mg/m³",
    "oelStel": null,
    "gbzStandard": "GBZ 2.1-2019",
    "biologicalMonitoring": "",
    "healthSurveillance": "",
    "note": "稀土化合物粉尘"
  }
};


// Ho — 钬

P6_LEGAL['Ho'] = {
  "chinaHazChem": {
    "catalogEntry": "不列入危化品目录",
    "hazardClass": "—",
    "note": "稀土元素"
  },
  "reach": {
    "svhc": false,
    "authorization": false,
    "restriction": "",
    "registrationStatus": "已注册",
    "note": "稀土元素已行业联合注册"
  },
  "rohs": {
    "restricted": false,
    "maxConcentration": null,
    "scope": "",
    "note": ""
  },
  "transport": {
    "imdg": {
      "un": null,
      "class": null,
      "pg": "-"
    },
    "iata": {
      "un": null,
      "class": null,
      "pg": "-"
    },
    "adr": {
      "un": null,
      "class": null,
      "pg": "-"
    },
    "note": "非危险货物，粉末可按可燃固体管理"
  },
  "environmental": {
    "airEmission": {
      "standard": "",
      "limit": "",
      "note": ""
    },
    "waterDischarge": {
      "standard": "GB 8978-1996",
      "limit": "稀土工业水污染物排放标准(GB 26451)",
      "note": ""
    },
    "soil": {
      "standard": "",
      "limit": "",
      "note": ""
    },
    "note": "稀土冶炼分离有行业排放标准"
  },
  "importExport": {
    "dualUseControlled": false,
    "licenseRequired": false,
    "controlList": "",
    "note": "稀土出口许可证管理"
  },
  "occupationalHealth": {
    "oelTwa": "5mg/m³",
    "oelStel": null,
    "gbzStandard": "GBZ 2.1-2019",
    "biologicalMonitoring": "",
    "healthSurveillance": "",
    "note": "稀土化合物粉尘"
  }
};


// Er — 铒

P6_LEGAL['Er'] = {
  "chinaHazChem": {
    "catalogEntry": "不列入危化品目录",
    "hazardClass": "—",
    "note": "稀土元素"
  },
  "reach": {
    "svhc": false,
    "authorization": false,
    "restriction": "",
    "registrationStatus": "已注册",
    "note": "稀土元素已行业联合注册"
  },
  "rohs": {
    "restricted": false,
    "maxConcentration": null,
    "scope": "",
    "note": ""
  },
  "transport": {
    "imdg": {
      "un": null,
      "class": null,
      "pg": "-"
    },
    "iata": {
      "un": null,
      "class": null,
      "pg": "-"
    },
    "adr": {
      "un": null,
      "class": null,
      "pg": "-"
    },
    "note": "非危险货物，粉末可按可燃固体管理"
  },
  "environmental": {
    "airEmission": {
      "standard": "",
      "limit": "",
      "note": ""
    },
    "waterDischarge": {
      "standard": "GB 8978-1996",
      "limit": "稀土工业水污染物排放标准(GB 26451)",
      "note": ""
    },
    "soil": {
      "standard": "",
      "limit": "",
      "note": ""
    },
    "note": "稀土冶炼分离有行业排放标准"
  },
  "importExport": {
    "dualUseControlled": false,
    "licenseRequired": false,
    "controlList": "",
    "note": "稀土出口许可证管理"
  },
  "occupationalHealth": {
    "oelTwa": "5mg/m³",
    "oelStel": null,
    "gbzStandard": "GBZ 2.1-2019",
    "biologicalMonitoring": "",
    "healthSurveillance": "",
    "note": "稀土化合物粉尘"
  }
};


// Tm — 铥

P6_LEGAL['Tm'] = {
  "chinaHazChem": {
    "catalogEntry": "不列入危化品目录",
    "hazardClass": "—",
    "note": "稀土元素"
  },
  "reach": {
    "svhc": false,
    "authorization": false,
    "restriction": "",
    "registrationStatus": "已注册",
    "note": "稀土元素已行业联合注册"
  },
  "rohs": {
    "restricted": false,
    "maxConcentration": null,
    "scope": "",
    "note": ""
  },
  "transport": {
    "imdg": {
      "un": null,
      "class": null,
      "pg": "-"
    },
    "iata": {
      "un": null,
      "class": null,
      "pg": "-"
    },
    "adr": {
      "un": null,
      "class": null,
      "pg": "-"
    },
    "note": "非危险货物，粉末可按可燃固体管理"
  },
  "environmental": {
    "airEmission": {
      "standard": "",
      "limit": "",
      "note": ""
    },
    "waterDischarge": {
      "standard": "GB 8978-1996",
      "limit": "稀土工业水污染物排放标准(GB 26451)",
      "note": ""
    },
    "soil": {
      "standard": "",
      "limit": "",
      "note": ""
    },
    "note": "稀土冶炼分离有行业排放标准"
  },
  "importExport": {
    "dualUseControlled": false,
    "licenseRequired": false,
    "controlList": "",
    "note": "稀土出口许可证管理"
  },
  "occupationalHealth": {
    "oelTwa": "5mg/m³",
    "oelStel": null,
    "gbzStandard": "GBZ 2.1-2019",
    "biologicalMonitoring": "",
    "healthSurveillance": "",
    "note": "稀土化合物粉尘"
  }
};


// Yb — 镱

P6_LEGAL['Yb'] = {
  "chinaHazChem": {
    "catalogEntry": "不列入危化品目录",
    "hazardClass": "—",
    "note": "稀土元素"
  },
  "reach": {
    "svhc": false,
    "authorization": false,
    "restriction": "",
    "registrationStatus": "已注册",
    "note": "稀土元素已行业联合注册"
  },
  "rohs": {
    "restricted": false,
    "maxConcentration": null,
    "scope": "",
    "note": ""
  },
  "transport": {
    "imdg": {
      "un": null,
      "class": null,
      "pg": "-"
    },
    "iata": {
      "un": null,
      "class": null,
      "pg": "-"
    },
    "adr": {
      "un": null,
      "class": null,
      "pg": "-"
    },
    "note": "非危险货物，粉末可按可燃固体管理"
  },
  "environmental": {
    "airEmission": {
      "standard": "",
      "limit": "",
      "note": ""
    },
    "waterDischarge": {
      "standard": "GB 8978-1996",
      "limit": "稀土工业水污染物排放标准(GB 26451)",
      "note": ""
    },
    "soil": {
      "standard": "",
      "limit": "",
      "note": ""
    },
    "note": "稀土冶炼分离有行业排放标准"
  },
  "importExport": {
    "dualUseControlled": false,
    "licenseRequired": false,
    "controlList": "",
    "note": "稀土出口许可证管理"
  },
  "occupationalHealth": {
    "oelTwa": "5mg/m³",
    "oelStel": null,
    "gbzStandard": "GBZ 2.1-2019",
    "biologicalMonitoring": "",
    "healthSurveillance": "",
    "note": "稀土化合物粉尘"
  }
};


// Lu — 镥

P6_LEGAL['Lu'] = {
  "chinaHazChem": {
    "catalogEntry": "不列入危化品目录",
    "hazardClass": "—",
    "note": "稀土元素"
  },
  "reach": {
    "svhc": false,
    "authorization": false,
    "restriction": "",
    "registrationStatus": "已注册",
    "note": "稀土元素已行业联合注册"
  },
  "rohs": {
    "restricted": false,
    "maxConcentration": null,
    "scope": "",
    "note": ""
  },
  "transport": {
    "imdg": {
      "un": null,
      "class": null,
      "pg": "-"
    },
    "iata": {
      "un": null,
      "class": null,
      "pg": "-"
    },
    "adr": {
      "un": null,
      "class": null,
      "pg": "-"
    },
    "note": "非危险货物，粉末可按可燃固体管理"
  },
  "environmental": {
    "airEmission": {
      "standard": "",
      "limit": "",
      "note": ""
    },
    "waterDischarge": {
      "standard": "GB 8978-1996",
      "limit": "稀土工业水污染物排放标准(GB 26451)",
      "note": ""
    },
    "soil": {
      "standard": "",
      "limit": "",
      "note": ""
    },
    "note": "稀土冶炼分离有行业排放标准"
  },
  "importExport": {
    "dualUseControlled": false,
    "licenseRequired": false,
    "controlList": "",
    "note": "稀土出口许可证管理"
  },
  "occupationalHealth": {
    "oelTwa": "5mg/m³",
    "oelStel": null,
    "gbzStandard": "GBZ 2.1-2019",
    "biologicalMonitoring": "",
    "healthSurveillance": "",
    "note": "稀土化合物粉尘"
  }
};


// Hf — 铪

P6_LEGAL['Hf'] = {
  "chinaHazChem": {
    "catalogEntry": "不列入危化品目录",
    "hazardClass": "—",
    "note": "铪粉可燃"
  },
  "reach": {
    "svhc": false,
    "authorization": false,
    "restriction": "",
    "registrationStatus": "已注册",
    "note": ""
  },
  "rohs": {
    "restricted": false,
    "maxConcentration": null,
    "scope": "",
    "note": ""
  },
  "transport": {
    "imdg": {
      "un": "UN2545",
      "class": "4.1",
      "pg": "-"
    },
    "iata": {
      "un": "UN2545",
      "class": "4.1",
      "pg": "-"
    },
    "adr": {
      "un": "UN2545",
      "class": "4.1",
      "pg": "-"
    },
    "note": "铪粉；金属铪非危险货物"
  },
  "environmental": {
    "airEmission": {
      "standard": "",
      "limit": "",
      "note": ""
    },
    "waterDischarge": {
      "standard": "",
      "limit": "",
      "note": ""
    },
    "soil": {
      "standard": "",
      "limit": "",
      "note": ""
    },
    "note": "非特定污染物"
  },
  "importExport": {
    "dualUseControlled": true,
    "licenseRequired": false,
    "controlList": "核材料管制",
    "note": "铪用于核反应堆控制棒"
  },
  "occupationalHealth": {
    "oelTwa": "0.5mg/m³",
    "oelStel": null,
    "gbzStandard": "GBZ 2.1-2019",
    "biologicalMonitoring": "",
    "healthSurveillance": "",
    "note": "铪化合物粉尘"
  }
};


// Ta — 钽

P6_LEGAL['Ta'] = {
  "chinaHazChem": {
    "catalogEntry": "不列入危化品目录",
    "hazardClass": "—",
    "note": ""
  },
  "reach": {
    "svhc": false,
    "authorization": false,
    "restriction": "",
    "registrationStatus": "已注册",
    "note": ""
  },
  "rohs": {
    "restricted": false,
    "maxConcentration": null,
    "scope": "",
    "note": ""
  },
  "transport": {
    "imdg": {
      "un": null,
      "class": null,
      "pg": "-"
    },
    "iata": {
      "un": null,
      "class": null,
      "pg": "-"
    },
    "adr": {
      "un": null,
      "class": null,
      "pg": "-"
    },
    "note": "非危险货物"
  },
  "environmental": {
    "airEmission": {
      "standard": "",
      "limit": "",
      "note": ""
    },
    "waterDischarge": {
      "standard": "",
      "limit": "",
      "note": ""
    },
    "soil": {
      "standard": "",
      "limit": "",
      "note": ""
    },
    "note": "非特定污染物"
  },
  "importExport": {
    "dualUseControlled": false,
    "licenseRequired": false,
    "controlList": "",
    "note": "钽为关键矿产，电容材料"
  },
  "occupationalHealth": {
    "oelTwa": "5mg/m³",
    "oelStel": null,
    "gbzStandard": "GBZ 2.1-2019",
    "biologicalMonitoring": "",
    "healthSurveillance": "",
    "note": "钽粉尘"
  }
};


// W — 钨

P6_LEGAL['W'] = {
  "chinaHazChem": {
    "catalogEntry": "不列入危化品目录",
    "hazardClass": "—",
    "note": ""
  },
  "reach": {
    "svhc": false,
    "authorization": false,
    "restriction": "",
    "registrationStatus": "已注册",
    "note": ""
  },
  "rohs": {
    "restricted": false,
    "maxConcentration": null,
    "scope": "",
    "note": ""
  },
  "transport": {
    "imdg": {
      "un": null,
      "class": null,
      "pg": "-"
    },
    "iata": {
      "un": null,
      "class": null,
      "pg": "-"
    },
    "adr": {
      "un": null,
      "class": null,
      "pg": "-"
    },
    "note": "非危险货物"
  },
  "environmental": {
    "airEmission": {
      "standard": "",
      "limit": "",
      "note": ""
    },
    "waterDischarge": {
      "standard": "GB 8978-1996",
      "limit": "总钨 0.5mg/L",
      "note": ""
    },
    "soil": {
      "standard": "",
      "limit": "",
      "note": ""
    },
    "note": "钨排放限值"
  },
  "importExport": {
    "dualUseControlled": false,
    "licenseRequired": false,
    "controlList": "",
    "note": "钨为战略金属"
  },
  "occupationalHealth": {
    "oelTwa": "5mg/m³",
    "oelStel": "10mg/m³",
    "gbzStandard": "GBZ 2.1-2019",
    "biologicalMonitoring": "",
    "healthSurveillance": "",
    "note": "钨及其不溶性化合物"
  }
};


// Re — 铼

P6_LEGAL['Re'] = {
  "chinaHazChem": {
    "catalogEntry": "不列入危化品目录",
    "hazardClass": "—",
    "note": ""
  },
  "reach": {
    "svhc": false,
    "authorization": false,
    "restriction": "",
    "registrationStatus": "已注册",
    "note": ""
  },
  "rohs": {
    "restricted": false,
    "maxConcentration": null,
    "scope": "",
    "note": ""
  },
  "transport": {
    "imdg": {
      "un": null,
      "class": null,
      "pg": "-"
    },
    "iata": {
      "un": null,
      "class": null,
      "pg": "-"
    },
    "adr": {
      "un": null,
      "class": null,
      "pg": "-"
    },
    "note": "非危险货物"
  },
  "environmental": {
    "airEmission": {
      "standard": "",
      "limit": "",
      "note": ""
    },
    "waterDischarge": {
      "standard": "",
      "limit": "",
      "note": ""
    },
    "soil": {
      "standard": "",
      "limit": "",
      "note": ""
    },
    "note": "非特定污染物"
  },
  "importExport": {
    "dualUseControlled": false,
    "licenseRequired": false,
    "controlList": "",
    "note": "铼为稀缺战略金属"
  },
  "occupationalHealth": {
    "oelTwa": "5mg/m³",
    "oelStel": null,
    "gbzStandard": "GBZ 2.1-2019",
    "biologicalMonitoring": "",
    "healthSurveillance": "",
    "note": "铼化合物粉尘"
  }
};


// Os — 锇

P6_LEGAL['Os'] = {
  "chinaHazChem": {
    "catalogEntry": "不列入危化品目录（金属锇）",
    "hazardClass": "—",
    "note": "四氧化锇列入目录"
  },
  "reach": {
    "svhc": false,
    "authorization": false,
    "restriction": "",
    "registrationStatus": "已注册",
    "note": ""
  },
  "rohs": {
    "restricted": false,
    "maxConcentration": null,
    "scope": "",
    "note": ""
  },
  "transport": {
    "imdg": {
      "un": "UN2471",
      "class": "6.1",
      "pg": "-"
    },
    "iata": {
      "un": "UN2471",
      "class": "6.1",
      "pg": "-"
    },
    "adr": {
      "un": "UN2471",
      "class": "6.1",
      "pg": "-"
    },
    "note": "四氧化锇剧毒"
  },
  "environmental": {
    "airEmission": {
      "standard": "",
      "limit": "",
      "note": ""
    },
    "waterDischarge": {
      "standard": "",
      "limit": "",
      "note": ""
    },
    "soil": {
      "standard": "",
      "limit": "",
      "note": ""
    },
    "note": "四氧化锇挥发性极强"
  },
  "importExport": {
    "dualUseControlled": false,
    "licenseRequired": false,
    "controlList": "",
    "note": ""
  },
  "occupationalHealth": {
    "oelTwa": "0.0002mg/m³",
    "oelStel": "0.0006mg/m³",
    "gbzStandard": "GBZ 2.1-2019",
    "biologicalMonitoring": "",
    "healthSurveillance": "",
    "note": "四氧化锇蒸气"
  }
};


// Ir — 铱

P6_LEGAL['Ir'] = {
  "chinaHazChem": {
    "catalogEntry": "不列入危化品目录",
    "hazardClass": "—",
    "note": ""
  },
  "reach": {
    "svhc": false,
    "authorization": false,
    "restriction": "",
    "registrationStatus": "已注册",
    "note": ""
  },
  "rohs": {
    "restricted": false,
    "maxConcentration": null,
    "scope": "",
    "note": ""
  },
  "transport": {
    "imdg": {
      "un": null,
      "class": null,
      "pg": "-"
    },
    "iata": {
      "un": null,
      "class": null,
      "pg": "-"
    },
    "adr": {
      "un": null,
      "class": null,
      "pg": "-"
    },
    "note": "非危险货物"
  },
  "environmental": {
    "airEmission": {
      "standard": "",
      "limit": "",
      "note": ""
    },
    "waterDischarge": {
      "standard": "",
      "limit": "",
      "note": ""
    },
    "soil": {
      "standard": "",
      "limit": "",
      "note": ""
    },
    "note": "非特定污染物"
  },
  "importExport": {
    "dualUseControlled": false,
    "licenseRequired": false,
    "controlList": "",
    "note": ""
  },
  "occupationalHealth": {
    "oelTwa": "1mg/m³",
    "oelStel": null,
    "gbzStandard": "GBZ 2.1-2019",
    "biologicalMonitoring": "",
    "healthSurveillance": "",
    "note": "铱化合物粉尘"
  }
};


// Pt — 铂

P6_LEGAL['Pt'] = {
  "chinaHazChem": {
    "catalogEntry": "不列入危化品目录（金属铂）",
    "hazardClass": "—",
    "note": "铂化合物部分列入"
  },
  "reach": {
    "svhc": true,
    "authorization": false,
    "restriction": "",
    "registrationStatus": "已注册",
    "note": "六氯铂酸等列入SVHC"
  },
  "rohs": {
    "restricted": false,
    "maxConcentration": null,
    "scope": "",
    "note": ""
  },
  "transport": {
    "imdg": {
      "un": null,
      "class": null,
      "pg": "-"
    },
    "iata": {
      "un": null,
      "class": null,
      "pg": "-"
    },
    "adr": {
      "un": null,
      "class": null,
      "pg": "-"
    },
    "note": "非危险货物"
  },
  "environmental": {
    "airEmission": {
      "standard": "",
      "limit": "",
      "note": ""
    },
    "waterDischarge": {
      "standard": "",
      "limit": "",
      "note": ""
    },
    "soil": {
      "standard": "",
      "limit": "",
      "note": ""
    },
    "note": "铂化合物排放参照相关标准"
  },
  "importExport": {
    "dualUseControlled": false,
    "licenseRequired": false,
    "controlList": "",
    "note": ""
  },
  "occupationalHealth": {
    "oelTwa": "0.002mg/m³",
    "oelStel": null,
    "gbzStandard": "GBZ 2.1-2019",
    "biologicalMonitoring": "",
    "healthSurveillance": "",
    "note": "铂化合物可致铂过敏症"
  }
};


// Au — 金

P6_LEGAL['Au'] = {
  "chinaHazChem": {
    "catalogEntry": "不列入危化品目录（金属金）",
    "hazardClass": "—",
    "note": "氰化金盐有毒性"
  },
  "reach": {
    "svhc": false,
    "authorization": false,
    "restriction": "",
    "registrationStatus": "已注册",
    "note": ""
  },
  "rohs": {
    "restricted": false,
    "maxConcentration": null,
    "scope": "",
    "note": ""
  },
  "transport": {
    "imdg": {
      "un": null,
      "class": null,
      "pg": "-"
    },
    "iata": {
      "un": null,
      "class": null,
      "pg": "-"
    },
    "adr": {
      "un": null,
      "class": null,
      "pg": "-"
    },
    "note": "非危险货物"
  },
  "environmental": {
    "airEmission": {
      "standard": "",
      "limit": "",
      "note": ""
    },
    "waterDischarge": {
      "standard": "GB 8978-1996",
      "limit": "总金 0.01mg/L",
      "note": ""
    },
    "soil": {
      "standard": "",
      "limit": "",
      "note": ""
    },
    "note": "金排放极低限值"
  },
  "importExport": {
    "dualUseControlled": false,
    "licenseRequired": false,
    "controlList": "",
    "note": ""
  },
  "occupationalHealth": {
    "oelTwa": null,
    "oelStel": null,
    "gbzStandard": "GBZ 2.1-2019",
    "biologicalMonitoring": "",
    "healthSurveillance": "",
    "note": "金属金无特定OEL，氰化金盐参照氰化物"
  }
};


// Hg — 汞

P6_LEGAL['Hg'] = {
  "chinaHazChem": {
    "catalogEntry": "第1586项",
    "hazardClass": "毒性物质",
    "note": "汞列入目录"
  },
  "reach": {
    "svhc": true,
    "authorization": true,
    "restriction": "附录XVII 第18条",
    "registrationStatus": "已注册",
    "note": "汞及化合物列入SVHC及授权清单"
  },
  "rohs": {
    "restricted": true,
    "maxConcentration": "0.1%",
    "scope": "电子电气设备",
    "note": "汞受限，部分豁免如荧光灯"
  },
  "transport": {
    "imdg": {
      "un": "UN2809",
      "class": "8",
      "pg": "-"
    },
    "iata": {
      "un": "UN2809",
      "class": "8",
      "pg": "-"
    },
    "adr": {
      "un": "UN2809",
      "class": "8",
      "pg": "-"
    },
    "note": "液态汞，腐蚀性"
  },
  "environmental": {
    "airEmission": {
      "standard": "GB 16297-1996",
      "limit": "汞及其化合物排放限值",
      "note": ""
    },
    "waterDischarge": {
      "standard": "GB 8978-1996",
      "limit": "总汞 0.05mg/L",
      "note": ""
    },
    "soil": {
      "standard": "GB 36600-2018",
      "limit": "建设用地第一类用地筛选值 8mg/kg",
      "note": ""
    },
    "note": ""
  },
  "importExport": {
    "dualUseControlled": true,
    "licenseRequired": true,
    "controlList": "汞出口管制",
    "note": "《关于汞的水俣公约》缔约国，汞进出口受限"
  },
  "occupationalHealth": {
    "oelTwa": "0.02mg/m³",
    "oelStel": "0.04mg/m³",
    "gbzStandard": "GBZ 2.1-2019",
    "biologicalMonitoring": "尿汞, 血汞",
    "healthSurveillance": "汞中毒体检",
    "note": "汞蒸气及无机汞为IARC 1类致癌物"
  }
};


// Tl — 铊

P6_LEGAL['Tl'] = {
  "chinaHazChem": {
    "catalogEntry": "第1587项",
    "hazardClass": "毒性物质",
    "note": "铊及其化合物列入目录"
  },
  "reach": {
    "svhc": true,
    "authorization": false,
    "restriction": "",
    "registrationStatus": "已注册",
    "note": "铊化合物列入SVHC"
  },
  "rohs": {
    "restricted": false,
    "maxConcentration": null,
    "scope": "",
    "note": ""
  },
  "transport": {
    "imdg": {
      "un": "UN3287",
      "class": "6.1",
      "pg": "-"
    },
    "iata": {
      "un": "UN3287",
      "class": "6.1",
      "pg": "-"
    },
    "adr": {
      "un": "UN3287",
      "class": "6.1",
      "pg": "-"
    },
    "note": "铊化合物"
  },
  "environmental": {
    "airEmission": {
      "standard": "",
      "limit": "",
      "note": ""
    },
    "waterDischarge": {
      "standard": "GB 8978-1996",
      "limit": "总铊 0.005mg/L",
      "note": ""
    },
    "soil": {
      "standard": "GB 36600-2018",
      "limit": "—",
      "note": ""
    },
    "note": ""
  },
  "importExport": {
    "dualUseControlled": true,
    "licenseRequired": false,
    "controlList": "两用物项——铊出口管制",
    "note": ""
  },
  "occupationalHealth": {
    "oelTwa": "0.0001mg/m³",
    "oelStel": "0.0003mg/m³",
    "gbzStandard": "GBZ 2.1-2019",
    "biologicalMonitoring": "尿铊",
    "healthSurveillance": "铊中毒体检",
    "note": "剧毒物质，皮肤可吸收"
  }
};


// Pb — 铅

P6_LEGAL['Pb'] = {
  "chinaHazChem": {
    "catalogEntry": "第1588项",
    "hazardClass": "毒性物质",
    "note": "铅及其化合物列入目录"
  },
  "reach": {
    "svhc": true,
    "authorization": true,
    "restriction": "附录XVII 第16,17,63条",
    "registrationStatus": "已注册",
    "note": "铅及化合物列入SVHC及授权清单"
  },
  "rohs": {
    "restricted": true,
    "maxConcentration": "0.1%",
    "scope": "电子电气设备",
    "note": "铅受限，铅酸电池等部分豁免"
  },
  "transport": {
    "imdg": {
      "un": "UN3077",
      "class": "9",
      "pg": "-"
    },
    "iata": {
      "un": "UN3077",
      "class": "9",
      "pg": "-"
    },
    "adr": {
      "un": "UN3077",
      "class": "9",
      "pg": "-"
    },
    "note": "铅化合物"
  },
  "environmental": {
    "airEmission": {
      "standard": "GB 16297-1996",
      "limit": "铅及其化合物排放限值",
      "note": ""
    },
    "waterDischarge": {
      "standard": "GB 8978-1996",
      "limit": "总铅 1.0mg/L",
      "note": ""
    },
    "soil": {
      "standard": "GB 36600-2018",
      "limit": "建设用地第一类用地筛选值 400mg/kg",
      "note": ""
    },
    "note": ""
  },
  "importExport": {
    "dualUseControlled": false,
    "licenseRequired": false,
    "controlList": "",
    "note": "铅蓄电池出口受管控"
  },
  "occupationalHealth": {
    "oelTwa": "0.05mg/m³",
    "oelStel": "0.15mg/m³",
    "gbzStandard": "GBZ 2.1-2019",
    "biologicalMonitoring": "血铅",
    "healthSurveillance": "铅中毒体检",
    "note": "铅为IARC 2A类致癌物"
  }
};


// Bi — 铋

P6_LEGAL['Bi'] = {
  "chinaHazChem": {
    "catalogEntry": "不列入危化品目录",
    "hazardClass": "—",
    "note": "铋化合物部分列入"
  },
  "reach": {
    "svhc": false,
    "authorization": false,
    "restriction": "",
    "registrationStatus": "已注册",
    "note": ""
  },
  "rohs": {
    "restricted": false,
    "maxConcentration": null,
    "scope": "",
    "note": ""
  },
  "transport": {
    "imdg": {
      "un": null,
      "class": null,
      "pg": "-"
    },
    "iata": {
      "un": null,
      "class": null,
      "pg": "-"
    },
    "adr": {
      "un": null,
      "class": null,
      "pg": "-"
    },
    "note": "非危险货物"
  },
  "environmental": {
    "airEmission": {
      "standard": "",
      "limit": "",
      "note": ""
    },
    "waterDischarge": {
      "standard": "",
      "limit": "",
      "note": ""
    },
    "soil": {
      "standard": "",
      "limit": "",
      "note": ""
    },
    "note": "非特定污染物"
  },
  "importExport": {
    "dualUseControlled": false,
    "licenseRequired": false,
    "controlList": "",
    "note": ""
  },
  "occupationalHealth": {
    "oelTwa": "5mg/m³",
    "oelStel": null,
    "gbzStandard": "GBZ 2.1-2019",
    "biologicalMonitoring": "",
    "healthSurveillance": "",
    "note": "铋化合物粉尘"
  }
};


// Po — 钋

P6_LEGAL['Po'] = {
  "chinaHazChem": {
    "catalogEntry": "不列入危化品目录",
    "hazardClass": "放射性物质",
    "note": "适用《放射性同位素与射线装置安全和防护条例》"
  },
  "reach": {
    "svhc": false,
    "authorization": false,
    "restriction": "",
    "registrationStatus": "",
    "note": "放射性物质适用特殊规定"
  },
  "rohs": {
    "restricted": false,
    "maxConcentration": null,
    "scope": "",
    "note": ""
  },
  "transport": {
    "imdg": {
      "un": "UN2910",
      "class": "7",
      "pg": "-"
    },
    "iata": {
      "un": "UN2910",
      "class": "7",
      "pg": "-"
    },
    "adr": {
      "un": "UN2910",
      "class": "7",
      "pg": "-"
    },
    "note": "放射性物质，按比活度分类运输；极毒放射性元素，α衰变"
  },
  "environmental": {
    "airEmission": {
      "standard": "GB 16297-1996",
      "limit": "参照GB 18871-2002",
      "note": ""
    },
    "waterDischarge": {
      "standard": "GB 8978-1996",
      "limit": "参照GB 18871-2002",
      "note": ""
    },
    "soil": {
      "standard": "GB 36600-2018",
      "limit": "参照GB 18871-2002",
      "note": ""
    },
    "note": "适用《电离辐射防护与辐射源安全基本标准》(GB 18871-2002)"
  },
  "importExport": {
    "dualUseControlled": true,
    "licenseRequired": true,
    "controlList": "放射性物质进出口管制",
    "note": "需环保部门（生态环境部）审批"
  },
  "occupationalHealth": {
    "oelTwa": null,
    "oelStel": null,
    "gbzStandard": "GBZ 188-2014",
    "biologicalMonitoring": "",
    "healthSurveillance": "",
    "note": "放射性职业照射，年有效剂量限值20mSv"
  }
};


// At — 砹

P6_LEGAL['At'] = {
  "chinaHazChem": {
    "catalogEntry": "不列入危化品目录",
    "hazardClass": "放射性物质",
    "note": "适用《放射性同位素与射线装置安全和防护条例》"
  },
  "reach": {
    "svhc": false,
    "authorization": false,
    "restriction": "",
    "registrationStatus": "",
    "note": "放射性物质适用特殊规定"
  },
  "rohs": {
    "restricted": false,
    "maxConcentration": null,
    "scope": "",
    "note": ""
  },
  "transport": {
    "imdg": {
      "un": "UN2910",
      "class": "7",
      "pg": "-"
    },
    "iata": {
      "un": "UN2910",
      "class": "7",
      "pg": "-"
    },
    "adr": {
      "un": "UN2910",
      "class": "7",
      "pg": "-"
    },
    "note": "放射性物质，按比活度分类运输；卤族放射性元素，半衰期极短"
  },
  "environmental": {
    "airEmission": {
      "standard": "GB 16297-1996",
      "limit": "参照GB 18871-2002",
      "note": ""
    },
    "waterDischarge": {
      "standard": "GB 8978-1996",
      "limit": "参照GB 18871-2002",
      "note": ""
    },
    "soil": {
      "standard": "GB 36600-2018",
      "limit": "参照GB 18871-2002",
      "note": ""
    },
    "note": "适用《电离辐射防护与辐射源安全基本标准》(GB 18871-2002)"
  },
  "importExport": {
    "dualUseControlled": true,
    "licenseRequired": true,
    "controlList": "放射性物质进出口管制",
    "note": "需环保部门（生态环境部）审批"
  },
  "occupationalHealth": {
    "oelTwa": null,
    "oelStel": null,
    "gbzStandard": "GBZ 188-2014",
    "biologicalMonitoring": "",
    "healthSurveillance": "",
    "note": "放射性职业照射，年有效剂量限值20mSv"
  }
};


// Rn — 氡

P6_LEGAL['Rn'] = {
  "chinaHazChem": {
    "catalogEntry": "不列入危化品目录",
    "hazardClass": "放射性物质",
    "note": "适用《放射性同位素与射线装置安全和防护条例》"
  },
  "reach": {
    "svhc": false,
    "authorization": false,
    "restriction": "",
    "registrationStatus": "",
    "note": "放射性惰性气体"
  },
  "rohs": {
    "restricted": false,
    "maxConcentration": null,
    "scope": "",
    "note": ""
  },
  "transport": {
    "imdg": {
      "un": "UN1006",
      "class": "7",
      "pg": "-"
    },
    "iata": {
      "un": "UN1006",
      "class": "7",
      "pg": "-"
    },
    "adr": {
      "un": "UN1006",
      "class": "7",
      "pg": "-"
    },
    "note": "放射性气体"
  },
  "environmental": {
    "airEmission": {
      "standard": "GB 16297-1996",
      "limit": "室内氡浓度参照GB/T 16146",
      "note": ""
    },
    "waterDischarge": {
      "standard": "",
      "limit": "",
      "note": ""
    },
    "soil": {
      "standard": "",
      "limit": "",
      "note": ""
    },
    "note": "氡是室内空气污染源，建筑物防护重点"
  },
  "importExport": {
    "dualUseControlled": true,
    "licenseRequired": true,
    "controlList": "放射性物质进出口管制",
    "note": "需环保部门审批"
  },
  "occupationalHealth": {
    "oelTwa": null,
    "oelStel": null,
    "gbzStandard": "GBZ 188-2014",
    "biologicalMonitoring": "",
    "healthSurveillance": "",
    "note": "氡为IARC 1类致癌物，矿井及地下室重点关注"
  }
};


// Fr — 钫

P6_LEGAL['Fr'] = {
  "chinaHazChem": {
    "catalogEntry": "不列入危化品目录",
    "hazardClass": "放射性物质",
    "note": "适用《放射性同位素与射线装置安全和防护条例》"
  },
  "reach": {
    "svhc": false,
    "authorization": false,
    "restriction": "",
    "registrationStatus": "",
    "note": "放射性物质适用特殊规定"
  },
  "rohs": {
    "restricted": false,
    "maxConcentration": null,
    "scope": "",
    "note": ""
  },
  "transport": {
    "imdg": {
      "un": "UN2910",
      "class": "7",
      "pg": "-"
    },
    "iata": {
      "un": "UN2910",
      "class": "7",
      "pg": "-"
    },
    "adr": {
      "un": "UN2910",
      "class": "7",
      "pg": "-"
    },
    "note": "放射性物质，按比活度分类运输；极稀有放射性元素，半衰期极短"
  },
  "environmental": {
    "airEmission": {
      "standard": "GB 16297-1996",
      "limit": "参照GB 18871-2002",
      "note": ""
    },
    "waterDischarge": {
      "standard": "GB 8978-1996",
      "limit": "参照GB 18871-2002",
      "note": ""
    },
    "soil": {
      "standard": "GB 36600-2018",
      "limit": "参照GB 18871-2002",
      "note": ""
    },
    "note": "适用《电离辐射防护与辐射源安全基本标准》(GB 18871-2002)"
  },
  "importExport": {
    "dualUseControlled": true,
    "licenseRequired": true,
    "controlList": "放射性物质进出口管制",
    "note": "需环保部门（生态环境部）审批"
  },
  "occupationalHealth": {
    "oelTwa": null,
    "oelStel": null,
    "gbzStandard": "GBZ 188-2014",
    "biologicalMonitoring": "",
    "healthSurveillance": "",
    "note": "放射性职业照射，年有效剂量限值20mSv"
  }
};


// Ra — 镭

P6_LEGAL['Ra'] = {
  "chinaHazChem": {
    "catalogEntry": "不列入危化品目录",
    "hazardClass": "放射性物质",
    "note": "适用《放射性同位素与射线装置安全和防护条例》"
  },
  "reach": {
    "svhc": false,
    "authorization": false,
    "restriction": "",
    "registrationStatus": "",
    "note": "放射性物质适用特殊规定"
  },
  "rohs": {
    "restricted": false,
    "maxConcentration": null,
    "scope": "",
    "note": ""
  },
  "transport": {
    "imdg": {
      "un": "UN2910",
      "class": "7",
      "pg": "-"
    },
    "iata": {
      "un": "UN2910",
      "class": "7",
      "pg": "-"
    },
    "adr": {
      "un": "UN2910",
      "class": "7",
      "pg": "-"
    },
    "note": "放射性物质，按比活度分类运输；镭及其化合物，历史上用于发光涂料"
  },
  "environmental": {
    "airEmission": {
      "standard": "GB 16297-1996",
      "limit": "参照GB 18871-2002",
      "note": ""
    },
    "waterDischarge": {
      "standard": "GB 8978-1996",
      "limit": "参照GB 18871-2002",
      "note": ""
    },
    "soil": {
      "standard": "GB 36600-2018",
      "limit": "参照GB 18871-2002",
      "note": ""
    },
    "note": "适用《电离辐射防护与辐射源安全基本标准》(GB 18871-2002)"
  },
  "importExport": {
    "dualUseControlled": true,
    "licenseRequired": true,
    "controlList": "放射性物质进出口管制",
    "note": "需环保部门（生态环境部）审批"
  },
  "occupationalHealth": {
    "oelTwa": null,
    "oelStel": null,
    "gbzStandard": "GBZ 188-2014",
    "biologicalMonitoring": "",
    "healthSurveillance": "",
    "note": "放射性职业照射，年有效剂量限值20mSv"
  }
};


// Ac — 锕

P6_LEGAL['Ac'] = {
  "chinaHazChem": {
    "catalogEntry": "不列入危化品目录",
    "hazardClass": "放射性物质",
    "note": "适用《放射性同位素与射线装置安全和防护条例》"
  },
  "reach": {
    "svhc": false,
    "authorization": false,
    "restriction": "",
    "registrationStatus": "",
    "note": "放射性物质适用特殊规定"
  },
  "rohs": {
    "restricted": false,
    "maxConcentration": null,
    "scope": "",
    "note": ""
  },
  "transport": {
    "imdg": {
      "un": "UN2910",
      "class": "7",
      "pg": "-"
    },
    "iata": {
      "un": "UN2910",
      "class": "7",
      "pg": "-"
    },
    "adr": {
      "un": "UN2910",
      "class": "7",
      "pg": "-"
    },
    "note": "放射性物质，按比活度分类运输；锕系放射元素"
  },
  "environmental": {
    "airEmission": {
      "standard": "GB 16297-1996",
      "limit": "参照GB 18871-2002",
      "note": ""
    },
    "waterDischarge": {
      "standard": "GB 8978-1996",
      "limit": "参照GB 18871-2002",
      "note": ""
    },
    "soil": {
      "standard": "GB 36600-2018",
      "limit": "参照GB 18871-2002",
      "note": ""
    },
    "note": "适用《电离辐射防护与辐射源安全基本标准》(GB 18871-2002)"
  },
  "importExport": {
    "dualUseControlled": true,
    "licenseRequired": true,
    "controlList": "放射性物质进出口管制",
    "note": "需环保部门（生态环境部）审批"
  },
  "occupationalHealth": {
    "oelTwa": null,
    "oelStel": null,
    "gbzStandard": "GBZ 188-2014",
    "biologicalMonitoring": "",
    "healthSurveillance": "",
    "note": "放射性职业照射，年有效剂量限值20mSv"
  }
};


// Th — 钍

P6_LEGAL['Th'] = {
  "chinaHazChem": {
    "catalogEntry": "不列入危化品目录",
    "hazardClass": "放射性物质",
    "note": "适用核材料管制条例"
  },
  "reach": {
    "svhc": false,
    "authorization": false,
    "restriction": "",
    "registrationStatus": "",
    "note": "放射性物质"
  },
  "rohs": {
    "restricted": false,
    "maxConcentration": null,
    "scope": "",
    "note": ""
  },
  "transport": {
    "imdg": {
      "un": "UN2910",
      "class": "7",
      "pg": "-"
    },
    "iata": {
      "un": "UN2910",
      "class": "7",
      "pg": "-"
    },
    "adr": {
      "un": "UN2910",
      "class": "7",
      "pg": "-"
    },
    "note": "放射性物质，比活度分类"
  },
  "environmental": {
    "airEmission": {
      "standard": "GB 16297-1996",
      "limit": "参照GB 18871-2002",
      "note": ""
    },
    "waterDischarge": {
      "standard": "GB 8978-1996",
      "limit": "参照GB 18871-2002",
      "note": ""
    },
    "soil": {
      "standard": "GB 36600-2018",
      "limit": "参照GB 18871-2002",
      "note": ""
    },
    "note": "适用《电离辐射防护与辐射源安全基本标准》"
  },
  "importExport": {
    "dualUseControlled": true,
    "licenseRequired": true,
    "controlList": "核材料进出口管制",
    "note": "钍为核材料，进出口受严格管控"
  },
  "occupationalHealth": {
    "oelTwa": null,
    "oelStel": null,
    "gbzStandard": "GBZ 188-2014",
    "biologicalMonitoring": "",
    "healthSurveillance": "",
    "note": "放射性职业照射，年有效剂量限值20mSv"
  }
};


// Pa — 镤

P6_LEGAL['Pa'] = {
  "chinaHazChem": {
    "catalogEntry": "不列入危化品目录",
    "hazardClass": "放射性物质",
    "note": "适用《放射性同位素与射线装置安全和防护条例》"
  },
  "reach": {
    "svhc": false,
    "authorization": false,
    "restriction": "",
    "registrationStatus": "",
    "note": "放射性物质适用特殊规定"
  },
  "rohs": {
    "restricted": false,
    "maxConcentration": null,
    "scope": "",
    "note": ""
  },
  "transport": {
    "imdg": {
      "un": "UN2910",
      "class": "7",
      "pg": "-"
    },
    "iata": {
      "un": "UN2910",
      "class": "7",
      "pg": "-"
    },
    "adr": {
      "un": "UN2910",
      "class": "7",
      "pg": "-"
    },
    "note": "放射性物质，按比活度分类运输；锕系放射元素"
  },
  "environmental": {
    "airEmission": {
      "standard": "GB 16297-1996",
      "limit": "参照GB 18871-2002",
      "note": ""
    },
    "waterDischarge": {
      "standard": "GB 8978-1996",
      "limit": "参照GB 18871-2002",
      "note": ""
    },
    "soil": {
      "standard": "GB 36600-2018",
      "limit": "参照GB 18871-2002",
      "note": ""
    },
    "note": "适用《电离辐射防护与辐射源安全基本标准》(GB 18871-2002)"
  },
  "importExport": {
    "dualUseControlled": true,
    "licenseRequired": true,
    "controlList": "放射性物质进出口管制",
    "note": "需环保部门（生态环境部）审批"
  },
  "occupationalHealth": {
    "oelTwa": null,
    "oelStel": null,
    "gbzStandard": "GBZ 188-2014",
    "biologicalMonitoring": "",
    "healthSurveillance": "",
    "note": "放射性职业照射，年有效剂量限值20mSv"
  }
};


// U — 铀

P6_LEGAL['U'] = {
  "chinaHazChem": {
    "catalogEntry": "不列入危化品目录",
    "hazardClass": "放射性物质",
    "note": "适用核材料管制条例"
  },
  "reach": {
    "svhc": false,
    "authorization": false,
    "restriction": "",
    "registrationStatus": "",
    "note": "放射性物质"
  },
  "rohs": {
    "restricted": false,
    "maxConcentration": null,
    "scope": "",
    "note": ""
  },
  "transport": {
    "imdg": {
      "un": "UN2910",
      "class": "7",
      "pg": "-"
    },
    "iata": {
      "un": "UN2910",
      "class": "7",
      "pg": "-"
    },
    "adr": {
      "un": "UN2910",
      "class": "7",
      "pg": "-"
    },
    "note": "放射性物质，比活度分类；六氟化铀为UN2977"
  },
  "environmental": {
    "airEmission": {
      "standard": "GB 16297-1996",
      "limit": "参照GB 18871-2002",
      "note": ""
    },
    "waterDischarge": {
      "standard": "GB 8978-1996",
      "limit": "参照GB 18871-2002",
      "note": ""
    },
    "soil": {
      "standard": "GB 36600-2018",
      "limit": "参照GB 18871-2002",
      "note": ""
    },
    "note": "铀尾矿库辐射环境管理适用GB 14585"
  },
  "importExport": {
    "dualUseControlled": true,
    "licenseRequired": true,
    "controlList": "核材料进出口管制",
    "note": "铀为核材料，受国际原子能机构保障监督"
  },
  "occupationalHealth": {
    "oelTwa": null,
    "oelStel": null,
    "gbzStandard": "GBZ 188-2014",
    "biologicalMonitoring": "",
    "healthSurveillance": "",
    "note": "放射性及化学毒性（肾毒），年有效剂量限值20mSv"
  }
};


// Np — 镎

P6_LEGAL['Np'] = {
  "chinaHazChem": {
    "catalogEntry": "不列入危化品目录",
    "hazardClass": "放射性物质",
    "note": "适用《放射性同位素与射线装置安全和防护条例》"
  },
  "reach": {
    "svhc": false,
    "authorization": false,
    "restriction": "",
    "registrationStatus": "",
    "note": "放射性物质适用特殊规定"
  },
  "rohs": {
    "restricted": false,
    "maxConcentration": null,
    "scope": "",
    "note": ""
  },
  "transport": {
    "imdg": {
      "un": "UN2910",
      "class": "7",
      "pg": "-"
    },
    "iata": {
      "un": "UN2910",
      "class": "7",
      "pg": "-"
    },
    "adr": {
      "un": "UN2910",
      "class": "7",
      "pg": "-"
    },
    "note": "放射性物质，按比活度分类运输；锕系人造放射元素"
  },
  "environmental": {
    "airEmission": {
      "standard": "GB 16297-1996",
      "limit": "参照GB 18871-2002",
      "note": ""
    },
    "waterDischarge": {
      "standard": "GB 8978-1996",
      "limit": "参照GB 18871-2002",
      "note": ""
    },
    "soil": {
      "standard": "GB 36600-2018",
      "limit": "参照GB 18871-2002",
      "note": ""
    },
    "note": "适用《电离辐射防护与辐射源安全基本标准》(GB 18871-2002)"
  },
  "importExport": {
    "dualUseControlled": true,
    "licenseRequired": true,
    "controlList": "放射性物质进出口管制",
    "note": "需环保部门（生态环境部）审批"
  },
  "occupationalHealth": {
    "oelTwa": null,
    "oelStel": null,
    "gbzStandard": "GBZ 188-2014",
    "biologicalMonitoring": "",
    "healthSurveillance": "",
    "note": "放射性职业照射，年有效剂量限值20mSv"
  }
};


// Pu — 钚

P6_LEGAL['Pu'] = {
  "chinaHazChem": {
    "catalogEntry": "不列入危化品目录",
    "hazardClass": "放射性物质",
    "note": "适用核材料管制条例"
  },
  "reach": {
    "svhc": false,
    "authorization": false,
    "restriction": "",
    "registrationStatus": "",
    "note": "放射性物质"
  },
  "rohs": {
    "restricted": false,
    "maxConcentration": null,
    "scope": "",
    "note": ""
  },
  "transport": {
    "imdg": {
      "un": "UN2910",
      "class": "7",
      "pg": "-"
    },
    "iata": {
      "un": "UN2910",
      "class": "7",
      "pg": "-"
    },
    "adr": {
      "un": "UN2910",
      "class": "7",
      "pg": "-"
    },
    "note": "放射性物质，比活度分类"
  },
  "environmental": {
    "airEmission": {
      "standard": "GB 16297-1996",
      "limit": "参照GB 18871-2002",
      "note": ""
    },
    "waterDischarge": {
      "standard": "GB 8978-1996",
      "limit": "参照GB 18871-2002",
      "note": ""
    },
    "soil": {
      "standard": "GB 36600-2018",
      "limit": "参照GB 18871-2002",
      "note": ""
    },
    "note": "适用《电离辐射防护与辐射源安全基本标准》"
  },
  "importExport": {
    "dualUseControlled": true,
    "licenseRequired": true,
    "controlList": "核材料进出口管制",
    "note": "钚为核材料，极严格管控"
  },
  "occupationalHealth": {
    "oelTwa": null,
    "oelStel": null,
    "gbzStandard": "GBZ 188-2014",
    "biologicalMonitoring": "",
    "healthSurveillance": "",
    "note": "极毒α放射体，年有效剂量限值20mSv"
  }
};


// Am — 镅

P6_LEGAL['Am'] = {
  "chinaHazChem": {
    "catalogEntry": "不列入危化品目录",
    "hazardClass": "放射性物质",
    "note": "适用《放射性同位素与射线装置安全和防护条例》"
  },
  "reach": {
    "svhc": false,
    "authorization": false,
    "restriction": "",
    "registrationStatus": "",
    "note": "放射性物质适用特殊规定"
  },
  "rohs": {
    "restricted": false,
    "maxConcentration": null,
    "scope": "",
    "note": ""
  },
  "transport": {
    "imdg": {
      "un": "UN2910",
      "class": "7",
      "pg": "-"
    },
    "iata": {
      "un": "UN2910",
      "class": "7",
      "pg": "-"
    },
    "adr": {
      "un": "UN2910",
      "class": "7",
      "pg": "-"
    },
    "note": "放射性物质，按比活度分类运输；锕系人造放射元素，用于烟雾报警器"
  },
  "environmental": {
    "airEmission": {
      "standard": "GB 16297-1996",
      "limit": "参照GB 18871-2002",
      "note": ""
    },
    "waterDischarge": {
      "standard": "GB 8978-1996",
      "limit": "参照GB 18871-2002",
      "note": ""
    },
    "soil": {
      "standard": "GB 36600-2018",
      "limit": "参照GB 18871-2002",
      "note": ""
    },
    "note": "适用《电离辐射防护与辐射源安全基本标准》(GB 18871-2002)"
  },
  "importExport": {
    "dualUseControlled": true,
    "licenseRequired": true,
    "controlList": "放射性物质进出口管制",
    "note": "需环保部门（生态环境部）审批"
  },
  "occupationalHealth": {
    "oelTwa": null,
    "oelStel": null,
    "gbzStandard": "GBZ 188-2014",
    "biologicalMonitoring": "",
    "healthSurveillance": "",
    "note": "放射性职业照射，年有效剂量限值20mSv"
  }
};


// Cm — 锔

P6_LEGAL['Cm'] = {
  "chinaHazChem": {
    "catalogEntry": "不列入危化品目录",
    "hazardClass": "放射性物质",
    "note": "适用《放射性同位素与射线装置安全和防护条例》"
  },
  "reach": {
    "svhc": false,
    "authorization": false,
    "restriction": "",
    "registrationStatus": "",
    "note": "放射性物质适用特殊规定"
  },
  "rohs": {
    "restricted": false,
    "maxConcentration": null,
    "scope": "",
    "note": ""
  },
  "transport": {
    "imdg": {
      "un": "UN2910",
      "class": "7",
      "pg": "-"
    },
    "iata": {
      "un": "UN2910",
      "class": "7",
      "pg": "-"
    },
    "adr": {
      "un": "UN2910",
      "class": "7",
      "pg": "-"
    },
    "note": "放射性物质，按比活度分类运输；锕系人造放射元素"
  },
  "environmental": {
    "airEmission": {
      "standard": "GB 16297-1996",
      "limit": "参照GB 18871-2002",
      "note": ""
    },
    "waterDischarge": {
      "standard": "GB 8978-1996",
      "limit": "参照GB 18871-2002",
      "note": ""
    },
    "soil": {
      "standard": "GB 36600-2018",
      "limit": "参照GB 18871-2002",
      "note": ""
    },
    "note": "适用《电离辐射防护与辐射源安全基本标准》(GB 18871-2002)"
  },
  "importExport": {
    "dualUseControlled": true,
    "licenseRequired": true,
    "controlList": "放射性物质进出口管制",
    "note": "需环保部门（生态环境部）审批"
  },
  "occupationalHealth": {
    "oelTwa": null,
    "oelStel": null,
    "gbzStandard": "GBZ 188-2014",
    "biologicalMonitoring": "",
    "healthSurveillance": "",
    "note": "放射性职业照射，年有效剂量限值20mSv"
  }
};


// Bk — 锫

P6_LEGAL['Bk'] = {
  "chinaHazChem": {
    "catalogEntry": "不列入危化品目录",
    "hazardClass": "放射性物质",
    "note": "适用《放射性同位素与射线装置安全和防护条例》"
  },
  "reach": {
    "svhc": false,
    "authorization": false,
    "restriction": "",
    "registrationStatus": "",
    "note": "放射性物质适用特殊规定"
  },
  "rohs": {
    "restricted": false,
    "maxConcentration": null,
    "scope": "",
    "note": ""
  },
  "transport": {
    "imdg": {
      "un": "UN2910",
      "class": "7",
      "pg": "-"
    },
    "iata": {
      "un": "UN2910",
      "class": "7",
      "pg": "-"
    },
    "adr": {
      "un": "UN2910",
      "class": "7",
      "pg": "-"
    },
    "note": "放射性物质，按比活度分类运输；锕系人造放射元素"
  },
  "environmental": {
    "airEmission": {
      "standard": "GB 16297-1996",
      "limit": "参照GB 18871-2002",
      "note": ""
    },
    "waterDischarge": {
      "standard": "GB 8978-1996",
      "limit": "参照GB 18871-2002",
      "note": ""
    },
    "soil": {
      "standard": "GB 36600-2018",
      "limit": "参照GB 18871-2002",
      "note": ""
    },
    "note": "适用《电离辐射防护与辐射源安全基本标准》(GB 18871-2002)"
  },
  "importExport": {
    "dualUseControlled": true,
    "licenseRequired": true,
    "controlList": "放射性物质进出口管制",
    "note": "需环保部门（生态环境部）审批"
  },
  "occupationalHealth": {
    "oelTwa": null,
    "oelStel": null,
    "gbzStandard": "GBZ 188-2014",
    "biologicalMonitoring": "",
    "healthSurveillance": "",
    "note": "放射性职业照射，年有效剂量限值20mSv"
  }
};


// Cf — 锎

P6_LEGAL['Cf'] = {
  "chinaHazChem": {
    "catalogEntry": "不列入危化品目录",
    "hazardClass": "放射性物质",
    "note": "适用《放射性同位素与射线装置安全和防护条例》"
  },
  "reach": {
    "svhc": false,
    "authorization": false,
    "restriction": "",
    "registrationStatus": "",
    "note": "放射性物质适用特殊规定"
  },
  "rohs": {
    "restricted": false,
    "maxConcentration": null,
    "scope": "",
    "note": ""
  },
  "transport": {
    "imdg": {
      "un": "UN2910",
      "class": "7",
      "pg": "-"
    },
    "iata": {
      "un": "UN2910",
      "class": "7",
      "pg": "-"
    },
    "adr": {
      "un": "UN2910",
      "class": "7",
      "pg": "-"
    },
    "note": "放射性物质，按比活度分类运输；锕系人造放射元素，用于中子源"
  },
  "environmental": {
    "airEmission": {
      "standard": "GB 16297-1996",
      "limit": "参照GB 18871-2002",
      "note": ""
    },
    "waterDischarge": {
      "standard": "GB 8978-1996",
      "limit": "参照GB 18871-2002",
      "note": ""
    },
    "soil": {
      "standard": "GB 36600-2018",
      "limit": "参照GB 18871-2002",
      "note": ""
    },
    "note": "适用《电离辐射防护与辐射源安全基本标准》(GB 18871-2002)"
  },
  "importExport": {
    "dualUseControlled": true,
    "licenseRequired": true,
    "controlList": "放射性物质进出口管制",
    "note": "需环保部门（生态环境部）审批"
  },
  "occupationalHealth": {
    "oelTwa": null,
    "oelStel": null,
    "gbzStandard": "GBZ 188-2014",
    "biologicalMonitoring": "",
    "healthSurveillance": "",
    "note": "放射性职业照射，年有效剂量限值20mSv"
  }
};


// Es — 锿

P6_LEGAL['Es'] = {
  "chinaHazChem": {
    "catalogEntry": "不列入危化品目录",
    "hazardClass": "放射性物质",
    "note": "适用《放射性同位素与射线装置安全和防护条例》"
  },
  "reach": {
    "svhc": false,
    "authorization": false,
    "restriction": "",
    "registrationStatus": "",
    "note": "放射性物质适用特殊规定"
  },
  "rohs": {
    "restricted": false,
    "maxConcentration": null,
    "scope": "",
    "note": ""
  },
  "transport": {
    "imdg": {
      "un": "UN2910",
      "class": "7",
      "pg": "-"
    },
    "iata": {
      "un": "UN2910",
      "class": "7",
      "pg": "-"
    },
    "adr": {
      "un": "UN2910",
      "class": "7",
      "pg": "-"
    },
    "note": "放射性物质，按比活度分类运输；锕系人造放射元素，半衰期极短"
  },
  "environmental": {
    "airEmission": {
      "standard": "GB 16297-1996",
      "limit": "参照GB 18871-2002",
      "note": ""
    },
    "waterDischarge": {
      "standard": "GB 8978-1996",
      "limit": "参照GB 18871-2002",
      "note": ""
    },
    "soil": {
      "standard": "GB 36600-2018",
      "limit": "参照GB 18871-2002",
      "note": ""
    },
    "note": "适用《电离辐射防护与辐射源安全基本标准》(GB 18871-2002)"
  },
  "importExport": {
    "dualUseControlled": true,
    "licenseRequired": true,
    "controlList": "放射性物质进出口管制",
    "note": "需环保部门（生态环境部）审批"
  },
  "occupationalHealth": {
    "oelTwa": null,
    "oelStel": null,
    "gbzStandard": "GBZ 188-2014",
    "biologicalMonitoring": "",
    "healthSurveillance": "",
    "note": "放射性职业照射，年有效剂量限值20mSv"
  }
};


// Fm — 镄

P6_LEGAL['Fm'] = {
  "chinaHazChem": {
    "catalogEntry": "不列入危化品目录",
    "hazardClass": "放射性物质",
    "note": "适用《放射性同位素与射线装置安全和防护条例》"
  },
  "reach": {
    "svhc": false,
    "authorization": false,
    "restriction": "",
    "registrationStatus": "",
    "note": "放射性物质适用特殊规定"
  },
  "rohs": {
    "restricted": false,
    "maxConcentration": null,
    "scope": "",
    "note": ""
  },
  "transport": {
    "imdg": {
      "un": "UN2910",
      "class": "7",
      "pg": "-"
    },
    "iata": {
      "un": "UN2910",
      "class": "7",
      "pg": "-"
    },
    "adr": {
      "un": "UN2910",
      "class": "7",
      "pg": "-"
    },
    "note": "放射性物质，按比活度分类运输；锕系人造放射元素，半衰期极短"
  },
  "environmental": {
    "airEmission": {
      "standard": "GB 16297-1996",
      "limit": "参照GB 18871-2002",
      "note": ""
    },
    "waterDischarge": {
      "standard": "GB 8978-1996",
      "limit": "参照GB 18871-2002",
      "note": ""
    },
    "soil": {
      "standard": "GB 36600-2018",
      "limit": "参照GB 18871-2002",
      "note": ""
    },
    "note": "适用《电离辐射防护与辐射源安全基本标准》(GB 18871-2002)"
  },
  "importExport": {
    "dualUseControlled": true,
    "licenseRequired": true,
    "controlList": "放射性物质进出口管制",
    "note": "需环保部门（生态环境部）审批"
  },
  "occupationalHealth": {
    "oelTwa": null,
    "oelStel": null,
    "gbzStandard": "GBZ 188-2014",
    "biologicalMonitoring": "",
    "healthSurveillance": "",
    "note": "放射性职业照射，年有效剂量限值20mSv"
  }
};


// Md — 钔

P6_LEGAL['Md'] = {
  "chinaHazChem": {
    "catalogEntry": "不列入危化品目录",
    "hazardClass": "放射性物质",
    "note": "适用《放射性同位素与射线装置安全和防护条例》"
  },
  "reach": {
    "svhc": false,
    "authorization": false,
    "restriction": "",
    "registrationStatus": "",
    "note": "放射性物质适用特殊规定"
  },
  "rohs": {
    "restricted": false,
    "maxConcentration": null,
    "scope": "",
    "note": ""
  },
  "transport": {
    "imdg": {
      "un": "UN2910",
      "class": "7",
      "pg": "-"
    },
    "iata": {
      "un": "UN2910",
      "class": "7",
      "pg": "-"
    },
    "adr": {
      "un": "UN2910",
      "class": "7",
      "pg": "-"
    },
    "note": "放射性物质，按比活度分类运输；锕系人造放射元素，半衰期极短"
  },
  "environmental": {
    "airEmission": {
      "standard": "GB 16297-1996",
      "limit": "参照GB 18871-2002",
      "note": ""
    },
    "waterDischarge": {
      "standard": "GB 8978-1996",
      "limit": "参照GB 18871-2002",
      "note": ""
    },
    "soil": {
      "standard": "GB 36600-2018",
      "limit": "参照GB 18871-2002",
      "note": ""
    },
    "note": "适用《电离辐射防护与辐射源安全基本标准》(GB 18871-2002)"
  },
  "importExport": {
    "dualUseControlled": true,
    "licenseRequired": true,
    "controlList": "放射性物质进出口管制",
    "note": "需环保部门（生态环境部）审批"
  },
  "occupationalHealth": {
    "oelTwa": null,
    "oelStel": null,
    "gbzStandard": "GBZ 188-2014",
    "biologicalMonitoring": "",
    "healthSurveillance": "",
    "note": "放射性职业照射，年有效剂量限值20mSv"
  }
};


// No — 锘

P6_LEGAL['No'] = {
  "chinaHazChem": {
    "catalogEntry": "不列入危化品目录",
    "hazardClass": "放射性物质",
    "note": "适用《放射性同位素与射线装置安全和防护条例》"
  },
  "reach": {
    "svhc": false,
    "authorization": false,
    "restriction": "",
    "registrationStatus": "",
    "note": "放射性物质适用特殊规定"
  },
  "rohs": {
    "restricted": false,
    "maxConcentration": null,
    "scope": "",
    "note": ""
  },
  "transport": {
    "imdg": {
      "un": "UN2910",
      "class": "7",
      "pg": "-"
    },
    "iata": {
      "un": "UN2910",
      "class": "7",
      "pg": "-"
    },
    "adr": {
      "un": "UN2910",
      "class": "7",
      "pg": "-"
    },
    "note": "放射性物质，按比活度分类运输；锕系人造放射元素，半衰期极短"
  },
  "environmental": {
    "airEmission": {
      "standard": "GB 16297-1996",
      "limit": "参照GB 18871-2002",
      "note": ""
    },
    "waterDischarge": {
      "standard": "GB 8978-1996",
      "limit": "参照GB 18871-2002",
      "note": ""
    },
    "soil": {
      "standard": "GB 36600-2018",
      "limit": "参照GB 18871-2002",
      "note": ""
    },
    "note": "适用《电离辐射防护与辐射源安全基本标准》(GB 18871-2002)"
  },
  "importExport": {
    "dualUseControlled": true,
    "licenseRequired": true,
    "controlList": "放射性物质进出口管制",
    "note": "需环保部门（生态环境部）审批"
  },
  "occupationalHealth": {
    "oelTwa": null,
    "oelStel": null,
    "gbzStandard": "GBZ 188-2014",
    "biologicalMonitoring": "",
    "healthSurveillance": "",
    "note": "放射性职业照射，年有效剂量限值20mSv"
  }
};


// Lr — 铹

P6_LEGAL['Lr'] = {
  "chinaHazChem": {
    "catalogEntry": "不列入危化品目录",
    "hazardClass": "放射性物质",
    "note": "适用《放射性同位素与射线装置安全和防护条例》"
  },
  "reach": {
    "svhc": false,
    "authorization": false,
    "restriction": "",
    "registrationStatus": "",
    "note": "放射性物质适用特殊规定"
  },
  "rohs": {
    "restricted": false,
    "maxConcentration": null,
    "scope": "",
    "note": ""
  },
  "transport": {
    "imdg": {
      "un": "UN2910",
      "class": "7",
      "pg": "-"
    },
    "iata": {
      "un": "UN2910",
      "class": "7",
      "pg": "-"
    },
    "adr": {
      "un": "UN2910",
      "class": "7",
      "pg": "-"
    },
    "note": "放射性物质，按比活度分类运输；锕系人造放射元素，半衰期极短"
  },
  "environmental": {
    "airEmission": {
      "standard": "GB 16297-1996",
      "limit": "参照GB 18871-2002",
      "note": ""
    },
    "waterDischarge": {
      "standard": "GB 8978-1996",
      "limit": "参照GB 18871-2002",
      "note": ""
    },
    "soil": {
      "standard": "GB 36600-2018",
      "limit": "参照GB 18871-2002",
      "note": ""
    },
    "note": "适用《电离辐射防护与辐射源安全基本标准》(GB 18871-2002)"
  },
  "importExport": {
    "dualUseControlled": true,
    "licenseRequired": true,
    "controlList": "放射性物质进出口管制",
    "note": "需环保部门（生态环境部）审批"
  },
  "occupationalHealth": {
    "oelTwa": null,
    "oelStel": null,
    "gbzStandard": "GBZ 188-2014",
    "biologicalMonitoring": "",
    "healthSurveillance": "",
    "note": "放射性职业照射，年有效剂量限值20mSv"
  }
};


// Rf — 鑪

P6_LEGAL['Rf'] = {
  "chinaHazChem": {
    "catalogEntry": "不列入危化品目录",
    "hazardClass": "放射性物质（人造元素）",
    "note": "半衰期极短，无商业流通"
  },
  "reach": {
    "svhc": false,
    "authorization": false,
    "restriction": "",
    "registrationStatus": "",
    "note": "人造元素，无商业注册"
  },
  "rohs": {
    "restricted": false,
    "maxConcentration": null,
    "scope": "",
    "note": ""
  },
  "transport": {
    "imdg": {
      "un": null,
      "class": null,
      "pg": "-"
    },
    "iata": {
      "un": null,
      "class": null,
      "pg": "-"
    },
    "adr": {
      "un": null,
      "class": null,
      "pg": "-"
    },
    "note": "半衰期极短，无实际运输需求"
  },
  "environmental": {
    "airEmission": {
      "standard": "",
      "limit": "",
      "note": ""
    },
    "waterDischarge": {
      "standard": "",
      "limit": "",
      "note": ""
    },
    "soil": {
      "standard": "",
      "limit": "",
      "note": ""
    },
    "note": "不适用——无环境释放"
  },
  "importExport": {
    "dualUseControlled": false,
    "licenseRequired": false,
    "controlList": "",
    "note": "不适用——无商业流通"
  },
  "occupationalHealth": {
    "oelTwa": null,
    "oelStel": null,
    "gbzStandard": "GBZ 2.1-2019",
    "biologicalMonitoring": "",
    "healthSurveillance": "",
    "note": "放射性防护适用，实际接触极少"
  }
};


// Db — 𫭢

P6_LEGAL['Db'] = {
  "chinaHazChem": {
    "catalogEntry": "不列入危化品目录",
    "hazardClass": "放射性物质（人造元素）",
    "note": "半衰期极短，无商业流通"
  },
  "reach": {
    "svhc": false,
    "authorization": false,
    "restriction": "",
    "registrationStatus": "",
    "note": "人造元素，无商业注册"
  },
  "rohs": {
    "restricted": false,
    "maxConcentration": null,
    "scope": "",
    "note": ""
  },
  "transport": {
    "imdg": {
      "un": null,
      "class": null,
      "pg": "-"
    },
    "iata": {
      "un": null,
      "class": null,
      "pg": "-"
    },
    "adr": {
      "un": null,
      "class": null,
      "pg": "-"
    },
    "note": "半衰期极短，无实际运输需求"
  },
  "environmental": {
    "airEmission": {
      "standard": "",
      "limit": "",
      "note": ""
    },
    "waterDischarge": {
      "standard": "",
      "limit": "",
      "note": ""
    },
    "soil": {
      "standard": "",
      "limit": "",
      "note": ""
    },
    "note": "不适用——无环境释放"
  },
  "importExport": {
    "dualUseControlled": false,
    "licenseRequired": false,
    "controlList": "",
    "note": "不适用——无商业流通"
  },
  "occupationalHealth": {
    "oelTwa": null,
    "oelStel": null,
    "gbzStandard": "GBZ 2.1-2019",
    "biologicalMonitoring": "",
    "healthSurveillance": "",
    "note": "放射性防护适用，实际接触极少"
  }
};


// Sg — 𬭳

P6_LEGAL['Sg'] = {
  "chinaHazChem": {
    "catalogEntry": "不列入危化品目录",
    "hazardClass": "放射性物质（人造元素）",
    "note": "半衰期极短，无商业流通"
  },
  "reach": {
    "svhc": false,
    "authorization": false,
    "restriction": "",
    "registrationStatus": "",
    "note": "人造元素，无商业注册"
  },
  "rohs": {
    "restricted": false,
    "maxConcentration": null,
    "scope": "",
    "note": ""
  },
  "transport": {
    "imdg": {
      "un": null,
      "class": null,
      "pg": "-"
    },
    "iata": {
      "un": null,
      "class": null,
      "pg": "-"
    },
    "adr": {
      "un": null,
      "class": null,
      "pg": "-"
    },
    "note": "半衰期极短，无实际运输需求"
  },
  "environmental": {
    "airEmission": {
      "standard": "",
      "limit": "",
      "note": ""
    },
    "waterDischarge": {
      "standard": "",
      "limit": "",
      "note": ""
    },
    "soil": {
      "standard": "",
      "limit": "",
      "note": ""
    },
    "note": "不适用——无环境释放"
  },
  "importExport": {
    "dualUseControlled": false,
    "licenseRequired": false,
    "controlList": "",
    "note": "不适用——无商业流通"
  },
  "occupationalHealth": {
    "oelTwa": null,
    "oelStel": null,
    "gbzStandard": "GBZ 2.1-2019",
    "biologicalMonitoring": "",
    "healthSurveillance": "",
    "note": "放射性防护适用，实际接触极少"
  }
};


// Bh — 𬭛

P6_LEGAL['Bh'] = {
  "chinaHazChem": {
    "catalogEntry": "不列入危化品目录",
    "hazardClass": "放射性物质（人造元素）",
    "note": "半衰期极短，无商业流通"
  },
  "reach": {
    "svhc": false,
    "authorization": false,
    "restriction": "",
    "registrationStatus": "",
    "note": "人造元素，无商业注册"
  },
  "rohs": {
    "restricted": false,
    "maxConcentration": null,
    "scope": "",
    "note": ""
  },
  "transport": {
    "imdg": {
      "un": null,
      "class": null,
      "pg": "-"
    },
    "iata": {
      "un": null,
      "class": null,
      "pg": "-"
    },
    "adr": {
      "un": null,
      "class": null,
      "pg": "-"
    },
    "note": "半衰期极短，无实际运输需求"
  },
  "environmental": {
    "airEmission": {
      "standard": "",
      "limit": "",
      "note": ""
    },
    "waterDischarge": {
      "standard": "",
      "limit": "",
      "note": ""
    },
    "soil": {
      "standard": "",
      "limit": "",
      "note": ""
    },
    "note": "不适用——无环境释放"
  },
  "importExport": {
    "dualUseControlled": false,
    "licenseRequired": false,
    "controlList": "",
    "note": "不适用——无商业流通"
  },
  "occupationalHealth": {
    "oelTwa": null,
    "oelStel": null,
    "gbzStandard": "GBZ 2.1-2019",
    "biologicalMonitoring": "",
    "healthSurveillance": "",
    "note": "放射性防护适用，实际接触极少"
  }
};


// Hs — 𬭶

P6_LEGAL['Hs'] = {
  "chinaHazChem": {
    "catalogEntry": "不列入危化品目录",
    "hazardClass": "放射性物质（人造元素）",
    "note": "半衰期极短，无商业流通"
  },
  "reach": {
    "svhc": false,
    "authorization": false,
    "restriction": "",
    "registrationStatus": "",
    "note": "人造元素，无商业注册"
  },
  "rohs": {
    "restricted": false,
    "maxConcentration": null,
    "scope": "",
    "note": ""
  },
  "transport": {
    "imdg": {
      "un": null,
      "class": null,
      "pg": "-"
    },
    "iata": {
      "un": null,
      "class": null,
      "pg": "-"
    },
    "adr": {
      "un": null,
      "class": null,
      "pg": "-"
    },
    "note": "半衰期极短，无实际运输需求"
  },
  "environmental": {
    "airEmission": {
      "standard": "",
      "limit": "",
      "note": ""
    },
    "waterDischarge": {
      "standard": "",
      "limit": "",
      "note": ""
    },
    "soil": {
      "standard": "",
      "limit": "",
      "note": ""
    },
    "note": "不适用——无环境释放"
  },
  "importExport": {
    "dualUseControlled": false,
    "licenseRequired": false,
    "controlList": "",
    "note": "不适用——无商业流通"
  },
  "occupationalHealth": {
    "oelTwa": null,
    "oelStel": null,
    "gbzStandard": "GBZ 2.1-2019",
    "biologicalMonitoring": "",
    "healthSurveillance": "",
    "note": "放射性防护适用，实际接触极少"
  }
};


// Mt — 鿏

P6_LEGAL['Mt'] = {
  "chinaHazChem": {
    "catalogEntry": "不列入危化品目录",
    "hazardClass": "放射性物质（人造元素）",
    "note": "半衰期极短，无商业流通"
  },
  "reach": {
    "svhc": false,
    "authorization": false,
    "restriction": "",
    "registrationStatus": "",
    "note": "人造元素，无商业注册"
  },
  "rohs": {
    "restricted": false,
    "maxConcentration": null,
    "scope": "",
    "note": ""
  },
  "transport": {
    "imdg": {
      "un": null,
      "class": null,
      "pg": "-"
    },
    "iata": {
      "un": null,
      "class": null,
      "pg": "-"
    },
    "adr": {
      "un": null,
      "class": null,
      "pg": "-"
    },
    "note": "半衰期极短，无实际运输需求"
  },
  "environmental": {
    "airEmission": {
      "standard": "",
      "limit": "",
      "note": ""
    },
    "waterDischarge": {
      "standard": "",
      "limit": "",
      "note": ""
    },
    "soil": {
      "standard": "",
      "limit": "",
      "note": ""
    },
    "note": "不适用——无环境释放"
  },
  "importExport": {
    "dualUseControlled": false,
    "licenseRequired": false,
    "controlList": "",
    "note": "不适用——无商业流通"
  },
  "occupationalHealth": {
    "oelTwa": null,
    "oelStel": null,
    "gbzStandard": "GBZ 2.1-2019",
    "biologicalMonitoring": "",
    "healthSurveillance": "",
    "note": "放射性防护适用，实际接触极少"
  }
};


// Ds — 𫟼

P6_LEGAL['Ds'] = {
  "chinaHazChem": {
    "catalogEntry": "不列入危化品目录",
    "hazardClass": "放射性物质（人造元素）",
    "note": "半衰期极短，无商业流通"
  },
  "reach": {
    "svhc": false,
    "authorization": false,
    "restriction": "",
    "registrationStatus": "",
    "note": "人造元素，无商业注册"
  },
  "rohs": {
    "restricted": false,
    "maxConcentration": null,
    "scope": "",
    "note": ""
  },
  "transport": {
    "imdg": {
      "un": null,
      "class": null,
      "pg": "-"
    },
    "iata": {
      "un": null,
      "class": null,
      "pg": "-"
    },
    "adr": {
      "un": null,
      "class": null,
      "pg": "-"
    },
    "note": "半衰期极短，无实际运输需求"
  },
  "environmental": {
    "airEmission": {
      "standard": "",
      "limit": "",
      "note": ""
    },
    "waterDischarge": {
      "standard": "",
      "limit": "",
      "note": ""
    },
    "soil": {
      "standard": "",
      "limit": "",
      "note": ""
    },
    "note": "不适用——无环境释放"
  },
  "importExport": {
    "dualUseControlled": false,
    "licenseRequired": false,
    "controlList": "",
    "note": "不适用——无商业流通"
  },
  "occupationalHealth": {
    "oelTwa": null,
    "oelStel": null,
    "gbzStandard": "GBZ 2.1-2019",
    "biologicalMonitoring": "",
    "healthSurveillance": "",
    "note": "放射性防护适用，实际接触极少"
  }
};


// Rg — 𬬭

P6_LEGAL['Rg'] = {
  "chinaHazChem": {
    "catalogEntry": "不列入危化品目录",
    "hazardClass": "放射性物质（人造元素）",
    "note": "半衰期极短，无商业流通"
  },
  "reach": {
    "svhc": false,
    "authorization": false,
    "restriction": "",
    "registrationStatus": "",
    "note": "人造元素，无商业注册"
  },
  "rohs": {
    "restricted": false,
    "maxConcentration": null,
    "scope": "",
    "note": ""
  },
  "transport": {
    "imdg": {
      "un": null,
      "class": null,
      "pg": "-"
    },
    "iata": {
      "un": null,
      "class": null,
      "pg": "-"
    },
    "adr": {
      "un": null,
      "class": null,
      "pg": "-"
    },
    "note": "半衰期极短，无实际运输需求"
  },
  "environmental": {
    "airEmission": {
      "standard": "",
      "limit": "",
      "note": ""
    },
    "waterDischarge": {
      "standard": "",
      "limit": "",
      "note": ""
    },
    "soil": {
      "standard": "",
      "limit": "",
      "note": ""
    },
    "note": "不适用——无环境释放"
  },
  "importExport": {
    "dualUseControlled": false,
    "licenseRequired": false,
    "controlList": "",
    "note": "不适用——无商业流通"
  },
  "occupationalHealth": {
    "oelTwa": null,
    "oelStel": null,
    "gbzStandard": "GBZ 2.1-2019",
    "biologicalMonitoring": "",
    "healthSurveillance": "",
    "note": "放射性防护适用，实际接触极少"
  }
};


// Cn — 鎶

P6_LEGAL['Cn'] = {
  "chinaHazChem": {
    "catalogEntry": "不列入危化品目录",
    "hazardClass": "放射性物质（人造元素）",
    "note": "半衰期极短，无商业流通"
  },
  "reach": {
    "svhc": false,
    "authorization": false,
    "restriction": "",
    "registrationStatus": "",
    "note": "人造元素，无商业注册"
  },
  "rohs": {
    "restricted": false,
    "maxConcentration": null,
    "scope": "",
    "note": ""
  },
  "transport": {
    "imdg": {
      "un": null,
      "class": null,
      "pg": "-"
    },
    "iata": {
      "un": null,
      "class": null,
      "pg": "-"
    },
    "adr": {
      "un": null,
      "class": null,
      "pg": "-"
    },
    "note": "半衰期极短，无实际运输需求"
  },
  "environmental": {
    "airEmission": {
      "standard": "",
      "limit": "",
      "note": ""
    },
    "waterDischarge": {
      "standard": "",
      "limit": "",
      "note": ""
    },
    "soil": {
      "standard": "",
      "limit": "",
      "note": ""
    },
    "note": "不适用——无环境释放"
  },
  "importExport": {
    "dualUseControlled": false,
    "licenseRequired": false,
    "controlList": "",
    "note": "不适用——无商业流通"
  },
  "occupationalHealth": {
    "oelTwa": null,
    "oelStel": null,
    "gbzStandard": "GBZ 2.1-2019",
    "biologicalMonitoring": "",
    "healthSurveillance": "",
    "note": "放射性防护适用，实际接触极少"
  }
};


// Nh — 鉨

P6_LEGAL['Nh'] = {
  "chinaHazChem": {
    "catalogEntry": "不列入危化品目录",
    "hazardClass": "放射性物质（人造元素）",
    "note": "半衰期极短，无商业流通"
  },
  "reach": {
    "svhc": false,
    "authorization": false,
    "restriction": "",
    "registrationStatus": "",
    "note": "人造元素，无商业注册"
  },
  "rohs": {
    "restricted": false,
    "maxConcentration": null,
    "scope": "",
    "note": ""
  },
  "transport": {
    "imdg": {
      "un": null,
      "class": null,
      "pg": "-"
    },
    "iata": {
      "un": null,
      "class": null,
      "pg": "-"
    },
    "adr": {
      "un": null,
      "class": null,
      "pg": "-"
    },
    "note": "半衰期极短，无实际运输需求"
  },
  "environmental": {
    "airEmission": {
      "standard": "",
      "limit": "",
      "note": ""
    },
    "waterDischarge": {
      "standard": "",
      "limit": "",
      "note": ""
    },
    "soil": {
      "standard": "",
      "limit": "",
      "note": ""
    },
    "note": "不适用——无环境释放"
  },
  "importExport": {
    "dualUseControlled": false,
    "licenseRequired": false,
    "controlList": "",
    "note": "不适用——无商业流通"
  },
  "occupationalHealth": {
    "oelTwa": null,
    "oelStel": null,
    "gbzStandard": "GBZ 2.1-2019",
    "biologicalMonitoring": "",
    "healthSurveillance": "",
    "note": "放射性防护适用，实际接触极少"
  }
};


// Fl — 𫓧

P6_LEGAL['Fl'] = {
  "chinaHazChem": {
    "catalogEntry": "不列入危化品目录",
    "hazardClass": "放射性物质（人造元素）",
    "note": "半衰期极短，无商业流通"
  },
  "reach": {
    "svhc": false,
    "authorization": false,
    "restriction": "",
    "registrationStatus": "",
    "note": "人造元素，无商业注册"
  },
  "rohs": {
    "restricted": false,
    "maxConcentration": null,
    "scope": "",
    "note": ""
  },
  "transport": {
    "imdg": {
      "un": null,
      "class": null,
      "pg": "-"
    },
    "iata": {
      "un": null,
      "class": null,
      "pg": "-"
    },
    "adr": {
      "un": null,
      "class": null,
      "pg": "-"
    },
    "note": "半衰期极短，无实际运输需求"
  },
  "environmental": {
    "airEmission": {
      "standard": "",
      "limit": "",
      "note": ""
    },
    "waterDischarge": {
      "standard": "",
      "limit": "",
      "note": ""
    },
    "soil": {
      "standard": "",
      "limit": "",
      "note": ""
    },
    "note": "不适用——无环境释放"
  },
  "importExport": {
    "dualUseControlled": false,
    "licenseRequired": false,
    "controlList": "",
    "note": "不适用——无商业流通"
  },
  "occupationalHealth": {
    "oelTwa": null,
    "oelStel": null,
    "gbzStandard": "GBZ 2.1-2019",
    "biologicalMonitoring": "",
    "healthSurveillance": "",
    "note": "放射性防护适用，实际接触极少"
  }
};


// Mc — 镆

P6_LEGAL['Mc'] = {
  "chinaHazChem": {
    "catalogEntry": "不列入危化品目录",
    "hazardClass": "放射性物质（人造元素）",
    "note": "半衰期极短，无商业流通"
  },
  "reach": {
    "svhc": false,
    "authorization": false,
    "restriction": "",
    "registrationStatus": "",
    "note": "人造元素，无商业注册"
  },
  "rohs": {
    "restricted": false,
    "maxConcentration": null,
    "scope": "",
    "note": ""
  },
  "transport": {
    "imdg": {
      "un": null,
      "class": null,
      "pg": "-"
    },
    "iata": {
      "un": null,
      "class": null,
      "pg": "-"
    },
    "adr": {
      "un": null,
      "class": null,
      "pg": "-"
    },
    "note": "半衰期极短，无实际运输需求"
  },
  "environmental": {
    "airEmission": {
      "standard": "",
      "limit": "",
      "note": ""
    },
    "waterDischarge": {
      "standard": "",
      "limit": "",
      "note": ""
    },
    "soil": {
      "standard": "",
      "limit": "",
      "note": ""
    },
    "note": "不适用——无环境释放"
  },
  "importExport": {
    "dualUseControlled": false,
    "licenseRequired": false,
    "controlList": "",
    "note": "不适用——无商业流通"
  },
  "occupationalHealth": {
    "oelTwa": null,
    "oelStel": null,
    "gbzStandard": "GBZ 2.1-2019",
    "biologicalMonitoring": "",
    "healthSurveillance": "",
    "note": "放射性防护适用，实际接触极少"
  }
};


// Lv — 𫟷

P6_LEGAL['Lv'] = {
  "chinaHazChem": {
    "catalogEntry": "不列入危化品目录",
    "hazardClass": "放射性物质（人造元素）",
    "note": "半衰期极短，无商业流通"
  },
  "reach": {
    "svhc": false,
    "authorization": false,
    "restriction": "",
    "registrationStatus": "",
    "note": "人造元素，无商业注册"
  },
  "rohs": {
    "restricted": false,
    "maxConcentration": null,
    "scope": "",
    "note": ""
  },
  "transport": {
    "imdg": {
      "un": null,
      "class": null,
      "pg": "-"
    },
    "iata": {
      "un": null,
      "class": null,
      "pg": "-"
    },
    "adr": {
      "un": null,
      "class": null,
      "pg": "-"
    },
    "note": "半衰期极短，无实际运输需求"
  },
  "environmental": {
    "airEmission": {
      "standard": "",
      "limit": "",
      "note": ""
    },
    "waterDischarge": {
      "standard": "",
      "limit": "",
      "note": ""
    },
    "soil": {
      "standard": "",
      "limit": "",
      "note": ""
    },
    "note": "不适用——无环境释放"
  },
  "importExport": {
    "dualUseControlled": false,
    "licenseRequired": false,
    "controlList": "",
    "note": "不适用——无商业流通"
  },
  "occupationalHealth": {
    "oelTwa": null,
    "oelStel": null,
    "gbzStandard": "GBZ 2.1-2019",
    "biologicalMonitoring": "",
    "healthSurveillance": "",
    "note": "放射性防护适用，实际接触极少"
  }
};


// Ts — 鿬

P6_LEGAL['Ts'] = {
  "chinaHazChem": {
    "catalogEntry": "不列入危化品目录",
    "hazardClass": "放射性物质（人造元素）",
    "note": "半衰期极短，无商业流通"
  },
  "reach": {
    "svhc": false,
    "authorization": false,
    "restriction": "",
    "registrationStatus": "",
    "note": "人造元素，无商业注册"
  },
  "rohs": {
    "restricted": false,
    "maxConcentration": null,
    "scope": "",
    "note": ""
  },
  "transport": {
    "imdg": {
      "un": null,
      "class": null,
      "pg": "-"
    },
    "iata": {
      "un": null,
      "class": null,
      "pg": "-"
    },
    "adr": {
      "un": null,
      "class": null,
      "pg": "-"
    },
    "note": "半衰期极短，无实际运输需求"
  },
  "environmental": {
    "airEmission": {
      "standard": "",
      "limit": "",
      "note": ""
    },
    "waterDischarge": {
      "standard": "",
      "limit": "",
      "note": ""
    },
    "soil": {
      "standard": "",
      "limit": "",
      "note": ""
    },
    "note": "不适用——无环境释放"
  },
  "importExport": {
    "dualUseControlled": false,
    "licenseRequired": false,
    "controlList": "",
    "note": "不适用——无商业流通"
  },
  "occupationalHealth": {
    "oelTwa": null,
    "oelStel": null,
    "gbzStandard": "GBZ 2.1-2019",
    "biologicalMonitoring": "",
    "healthSurveillance": "",
    "note": "放射性防护适用，实际接触极少"
  }
};


// Og — 鿫

P6_LEGAL['Og'] = {
  "chinaHazChem": {
    "catalogEntry": "不列入危化品目录",
    "hazardClass": "放射性物质（人造元素）",
    "note": "半衰期极短，无商业流通"
  },
  "reach": {
    "svhc": false,
    "authorization": false,
    "restriction": "",
    "registrationStatus": "",
    "note": "人造元素，无商业注册"
  },
  "rohs": {
    "restricted": false,
    "maxConcentration": null,
    "scope": "",
    "note": ""
  },
  "transport": {
    "imdg": {
      "un": null,
      "class": null,
      "pg": "-"
    },
    "iata": {
      "un": null,
      "class": null,
      "pg": "-"
    },
    "adr": {
      "un": null,
      "class": null,
      "pg": "-"
    },
    "note": "半衰期极短，无实际运输需求"
  },
  "environmental": {
    "airEmission": {
      "standard": "",
      "limit": "",
      "note": ""
    },
    "waterDischarge": {
      "standard": "",
      "limit": "",
      "note": ""
    },
    "soil": {
      "standard": "",
      "limit": "",
      "note": ""
    },
    "note": "不适用——无环境释放"
  },
  "importExport": {
    "dualUseControlled": false,
    "licenseRequired": false,
    "controlList": "",
    "note": "不适用——无商业流通"
  },
  "occupationalHealth": {
    "oelTwa": null,
    "oelStel": null,
    "gbzStandard": "GBZ 2.1-2019",
    "biologicalMonitoring": "",
    "healthSurveillance": "",
    "note": "放射性防护适用，实际接触极少"
  }
};



// 导出
if (typeof window !== 'undefined') {
  window.P6_LEGAL = P6_LEGAL;
}
