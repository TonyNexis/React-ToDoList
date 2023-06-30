import './app-info.css';

const AppInfo = (props) => {
    const {data} = props;
    const employersCounter = data.length;
    const increaseCounter = data.filter(elem => elem.increase).length;

    return (
        <div className="app-info">
            <h1>Учет сотрудников в компании Ninobot</h1>
            <h2>Общее число сотрудников: {employersCounter}  </h2>
            <h2>Премию получат: {increaseCounter} </h2>
        </div>
    );
}

export default AppInfo;