import type { ListCreateDto } from '@/models/ListCreateDto'
import type { ListDto } from '@/models/ListDto'
import axios from 'axios'

class ListService {
  public async create (list: ListCreateDto): Promise<void> {
    await axios.post('/api/v1/lists', list)
  }

  public async getAll (): Promise<ListDto[]> {
    const response = await axios.get<ListDto[]>('/api/v1/lists')
    return response.data
  }

  public async get (id: string): Promise<ListDto> {
    const response = await axios.get<ListDto>(`/api/v1/lists/${id}`)
    return response.data
  }
}

export const listService = new ListService()
