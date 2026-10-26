#!/usr/bin/env python3
"""Generate p6-legal.js — 法规合规数据 for all 118 elements."""

import os, json

OUTPUT = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', 'data', 'p6-legal.js')

NAMES = {
    'H':'氢','He':'氦','Li':'锂','Be':'铍','B':'硼','C':'碳','N':'氮','O':'氧','F':'氟','Ne':'氖',
    'Na':'钠','Mg':'镁','Al':'铝','Si':'硅','P':'磷','S':'硫','Cl':'氯','Ar':'氩','K':'钾','Ca':'钙',
    'Sc':'钪','Ti':'钛','V':'钒','Cr':'铬','Mn':'锰','Fe':'铁','Co':'钴','Ni':'镍','Cu':'铜','Zn':'锌',
    'Ga':'镓','Ge':'锗','As':'砷','Se':'硒','Br':'溴','Kr':'氪','Rb':'铷','Sr':'锶','Y':'钇','Zr':'锆',
    'Nb':'铌','Mo':'钼','Tc':'锝','Ru':'钌','Rh':'铑','Pd':'钯','Ag':'银','Cd':'镉','In':'铟','Sn':'锡',
    'Sb':'锑','Te':'碲','I':'碘','Xe':'氙','Cs':'铯','Ba':'钡','La':'镧','Ce':'铈','Pr':'镨','Nd':'钕',
    'Pm':'钷','Sm':'钐','Eu':'铕','Gd':'钆','Tb':'铽','Dy':'镝','Ho':'钬','Er':'铒','Tm':'铥','Yb':'镱',
    'Lu':'镥','Hf':'铪','Ta':'钽','W':'钨','Re':'铼','Os':'锇','Ir':'铱','Pt':'铂','Au':'金','Hg':'汞',
    'Tl':'铊','Pb':'铅','Bi':'铋','Po':'钋','At':'砹','Rn':'氡','Fr':'钫','Ra':'镭','Ac':'锕','Th':'钍',
    'Pa':'镤','U':'铀','Np':'镎','Pu':'钚','Am':'镅','Cm':'锔','Bk':'锫','Cf':'锎','Es':'锿','Fm':'镄',
    'Md':'钔','No':'锘','Lr':'铹','Rf':'鑪','Db':'𫭢','Sg':'𬭳','Bh':'𬭛','Hs':'𬭶','Mt':'鿏','Ds':'𫟼',
    'Rg':'𬬭','Cn':'鎶','Nh':'鉨','Fl':'𫓧','Mc':'镆','Lv':'𫟷','Ts':'鿬','Og':'鿫'
}

# === Helpers ===

def _cc(cat='不列入危化品目录', cls='—', note=''):
    return {'catalogEntry': cat, 'hazardClass': cls, 'note': note}

def _reach(svhc=False, auth=False, rest='', reg='', note=''):
    return {'svhc': svhc, 'authorization': auth, 'restriction': rest,
            'registrationStatus': reg, 'note': note}

def _rohs(rest=False, mc=None, scope='', note=''):
    return {'restricted': rest, 'maxConcentration': mc, 'scope': scope, 'note': note}

def _t(un=None, cls=None, pg='-', note=''):
    m = {'un': un, 'class': cls, 'pg': pg}
    return {'imdg': dict(m), 'iata': dict(m), 'adr': dict(m), 'note': note}

def _env(air='', water='', soil='', note=''):
    return {
        'airEmission': {'standard': 'GB 16297-1996' if air else '', 'limit': air, 'note': ''},
        'waterDischarge': {'standard': 'GB 8978-1996' if water else '', 'limit': water, 'note': ''},
        'soil': {'standard': 'GB 36600-2018' if soil else '', 'limit': soil, 'note': ''},
        'note': note
    }

def _ie(dual=False, lic=False, cl='', note=''):
    return {'dualUseControlled': dual, 'licenseRequired': lic, 'controlList': cl, 'note': note}

def _oh(twa=None, stel=None, gbz='GBZ 2.1-2019', bio='', health='', note=''):
    return {'oelTwa': twa, 'oelStel': stel, 'gbzStandard': gbz,
            'biologicalMonitoring': bio, 'healthSurveillance': health, 'note': note}

# === Templates ===

def _noble(un, note='不列入危化品目录'):
    return {
        'chinaHazChem': _cc(note=note),
        'reach': _reach(note='惰性气体，REACH豁免（附件V）'),
        'rohs': _rohs(),
        'transport': _t(un, '2.2'),
        'environmental': _env(note='惰性气体，无特定排放标准'),
        'importExport': _ie(),
        'occupationalHealth': _oh(note='单纯窒息性气体，无特定OEL')
    }

def _radioactive(un='UN2910', note=''):
    tn = '放射性物质，按比活度分类运输'
    if note:
        tn += '；' + note
    return {
        'chinaHazChem': _cc('不列入危化品目录', '放射性物质',
                            '适用《放射性同位素与射线装置安全和防护条例》'),
        'reach': _reach(note='放射性物质适用特殊规定'),
        'rohs': _rohs(),
        'transport': _t(un, '7', note=tn),
        'environmental': _env(air='参照GB 18871-2002', water='参照GB 18871-2002',
                              soil='参照GB 18871-2002',
                              note='适用《电离辐射防护与辐射源安全基本标准》(GB 18871-2002)'),
        'importExport': _ie(dual=True, lic=True, cl='放射性物质进出口管制',
                            note='需环保部门（生态环境部）审批'),
        'occupationalHealth': _oh(gbz='GBZ 188-2014',
                                  note='放射性职业照射，年有效剂量限值20mSv')
    }

def _synthetic(z):
    """Super-heavy synthetic elements (Z >= 104)"""
    return {
        'chinaHazChem': _cc('不列入危化品目录', '放射性物质（人造元素）',
                            '半衰期极短，无商业流通'),
        'reach': _reach(note='人造元素，无商业注册'),
        'rohs': _rohs(),
        'transport': _t(note='半衰期极短，无实际运输需求'),
        'environmental': _env(note='不适用——无环境释放'),
        'importExport': _ie(note='不适用——无商业流通'),
        'occupationalHealth': _oh(note='放射性防护适用，实际接触极少')
    }

