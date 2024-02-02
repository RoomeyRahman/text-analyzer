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
    console.log("Analytics display: ", data)
    return (
        <div className="mt-8">
            <h2 className="text-lg font-semibold mb-2">Analysis Results</h2>
            <p>Word Count: {data.wordCount}</p>
            <p>Character Count: {data.characterCount}</p>
            <p>Paragraph Count: {data.paragraphCount}</p>
            <p>Sentence Count: {data.sentenceCount}</p>
            <p>Longest Word: {data.longestWord?.join(', ')}</p>
        </div>
    );
};

export default AnalyticsDisplay;
