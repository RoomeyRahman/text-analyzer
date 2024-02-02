import React from 'react';

interface AnalyticsData {
    wordCount: number;
    characterCount: number;
    paragraphCount: number;
    sentenceCount: number;
    longestWord: string[];
}

interface AnalyticsDisplayProps {
    data: AnalyticsData;
}

const AnalyticsDisplay: React.FC<AnalyticsDisplayProps> = ({ data }) => {
    return (
        <div className="mt-8 border rounded p-4">
            <h2 className="text-lg font-semibold mb-4">Analysis Results</h2>
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <p className="font-semibold">Word Count:</p>
                    <p>{data.wordCount}</p>
                </div>
                <div>
                    <p className="font-semibold">Character Count:</p>
                    <p>{data.characterCount}</p>
                </div>
                <div>
                    <p className="font-semibold">Paragraph Count:</p>
                    <p>{data.paragraphCount}</p>
                </div>
                <div>
                    <p className="font-semibold">Sentence Count:</p>
                    <p>{data.sentenceCount}</p>
                </div>
                <div className="col-span-2">
                    <p className="font-semibold">Longest Word:</p>
                    <p>{data.longestWord?.join(', ')}</p>
                </div>
            </div>
        </div>
    );
};

export default AnalyticsDisplay;
