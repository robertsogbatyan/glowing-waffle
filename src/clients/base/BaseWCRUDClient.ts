import {BaseWAuthClient} from './BaseWAuthClient';

function BaseWCRUDClient<TDTO, TNewDTO>() {
  class BaseWCRUDClient extends BaseWAuthClient {
    static async getAll(): Promise<TDTO[]> {
      const response = await this.axiosInstance.get('/');

      return response.data;
    }

    static async get(id: number): Promise<TDTO> {
      const response = await this.axiosInstance.get(`/${id}`);

      return response.data;
    }

    static async create(dto: TNewDTO): Promise<TDTO> {
      const response = await this.axiosInstance.post('/', dto);

      return response.data;
    }

    static async update(dto: TDTO): Promise<TDTO> {
      const response = await this.axiosInstance.put('/', dto);

      return response.data;
    }

    static async delete(id: number): Promise<number> {
      await this.axiosInstance.delete(`/${id}`);

      return id;
    }
  }

  return BaseWCRUDClient;
}

export {BaseWCRUDClient};
