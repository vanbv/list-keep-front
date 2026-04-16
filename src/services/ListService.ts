import type { ListCreateDto } from '@/models/ListCreateDto'
import type { ListUpdateDto } from '@/models/ListUpdateDto'
import type { ListDto } from '@/models/ListDto'
import axios from 'axios'

class ListService {
  public async create (list: ListCreateDto): Promise<ListDto> {
    const response = await axios.post<ListDto>('/api/v1/lists', list)
    return response.data
  }

  public async update (id: string, list: ListUpdateDto): Promise<ListDto> {
    const response = await axios.put<ListDto>(`/api/v1/lists/${id}`, list)
    return response.data
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
