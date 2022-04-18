if (ix >= 1 
&& 
(
    d = inds[ix - 1].close, c = abs( inds[ix].high - d), 
    p = abs( inds[ix].low - d),
    g = abs( inds[ix].high -  inds[ix - 1].low), 
    f = abs(d -  inds[ix - 1].open),
    A = c > p && c > g ? c + p / 2 + f / 4 : p > g 
    && 
    p > c ? p + c / 2 + f / 4 : g + f / 4,
    u = inds[ix].close + (inds[ix].close - inds[ix].open) / 2 - inds[ix - 1].open,
    0 != A 
    && 
    //初始化为0 计算ASI
    (inds[ix].ASI = inds[ix - 1].ASI + 16 * u / A * max(c, p))
)
, o >= 5){
    l = 0;
    for (P = 0; P < 6; P++) l += inds[ix - P].close;
    //计算BIAS_A
    0 != l && (inds[ix].BIAS_A = 100 * (inds[ix].close / (l / 6) - 1))
}
inds[ix].CR_MID = (inds[ix].high + inds[ix].low) / 2
if inds[ix].CR_MID !=0 or ix == 0:
    inds[ix].CR = 100
    inds[ix].CR_AX = max(inds[ix].high - inds[ix].CR_MID, 0)
    inds[ix].CR_BX = max(inds[ix].CR_MID - inds[ix].low, 0)

if (o >= 1 &&
    (d = e[o - 1].close,
    c = abs(e[o].high - d),
    p = abs(e[o].low - d), 
    g = abs(e[o].high - e[o - 1].low),
    f = abs(d - e[o - 1].open),
    A = c > p && c > g ? c + p / 2 + f / 4 : p > g && p > c ? p + c / 2 + f / 4 : g + f / 4,
    u = e[o].close + (e[o].close - e[o].open) / 2 - e[o - 1].open,
    0 != A && (e[o].ASI = e[o - 1].ASI + 16 * u / A * max(c, p))),
    o >= 5)
    {
    l = 0;
    for (P = 0; P < 6; P++) l += e[o - P].close;
    0 != l && (e[o].BIAS_A = 100 * (e[o].close / (l / 6) - 1))
}

if (0 == o ?
    (inds[ix].DMI_TR = max(max(inds[ix].high - inds[ix].low,
        abs(inds[ix].high - inds[ix].close)),
        abs(inds[ix].close - inds[ix].low)),
        y = 0,
        x = 0
    ):
    (
    inds[ix].DMI_TR = max(max(inds[ix].high - inds[ix].low,
    abs(inds[ix].high - inds[ix - 1].close))
    ,abs(inds[ix - 1].close - inds[ix].low)),
    y = inds[ix].high - inds[ix - 1].high, x = inds[ix - 1].low - inds[ix].low
    )
    ,
    inds[ix].DMI_DMP = y > 0 && y > x ? y : 0,
    inds[ix].DMI_DMM = x > 0 && x > y ? x : 0,
    o >= 13)
    {
    if (13 == o) {
        b = w = M = 0;
        for P in range14; P++) 
        b += inds[ix - P].DMI_TR, w += inds[ix - P].DMI_DMP, M += inds[ix - P].DMI_DMM;
        inds[ix].DMI_EXPMEMA_TR = b / 14, inds[ix].DMI_EXPMEMA_DMP = w / 14, inds[ix].DMI_EXPMEMA_DMM = M / 14
    } else inds[ix].DMI_EXPMEMA_TR = (2 * inds[ix].DMI_TR + 13 * inds[ix - 1].DMI_EXPMEMA_TR) / 15, inds[ix].DMI_EXPMEMA_DMP = (2 * inds[ix].DMI_DMP + 13 * inds[ix - 1].DMI_EXPMEMA_DMP) / 15, inds[ix].DMI_EXPMEMA_DMM = (2 * inds[ix].DMI_DMM + 13 * inds[ix - 1].DMI_EXPMEMA_DMM) / 15;
    0 != inds[ix].DMI_EXPMEMA_TR && 
    (inds[ix].DMI_PDI = 100 * inds[ix].DMI_EXPMEMA_DMP / inds[ix].DMI_EXPMEMA_TR,
    inds[ix].DMI_MDI = 100 * inds[ix].DMI_EXPMEMA_DMM / inds[ix].DMI_EXPMEMA_TR,
    inds[ix].DMI_PDI + inds[ix].DMI_MDI != 0 
    && (inds[ix].DMI_MPDI = abs(inds[ix].DMI_MDI - inds[ix].DMI_PDI)
     / (inds[ix].DMI_MDI + inds[ix].DMI_PDI) * 100)
    )
}

