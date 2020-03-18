/**
 * 封装操作localStorage的对象，包含设置（set）、获取（get）、删除（remove）、清空（clear）等方法
 */
export const localStore = {
    /**
     * 设置localStorage的方法
     * @param {String} key - 键，必传
     * @param {Object | String | Number | Boolean} value - 值，必传
     * @param {Number} time - 过期时间（单位秒），选传，默认值0（不过期）
     */
    set(key, value, time = 0) {
        let expiringDate = time === 0 ? 0 : new Date().getTime() + time * 1000;
        if (typeof value === 'object') {
            value = JSON.stringify(value);
            value = 'obj-' + value;
        } else {
            value = 'str-' + value;
        }
        value = JSON.stringify({
            data: value,
            time: expiringDate,
        });
        window.localStorage.setItem(key, value);
    },
    /**
     * 获取localStorage的方法
     * @param {String} key - 键，必传
     * @return {Object | String}
     */
    get(key) {
        let ls = window.localStorage.getItem(key);
        if (!ls) {
            return;
        } else {
            let store = JSON.parse(ls);
            let value = store.data;
            let time = +store.time;
            if (time !== 0 && new Date().getTime() - time > 0) {
                window.localStorage.removeItem(key);
                return undefined;
            } else {
                if (value.indexOf('obj-') === 0) {
                    value = value.slice(4);
                    return JSON.parse(value);
                } else if (value.indexOf('str-') === 0) {
                    return value.slice(4);
                }
            }
        }
    },
    /**
     * 删除localStorage的方法
     * @param {String} key - 键，必传
     */
    remove(key) {
        if (!key) {
            return;
        }
        window.localStorage.removeItem(key);
    },
    /**
     * 清空localStorage的方法
     */
    clear() {
        window.localStorage.clear();
    },
};

/**
 * 封装操作sessionStorage的对象，包含设置（set）、获取（get）、删除（remove）、清空（clear）等方法
 */
export const sessionStore = {
    /**
     * 设置sessionStorage的方法
     * @param {String} key - 键，必传
     * @param {Object | String | Number | Boolean} value - 值，必传
     */
    set(key, value) {
        if (typeof value === 'object') {
            value = JSON.stringify(value);
            value = 'obj-' + value;
        } else {
            value = 'str-' + value;
        }
        window.sessionStorage.setItem(key, value);
    },
    /**
     * 获取sessionStorage的方法
     * @param {String} key - 键，必传
     * @return {Object | String}
     */
    get(key) {
        var value = window.sessionStorage.getItem(key);
        if (!value) {
            return;
        }
        if (value.indexOf('obj-') === 0) {
            value = value.slice(4);
            return JSON.parse(value);
        } else if (value.indexOf('str-') === 0) {
            return value.slice(4);
        }
    },

    /**
     * 删除sessionStorage的方法
     * @param {String} key - 键，必传
     */
    remove(key) {
        if (!key) {
            return;
        }
        window.sessionStorage.removeItem(key);
    },

    /**
     * 清空sessionStorage的方法
     */
    clear() {
        window.sessionStorage.clear();
    },
};

/**
 * 封装操作cookie的对象，包含设置（set）、获取（get）、删除（remove）、清空（clear）等方法
 */
export const cookieStore = {
    /**
     * 设置cookie的方法
     */
    set(name, value, iDay) {
        let oDate = new Date();
        let hostname = location.hostname;
        let domain;
        iDay = iDay || 30;
        oDate.setDate(oDate.getDate() + iDay); // 设置Date对象内部时间，iDay表示几天后。
        domain = hostname.substring(hostname.indexOf('.'), hostname.length);
        document.cookie =
            name +
            '=' +
            encodeURIComponent(value) +
            '; expires=' +
            oDate.toUTCString() +
            '; path=/; domain=' +
            domain;
    },

    /**
     * 获取cookie的方法
     */
    get(name) {
        var arr = document.cookie.split('; '); // cookie是以键值对形式存在，用“分号空格” 隔开的，比如 a=1; b=2 ; c=3;
        for (var i = 0, len = arr.length; i < len; i++) {
            var arr2 = arr[i].split('=');
            if (arr2[0] === name) {
                return decodeURIComponent(arr2[1]);
            }
        }
        return ''; // 遍历完都没找到cookie,返回空字符串
    },

    /**
     * 删除某个cookie的方法
     */
    remove(name) {
        this.set(name, '', -1); // 设置一个过去的时间即可
    },

    /**
     * 清空cookie的方法
     */
    clear() {
        var keys = document.cookie.match(/[^ =;]+(?=\=)/g);
        if (keys) {
            for (var i = keys.length; i--;) {
                document.cookie = keys[i] + '=0;expires=' + new Date(0).toUTCString();
            }
        }
    },
};

