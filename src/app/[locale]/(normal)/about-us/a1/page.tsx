import { Flex, Space } from 'antd';

/**
 * Components
 */
import AspectRatio from '@/components/aspect-ratio';

/**
 * Styles
 */
import Link from 'next/link';
import styles from './styles.module.scss';

/**
 * Constants
 */
const links = [
    [
        {
            text: '供应商行为准则',
            href: '/static/about-us/a1/11.pdf',
        },
        {
            text: '申诉机制',
            href: '/static/about-us/a1/12.pdf',
        },
        {
            text: '尽职调查政策',
            href: '/static/about-us/a1/13.pdf',
        },
        {
            text: '尽职调查报告',
            href: '/static/about-us/a1/14.pdf',
        },
    ],
    [
        {
            text: 'Supplier Sustainability | PPG',
            href: '/static/about-us/a1/21.pdf',
        },
        {
            text: '国际劳工标准与人权 | International Labour Organization',
            href: '/static/about-us/a1/22.pdf',
        },
        {
            text: '人权_联合国全球契约组织|United Nations Global Compact',
            href: '/static/about-us/a1/23.pdf',
        },
        {
            text: '环境_联合国全球契约组织|United Nations Global Compact',
            href: '/static/about-us/a1/24.pdf',
        },
    ],
];

export default () => {
    return (
        <div className="mw-1920" style={{ backgroundColor: '#f7f7f7' }}>
            <AspectRatio ratio={1920 / 560}>
                <img
                    alt=""
                    src="/static/about-us/a1/banner.jpg"
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                    }}
                />

                <div className={styles['banner-text']}>携手责任同行，共创绿色供应链美好未来</div>
            </AspectRatio>

            <div className={styles.content}>
                <div className={styles.description}>
                    卫蓝新能源建立覆盖全链条的供应链尽职调查体系，确保符合联合国《工商与人权指导原则》及国际劳工组织（ILO）核心公约要求，通过针对环境保护、劳工权益（含童工禁止、职业健康安全）、商业道德等关键领域建立全维度风险筛查清单并结合行业特性与地域合规要求开展分级评估的风险识别与评估机制，通过定期现场审计、数据报送核查及舆情监测动态追踪供应商在碳排放管理、劳工福利、反贿赂等方面执行情况并针对不合规项启动整改督导程序的持续监控与改进机制，以及建立供应链尽责管理信息披露机制、定期向利益相关方公示尽职调查成果并接受社会监督的透明化治理机制，致力于构建兼具韧性与责任的供应链生态，通过全流程管控推动商业价值与社会价值的协同发展。
                </div>

                {links[0].map((item) => (
                    <div className={styles.item} key={item.href}>
                        <Flex justify="space-between">
                            <Space size={24}>
                                <img alt="" className={styles['item-icon']} src="/static/about-us/a1/icon-1.svg" />

                                <div className={styles['item-title']}>{item.text}</div>
                            </Space>

                            <Link href={item.href} target="_blank">
                                <Space size={24}>
                                    <img alt="" className={styles['item-icon2']} src="/static/about-us/a1/icon-2.svg" />

                                    <div className={styles['item-title2']}>下载报告</div>
                                </Space>
                            </Link>
                        </Flex>
                    </div>
                ))}

                <div className={styles.title}>国际指南</div>

                {links[1].map((item) => (
                    <div className={styles.item} key={item.href}>
                        <Flex justify="space-between">
                            <Space size={24}>
                                <img alt="" className={styles['item-icon']} src="/static/about-us/a1/icon-1.svg" />

                                <div className={styles['item-title']}>{item.text}</div>
                            </Space>

                            <Link href={item.href} target="_blank">
                                <Space size={24}>
                                    <img alt="" className={styles['item-icon2']} src="/static/about-us/a1/icon-2.svg" />

                                    <div className={styles['item-title2']}>下载报告</div>
                                </Space>
                            </Link>
                        </Flex>
                    </div>
                ))}
            </div>
        </div>
    );
};
