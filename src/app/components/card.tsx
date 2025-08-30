export const Card = ({ children }: { children: React.ReactNode }) => {
    const cardStyle= {
        padding: '100px',
        margin: '10px',
        border: '1px solid #ccc',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    };
    
    return <div style={cardStyle}>{children}</div>;
    
}