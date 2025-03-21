import coordtransform from 'coordtransform';

/**
 * BD09 坐标系转 WGS84 坐标系
 */
export const bd09ToWgs84 = (lat: number, lng: number): [lng: number, lat: number] => {
    const [x, y] = coordtransform.bd09togcj02(lat, lng);

    return coordtransform.gcj02towgs84(x, y);
};

/**
 * 城市
 */
export default [
    // 北京房山
    {
        lat: bd09ToWgs84(116.0982, 39.6562)[1],
        lng: bd09ToWgs84(116.0982, 39.6562)[0],
        // 标签
        label: 'Fangshan, Beijing',
        label_zhCN: '北京房山',
    },
    // 山东淄博
    {
        lat: bd09ToWgs84(118.0624, 36.8211)[1],
        lng: bd09ToWgs84(118.0624, 36.8211)[0],
        // 标签
        label: 'Zibo, Shandong',
        label_zhCN: '山东淄博',
    },
    // 江苏溧阳
    {
        lat: bd09ToWgs84(119.491, 31.4253)[1],
        lng: bd09ToWgs84(119.491, 31.4253)[0],
        // 标签
        label: 'Liyang, Jiangsu',
        label_zhCN: '江苏溧阳',
        // 方向
        orientation: 'top',
    },
    // 浙江湖州
    {
        lat: bd09ToWgs84(120.0958, 30.9019)[1],
        lng: bd09ToWgs84(120.0958, 30.9019)[0],
        // 标签
        label: 'Huzhou, Zhejiang',
        label_zhCN: '浙江湖州',
        // 方向
        orientation: 'right',
    },
    // 浙江绍兴
    {
        lat: bd09ToWgs84(120.591, 30.0596)[1],
        lng: bd09ToWgs84(120.591, 30.0596)[0],
        // 标签
        label: 'Shaoxing, Zhejiang',
        label_zhCN: '浙江绍兴',
    },
    // 广东深圳
    {
        lat: bd09ToWgs84(114.0646, 22.5487)[1],
        lng: bd09ToWgs84(114.0646, 22.5487)[0],
        // 标签
        label: 'Shenzhen, Guangdong',
        label_zhCN: '广东深圳',
    },
    // 匈牙利布达佩斯
    {
        lat: bd09ToWgs84(19.0421, 47.4979)[1],
        lng: bd09ToWgs84(19.0421, 47.4979)[0],
        // 标签
        label: 'Budapest, Hungary',
        label_zhCN: '匈牙利布达佩斯',
    },
    // 泰国曼谷
    {
        lat: bd09ToWgs84(100.5018, 13.7563)[1],
        lng: bd09ToWgs84(100.5018, 13.7563)[0],
        // 标签
        label: 'Bangkok, Thailand',
        label_zhCN: '泰国曼谷',
    },
    // 澳大利亚堪培拉
    {
        lat: bd09ToWgs84(149.13, -35.2809)[1],
        lng: bd09ToWgs84(149.13, -35.2809)[0],
        // 标签
        label: 'Canberra, Australia',
        label_zhCN: '澳大利亚堪培拉',
    },
];
