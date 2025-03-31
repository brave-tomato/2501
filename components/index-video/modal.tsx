'use client';

import { Flex, Modal } from 'antd';
import classNames from 'classnames';
import dayjs from 'dayjs';
import Link from 'next/link';
import { FC, useState } from 'react';
import AspectRatio from '../aspect-ratio';

/**
 * 站会信息
 */
const MessageModal = () => {
    // 使用 useState 钩子来管理模态框的显示和隐藏状态
    const [isModalOpen, setIsModalOpen] = useState(false);

    // 点击按钮时显示模态框
    const showModal = () => {
        setIsModalOpen(true);
    };

    // 点击模态框的确定按钮时隐藏模态框
    const handleOk = () => {
        setIsModalOpen(false);
    };

    // 点击模态框的取消按钮时隐藏模态框
    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const list = [
        {
            id: 1,
            icon: '/images/indexpage/icon_gaoxin@2x.png',
            content: '高新技术',
        },
        {
            id: 2,
            icon: '/images/indexpage/icon_date@2x.png',
            content: dayjs().format('YYYY.MM.DD'),
        },
        {
            id: 3,
            icon: '/images/indexpage/icon_address@2x.png',
            content: '北京市展览馆',
        },
    ];
    return (
        <div>
            <Flex
                align="center"
                justify="space-around"
                className="cursor-pointer"
                style={{
                    backgroundImage: `url('/images/indexpage/zhanhuixinxi@2x.png' )`,
                    backgroundSize: 'cover',
                    width: 120,
                    height: 120,
                    borderRadius: '100%',
                }}
                onClick={showModal}
            >
                <Flex
                    align="center"
                    justify="space-around"
                    style={{ fontSize: '2rem', width: '60%', height: '80%', color: '#fff', textAlign: 'center' }}
                >
                    展会信息
                </Flex>
            </Flex>

            {/* 模态框组件，根据 isModalOpen 的值决定是否显示 */}
            <Modal
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
                width={650}
                styles={{
                    content: {
                        backgroundColor: 'transparent',
                        boxShadow: 'none',
                        width: 650,
                        padding: 0,
                    },
                }}
                footer={null}
                closeIcon={<img src="/images/indexpage/icon_close@2x.png" style={{ maxWidth: 35, height: 35 }} />}
            >
                <div className="modal-body-wrapper">
                    {/* 背景图 */}
                    <AspectRatio ratio={1301 / 814}>
                        <img src="/images/indexpage/h5/modal_bg@2x.png" style={{ maxWidth: 650 }} />
                    </AspectRatio>
                    <Flex className="modal-body-text-wrapper" vertical gap={24}>
                        {/* 标题、副标题 */}
                        <Flex justify="space-around" vertical>
                            <div className="text-3xl">2025年度</div>
                            <div className="text-4xl">CHINAPLAS国际橡塑展</div>
                        </Flex>
                        {/* 展示icon */}
                        <Flex gap={50}>
                            {list.map((item) => (
                                <Flex align="center" gap={8} key={item.id}>
                                    <img src={item.icon} style={{ maxWidth: 14, height: 14 }} />
                                    <Flex>{item.content}</Flex>
                                </Flex>
                            ))}
                        </Flex>
                    </Flex>
                    {/* 联系我们 */}
                    <Flex className="link-us" gap={8} justify="center">
                        <img
                            src="/images/indexpage/icon_lianxiwomen@2x.png"
                            className="w-6 h-6 "
                            style={{ maxWidth: 24, height: 24 }}
                        />
                        <Link href={'/contact-us'} className="hover:text-customblue">
                            联系我们
                        </Link>
                    </Flex>
                </div>
            </Modal>
        </div>
    );
};

export default MessageModal;