def _rare_earth():
    return {
        'chinaHazChem': _cc('不列入危化品目录（稀土单质）', '—',
                            '稀土化合物部分列入目录'),
        'reach': _reach(reg='已注册', note='稀土元素已由行业联合注册'),
        'rohs': _rohs(),
        'transport': _t(note='非危险货物，粉末可按可燃固体管理'),
        'environmental': _env(water='稀土工业污染物排放标准(GB 26451-2011)',
                              note='稀土冶炼分离有行业排放标准'),
        'importExport': _ie(dual=False, lic=False,
                            note='稀土出口需许可证（商务部稀土出口配额管理）'),
        'occupationalHealth': _oh(note='稀土粉尘按总粉尘管理，PC-TWA 5mg/m³')
    }

# === Element Data ===

E = {}

# --- Period 1 (1-2) ---

E['H'] = {
    'chinaHazChem': _cc('第1662项', '易燃气体', '列入目录——压缩氢气'),
    'reach': _reach(rest='附录XVII 第40条', reg='已注册'),
    'rohs': _rohs(),
    'transport': _t('UN1049', '2.1'),
    'environmental': _env(air='无组织排放监控浓度限值', water='—', soil='—'),
    'importExport': _ie(),
    'occupationalHealth': _oh(note='单纯窒息性气体，无特定OEL')
}

E['He'] = _noble('UN1046')

# --- Period 2 (3-10) ---

E['Li'] = {
    'chinaHazChem': _cc('第1557项', '遇水放出易燃气体的物质', '列入目录'),
    'reach': _reach(reg='已注册', note='锂离子电池行业关注物质'),
    'rohs': _rohs(note='锂电池豁免条款参照RoHS指令附录'),
    'transport': _t('UN1415', '4.3'),
    'environmental': _env(water='总锂排放限值', note='锂电池回收管理适用'),
    'importExport': _ie(dual=True, cl='两用物项和技术出口许可证管理目录',
                        note='金属锂出口受管制'),
    'occupationalHealth': _oh(twa='0.025mg/m³', note='锂化合物以Li计')
}

E['Be'] = {
    'chinaHazChem': _cc('第1558项', '毒性物质', '列入目录——铍及其化合物'),
    'reach': _reach(svhc=True, reg='已注册', note='铍及其化合物列入SVHC清单'),
    'rohs': _rohs(),
    'transport': _t('UN1567', '6.1'),
    'environmental': _env(air='铍及其化合物排放限值', water='总铍 0.005mg/L',
                          soil='建设用地第一类用地筛选值 20mg/kg'),
    'importExport': _ie(dual=True, cl='核材料管制',
                        note='铍用于核工业，属战略物资'),
    'occupationalHealth': _oh(twa='0.0005mg/m³', bio='尿铍',
                              health='职业性铍病体检', note='IARC 1类致癌物')
}

E['B'] = {
    'chinaHazChem': _cc('不列入危化品目录（单质硼）', '—', '硼化合物部分列入'),
    'reach': _reach(reg='已注册'),
    'rohs': _rohs(),
    'transport': _t(note='非危险货物'),
    'environmental': _env(water='硼 0.5mg/L（硼砂）', soil='—'),
    'importExport': _ie(),
    'occupationalHealth': _oh(twa='10mg/m³', note='硼化合物以B计，总粉尘')
}

E['C'] = {
    'chinaHazChem': _cc('不列入危化品目录（单质碳）', '—',
                        '碳黑、活性碳等部分形态有专项规定'),
    'reach': _reach(reg='已注册', note='碳黑已注册'),
    'rohs': _rohs(),
    'transport': _t(note='非危险货物（碳黑：UN1361，4.2类）'),
    'environmental': _env(air='颗粒物排放限值', water='—',
                          soil='多环芳烃类参照GB 36600'),
    'importExport': _ie(),
    'occupationalHealth': _oh(twa='4mg/m³', note='碳黑为IARC 2B类致癌物，呼吸性粉尘')
}

E['N'] = {
    'chinaHazChem': _cc('不列入危化品目录（氮气）', '—', '压缩氮气按气体管理'),
    'reach': _reach(note='元素态氮气，REACH豁免'),
    'rohs': _rohs(),
    'transport': _t('UN1066', '2.2'),
    'environmental': _env(note='氮氧化物(NOx)排放受GB 16297管控'),
    'importExport': _ie(),
    'occupationalHealth': _oh(note='单纯窒息性气体，无特定OEL')
}

E['O'] = {
    'chinaHazChem': _cc('不列入危化品目录（氧气）', '—', '压缩氧气按气体管理'),
    'reach': _reach(note='元素态氧气，REACH豁免'),
    'rohs': _rohs(),
    'transport': _t('UN1072', '2.2', note='氧化性气体'),
    'environmental': _env(note='不适用'),
    'importExport': _ie(),
    'occupationalHealth': _oh(note='富氧环境火灾风险，无特定OEL')
}

E['F'] = {
    'chinaHazChem': _cc('第1559项', '氧化性气体,毒性气体', '列入目录'),
    'reach': _reach(rest='附录XVII', reg='已注册'),
    'rohs': _rohs(),
    'transport': _t('UN1045', '2.3', note='兼有氧化性（5.1副危险性）'),
    'environmental': _env(air='氟化物排放限值', water='氟化物 10mg/L',
                          soil='—'),
    'importExport': _ie(),
    'occupationalHealth': _oh(twa='0.2mg/m³', stel='0.6mg/m³', note='以F计')
}

E['Ne'] = _noble('UN1065')

# --- Period 3 (11-18) ---

E['Na'] = {
    'chinaHazChem': _cc('第1560项', '遇水放出易燃气体的物质', '列入目录'),
    'reach': _reach(reg='已注册'),
    'rohs': _rohs(),
    'transport': _t('UN1428', '4.3'),
    'environmental': _env(note='钠块处置需防潮防燃'),
    'importExport': _ie(),
    'occupationalHealth': _oh(twa='0.5mg/m³', note='金属钠烟')
}

E['Mg'] = {
    'chinaHazChem': _cc('第1572项', '遇水放出易燃气体的物质', '镁粉列入目录'),
    'reach': _reach(reg='已注册'),
    'rohs': _rohs(),
    'transport': _t('UN1869', '4.1', note='镁粉；镁锭非危险货物'),
    'environmental': _env(note='非特定污染物'),
    'importExport': _ie(note='镁粉出口受管制（易制爆化学品）'),
    'occupationalHealth': _oh(twa='10mg/m³', note='镁烟 3mg/m³')
}

