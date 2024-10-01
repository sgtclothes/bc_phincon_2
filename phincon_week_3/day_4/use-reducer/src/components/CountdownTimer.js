import FlipClockCountdown from "@leenguyen/react-flip-clock-countdown";
import "@leenguyen/react-flip-clock-countdown/dist/index.css";
const CountdownTimer = () => {
    return (
        <>
        <div className="parent-container">
            <div className="container">
                <FlipClockCountdown 
                to={new Date().getTime() + 24 * 3600 * 1000 + 5000} 
                labelStyle={{ fontSize: 14, fontWeight: 500, textTransform: 'uppercase', color:'white' }}
                digitBlockStyle={{ width: 50, height: 70, fontSize: 60, color:'hsl(345, 95%, 68%)' }}
                />;
            </div>
        </div>
        </>
    );
};

export default CountdownTimer;