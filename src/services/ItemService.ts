import type { ItemDto } from '@/models/ItemDto'
import axios from 'axios'

class ItemService {
  public async getAll (listId: string): Promise<ItemDto[]> {
    const response = await axios.get<ItemDto[]>(`/api/v1/lists/${listId}/items`)
    return response.data
  }
}

export const itemService = new ItemService()
