'use client';
import { useI18n } from '@/locales/client';
import { Col, Flex, Modal, Row, Spin } from 'antd';

import styles from './styles.module.scss';

import { useEffect, useState } from 'react';

/**
 * 页面：人才招聘
 */
const JobPage = () => {
    /**
     * Hooks
     */
    const t = useI18n();

    /**
     * States
     */
    const [jobList, setJobList] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [selectedJob, setSelectedJob] = useState<any>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    // 获取职位数据
    useEffect(() => {
        const fetchJobs = async () => {
            try {
                setLoading(true);
                const apiUrl = process.env.NEXT_PUBLIC_API_URL || '';
                const response = await fetch(`${apiUrl}/v1/jobs?is_deleted=false&size=9999`);
                const data = await response.json();
                setJobList(data.data || data || []);
            } catch (error) {
                console.error('获取职位数据失败:', error);
                setJobList([]);
            } finally {
                setLoading(false);
            }
        };

        fetchJobs();
    }, []);

    const showModal = (job: any) => {
        setSelectedJob(job);
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <div>
            <div
                className={styles['job-wrapper']}
                style={{ maxWidth: 1200, margin: '0 auto', padding: '108px 108px 0' }}
            >
                {loading ? (
                    <div style={{ textAlign: 'center', padding: '100px 0' }}>
                        <Spin size="large" />
                    </div>
                ) : (
                    <Row
                        className={styles['job-list-wrapper']}
                        id="grid-job-playground"
                        gutter={[68, 68]}
                        justify="start"
                    >
                        {jobList.map((payload: any, index: number) => (
                            <Col key={payload.id || index} span={8}>
                                <div onClick={() => showModal(payload)}>
                                    <Flex className={styles['list-item-box']} gap={19} vertical>
                                        <Flex gap={25} vertical>
                                            {/* 标题 */}
                                            <div className={styles['job-title']}>
                                                {payload.title || payload.jobTitle}
                                            </div>
                                            {/* 小内容 */}
                                            <Flex className={styles.subtitle} justify="space-between">
                                                <Flex gap={4}>
                                                    <img
                                                        src="/images/job/icon_moeny@2x.png"
                                                        style={{ width: 14, height: 14 }}
                                                    />
                                                    <span>{payload.salary}</span>
                                                </Flex>
                                                <Flex gap={4}>
                                                    <img
                                                        src="/images/job/icon_xueli@2x.png"
                                                        style={{ width: 14, height: 14 }}
                                                    />
                                                    <span>{payload.education}</span>
                                                </Flex>
                                                <Flex gap={4}>
                                                    <img
                                                        src="/images/job/icon_address@2x.png"
                                                        style={{ width: 14, height: 14 }}
                                                    />
                                                    <span>{payload.location}</span>
                                                </Flex>
                                            </Flex>
                                        </Flex>
                                        {/* 职位描述 */}
                                        <Flex className={styles['list-item-content-box']} gap={18} vertical>
                                            <div className={styles['job-title2']}>职位描述</div>
                                            <div
                                                className={styles['content']}
                                                dangerouslySetInnerHTML={{ __html: payload.description }}
                                            />
                                        </Flex>
                                        <Flex justify="end">
                                            <img
                                                className="cursor-pointer"
                                                src="/images/job/icon_more@2x.png"
                                                style={{ width: 38, height: 38 }}
                                            />
                                        </Flex>
                                    </Flex>
                                </div>
                            </Col>
                        ))}
                    </Row>
                )}
            </div>

            {/* modal */}
            <Modal
                title=""
                closeIcon={null}
                footer={null}
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
                width={1215}
            >
                <div style={{ padding: 48 }}>
                    <Flex className={styles['modal-wrapper']} vertical>
                        {/* 标题 */}
                        <div className={styles.title}>{selectedJob?.title || selectedJob?.jobTitle || '职位详情'}</div>
                        <div className={styles.line}></div>
                        <Flex gap={32} vertical>
                            <Row>
                                <Col span={2}>
                                    <div className={styles.label}>工作地点</div>
                                </Col>
                                <Col span={1}></Col>
                                <Col span={21}>
                                    <div className={styles['label-content']}>{selectedJob?.location || '待定'}</div>
                                </Col>
                            </Row>

                            <Row>
                                <Col span={2}>
                                    <div className={styles.label}>职位描述</div>
                                </Col>
                                <Col span={1}></Col>
                                <Col span={21}>
                                    <div
                                        className={styles['label-content']}
                                        dangerouslySetInnerHTML={{ __html: selectedJob?.description || '暂无职位描述' }}
                                    />
                                </Col>
                            </Row>
                            <Row>
                                <Col span={2}>
                                    <div className={styles.label}>职位要求</div>
                                </Col>
                                <Col span={1}></Col>
                                <Col span={21}>
                                    <div
                                        className={styles['label-content']}
                                        dangerouslySetInnerHTML={{
                                            __html:
                                                selectedJob?.requirements || selectedJob?.requirement || '暂无职位要求',
                                        }}
                                    />
                                </Col>
                            </Row>
                        </Flex>
                        {/* 邮箱 */}
                        <Flex className={styles['email-box']}>
                            <div className={styles.label}>简历投递邮箱：</div>
                            <div className={styles['label']}>{selectedJob?.email || 'job@welion.cn'}</div>
                        </Flex>
                    </Flex>
                </div>
            </Modal>
        </div>
    );
};

export default JobPage;
