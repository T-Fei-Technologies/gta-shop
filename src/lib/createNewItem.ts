import { v4 as uuidv4 } from 'uuid';
import type { Item } from '$lib/stores/AppStore';

export const createNewItem = (): Item => ({
	id: uuidv4(),
	name: '',
	price: 0
});