export const browser = (() => {
    let u = navigator.userAgent;
    let phoneOrPc = !!u.match(
        /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i,
    );
    let browserType = {
        trident: u.indexOf('Trident') > -1, // IE内核
        presto: u.indexOf('Presto') > -1, // opera内核
        webKit: u.indexOf('AppleWebKit') > -1, // 苹果、谷歌内核
        gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') === -1, // 火狐内核
        mobile: !!u.match(/AppleWebKit.*Mobile.*/), // 是否为移动终端
        ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), // ios终端
        android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, // android终端或者uc浏览器
        iPhone: u.indexOf('iPhone') > -1, // 是否为iPhone或者QQHD浏览器
        iPad: u.indexOf('iPad') > -1, // 是否iPad
        webApp: u.indexOf('Safari') === -1, // 是否web应该程序，没有头部与底部
        weixin: u.indexOf('MicroMessenger') > -1, // 是否微信 （2015-01-22新增）
        qq: u.match(/\sQQ/i) === 'qq', // 是否QQ
        phone: phoneOrPc, // 移动端
        pc: !phoneOrPc, // PC端
    };
    return browserType;
})();

/**
 * 去除字符串两端空格
 * @param {String} str - 需要处理的字符串
 */
export const strTrim = (str) => {
    const reg = new RegExp(
        '(^[\\s\\t\\xa0\\u3000]+)|([\\u3000\\xa0\\s\\t]+\x24)',
        'g',
    );
    return str.replace(reg, '');
};

/**
 * 获取值
 * @param {Object} object - 查找对象
 * @param {String} prop - 查找属性
 */
export const getValueByPath = function(object, prop) {
    prop = prop || '';
    const paths = prop.split('.');
    let current = object;
    let result = null;
    for (let i = 0, j = paths.length; i < j; i++) {
        const path = paths[i];
        if (!current) break;
        if (i === j - 1) {
            result = current[path];
            break;
        }
        current = current[path];
    }
    return result;
};

/**
 * 判断是否是VNode
 * @param {Object} node
 * @returns Boolean
 */
export const isVNode = function(node) {
    return (
        typeof node === 'object' &&
        Object.prototype.hasOwnProperty.call(node, 'componentOptions')
    );
};

/**
 * 树状结构数组扁平化
 * @param {Array} Arr  传入的树状结构的数组
 * @param {key} key 需要平扁化的 key
 * @returns Boolean
 */
export const flattenTree = function(Arr, key) {
    let arr = [];

    function cycle(data) {
        let i = 0;
        let len = data.length;
        for (; i < len; i++) {
            let obj = {};
            for (let k in data[i]) {
                if (k !== key) {
                    obj[k] = data[i][k];
                } else {
                    if (data[i][k].length > 0) {
                        cycle(data[i][k]);
                    }
                }
            }
            arr.push(obj);
        }
    }
    cycle(Arr);
    return arr;
};

/**
 * 浮点数运算
 */
