'use client';
/**
 * Styles
 */
import { Flex } from 'antd';
import { usePathname } from 'next/navigation';
import styles from './styles.module.scss';

const Footer: React.FC = () => {
    const pathname = usePathname();
    const shouldShowLine = pathname !== '/';

    return (
        <footer className={styles.footer}>
            {/* 分割线 */}
            {shouldShowLine && <div className={styles.line} />}

            <Flex justify="space-between">
                <Flex className={styles.gap1} vertical>
                    <img alt="logo" className={styles.logo} src="/images/footer/logo.png" />

                    <Flex className={styles.gap4} vertical>
                        <span>网站：http://www.welion.tech</span>

                        <span>公司邮箱：info@welion.cn</span>

                        <span>简历邮箱：job@welion.cn</span>
                    </Flex>
                </Flex>

                <Flex className={styles.gap2}>
                    <Flex className={styles.gap3} vertical>
                        <div className={styles.title}>关注我们</div>

                        <Flex className={styles.gap4} vertical>
                            <span>企业文化</span>

                            <span>公司简介</span>

                            <span>全球布局</span>

                            <span>可持续发展</span>
                        </Flex>
                    </Flex>

                    <Flex className={styles.gap3} vertical>
                        <div className={styles.title}>固态电池研发与创新</div>

                        <Flex className={styles.gap4} vertical>
                            <span>固态电池研发</span>

                            <span>固态电池制造</span>
                        </Flex>
                    </Flex>

                    <Flex className={styles.gap3} vertical>
                        <div className={styles.title}>应用与解决方案</div>

                        <Flex className={styles.gap4} vertical>
                            <span>动力类应用</span>

                            <span>低空经济类应用</span>

                            <span>储能应用</span>
                        </Flex>
                    </Flex>

                    <Flex className={styles.gap3} vertical>
                        <div className={styles.title}>新闻媒体</div>

                        <Flex className={styles.gap4} vertical>
                            <span>新闻资讯</span>

                            <span>综合要闻</span>

                            <span>企业动态</span>

                            <span>时事热点</span>
                        </Flex>
                    </Flex>

                    <Flex className={styles.gap3} vertical>
                        <div className={styles.title}>联系我们</div>

                        <Flex className={styles.gap4} vertical>
                            <span>联系我们</span>
                        </Flex>
                    </Flex>

                    <Flex className={styles.gap3} vertical>
                        <div className={styles.title}>人才招聘</div>

                        <Flex className={styles.gap4} vertical>
                            <span>社会招聘</span>

                            <span>校园招聘</span>
                        </Flex>
                    </Flex>
                </Flex>

                <img alt="qrcode" className={styles.qrcode} src="/images/footer/qrcode.jpg" />
            </Flex>
        </footer>
    );
};

export default Footer;
