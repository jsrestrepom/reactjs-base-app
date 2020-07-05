import axios from 'axios';


class AppService {

  executeHealthCheckService() {
    return axios.get('http://localhost:8080/app/health-check');
  }

}

export default new AppService();
