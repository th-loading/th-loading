function i(t) {
    null == t || t.Count;
    for (var e = [], i = t.length, o = 0; o < i; o++) {
        var r = t[o].split(","),
            s = a();
        s.time = r[0], s.open = parseFloat(r[1]), s.close = parseFloat(r[2]), s.high = parseFloat(r[3]), s.low = parseFloat(r[4]), s.volume = Number(r[5]), e.push(s)
    }
    for (var l, h, d, c, p, g, f, A, u, m, C, v, I, y, x, b, w, M, k, T, D, R, E, S, _, O, j, B, L, N, G = !0, W = 0, F = 0, o = 0; o < i; o++) {
        if (o >= 4) {
            l = 0, h = 0;
            //o 代表数据的编号 e包含了所有的close 和 volume
            for (P = 0; P < 5; P++) l += e[o - P].close, h += e[o - P].volume;
            e[o].Average5 = l / 5, e[o].volume5 = h / 5
        }
        if (o >= 9) {
            l = 0, h = 0;
            for (P = 0; P < 10; P++) l += e[o - P].close, h += e[o - P].volume;
            e[o].Average10 = l / 10, e[o].volume10 = h / 10
        }
        if (o >= 19) {
            l = 0;
            for (P = 0; P < 20; P++) l += e[o - P].close;
            e[o].Average20 = l / 20
        }
        if (o >= 29) {
            l = 0;
            for (P = 0; P < 30; P++) l += e[o - P].close;
            e[o].Average30 = l / 30
        }
        if (o >= 2) {
            l = 0;
            for (P = 0; P < 3; P++) l += e[o - P].close;
            e[o].Average3 = l / 3
        }
        if (o >= 5) {
            l = 0;
            for (P = 0; P < 6; P++) l += e[o - P].close;
            e[o].Average6 = l / 6
        }
        if (o >= 11) {
            l = 0;
            for (P = 0; P < 12; P++) l += e[o - P].close;
            e[o].Average12 = l / 12
        }
        if (o >= 23) {
            l = 0;
            for (P = 0; P < 24; P++) l += e[o - P].close;
            e[o].Average24 = l / 24
        }
        if (o >= 49) {
            l = 0;
            for (P = 0; P < 50; P++) l += e[o - P].close;
            e[o].Average50 = l / 50
        }
        if (o >= 59) {
            l = 0;
            for (P = 0; P < 60; P++) l += e[o - P].close;
            e[o].Average60 = l / 60
        }
        //计算BIAS_A = 
        if (o >= 1 && (d = e[o - 1].close, c = Math.abs(e[o].high - d), p = Math.abs(e[o].low - d), g = Math.abs(e[o].high - e[o - 1].low), f = Math.abs(d - e[o - 1].open), A = c > p && c > g ? c + p / 2 + f / 4 : p > g && p > c ? p + c / 2 + f / 4 : g + f / 4, u = e[o].close + (e[o].close - e[o].open) / 2 - e[o - 1].open, 0 != A && (e[o].ASI = e[o - 1].ASI + 16 * u / A * Math.max(c, p))), o >= 5) {
            l = 0;
            for (P = 0; P < 6; P++) l += e[o - P].close;
            0 != l && (e[o].BIAS_A = 100 * (e[o].close / (l / 6) - 1))
        }
        if (o >= 11) {
            l = 0;
            for (P = 0; P < 12; P++) l += e[o - P].close;
            0 != l && (e[o].BIAS_B = 100 * (e[o].close / (l / 12) - 1))
        }
        if (o >= 23) {
            l = 0;
            for (P = 0; P < 24; P++) l += e[o - P].close;
            0 != l && (e[o].BIAS_C = 100 * (e[o].close / (l / 24) - 1))
        }
        if (o >= 19) {
            l = 0;
            for (P = 0; P < 20; P++) l += e[o - P].close;
            e[o].BOLL = l / 20, l = 0;
            for (P = 0; P < 20; P++) l += (e[o - P].close - e[o].BOLL) * (e[o - P].close - e[o].BOLL);
            m = parseFloat(Math.sqrt(l / 20)), e[o].BOLL_UPPER = e[o].BOLL + 2 * m, e[o].BOLL_LOWER = e[o].BOLL - 2 * m
        }
        if (e[o].CCI_TYP = (e[o].high + e[o].low + e[o].close) / 3, o >= 13) {
            l = 0;
            for (P = 0; P < 14; P++) l += e[o - P].close;
            l / 14, l = 0;
            for (P = 0; P < 14; P++) l += e[o - P].CCI_TYP;
            C = l / 14, l = 0;
            for (P = 0; P < 14; P++) l += Math.abs(e[o - P].CCI_TYP - C);
            0 != l && (e[o].CCI = (e[o].CCI_TYP - C) / (l / 14 * .015))
        }
        if (e[o].CR_MID = (e[o].high + e[o].low) / 2, 0 == o) e[o].CR = 100, e[o].CR_AX = Math.max(e[o].high - e[o].CR_MID, 0), e[o].CR_BX = Math.max(e[o].CR_MID - e[o].low, 0);
        else {
            e[o].CR_AX = Math.max(e[o].high - e[o - 1].CR_MID, 0), e[o].CR_BX = Math.max(e[o - 1].CR_MID - e[o].low, 0), v = I = 0;
            for (P = 0; P < 26 && P < o + 1; P++) v += e[o - P].CR_AX, I += e[o - P].CR_BX;
            if (0 != I && (e[o].CR = v / I * 100), o >= 9) {
                l = 0;
                for (P = 0; P < 10; P++) l += e[o - P].CR;
                o + 5 < e.Length && (e[o + 5].CR_A = l / 10)
            }
            if (o >= 19) {
                l = 0;
                for (P = 0; P < 20; P++) l += e[o - P].CR;
                o + 9 < e.Length && (e[o + 9].CR_B = l / 20)
            }
            if (o >= 39) {
                l = 0;
                for (P = 0; P < 40; P++) l += e[o - P].CR;
                o + 17 < e.Length && (e[o + 17].CR_C = l / 40)
            }
        }
        if (0 == o ? (e[o].DMI_TR = Math.max(Math.max(e[o].high - e[o].low, Math.abs(e[o].high - e[o].close)), Math.abs(e[o].close - e[o].low)), y = 0, x = 0) : (e[o].DMI_TR = Math.max(Math.max(e[o].high - e[o].low, Math.abs(e[o].high - e[o - 1].close)), Math.abs(e[o - 1].close - e[o].low)), y = e[o].high - e[o - 1].high, x = e[o - 1].low - e[o].low), e[o].DMI_DMP = y > 0 && y > x ? y : 0, e[o].DMI_DMM = x > 0 && x > y ? x : 0, o >= 13) {
            if (13 == o) {
                b = w = M = 0;
                for (P = 0; P < 14; P++) b += e[o - P].DMI_TR, w += e[o - P].DMI_DMP, M += e[o - P].DMI_DMM;
                e[o].DMI_EXPMEMA_TR = b / 14, e[o].DMI_EXPMEMA_DMP = w / 14, e[o].DMI_EXPMEMA_DMM = M / 14
            } else e[o].DMI_EXPMEMA_TR = (2 * e[o].DMI_TR + 13 * e[o - 1].DMI_EXPMEMA_TR) / 15, e[o].DMI_EXPMEMA_DMP = (2 * e[o].DMI_DMP + 13 * e[o - 1].DMI_EXPMEMA_DMP) / 15, e[o].DMI_EXPMEMA_DMM = (2 * e[o].DMI_DMM + 13 * e[o - 1].DMI_EXPMEMA_DMM) / 15;
            0 != e[o].DMI_EXPMEMA_TR && (e[o].DMI_PDI = 100 * e[o].DMI_EXPMEMA_DMP / e[o].DMI_EXPMEMA_TR, e[o].DMI_MDI = 100 * e[o].DMI_EXPMEMA_DMM / e[o].DMI_EXPMEMA_TR, e[o].DMI_PDI + e[o].DMI_MDI != 0 && (e[o].DMI_MPDI = Math.abs(e[o].DMI_MDI - e[o].DMI_PDI) / (e[o].DMI_MDI + e[o].DMI_PDI) * 100))
        }
        if (o >= 18)
            if (18 == o) {
                k = 0;
                for (P = 0; P < 6; P++) k += e[o - P].DMI_MPDI;
                e[o].DMI_ADX = k / 6
            } else e[o].DMI_ADX = (2 * e[o].DMI_MPDI + 5 * e[o - 1].DMI_ADX) / 7;
        if (o >= 23)
            if (23 == o) {
                T = 0;
                for (P = 0; P < 6; P++) T += e[o - P].DMI_ADX;
                e[o].DMI_ADXR = T / 6
            } else e[o].DMI_ADXR = (2 * e[o].DMI_ADX + 5 * e[o - 1].DMI_ADXR) / 7;
        D = e[o].low, R = e[o].high;
        for (P = 0; P < 9 && P < o + 1; P++) R < e[o - P].high && (R = e[o - P].high), D > e[o - P].low && (D = e[o - P].low);
        if (R != D && (e[o].KDJ_RSV = (e[o].close - D) / (R - D) * 100), 0 == o ? (e[o].KDJ_K = e[o].KDJ_RSV, e[o].KDJ_D = e[o].KDJ_RSV, e[o].KDJ_J = e[o].KDJ_RSV) : (e[o].KDJ_K = e[o].KDJ_RSV / 3 + 2 * e[o - 1].KDJ_K / 3, e[o].KDJ_D = e[o].KDJ_K / 3 + 2 * e[o - 1].KDJ_D / 3, e[o].KDJ_J = 3 * e[o].KDJ_K - 2 * e[o].KDJ_D), 0 == o ? (e[o].MACD_AX = e[o].close, e[o].MACD_BX = e[o].close, e[o].MACD_DIF = 0, e[o].MACD_DEA = 0) : (e[o].MACD_AX = (2 * e[o].close + 11 * e[o - 1].MACD_AX) / 13, e[o].MACD_BX = (2 * e[o].close + 25 * e[o - 1].MACD_BX) / 27, e[o].MACD_DIF = e[o].MACD_AX - e[o].MACD_BX, e[o].MACD_DEA = (2 * e[o].MACD_DIF + 8 * e[o - 1].MACD_DEA) / 10), o > 0 && (e[o].close > e[o - 1].close ? e[o].OBV = e[o - 1].OBV + e[o].volume : e[o].close < e[o - 1].close ? e[o].OBV = e[o - 1].OBV - e[o].volume : e[o].OBV = e[o - 1].OBV, o >= 29)) {
            E = 0;
            for (P = 0; P < 30; P++) E += e[o - P].OBV;
            e[o].OBV_MA = E / 30
        }
        if (S = Math.min(11, o), 0 != e[o - S].close && (e[o].ROC = 100 * (e[o].close / e[o - S].close - 1)), o >= 5) {
            l = 0;
            for (P = 0; P < 6; P++) l += e[o - P].ROC;
            e[o].ROC_MA = l / 6
        }
        if (o > 0 && (_ = Math.max(e[o].close - e[o - 1].close, 0), O = Math.abs(e[o].close - e[o - 1].close), 1 == o ? (e[o].RSI_UP_A = _, e[o].RSI_DN_A = O, e[o].RSI_UP_B = _, e[o].RSI_DN_B = O, e[o].RSI_UP_C = _, e[o].RSI_DN_C = O) : (e[o].RSI_UP_A = _ + 5 * e[o - 1].RSI_UP_A / 6, e[o].RSI_DN_A = O + 5 * e[o - 1].RSI_DN_A / 6, e[o].RSI_UP_B = _ + 11 * e[o - 1].RSI_UP_B / 12, e[o].RSI_DN_B = O + 11 * e[o - 1].RSI_DN_B / 12, e[o].RSI_UP_C = _ + 23 * e[o - 1].RSI_UP_C / 24, e[o].RSI_DN_C = O + 23 * e[o - 1].RSI_DN_C / 24)), 3 == o) {
            if (G) {
                F = e[o].high;
                for (P = 0; P < 4; P++) F < e[o - P].high && (F = e[o - P].high);
                W = e[o].low;
                for (P = 0; P < 4; P++) W > e[o - P].low && (W = e[o - P].low);
                e[o].SAR = W, e[o].SAR_RED = !0, .02, G = !1
            }
        } else o > 3 && n(o, e);
        j = B = L = 0;
        for (P = 0; P < 26 && P < o + 1; P++) o >= P + 1 ? e[o - P].close > e[o - P - 1].close ? j += e[o - P].volume : e[o - P].close < e[o - P - 1].close ? B += e[o - P].volume : L += e[o - P].volume : (j += e[o - P].volume / 3, B += e[o - P].volume / 3, L += e[o - P].volume / 3);
        if (2 * B + L != 0 && (e[o].VR = 100 * (2 * j + L) / (2 * B + L)), o >= 5) {
            N = 0;
            for (P = 0; P < 6; P++) N += e[o - P].VR;
            e[o].VR_MA = N / 6
        }
        D = e[o].low, R = e[o].high;
        for (P = 0; P < 10 && P < o + 1; P++) R < e[o - P].high && (R = e[o - P].high), D > e[o - P].low && (D = e[o - P].low);
        R != D && (e[o].WR_A = 100 * (R - e[o].close) / (R - D)), D = e[o].low, R = e[o].high;
        for (var P = 0; P < 6 && P < o + 1; P++) R < e[o - P].high && (R = e[o - P].high), D > e[o - P].low && (D = e[o - P].low);
        R != D && (e[o].WR_B = 100 * (R - e[o].close) / (R - D)), o >= 23 && (e[o].BBI = (e[o].Average3 + e[o].Average6 + e[o].Average12 + e[o].Average24) / 4)
    }
    return e
}