export interface IShip {
    name: string;
    model: string;
    manufacturer: string;
    cost_in_credits: string;
    length: string;
    max_atmosphering_speed: string;
    crew: string;
    passengers: string;
    cargo_capacity: string;
    consumables: string;
    hyperdrive_rating: string;
    MGLT: string;
    starship_class: string;
    pilots: any[];
    films: any[];
    created: string;
    edited: string;
    url: string;
}

export class Ship {
    name: string;
    model: string;
    manufacturer: string;
    cost_in_credits: string;
    length: string;
    max_atmosphering_speed: string;
    crew: string;
    passengers: string;
    cargo_capacity: string;
    consumables: string;
    hyperdrive_rating: string;
    MGLT: string;
    starship_class: string;
    pilots: any[];
    films: any[];
    created: string;
    edited: string;
    url: string;
    img: string;

    constructor(res: IShip) {
     	if(res) {
			this.name = res.name || '';
			this.model = res.model || '';
			this.manufacturer = res.manufacturer || '';
			this.cost_in_credits = res.cost_in_credits || '';
			this.length = res.length || '';
			this.max_atmosphering_speed = res.max_atmosphering_speed || '';
			this.crew = res.crew || '';
			this.passengers = res.passengers || '';
			this.cargo_capacity = res.cargo_capacity || '';
			this.consumables = res.consumables || '';
			this.hyperdrive_rating = res.hyperdrive_rating || '';
			this.MGLT = res.MGLT || '';
			this.starship_class = res.starship_class || '';
			this.pilots = res.pilots || [];
			this.films = res.films || [];
			this.created = res.created || '';
			this.edited = res.edited || '';
			this.url = res.url || '';
			let idImg = res.url.split('/')[res.url.split('/').length -2];
			this.img =  `https://starwars-visualguide.com/assets/img/starships/${idImg}.jpg`
    	}
	}
	

} 