E['Al'] = {
    'chinaHazChem': _cc('不列入危化品目录（铝锭）', '—', '铝粉列入第1561项'),
    'reach': _reach(reg='已注册'),
    'rohs': _rohs(),
    'transport': _t('UN1396', '4.1', note='铝粉；铝锭非危险货物'),
    'environmental': _env(water='—', soil='—'),
    'importExport': _ie(),
    'occupationalHealth': _oh(twa='3mg/m³', note='铝粉尘 3mg/m³')
}

E['Si'] = {
    'chinaHazChem': _cc('不列入危化品目录（单质硅）', '—'),
    'reach': _reach(reg='已注册'),
    'rohs': _rohs(),
    'transport': _t(note='非危险货物'),
    'environmental': _env(note='硅粉尘按总粉尘管理'),
    'importExport': _ie(note='高纯硅材料出口管制（半导体相关）'),
    'occupationalHealth': _oh(twa='5mg/m³', note='呼吸性结晶型二氧化硅需更低限值')
}

E['P'] = {
    'chinaHazChem': _cc('第1562项', '自燃物质', '白磷（黄磷）列入目录'),
    'reach': _reach(rest='附录XVII', reg='已注册', note='白磷受限'),
    'rohs': _rohs(),
    'transport': _t('UN1381', '4.2', note='白磷自燃；红磷为UN1338, 4.1类'),
    'environmental': _env(air='磷化氢排放限值', water='总磷 0.5mg/L',
                          soil='—'),
    'importExport': _ie(dual=True, cl='两用物项——黄磷出口管制'),
    'occupationalHealth': _oh(twa='0.05mg/m³', note='白磷蒸气')
}

E['S'] = {
    'chinaHazChem': _cc('第1563项', '易燃固体', '硫磺列入目录'),
    'reach': _reach(reg='已注册'),
    'rohs': _rohs(),
    'transport': _t('UN1350', '4.1', note='硫磺粉；熔融硫为UN2448'),
    'environmental': _env(air='二氧化硫排放限值', water='硫化物 1.0mg/L',
                          soil='—'),
    'importExport': _ie(note='硫磺属易制爆化学品'),
    'occupationalHealth': _oh(twa='10mg/m³', note='二氧化硫 5mg/m³')
}

E['Cl'] = {
    'chinaHazChem': _cc('第1564项', '毒性气体,氧化性气体', '列入目录'),
    'reach': _reach(rest='附录XVII', reg='已注册'),
    'rohs': _rohs(),
    'transport': _t('UN1017', '2.3', note='兼有氧化性（5.1副危险性）'),
    'environmental': _env(air='氯气排放限值', water='总余氯 0.5mg/L', soil='—'),
    'importExport': _ie(dual=True, cl='两用物项——氯气可作化学武器前体'),
    'occupationalHealth': _oh(twa='1mg/m³', stel='2mg/m³')
}

E['Ar'] = _noble('UN1006')

# --- Period 4 start (19-20) ---

E['K'] = {
    'chinaHazChem': _cc('第1565项', '遇水放出易燃气体的物质', '列入目录'),
    'reach': _reach(reg='已注册'),
    'rohs': _rohs(),
    'transport': _t('UN2257', '4.3'),
    'environmental': _env(note='非特定污染物'),
    'importExport': _ie(),
    'occupationalHealth': _oh(twa='2mg/m³', note='钾烟')
}

E['Ca'] = {
    'chinaHazChem': _cc('第1566项', '遇水放出易燃气体的物质', '钙列入目录'),
    'reach': _reach(reg='已注册'),
    'rohs': _rohs(),
    'transport': _t('UN1401', '4.3'),
    'environmental': _env(note='非特定污染物'),
    'importExport': _ie(),
    'occupationalHealth': _oh(twa='2mg/m³', note='钙烟')
}

# --- Period 4 continued (21-36) ---

E['Sc'] = {
    'chinaHazChem': _cc('不列入危化品目录', '—', '稀土元素'),
    'reach': _reach(reg='已注册'),
    'rohs': _rohs(),
    'transport': _t(note='非危险货物'),
    'environmental': _env(note='稀土元素参照行业标准'),
    'importExport': _ie(note='稀土出口许可证管理'),
    'occupationalHealth': _oh(twa='5mg/m³', note='钪化合物粉尘')
}

E['Ti'] = {
    'chinaHazChem': _cc('不列入危化品目录（钛金属）', '—', '钛粉列入第1567项'),
    'reach': _reach(reg='已注册'),
    'rohs': _rohs(),
    'transport': _t('UN2546', '4.1', note='钛粉；钛金属非危险货物'),
    'environmental': _env(note='钛粉尘按总粉尘管理'),
    'importExport': _ie(),
    'occupationalHealth': _oh(twa='10mg/m³', note='二氧化钛粉尘')
}

E['V'] = {
    'chinaHazChem': _cc('第1568项', '毒性物质', '钒化合物列入目录'),
    'reach': _reach(svhc=True, reg='已注册', note='五氧化二钒列入SVHC'),
    'rohs': _rohs(),
    'transport': _t('UN3287', '6.1', note='钒化合物'),
    'environmental': _env(air='钒及其化合物排放限值', water='总钒 1.0mg/L',
                          soil='—'),
    'importExport': _ie(),
    'occupationalHealth': _oh(twa='0.05mg/m³', stel='0.15mg/m³',
                              bio='尿钒', note='钒化合物以V2O5计，IARC 2B类')
}

E['Cr'] = {
    'chinaHazChem': _cc('第1569项', '毒性物质', '铬化合物列入目录'),
    'reach': _reach(svhc=True, reg='已注册', note='六价铬化合物列入SVHC'),
    'rohs': _rohs(rest=True, mc='0.1%', scope='电子电气设备',
                  note='六价铬(Cr6+)受限'),
    'transport': _t('UN1759', '8', note='铬化合物'),
    'environmental': _env(air='铬酸雾排放限值', water='总铬 1.5mg/L，六价铬 0.5mg/L',
                          soil='建设用地第一类用地筛选值'),
    'importExport': _ie(dual=True, cl='两用物项——铬酸出口管制'),
    'occupationalHealth': _oh(twa='0.05mg/m³', stel='0.15mg/m³',
                              bio='尿铬', health='铬鼻病体检',
                              note='六价铬为IARC 1类致癌物')
}

