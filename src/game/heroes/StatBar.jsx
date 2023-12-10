import './statbar.moduel.css';

const StatBar = (props) => {
    const { min = 0, max = 100, color = "red", progress = 0 } = props;
    const validProgress = Math.min(max, Math.max(min, progress));

    const barStyle = {
        height: `${validProgress}%`, // this now controls the filled height of the bar
        backgroundColor: color || '#4caf50' // default color is green if no color prop is passed
      };

    return (
        <div className="progress-container">
            <div className="progress-bar" style={barStyle} />
        </div>
    );
};

export default StatBar;
