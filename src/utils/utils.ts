export const format = (format = 'yyyy-MM-dd', times: number | Date = Date.now()) => {
    const d = new Date(times);

    const o: { [key: string]: number } = {
        'M+': d.getMonth() + 1, //月份
        'd+': d.getDate(), //日
        'h+': d.getHours(), //小时
        'm+': d.getMinutes(), //分
        's+': d.getSeconds(), //秒
        'q+': Math.floor((d.getMonth() + 3) / 3), //季度
    };

    if (/(y+)/g.test(format)) format = format.replace(RegExp.$1, `${d.getFullYear()}`.substr(4 - RegExp.$1.length));

    for (const k in o) {
        if (new RegExp(`(${k})`).test(format)) {
            format = format.replace(
                RegExp.$1,
                RegExp.$1.length == 1 ? `${o[k]}` : `00${o[k]}`.substr(`${o[k]}`.length)
            );
        }
    }

    return format;
};