E['Mn'] = {
    'chinaHazChem': _cc('不列入危化品目录（金属锰）', '—', '锰化合物部分列入'),
    'reach': _reach(reg='已注册'),
    'rohs': _rohs(),
    'transport': _t(note='非危险货物'),
    'environmental': _env(air='锰及其化合物排放限值', water='总锰 2.0mg/L', soil='—'),
    'importExport': _ie(),
    'occupationalHealth': _oh(twa='0.15mg/m³', bio='尿锰',
                              health='锰中毒体检', note='锰烟 0.2mg/m³')
}

E['Fe'] = {
    'chinaHazChem': _cc('不列入危化品目录', '—'),
    'reach': _reach(reg='已注册'),
    'rohs': _rohs(),
    'transport': _t(note='非危险货物'),
    'environmental': _env(note='非特定污染物'),
    'importExport': _ie(note='钢铁产品出口退税政策'),
    'occupationalHealth': _oh(twa='10mg/m³', note='铁烟 5mg/m³，氧化铁粉尘')
}

E['Co'] = {
    'chinaHazChem': _cc('第1570项', '毒性物质', '钴化合物列入目录'),
    'reach': _reach(svhc=True, reg='已注册', note='钴及其化合物列入SVHC'),
    'rohs': _rohs(),
    'transport': _t('UN1314', '4.1', note='环烷酸钴等化合物'),
    'environmental': _env(water='总钴 1.0mg/L', soil='—'),
    'importExport': _ie(note='钴为关键矿产，部分国家战略管控'),
    'occupationalHealth': _oh(twa='0.05mg/m³', stel='0.15mg/m³',
                              bio='尿钴', note='钴及其化合物为IARC 2B类致癌物')
}

E['Ni'] = {
    'chinaHazChem': _cc('第1571项', '毒性物质', '镍化合物列入目录'),
    'reach': _reach(svhc=True, reg='已注册', note='镍及其化合物列入SVHC'),
    'rohs': _rohs(),
    'transport': _t('UN3288', '6.1', note='镍化合物'),
    'environmental': _env(air='镍及其化合物排放限值', water='总镍 1.0mg/L',
                          soil='建设用地第一类用地筛选值 150mg/kg'),
    'importExport': _ie(),
    'occupationalHealth': _oh(twa='0.5mg/m³', bio='尿镍',
                              health='镍鼻病体检', note='镍化合物为IARC 1类致癌物')
}

E['Cu'] = {
    'chinaHazChem': _cc('不列入危化品目录（金属铜）', '—', '铜化合物部分列入'),
    'reach': _reach(reg='已注册'),
    'rohs': _rohs(),
    'transport': _t(note='非危险货物'),
    'environmental': _env(water='总铜 0.5mg/L', soil='建设用地第一类用地筛选值 2000mg/kg'),
    'importExport': _ie(),
    'occupationalHealth': _oh(twa='0.2mg/m³', stel='0.6mg/m³',
                              bio='血清铜, 尿铜', note='铜烟 0.2mg/m³')
}

E['Zn'] = {
    'chinaHazChem': _cc('不列入危化品目录（金属锌）', '—', '锌粉列入第1573项'),
    'reach': _reach(reg='已注册'),
    'rohs': _rohs(),
    'transport': _t('UN1435', '4.3', note='锌粉；锌锭非危险货物'),
    'environmental': _env(water='总锌 2.0mg/L',
                          soil='建设用地第一类用地筛选值 800mg/kg'),
    'importExport': _ie(),
    'occupationalHealth': _oh(twa='3mg/m³', stel='5mg/m³',
                              bio='血清锌', note='锌烟 5mg/m³')
}

E['Ga'] = {
    'chinaHazChem': _cc('不列入危化品目录', '—'),
    'reach': _reach(reg='已注册'),
    'rohs': _rohs(),
    'transport': _t(note='非危险货物'),
    'environmental': _env(note='非特定污染物'),
    'importExport': _ie(note='镓为战略金属，半导体材料出口管制'),
    'occupationalHealth': _oh(note='镓化合物OEL未专门制定')
}

E['Ge'] = {
    'chinaHazChem': _cc('不列入危化品目录', '—', '锗烷有危险性'),
    'reach': _reach(reg='已注册'),
    'rohs': _rohs(),
    'transport': _t(note='非危险货物'),
    'environmental': _env(note='非特定污染物'),
    'importExport': _ie(note='高纯锗为战略物资'),
    'occupationalHealth': _oh(twa='6mg/m³', note='二氧化锗粉尘')
}

E['As'] = {
    'chinaHazChem': _cc('第1574项', '毒性物质', '砷及其化合物列入目录'),
    'reach': _reach(svhc=True, reg='已注册', note='三氧化二砷等列入SVHC'),
    'rohs': _rohs(rest=True, mc='0.1%', scope='电子电气设备',
                  note='部分砷化合物受限'),
    'transport': _t('UN1558', '6.1', note='砷及其化合物'),
    'environmental': _env(air='砷及其化合物排放限值', water='总砷 0.5mg/L',
                          soil='建设用地第一类用地筛选值 20mg/kg'),
    'importExport': _ie(dual=True, cl='两用物项——三氧化二砷出口管制',
                        note='砷可用于化学武器前体'),
    'occupationalHealth': _oh(twa='0.01mg/m³', stel='0.02mg/m³',
                              bio='尿砷', health='砷中毒体检',
                              note='砷为IARC 1类致癌物')
}

E['Se'] = {
    'chinaHazChem': _cc('第1575项', '毒性物质', '硒及其化合物列入目录'),
    'reach': _reach(reg='已注册'),
    'rohs': _rohs(),
    'transport': _t('UN3283', '6.1', note='硒化合物'),
    'environmental': _env(water='总硒 0.1mg/L', soil='—'),
    'importExport': _ie(),
    'occupationalHealth': _oh(twa='0.1mg/m³', bio='尿硒',
                              health='硒中毒体检', note='硒及其化合物')
}

E['Br'] = {
    'chinaHazChem': _cc('第1576项', '腐蚀性物质', '列入目录——溴'),
    'reach': _reach(rest='附录XVII', reg='已注册'),
    'rohs': _rohs(),
    'transport': _t('UN1744', '8', note='腐蚀性液体，兼有毒性'),
    'environmental': _env(note='溴化物排放参照相关标准'),
    'importExport': _ie(dual=True, cl='两用物项——溴可作化学武器前体'),
    'occupationalHealth': _oh(twa='0.1mg/m³', stel='0.3mg/m³',
                              bio='尿溴', note='溴蒸气')
}

