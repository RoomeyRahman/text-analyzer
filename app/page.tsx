"use client";
import React, { useState } from 'react';
import { Upload, Button, message, Input, Tabs } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { analyze, analyzeFile } from "../services/text-analyser-api.service";
import dynamic from "next/dynamic";

const AnalyticsDisplay = dynamic(() => import('./components/Analytics'));

const { TextArea } = Input;
const { TabPane } = Tabs;

const App: React.FC = () => {
  const [text, setText] = useState<string>('');
  const [fileList, setFileList] = useState<any[]>([]);
  const [analyticsData, setAnalyticsData] = useState<any>(null);

  const handleSubmit = async () => {
    let response: any;
    if (text) {
      response = await analyze({
        data: {
          text: text
        },
      });
    } else if (fileList.length > 0) {
      const formData = new FormData();
      formData.append("file", fileList[0]);
      console.log(formData)
      response = await analyzeFile({
        data: formData
      });
    } else {
      message.error('Please enter text or upload a file.');
      return;
    }

    setAnalyticsData(response?.data);
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  const handleFileChange = ({ fileList }: { fileList: any[] }) => {
    console.log('File list:', fileList);

    // Ensure fileList is not empty and contains the file object
    if (fileList.length > 0 && fileList[0].originFileObj) {
      console.log('File object:', fileList[0].originFileObj);
      setFileList(fileList);
    } else {
      console.log('No file or invalid file object detected.');
    }
  };

  return (
    <div className="container mx-auto mt-8 px-4 max-w-3xl">
      <h1 className="text-3xl font-bold text-center mb-8">Text Analyzer</h1>
      <div className="max-w-lg mx-auto">
        <Tabs defaultActiveKey="text" centered>
          <TabPane tab="Text" key="text">
            <TextArea
              rows={6}
              value={text}
              onChange={handleChange}
              placeholder="Enter text here..."
              className="w-full mb-4"
              style={{ marginBottom: '1rem' }}
            />
          </TabPane>
          <TabPane tab="File" key="file">
            <Upload
              fileList={fileList}
              onChange={handleFileChange}
              beforeUpload={() => false}
              className="w-full mb-4"
              maxCount={1}
              accept=".pdf,.doc,.docx,.txt"
            >
              <Button icon={<UploadOutlined />}>Select File</Button>
            </Upload>
          </TabPane>
        </Tabs>
        <div className="text-center mb-8">
          <Button
            type="primary"
            onClick={handleSubmit}
            disabled={!text && fileList.length === 0}
          >
            Analyze Text
          </Button>
        </div>
        {analyticsData && <AnalyticsDisplay data={analyticsData} />}
      </div>
    </div>
  );
};

export default App;