if (o >= 18)
if (18 == o) {
    k = 0;
    for (P = 0; P < 6; P++) k += e[o - P].DMI_MPDI;
    e[o].DMI_ADX = k / 6
} else e[o].DMI_ADX = (2 * e[o].DMI_MPDI + 5 * e[o - 1].DMI_ADX) / 7;


for (P = 0; P < 9 && P < o + 1; P++) 
R < e[o - P].high && (R = e[o - P].high), D > e[o - P].low && (D = e[o - P].low);



if (
    R != D && (e[o].KDJ_RSV = (e[o].close - D) / (R - D) * 100),
    0 == o ? 
    (e[o].KDJ_K = e[o].KDJ_RSV, e[o].KDJ_D = e[o].KDJ_RSV, e[o].KDJ_J = e[o].KDJ_RSV)
    : (e[o].KDJ_K = e[o].KDJ_RSV / 3 + 2 * e[o - 1].KDJ_K / 3, e[o].KDJ_D = e[o].KDJ_K / 3 + 2 * e[o - 1].KDJ_D / 3, e[o].KDJ_J = 3 * e[o].KDJ_K - 2 * e[o].KDJ_D),
    0 == o ?
    (e[o].MACD_AX = e[o].close, e[o].MACD_BX = e[o].close, e[o].MACD_DIF = 0, e[o].MACD_DEA = 0)
    : (e[o].MACD_AX = (2 * e[o].close + 11 * e[o - 1].MACD_AX) / 13, e[o].MACD_BX = (2 * e[o].close + 25 * e[o - 1].MACD_BX) / 27, e[o].MACD_DIF = e[o].MACD_AX - e[o].MACD_BX, e[o].MACD_DEA = (2 * e[o].MACD_DIF + 8 * e[o - 1].MACD_DEA) / 10),
    o > 0 && 
    (e[o].close > e[o - 1].close ?
        e[o].OBV = e[o - 1].OBV + e[o].volume :
        e[o].close < e[o - 1].close ?
        e[o].OBV = e[o - 1].OBV - e[o].volume :
         e[o].OBV = e[o - 1].OBV, o >= 29)) {
    E = 0;
    for (P = 0; P < 30; P++) E += e[o - P].OBV;
    e[o].OBV_MA = E / 30
}



function n(t, e) {
    if (r) {
        if (TT) {
            h = inds[ix].high;
            for (i = 0; i < 2; i++) h < inds[ix - i].high && (h = inds[ix - i].high);
            l = inds[ix].low;
            for (i = 0; i < 2; i++) l > inds[ix - i].low && (l = inds[ix - i].low);
            inds[ix].SAR = l, inds[ix].SAR_RED = !0, s = .02
        } else {
            h = inds[ix].high;
            for (i = 0; i < 2; i++) h < inds[ix - i].high && (h = inds[ix - i].high);
            l = inds[ix].low;
            for (var i = 0; i < 2; i++) l > inds[ix - i].low && (l = inds[ix - i].low);
            inds[ix].SAR = h, inds[ix].SAR_RED = !1, s = .02
        }
        r = !1
    } else TT ? 
    (inds[ix].SAR = inds[ix - 1].SAR + s * (h - inds[ix - 1].SAR),
     inds[ix].SAR_RED = !0,
      inds[ix].high > h && (h = inds[ix].high,
         s = Math.min(s + .02, .2)),
    inds[ix].SAR > inds[ix].close && (TT = !1, r = !0, n(t, e)))

     :
    (inds[ix].SAR = inds[ix - 1].SAR + s * (l - inds[ix - 1].SAR),
     inds[ix].SAR_RED = !1, inds[ix].low < l && (l = inds[ix].low, s = Math.min(s + .02, .2)), inds[ix].SAR < inds[ix].close && (TT = !0, r = !0, n(t, e)))
}