E['Kr'] = _noble('UN1056')

# --- Period 5 start (37-40) ---

E['Rb'] = {
    'chinaHazChem': _cc('第1577项', '遇水放出易燃气体的物质', '列入目录'),
    'reach': _reach(reg='已注册'),
    'rohs': _rohs(),
    'transport': _t('UN1423', '4.3'),
    'environmental': _env(note='非特定污染物'),
    'importExport': _ie(),
    'occupationalHealth': _oh(twa='0.5mg/m³', note='铷烟')
}

E['Sr'] = {
    'chinaHazChem': _cc('第1578项', '遇水放出易燃气体的物质', '列入目录'),
    'reach': _reach(reg='已注册'),
    'rohs': _rohs(),
    'transport': _t('UN1383', '4.3', note='锶粉'),
    'environmental': _env(water='锶排放限值', soil='—'),
    'importExport': _ie(),
    'occupationalHealth': _oh(twa='2mg/m³', note='锶烟')
}

E['Y'] = {
    'chinaHazChem': _cc('不列入危化品目录', '—', '稀土元素'),
    'reach': _reach(reg='已注册'),
    'rohs': _rohs(),
    'transport': _t(note='非危险货物'),
    'environmental': _env(note='稀土元素参照行业标准'),
    'importExport': _ie(note='稀土出口许可证管理'),
    'occupationalHealth': _oh(twa='5mg/m³', note='钇化合物粉尘')
}

E['Zr'] = {
    'chinaHazChem': _cc('不列入危化品目录（金属锆）', '—', '锆粉列入第1579项'),
    'reach': _reach(reg='已注册'),
    'rohs': _rohs(),
    'transport': _t('UN2008', '4.1', note='锆粉；金属锆非危险货物'),
    'environmental': _env(note='锆粉尘按总粉尘管理'),
    'importExport': _ie(dual=True, cl='核材料管制', note='锆用于核反应堆'),
    'occupationalHealth': _oh(twa='5mg/m³', note='锆化合物粉尘')
}

# --- Period 5 continued (41-54) ---

E['Nb'] = {
    'chinaHazChem': _cc('不列入危化品目录', '—'),
    'reach': _reach(reg='已注册'),
    'rohs': _rohs(),
    'transport': _t(note='非危险货物'),
    'environmental': _env(note='非特定污染物'),
    'importExport': _ie(note='铌为关键矿产，部分应用受战略管控'),
    'occupationalHealth': _oh(twa='10mg/m³', note='铌粉尘按总粉尘管理')
}

E['Mo'] = {
    'chinaHazChem': _cc('不列入危化品目录（金属钼）', '—', '钼化合物部分列入'),
    'reach': _reach(reg='已注册'),
    'rohs': _rohs(),
    'transport': _t(note='非危险货物'),
    'environmental': _env(water='总钼 0.5mg/L', soil='—'),
    'importExport': _ie(),
    'occupationalHealth': _oh(twa='4mg/m³', note='钼烟 4mg/m³')
}

E['Tc'] = _radioactive(note='人造放射性元素，主要用于医学显像')

E['Ru'] = {
    'chinaHazChem': _cc('不列入危化品目录', '—', '钌化合物部分列入'),
    'reach': _reach(reg='已注册'),
    'rohs': _rohs(),
    'transport': _t(note='非危险货物'),
    'environmental': _env(note='非特定污染物'),
    'importExport': _ie(),
    'occupationalHealth': _oh(twa='1mg/m³', note='钌化合物粉尘')
}

E['Rh'] = {
    'chinaHazChem': _cc('不列入危化品目录', '—'),
    'reach': _reach(reg='已注册'),
    'rohs': _rohs(),
    'transport': _t(note='非危险货物'),
    'environmental': _env(note='非特定污染物'),
    'importExport': _ie(),
    'occupationalHealth': _oh(twa='1mg/m³', note='铑化合物粉尘')
}

E['Pd'] = {
    'chinaHazChem': _cc('不列入危化品目录', '—'),
    'reach': _reach(reg='已注册'),
    'rohs': _rohs(),
    'transport': _t(note='非危险货物'),
    'environmental': _env(note='非特定污染物'),
    'importExport': _ie(),
    'occupationalHealth': _oh(twa='1mg/m³', note='钯化合物粉尘')
}

E['Ag'] = {
    'chinaHazChem': _cc('不列入危化品目录（金属银）', '—', '银化合物部分列入'),
    'reach': _reach(reg='已注册'),
    'rohs': _rohs(),
    'transport': _t(note='非危险货物'),
    'environmental': _env(water='总银 0.5mg/L', soil='—'),
    'importExport': _ie(),
    'occupationalHealth': _oh(twa='0.1mg/m³', stel='0.3mg/m³',
                              bio='血银, 尿银', note='银可致银质沉着症')
}

E['Cd'] = {
    'chinaHazChem': _cc('第1580项', '毒性物质', '镉及其化合物列入目录'),
    'reach': _reach(svhc=True, auth=True, rest='附录XVII 第23条',
                    reg='已注册', note='镉及其化合物列入SVHC及授权清单'),
    'rohs': _rohs(rest=True, mc='0.01%', scope='电子电气设备',
                  note='镉最大允许浓度0.01%，比其他RoHS物质更严格'),
    'transport': _t('UN2570', '6.1', note='镉化合物'),
    'environmental': _env(water='总镉 0.1mg/L',
                          soil='建设用地第一类用地筛选值 20mg/kg'),
    'importExport': _ie(dual=True, cl='两用物项——镉出口管制'),
    'occupationalHealth': _oh(twa='0.01mg/m³', stel='0.02mg/m³',
                              bio='尿镉, 血镉', health='镉中毒体检',
                              note='镉为IARC 1类致癌物')
}

E['In'] = {
    'chinaHazChem': _cc('不列入危化品目录', '—'),
    'reach': _reach(reg='已注册'),
    'rohs': _rohs(),
    'transport': _t(note='非危险货物'),
    'environmental': _env(water='总铟 0.1mg/L', note='铟排放限值'),
    'importExport': _ie(note='铟为关键矿产，半导体材料'),
    'occupationalHealth': _oh(twa='0.1mg/m³', note='铟及其化合物')
}

