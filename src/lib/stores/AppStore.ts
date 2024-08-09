import { writable } from 'svelte/store';


export type Item = {
	id: string;
	name: string;
	price: number;
};

export type AppStore = {
	Items: Item[];
	percentage: number;
};

export const AppStore = writable<AppStore>({
	Items: [],
	percentage: 15,
});
