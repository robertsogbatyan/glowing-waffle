import {SortOrder} from '../../data-structures';
import {BaseWAuthClient} from './BaseWAuthClient';

type TListDTO<TDTO> = {
  data: TDTO[];
  totalCount: number;
};

function BaseWCRUDClient<TDTO, TNewDTO>() {
  class BaseWCRUDClient extends BaseWAuthClient {
    static async getAll(
      page?: number,
      itemsPerPage?: number,
      searchTerm?: string,
      sortBy?: string,
      sortOrder?: SortOrder
    ): Promise<TListDTO<TDTO>> {
      const queryParams: Record<string, unknown> = {
        page,
        limit: itemsPerPage,
        search: searchTerm,
        sortBy,
        order: sortOrder,
      };
      const response = await this.axiosInstance.get('/', {
        params: queryParams,
      });

      return response.data;
    }

    static async get(id: string): Promise<TDTO> {
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

    static async delete(id: string): Promise<string> {
      await this.axiosInstance.delete(`/${id}`);

      return id;
    }
  }

  return BaseWCRUDClient;
}

export {BaseWCRUDClient, type TListDTO};