E['Sn'] = {
    'chinaHazChem': _cc('不列入危化品目录（金属锡）', '—', '有机锡化合物列入目录'),
    'reach': _reach(svhc=True, rest='附录XVII 第20条', reg='已注册',
                    note='有机锡化合物受限'),
    'rohs': _rohs(),
    'transport': _t(note='非危险货物'),
    'environmental': _env(water='总锡 2.0mg/L', soil='—'),
    'importExport': _ie(),
    'occupationalHealth': _oh(twa='2mg/m³', note='有机锡化合物 0.1mg/m³')
}

E['Sb'] = {
    'chinaHazChem': _cc('第1581项', '毒性物质', '锑及其化合物列入目录'),
    'reach': _reach(svhc=True, reg='已注册', note='三氧化二锑列入SVHC'),
    'rohs': _rohs(),
    'transport': _t('UN1549', '6.1', note='锑化合物'),
    'environmental': _env(water='总锑 0.5mg/L', soil='—'),
    'importExport': _ie(),
    'occupationalHealth': _oh(twa='0.5mg/m³', bio='尿锑',
                              note='锑及其化合物')
}

E['Te'] = {
    'chinaHazChem': _cc('第1582项', '毒性物质', '碲及其化合物列入目录'),
    'reach': _reach(reg='已注册'),
    'rohs': _rohs(),
    'transport': _t('UN3284', '6.1', note='碲化合物'),
    'environmental': _env(water='总碲 0.1mg/L', soil='—'),
    'importExport': _ie(),
    'occupationalHealth': _oh(twa='0.1mg/m³', bio='尿碲',
                              note='碲及其化合物')
}

E['I'] = {
    'chinaHazChem': _cc('第1583项', '腐蚀性物质,毒性物质', '碘列入目录'),
    'reach': _reach(reg='已注册'),
    'rohs': _rohs(),
    'transport': _t('UN1759', '8', note='碘兼有毒性'),
    'environmental': _env(note='碘化物排放参照相关标准'),
    'importExport': _ie(dual=True, cl='两用物项——碘可用于毒品制造',
                        note='碘列入易制毒化学品目录'),
    'occupationalHealth': _oh(twa='0.01mg/m³', stel='0.03mg/m³',
                              bio='尿碘', note='碘蒸气')
}

E['Xe'] = _noble('UN2036')

# --- Period 6 start (55-60) ---

E['Cs'] = {
    'chinaHazChem': _cc('第1584项', '遇水放出易燃气体的物质', '列入目录'),
    'reach': _reach(reg='已注册'),
    'rohs': _rohs(),
    'transport': _t('UN1407', '4.3'),
    'environmental': _env(note='非特定污染物'),
    'importExport': _ie(),
    'occupationalHealth': _oh(twa='0.3mg/m³', note='铯烟')
}

E['Ba'] = {
    'chinaHazChem': _cc('第1585项', '毒性物质', '钡及其化合物列入目录'),
    'reach': _reach(reg='已注册'),
    'rohs': _rohs(),
    'transport': _t('UN1564', '6.1', note='钡化合物'),
    'environmental': _env(water='总钡 2.0mg/L', soil='—'),
    'importExport': _ie(),
    'occupationalHealth': _oh(twa='0.5mg/m³', stel='1.5mg/m³',
                              bio='尿钡', note='可溶性钡化合物')
}

E['La'] = {
    'chinaHazChem': _cc('不列入危化品目录', '—', '稀土元素'),
    'reach': _reach(reg='已注册'),
    'rohs': _rohs(),
    'transport': _t(note='非危险货物'),
    'environmental': _env(water='稀土工业水污染物排放标准(GB 26451)',
                          note='稀土冶炼分离'),
    'importExport': _ie(note='稀土出口许可证管理'),
    'occupationalHealth': _oh(twa='5mg/m³', note='镧化合物粉尘')
}

E['Ce'] = {
    'chinaHazChem': _cc('不列入危化品目录', '—', '稀土元素'),
    'reach': _reach(reg='已注册'),
    'rohs': _rohs(),
    'transport': _t(note='非危险货物'),
    'environmental': _env(water='稀土工业水污染物排放标准(GB 26451)',
                          note='稀土冶炼分离'),
    'importExport': _ie(note='稀土出口许可证管理'),
    'occupationalHealth': _oh(twa='5mg/m³', note='铈化合物粉尘')
}

E['Pr'] = {
    'chinaHazChem': _cc('不列入危化品目录', '—', '稀土元素'),
    'reach': _reach(reg='已注册'),
    'rohs': _rohs(),
    'transport': _t(note='非危险货物'),
    'environmental': _env(note='稀土元素参照行业标准'),
    'importExport': _ie(note='稀土出口许可证管理'),
    'occupationalHealth': _oh(twa='5mg/m³', note='镨化合物粉尘')
}

E['Nd'] = {
    'chinaHazChem': _cc('不列入危化品目录', '—', '稀土元素'),
    'reach': _reach(reg='已注册'),
    'rohs': _rohs(),
    'transport': _t(note='非危险货物'),
    'environmental': _env(note='稀土元素参照行业标准'),
    'importExport': _ie(note='稀土出口许可证管理'),
    'occupationalHealth': _oh(twa='5mg/m³', note='钕化合物粉尘')
}

# --- Period 6 continued (61-72) ---

E['Pm'] = _radioactive(note='人造放射性元素')

for _sym in ['Sm', 'Eu', 'Gd', 'Tb', 'Dy', 'Ho', 'Er', 'Tm', 'Yb', 'Lu']:
    E[_sym] = {
        'chinaHazChem': _cc('不列入危化品目录', '—', '稀土元素'),
        'reach': _reach(reg='已注册', note='稀土元素已行业联合注册'),
        'rohs': _rohs(),
        'transport': _t(note='非危险货物，粉末可按可燃固体管理'),
        'environmental': _env(water='稀土工业水污染物排放标准(GB 26451)',
                              note='稀土冶炼分离有行业排放标准'),
        'importExport': _ie(note='稀土出口许可证管理'),
        'occupationalHealth': _oh(twa='5mg/m³', note='稀土化合物粉尘')
    }