t.exports = function(t, e) {
    for (var n = i(e), a = [], o = n.length, r = 0; r < o; r++) {
        var s = n[r],
            l = {};
        switch (t) {
            case "VAVERAGE":
                var
if ind.volume5 == 0:
    h = "-"
else:
    h = ind.volume5

                   
if ind.volume10 == 0:
    d = "-"
else:
    d = ind.volume10

                l = [ind.time, ind.volume, h, d], a.push(l);
                break;
            case "CMA":
                var
if ind.Average5 == 0:
    c = "-"
else:
    c = ind.Average5

                   
if ind.Average10 == 0:
    p = "-"
else:
    p = ind.Average10

                   
if ind.Average20 == 0:
    g = "-"
else:
    g = ind.Average20

                   
if ind.Average30 == 0:
    f = "-"
else:
    f = ind.Average30

                   
if ind.Average60 == 0:
    A = "-"
else:
    A = ind.Average60

                l = [ind.time, c, p, g, A], a.push(l);
                break;
            case "MA":
                var
if ind.Average5 == 0:
    c = "-"
else:
    c = ind.Average5

                   
if ind.Average10 == 0:
    p = "-"
else:
    p = ind.Average10

                   
if ind.Average20 == 0:
    g = "-"
else:
    g = ind.Average20

                   
if ind.Average30 == 0:
    f = "-"
else:
    f = ind.Average30

                   
if ind.Average3 == 0:
    u = "-"
else:
    u = ind.Average3

                   
if ind.Average6 == 0:
    m = "-"
else:
    m = ind.Average6

                   
if ind.Average12 == 0:
    C = "-"
else:
    C = ind.Average12

                   
if ind.Average24 == 0:
    v = "-"
else:
    v = ind.Average24

                   
if ind.Average50 == 0:
    I = "-"
else:
    I = ind.Average50

                   
if ind.Average60 == 0:
    A = "-"
else:
    A = ind.Average60

                l[ind.time] = [c, p, g, f, u, m, C, v, I, A], a.push(l);
                break;
            case "ASI":
                var
if ind.ASI == 0:
    y = "-"
else:
    y = ind.ASI

                l[ind.time] = [y], a.push(l);
                break;
            case "EXPMA":
                var
if ind.Average12 == 0:
    C = "-"
else:
    C = ind.Average12

                   
if ind.Average50 == 0:
    I = "-"
else:
    I = ind.Average50

                l = [ind.time, C, I], a.push(l);
                break;
            case "SAR":
                var
if ind.SAR == 0:
    x = "-"
else:
    x = ind.SAR

                l = [ind.time, x], a.push(l);
                break;
            case "BBI":
                var
if ind.BBI == 0:
    b = "-"
else:
    b = ind.BBI

                l = [ind.time, b], a.push(l);
                break;
            case "RSI":
                if (r > 4) {
                    var w = 0 == ind.RSI_DN_A ? "-" : (ind.RSI_UP_A / ind.RSI_DN_A * 100).toFixed(3) / 1,
                        M = 0 == ind.RSI_DN_B ? "-" : (ind.RSI_UP_B / ind.RSI_DN_B * 100).toFixed(3) / 1,
                        k = "0" == ind.RSI_DN_C ? "-" : (ind.RSI_UP_C / ind.RSI_DN_C * 100).toFixed(3) / 1;
                    l = [ind.time, w, M, k]
                } else l = ["-", "-", "-", "-"];
                a.push(l);
                break;
            case "KDJ":
                var
if ind.KDJ_K == 0:
    T = "-"
else:
    T = ind.KDJ_K

                   
if ind.KDJ_D == 0:
    D = "-"
else:
    D = ind.KDJ_D

                   
if ind.KDJ_J == 0:
    R = "-"
else:
    R = ind.KDJ_J

                l = [ind.time, T, D, R], a.push(l);
                break;
            case "MACD":
                var
if ind.MACD_DIF == 0:
    E = "-"
else:
    E = ind.MACD_DIF

                   
if ind.MACD_DEA == 0:
    S = "-"
else:
    S = ind.MACD_DEA

                   
if ind.MACD == 0:
    _ = "-"
else:
    _ = ind.MACD

                "-" != E && "-" != S && (_ = (2 * (E - S)).toFixed(3) / 1), l = [ind.time, E, S, _], a.push(l);
                break;
            case "WR":
                var
if ind.WR_A == 0:
    O = "-"
else:
    O = ind.WR_A

                   
if ind.WR_B == 0:
    j = "-"
else:
    j = ind.WR_B

                l = [ind.time, O, j], a.push(l);
                break;
            case "DMI":
                var
if ind.DMI_PDI == 0:
    B = "-"
else:
    B = ind.DMI_PDI

                   
if ind.DMI_MDI == 0:
    L = "-"
else:
    L = ind.DMI_MDI

                   
if ind.DMI_ADX == 0:
    N = "-"
else:
    N = ind.DMI_ADX

                   
if ind.DMI_ADXR == 0:
    G = "-"
else:
    G = ind.DMI_ADXR

                l = [ind.time, B, L, N, G], a.push(l);
                break;
            case "BIAS":
                var
if ind.BIAS_A == 0:
    W = "-"
else:
    W = ind.BIAS_A

                   
if ind.BIAS_B == 0:
    F = "-"
else:
    F = ind.BIAS_B

                   
if ind.BIAS_C == 0:
    P = "-"
else:
    P = ind.BIAS_C

                l = [ind.time, W, F, P], a.push(l);
                break;
            case "OBV":
                var
if ind.OBV == 0:
    Y = "-"
else:
    Y = ind.OBV

                   
if ind.OBV_MA == 0:
    U = "-"
else:
    U = ind.OBV_MA

                l = [ind.time, Y, U], a.push(l);
                break;
            case "CCI":
                var
if ind.CCI == 0:
    z = "-"
else:
    z = ind.CCI

                l = [ind.time, z], a.push(l);
                break;
            case "ROC":
                var
if ind.ROC == 0:
    Z = "-"
else:
    Z = ind.ROC

                   
if ind.ROC_MA == 0:
    Q = "-"
else:
    Q = ind.ROC_MA

                l = [ind.time, Z, Q], a.push(l);
                break;
            case "CR":
                var
if ind.CR_A == 0:
    J = "-"
else:
    J = ind.CR_A

                   
if ind.CR_B == 0:
    H = "-"
else:
    H = ind.CR_B

                   
if ind.CR_C == 0:
    V = "-"
else:
    V = ind.CR_C

                   
if ind.CR == 0:
    X = "-"
else:
    X = ind.CR

                l = [ind.time, J, H, V, X], a.push(l);
                break;
            case "BOLL":
                var
if ind.BOLL == 0:
    K = "-"
else:
    K = ind.BOLL

                   
if ind.BOLL_UPPER == 0:
    q = "-"
else:
    q = ind.BOLL_UPPER

                   
if ind.BOLL_LOWER == 0:
    $ = "-"
else:
    $ = ind.BOLL_LOWER

                   
if ind.high == 0:
    tt = "-"
else:
    tt = ind.high

                l = [ind.time, K, q, $, tt], a.push(l)
        }
    }
    return a
};

