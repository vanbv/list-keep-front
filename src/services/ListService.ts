import type { ListCreateDto } from '@/models/ListCreateDto';
import axios from 'axios';

class ListService {
  public async create (list: ListCreateDto): Promise<void> {
    await axios.post('/api/v1/lists', list)
  }
}

export const listService = new ListService();
