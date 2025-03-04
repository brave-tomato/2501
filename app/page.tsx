'use client';

import { Button, Modal } from 'antd';
import { useState } from 'react';

/**
 * Styles
 */
import IndexVideo from '@/components/index-video';
import styles from './page.module.css';

const PageIndex = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
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
            <IndexVideo />
            <Button type="primary">没用的按钮</Button>

            <Button type="primary" onClick={showModal}>
                Open Modal
            </Button>

            <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Modal>
        </div>
    );
};

export default PageIndex;
