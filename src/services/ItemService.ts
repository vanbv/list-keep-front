import type { ItemDto } from '@/models/ItemDto'
import axios from 'axios'
import type { ItemUpdateDto } from '@/models/ItemUpdateDto'

class ItemService {
  public async getAll (listId: string): Promise<ItemDto[]> {
    const response = await axios.get<ItemDto[]>(`/api/v1/lists/${listId}/items`)
    return response.data
  }


  public async update (listId: string, id: string, item: ItemUpdateDto): Promise<void> {
    await axios.put(`/api/v1/lists/${listId}/items/${id}`, item)
  }
}

export const itemService = new ItemService()
