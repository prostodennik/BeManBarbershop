import axios from 'axios';

const getDataFromYclients = async () => {
    const url = 'https://api.yclients.com/api/v1/company/932723/staff';
    const headers = {
        Accept: 'application/vnd.api.v2+json',
        Authorization: 'Bearer pybmjppb2t394rk67cy4, User 2c45580b087556463746fc6ac4cdcec0',
    };

    try {
        const response = await axios.get(url, { headers });
        console.log(response.data);
    } catch (error) {
        console.error('Ошибка при получении данных:', error);
    }
};

getDataFromYclients();

const Masters = () => {
    return <div>Masters</div>;
};

export default Masters;