E['Hf'] = {
    'chinaHazChem': _cc('不列入危化品目录', '—', '铪粉可燃'),
    'reach': _reach(reg='已注册'),
    'rohs': _rohs(),
    'transport': _t('UN2545', '4.1', note='铪粉；金属铪非危险货物'),
    'environmental': _env(note='非特定污染物'),
    'importExport': _ie(dual=True, cl='核材料管制', note='铪用于核反应堆控制棒'),
    'occupationalHealth': _oh(twa='0.5mg/m³', note='铪化合物粉尘')
}

# --- Period 6 continued (73-80) ---

E['Ta'] = {
    'chinaHazChem': _cc('不列入危化品目录', '—'),
    'reach': _reach(reg='已注册'),
    'rohs': _rohs(),
    'transport': _t(note='非危险货物'),
    'environmental': _env(note='非特定污染物'),
    'importExport': _ie(note='钽为关键矿产，电容材料'),
    'occupationalHealth': _oh(twa='5mg/m³', note='钽粉尘')
}

E['W'] = {
    'chinaHazChem': _cc('不列入危化品目录', '—'),
    'reach': _reach(reg='已注册'),
    'rohs': _rohs(),
    'transport': _t(note='非危险货物'),
    'environmental': _env(water='总钨 0.5mg/L', note='钨排放限值'),
    'importExport': _ie(note='钨为战略金属'),
    'occupationalHealth': _oh(twa='5mg/m³', stel='10mg/m³',
                              note='钨及其不溶性化合物')
}

E['Re'] = {
    'chinaHazChem': _cc('不列入危化品目录', '—'),
    'reach': _reach(reg='已注册'),
    'rohs': _rohs(),
    'transport': _t(note='非危险货物'),
    'environmental': _env(note='非特定污染物'),
    'importExport': _ie(note='铼为稀缺战略金属'),
    'occupationalHealth': _oh(twa='5mg/m³', note='铼化合物粉尘')
}

E['Os'] = {
    'chinaHazChem': _cc('不列入危化品目录（金属锇）', '—', '四氧化锇列入目录'),
    'reach': _reach(reg='已注册'),
    'rohs': _rohs(),
    'transport': _t('UN2471', '6.1', note='四氧化锇剧毒'),
    'environmental': _env(note='四氧化锇挥发性极强'),
    'importExport': _ie(),
    'occupationalHealth': _oh(twa='0.0002mg/m³', stel='0.0006mg/m³',
                              note='四氧化锇蒸气')
}

E['Ir'] = {
    'chinaHazChem': _cc('不列入危化品目录', '—'),
    'reach': _reach(reg='已注册'),
    'rohs': _rohs(),
    'transport': _t(note='非危险货物'),
    'environmental': _env(note='非特定污染物'),
    'importExport': _ie(),
    'occupationalHealth': _oh(twa='1mg/m³', note='铱化合物粉尘')
}

E['Pt'] = {
    'chinaHazChem': _cc('不列入危化品目录（金属铂）', '—', '铂化合物部分列入'),
    'reach': _reach(svhc=True, reg='已注册',
                    note='六氯铂酸等列入SVHC'),
    'rohs': _rohs(),
    'transport': _t(note='非危险货物'),
    'environmental': _env(note='铂化合物排放参照相关标准'),
    'importExport': _ie(),
    'occupationalHealth': _oh(twa='0.002mg/m³', note='铂化合物可致铂过敏症')
}

E['Au'] = {
    'chinaHazChem': _cc('不列入危化品目录（金属金）', '—', '氰化金盐有毒性'),
    'reach': _reach(reg='已注册'),
    'rohs': _rohs(),
    'transport': _t(note='非危险货物'),
    'environmental': _env(water='总金 0.01mg/L', note='金排放极低限值'),
    'importExport': _ie(),
    'occupationalHealth': _oh(note='金属金无特定OEL，氰化金盐参照氰化物')
}

E['Hg'] = {
    'chinaHazChem': _cc('第1586项', '毒性物质', '汞列入目录'),
    'reach': _reach(svhc=True, auth=True, rest='附录XVII 第18条',
                    reg='已注册', note='汞及化合物列入SVHC及授权清单'),
    'rohs': _rohs(rest=True, mc='0.1%', scope='电子电气设备',
                  note='汞受限，部分豁免如荧光灯'),
    'transport': _t('UN2809', '8', note='液态汞，腐蚀性'),
    'environmental': _env(air='汞及其化合物排放限值', water='总汞 0.05mg/L',
                          soil='建设用地第一类用地筛选值 8mg/kg'),
    'importExport': _ie(dual=True, lic=True, cl='汞出口管制',
                        note='《关于汞的水俣公约》缔约国，汞进出口受限'),
    'occupationalHealth': _oh(twa='0.02mg/m³', stel='0.04mg/m³',
                              bio='尿汞, 血汞', health='汞中毒体检',
                              note='汞蒸气及无机汞为IARC 1类致癌物')
}

# --- Period 6 continued (81-86) ---

E['Tl'] = {
    'chinaHazChem': _cc('第1587项', '毒性物质', '铊及其化合物列入目录'),
    'reach': _reach(svhc=True, reg='已注册', note='铊化合物列入SVHC'),
    'rohs': _rohs(),
    'transport': _t('UN3287', '6.1', note='铊化合物'),
    'environmental': _env(water='总铊 0.005mg/L', soil='—'),
    'importExport': _ie(dual=True, cl='两用物项——铊出口管制'),
    'occupationalHealth': _oh(twa='0.0001mg/m³', stel='0.0003mg/m³',
                              bio='尿铊', health='铊中毒体检',
                              note='剧毒物质，皮肤可吸收')
}

E['Pb'] = {
    'chinaHazChem': _cc('第1588项', '毒性物质', '铅及其化合物列入目录'),
    'reach': _reach(svhc=True, auth=True, rest='附录XVII 第16,17,63条',
                    reg='已注册', note='铅及化合物列入SVHC及授权清单'),
    'rohs': _rohs(rest=True, mc='0.1%', scope='电子电气设备',
                  note='铅受限，铅酸电池等部分豁免'),
    'transport': _t('UN3077', '9', note='铅化合物'),
    'environmental': _env(air='铅及其化合物排放限值', water='总铅 1.0mg/L',
                          soil='建设用地第一类用地筛选值 400mg/kg'),
    'importExport': _ie(note='铅蓄电池出口受管控'),
    'occupationalHealth': _oh(twa='0.05mg/m³', stel='0.15mg/m³',
                              bio='血铅', health='铅中毒体检',
                              note='铅为IARC 2A类致癌物')
}

