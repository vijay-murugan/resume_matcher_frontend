import React, { useEffect, useState } from 'react';

type FePageResponse = {
    match_percentage: number;
    missing_skills: string[];
    recommendations: string[];
};

interface FinalPageProps {
    result: FePageResponse | null;
}

const FinalPage: React.FC<FinalPageProps> = ({ result }) => {
    if (!result) return <div>No result data.</div>;

    return (
        <div style={{ maxWidth: 600, margin: '2rem auto', padding: '1rem', border: '1px solid #ddd', borderRadius: 8 }}>
            <h2>Resume Match Results</h2>
            <p>
                <strong>Match Percentage:</strong> {result.match_percentage}%
            </p>
            <div>
                <strong>Missing Skills:</strong>
                {result.missing_skills.length === 0 ? (
                    <span> None</span>
                ) : (
                    <ul>
                        {result.missing_skills.map((skill, idx) => (
                            <li key={idx}>{skill}</li>
                        ))}
                    </ul>
                )}
            </div>
            <div>
                <strong>Recommendations:</strong>
                <ul>
                    {result.recommendations.map((rec, idx) => (
                        <li key={idx}>{rec}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default FinalPage;