export const floatOpration = {
    /**
     * 加法运输，避免数据相加小数点后产生多位数和计算精度损失
     * @param {Number} num1 - 键，必传
     * @param {Number} num1 - 值，必传
     */
    add(num1, num2) {
        let baseNum, baseNum1, baseNum2;
        try {
            baseNum1 = num1.toString().split('.')[1].length;
        } catch (e) {
            baseNum1 = 0;
        }
        try {
            baseNum2 = num2.toString().split('.')[1].length;
        } catch (e) {
            baseNum2 = 0;
        }
        baseNum = Math.pow(10, Math.max(baseNum1, baseNum2));
        return (num1 * baseNum + num2 * baseNum) / baseNum;
    },
    /**
     * 减法运算，避免数据相减小数点后产生多位数和计算精度损失
     * @param {Number} num1 - 键，必传
     * @param {Number} num1 - 值，必传
     */
    sub(num1, num2) {
        let baseNum, baseNum1, baseNum2;
        let precision; // 精度
        try {
            baseNum1 = num1.toString().split('.')[1].length;
        } catch (e) {
            baseNum1 = 0;
        }
        try {
            baseNum2 = num2.toString().split('.')[1].length;
        } catch (e) {
            baseNum2 = 0;
        }
        baseNum = Math.pow(10, Math.max(baseNum1, baseNum2));
        precision = baseNum1 >= baseNum2 ? baseNum1 : baseNum2;
        return ((num1 * baseNum - num2 * baseNum) / baseNum).toFixed(precision);
    },
    /**
     * 乘法运算，避免数据相乘小数点后产生多位数和计算精度损失
     * @param {Number} num1 - 键，必传
     * @param {Number} num1 - 值，必传
     */
    multi(num1, num2) {
        let baseNum = 0;
        try {
            baseNum += num1.toString().split('.')[1].length;
        } catch (e) {}
        try {
            baseNum += num2.toString().split('.')[1].length;
        } catch (e) {}
        return (
            (Number(num1.toString().replace('.', '')) *
                Number(num2.toString().replace('.', ''))) /
            Math.pow(10, baseNum)
        );
    },
    /**
     * 除法运算，避免数据相除小数点后产生多位数和计算精度损失
     * @param {Number} num1 - 键，必传
     * @param {Number} num1 - 值，必传
     */
    div(num1, num2) {
        let baseNum1 = 0,
            baseNum2 = 0;
        let baseNum3, baseNum4;
        try {
            baseNum1 = num1.toString().split('.')[1].length;
        } catch (e) {
            baseNum1 = 0;
        }
        try {
            baseNum2 = num2.toString().split('.')[1].length;
        } catch (e) {
            baseNum2 = 0;
        }

        baseNum3 = Number(num1.toString().replace('.', ''));
        baseNum4 = Number(num2.toString().replace('.', ''));
        return (baseNum3 / baseNum4) * Math.pow(10, baseNum2 - baseNum1);
    },
};

export const scrollBar = {
    /**
     * 判断Dom元素是否有滚动条
     * @param {node} el - Dom节点
     * @returns {Object} - 返回水平和垂直方向是否有工滚动条
     */
    hasScroll(el) {
        // test targets
        let elems = el ? [el] : [document.documentElement, document.body];
        let scrollX = false,
            scrollY = false;
        for (let i = 0, len = elems.length; i < len; i++) {
            let o = elems[i];
            // test horizontal
            let sl = o.scrollLeft;
            o.scrollLeft += sl > 0 ? -1 : 1;
            o.scrollLeft !== sl && (scrollX = scrollX || true);
            o.scrollLeft = sl;
            // test vertical
            let st = o.scrollTop;
            o.scrollTop += st > 0 ? -1 : 1;
            o.scrollTop !== st && (scrollY = scrollY || true);
            o.scrollTop = st;
        }

        return {
            scrollX: scrollX,
            scrollY: scrollY,
        };
    },

    /**
     * 获取元素滚动条可滚动区域宽度或高度
     * @returns {Number} - 返回滚动条宽度
     */
    getScrollAreaWidth(el) {
        let scrollXWidth = 0,
            scrollYHeith = 0;
        if (typeof el === 'undefined') {
            let scrollWidth =
                document.documentElement.scrollWidth || document.body.scrollWidth;
            let clientWidth =
                document.documentElement.clientWidth || document.body.clientWidth;
            let scrollHeight =
                document.documentElement.scrollHeight || document.body.scrollHeight;
            let clientHeight =
                document.documentElement.clientHeight || document.body.clientHeight;
            scrollXWidth = scrollWidth - clientWidth;
            scrollYHeith = scrollHeight - clientHeight;
        } else {
            if (el) {
                scrollXWidth = el.scrollWidth - el.clientWidth;
                scrollYHeith = el.scrollHeight - el.clientHeight;
            }
        }

        return {
            x: scrollXWidth,
            y: scrollYHeith,
        };
    },

    /**
     * 获取浏览器滚动条宽度
     * @returns {Number} - 返回滚动条宽度
     */
    getWidth() {
        let oP = document.createElement('p'),
            styles = {
                width: '100px',
                height: '100px',
                overflowY: 'scroll',
            },
            i,
            scrollBarWidth;
        for (i in styles) {
            oP.style[i] = styles[i];
        }
        document.body.appendChild(oP);
        scrollBarWidth = oP.offsetWidth - oP.clientWidth;
        oP.remove();
        return scrollBarWidth;
    },
};