E['Bi'] = {
    'chinaHazChem': _cc('不列入危化品目录', '—', '铋化合物部分列入'),
    'reach': _reach(reg='已注册'),
    'rohs': _rohs(),
    'transport': _t(note='非危险货物'),
    'environmental': _env(note='非特定污染物'),
    'importExport': _ie(),
    'occupationalHealth': _oh(twa='5mg/m³', note='铋化合物粉尘')
}

E['Po'] = _radioactive(note='极毒放射性元素，α衰变')

E['At'] = _radioactive(note='卤族放射性元素，半衰期极短')

E['Rn'] = {
    'chinaHazChem': _cc('不列入危化品目录', '放射性物质',
                        '适用《放射性同位素与射线装置安全和防护条例》'),
    'reach': _reach(note='放射性惰性气体'),
    'rohs': _rohs(),
    'transport': _t('UN1006', '7', note='放射性气体'),
    'environmental': _env(air='室内氡浓度参照GB/T 16146',
                          note='氡是室内空气污染源，建筑物防护重点'),
    'importExport': _ie(dual=True, lic=True, cl='放射性物质进出口管制',
                        note='需环保部门审批'),
    'occupationalHealth': _oh(gbz='GBZ 188-2014',
                              note='氡为IARC 1类致癌物，矿井及地下室重点关注')
}

# --- Period 7 (87-100) ---

E['Fr'] = _radioactive(note='极稀有放射性元素，半衰期极短')

E['Ra'] = _radioactive(note='镭及其化合物，历史上用于发光涂料')

E['Ac'] = _radioactive(note='锕系放射元素')

E['Th'] = {
    'chinaHazChem': _cc('不列入危化品目录', '放射性物质',
                        '适用核材料管制条例'),
    'reach': _reach(note='放射性物质'),
    'rohs': _rohs(),
    'transport': _t('UN2910', '7', note='放射性物质，比活度分类'),
    'environmental': _env(air='参照GB 18871-2002', water='参照GB 18871-2002',
                          soil='参照GB 18871-2002',
                          note='适用《电离辐射防护与辐射源安全基本标准》'),
    'importExport': _ie(dual=True, lic=True, cl='核材料进出口管制',
                        note='钍为核材料，进出口受严格管控'),
    'occupationalHealth': _oh(gbz='GBZ 188-2014',
                              note='放射性职业照射，年有效剂量限值20mSv')
}

E['Pa'] = _radioactive(note='锕系放射元素')

E['U'] = {
    'chinaHazChem': _cc('不列入危化品目录', '放射性物质',
                        '适用核材料管制条例'),
    'reach': _reach(note='放射性物质'),
    'rohs': _rohs(),
    'transport': _t('UN2910', '7', note='放射性物质，比活度分类；六氟化铀为UN2977'),
    'environmental': _env(air='参照GB 18871-2002', water='参照GB 18871-2002',
                          soil='参照GB 18871-2002',
                          note='铀尾矿库辐射环境管理适用GB 14585'),
    'importExport': _ie(dual=True, lic=True, cl='核材料进出口管制',
                        note='铀为核材料，受国际原子能机构保障监督'),
    'occupationalHealth': _oh(gbz='GBZ 188-2014',
                              note='放射性及化学毒性（肾毒），年有效剂量限值20mSv')
}

E['Np'] = _radioactive(note='锕系人造放射元素')

E['Pu'] = {
    'chinaHazChem': _cc('不列入危化品目录', '放射性物质',
                        '适用核材料管制条例'),
    'reach': _reach(note='放射性物质'),
    'rohs': _rohs(),
    'transport': _t('UN2910', '7', note='放射性物质，比活度分类'),
    'environmental': _env(air='参照GB 18871-2002', water='参照GB 18871-2002',
                          soil='参照GB 18871-2002',
                          note='适用《电离辐射防护与辐射源安全基本标准》'),
    'importExport': _ie(dual=True, lic=True, cl='核材料进出口管制',
                        note='钚为核材料，极严格管控'),
    'occupationalHealth': _oh(gbz='GBZ 188-2014',
                              note='极毒α放射体，年有效剂量限值20mSv')
}

E['Am'] = _radioactive(note='锕系人造放射元素，用于烟雾报警器')

E['Cm'] = _radioactive(note='锕系人造放射元素')

E['Bk'] = _radioactive(note='锕系人造放射元素')

E['Cf'] = _radioactive(note='锕系人造放射元素，用于中子源')

E['Es'] = _radioactive(note='锕系人造放射元素，半衰期极短')

E['Fm'] = _radioactive(note='锕系人造放射元素，半衰期极短')

# --- Period 7 continued (101-118) ---

# 人造放射性元素 (Z=101-103)
for _sym in ['Md', 'No', 'Lr']:
    E[_sym] = _radioactive(note='锕系人造放射元素，半衰期极短')

# 超重人造元素 (Z>=104) — 半衰期极短，无商业流通
for _sym in ['Rf', 'Db', 'Sg', 'Bh', 'Hs', 'Mt', 'Ds', 'Rg', 'Cn',
             'Nh', 'Fl', 'Mc', 'Lv', 'Ts', 'Og']:
    E[_sym] = _synthetic(0)



# === JS Generator ===

HEADER = """/**
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

"""

FOOTER = """
// 导出
if (typeof window !== 'undefined') {
  window.P6_LEGAL = P6_LEGAL;
}
"""


def generate_js():
    out = [HEADER]
    for sym in NAMES:
        if sym not in E:
            print(f'WARNING: {sym} ({NAMES[sym]}) missing data!')
            continue
        name = NAMES[sym]
        data = E[sym]
        obj = json.dumps(data, indent=2, ensure_ascii=False)
        out.append(f"// {sym} — {name}\n")
        out.append(f"P6_LEGAL['{sym}'] = {obj};\n\n")
    out.append(FOOTER)
    return '\n'.join(out)


if __name__ == '__main__':
    js = generate_js()
    with open(OUTPUT, 'w', encoding='utf-8') as f:
        f.write(js)
    print(f'Generated: {OUTPUT}')
    print(f'Elements: {len(E)}')
