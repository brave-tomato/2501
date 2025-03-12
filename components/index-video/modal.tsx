'use client';
import { ICustomComponentProps } from '@/types';
import { Flex, Modal } from 'antd';
import classNames from 'classnames';
import dayjs from 'dayjs';
import Link from 'next/link';
import { FC, useState } from 'react';

/**
 * 站会信息
 */
const MessageModal: FC<ICustomComponentProps> = ({ className }) => {
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
        <div className={classNames('', className)}>
            <Flex
                align="center"
                justify="space-around"
                className="cursor-pointer"
                style={{
                    backgroundImage: `url('/images/indexpage/zhanhuixinxi@2x.png' )`,
                    backgroundSize: 'cover',
                    width: 200,
                    height: 200,
                    borderRadius: '100%',
                }}
                onClick={showModal}
            >
                <Flex
                    align="center"
                    justify="space-around"
                    style={{ fontSize: '4rem', width: '80%', height: '80%', color: '#fff', textAlign: 'center' }}
                >
                    展会信息
                </Flex>
            </Flex>

            {/* 模态框组件，根据 isModalOpen 的值决定是否显示 */}
            {/* <AspectRatio ratio={82 / 82}></AspectRatio> */}
            <Modal
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
                width={'auto'}
                classNames={{
                    content: classNames('max-w-[650px] absolut  left-1/2 -translate-x-1/2 translate-y-1/3'),
                }}
                styles={{
                    content: {
                        backgroundColor: 'transparent',
                        boxShadow: 'none',
                    },
                }}
                footer={null}
                closeIcon={
                    <img
                        src="/images/indexpage/icon_close@2x.png"
                        className="w-[35px] h-[35px]"
                        style={{ maxWidth: 35 }}
                    />
                }
            >
                <div className="relative">
                    {/* 背景图 */}
                    <img
                        src="/images/indexpage/h5/modal_bg@2x.png"
                        style={{ maxWidth: 650 }}
                        className="bg-transparent "
                    />
                    <div className="absolute top-0 left-0 text-white pt-20 flex flex-col pl-10 w-full">
                        {/* 标题、副标题 */}
                        <div className="flex flex-col  tracking-wide">
                            <div className=" text-3xl">2025年度</div>
                            <div className="text-4xl">CHINAPLAS国际橡塑展</div>
                        </div>
                        <div className="flex w-full mt-9 gap-14">
                            {list.map((item) => (
                                <div key={item.id} className="flex gap-2 items-center">
                                    <img src={item.icon} className="w-[14px] h-[14px]" style={{ maxWidth: 14 }} />
                                    <div className="flex">{item.content}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* 联系我们 */}
                    <div className=" flex justify-center items-center gap-2 absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/4">
                        <img
                            src="/images/indexpage/icon_lianxiwomen@2x.png"
                            className="w-6 h-6 "
                            style={{ maxWidth: 24 }}
                        />
                        <Link href={'/contact-us'} className="hover:text-customblue">
                            联系我们
                        </Link>
                    </div>
                </div>
            </Modal>
        </div>
    );
};

export default MessageModal;