/**
 * URL参数操作对象
 */
export const urlUtils = {
    // 获取url参数
    getQueryString: function(name, url) {
        url = url || window.location.search;
        let reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
        let r = url.substr(1).match(reg);
        if (r != null) {
            return unescape(r[2]);
        }
        return null;
    },
    // 对象转url参数
    toQueryPair: function(key, value) {
        if (typeof value === 'undefined') {
            return key;
        }
        return key + '=' + encodeURIComponent(value === null ? '' : String(value));
    },
    toQueryString: function(obj, joinStr) {
        joinStr = joinStr || '&';
        let ret = [];
        for (let key in obj) {
            key = encodeURIComponent(key);
            let values = obj[key];
            if (values && values.constructor === Array) {
                // 数组
                let queryValues = [];
                for (let i = 0, len = values.length, value; i < len; i++) {
                    value = values[i];
                    queryValues.push(this.toQueryPair(key, value));
                }
                ret = ret.concat(queryValues);
            } else {
                // 字符串
                ret.push(this.toQueryPair(key, values));
            }
        }
        return ret.join(joinStr);
    },
    // 添加URL参数
    updateURLParams: function(url, name, value) {
        let r = url || location.href;
        if (r) {
            value = encodeURIComponent(value);
            let reg = new RegExp('(^|)' + name + '=([^&]*)(|$)');
            let tmp = name + '=' + value;
            if (url.match(reg) !== null) {
                r = url.replace(reg, tmp);
            } else {
                if (url.match('[?]')) {
                    r = url + '&' + tmp;
                } else {
                    r = url + '?' + tmp;
                }
            }
        }
        return r;
    },
};

/**
 * 判断广告来源
 * @returns {Number} - 返回广告来源
 */
export const getAdSource = () => {
    let signInfo = cookieStore.get('sign');
    let source = 2;
    if (signInfo) {
        source = 1;
    } else if (browser.pc) {
        source = 2;
    } else if (browser.weixin) {
        source = 3;
    } else if (browser.phone) {
        source = 4;
    }
    return source;
};
// 时间戳转年月日
export const formatTime = (time) => {
    time = new Date(Number(time));
    let year = time.getFullYear();
    let month =
        time.getMonth() + 1 > 9 ? time.getMonth() + 1 : '0' + (time.getMonth() + 1);
    let day = time.getDate() > 9 ? time.getDate() : '0' + time.getDate();
    let hour = time.getHours() > 9 ? time.getHours() : '0' + time.getHours();
    let min = time.getMinutes() > 9 ? time.getMinutes() : '0' + time.getMinutes();
    return year + '.' + month + '.' + day + ' ' + hour + ':' + min;
};
/**base64转blob */
export const dataURLtoBlob = (dataurl) => {
    var arr = dataurl.split(','),
        mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]),
        n = bstr.length,
        u8arr = new Uint8Array(n);
    while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
    }
    return new Blob([u8arr], {
        type: mime,
    });
};
/**blob转base64 */
export const blobtoUrl = (blob) => {
    return new Promise((resolve) => {
        let fileReader = new FileReader();
        fileReader.onload = function(e) {
            let base64 = e.target.result;
            resolve(base64);
        };
        fileReader.readAsDataURL(blob);
    });
};
/**字号和px转换 */
export const wordFontSizeToPx = (font) => {
    const fontMap = {
        0: 58,
        1: 48,
        2: 35,
        3: 32,
        4: 29,
        5: 24,
        6: 22,
        7: 20,
        8: 18,
        9: 16,
        10: 14,
        11: 12,
    };
    return fontMap[font];
};