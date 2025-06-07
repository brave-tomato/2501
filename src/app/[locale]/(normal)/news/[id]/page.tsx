import { Col, Row, Space } from 'antd';
import dayjs from 'dayjs';

/**
 * Components
 */
import HeroSection from '@/components/hero-section';
import TitleSection from '@/components/title-section';

/**
 * Styles
 */
import Link from 'next/link';
import styles from './styles.module.scss';

/**
 * Constants
 */
export async function generateStaticParams() {
    const data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/v1/news?size=9999`).then((res) => res.json());

    return ['en', 'zh'].flatMap((locale) => {
        return data.data.map((news: any) => {
            return {
                id: news.id.toString(),
                locale,
            };
        });
    });
}

export default async ({ params }: any) => {
    /**
     * Params
     */
    const { id, locale } = await params;

    /**
     * Requests
     */
    const { data } = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/v1/news/${id}`).then((res) => res.json());

    console.log('data :>> ', data);

    return (
        <div>
            <HeroSection src="/images/hero-section/news-media@2x.png">
                <TitleSection title="新闻媒体" />
            </HeroSection>

            <div className="mw-1920" style={{ padding: '104px 210px 0' }}>
                <Row gutter={70}>
                    <Col span={16}>
                        <div className={styles.title}>{data.title}</div>

                        <Space className={styles.description}>
                            <div className={styles.date}>时间：{dayjs(data.created_at).format('YYYY-MM-DD')}</div>
                        </Space>

                        <div className={styles.content} dangerouslySetInnerHTML={{ __html: data.content }} />
                    </Col>

                    <Col span={8}>
                        <div className={styles.related}>
                            <div className={styles.info}>上一条</div>

                            {data.prev ? (
                                <>
                                    <Link className={styles.tit} href={`/${locale}/news/${data.prev.id}`}>
                                        {data.prev.title}
                                    </Link>

                                    <div className={styles.date}>
                                        {dayjs(data.prev.created_at).format('YYYY-MM-DD')}
                                    </div>
                                </>
                            ) : (
                                <div>没有上一条</div>
                            )}
                        </div>

                        <div className={styles.related}>
                            <div className={styles.info}>下一条</div>

                            {data.next ? (
                                <>
                                    <Link className={styles.tit} href={`/${locale}/news/${data.next.id}`}>
                                        {data.next.title}
                                    </Link>

                                    <div className={styles.date}>
                                        {dayjs(data.next.created_at).format('YYYY-MM-DD')}
                                    </div>
                                </>
                            ) : (
                                <div>没有下一条</div>
                            )}
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    );
};
