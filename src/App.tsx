import React from 'react';
import { Layout } from '@douyinfe/semi-ui';
import '@douyinfe/semi-ui/dist/css/semi.min.css';
import './styles/global.css';
import { Route, BrowserRouter as Router, Routes, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import Home from './pages/Home';
import Portal from './pages/Portal';
import Tools from './pages/Tools';
import Contact from './pages/Contact';
import QuotationHelper from './pages/QuotationHelper';

const { Content } = Layout;

// 简单的测试组件
const TestComponent = () => {
    return (
        <div style={{ 
            padding: '20px', 
            fontSize: '24px', 
            textAlign: 'center',
            background: '#f0f0f0',
            minHeight: '100vh'
        }}>
            <h1>测试页面加载成功！</h1>
            <p>如果你能看到这个页面，说明基本设置是正确的。</p>
        </div>
    );
};

function App() {
    // 全局处理 ResizeObserver 错误
    useEffect(() => {
        const handleError = (event: Event) => {
            if (event instanceof ErrorEvent && event.message.includes('ResizeObserver')) {
                event.stopPropagation();
                event.preventDefault();
            }
        };

        window.addEventListener('error', handleError as EventListener);
        return () => window.removeEventListener('error', handleError as EventListener);
    }, []);

    return (
        <Router>
            <Layout style={{ height: '100vh' }}>
                <Content>
                    <Routes>
                        <Route path="/" element={<Navigate to="/home" replace />} />
                        <Route path="/home" element={<Home />} />
                        <Route path="/portal" element={<Portal />} />
                        <Route path="/tools" element={<Tools />} />
                        <Route path="/tools/quotationhelper" element={<QuotationHelper />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/test" element={<TestComponent />} />
                        <Route path="*" element={<TestComponent />} />
                    </Routes>
                </Content>
            </Layout>
        </Router>
    );
}

export default App; 