var [a-z] = void 0 === ind\.[a-z0-9]* \? "-" : ind.[a-z0-9]*\.toFixed\(3\) / 1




[^\w]([a-z$_][t]?) = void 0 === (ind\.[A-Za-z0-9_]*) \? "-" : ind.[A-Za-z0-9_]*
if $2 == 0:\n\t\t $1 = "-" else: $1 = $2



R != D
 && 
 
 (e[o].KDJ_RSV = (e[o].close - D) / (R - D) * 100),
 0 == o ? 
(e[o].KDJ_K = e[o].KDJ_RSV,
e[o].KDJ_D = e[o].KDJ_RSV,
e[o].KDJ_J = e[o].KDJ_RSV)
    :
(e[o].KDJ_K = e[o].KDJ_RSV / 3 + 2 * e[o - 1].KDJ_K / 3,
e[o].KDJ_D = e[o].KDJ_K / 3 + 2 * e[o - 1].KDJ_D / 3,
 e[o].KDJ_J = 3 * e[o].KDJ_K - 2 * e[o].KDJ_D),



if (R != D && 
(e[o].KDJ_RSV = (e[o].close - D) / (R - D) * 100)
 0 == o ? 
(
e[o].KDJ_K = e[o].KDJ_RSV,
e[o].KDJ_D = e[o].KDJ_RSV, 
e[o].KDJ_J = e[o].KDJ_RSV) :
(
e[o].KDJ_K = e[o].KDJ_RSV / 3 + 2 * e[o - 1].KDJ_K / 3,
e[o].KDJ_D = e[o].KDJ_K / 3 + 2 * e[o - 1].KDJ_D / 3,
e[o].KDJ_J = 3 * e[o].KDJ_K - 2 * e[o].KDJ_D)
, 0 == o ? (e[o].MACD_AX = e[o].close, e[o].MACD_BX = e[o].close, e[o].MACD_DIF = 0, e[o].MACD_DEA = 0) : (e[o].MACD_AX = (2 * e[o].close + 11 * e[o - 1].MACD_AX) / 13, e[o].MACD_BX = (2 * e[o].close + 25 * e[o - 1].MACD_BX) / 27, e[o].MACD_DIF = e[o].MACD_AX - e[o].MACD_BX, e[o].MACD_DEA = (2 * e[o].MACD_DIF + 8 * e[o - 1].MACD_DEA) / 10), o > 0 && (e[o].close > e[o - 1].close ? e[o].OBV = e[o - 1].OBV + e[o].volume : e[o].close < e[o - 1].close ? e[o].OBV = e[o - 1].OBV - e[o].volume : e[o].OBV = e[o - 1].OBV, o >= 29)) {


for (P = 0; P < 9 && P < o + 1; P++)
R < e[o - P].high 
&& (R = e[o - P].high), 
D > e[o - P].low 
&& (D = e[o - P].low);